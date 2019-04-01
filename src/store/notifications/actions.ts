import {INotificationAction, NotificationActionTypes} from "./types";

export const notificationMarkRead = (id: number): INotificationAction => {
    return {
        type: NotificationActionTypes.NOTIFICATION_MARK_READ,
        notificationId: id
    };
};

export const notificationMarkUnRead = (id: number): INotificationAction => {
    return {
        type: NotificationActionTypes.NOTIFICATION_MARK_UNREAD,
        notificationId: id
    };
};