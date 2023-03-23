import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
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
      console.log(action.payload)
      const existingItem = state.items.find((item) => {
        return item.id === action.payload;
      });
      console.log(existingItem.quantity)
      if (existingItem.quantity == 1) {
        console.log('helo')
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
