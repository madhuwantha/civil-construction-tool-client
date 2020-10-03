

export const PAGE_CHANGE = "PAGE_CHANGE";
export const UPDATE_PAGINATION = "UPDATE_PAGINATION";


export const pageChange = (pageNumber) =>{
  return {
    type: PAGE_CHANGE,
    pageNumber: pageNumber
  }
}


export const updatePagination = (stateData) =>{
  return {
    type: UPDATE_PAGINATION,
    data: stateData
  }
}
