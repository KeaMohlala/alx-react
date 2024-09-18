// Import JSON data
import * as notificationsData from '../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity("users");
const message = new schema.Entity('messages', {}, { idAttribute: 'guid'});
const notification = new schema.Entity('notifications', {
	author: user,
	context: message
});


// Function to get notifications by userId
export function getAllNotificationsByUser(userId) {
  return notificationsData.default.filter((notification) => notification.author.id === userId)
    .map((notification) => notification.context);
}

export const normalizedNotifications = normalize(notificationsData, [notification]);
