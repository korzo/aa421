export type NotificationType = {
    id: number;
    title: string;
    read: boolean;
};

export interface INotificationState {
    notifications: NotificationType[];
}

export enum NotificationActionTypes {
    NOTIFICATION_MARK_READ = "NOTIFICATION_MARK_READ",
    NOTIFICATION_MARK_UNREAD = "NOTIFICATION_MARK_UNREAD",

}

export interface INotificationAction {
    type: NotificationActionTypes;
    notificationId: number;
}