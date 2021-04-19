import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
  userEmail: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.userEmail = action.payload.userEmail;
    },
  },
});

export const { setUser } = userSlice.actions;
export const selectUserId = (state) => state.userId;
export const selectUserEmail = (state) => state.userEmail;
export default userSlice.reducer;
