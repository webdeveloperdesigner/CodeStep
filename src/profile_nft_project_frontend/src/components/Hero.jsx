import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">
          Transparent Procurement
          <span className="hero-subtitle">Made Simple</span>
        </h1>
        <p className="hero-description">
          Discover opportunities, submit bids, and grow your business with our modern tendering platform
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">View Live Tenders</button>
          <button className="btn btn-secondary">Submit a Bid</button>
        </div>
      </div>
      <div className="stats-section">
        <div className="container stats-grid">
          <div className="stat-item">
            <div className="stat-value">500+</div>
            <div className="stat-label">Active Tenders</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">1200+</div>
            <div className="stat-label">Registered Vendors</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">$50M+</div>
            <div className="stat-label">Total Value</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">98%</div>
            <div className="stat-label">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
