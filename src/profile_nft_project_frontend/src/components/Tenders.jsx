import React, { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Eye, Download } from 'lucide-react';
import './Tenders.scss';

// Sample data (can be moved to a separate file or fetched from API)
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
    id: 4,
    title: "Educational Software Development",
    category: "education",
    value: "$450K",
    closingDate: "2025-06-20",
    status: "open",
    organization: "Education Ministry",
    description: "Development of interactive learning platform for K-12 students with multilingual support.",
    eligibility: "Software development companies with education sector portfolio"
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
  },
  {
    id: 6,
    title: "Digital Transformation Project",
    category: "technology",
    value: "$1.8M",
    closingDate: "2025-07-01",
    status: "open",
    organization: "Government Digital Office",
    description: "Modernization of legacy systems and implementation of cloud-based solutions.",
    eligibility: "Technology companies specializing in digital transformation"
  }
];

// Utility functions
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const isClosingSoon = (closingDate) => {
  const now = new Date();
  const closing = new Date(closingDate);
  const diffTime = closing.getTime() - now.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= 5 && diffDays > 0;
};

const Tenders = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filteredTenders = useMemo(() => {
    return tendersData.filter(tender => {
      const matchesSearch =
        tender.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tender.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = category === 'all' || tender.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, category]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const viewTenderDetails = (tender) => {
    alert(`Viewing details for: ${tender.title}`);
    // Implement navigation or modal for details
  };

  const downloadTender = (tender) => {
    alert(`Downloading tender documents for: ${tender.title}`);
    // Implement download functionality
  };

  return (
    <section id="tenders" className="tenders-section">
      <div className="container">
        <div className="section-header">
          <h2>Open Tenders</h2>
          <p>Explore current opportunities and find the perfect match for your business</p>
        </div>

        <div className="filters">
          <div className="search-input-wrapper">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search tenders..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>
          <select value={category} onChange={handleCategoryChange} className="category-select">
            <option value="all">All Categories</option>
            <option value="construction">Construction</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
          </select>
          <button className="btn-filter">
            <Filter size={16} />
            Filter
          </button>
        </div>

        {filteredTenders.length === 0 ? (
          <div className="no-results">
            <FileText size={64} className="no-results-icon" />
            <h3>No tenders found</h3>
            <p>Try adjusting your search criteria</p>
          </div>
        ) : (
          <div className="tender-cards">
            {filteredTenders.map(tender => (
              <div key={tender.id} className={`tender-card status-${tender.status}`}>
                <div className="card-header">
                  <div>
                    <h3>{tender.title}</h3>
                    <p className="organization">{tender.organization}</p>
                  </div>
                  <span className={`status-badge status-${tender.status}`}>
                    {tender.status}
                  </span>
                </div>
                <p className="description">{tender.description}</p>
                <div className="card-info">
                  <div>
                    <span>Value:</span> <strong>{tender.value}</strong>
                  </div>
                  <div>
                    <span>Closing:</span> <strong>{formatDate(tender.closingDate)}</strong>
                  </div>
                </div>
                {isClosingSoon(tender.closingDate) && (
                  <div className="countdown">
                    <span>Closing Soon</span>
                  </div>
                )}
                <div className="card-actions">
                  <button onClick={() => viewTenderDetails(tender)} className="btn-primary">
                    <Eye size={16} /> View Details
                  </button>
                  <button onClick={() => downloadTender(tender)} className="btn-secondary">
                    <Download size={16} /> Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tenders;
