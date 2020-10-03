import {
PAGE_CHANGE, UPDATE_PAGINATION
} from "../action/pagination";



const initialState = {
  totalPages: 0,
  totalItemsCount: 0,
  itemsCountPerPage: 0,
  activePage: 0,
  size: 5
};


export default (state = initialState, action) => {
  switch (action.type){
    case PAGE_CHANGE:
      return { ...state, activePage: action.pageNumber };
    case UPDATE_PAGINATION:
      return {...state ,
        totalPages: action.data.totalPages,
        totalItemsCount: action.data.totalItemsCount,
        itemsCountPerPage: action.data.itemsCountPerPage,
        activePage: action.data.activePage
      }
    default:
      return {...state}
  }
}
