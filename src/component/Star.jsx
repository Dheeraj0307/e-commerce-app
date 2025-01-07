import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Star = ({ rating }) => {

    const reviewStar = Array.from({ length: 5 }, (_, index) => {

        let number = index + 0.5;

        return (
            <span key={index}   >
                {
                    rating >= index + 1 ? (<FaStar className='star' />) : (rating >= number) ? (<FaStarHalfAlt className='star' />) : (<FaRegStar className='star' />)
                }
            </span>
        )
    })

    return (
        <i>
            {reviewStar}
        </i>
    )
}

export default Star