import React from 'react'
import '../CSS/filterSection.css'

const FilterSkeleton = () => {

    const style = {
        skeleton: {
            width: '100%',
            height: '380px',
            color: '#fff',
            cursor: 'pointer',
        },
        skeleton_line1: {
            width: '100%',
            height: '48px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        },
        skeleton_line2: {
            width: '100%',
            height: '97px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        },
        skeleton_line3: {
            width: '100%',
            height: '96px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        },
        skeleton_line4: {
            width: '100%',
            maxWidth: '200px',
            margin: 'auto',
            height: '48px',
            backgroundColor: '#e0e0e0',
            borderRadius: '30px',
            animation: 'skeleton-loading 1.5s infinite',
        },
    }

    return (
        <div className='filter-container' style={style.skeleton}>
            <div className='filter-search' style={style.skeleton_line1}></div>
            <div className="filter-category" style={style.skeleton_line2}></div>
            <div className="filter-range" style={style.skeleton_line3}></div>
            <div className="filter-btn" style={style.skeleton_line4}></div>
        </div>
    )
}

export default FilterSkeleton