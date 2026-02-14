import { useState } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LoveMeter() {
    const navigate = useNavigate();
    const [loveLevel, setLoveLevel] = useState(0);
    const [showBigHeart, setShowBigHeart] = useState(false);
    const controls = useAnimation();

    const handleClick = () => {
        if (loveLevel < 100) {
            const newLevel = Math.min(100, loveLevel + 5);
            setLoveLevel(newLevel);

            controls.start({
                scale: [1, 1.3, 1],
                transition: { duration: 0.3 }
            });

            if (newLevel === 100) {
                setTimeout(() => {
                    setShowBigHeart(true);
                }, 500);
            }
        }
    };

    const getMessage = () => {
        if (loveLevel < 20) return "Keep going! 🐱";
        if (loveLevel < 40) return "Feeling the love... 🥰";
        if (loveLevel < 60) return "Head over heels! 💕";
        if (loveLevel < 80) return "Almost there, Love! 🥹";
        if (loveLevel < 100) return "SOULMATE BOUND! 💖";
        return "MAXIMUM LOVE REACHED! 💘💑🚀";
    };

    const getStatusText = () => {
        if (loveLevel < 40) return "CRUSH";
        if (loveLevel < 80) return "HEAD OVER HEELS!";
        return "SOULMATE";
    };

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

            <div className="page-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ width: '100%', maxWidth: '900px' }}
                >
                    <h1 className="love-meter-title">Love Meter Challenge!</h1>
                    <p className="love-meter-subtitle">"How deep is your love for me?"</p>

                    <div className="love-meter-container">
                        {/* Cat and Bear on sides */}
                        <div className="character-side left">
                            <div className="character-circle">
                                <span style={{ fontSize: '4rem' }}>🐱</span>
                            </div>
                            <div className="character-message">{getMessage()}</div>
                        </div>

                        {/* Meter in center */}
                        <div className="meter-center">
                            <div className="meter-circle">
                                <svg width="300" height="300" viewBox="0 0 300 300">
                                    {/* Background circle */}
                                    <circle
                                        cx="150"
                                        cy="150"
                                        r="120"
                                        fill="none"
                                        stroke="#ffe0e0"
                                        strokeWidth="30"
                                    />
                                    {/* Progress circle */}
                                    <motion.circle
                                        cx="150"
                                        cy="150"
                                        r="120"
                                        fill="none"
                                        stroke="url(#gradient)"
                                        strokeWidth="30"
                                        strokeLinecap="round"
                                        strokeDasharray={2 * Math.PI * 120}
                                        strokeDashoffset={2 * Math.PI * 120 * (1 - loveLevel / 100)}
                                        transform="rotate(-90 150 150)"
                                        initial={{ strokeDashoffset: 2 * Math.PI * 120 }}
                                        animate={{ strokeDashoffset: 2 * Math.PI * 120 * (1 - loveLevel / 100) }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                    <defs>
                                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                            <stop offset="0%" stopColor="#ff0000" />
                                            <stop offset="100%" stopColor="#ff69b4" />
                                        </linearGradient>
                                    </defs>
                                </svg>

                                <div className="meter-inner">
                                    <div className="meter-percentage">{loveLevel}%</div>
                                    <div className="meter-status">{getStatusText()}</div>
                                </div>
                            </div>

                            <p className="meter-instruction">💡 Tap as fast as you can!</p>

                            <motion.button
                                animate={controls}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={handleClick}
                                disabled={loveLevel === 100}
                                className="charge-button"
                            >
                                <Heart size={24} fill="white" />
                                CHARGE WITH LOVE
                                <Heart size={24} fill="white" />
                            </motion.button>

                            <div className="power-bars">
                                <div className="power-bar">
                                    <div className="power-label">⚡ POWER: MAX</div>
                                    <div className="power-fill" style={{ width: '100%', background: '#ff0000' }}></div>
                                </div>
                                <div className="power-bar">
                                    <div className="power-label">💖 LEVEL: SOULMATEBOUND</div>
                                    <div className="power-fill" style={{ width: `${loveLevel}%`, background: '#ffb6c1' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="character-side right">
                            <div className="character-circle">
                                <span style={{ fontSize: '4rem' }}>🧸</span>
                            </div>
                            <div className="character-message">Almost there, Love! 🥹</div>
                        </div>
                    </div>

                    <p className="love-quote">"Your love is the energy that makes my world spin"</p>
                </motion.div>

                {/* Big Heart Explosion at 100% */}
                <AnimatePresence>
                    {showBigHeart && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modal-overlay"
                            onClick={() => navigate('/timeline')}
                        >
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: "spring", duration: 0.8 }}
                                className="big-heart-container"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    style={{ fontSize: '15rem' }}
                                >
                                    ❤️
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="modal-content"
                                    style={{ background: 'transparent', border: 'none', boxShadow: 'none' }}
                                >
                                    <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#ff0000', marginBottom: '1rem', textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
                                        MAXIMUM LOVE REACHED! 💘 💑 🚀
                                    </h2>
                                    <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#ff0000', marginBottom: '1.5rem' }}>
                                        LOVE OVERLOAD!
                                    </h3>
                                    <p style={{ fontSize: '1.5rem', color: '#333', marginBottom: '2rem' }}>
                                        You love me thiiiiis much! And I love you more! 💖
                                    </p>
                                    <button className="btn btn-yes" onClick={() => navigate('/timeline')}>
                                        Continue Our Journey
                                    </button>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
