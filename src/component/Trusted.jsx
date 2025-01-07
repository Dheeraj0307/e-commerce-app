import React from 'react'
import { motion } from 'framer-motion'
import './CSS/trusted.css'

const Trusted = () => {

    const animationParent = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    }

    const animationChild = {
        hidden: {
            opacity: 0,
            y: 50
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        }
    }

    return (
        <div className='background'>
            <div className="brand-container">
                <motion.h3 initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ type: 'tween', duration: 2 }} viewport={{ once: true, amount: 0.5 }}>Trusted By 1000+ Companies</motion.h3>

                <motion.div variants={animationParent} animate='hidden' whileInView='show' transition={{ type: 'tween', duration: 1 }} className="brand-section-slider margin20">
                    <motion.div variants={animationChild} className="slide">
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image1.png" alt="trusted-brands" />
                    </motion.div>
                    <motion.div variants={animationChild} className="slide">
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png" alt="trusted-brands" />
                    </motion.div>
                    <motion.div variants={animationChild} className="slide">
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png" alt="trusted-brands" />
                    </motion.div>
                    <motion.div variants={animationChild} className="slide">
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png" alt="trusted-brands" />
                    </motion.div>
                    <motion.div variants={animationChild} className="slide">
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image5.png" alt="trusted-brands" />
                    </motion.div>
                    <motion.div variants={animationChild} className="slide">
                        <img src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png" alt="trusted-brands" />
                    </motion.div>
                </motion.div>
            </div>

        </div>
    )
}

export default Trusted