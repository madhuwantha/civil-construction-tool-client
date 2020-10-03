
import {
  NotificationManager,
} from "react-notifications";

export const CHANGE_STATE = "CHANGE_STATE";
export const ADD_MESSAGE = "ADD_MESSAGE";
export const DEL_ALL = "DEL_ALL";
export const ERROR = "ERROR";
export const SUCCESS = "SUCCESS";



export const  error = (message) => {
  NotificationManager.error(message);
  return {
    type: ERROR,
    message: error
  }
}

export const  success = (message) => {
  // console.log("in error action" + error)
  NotificationManager.success(message);
  return {
    type: SUCCESS,
    message: error
  }
}

export const isLoading = (isLoading) => {
  return {
    type: CHANGE_STATE,
    isLoading: isLoading,
  };
};

export const addMessage = (message, messageType) => {
  return {
    type: ADD_MESSAGE,
    data: {
      message: message,
      messageType: messageType,
    },
  };
};

export const delAllMessage = () => {
  return {
    type: DEL_ALL,
  };
};
