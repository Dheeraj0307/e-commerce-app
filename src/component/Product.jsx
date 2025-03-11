import React from 'react'
import FormatPrice from '../helpers/FormatPrice'
import { useNavigate } from 'react-router-dom';
import Star from './Star';
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import './CSS/product.css';
import '../App.css'

const Product = (curElem) => {

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

    const parentVarient = {
        low: { opacity: 0 },
        high: { opacity: 1, transition: { staggerChildren: 0.25 } },
    }

    const childVarient = {
        low: { opacity: 0 },
        high: { opacity: 1 },
    }
    const { id, title, thumbnail, price, category, rating } = curElem;


    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: { opacity: 1 }
                }
                }
                className='card' onClick={() => check(id)}>

                <motion.figure
                    variants={parentVarient}
                    initial="low"
                    animate="high"
                    className="productImg border-radius"
                >
                    <motion.img
                        src={thumbnail}
                        alt={title}
                        className="product-image"
                        variants={childVarient}
                        transition={{ duration: 0.5 }}
                    />
                    <motion.span
                        className="productImg-category"
                        variants={childVarient}
                        transition={{ duration: 0.5 }}
                    >
                        {category}
                    </motion.span>
                    <motion.span
                        className="product-rating"
                        variants={childVarient}
                        transition={{ duration: 0.5 }}
                    >
                        <Star rating={rating} />
                    </motion.span>
                </motion.figure>

                <div className="card-data">
                    <div className="cart-data-flex">
                        <h3 className='cart-data-title'> {title} </h3>
                        <p className='cart-data-price'> <FormatPrice price={price} /></p>
                    </div>
                </div>

            </motion.div>
        </>
    )
}

export default Product
