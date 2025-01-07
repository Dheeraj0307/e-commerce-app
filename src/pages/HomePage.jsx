import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroSection from '../component/HeroSection';
import Services from '../component/Services';
import Trusted from '../component/Trusted';
import { useFilterContext } from '../context/filter_context';
import { motion } from 'framer-motion';
import './css/homepage.css'

const HomePage = () => {
    const { products } = useFilterContext();
    const navigate = useNavigate();

    const data = {
        name: 'Sasta Mart',
    };

    // const getRandom = (min, max) => {
    //     return Math.floor(Math.random() * (max - min) + min);
    // }
    // const kkk = () => {
    //     const ran = getRandom(1, products.length);
    //     products && (
    //         products.filter((arr) => {
    //             if (arr.id === ran)
    //                 return (arr.thumbnail)
    //         })
    //     )
    // }

    const filterAccToSelect = (categoryType) => {
        const dataFilter = products.filter((arr) => {
            if (arr.category === categoryType) return arr
        }
        )
        return navigate('/filtered', { state: dataFilter })
    }

    const animation = {
        hidden: {
            opacity: 0,
            y: 150
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 1
            }
        }
    }

    return (<>

        <HeroSection mydata={data} />

        <div className='background'>
            <div className="feature-services">
                <div className='feature-services-para'>
                    <h5>check now!</h5>
                    <p>Our Feature Services</p>
                </div>

                {/* //features */}

                <div className='feature-products'>
                    <motion.div variants={animation} animate='visible' initial='hidden' onClick={() => filterAccToSelect('beauty')}>
                        <i> <img src='/images/3.jpg' alt="12" /> <span>beauty</span></i>
                        <p>beauty</p>
                    </motion.div>
                    <motion.div variants={animation} animate='visible' initial='hidden' onClick={() => filterAccToSelect('groceries')}>
                        <i>  <img src='/images/1.jpg' alt="23" /> <span>groceries</span></i>
                        <p>groceries</p>
                    </motion.div>
                    <motion.div variants={animation} animate='visible' initial='hidden' onClick={() => filterAccToSelect('furniture')}>
                        <i> <img src='/images/2.jpg' alt="34" /><span>furniture</span></i>
                        <p>furniture</p>
                    </motion.div>

                </div>
                {/* ////// */}


            </div>
        </ div>

        <Services />


        <Trusted />

    </>
    )
}

export default HomePage