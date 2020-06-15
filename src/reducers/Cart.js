import constants from '../constants'
import _ from 'lodash'

const INITIAL_STATE = {
    items : [],
    count : 0,
    subtotal: 0
}

const reducer = (state=INITIAL_STATE, action )=>{
    
    if(action.type === constants.ADD_TO_CART){

        let item = state.items.filter((item)=>{
            return item.name === action.payload.name && item.selectedSize === action.payload.selectedSize
    
        })[0]

        if(item){
            state.items = state.items.map((item)=>{
                if(item.name === action.payload.name && item.selectedSize === action.payload.selectedSize){
                    item.quantity = item.quantity + 1
                    return item
                }
                return item
            })
        }else{
            state = {
                ...state,
                items : [...state.items, action.payload]
            }
        }
            state = {
                ...state,
                count : state.count + 1
            }
    }

    if(action.type === constants.REMOVE_QUANTITY_ITEM){

        if(action.payload.quantity > 1){

        const items = state.items.map((item)=>{
            if(item.name === action.payload.name && item.selectedSize === action.payload.selectedSize){
                item.quantity = item.quantity - 1
            }
            return item
    
        })
            state = {...state, items:[...items], count : state.count - 1}
        }
    }

    if(action.type === constants.REMOVE_ITEM){
        
        const items = state.items.filter((item)=>{
            return !_.isEqual(item, action.payload)
        })

        state = {...state, items:[...items], count : state.count - action.payload.quantity}
    }

    if(action.type === constants.SET_SUBTOTAL){
        state={
            ...state,
            subtotal: action.payload
        }
    }
    return state
}

export default reducer