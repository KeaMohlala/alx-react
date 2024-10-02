import { Map } from 'immutable';
import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from '../actions/uiActionTypes';

// Initial state object using Immutable.js Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
});

describe('uiReducer tests with Immutable.js', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should return the initial state when SELECT_COURSE action is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state.toJS()).toEqual(initialState.toJS());
  });

  it('should change isNotificationDrawerVisible to true when DISPLAY_NOTIFICATION_DRAWER action is passed', () => {
    const state = uiReducer(initialState, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toEqual(true);
  });

  it('should change isNotificationDrawerVisible to false when HIDE_NOTIFICATION_DRAWER action is passed', () => {
    const currentState = initialState.set('isNotificationDrawerVisible', true);
    const state = uiReducer(currentState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.get('isNotificationDrawerVisible')).toEqual(false);
  });

  it('should change isUserLoggedIn to true when LOGIN_SUCCESS action is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_SUCCESS });
    expect(state.get('isUserLoggedIn')).toEqual(true);
  });

  it('should change isUserLoggedIn to false when LOGIN_FAILURE action is passed', () => {
    const state = uiReducer(initialState, { type: LOGIN_FAILURE });
    expect(state.get('isUserLoggedIn')).toEqual(false);
  });

  it('should change isUserLoggedIn to false when LOGOUT action is passed', () => {
    const currentState = initialState.set('isUserLoggedIn', true);
    const state = uiReducer(currentState, { type: LOGOUT });
    expect(state.get('isUserLoggedIn')).toEqual(false);
  });
});
