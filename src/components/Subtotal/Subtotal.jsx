import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {setSubtotalAction} from '../../actions/cartActions'

import './Subtotal.scss'

const Subtotal = ()=>{

    const dispatch = useDispatch()
    const {items,subtotal} = useSelector(state => state.cart)
    const re = /(\d+,\d)/
    const regex = new RegExp(re)

    useEffect(()=>{
        const subtotal = items.reduce((acumulator, item)=>{
            const price = regex
            .exec(item.actual_price)[0]
            .replace(",",".")
            return  Number(price) * item.quantity + acumulator 
        },0)
        dispatch(setSubtotalAction(subtotal.toFixed(2).replace(".",",")))
    },[dispatch, items])

    return (
        <div className="subtotal">{`Subtotal -> R$ ${subtotal}`}</div>
    )
}

export default Subtotal