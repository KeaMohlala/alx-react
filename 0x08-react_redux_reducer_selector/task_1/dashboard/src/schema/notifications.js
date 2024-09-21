// Import JSON data
import * as notificationsData from '../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, { idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
	author: user,
	context: message
});

export const normalizedNotifications = normalize(notificationsData, [notification]);

// Function to get notifications by userId
export function getAllNotificationsByUser(userId) {
  const { notifications, messages } = normalizedNotifications.entities;

  return Object.values(notifications) 
    .filter(notification => notification.author === userId)
    .map(notification => messages[notification.context]);
}
