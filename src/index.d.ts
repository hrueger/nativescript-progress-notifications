import { ProgressOptions, CommonNotification, UpdateOptions } from './interfaces';
export declare function show(_options: ProgressOptions): CommonNotification;
export declare function update(notification: CommonNotification, options: UpdateOptions): CommonNotification;
export declare function dismiss(id: number): void;
export interface ProgressOptions{
  id: number,
  title?: string,
  message?: string,
  indeterminate?:boolean,
  progressValue?: number,
  ongoing?:boolean,
}
export interface CommonNotification{
  id: number,
  builder: android.support.v4.app.NotificationCompat.Builder
}
export interface UpdateOptions{
  title?: string,
  message?: string,
  indeterminate?:boolean,
  progressValue?: number,
  ongoing?:boolean,
  hideProgressBar?:boolean,
}