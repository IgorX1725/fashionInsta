import constants from '../constants'

const INITIAL_STATE = {
    itemsFound : []
}

const reducer = (state=INITIAL_STATE, action )=>{

    if(action.type === constants.SET_RESULT_SEARCH){
        state = {
            ...state,
            itemsFound: action.payload
        }
    }
    return state
}

export default reducer