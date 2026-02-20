import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Star, ShieldCheck, Globe, BadgePercent, ArrowRight } from 'lucide-react';
import './Home.css';

// Using local images or placeholders if not generated yet.
// Wait, we can use generate_image to get hero_banner_model.png
// I'll dynamically use the exact paths for generated images.

function Home() {
    return (
        <div className="home-page">
            {/* Helmet SEO */}
            {/* Will add helmet in a bit, let's keep it simple right now */}

            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-bg">
                    <img src="/hero_banner_model.png" alt="Trendy Fashion Model" onError={(e) => {
                        // Fallback to a placeholder if image is missing
                        e.target.src = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop";
                    }} />
                </div>
                <div className="container" style={{ width: '100%', height: '100%' }}>
                    <div className="hero-content">
                        <h1>Elevate Your Style with <span>International Fashion</span></h1>
                        <p className="hero-subtitle">
                            Discover curated, premium collections at Pink Grapes Fashion Hub. We bring global trends directly to your wardrobe in Ahmedabad.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/collections" className="btn btn-primary">Shop Now</Link>
                            <Link to="/contact" className="btn btn-secondary">Visit Store</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Banner */}
            <section className="trust-banner">
                <div className="container trust-grid">
                    <div className="trust-item">
                        <Globe className="trust-icon" size={32} />
                        <div>
                            <h4>International Brands</h4>
                            <p>Curated global fashion</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <ShieldCheck className="trust-icon" size={32} />
                        <div>
                            <h4>Trusted Quality</h4>
                            <p>Premium fabrics & stitching</p>
                        </div>
                    </div>
                    <div className="trust-item">
                        <BadgePercent className="trust-icon" size={32} />
                        <div>
                            <h4>Reasonable Pricing</h4>
                            <p>Luxury within reach</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-2">
                        <h2>Shop by Category</h2>
                        <p>Explore our wide range of fashionable selections.</p>
                    </div>

                    <div className="categories-grid">
                        <Link to="/collections" className="category-card">
                            <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800&auto=format&fit=crop" alt="Dresses" />
                            <div className="category-overlay">
                                <h3>Dresses</h3>
                                <span>View Collection <ArrowRight size={16} /></span>
                            </div>
                        </Link>

                        <Link to="/collections" className="category-card">
                            <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800&auto=format&fit=crop" alt="Tops & Shirts" />
                            <div className="category-overlay">
                                <h3>Tops & Shirts</h3>
                                <span>View Collection <ArrowRight size={16} /></span>
                            </div>
                        </Link>

                        <Link to="/collections" className="category-card">
                            <img src="https://images.unsplash.com/photo-1601000676472-351e3428d09e?q=80&w=800&auto=format&fit=crop" alt="Co-ord Sets" />
                            <div className="category-overlay">
                                <h3>Co-ord Sets</h3>
                                <span>View Collection <ArrowRight size={16} /></span>
                            </div>
                        </Link>

                        <Link to="/collections" className="category-card">
                            <img src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=800&auto=format&fit=crop" alt="Western Wear" />
                            <div className="category-overlay">
                                <h3>Western Wear</h3>
                                <span>View Collection <ArrowRight size={16} /></span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* About snippet */}
            <section className="section" style={{ backgroundColor: 'var(--color-white)' }}>
                <div className="container">
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2>Who We Are</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', margin: '1.5rem 0', color: 'var(--color-gray)' }}>
                            Located in the heart of Nikol, Ahmedabad, <strong>Pink Grapes Fashion Hub</strong> is your ultimate destination for contemporary women's fashion. We pride ourselves on offering an exclusive selection of international brands, trendy western wear, and elegant party outfits. Our mission is to empower women through fashion by providing trusted quality at reasonable prices.
                        </p>
                        <Link to="/about" className="btn btn-secondary mt-2">Read Our Story</Link>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section reviews-section">
                <div className="container">
                    <div className="text-center mb-2">
                        <h2>Loved by Our Customers</h2>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            <span style={{ fontSize: '2rem', fontWeight: 'bold' }}>4.9</span>
                            <div style={{ color: '#FFD700' }}>
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                                <Star size={24} fill="currentColor" />
                            </div>
                        </div>
                        <p>Based on Google Reviews</p>
                    </div>

                    <div className="review-card mt-2">
                        <div className="stars">
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                            <Star size={20} fill="currentColor" />
                        </div>
                        <p className="review-text">
                            "Amazing collection! I found exactly what I was looking for. The western wear section is exactly like international brands. The staff was incredibly helpful and the quality is absolutely top-notch for the price."
                        </p>
                        <h4>- Priya Patel</h4>
                        <span style={{ color: 'var(--color-gray)', fontSize: '0.85rem' }}>Local Guide</span>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
