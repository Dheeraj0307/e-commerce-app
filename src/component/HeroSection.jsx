import React, { memo, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import './CSS/heroSection.css';

const HeroSection = memo(({ mydata }) => {
    const { name } = mydata;
    const navigate = useNavigate();

    useEffect(() => {
        console.log("HeroSection mounted");
    }, []);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 1 } },
            }}
            className="hero-section"
        >
            <div className="hero-section-para" style={{ maxWidth: '500px' }}>
                <div>
                    <b>Welcome to</b>
                    <h1>{name}</h1>
                </div>
                <p className="margin20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis, molestiae officiis! Doloremque perferendis magnam et
                    error porro, id quod laudantium saepe pariatur dolorem,
                    temporibus, tenetur repellendus ab consectetur!
                </p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    onClick={() => navigate('/products')}
                >
                    Shop now
                </motion.button>
            </div>
            <motion.div
                animate={{ width: 300, translateX: 0 }}
                initial={{ width: 0, translateX: '-100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="back-green"
            />
            <motion.div
                animate={{ width: 300, translateX: 0 }}
                initial={{ width: 0, translateX: '100%' }}
                transition={{ delay: 0.5, duration: 1 }}
                className="back-green-inverts"
            />
            <motion.div
                animate={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 1.5 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="hero-banner"
            >
                <img src="/images/grocery.jpg" alt="Grocery" width={500} />
            </motion.div>
        </motion.div>
    );
});
export default HeroSection;