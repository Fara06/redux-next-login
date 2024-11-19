import { createSlice } from "@reduxjs/toolkit";

interface User {
  name: string;
  email: string;
  password: string;
}
const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loggedInUser: null,
    status: "loggedOut",
  },
  reducers: {
    register: (state, action) => {
      const newUser = {
        ...action.payload,
        status: "Registered", // Status default saat registrasi
      };
      state.users.push(newUser); // Tambahkan user ke state
    },
    
    login: (state, action) => {
      const user = state.users.find(
        (user: User) =>
          user.email === action.payload.email &&
          user.password === action.payload.password
      );
      if (user) {
        state.loggedInUser = user;
        state.status = "loggedIn";
      }
    },
    logout: (state) => {
      state.userStatus = "loggedOut"; // Ubah status global ke loggedOut
    },    
  },
});

export const { login, logout, register } = userSlice.actions;

export const selectUser = (state: any) => state.user.loggedInUser;
export const selectUserStatus = (state: any) => state.user.status;

export default userSlice.reducer;
