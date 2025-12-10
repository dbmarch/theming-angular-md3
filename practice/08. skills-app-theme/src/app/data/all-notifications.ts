import { Notification } from '../models/notification.model';
export const ALL_NOTIFICATIONS: Notification[] =
[
    {
      "id": 1,
      "message": "Your profile has been updated successfully.",
      "type": "success",
      "timestamp": "2025-01-23T10:00:00Z"
    },
    {
      "id": 2,
      "message": "A new activity 'Creative Writing' has been added.",
      "type": "info",
      "timestamp": "2025-01-22T14:45:00Z"
    },
    {
      "id": 3,
      "message": "Your session is about to expire. Please save your progress.",
      "type": "warning",
      "timestamp": "2025-01-23T09:50:00Z"
    },
    {
      "id": 4,
      "message": "Failed to load activity data. Please try again later.",
      "type": "error",
      "timestamp": "2025-01-23T09:40:00Z"
    },
    {
      "id": 5,
      "message": "Congratulations! You completed the 'Data Analysis' activity.",
      "type": "success",
      "timestamp": "2025-01-22T20:30:00Z"
    },
    {
      "id": 6,
      "message": "System maintenance scheduled for tomorrow at 2:00 AM.",
      "type": "info",
      "timestamp": "2025-01-21T17:00:00Z"
    },
    {
      "id": 7,
      "message": "Your payment for 'AI Development' failed. Please update your billing details.",
      "type": "error",
      "timestamp": "2025-01-20T12:00:00Z"
    }
  ]
  