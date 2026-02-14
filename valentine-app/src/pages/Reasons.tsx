import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Reasons() {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const reasons = [
        {
            title: "Your Smile",
            description: "It lights up my entire world and somehow makes everything feel okay, even on the worst days.",
            emoji: "😊",
            color: "#ff69b4"
        },
        {
            title: "The Way You Understand Me",
            description: "You get me without me having to explain everything. That kind of understanding is rare, and I never take it for granted.",
            emoji: "💬",
            color: "#ff1493"
        },
        {
            title: "Your Heart",
            description: "You’re kind, patient, and caring in ways that feel so natural. The way you love people says a lot about who you are.",
            emoji: "🤍",
            color: "#ff0000"
        },
        {
            title: "The Way You Make Me Laugh",
            description: "No matter how stressed or tired I am, you always know how to make me smile sometimes without even trying.",
            emoji: "😂",
            color: "#ff69b4"
        },
        {
            title: "How You Make Distance Feel Smaller",
            description: "Even when we’re far apart, you make me feel close, loved, and secure. That means more to me than you know.",
            emoji: "🌍",
            color: "#ff1493"
        },
        {
            title: "The Way You Choose Us",
            description: "Through ups, downs, and everything in between, you still choose us and that’s what makes me love you more every day.",
            emoji: "✨",
            color: "#ff0000"
        }
    ];

    const handleNext = () => {
        if (currentIndex < reasons.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            navigate('/coupons');
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const floatingHearts = Array.from({ length: 10 }, (_, i) => (
        <motion.div
            key={i}
            className="heart-float"
            initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: (typeof window !== 'undefined' ? window.innerHeight : 800) + 100
            }}
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ width: '100%', maxWidth: '700px' }}
                >
                    <motion.h1
                        className="reasons-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        Why I Love You 💝
                    </motion.h1>

                    <p className="reasons-subtitle">
                        {currentIndex + 1} of {reasons.length} reasons (and counting!)
                    </p>

                    <div className="reasons-card-container">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, rotateY: 90, scale: 0.8 }}
                                animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                                exit={{ opacity: 0, rotateY: -90, scale: 0.8 }}
                                transition={{ duration: 0.5 }}
                                className="reasons-card"
                                style={{ borderColor: reasons[currentIndex].color }}
                            >
                                <motion.div
                                    className="reasons-emoji"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 10, -10, 0]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {reasons[currentIndex].emoji}
                                </motion.div>

                                <h2 className="reasons-card-title" style={{ color: reasons[currentIndex].color }}>
                                    {reasons[currentIndex].title}
                                </h2>

                                <p className="reasons-card-description">
                                    {reasons[currentIndex].description}
                                </p>

                                <div className="reasons-progress">
                                    {reasons.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`progress-dot ${index === currentIndex ? 'active' : ''} ${index < currentIndex ? 'completed' : ''}`}
                                            style={{
                                                backgroundColor: index <= currentIndex ? reasons[currentIndex].color : '#e0e0e0'
                                            }}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="reasons-buttons">
                        {currentIndex > 0 && (
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handlePrevious}
                                className="btn btn-no"
                            >
                                Previous
                            </motion.button>
                        )}

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleNext}
                            className="btn btn-yes"
                            style={{ marginLeft: currentIndex > 0 ? '1rem' : '0' }}
                        >
                            {currentIndex < reasons.length - 1 ? (
                                <>Next Reason <ArrowRight size={20} /></>
                            ) : (
                                <>Claim Your Rewards! <Heart size={20} fill="currentColor" /></>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </>
    );
}
