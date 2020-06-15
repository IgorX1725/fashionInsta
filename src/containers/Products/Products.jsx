import React from 'react'
import {useSelector} from 'react-redux'

import Product from './Product'

import './Products.scss'

const Products = ()=>{

    const {products} = useSelector(state => state.catalog)

    return (
        <section className="products">
        <div className="app__container">
        <div className="products__grid">
            {products && products.map((product,index)=>{
                return <Product key={index} productdata={product} />
            })}
        </div>
        </div>
        </section>
    )
}

export default Products