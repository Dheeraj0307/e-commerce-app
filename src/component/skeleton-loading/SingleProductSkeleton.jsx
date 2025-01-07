import React from 'react'
import './SingleSkeleton.css'

const SingleProductSkeleton = () => {

    return (
        <div className='mainSK-container'>
            <div className="Sk-productContainer">
                <div className="Sk-leftSidebar">
                    <div className='Sk-leftSideImg'></div>
                </div>

                <div className="Sk-RightSidebar">

                    <div className="Sk-productInfo">
                        <div id='Sk-p-line1' className='Sk-line'></div>
                        <p className='para1'></p>
                        <p className='para1small'></p>
                        <p className='para1'></p>
                        <p className='para2'></p>
                        <p className='para2extra '></p>
                        <p className='para2extra '></p>

                        <div id='Sk-p-line4'>
                            {Array.from({ length: 4 }, (a, i) => (
                                <div id='inneritem' className='Icon' key={i}></div>
                            ))}
                        </div>
                        <div id='Sk-p-line5' className='Sk-line'></div>
                    </div>

                    <div className='Sk-buy-section'>
                        <div></div>
                        <div></div>
                    </div>
                </div>

            </div>
            <div className='Sk-heading' ></div>

            <div className='Sk-comments'>
                {Array.from({ length: 3 }, (v, i) => (
                    <div className='Sk-CommentSection' key={i}>
                        <div className='Sk-commentContainer'>
                            <div className='Sk-commentDiv'>
                                <div className='Icon'></div>
                                <div className='paraDiv'>
                                    <p className='para1'></p>
                                    <p className='para1'></p>
                                </div>
                            </div>
                            <div>
                                <p className='para2'></p>
                                <p className='para2extra '></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default SingleProductSkeleton