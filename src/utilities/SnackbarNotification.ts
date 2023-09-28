import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { showNotification } from "./ShowNotification";
import { clearMessage } from "../aplication/redux/slices/snacks";

export const SnackNotifier: React.FC = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state: any) => state.snacks);
  const { message, type } = notifications;

  useEffect(() => {
    if (message !== "" && message !== undefined) {
      showNotification(message, { autoClose: 3000 }, type);
      dispatch(clearMessage());
    }
  }, [message, dispatch, type, notifications]);

  return null;
};
