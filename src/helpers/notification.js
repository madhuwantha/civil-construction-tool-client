import { NotificationManager } from "react-notifications";

export const notification = (type, msg) => {
  return () => {
    switch (type) {
      case "info":
        NotificationManager.info(msg);
        break;
      case "success":
        NotificationManager.success(msg);
        break;
      case "warning":
        NotificationManager.warning(msg, "", 3000);
        break;
      case "error":
        NotificationManager.error(msg, "!", 5000, () => {
          alert("callback");
        });
        break;
    }
  };
};
