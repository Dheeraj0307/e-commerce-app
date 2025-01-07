import React from 'react'
import HeroSection from '../component/HeroSection'
import { motion } from 'framer-motion'
import './css/About.css'

const AboutUs = () => {

    const data = {
        name: 'Sasta Mart Ecommerce '
    }

    const featureAnimation = {
        hidden: { opacity: 0, translateY: '90%' },
        visible: { opacity: 1, translateY: 0, transition: { duration: 1.5 } },
    };

    return (
        <>

            <HeroSection mydata={data} />

            <div className='max-width aboutusInfo'>
                <h1>About Us - <span>SastaMart</span> </h1>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    <h2>Who We Are</h2>
                    <p
                    >Welcome to SastaMart, your ultimate destination for quality products at unbeatable prices! We are a dedicated team of enthusiasts who believe that shopping should be affordable, convenient, and enjoyable.
                    </p>
                </motion.div>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    <h2>Our Mission</h2>
                    <p>
                        At SastaMart, our mission is simple:
                        To make high-quality products accessible to everyone without breaking the bank. We strive to bring you the best deals on a wide range of products, ensuring that you get the value you deserve.
                    </p>
                </motion.div>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    <h2>Why Choose SastaMart?</h2>
                    <p>
                        Affordable Prices: True to our name, we ensure every product is cost-effective.
                        Wide Variety: From [Eatables] to [Daily Needs], we have it all.
                        Customer-Centric: Your satisfaction is our priority. We offer seamless shopping experiences and top-notch customer support.
                        Secure Shopping: Shop with confidence knowing your information is safe with us.
                    </p>
                </motion.div>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    <h2>Our Journey</h2>
                    <p>
                        Founded in [2024], SastaMart started with the vision of making online shopping more accessible and economical for everyone. Over time, we have grown into a trusted platform for thousands of customers across [everywhere/India].
                    </p>
                </motion.div>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    <h2>Our Promise</h2>
                    <p>
                        We are committed to bringing you a hassle-free shopping experience with high-quality products and a secure, user-friendly platform.
                    </p>
                </motion.div>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                    <h2>Get in Touch</h2>
                    <p>
                        We love hearing from our customers! Whether you have a question, feedback, or just want to say hi, feel free to reach out to us at:
                    </p>
                </motion.div>

                <motion.div variants={featureAnimation} initial='hidden' whileInView='visible' className='addressbox' viewport={{ once: true }}>
                    <i> 📧 Email: support@sastamart.com  </i>
                    <i>  📞 Phone: [+1234567890]  </i>
                    <i>  📍 Address: Country :- India, state:- HP</i>
                </motion.div>

            </div >

        </>
    )
}

export default AboutUs