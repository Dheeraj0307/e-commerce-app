import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';
import { motion } from 'framer-motion';
import './css/filtered.css'

const Filtered = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state;

    const check = (arr) => {
        const token = localStorage.getItem('token');
        if (token) {
            navigate(`/perProduct/${arr.id}`, { state: arr.id })
        } else {
            Swal.fire({
                title: "You havn't logged in yet",
                text: "Please login first before checking the details!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: 'rgb(79, 170, 26)',
                cancelButtonColor: "#d33",
                confirmButtonText: "Log in"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/loginNew')
                }
            });
        }
    }

    return (
        <>
            <div className='fullPage'>
                <div className="allProducts">
                    {data && data.map((arr, i) => (
                        <div className="singleProduct" key={i} onClick={() => check(arr)}     >
                            <div className="productImgs">
                                <motion.img src={arr.thumbnail} alt="imgs" />
                                <span className='productImg-category'>{arr.category}</span>
                            </div>
                            <div className="productTitle"><b>{arr.title}</b></div>
                        </div>
                    ))}
                </div>
            </div>


        </>
    )
}

export default Filtered