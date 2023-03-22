import { createSlice } from "@reduxjs/toolkit";
import userService from "@services/userList";

const allUserSlice = createSlice({
  name: "userList",
  initialState: [],
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

export const { setUsers } = allUserSlice.actions;

export const getUsers = () => {
  return async (dispatch) => {
    const result = await userService.getAllUsers();

    await dispatch(setUsers(result));
  };
};

export default allUserSlice.reducer;
