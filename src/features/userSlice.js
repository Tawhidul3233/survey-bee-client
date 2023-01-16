import { createSlice } from "@reduxjs/toolkit";

// cosnt [userName, setUserName] = useState(null);
// const initialState = {
//   userName: null,
//   userEmail: null,
// };
const initialState = {
  user: null,
  userLoading: true
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setActiveUser: (state, action) => {
    //   state.userName = action.payload.userName;
    //   state.userEmail = action.payload.userEmail;
    // },
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
