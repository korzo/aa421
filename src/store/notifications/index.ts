import {INotificationAction, INotificationState, NotificationActionTypes} from "./types";

const defaultState: INotificationState = {
    notifications:[
        {
            id: 1,
            title: 'Notifikácia 1',
            read: false
        },
        {
            id: 2,
            title: 'Notifikácia 2',
            read: false
        },
        {
            id: 3,
            title: 'Notifikácia 3',
            read: false
        },
    ]
};

export const notificationsReducer = (
    state: INotificationState = defaultState,
    action: INotificationAction
): INotificationState => {
    switch (action.type) {
        case NotificationActionTypes.NOTIFICATION_MARK_READ:
            return {
                notifications: state.notifications.map(e => {
                    if(e.id !== action.notificationId) {
                        return e;
                    }

                    e.read = true;
                    return e;
                })
            };

        case NotificationActionTypes.NOTIFICATION_MARK_UNREAD:
            return {
                notifications: state.notifications.map(e => {
                    if(e.id !== action.notificationId) {
                        return e;
                    }

                    e.read = false;
                    return e;
                })
            };
    }
    return state;
};