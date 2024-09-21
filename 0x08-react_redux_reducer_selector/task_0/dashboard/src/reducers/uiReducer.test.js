import uiReducer from './uiReducer';
import { DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/uiActionTypes';

// Initial state object
const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};

describe('uiReducer tests', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toEqual(true);
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const currentState = { ...initialState, isNotificationDrawerVisible: true };
    const state = uiReducer(currentState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toEqual(false);
  });

  it('should change isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toEqual(true);
  });

  it('should change isUserLoggedIn to false when LOGIN_FAILURE action is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state.isUserLoggedIn).toEqual(false);
  });

  it('should change isUserLoggedIn to false when LOGOUT action is passed', () => {
    const currentState = { ...initialState, isUserLoggedIn: true };
    const state = uiReducer(currentState, { type: LOGOUT });
    expect(state.isUserLoggedIn).toEqual(false);
  });
});
