import React, { useEffect, useState } from "react";
//import { profile_nft_backend } from "../../declarations/profile_nft_backend";
import { getPrincipalId } from "../auth/auth";
import "./Dashboard.scss";

const Dashboard = () => {
  const [principal, setPrincipal] = useState(null);
  const [profile, setProfile] = useState(null);
  const [courses, setCourses] = useState([]);
  const [vcs, setVCs] = useState([]);
  const [reputation, setReputation] = useState(0);

  useEffect(() => {
    const loadData = async () => {
      const pid = await getPrincipalId();
      setPrincipal(pid);

      const profileData = await profile_nft_backend.getProfileNFT(pid);
      setProfile(profileData);

      const coursesData = await profile_nft_backend.getCourses();
      setCourses(coursesData);

      const vcsData = await profile_nft_backend.getVCs(pid);
      setVCs(vcsData);

      // Simple reputation calculation: number of VCs * 10
      setReputation(vcsData.length * 10);
    };

    loadData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Learning Dashboard</h1>
      {profile ? (
        <div className="profile-summary futuristic-box">
          <h2>{profile.name}</h2>
          <p>{profile.bio || "Your decentralized learning profile"}</p>
          <p><strong>Reputation Score:</strong> {reputation}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}

      <section className="courses-section futuristic-box">
        <h2>Your Courses</h2>
        <div className="courses-list">
          {courses.length > 0 ? (
            courses.map((course) => (
              <div key={course.id} className="course-card">
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <button className="enroll-btn">Enroll</button>
              </div>
            ))
          ) : (
            <p>No courses available.</p>
          )}
        </div>
      </section>

      <section className="vcs-section futuristic-box">
        <h2>Your Earned Certificates / VCs</h2>
        <div className="vcs-list">
          {vcs.length > 0 ? (
            vcs.map((vc) => (
              <div key={vc.id} className="vc-card">
                <p>{vc.credential}</p>
              </div>
            ))
          ) : (
            <p>No certificates earned yet.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
