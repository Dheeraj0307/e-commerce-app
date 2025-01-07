import React, { useEffect } from 'react'
import Product from '../component/Product'
import { useFilterContext } from '../context/filter_context'
import Skelton from './skeleton-loading/Skelton';
import { motion } from 'framer-motion'
import './CSS/gridView.css';
import '../App.css'

const GridView = ({ products }) => {

    const { isLoading } = useFilterContext();

    const containerVarient = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    }

    useEffect(() => {

    }, [products])

    if (isLoading) return (
        <div className='grid-view'>
            {Array.from({ length: 6 }, (v, i) => (
                <Skelton key={i} />
            ))}
        </div>

    )
    return (
        <motion.div variants={containerVarient}
            initial='hidden'
            animate='show'
            className='grid-view'>
            {products.map((elem) => {
                return <Product key={elem.id} {...elem} />
            })}

        </motion.div>
    )
}

export default GridView