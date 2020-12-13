
export const SET_CURRENT_CATEGORY  = "SET_CURRENT_CATEGORY";

export const setCurrentCategory = (category) => {
  return(
    {
      type: SET_CURRENT_CATEGORY,
      data: category,
    }
  );
}
