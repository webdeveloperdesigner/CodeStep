import React from 'react';
import { Clock } from 'lucide-react';
import './ClosingSoon.scss';

// Sample data can be imported or passed as props
const tendersData = [
  {
    id: 1,
    title: "Infrastructure Development Project",
    category: "construction",
    value: "$2.5M",
    closingDate: "2025-06-15",
    status: "open",
    organization: "City Municipal Corp",
    description: "Complete infrastructure overhaul including roads, drainage, and utilities for the downtown district.",
    eligibility: "Licensed construction companies with 5+ years experience"
  },
  {
    id: 2,
    title: "IT Services and Support Contract",
    category: "technology",
    value: "$800K",
    closingDate: "2025-06-02",
    status: "closing",
    organization: "Department of Technology",
    description: "Comprehensive IT support services including hardware maintenance, software licensing, and technical support.",
    eligibility: "IT companies with government sector experience"
  },
  {
    id: 3,
    title: "Healthcare Equipment Procurement",
    category: "healthcare",
    value: "$1.2M",
    closingDate: "2025-05-28",
    status: "urgent",
    organization: "State Health Department",
    description: "Procurement of advanced medical equipment for regional hospitals including MRI machines and diagnostic tools.",
    eligibility: "Certified medical equipment suppliers"
  },
  {
    id: 5,
    title: "Green Energy Initiative",
    category: "construction",
    value: "$3.2M",
    closingDate: "2025-05-30",
    status: "urgent",
    organization: "Environmental Agency",
    description: "Installation of solar panels and wind turbines for government buildings across the region.",
    eligibility: "Renewable energy contractors with proven track record"
  }
];

const isClosingSoon = (closingDate) => {
  const now = new Date();
  const closing = new Date(closingDate);
  const diffTime = closing.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 5 && diffDays > 0;
};

const ClosingSoon = () => {
  const closingSoonTenders = tendersData.filter(tender => isClosingSoon(tender.closingDate));

  if (closingSoonTenders.length === 0) {
    return null;
  }

  return (
    <section id="closing-soon" className="closing-soon-section">
      <div className="container">
        <div className="section-header">
          <h2>
            <Clock size={32} className="clock-icon" />
            Closing Soon
          </h2>
          <p>Don't miss these time-sensitive opportunities</p>
        </div>

        <div className="closing-cards-container">
          {closingSoonTenders.map(tender => (
            <div key={tender.id} className={`tender-card status-${tender.status}`}>
              <h3>{tender.title}</h3>
              <p className="organization">{tender.organization}</p>
              <p className="description">{tender.description}</p>
              <div className="card-info">
                <div>
                  <span>Value:</span> <strong>{tender.value}</strong>
                </div>
                <div>
                  <span>Closing:</span> <strong>{new Date(tender.closingDate).toLocaleDateString()}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClosingSoon;
