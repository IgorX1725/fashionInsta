import constants from '../constants/'

const INITIAL_STATE ={
    products: [],
    isLoading: false,
    errorMessage: ""
}

function reducer(state = INITIAL_STATE, action){

    if(action.type === constants.SET_IS_LOADING_ACTION ){
        state = {
            ...state,
            isLoading: true,
            products: []
        }
    }

    if(action.type === constants.SET_PRODUCTS_ACTION ){
        state = {
            ...state,
            products: action.payload,
            isLoading: false
        }
    }

    if(action.type === constants.SET_ERROR_ACTION ){
        state = {
            ...state, errorMessage: action.payload
        }
    }

    return state
}

export default reducer