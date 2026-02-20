import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram } from 'lucide-react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col brand-col">
                    <h3>Pink Grapes</h3>
                    <p className="subtitle">Fashion Hub</p>
                    <p className="footer-desc">
                        Elevating your style with curated international fashion. Trusted quality, affordable luxury.
                    </p>
                </div>

                <div className="footer-col links-col">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/collections">Collections</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/gallery">Gallery</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footer-col contact-col">
                    <h4>Visit Us</h4>
                    <p className="contact-item">
                        <MapPin size={18} />
                        <span>111, 1st Floor, Shrinath Signet 3,<br />Nikol - Naroda Rd, Ahmedabad</span>
                    </p>
                    <p className="contact-item">
                        <Phone size={18} />
                        <span>09081115212</span>
                    </p>
                    <a href="https://instagram.com/pinkgrapes_fashion_hub" target="_blank" rel="noopener noreferrer" className="social-link">
                        <Instagram size={20} />
                        <span>@pinkgrapes_fashion_hub</span>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Pink Grapes Fashion Hub. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
