import React from 'react'

import {setSelectedSizeAction} from '../../actions/detailsActions'

import {useDispatch, useSelector} from 'react-redux'

import './Sizes.scss'

const Sizes = ({sizes})=>{

    const dispatch = useDispatch()
    const {selectedSize,errorMessage} = useSelector(state => state.productDetails)

    const haddleSelectSize = (size)=>{
        dispatch(setSelectedSizeAction(size))
    }

    return (
        <div className="product__sizes">
                <p className="product__sizes__title">Escolha o tamanho:</p>
                {errorMessage && <p style={{fontSize:"1.2rem", color:"red"}}>{errorMessage}</p>}
                <div className="product__btn--group">
                {sizes && sizes.map((size,index)=>{
                    return (
                    <button
                     key={index} 
                     onClick={(e)=>haddleSelectSize(e.target.value)} 
                     value={size.sku} disabled={!size.available} 
                     title={!size.available ? "Tamanho indisponível" : ""}
                     type="button" 
                     className={size.sku === selectedSize ? "product__filter product__filter--selected" : "product__filter"}>{size.size}</button>)
                })}
                </div>
        </div>
    )
}

export default Sizes