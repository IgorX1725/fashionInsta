import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setResultAction} from '../../actions/searchActions'

import ProductsList from '../ProductsList'

import './Search.scss'


const Search = ()=> {

    const {products} = useSelector(state => state.catalog)
    const {itemsFound} = useSelector(state => state.search)
    const dispatch = useDispatch()

    const handdleChange =({target}) =>{
        const text = (target.value).toLowerCase()
        if(text.length === 0){
            dispatch(setResultAction([]))
            return
        }
        const result = products.filter(product =>product.name.toLowerCase().includes(text))

        dispatch(setResultAction(result))
    }
    return (
        <div className="search">
            <div className="search__form">
                <input type="text" onChange={(e) => handdleChange(e)} placeholder="Buscar por produtos"/>
            </div>
            <ProductsList items={itemsFound} />
        </div>
    )
}

export default Search