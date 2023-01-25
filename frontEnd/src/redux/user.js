import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    password: "",
    passwordVerify: "",
    firstName: "",
    lastName: "",
    mobile: "",
    shortBio: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    // login: (state, action) => {
    //   console.log("state", state);
    //   console.log("action", action);

    //   state.value = action.payload;
    // },

    logout: (state) => {
      state.value = initialState.value;
    },
    login: (state, action) => {
      state.value = action.payload;
    },
    createAccount: (state, action) => {
      state.value = action.payload;

      // state.email = action.payload.email;
      // state.password = action.payload.password;
      // state.passwordConfirmation = action.payload.passwordConfirmation;
      // state.firstName = action.payload.firstName;
      // state.lastName = action.payload.lastName;
    },
  },
});

export const { login, logout, signin, createAccount } = userSlice.actions;
export default userSlice.reducer;
