import React from 'react'
import { useFilterContext } from '../context/filter_context'
import GridView from '../component/GridView';
import ListView from '../component/ListView';

const ProductList = () => {

    const { filter_product, grid_view } = useFilterContext();

    if (grid_view) {

        return <GridView products={filter_product} />

    } else {

        return <ListView products={filter_product} />

    }
}

export default ProductList