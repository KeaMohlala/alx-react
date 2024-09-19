// src/actions/uiActionCreators.test.js

import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('UI Action Creators', () => {
  it('login should return the correct action object', () => {
    const email = 'test@example.com';
    const password = 'password123';
    const result = login(email, password);
    expect(result).toEqual({
      type: LOGIN,
      user: {
        email,
        password
      }
    });
  });

  it('logout should return the correct action object', () => {
    const result = logout();
    expect(result).toEqual({
      type: LOGOUT
    });
  });

  it('displayNotificationDrawer should return the correct action object', () => {
    const result = displayNotificationDrawer();
    expect(result).toEqual({
      type: DISPLAY_NOTIFICATION_DRAWER
    });
  });

  it('hideNotificationDrawer should return the correct action object', () => {
    const result = hideNotificationDrawer();
    expect(result).toEqual({
      type: HIDE_NOTIFICATION_DRAWER
    });
  });
});
