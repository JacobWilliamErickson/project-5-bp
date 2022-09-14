import { createSlice } from "@reduxjs/toolkit";
export const loadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    value: false,
  },
  reducers: {
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
    toggleLoading: (state) => {
      state.value = !state.value;
    },
  },
});

export const { setTrue, setFalse, toggleLoading } = loadingSlice.actions;
export const selectLoading = (state) => state.isLoading.value;

export default loadingSlice.reducer;
