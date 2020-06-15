import React from 'react'
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {setDismissDrawerAction} from '../../actions/drawerActions'
import {setResultAction} from '../../actions/searchActions'

import {generate} from '../../modules/parameterGenerator'
import {addToCart, removeItemAction, removeQuantityItemAction} from '../../actions/cartActions'

import unavailableImage from '../../assets/unavailable-image.png'

import './ProductList.scss'

const ProductList = ({productData})=>{

    const {isSearchOpen} = useSelector(state => state.drawer)
    const dispatch = useDispatch()
    const urlParamiterProduct = generate(productData.name)

    if(isSearchOpen){

        const haddleRedirectClick = () =>{
            dispatch(setDismissDrawerAction())
            dispatch(setResultAction([]))
            window.scrollTo(0, 0)
        }

        return (
            <Link className="link" onClick={haddleRedirectClick} to={`/produto/${urlParamiterProduct}`}>
                <div className="item">
                    <figure className="item__image">
                    {productData.image ?  <img src={productData.image} alt="Imagem indisponível"/> : <img src={unavailableImage} alt="Imagem indisponível" />}
                    </figure>
                    <div className="item__info">
                        <p className="info__name">{productData.name}</p>
                    </div>
                    <div className="item__pricing">
                        <p className="pricing__price">{productData.actual_price}</p>
                        <p className="pricing__installments">{productData.installments}</p>
                    </div>
                </div>
            </Link>
        )
    }
    const splitResult = productData.selectedSize.split("_")
    const size = splitResult[splitResult.length -1]

    return (
            <div className="item">
                <figure className="item__image">
                    {productData.image ?  <img src={productData.image} alt="Imagem indisponível"/> : <img src={unavailableImage} alt="Imagem indisponível" />}
                    <button className="image__button" onClick={()=>dispatch(removeItemAction(productData))}>Remover Item</button>
                </figure>
                <div className="item__info">
                    <p className="info__name">{productData.name}</p>
                    <p className="info__size">{`Tam:${size}`}</p>
                    <div className="info__quantity">
                        <button className="quantity__button" onClick={()=> dispatch(removeQuantityItemAction(productData))}>-</button>
                        <p className="quantity__value">{productData.quantity}</p>
                        <button className="quantity__button" onClick={()=>dispatch(addToCart(productData))}>+</button>
                    </div>
                </div>
                <div className="item__pricing">
                    <p className="pricing__price">{productData.actual_price}</p>
                    <p className="pricing__installments">{productData.installments}</p>
                </div>
            </div>
    )
}

export default ProductList