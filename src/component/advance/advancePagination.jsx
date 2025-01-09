import React from 'react';

const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {

    const handlePageClick = (page) => {
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    };

    const renderPage = () => {

        const pages = [];
        const range = 1;

        pages.push(1);

        if (currentPage > 3) pages.push('...')

        let startPage = Math.max(2, currentPage - range);
        let endPage = Math.min(totalPages - 1, currentPage + range)


        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        if (totalPages > 1 && endPage < totalPages - 1) {
            pages.push('...')
        }

        if (totalPages > 1) {
            pages.push(totalPages)
        }

        return pages;
    }


    return (
        <div className="pagination">
            <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
            >
                {'<'}
            </button>

            {renderPage().map((page, index) => (
                page === '...' ? (
                    <span key={index} className="dots">...</span>
                ) : (
                    <button
                        key={index}
                        onClick={() => handlePageClick(page)}
                        className={page === currentPage ? 'customBtn' : ''}
                    >
                        {page}
                    </button>
                )
            ))}

            <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                {'>'}
            </button>
        </div>
    )
}
export default Pagination