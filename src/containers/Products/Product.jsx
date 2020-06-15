import React from 'react'
import unavailableImage from '../../assets/unavailable-image.png'

import {generate} from '../../modules/parameterGenerator'

import {Link} from 'react-router-dom'

import './Product.scss'

const Product = ({productdata})=>{

    const urlParamiterProduct = generate(productdata.name)

    const haddleClick = () =>{
        window.scrollTo(0, 0)
    }
    return(
        <div className="products__box" >
            <Link className="product__link" onClick={haddleClick} to={`/produto/${urlParamiterProduct}`} >
                <figure>
                {productdata.discount_percentage && <span className="badge badge--discount">{`-${productdata.discount_percentage}`}</span>}
                {productdata.image ?  <img src={productdata.image} alt="Imagem indisponível"/> : <img src={unavailableImage} alt="Imagem indisponível" />}
                    <h3 className="product__name">{productdata.name}</h3>
                </figure>
                <div className="prices">
                    {productdata.discount_percentage ?
                    <>
                    <span className="product__price--old-price">{productdata.regular_price}</span>
                    <span className="product__price">{productdata.actual_price}</span>
                    </> :
                    <span className="product__price">{productdata.regular_price}</span>
                    }
                </div>
            </Link>
        </div>
    )
}

export default Product