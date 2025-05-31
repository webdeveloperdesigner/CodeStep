import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.scss';

const faqs = [
  {
    question: "How do I register to participate in tenders?",
    answer: "You can register by clicking the 'Register' button and filling out the vendor registration form. You'll need to provide company details, certifications, and financial information."
  },
  {
    question: "What documents are required for bid submission?",
    answer: "Typically required documents include: company registration certificate, tax clearance, financial statements, technical proposal, and any specific certifications mentioned in the tender notice."
  },
  {
    question: "How can I track my submitted bids?",
    answer: "Once logged in, you can access your dashboard to view all submitted bids, their status, and any updates or communications from the tendering organization."
  },
  {
    question: "What happens if I miss the submission deadline?",
    answer: "Unfortunately, late submissions are not accepted. We recommend submitting your bids well before the deadline to avoid any technical issues."
  },
  {
    question: "How is the evaluation process conducted?",
    answer: "Bids are evaluated based on technical merit, financial proposal, and compliance with tender requirements. The process is transparent and follows strict evaluation criteria."
  },
  {
    question: "Can I modify my bid after submission?",
    answer: "Bid modifications are generally not allowed after submission. However, in exceptional circumstances and before the deadline, you may contact the tendering organization directly."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about our platform</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
