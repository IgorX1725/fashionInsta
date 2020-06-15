import React from 'react'
import {Link} from 'react-router-dom'
import {GrSearch} from 'react-icons/gr'
import {RiShoppingCartLine} from 'react-icons/ri'
import {toggleCartDrawerAction,toggleSearchDrawerAction} from '../../actions/drawerActions'

import {useSelector, useDispatch} from 'react-redux'

import Logo from '../../components/Logo'

import './Header.scss'

const Header = ()=>{

    const dispatch = useDispatch()

    const {count} = useSelector(state => state.cart)

    return(
        <header>
            <div className="app__container">
                <div className="header__container">
                    <Link to="/" className="header__logo">
                        <Logo />
                    </Link>
                    <div className="header__buttons">
                        <button className="button button__search" onClick={()=>dispatch(toggleSearchDrawerAction())}>
                            <GrSearch  />
                        </button>
                        <button className="button button__cart" onClick={()=>dispatch(toggleCartDrawerAction())}>
                            <RiShoppingCartLine />
                            <sup className="counter"><span className="counter__value">{count}</span></sup>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header