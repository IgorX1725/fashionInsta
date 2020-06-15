import React from 'react'
import {useSelector} from 'react-redux'

import DrawerContent from '../DrawerContent'

import './Drawer.scss'

const Drawer = ()=>{

    const {isDrawerVisible}  = useSelector(state => state.drawer)

    return(
        <>
        <div className={isDrawerVisible ? "drawer open": "drawer"}>
            <DrawerContent />
        </div>
        {isDrawerVisible && <div className="backdrop" />}
        </>
    )
}

export default Drawer