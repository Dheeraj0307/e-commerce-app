import React from 'react'

const Skelton = () => {

    const style = {
        skeleton: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            width: '100%',
            height: '330px',
            color: '#fff',
            padding: '10px',
            border: 'none',
        },
        skeleton_header: {
            width: '100%',
            height: '275px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        },
        skeleton_body: {
            width: '100%',
            height: '30px',
        },
        skeleton_line: {
            width: '100%',
            height: '30px',
            backgroundColor: '#e0e0e0',
            borderRadius: '10px',
            animation: 'skeleton-loading 1.5s infinite',
        }
    }

    return (
        <div className="skeleton" style={style.skeleton}>
            <div className="skeleton_header" style={style.skeleton_header}>
            </div>
            <div className="skeleton_body" style={style.skeleton_body}>
                <div className="skeleton_line" style={style.skeleton_line}></div>
            </div>
        </div>
    );
};

export default Skelton