import React from 'react'
import {ReactComponent} from '../../assets/loadingLogo.svg'

import './LoadingLogo.scss'

const LoadingLogo = ({text})=>{
    return <div className="container">
         <ReactComponent className="container__logo" /> 
            {text && <span>{text}</span>}
         </div>

}

export default LoadingLogo