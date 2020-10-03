import { LOAD_DEPARTMENT, CREATE_DEPARTMENT } from "../action/department";

const initialState = {
  departments: [],
  code: "null",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_DEPARTMENT:
      return {
        ...state,
        departments: state.departments.push(action.data),
      };
    case LOAD_DEPARTMENT:
      let departments = action.data;
      // console.log(departments);
      let output = [];
      departments.forEach((d) => {
        output.push(d);
      });
      return {
        ...state,
        departments: output,
      };
    default:
      return state;
  }
};
