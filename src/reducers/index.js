import {combineReducers} from 'redux'

import cart from './Cart'
import catalog from './Catalog'
import drawer from './Drawer'
import productDetails from './ProductDetails'
import router from './Router'
import search from './Search'

const rootReducer = combineReducers({cart, drawer, catalog, productDetails,router,search})

export default rootReducer