import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Calendar, MapPin, Coffee, Film, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Timeline() {
    const navigate = useNavigate();

    const moments = [
        {
            date: "May 25, 2024",
            title: "The Day We Met",
            description: "I was nervous the whole time, but the moment I saw you, everything felt right. I couldn't stop smiling, and somehow the hours passed like minutes. That day changed everything for me.",
            icon: <Coffee />,
            color: "#ff69b4"
        },
        {
            date: "May 25, 2024",
            title: "💖 First Kiss",
            description: "Same day, same magic. It wasn't just a kiss—it felt like a promise without words. In that moment, I knew this was something special, something I wanted to hold onto.",
            icon: <Heart />,
            color: "#ff1493"
        },
        {
            date: "Feb 14, 2026",
            title: "🎵 Second Valentine's",
            description: "Another Valentine's with you, and somehow my love has only grown deeper. Even after everything we've been through, I still fall for you every single day—and I always will.",
            icon: <Music />,
            color: "#ff0000"
        }
    ];

    const floatingHearts = Array.from({ length: 8 }, (_, i) => (
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
                    style={{ width: '100%', maxWidth: '1000px' }}
                >
                    <motion.h1
                        className="timeline-page-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        Our Journey ❤️
                    </motion.h1>

                    <div className="timeline-container">
                        {moments.map((moment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className={`timeline-moment ${index % 2 === 0 ? 'left' : 'right'}`}
                            >
                                <div className="timeline-card-modern">
                                    <motion.div
                                        className="timeline-icon-circle"
                                        style={{ backgroundColor: moment.color }}
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        {moment.icon}
                                    </motion.div>

                                    <div className="timeline-date-badge">{moment.date}</div>

                                    <h3 className="timeline-moment-title">{moment.title}</h3>
                                    <p className="timeline-moment-desc">{moment.description}</p>
                                </div>

                                <div className="timeline-connector"></div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/reasons')}
                        className="btn btn-yes"
                        style={{ marginTop: '3rem' }}
                    >
                        See Why I Love You <Heart size={20} fill="currentColor" />
                    </motion.button>
                </motion.div>
            </div>
        </>
    );
}
