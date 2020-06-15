import constants from '../constants/'

export const setDismissDrawerAction = () =>{
  return {
    type: constants.DISMISS_DRAWER,
  }
}

export const toggleSearchDrawerAction = () =>{
    return {
      type: constants.TOGGLE_SEARCH,
    }
  }

  export const toggleCartDrawerAction = () =>{
    return {
      type: constants.TOGGLE_CART,
    }
  }