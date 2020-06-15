import React, {useEffect} from 'react'
import {setIsLoadingAction, setProductsAction} from '../actions/catalogActions'
import {useDispatch, useSelector} from 'react-redux'

import Products from '../containers/Products'
import endpoints from '../modules/endpoints'
import fetchRequest from '../modules/fetchRequest'
import LoadingLogo from '../components/LoadingLogo'

const ProductsRoute = ()=>{

    const dispatch = useDispatch()
    const {isLoading} = useSelector(state=>state.catalog)

    useEffect(()=>{
        dispatch(setIsLoadingAction())
        
        const catalog = fetchRequest.get(endpoints.catalog)
        
        catalog.then(data => dispatch(setProductsAction(data)))
    
    },[dispatch])

    if(isLoading){
        return <LoadingLogo text={"Carregando..."} />
    }

    return (<Products/>)
}

export default ProductsRoute