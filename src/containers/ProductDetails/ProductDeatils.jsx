import React, {useRef} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import Ink from 'react-ink'

import {setProductDetailsErrorAction} from '../../actions/detailsActions'
import {addToCart} from '../../actions/cartActions'
import Sizes from '../../components/Sizes'
import LoadingLogo from '../../components/LoadingLogo'

import unavailableImage from '../../assets/unavailable-image.png'

import './ProductDetails.scss'

const ProductDetails = ()=>{
    const ref = useRef();
    const dispatch = useDispatch()
    const {product,loading, selectedSize} = useSelector(state =>state.productDetails)

    const handleCartAddItem = ()=>{
        if(selectedSize){

            let item = {...product,selectedSize, quantity:1}
            dispatch(addToCart(item))

            return
        }
        dispatch(setProductDetailsErrorAction("É necessário escolher o tamanho"))
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
    }

    if(loading){
        return <LoadingLogo text={"Carregando..."} />
    }

    if(product === undefined){
        return <Redirect to='/' />
    }

    return( 
        <div className="single__product">
            <figure className="product__image">
            {product.image ?  <img src={product.image} alt="Imagem indisponível"/> : <img src={unavailableImage} alt="Imagem indisponível" />}
            </figure>
            <div className="product__content">
                <h3 className="product__name">{product.name}</h3>
                <div className="product__pricing">
                {product.discount_percentage ?
                    <>
                    <span className="product__price--old-price">{product.regular_price}</span>
                    <span className="product__price">{product.actual_price}</span>
                    </> :
                    <span className="product__price">{product.regular_price}</span>
                    }
                    <span ref={ref} className="product__price--installments">{` em até ${product.installments}`}</span>
                </div>
                    <Sizes  sizes={product.sizes} />
                    <div className="product__actions">
                    <button type="button" onClick={handleCartAddItem} className="product__add-to-cart">
                        Adicionar à Sacola
                        <Ink></Ink>
                    </button>
                </div>
            </div>
        </div>

    )
}

export default ProductDetails