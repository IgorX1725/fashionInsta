import React from 'react'
import {IoIosArrowRoundBack} from 'react-icons/io'
import {useDispatch} from 'react-redux'
import {setDismissDrawerAction} from '../../actions/drawerActions'

import './DrawerHeader.scss'

const DrawerHeader = ({tag})=>{

    const dispatch = useDispatch()

    return (
        <header className="header">
                <div className="header__container">
                    <button className="header__button" onClick={()=>dispatch(setDismissDrawerAction())}>
                        <IoIosArrowRoundBack />
                    </button>
                        <span className="title">{tag}</span>
                    
                </div>
        </header>
    )
}

export default DrawerHeader