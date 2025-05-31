import React from 'react';
import { FileText, Twitter, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="contact" className="footer-section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo-section">
              <div className="logo-icon">
                <FileText size={20} color="white" />
              </div>
              <span className="logo-text">TenderHub</span>
            </div>
            <p className="description">
              The leading platform for transparent and efficient procurement processes.
            </p>
            <div className="social-icons">
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="social-link">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">Compliance</a></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <Phone size={16} />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="contact-item">
              <Mail size={16} />
              <span>info@tenderhub.com</span>
            </div>
            <div className="contact-item">
              <MapPin size={16} />
              <span>123 Business Ave, Suite 100</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 TenderHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
