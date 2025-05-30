import { useState } from 'react';
import { nft_backend } from 'declarations/nft_backend';
import './index.scss';


function App() {
  const [name, setName] = useState('');
  const [tokenId, setTokenId] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleMint = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await nft_backend.mint_profile_nft(name);
      setTokenId(result); // result is [tokenId], so it's safe here
    } catch (error) {
      console.error('Minting failed:', error);
    }
    setLoading(false);
  };

  return (
    <>
    <img src="/logo2.svg" alt="DFINITY logo" />
    <br />
{/* 
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Profile NFT Minting</h1>
      <p>Mint your own profile NFT by entering your name below.</p>
    </div> */}
    <main style={{ textAlign: 'center', marginTop: '0.5rem' }}>
      <h1>🎨 Mint Your Profile NFT</h1>
      <form onSubmit={handleMint}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ padding: '0.5rem', fontSize: '1rem' }}
        />
        &nbsp;
        <button type="submit" disabled={loading} style={{ padding: '0.5rem 1rem' }}>
          {loading ? 'Minting...' : 'Mint NFT'}
        </button>
      </form>

      {tokenId !== null && (
  <div className="result">
    <h2>✅ NFT Minted!</h2>
    <p><strong>Token ID:</strong> {tokenId.toString()}</p>
  </div>
)}

    </main>
    </>
  );
}

export default App;
