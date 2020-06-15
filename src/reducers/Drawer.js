import constants from '../constants'

const INITIAL_STATE = {
    isDrawerVisible:false,
    isCartOpen:false,
    isSearchOpen:false
}

const reducer = (state=INITIAL_STATE, action )=>{
    
    if(action.type === constants.DISMISS_DRAWER){
        state = {...INITIAL_STATE}
    }

    if(action.type === constants.TOGGLE_SEARCH){
        state = {
            ...state,
            isDrawerVisible: true,
            isSearchOpen:  true
        }
    }

    if(action.type === constants.TOGGLE_CART){
        state = {
            ...state,
            isDrawerVisible: true,
            isCartOpen:  true
        }
    }

    return state
}

export default reducer