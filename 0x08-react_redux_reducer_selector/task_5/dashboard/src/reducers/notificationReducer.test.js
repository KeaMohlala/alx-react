import { notificationReducer } from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER } from '../actions/notificationActionTypes';

describe('notificationReducer tests', () => {
  const notifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", value: "New data available" }
  ];

  const initialState = {
    notifications: [],
    filter: "DEFAULT"
  };

  it('should return the initial state', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  it('should handle FETCH_NOTIFICATIONS_SUCCESS and set isRead to false for all notifications', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: notifications
    };

    const expectedState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ and set isRead to true for the correct notification', () => {
    const action = {
      type: MARK_AS_READ,
      index: 2
    };

    const modifiedState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: false },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    const expectedState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    const state = notificationReducer(modifiedState, action);
    expect(state).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER and update the filter', () => {
    const action = {
      type: SET_TYPE_FILTER,
      filter: "URGENT"
    };

    const modifiedState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, type: "default", value: "New course available", isRead: false },
        { id: 2, type: "urgent", value: "New resume available", isRead: true },
        { id: 3, type: "urgent", value: "New data available", isRead: false }
      ]
    };

    const expectedState = {
      filter: "URGENT",
      notifications: modifiedState.notifications
    };

    const state = notificationReducer(modifiedState, action);
    expect(state).toEqual(expectedState);
  });
});
