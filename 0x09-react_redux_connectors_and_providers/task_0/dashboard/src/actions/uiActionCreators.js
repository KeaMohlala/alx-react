// src/actions/uiActionCreators.js

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';

// Action creator for login, which accepts email and password as arguments
export function login(email, password) {
  return {
    type: LOGIN,
    user: {
      email,
      password
    }
  };
}

export const boundLogin = (dispatch) => (email, password) => dispatch(login(email, password));

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE
  };
}

// Async action creator (loginRequest)
export function loginRequest(email, password) {
  return (dispatch) => {
    dispatch(login(email, password));

    return fetch('/login-success.json')
      .then((response) => response.json())
      .then((data) => {
        dispatch(loginSuccess());
      })
      .catch((error) => {
        dispatch(loginFailure());
      });
  };
}

// Action creator for logout
export function logout() {
  return {
    type: LOGOUT
  };
}

// Action creator to display the notification drawer
export function displayNotificationDrawer() {
  return {
    type: DISPLAY_NOTIFICATION_DRAWER
  };
}

export const boundDisplayNotificationDrawer = (dispatch) => () => dispatch(displayNotificationDrawer());


// Action creator to hide the notification drawer
export function hideNotificationDrawer() {
  return {
    type: HIDE_NOTIFICATION_DRAWER
  };
}

export const boundHideNotificationDrawer = (dispatch) => () => dispatch(hideNotificationDrawer());
