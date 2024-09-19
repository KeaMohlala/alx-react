// src/actions/uiActionCreators.js

import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

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
