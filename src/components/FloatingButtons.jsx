import { MessageCircle, PhoneCall } from 'lucide-react';
import './FloatingButtons.css';

function FloatingButtons() {
    return (
        <div className="fab-container">
            <a href="tel:09081115212" className="fab fab-phone" aria-label="Call Us">
                <PhoneCall size={24} />
            </a>
            <a href="https://wa.me/919081115212" target="_blank" rel="noopener noreferrer" className="fab fab-whatsapp" aria-label="WhatsApp Us">
                <MessageCircle size={28} />
            </a>
        </div>
    );
}

export default FloatingButtons;
