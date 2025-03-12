import React from 'react'
import ProductList from '../component/ProductList'
import FilterSection from '../component/FilterSection'
import Sort from '../component/Sort'
import './css/products.css'

const Products = () => {

    return (
        <>
            <div className='grid-filter-column'>
                <div className='product-filter-section'>
                    <FilterSection />
                </div>

                <div className='product-view-sort'>
                    <div className='sort-filtering'>
                        <Sort />
                    </div>
                    <div className="main-product">
                        <ProductList />
                    </div>
                </div>

            </div>
        </>
    )
}

export default Products