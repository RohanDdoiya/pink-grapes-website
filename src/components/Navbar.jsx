import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="nav-logo">
                    Pink Grapes <span>Fashion Hub</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'nav-active' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                    <Link to="/collections" className={location.pathname === '/collections' ? 'active' : ''}>Collections</Link>
                    <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link>
                    <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>Gallery</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
                </div>

                <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
