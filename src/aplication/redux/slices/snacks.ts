import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NotificationState {
  message: string;
  type: "success" | "error";
}

const initialState: NotificationState = {
  message: "",
  type: "success"
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<NotificationState>) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
    },
    clearMessage: state => {
      state.message = "";
      state.type = "success";
    }
  }
});

export const { showMessage, clearMessage } = notificationSlice.actions;
