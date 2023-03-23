const { createSlice, configureStore } = require("@reduxjs/toolkit");

const initialCartState = {
  showModal: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    showModalHandler(state) {
      state.showModal = !state.showModal;
    },
  },
});

const store = configureStore({
  reducer: cartSlice.reducer,
});

export const cartAction = cartSlice.actions;
export default store;
