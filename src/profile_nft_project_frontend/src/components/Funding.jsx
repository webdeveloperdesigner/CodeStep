import React from 'react';
import './Funding.scss';

// Sample funding data
const fundingOpportunities = [
  {
    id: 1,
    title: "Green Technology Innovation Grant",
    amount: "$500K",
    eligibility: "Startups, SMEs",
    deadline: "2025-07-15",
    description: "Supporting innovative solutions for environmental sustainability and clean energy."
  },
  {
    id: 2,
    title: "Digital Transformation Fund",
    amount: "$750K",
    eligibility: "Government Agencies",
    deadline: "2025-08-01",
    description: "Accelerating digital transformation initiatives in public sector organizations."
  },
  {
    id: 3,
    title: "Community Development Grant",
    amount: "$300K",
    eligibility: "NGOs, Community Groups",
    deadline: "2025-06-30",
    description: "Supporting community-led development projects and social impact initiatives."
  },
  {
    id: 4,
    title: "Healthcare Innovation Fund",
    amount: "$1M",
    eligibility: "Healthcare Organizations",
    deadline: "2025-09-15",
    description: "Funding for innovative healthcare solutions and medical technology development."
  },
  {
    id: 5,
    title: "Education Technology Grant",
    amount: "$600K",
    eligibility: "Educational Institutions",
    deadline: "2025-08-20",
    description: "Supporting the development of cutting-edge educational technology and learning platforms."
  },
  {
    id: 6,
    title: "Small Business Development Fund",
    amount: "$250K",
    eligibility: "Small Businesses",
    deadline: "2025-07-30",
    description: "Empowering small businesses with funding for growth and expansion initiatives."
  }
];

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const Funding = () => {
  const applyForFunding = (funding) => {
    alert(`Opening application for: ${funding.title}`);
    // Implement application form or navigation
  };

  return (
    <section id="funding" className="funding-section">
      <div className="container">
        <div className="section-header">
          <h2>Funding Opportunities</h2>
          <p>Access grants and funding programs to accelerate your projects</p>
        </div>

        <div className="funding-cards">
          {fundingOpportunities.map(funding => (
            <div key={funding.id} className="funding-card">
              <div className="funding-info">
                <h3>{funding.title}</h3>
                <p className="description">{funding.description}</p>
                <div className="details">
                  <div>
                    <span>Amount:</span> <strong>{funding.amount}</strong>
                  </div>
                  <div>
                    <span>Eligibility:</span> <strong>{funding.eligibility}</strong>
                  </div>
                  <div>
                    <span>Deadline:</span> <strong>{formatDate(funding.deadline)}</strong>
                  </div>
                </div>
              </div>
              <button className="btn-apply" onClick={() => applyForFunding(funding)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Funding;
