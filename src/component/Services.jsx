import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { motion } from 'framer-motion';
import './CSS/services.css';

const Services = () => {

    const featureAnimationX = {
        visible: { opacity: 1, translateX: 0, transition: { duration: 1.5 } },
    };

    const featureAnimationY = {
        visible: { opacity: 1, translateY: 0, transition: { duration: 1.5 } },
    };

    return (
        <div className="website-features">
            <div className="website-features-container">

                <motion.div variants={featureAnimationX}
                    initial={{ opacity: 0, translateX: '-90%' }}
                    whileInView='visible'
                    // viewport={{ once: true, amount: 0.2 }}
                    className='feature per-feature flex'>
                    <i className='flex'> <TbTruckDelivery size={50} className='feature-icons' /></i>
                    <span className='feature-text'>superfast and free delivery</span>

                </motion.div>
                <div className='feature center-feature flex'>
                    <motion.div variants={featureAnimationY}
                        initial={{ opacity: 0, translateY: '-90%' }}
                        whileInView='visible'
                        // viewport={{ once: true, amount: 0.2 }}
                        className='per-feature'>
                        <i className='flex'>   <MdOutlineSecurity size={50} className='feature-icons' /></i>
                        <span className='feature-text'>non-contact shipping</span>

                    </motion.div>
                    <motion.div variants={featureAnimationY}
                        initial={{ opacity: 0, translateY: '90%' }}
                        whileInView='visible'
                        // viewport={{ once: true, amount: 0.2 }}
                        className='per-feature'>
                        <i className='flex'>   <GiReceiveMoney size={50} className='feature-icons' /></i>
                        <span className='feature-text'>money-back guaranteed</span>

                    </motion.div>
                </div>
                <motion.div variants={featureAnimationX}
                    initial={{ opacity: 0, translateX: '90%' }}
                    whileInView='visible'
                    // viewport={{ once: true, amount: 0.2 }}
                    className='feature per-feature flex'>
                    <i className='flex'>    <RiSecurePaymentLine size={50} className='feature-icons' /></i>
                    <span className='feature-text'>super secure payment system</span>

                </motion.div>

            </div>

        </div>
    )
}

export default Services