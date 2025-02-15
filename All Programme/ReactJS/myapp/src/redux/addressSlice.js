import { createSlice } from "@reduxjs/toolkit";

const addressSlice = createSlice({
  name: "addresses",
  initialState: [],
  reducers: {
    setAddresses: (state, action) => action.payload,
    addAddress: (state, action) => [...state, action.payload],
    removeAddress: (state, action) => state.filter(addr => addr.id !== action.payload),
  },
});

export const { setAddresses, addAddress, removeAddress } = addressSlice.actions;
export default addressSlice.reducer;
