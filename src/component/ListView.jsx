import React, { useEffect } from 'react'
import Star from '../component/Star';
import { useNavigate } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import './CSS/listView.css'

const ListView = ({ products }) => {

    const navigate = useNavigate();

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

    useEffect(() => {

    }, [])

    return (
        <div className='list-view container'>

            {products.map((elem) => {
                const { id, title, thumbnail, price, category, rating, description } = elem;

                return (
                    <motion.div
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
                            <p>
                                <p> <Star rating={rating} /> ({rating})</p>
                                <p> <b>Price:</b><FormatPrice price={price} /></p>
                            </p>
                            <p>{description.slice(0, 150)}...</p>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

export default ListView