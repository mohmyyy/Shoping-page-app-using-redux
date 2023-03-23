import { createSlice } from "@reduxjs/toolkit";

 
const initialUIState = {
  showModal: false,
};

const uiSlice = createSlice ({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    showModalHandler(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const uiAction = uiSlice.actions;
export default uiSlice.reducer