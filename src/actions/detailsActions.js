import constants from '../constants/'

export const setLoadingAction = () =>{
  return {
    type: constants.SET_LOADING_ACTION,
  }
}

export const setProductAction = (product) =>{
    return {
      type: constants.SET_PRODUCT_ACTION,
      payload: product
    }
}

export const setSelectedSizeAction = (size) =>{
  return {
    type: constants.SET_SELECTED_SIZE_ACTION,
    payload: size
  }
}

export const setProductDetailsErrorAction = (error) =>{
  return {
    type: constants.SET_ERROR_ACTION,
    payload: error
  }
}