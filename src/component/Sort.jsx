import React from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from '../context/filter_context';
import SortSkeleton from './skeleton-loading/SortSkeleton';
import './CSS/sort.css'

const Sort = () => {

    const { sorting_products, setGridView, setListView, grid_view, filter_product, Sorting, isLoading } = useFilterContext();

    if (isLoading) return <SortSkeleton />;

    return (
        <div className='product-navbar'>
            <div className="icons-list">
                <button className={grid_view ? 'active-icon-list-btn icon-list-btn nohover' : 'icon-list-btn nohover'} onClick={setGridView}><BsFillGridFill className='product-icon' /></button>
                <button className={grid_view ? 'icon-list-btn nohover' : 'active-icon-list-btn icon-list-btn nohover'} onClick={setListView} ><BsList className='product-icon' /></button>
            </div>

            {/* {2nd column} */}
            <div className="product-availiable">
                <h3>{filter_product.length}  Product Availiable</h3>
            </div>

            {/* {3rd column} */}

            <div className="drop-down-list">
                <form action="#">
                    <label htmlFor="sort">
                        <select name="sorting_products" id="sort" value={sorting_products} onChange={Sorting}>
                            <option value="none" disabled>Sorting</option>
                            <option value="lowest">Price: Low to High</option>
                            <option value="highest">Price: High to Low</option>
                            <option value="a-z">Name: A to Z</option>
                            <option value="z-a">Name: Z to A</option>
                        </select>
                    </label>
                </form>
            </div>
        </div>
    )
}

export default Sort