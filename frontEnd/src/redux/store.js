import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import searchReducer from "./search";

export default configureStore({
  reducer: {
    user: userReducer,
    search: searchReducer,
    // posts: postsReducer,
  },
});

// import counterReducer from "./counter";
// import loggedReducer from "./isLogged";

// const allReducers = combineReducers({
//   counter: counterReducer,
//   isLogged: loggedReducer,
// });

// const initialState = { value: { username: "" } };

// const userSlice = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {
//     login: (state, action) => {
//       state.value = action.payload;
//     },

//     logout: (state) => {
//       state.value = initialState.value;
//     },
//   },
// });

// // const searchFilterType = createSlice({});

// export const { login, logout } = userSlice.actions;
