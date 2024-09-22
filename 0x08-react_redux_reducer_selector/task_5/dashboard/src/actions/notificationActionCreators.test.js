import { markAsAread, setNotificationFilter } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from './notificationActionTypes';

describe('Notification Action Creators', () => {
  it('markAsAread should return the correct action object', () => {
    const result = markAsAread(1);
    expect(result).toEqual({
      type: MARK_AS_READ,
      index: 1
    });
  });

  it('setNotificationFilter should return the correct action object with DEFAULT filter', () => {
    const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
    expect(result).toEqual({
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.DEFAULT
    });
  });

  it('setNotificationFilter should return the correct action object with URGENT filter', () => {
    const result = setNotificationFilter(NotificationTypeFilters.URGENT);
    expect(result).toEqual({
      type: SET_TYPE_FILTER,
      filter: NotificationTypeFilters.URGENT
    });
  });
});
