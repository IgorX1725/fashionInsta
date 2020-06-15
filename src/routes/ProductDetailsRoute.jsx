import React, {useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'

import {setProductAction,setLoadingAction} from '../actions/detailsActions'
import {generate} from '../modules/parameterGenerator'

import ProductDetails from '../containers/ProductDetails/ProductDeatils'

const ProductDetailsRoute = ()=>{

    const {products} = useSelector(state=>state.catalog)

    const {productName} = useParams()
    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(setLoadingAction()) 

        const product = products.filter(product=>{
            const name = generate(product.name)
            return name === productName

        })[0]
        dispatch(setProductAction(product))
    },[dispatch, productName, products])

    return <ProductDetails />
}

export default ProductDetailsRoute