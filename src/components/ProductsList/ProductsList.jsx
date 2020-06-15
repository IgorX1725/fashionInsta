import React from 'react'

import ProductList from './ProductList'

import './ProductsList.scss'

const ProductsList = ({items})=>{

    return (
        <div className="product__list">
            
            {items.length > 0 ? items.map((item, index) =>{
                return <ProductList key={index} productData={item} />
            }):
             <div className="list__notfount">Nenhum item foi localizado ...</div>
        }
        </div>
    )
}

export default ProductsList