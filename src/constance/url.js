const host = "http://localhost:8080/";

export const GET_MY_LETTERS = host + "letter/get-by-owner";
export const GET_LETTER_TO_ME = host + "letter/get-by-request-send-to";
export const CREATE_LETTER_URl = host + "letter/create";

export const CREATE_DEPARTMENT_URl = host + "department/create";
export const LOAD_DEPARTMENS_URl = host + "department/list";
export const LOAD_DEPARTMENS_PAGE_URl = host + "department/page";

export const CREATE_POSITION_URl = host + "position/create";
export const LOAD_POSITIONS_URl = host + "position/list";

export const CREATE_STAFF_MEMBER_URl = host + "staff-member/create";
export const LOAD_STAFF_MEMBER_URl = host + "staff-member/list";

export const CREATE_LETTER_TYPE_URl = host + "letter-type/create";
export const LOAD_LETTER_TYPE_URl = host + "letter-type/list";

export const CREATE_REQUEST_URl = host + "request/create";
export const LOAD_REQUEST_URl = host + "request/list";
