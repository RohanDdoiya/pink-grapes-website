import { MapPin, Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-page">
            <div className="contact-header">
                <div className="container">
                    <h1>Get in Touch</h1>
                    <p>We'd love to hear from you. Find us or drop us a message.</p>
                </div>
            </div>

            <div className="container section">
                <div className="contact-layout">
                    <div className="contact-info">
                        <h2>Store Information</h2>

                        <div className="info-item">
                            <MapPin className="info-icon" size={24} />
                            <div>
                                <h4>Our Location</h4>
                                <p>111, 1st Floor, Shrinath Signet 3,<br />Nikol - Naroda Rd, Ahmedabad, Gujarat</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Phone className="info-icon" size={24} />
                            <div>
                                <h4>Call Us</h4>
                                <p>09081115212</p>
                            </div>
                        </div>

                        <div className="info-item">
                            <Clock className="info-icon" size={24} />
                            <div>
                                <h4>Working Hours</h4>
                                <p>Monday - Sunday: 10:00 AM - 9:00 PM</p>
                            </div>
                        </div>

                        <div className="info-actions mt-2">
                            <a href="https://wa.me/919081115212" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#25D366' }}>
                                <MessageCircle size={20} /> Chat on WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <h2>Send an Inquiry</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <label>Phone Number</label>
                                <input type="tel" placeholder="Your Phone Number" required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea rows="4" placeholder="How can we help you?" required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Map Section */}
            <div className="map-section">
                <iframe
                    title="Pink Grapes Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.328325983802!2d72.6687406!3d23.048386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e871cd2789f25%3A0xc304be348f6826dc!2sShrinath%20Signet!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div>
    );
}

export default Contact;
