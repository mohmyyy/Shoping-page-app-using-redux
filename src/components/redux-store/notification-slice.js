import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: { type: "", message: "", status: "", isNotification: false },
  reducers: {
    showNotification(state, action) {
      state.type = action.payload.type;
      state.message = action.payload.message;
      state.status = action.payload.status;
      state.isNotification = action.payload.notification;
    },
  },
});

export const notificationAction = notificationSlice.actions;
export default notificationSlice.reducer;
