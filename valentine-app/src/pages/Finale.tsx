import React from 'react';
import { motion } from 'framer-motion';
import { Heart, RotateCcw, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Finale() {
    const navigate = useNavigate();

    const floatingHearts = Array.from({ length: 15 }, (_, i) => (
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
                delay: i * 1,
            }}
            style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${1.5 + Math.random() * 2.5}rem`,
            }}
        >
            {['💗', '💖', '💕', '💝', '❤️', '🌹', '💘'][Math.floor(Math.random() * 7)]}
        </motion.div>
    ));

    return (
        <>
            <div className="floating-hearts">{floatingHearts}</div>

            <div className="page-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    style={{ width: '100%', maxWidth: '900px', textAlign: 'center' }}
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", bounce: 0.6 }}
                        style={{ fontSize: '10rem', marginBottom: '2rem' }}
                    >
                        💖
                    </motion.div>

                    <motion.h1
                        className="finale-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Forever & Always
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="finale-message-box"
                    >
                        <p className="finale-message">
                            Thank you for going through this journey with me. Every moment with you is a treasure,
                            and I can't wait to create countless more memories together.
                        </p>

                        <motion.div
                            animate={{
                                scale: [1, 1.05, 1],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="finale-quote"
                        >
                                "In a sea of people, my eyes will always search for you." 💕
                        </motion.div>

                        <div className="finale-stats">
                            <motion.div
                                className="stat-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="stat-number">∞</div>
                                    <div className="stat-label">Days I'll Love You</div>
                            </motion.div>

                            <motion.div
                                className="stat-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="stat-number">100%</div>
                                <div className="stat-label">Happiness Level</div>
                            </motion.div>

                            <motion.div
                                className="stat-card"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="stat-number">1</div>
                                <div className="stat-label">Soulmate Found</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="finale-actions"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/')}
                            className="btn btn-yes"
                            style={{ marginBottom: '1rem' }}
                        >
                            <RotateCcw size={20} />
                            Relive Our Journey
                        </motion.button>

                        <p className="finale-footer">
                            Made with <Heart size={16} fill="#ff0000" style={{ display: 'inline', verticalAlign: 'middle' }} />
                            {' '}for the most amazing person in the world
                        </p>
                    </motion.div>

                    <motion.div
                        animate={{
                            opacity: [0.5, 1, 0.5],
                            y: [0, -10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ marginTop: '3rem', fontSize: '3rem' }}
                    >
                        ✨💕✨
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}
