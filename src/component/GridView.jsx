import React, { useEffect, useState } from 'react'
import Product from '../component/Product'
import { useFilterContext } from '../context/filter_context'
import Skelton from './skeleton-loading/Skelton';
import { motion } from 'framer-motion'
import './CSS/gridView.css';
import '../App.css'
import Pagination from './advance/advancePagination'

const GridView = ({ products }) => {

    const { isLoading, currentPage, setCurrentPage } = useFilterContext();

    const containerVarient = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    }

    const itemPerPage = 6;


    const totalPages = Math.ceil(products.length / itemPerPage);

    const lastItemIndex = currentPage * itemPerPage
    const firstItemIndex = lastItemIndex - itemPerPage

    const thisPageItems = products.slice(firstItemIndex, lastItemIndex);

    useEffect(() => {

    }, [products])

    if (isLoading) return (
        <div className='grid-view'>
            {Array.from({ length: 6 }, (v, i) => (
                <Skelton key={i} />
            ))}
        </div>

    )
    return (<>
        <motion.div variants={containerVarient}
            initial='hidden'
            animate='show'
            className='grid-view'>
            {thisPageItems.map((elem) => {
                return <Product key={elem.id} {...elem} />
            })}

        </motion.div>


        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

    </>)
}

export default GridView