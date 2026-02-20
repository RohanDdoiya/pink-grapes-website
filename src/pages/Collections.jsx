import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import './Collections.css';

function Collections() {
    const [activeTab, setActiveTab] = useState('All');

    const categories = ['All', 'Dresses', 'Tops & Shirts', 'Co-ord Sets', 'Western Wear', 'Party Wear'];

    const products = [
        { id: 1, name: 'Floral Midi Dress', category: 'Dresses', price: '₹1,999', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop' },
        { id: 2, name: 'Satin Wrap Top', category: 'Tops & Shirts', price: '₹1,299', img: 'https://images.unsplash.com/photo-1551163943-3f6a855d1153?q=80&w=800&auto=format&fit=crop' },
        { id: 3, name: 'Linen Co-ord Set', category: 'Co-ord Sets', price: '₹2,499', img: 'https://images.unsplash.com/photo-1603570220268-dfc912ec923b?q=80&w=800&auto=format&fit=crop' },
        { id: 4, name: 'Sequin Party Dress', category: 'Party Wear', price: '₹3,499', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop' },
        { id: 5, name: 'Classic Blazer', category: 'Western Wear', price: '₹2,999', img: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop' },
        { id: 6, name: 'Pleated Skirt', category: 'Western Wear', price: '₹1,599', img: 'https://images.unsplash.com/photo-1583496661160-c2567cf17466?q=80&w=800&auto=format&fit=crop' },
        { id: 7, name: 'Summer Maxi', category: 'Dresses', price: '₹2,199', img: 'https://images.unsplash.com/photo-1612082260216-5bc77b78996b?q=80&w=800&auto=format&fit=crop' },
        { id: 8, name: 'Silk Blouse', category: 'Tops & Shirts', price: '₹1,499', img: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=800&auto=format&fit=crop' }
    ];

    const filteredProducts = activeTab === 'All'
        ? products
        : products.filter(p => p.category === activeTab);

    const getWhatsAppLink = (productName) => {
        const msg = encodeURIComponent(`Hi Pink Grapes, I am interested in the ${productName}. Is it available?`);
        return `https://wa.me/919081115212?text=${msg}`;
    };

    return (
        <div className="collections-page">
            <div className="collections-header">
                <div className="container">
                    <h1>Our Collections</h1>
                    <p>Discover our latest arrivals and timeless classics</p>
                </div>
            </div>

            <div className="container section">
                <div className="filter-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => setActiveTab(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="products-grid">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-img-wrapper">
                                <img src={product.img} alt={product.name} />
                                <div className="product-hover-actions">
                                    <a href={getWhatsAppLink(product.name)} target="_blank" rel="noopener noreferrer" className="btn btn-primary inquiry-btn">
                                        <MessageCircle size={18} /> Inquire Now
                                    </a>
                                </div>
                            </div>
                            <div className="product-info">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <span className="product-price">{product.price}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Collections;
