use ic_cdk_macros::{query, update};
use candid::{CandidType, Deserialize};
use std::collections::HashMap;

#[derive(Clone, CandidType, Deserialize)]
struct ProfileNFT {
    name: String,
    bio: String,
}

#[derive(Clone, CandidType, Deserialize)]
struct Course {
    id: u64,
    title: String,
    description: String,
}

#[derive(Clone, CandidType, Deserialize)]
struct VC {
    id: u64,
    credential: String,
}

// Global static state using `Option` to allow late initialization
static mut PROFILE_NFTS: Option<HashMap<String, ProfileNFT>> = None;
static mut COURSES: Option<Vec<Course>> = None;
static mut QUIZ_ANSWERS: Option<HashMap<String, Vec<u64>>> = None;
static mut VCS: Option<HashMap<String, Vec<VC>>> = None;

/// Initializes all global storages once if not already initialized
fn init_storage() {
    unsafe {
        PROFILE_NFTS.get_or_insert_with(HashMap::new);
        COURSES.get_or_insert_with(|| vec![
            Course {
                id: 1,
                title: "Blockchain Basics".to_string(),
                description: "Learn the basics of blockchain technology".to_string(),
            },
            Course {
                id: 2,
                title: "Intro to ICP".to_string(),
                description: "Introduction to Internet Computer Protocol".to_string(),
            },
        ]);
        QUIZ_ANSWERS.get_or_insert_with(HashMap::new);
        VCS.get_or_insert_with(HashMap::new);
    }
}

#[update]
fn mintProfileNFT(principal: String, name: String) -> bool {
    init_storage();
    unsafe {
        PROFILE_NFTS.as_mut().map(|nfts| {
            nfts.insert(principal, ProfileNFT { name, bio: "".to_string() });
            true
        }).unwrap_or(false)
    }
}

#[query]
fn getProfileNFT(principal: String) -> Option<ProfileNFT> {
    init_storage();
    unsafe {
        PROFILE_NFTS.as_ref()
            .and_then(|nfts| nfts.get(&principal).cloned())
    }
}

#[query]
fn getCourses() -> Vec<Course> {
    init_storage();
    unsafe { COURSES.clone().unwrap_or_default() }
}

#[update]
fn validateQuiz(principal: String, answers: Vec<u64>) -> bool {
    init_storage();
    unsafe {
        QUIZ_ANSWERS.as_mut().map(|q| {
            q.insert(principal, answers);
            true
        }).unwrap_or(false)
    }
}

#[update]
fn generateVC(principal: String, credential: String) -> bool {
    init_storage();
    unsafe {
        VCS.as_mut().map(|vcs| {
            let id = vcs.values().map(|v| v.len() as u64).max().unwrap_or(0) + 1;
            let vc = VC { id, credential };
            vcs.entry(principal).or_insert_with(Vec::new).push(vc);
            true
        }).unwrap_or(false)
    }
}

#[query]
fn getVCs(principal: String) -> Vec<VC> {
    init_storage();
    unsafe {
        VCS.as_ref()
            .and_then(|vcs| vcs.get(&principal).cloned())
            .unwrap_or_default()
    }
}
