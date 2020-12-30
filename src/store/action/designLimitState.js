
export const SET_CURRENT_LIMIT_STATE  = "SET_CURRENT_LIMIT_STATE";

export const setCurrentLimitState = (limitState) => {
  return(
    {
      type: SET_CURRENT_LIMIT_STATE,
      data: limitState,
    }
  );
}
