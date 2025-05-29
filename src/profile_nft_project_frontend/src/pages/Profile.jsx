import React, { useEffect, useState } from 'react';
import { getPrincipalId, getIdentity } from '../auth/auth';
//import { profile_nft_backend } from '../../../../declarations/profile_nft_backend';

const Profile = () => {
  const [nftData, setNftData] = useState(null);
  const [principal, setPrincipal] = useState(null);

  useEffect(() => {
    const loadProfile = async () => {
      const pid = await getPrincipalId();
      setPrincipal(pid);

      const nft = await profile_nft_backend.getProfileNFT(pid);
      if (nft) setNftData(nft);
    };

    loadProfile();
  }, []);

  return (
    <div>
      <h2>Your Profile NFT</h2>
      {nftData ? (
        <div>
          <p>Name: {nftData.name}</p>
          <p>Bio: {nftData.bio}</p>
          {/* You can show more fields here */}
        </div>
      ) : (
        <p>No NFT found for: {principal}</p>
      )}
    </div>
  );
};

export default Profile;
