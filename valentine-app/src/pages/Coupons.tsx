import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Sparkles, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Coupons() {
    const navigate = useNavigate();
    const [redeemedCoupons, setRedeemedCoupons] = useState<number[]>([]);
    const [selectedCoupon, setSelectedCoupon] = useState<number | null>(null);

    const coupons = [
        {
            id: 1,
            title: "One Free Hug",
            description: "Redeemable anytime, anywhere! 🤗",
            icon: "🤗",
            color: "#ff69b4"
        },
        {
            id: 2,
            title: "Movie Night",
            description: "Your choice of movie + unlimited snacks! 🍿",
            icon: "🎬",
            color: "#ff1493"
        },
        {
            id: 3,
            title: "Breakfast in Bed",
            description: "I'll cook your favorite breakfast! 🥞",
            icon: "🥞",
            color: "#ff0000"
        },
        {
            id: 4,
            title: "Massage Session",
            description: "30-minute relaxing massage! 💆",
            icon: "💆",
            color: "#ff69b4"
        },
        {
            id: 5,
            title: "Date Night",
            description: "Fancy dinner at your favorite restaurant! 🍝",
            icon: "🍝",
            color: "#ff1493"
        },
        {
            id: 6,
            title: "Adventure Day",
            description: "A surprise adventure planned just for you! 🎉",
            icon: "🎉",
            color: "#ff0000"
        }
    ];

    const handleRedeem = (id: number) => {
        if (!redeemedCoupons.includes(id)) {
            setRedeemedCoupons([...redeemedCoupons, id]);
            setSelectedCoupon(null);
        }
    };

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
                    style={{ width: '100%', maxWidth: '1200px' }}
                >
                    <motion.div
                        className="badge"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ marginBottom: '1rem' }}
                    >
                        <Sparkles size={14} style={{ display: 'inline', marginRight: '0.25rem' }} />
                        SPECIAL REWARDS
                        <Sparkles size={14} style={{ display: 'inline', marginLeft: '0.25rem' }} />
                    </motion.div>

                    <motion.h1
                        className="coupons-title"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        Love Coupons 💝
                    </motion.h1>

                    <p className="coupons-subtitle">
                        {redeemedCoupons.length} of {coupons.length} coupons redeemed
                    </p>

                    <div className="coupons-grid-modern">
                        {coupons.map((coupon, index) => (
                            <motion.div
                                key={coupon.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: redeemedCoupons.includes(coupon.id) ? 1 : 1.05 }}
                                onClick={() => !redeemedCoupons.includes(coupon.id) && setSelectedCoupon(coupon.id)}
                                className={`coupon-modern ${redeemedCoupons.includes(coupon.id) ? 'redeemed' : ''}`}
                                style={{ borderColor: coupon.color }}
                            >
                                <div className="coupon-corner top-left"></div>
                                <div className="coupon-corner top-right"></div>
                                <div className="coupon-corner bottom-left"></div>
                                <div className="coupon-corner bottom-right"></div>

                                <motion.div
                                    className="coupon-icon"
                                    animate={redeemedCoupons.includes(coupon.id) ? {} : {
                                        rotate: [0, 10, -10, 0],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {coupon.icon}
                                </motion.div>

                                <h3 className="coupon-title" style={{ color: coupon.color }}>
                                    {coupon.title}
                                </h3>

                                <p className="coupon-description">
                                    {coupon.description}
                                </p>

                                {redeemedCoupons.includes(coupon.id) && (
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="redeemed-stamp"
                                    >
                                        REDEEMED ✓
                                    </motion.div>
                                )}

                                {!redeemedCoupons.includes(coupon.id) && (
                                    <div className="coupon-click-hint">
                                        <Gift size={16} /> Click to redeem
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {redeemedCoupons.length === coupons.length && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="completion-message"
                        >
                            <h2 style={{ color: '#ff0000', fontSize: '2rem', marginBottom: '1rem' }}>
                                🎉 All Coupons Redeemed! 🎉
                            </h2>
                            <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '2rem' }}>
                                Thank you for being the most amazing person in my life! 💕
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/finale')}
                                className="btn btn-yes"
                            >
                                <Heart size={20} fill="currentColor" />
                                One More Thing...
                            </motion.button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Redeem Modal */}
                <AnimatePresence>
                    {selectedCoupon && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modal-overlay"
                            onClick={() => setSelectedCoupon(null)}
                        >
                            <motion.div
                                initial={{ scale: 0.8, y: 50 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.8, y: 50 }}
                                onClick={(e) => e.stopPropagation()}
                                className="modal-content"
                                style={{ maxWidth: '500px' }}
                            >
                                <button
                                    onClick={() => setSelectedCoupon(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: '#999'
                                    }}
                                >
                                    <X size={24} />
                                </button>

                                <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>
                                    {coupons.find(c => c.id === selectedCoupon)?.icon}
                                </div>

                                <h2 style={{ fontSize: '2rem', color: '#ff0000', marginBottom: '1rem' }}>
                                    {coupons.find(c => c.id === selectedCoupon)?.title}
                                </h2>

                                <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '2rem' }}>
                                    {coupons.find(c => c.id === selectedCoupon)?.description}
                                </p>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleRedeem(selectedCoupon)}
                                    className="btn btn-yes"
                                >
                                    Redeem Now! 🎁
                                </motion.button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}
