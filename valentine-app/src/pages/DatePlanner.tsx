import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DatePlanner() {
    const navigate = useNavigate();

    const floatingHearts = Array.from({ length: 6 }, (_, i) => (
        <motion.div
            key={i}
            className="heart-float"
            initial={{ x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100 }}
            animate={{
                y: -100,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            }}
            transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
            }}
            style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${1 + Math.random() * 2}rem`,
            }}
        >
            💗
        </motion.div>
    ));

    return (
        <>
            <div className="floating-hearts">{floatingHearts}</div>

            <div className="planner-page">
                <div className="planner-header">
                    <div className="badge" style={{ backgroundColor: '#ffe0e0', color: '#ff0000' }}>SHE SAID YES! ❤️</div>
                    <h1 className="planner-title">
                        I love you the most and here's what I feel
                    </h1>
                    <p className="planner-subtitle">
                        A little letter from my heart to yours
                    </p>
                </div>

                <div className="planner-container">
                    <div className="timeline-area" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        <div className="timeline-card">
                            <div className="story-section" style={{ marginTop: 0 }}>
                                <div className="story-icon">💌</div>
                                <div className="story-title">A Letter for You</div>
                                <div className="story-text" style={{ textAlign: 'left', lineHeight: 1.8 }}>
                                    <p>
                                        Hey my love,
                                    </p>
                                    <p>
                                        Happy Valentine’s Day ❤️
                                        I wish I was saying this to you in person instead of through a screen, but here we are and I still wouldn’t trade this love for anything.
                                    </p>
                                    <p>
                                        Being long distance isn’t easy. I miss you in the most random moments, like when something good or stupid happens and you’re the first person I want to tell. Even though we’re far, you’re still the closest person to me.
                                    </p>
                                    <p>
                                        Knowing you’re coming back to Nepal soon honestly keeps me going. I’ve been waiting for you, counting days without really saying it out loud. I’ve got so many surprises ready for you not because I had to, but because I wanted to. Because you matter to me that much.
                                    </p>
                                    <p>
                                        These almost two years haven’t been perfect, but they’ve been real. We’ve stuck around even when it would’ve been easier not to. That’s something I’m really proud of. Loving you from a distance has shown me how sure I am about you.
                                    </p>
                                    <p>
                                        I can’t wait to see you, to finally be around you again, to do all the normal little things we’ve missed. Until then, just know that I’m here, I’m waiting, and I’m choosing you today and every day.
                                    </p>
                                    <p>
                                        I miss you a lot.
                                        I love you much muchhh more. ❤️
                                    </p>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/love-meter')}
                                className="btn btn-yes"
                                style={{ marginTop: '2rem' }}
                            >
                                Continue <Heart size={20} fill="currentColor" />
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
