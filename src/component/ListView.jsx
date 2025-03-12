import React from 'react'
import Star from '../component/Star';
import { useNavigate } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import './CSS/listView.css'
import Pagination from './advance/advancePagination'

import { useFilterContext } from '../context/filter_context';


const ListView = ({ products }) => {

    const navigate = useNavigate();
    const { currentPage, setCurrentPage } = useFilterContext();

    const itemPerPage = 4;

    const totalPages = Math.ceil(products.length / itemPerPage);

    const lastItemIndex = currentPage * itemPerPage
    const firstItemIndex = lastItemIndex - itemPerPage

    const thisPageItems = products.slice(firstItemIndex, lastItemIndex);


    const check = (id) => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate(`/perProduct/${id}`)
        } else {
            Swal.fire({
                title: "You havn't logged in yet",
                text: "Please login first before checking the details!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: 'rgb(79, 170, 26)',
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in",
                scrollbarPadding: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/loginNew')
                }
            });
        }
    }

    return (
        <div className='list-view container'>

            {thisPageItems.map((elem, index) => {
                const { id, title, thumbnail, price, category, rating, description } = elem;

                return (
                    <motion.div
                        key={index}
                        animate={{ translateY: '50%', opacity: 0 }}
                        whileInView={{ translateY: 0, opacity: 1 }}
                        transition={{ type: 'tween', duration: 1 }}
                        viewport={{ once: true }}
                        className='grid-two-column' onClick={() => check(id)}>
                        <figure className='figure-list-view-img' >
                            <img src={thumbnail} alt={category} className='list-view-img' />
                        </figure>

                        <div className='card-data'>
                            <h3>{title}</h3>
                            <div>
                                <p> <Star rating={rating} /> ({rating})</p>
                                <p> <b>Price:</b><FormatPrice price={price} /></p>
                            </div>
                            <p>{description.slice(0, 150)}...</p>
                        </div>
                    </motion.div>
                )
            })}


            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />

        </div>
    )
}

export default ListView