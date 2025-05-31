import React from 'react';
import { Users, Search, FileText, Award } from 'lucide-react';
import './HowItWorks.scss';

const steps = [
  {
    id: 1,
    icon: <Users size={32} color="#2563eb" />,
    title: "Register",
    description: "Create your vendor account and complete verification"
  },
  {
    id: 2,
    icon: <Search size={32} color="#059669" />,
    title: "Browse",
    description: "Search and filter tenders matching your expertise"
  },
  {
    id: 3,
    icon: <FileText size={32} color="#7c3aed" />,
    title: "Submit",
    description: "Prepare and submit your comprehensive bid"
  },
  {
    id: 4,
    icon: <Award size={32} color="#ea580c" />,
    title: "Win",
    description: "Get awarded and start your project"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="container">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple steps to participate in the tendering process</p>
        </div>

        <div className="steps-grid">
          {steps.map(step => (
            <div key={step.id} className="step-card">
              <div className="icon-wrapper">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
