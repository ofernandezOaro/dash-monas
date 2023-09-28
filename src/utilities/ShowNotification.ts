import { ToastOptions, toast } from "react-toastify";

export const showNotification = (
  message: string,
  options?: ToastOptions,
  type: "success" | "error" = "success"
): void => {
  if (type === "success") {
    toast.success(message, options);
  } else if (type === "error") {
    toast.error(message, options);
  } else {
    null;
  }
};
