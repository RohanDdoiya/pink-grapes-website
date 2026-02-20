import { Star, ShieldCheck, Heart } from 'lucide-react';
import './About.css';

function About() {
    return (
        <div className="about-page">
            <div className="about-header">
                <div className="container">
                    <h1>Our Story</h1>
                </div>
            </div>

            <section className="section pb-0">
                <div className="container about-content">
                    <div className="about-text">
                        <h2>Welcome to Pink Grapes Fashion Hub</h2>
                        <p>
                            Located centrally in Nikol, Ahmedabad, Pink Grapes Fashion Hub was founded with a passion to bring international, premium fashion to modern women. Our curated collections are designed to make you feel confident, stylish, and beautiful every single day.
                        </p>
                        <p>
                            We believe that fashion is a language of self-expression. That's why we meticulously select every piece—ranging from flowy dresses and smart co-ord sets to elegant party wear and chic western outfits. Each garment represents a blend of trusted quality, contemporary design, and exceptional comfort.
                        </p>
                        <div className="values-grid">
                            <div className="value-item">
                                <Heart size={28} className="value-icon" />
                                <h4>Curated with Passion</h4>
                                <p>Every piece is chosen to reflect modern, global aesthetics.</p>
                            </div>
                            <div className="value-item">
                                <ShieldCheck size={28} className="value-icon" />
                                <h4>Trusted Quality</h4>
                                <p>We source premium fabrics for styles that last.</p>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=800&auto=format&fit=crop" alt="Boutique Store" />
                    </div>
                </div>
            </section>

            <section className="section bg-soft-beige mt-2">
                <div className="container text-center">
                    <h2>Why Choose Us?</h2>
                    <div className="trust-badges">
                        <div className="badge">
                            <span className="badge-number">4.9</span>
                            <div className="stars">
                                {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#FFD700" color="#FFD700" />)}
                            </div>
                            <p>Highly Rated on Google</p>
                        </div>
                        <div className="badge">
                            <span className="badge-number">1000+</span>
                            <p>Happy Customers</p>
                        </div>
                        <div className="badge">
                            <span className="badge-number">Exclusive</span>
                            <p>International Styles</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
