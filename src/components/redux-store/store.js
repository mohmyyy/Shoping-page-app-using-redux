import uiReducer from "./ui-slice";
import cartReducer from "./cart-slice";
import notificationReducer from "./notification-slice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducer,
    notification: notificationReducer,
  },
});

export default store;
