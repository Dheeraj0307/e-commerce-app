
const Pagination = ({ setCurrentPage, totalPages, currentPage }) => {

    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    const prev = () => {
        // if (currentPage !== 1)
        setCurrentPage((prev) => prev - 1)
    }
    const next = () => {
        // if (currentPage !== totalPages)
        setCurrentPage((next) => next + 1)
    }

    const handleClick = (page) => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setCurrentPage(page)
    }

    return (
        <div className='pagination'>
            <button disabled={currentPage === 1} onClick={prev}>{'<'}</button>
            {pages.map((page, index) => {
                return <button className={page === currentPage ? 'customBtn' : ''} key={index} onClick={() => handleClick(page)}> {page}</button>
            })}
            <button disabled={currentPage === totalPages} onClick={next}>{'>'}</button>
        </div>
    )
}

export default Pagination