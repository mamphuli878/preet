import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function Proposal() {
    const navigate = useNavigate();
    const [yesScale, setYesScale] = useState(1);
    const [noScale, setNoScale] = useState(1);
    const [noCount, setNoCount] = useState(0);
    const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });

    const messages = [
        "No",
        "Are you sure?",
        "Really?",
        "Think again!",
        "Last chance!",
        "Surely not?",
        "You might regret this!",
        "Give it another thought!",
        "Are you certain?",
        "This could be a mistake!",
        "Please reconsider!",
        "Don't be so cold!",
        "Change of heart?",
        "Pretty please?",
        "With a cherry on top?",
        "I'm begging you!",
    ];

    const handleNoHover = () => {
        setYesScale(prev => prev + 0.15);
        setNoScale(prev => Math.max(0.4, prev - 0.08));
        setNoCount(prev => prev + 1);

        // Move NO button to random position
        const angle = Math.random() * Math.PI * 2;
        const distance = 200 + Math.random() * 150;
        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;
        setNoPosition({ x, y });
    };

    const handleYesClick = () => {
        navigate('/celebration');
    };

    const floatingHearts = Array.from({ length: 12 }, (_, i) => (
        <motion.div
            key={i}
            className="heart-float"
            initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100,
                rotate: Math.random() * 360
            }}
            animate={{
                y: -100,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                rotate: Math.random() * 360 + 360
            }}
            transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear"
            }}
            style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${1.5 + Math.random() * 2}rem`,
            }}
        >
            {['💗', '💖', '💕', '💝', '❤️', '🌹'][Math.floor(Math.random() * 6)]}
        </motion.div>
    ));

    const sparkles = Array.from({ length: 20 }, (_, i) => (
        <motion.div
            key={`sparkle-${i}`}
            initial={{
                opacity: 0,
                scale: 0,
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)
            }}
            animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
            }}
            transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3,
            }}
            style={{
                position: 'absolute',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: '1.5rem',
                pointerEvents: 'none',
            }}
        >
            ✨
        </motion.div>
    ));

    return (
        <>
            <div className="floating-hearts">
                {floatingHearts}
                {sparkles}
            </div>

            <div className="page-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className="badge"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                        SPECIAL DELIVERY
                        <Sparkles size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        style={{ color: '#999', marginBottom: '2rem', fontSize: '0.95rem' }}
                    >
                        I have a very important question for you...
                    </motion.p>

                    <motion.div
                        className="card"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.4, type: "spring" }}
                    >
                        <div className="character-container">
                            <motion.img
                                src="/image.png"
                                alt="Cute cat with heart"
                                className="character-img"
                                animate={{
                                    y: [0, -10, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    const parent = e.currentTarget.parentElement;
                                    if (parent && !parent.querySelector('.emoji-fallback')) {
                                        const div = document.createElement('div');
                                        div.className = 'emoji-fallback';
                                        div.style.fontSize = '10rem';
                                        div.style.textAlign = 'center';
                                        div.textContent = '🐱💕';
                                        parent.appendChild(div);
                                    }
                                }}
                            />
                            <motion.div
                                className="speech-bubble"
                                initial={{ scale: 0, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.8, type: "spring", bounce: 0.5 }}
                            >
                                <div className="speech-text">
                                    Will you be my Valentine?
                                </div>
                            </motion.div>
                        </div>

                        <div className="button-group-horizontal" style={{ position: 'relative', minHeight: '200px' }}>
                            <motion.button
                                whileHover={{ scale: yesScale * 1.05 }}
                                whileTap={{ scale: yesScale * 0.95 }}
                                onClick={handleYesClick}
                                className="btn btn-yes"
                                animate={{
                                    boxShadow: [
                                        '0 4px 12px rgba(255,0,0,0.3)',
                                        '0 8px 24px rgba(255,0,0,0.5)',
                                        '0 4px 12px rgba(255,0,0,0.3)',
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                style={{
                                    transform: `scale(${yesScale})`,
                                    fontSize: `${1.1 * Math.min(yesScale, 2)}rem`,
                                    padding: `${1 * Math.min(yesScale, 2)}rem ${3 * Math.min(yesScale, 2)}rem`,
                                }}
                            >
                                YES! <Heart size={20} fill="currentColor" />
                            </motion.button>

                            {noCount < 16 && (
                                <motion.button
                                    animate={{
                                        x: noPosition.x,
                                        y: noPosition.y,
                                        scale: noScale
                                    }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    onMouseEnter={handleNoHover}
                                    onClick={handleNoHover}
                                    className="btn btn-no"
                                    style={{
                                        position: noCount > 0 ? 'absolute' : 'relative',
                                        left: noCount > 0 ? '50%' : 'auto',
                                        top: noCount > 0 ? '0' : 'auto',
                                    }}
                                >
                                    {messages[Math.min(noCount, messages.length - 1)]}
                                </motion.button>
                            )}
                        </div>
                    </motion.div>

                    <div className="pagination-dots">
                        <div className="dot active"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </motion.div>

                <motion.div
                    className="footer-text"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                >
                    Made with <span className="heart-icon">❤</span> just for you
                </motion.div>
            </div>
        </>
    );
}
