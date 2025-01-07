import React from 'react'
import '../CSS/sort.css'

const SortSkeleton = () => {

    const style = {
        skeleton: {
            width: '100%',
            height: '50px',
            gap: '20px'
        },
        skeleton_line1: {
            width: '100%',
            height: '50px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        },
        skeleton_line2: {
            width: '100%',
            height: '50px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        },
        skeleton_line3: {
            width: '100%',
            height: '50px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        }
    }
    return (
        <>
            <div className='product-navbar' style={style.skeleton}>
                <div className="icons-list" style={style.skeleton_line1}> </div>

                <div className="product-availiable" style={style.skeleton_line2}></div>

                <div className="drop-down-list" style={style.skeleton_line3}></div>
            </div>
        </>
    )
}

export default SortSkeleton