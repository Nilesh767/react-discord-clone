import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  serverId: null,
};

const appSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    enterServer: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterServer } = appSlice.actions;
export const selectServerId = (state) => state.app.serverId;
export default appSlice.reducer;
