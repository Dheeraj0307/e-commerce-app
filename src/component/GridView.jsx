import React, { useEffect, Suspense, lazy } from 'react'
import { useFilterContext } from '../context/filter_context'
import Skelton from './skeleton-loading/Skelton';
import { motion } from 'framer-motion'
import './CSS/gridView.css';
import '../App.css'
import Pagination from './advance/advancePagination'

const GridView = ({ products }) => {

    const { isLoading, currentPage, setCurrentPage } = useFilterContext();
    const Product = lazy(() => import('../component/Product'))

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
            {Array.from({ length: 6 }, (_, i) => (
                <Skelton key={i} />
            ))}
        </div>

    )
    return (<Suspense fallback={<div>
        loading...
    </div>}>
        <motion.div variants={containerVarient}
            initial='hidden'
            animate='show'
            className='grid-view'>
            {thisPageItems.map((elem) => {
                return <Product key={elem.id} {...elem} />
            })}

        </motion.div>


        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

    </Suspense>)
}

export default GridView