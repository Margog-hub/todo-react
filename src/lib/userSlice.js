import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
  selectors: {
    selectUser: (state) => {
      return state.user;
    },
  },
});

export const { setUser, logout} = userSlice.actions;
export const { selectors } = userSlice.selectors;

export default userSlice.reducer;
