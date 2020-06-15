import constants from '../constants/'

const INITIAL_STATE ={

    loading:false,
    product:{},
    errorMessage:"",
    selectedSize:""
}

function reducer(state = INITIAL_STATE, action){

    if(action.type === constants.SET_LOADING_ACTION ){
        state = {
            ...INITIAL_STATE,
            loading: true
        }
    }

    if(action.type === constants.SET_PRODUCT_ACTION ){
        state = {
            ...state,
            product: action.payload,
            loading: false,
        }
    }

    if(action.type === constants.SET_SELECTED_SIZE_ACTION ){
        state = {
            ...state,
            selectedSize: action.payload,
        }
    }

    if(action.type === constants.SET_ERROR_ACTION ){
        state = {
            ...state,
            errorMessage: action.payload
        }
    }

    return state
}

export default reducer