import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest, loginSuccess, loginFailure, LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionCreators';
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



// Create a mock store with redux-thunk
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS when loginRequest succeeds', () => {
    // Simulate a successful API response
    fetchMock.getOnce('/login-success.json', {
      body: { },
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE when loginRequest fails', () => {
    // Simulate a failed API response
    fetchMock.getOnce('/login-success.json', 404);

    const expectedActions = [
      { type: LOGIN, user: { email: 'test@test.com', password: 'password' } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest('test@test.com', 'password')).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
