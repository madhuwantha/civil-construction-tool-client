import {error, isLoading, success} from './behavior'
export const SET_CURRENT_METHOD  = "SET_CURRENT_METHOD";

export const setCurrentMethod = (method) => {
  return(
    {
      type: SET_CURRENT_METHOD,
      data: method,
    }
  );
}
