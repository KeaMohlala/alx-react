import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('Notification Selectors', () => {
  
  // Mock initial state
  const state = fromJS({
    filter: 'DEFAULT',
    notifications: {
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
      3: { id: 3, isRead: false, type: 'default', value: 'New data available' },
    },
  });

  it('should return the correct filter type', () => {
    const filter = filterTypeSelected(state);
    expect(filter).toEqual('DEFAULT');
  });

  it('should return the list of notifications as a Map', () => {
    const notifications = getNotifications(state);
    expect(notifications.size).toEqual(3);
    expect(notifications.get(1).value).toEqual('New course available');
  });

  it('should return the list of unread notifications', () => {
    const unreadNotifications = getUnreadNotifications(state);
    expect(unreadNotifications.size).toEqual(2); // Only two unread notifications
    expect(unreadNotifications.get(1).value).toEqual('New course available');
    expect(unreadNotifications.get(3).value).toEqual('New data available');
  });
});
