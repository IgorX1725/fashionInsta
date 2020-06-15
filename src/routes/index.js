import React from 'react'

import {Route, Switch} from 'react-router-dom'

import ProductsRoute from './ProductsRoute'
import ProductDetailsRoute from './ProductDetailsRoute'


const Routes = ()=>{
    return (
        <Switch>
            <Route exact path="/" component={ProductsRoute} />
            <Route path="/produto/:productName" component={ProductDetailsRoute} />
        </Switch>
    )
}

export default Routes