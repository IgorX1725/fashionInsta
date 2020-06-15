import constants from '../constants/'

export const setIsLoadingAction = () =>{
  return {
    type: constants.SET_IS_LOADING_ACTION
  }
}
  
  export const setProductsAction = (products) => {
    return {
    type: constants.SET_PRODUCTS_ACTION,
    payload: products,
  }}

  export const setErrorAction = (errorMessage) => {
    return {
    type: constants.SET_ERROR_ACTION,
    payload: errorMessage,
  }
}
  
