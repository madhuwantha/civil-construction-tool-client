
export const SET_CURRENT_CODE  = "SET_CURRENT_CODE";

export const setCurrentCode = (code) => {
  return(
    {
      type: SET_CURRENT_CODE,
      data: code,
    }
  );
}
