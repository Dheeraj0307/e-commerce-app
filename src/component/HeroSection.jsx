import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"
import './CSS/heroSection.css'

const HeroSection = ({ mydata }) => {

    const { name } = mydata;

    const navigate = useNavigate();

    return (
        <div className='hero-section'>
            <div className='hero-section-para' style={{ maxWidth: '500px' }}>
                <div>
                    <b>welcome to</b>
                    <h1> {name} </h1>
                </div>
                <p className='margin20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, molestiae officiis! Doloremque perferendis magnam et error porro, id quod laudantium saepe pariatur dolorem, temporibus, tenetur repellendus ab consectetur!</p>
                <motion.button disabled animate={{ x: 0 }} initial={{ x: 200 }} transition={{ type: 'tween', delay: 0.5, duration: 1 }} onClick={() => navigate('/products')}>Shop now</motion.button>
            </div>
            <motion.div animate={{ x: 0 }} initial={{ x: 190 }} transition={{ delay: 0.5, duration: 1 }} className='back-green'></motion.div>
            <motion.div animate={{ x: 0 }} initial={{ x: -190 }} transition={{ delay: 0.5, duration: 1 }} className='back-green-inverts'></motion.div>
            <motion.div animate={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 1.5 }} transition={{ delay: 0.5, duration: 1 }} className='hero-banner'>
                <img src="/images/grocery.jpg" alt="" width={500} />
            </motion.div>
        </div>
    )
}

export default HeroSection