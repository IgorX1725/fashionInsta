import constants from '../constants/'

export const setResultAction = (result) =>{
  return {
    type: constants.SET_RESULT_SEARCH,
    payload: result
  }
}

export default setResultAction