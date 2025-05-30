use candid::Principal;
use std::collections::HashMap;

type TokenId = u64;

//#[derive(Default)]
struct NFT {
    owner: Principal,
    metadata: String,
}

thread_local! {
    static NFT_STORAGE: std::cell::RefCell<HashMap<TokenId, NFT>> = std::cell::RefCell::new(HashMap::new());
    static TOKEN_COUNTER: std::cell::RefCell<TokenId> = std::cell::RefCell::new(0);
}

#[ic_cdk::update]
fn mint_profile_nft(name: String) -> TokenId {
    let caller = ic_cdk::caller();
    let metadata = format!("Profile NFT for {}", name);

    TOKEN_COUNTER.with(|counter| {
        let mut id = counter.borrow_mut();
        *id += 1;

        let nft = NFT {
            owner: caller,
            metadata,
        };

        NFT_STORAGE.with(|storage| {
            storage.borrow_mut().insert(*id, nft);
        });

        *id
    })
}

#[ic_cdk::query]
fn get_owner(token_id: TokenId) -> Principal {
    NFT_STORAGE.with(|storage| {
        storage
            .borrow()
            .get(&token_id)
            .map(|nft| nft.owner)
            .unwrap_or(Principal::anonymous())
    })
}
