import React, { useEffect, useState } from "react";
import { getPrincipalId } from "../auth/auth";
//import { profile_nft_backend } from "../../declarations/profile_nft_backend";
import "./Profile.scss";

const Profile = () => {
  const [principal, setPrincipal] = useState(null);
  const [profileNFT, setProfileNFT] = useState(null);
  const [reputation, setReputation] = useState(0);
  const [vcs, setVCs] = useState([]);

  useEffect(() => {
    const loadProfile = async () => {
      const pid = await getPrincipalId();
      setPrincipal(pid);

      const nft = await profile_nft_backend.getProfileNFT(pid);
      setProfileNFT(nft);

      const vcsData = await profile_nft_backend.getVCs(pid);
      setVCs(vcsData);

      // Simple reputation calculation: number of VCs * 10
      setReputation(vcsData.length * 10);
    };

    loadProfile();
  }, []);

  return (
    <div className="profile-container">
      <h1>Your Decentralized Learning Profile</h1>
      {profileNFT ? (
        <div className="profile-box futuristic-box">
          <h2>{profileNFT.name}</h2>
          <p>{profileNFT.bio || "Blockchain-based learner profile"}</p>
          <p><strong>Reputation Score:</strong> {reputation}</p>
        </div>
      ) : (
        <p>Loading profile NFT...</p>
      )}

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

export default Profile;
