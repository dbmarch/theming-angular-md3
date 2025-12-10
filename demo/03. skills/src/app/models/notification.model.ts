import { NotificationType } from "./notification-type.model";

export interface Notification {
    readonly id: number; 
    readonly message: string; 
    readonly type: NotificationType; 
    readonly timestamp: string; 
  }