import React from 'react'
import {useSelector} from 'react-redux'

import Subtotal from '../../components/Subtotal'
import ProductsList from '../../components/ProductsList'

import './Cart.scss'

const Cart = ()=>{

    const {items} = useSelector(state => state.cart)
    
    return (
        <div className="cart">
            <ProductsList items={items} />
            <Subtotal />
        </div>
    )
}

export default Cart