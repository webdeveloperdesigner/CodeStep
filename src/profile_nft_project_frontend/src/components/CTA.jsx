import React from 'react';
import './CTA.scss';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Start Bidding?</h2>
        <p>Join thousands of vendors who trust our platform for their business growth</p>
        <div className="cta-buttons">
          <button className="btn-register">Register Now</button>
          <button className="btn-learn-more">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
