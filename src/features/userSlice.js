// import { createSlice } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  userLoading: true
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.user = action.payload.user;
    },
    setUserLogOutState: (state) => {
      state.user = null
    },
    setUserLoading: (state, action) => {
      state.userLoading = action.payload.userLoading
    },
  },
});

export const { setActiveUser, setUserLogOutState, setUserLoading } = userSlice.actions;

export const user = (state) => state.user;
// export const userLoading = (state) => state.userLoading;

export default userSlice.reducer;
