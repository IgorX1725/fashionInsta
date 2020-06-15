import constants from '../constants/'

export const addToCart = (item) =>{
  return {
    type: constants.ADD_TO_CART,
    payload: item
  }
}

export const setSubtotalAction = (subtotal) =>{
  return {
    type: constants.SET_SUBTOTAL,
    payload: subtotal
  }
}

export const removeQuantityItemAction = (item) =>{
  return {
    type: constants.REMOVE_QUANTITY_ITEM,
    payload: item
  }
}

export const removeItemAction = (item) =>{
  return {
    type: constants.REMOVE_ITEM,
    payload: item
  }
}