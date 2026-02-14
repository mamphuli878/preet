import { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Share2, RefreshCw, Gift, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Celebration() {
    const navigate = useNavigate();
    const [openedGifts, setOpenedGifts] = useState<number[]>([]);
    const [shakeGift, setShakeGift] = useState<number | null>(null);

    useEffect(() => {
        const duration = 3000;
        const end = Date.now() + duration;

        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#ff0000', '#ff69b4', '#ffb6c1']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#ff0000', '#ff69b4', '#ffb6c1']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        };

        frame();
    }, []);

    const handleOpenGift = (id: number) => {
        if (!openedGifts.includes(id)) {
            setOpenedGifts([...openedGifts, id]);
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff0000', '#ff69b4', '#ffb6c1', '#ffd700']
            });
        }
    };

    const gifts = [
        {
            id: 1,
            title: "Gift #1",
            image: "🎁",
            message: "A heartfelt letter just for you! 💌✨"
        },
        {
            id: 2,
            title: "Gift #2",
            image: "💝",
            message: "Unlimited cuddles and movie nights together! 🎬🧸 (when you come to Nepal)"
        },
        {
            id: 3,
            title: "Gift #3",
            image: "🎀",
            message: "A surprise weekend getaway just for us! ✈️🏖️ (in the near future)"
        },
    ];

    const floatingHearts = Array.from({ length: 8 }, (_, i) => (
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

            {/* Confetti particles */}
            <div className="confetti-container">
                {Array.from({ length: 50 }, (_, i) => (
                    <motion.div
                        key={i}
                        className="confetti-piece"
                        initial={{
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                            y: -50,
                            rotate: 0
                        }}
                        animate={{
                            y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 50,
                            rotate: 360 * (Math.random() > 0.5 ? 1 : -1),
                            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000)
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            width: '10px',
                            height: '10px',
                            backgroundColor: ['#ff0000', '#ff69b4', '#ffb6c1', '#ffd700', '#ff1493'][i % 5],
                            borderRadius: Math.random() > 0.5 ? '50%' : '0',
                        }}
                    />
                ))}
            </div>

            <div className="page-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ width: '100%', maxWidth: '1000px' }}
                >
                    <motion.div
                        className="success-badge"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [-2, 2, -2]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                        SUCCESS UNLOCKED!
                        <Sparkles size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
                    </motion.div>

                    <motion.h1
                        className="celebration-title"
                        animate={{
                            textShadow: [
                                '0 0 20px rgba(255,0,0,0.5)',
                                '0 0 40px rgba(255,0,0,0.8)',
                                '0 0 20px rgba(255,0,0,0.5)',
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        YAY! I KNEW YOU WOULD SAY YES!
                    </motion.h1>

                    <p className="celebration-subtitle">
                        You've made me the happiest person ever! As a reward, I have prepared three special surprises for you.
                    </p>

                    <div className="gifts-container">
                        {gifts.map((gift, index) => (
                            <motion.div
                                key={gift.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                whileHover={{
                                    scale: openedGifts.includes(gift.id) ? 1 : 1.08,
                                    rotate: openedGifts.includes(gift.id) ? 0 : [0, -2, 2, -2, 0]
                                }}
                                onHoverStart={() => !openedGifts.includes(gift.id) && setShakeGift(gift.id)}
                                onHoverEnd={() => setShakeGift(null)}
                                onClick={() => handleOpenGift(gift.id)}
                                className={`gift-card ${openedGifts.includes(gift.id) ? 'gift-revealed' : ''}`}
                            >
                                <AnimatePresence mode="wait">
                                    {!openedGifts.includes(gift.id) ? (
                                        <motion.div
                                            key="closed"
                                            initial={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
                                            className="gift-image-container"
                                        >
                                            <motion.div
                                                style={{ fontSize: '4rem' }}
                                                animate={shakeGift === gift.id ? {
                                                    rotate: [0, -10, 10, -10, 10, 0],
                                                    y: [0, -5, 0]
                                                } : {}}
                                                transition={{ duration: 0.5 }}
                                            >
                                                {gift.image}
                                            </motion.div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="opened"
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="gift-image-container"
                                        >
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1 }}
                                                style={{ fontSize: '3rem' }}
                                            >
                                                ✨
                                            </motion.div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="gift-title">{gift.title}</div>
                                {openedGifts.includes(gift.id) ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="gift-message"
                                    >
                                        {gift.message}
                                    </motion.div>
                                ) : (
                                    <div className="gift-subtitle">
                                        <Gift size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                                        CLICK TO REVEAL
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <AnimatePresence>
                        {openedGifts.length === 3 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.button
                                    className="save-date-btn"
                                    onClick={() => navigate('/planner')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    animate={{
                                        boxShadow: [
                                            '0 4px 12px rgba(255,0,0,0.3)',
                                            '0 8px 24px rgba(255,0,0,0.5)',
                                            '0 4px 12px rgba(255,0,0,0.3)',
                                        ]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    <Calendar size={20} />
                                    Save our Date: Feb 14th
                                </motion.button>

                                <div className="social-icons">
                                    <motion.div
                                        className="social-icon"
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Share2 size={18} />
                                    </motion.div>
                                    <motion.div
                                        className="social-icon"
                                        whileHover={{ scale: 1.2, rotate: -360 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <RefreshCw size={18} />
                                    </motion.div>
                                </div>

                                <motion.p
                                    className="countdown-text"
                                    animate={{ opacity: [0.7, 1, 0.7] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    "Counting down the seconds until our special day..."
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </>
    );
}
