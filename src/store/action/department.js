import * as http from "../../helpers/http";
import {
  CREATE_DEPARTMENT_URl,
  LOAD_DEPARTMENS_URl,
  LOAD_DEPARTMENS_PAGE_URl
} from "../../constance/url";


import {error, isLoading, success} from './behavior'
import {updatePagination} from './pagination'

export const LOAD_DEPARTMENT = "LOAD_DEPARTMENT";
export const LOAD_DEPARTMENT_PAGE = "LOAD_DEPARTMENT_PAGE";
export const CREATE_DEPARTMENT = "DEPARTMENT";

export const createDepartment = (department) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const apiResult = await http.post(CREATE_DEPARTMENT_URl, {
        name: department.name,
        code: department.code,
      });
      dispatch(isLoading(false));
      dispatch(success("Department created successfully!"));
      dispatch({
        type: CREATE_DEPARTMENT,
        data: department,
      });
    } catch (err) {
      console.log(err);
      dispatch(error("Department created failed!"))
    }
  };
};

export const loadDepartments = () => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const apiResult = await http.get(LOAD_DEPARTMENS_URl);
      dispatch(isLoading(false));
      dispatch({
        type: LOAD_DEPARTMENT,
        data: apiResult,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadDepartmentsPage = (page, size) => {
  return async (dispatch) => {
    try {
      dispatch(isLoading(true));
      const apiResult = await http.get(LOAD_DEPARTMENS_PAGE_URl+ "?page="+page+"&size="+size);
      // console.log(apiResult);
      dispatch(isLoading(false));
      dispatch(updatePagination({
        totalPages: apiResult.totalPages,
        totalItemsCount: apiResult.totalElements,
        itemsCountPerPage: apiResult.size,
        activePage: apiResult.pageable?.pageNumber
      } ))
      dispatch({
        type: LOAD_DEPARTMENT,
        data: apiResult.content,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};
