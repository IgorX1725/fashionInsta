import React from 'react'
import {useSelector} from 'react-redux'

import DrawerHeader from '../../components/DrawerHeader'
import Search from '../../components/Search'
import Cart from '../Cart'

import './DrawerContent.scss'

const DrawerContent = ()=>{

    const {isCartOpen,isSearchOpen} = useSelector(state => state.drawer)
    const {count} = useSelector(state => state.cart)

    if(isSearchOpen){
        return(
            <div className="drawer__content">
            <DrawerHeader tag="Buscar Produtos" />
            <Search />
            </div>
        )
    }
    
    if(isCartOpen){
        return (
        <div className="drawer__content">
            <DrawerHeader tag={`Sacola (${count})`} />
            <Cart />
        </div>
        )
    }

    return (<div className="drawer__content"></div>)

}

export default DrawerContent