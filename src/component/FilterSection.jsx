import React from 'react'
import { useFilterContext } from '../context/filter_context'
import FormatPrice from '../helpers/FormatPrice';
import FilterSkeleton from './skeleton-loading/FilterSkeleton';
import './CSS/filterSection.css';

const FilterSection = () => {

    const { handleChange, filter: { text, price, min_price, max_price, category }, clearFilter, all_products } = useFilterContext();
    const { isLoading } = useFilterContext();

    const getUniquedata = (data, prop) => {

        let pata = data.map((arr) => {
            return arr[prop] 
        })
        pata = ['All', ...new Set(pata)]

        return pata
    }

    const categoryOnlyData = getUniquedata(all_products, 'category')

    if (isLoading) return <FilterSkeleton />

    return (
        <div className='filter-container'>
            <div className="filter-search">
                <form >
                    <h2 className='hidden filter-heading'>Search bar</h2>
                    <input type="text" name='text' value={text} onChange={handleChange} placeholder='Search...' />
                </form>
            </div>

            <div className="filter-category">
                <h2 className='filter-heading'>Category</h2>
                <div className='select-filter-category'>
                    <select name="category" id="category" value={category} onChange={handleChange}>
                        {categoryOnlyData.map((arr, i) =>
                            <option key={i} name='category' value={arr}  >
                                {arr}
                            </option>
                        )}
                    </select>
                </div>
            </div>

            {/* // range-filter */}

            <div className="filter-range">
                <h2 className='filter-heading'>Price</h2>

                <div className='price-filter-range'>
                    <p>
                        {/* {price} */}
                        <FormatPrice price={price} />
                    </p>

                    <input type="range" name="price" min={min_price} max={Math.ceil(max_price)} value={price} onChange={handleChange} />

                </div>
            </div>

            {/* //clear all-filters */}

            <div className="filter-btn">
                <h2 className='hidden filter-heading'>Button</h2>
                <button onClick={clearFilter} >Clear Filter</button>
            </div>
        </div>
    )
}

export default FilterSection