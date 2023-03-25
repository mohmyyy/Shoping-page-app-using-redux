import { createSlice } from "@reduxjs/toolkit";
import { notificationAction } from "./notification-slice";

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      console.log(newItem);
      state.totalQuantity += 1;
      const existingItem = state.items.find((item) => {
        return item.id === newItem.id;
      });
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeFromCart(state, action) {
      console.log(action.payload);
      const existingItem = state.items.find((item) => {
        return item.id === action.payload;
      });
      console.log(existingItem.quantity);
      if (existingItem.quantity === 1) {
        console.log("helo");
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendCardData = (cart) => {
  return (dispatch) => {
    dispatch(
      notificationAction.showNotification({
        status: "pending",
        type: "Pending",
        message: "Sending cart Data",
        notification: true,
      })
    );
    const cartFunction = async () => {
      console.log(cart);
      const response = await fetch(
        "https://react-redux-11dbf-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!response.ok) {
        throw new Error("Error");
      }
      dispatch(
        notificationAction.showNotification({
          status: "success",
          type: "Success",
          message: "Send Cart data successfully",
          notification: true,
        })
      );
    };
    try {
      cartFunction();
    } catch (error) {
      dispatch(
        notificationAction.showNotification({
          status: "error",
          type: "Error",
          message: "Sending cart Data Failed",
          notification: true,
        })
      );
    }
  };
};

export const getData = () => {
  return async (dispatch) => {
    dispatch(
      notificationAction.showNotification({
        status: "fetching",
        type: "fetching",
        message: "fetching cart Data",
        notification: true,
      })
    );
    const cartGetFunction = async () => {
      const response = await fetch(
        "https://react-redux-11dbf-default-rtdb.firebaseio.com/cart.json"
      );
      console.log(response);

      if (response.status === 200) {
        dispatch(
          notificationAction.showNotification({
            status: "success",
            type: "Fetched",
            message: "fetched cart Data Successfully",
            notification: true,
          })
        );
      } else {
        throw new Error("Error");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await cartGetFunction();
      dispatch(cartAction.replaceCart(cartData));
    } catch (error) {
      dispatch(
        notificationAction.showNotification({
          status: "error",
          type: "Error!!",
          message: "fetching cart Data Failed",
          notification: true,
        })
      );
    }
  };
};

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
