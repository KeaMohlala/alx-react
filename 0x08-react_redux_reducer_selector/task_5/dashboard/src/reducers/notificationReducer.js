import { MARK_AS_READ, FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { fromJS, Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
  notifications: Map(),
  filter: "DEFAULT"
});

export default const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);
      return state.merge({
        notifications: fromJS(normalizedData.entities.notifications),
      });
    }

    case MARK_AS_READ: {
      return state.setIn(['notifications', action.index, 'isRead'], true);
    }

    case SET_TYPE_FILTER: {
      return state.set('filter', action.filter);
    }

    default:
      return state;
    }
};
