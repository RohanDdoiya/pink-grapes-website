import { Instagram, Heart, MessageCircle } from 'lucide-react';
import './Gallery.css';

function Gallery() {
    // Mock Instagram feed images
    const feed = [
        { id: 1, likes: 342, comments: 24, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop' },
        { id: 2, likes: 892, comments: 56, img: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=600&auto=format&fit=crop' },
        { id: 3, likes: 445, comments: 12, img: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=600&auto=format&fit=crop' },
        { id: 4, likes: 671, comments: 34, img: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=600&auto=format&fit=crop' },
        { id: 5, likes: 213, comments: 8, img: 'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=600&auto=format&fit=crop' },
        { id: 6, likes: 532, comments: 41, img: 'https://images.unsplash.com/photo-1550614000-4b95d4661b9a?q=80&w=600&auto=format&fit=crop' },
        { id: 7, likes: 901, comments: 89, img: 'https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=600&auto=format&fit=crop' },
        { id: 8, likes: 334, comments: 15, img: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=600&auto=format&fit=crop' },
        { id: 9, likes: 456, comments: 22, img: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600&auto=format&fit=crop' }
    ];

    return (
        <div className="gallery-page">
            <div className="container section">
                <div className="gallery-header text-center mb-2">
                    <Instagram size={48} className="gallery-icon" />
                    <h1>Join Our Community</h1>
                    <p>Follow us <a href="https://instagram.com/pinkgrapes_fashion_hub" target="_blank" rel="noopener noreferrer">@pinkgrapes_fashion_hub</a> for the latest arrivals and styling tips.</p>
                </div>

                <div className="instagram-grid">
                    {feed.map(post => (
                        <div key={post.id} className="insta-post">
                            <img src={post.img} alt="Instagram post" />
                            <div className="insta-overlay">
                                <div className="insta-stats">
                                    <span><Heart size={20} fill="currentColor" /> {post.likes}</span>
                                    <span><MessageCircle size={20} fill="currentColor" /> {post.comments}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-2">
                    <a href="https://instagram.com/pinkgrapes_fashion_hub" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                        View on Instagram
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Gallery;
