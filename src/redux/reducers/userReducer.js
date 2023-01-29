import { createSlice } from "@reduxjs/toolkit";
import { checkUser, checkUserwithtoken } from "@services/createUser";
import { setPublicKey, setUser } from "@utils/sessionManager";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser(state, action) {
      return { ...action.payload };
    },
  },
});
export const { addUser } = userSlice.actions;

export const storeUser = (subscribedUser) => {
  return async (dispatch) => {
    const { user, token } = subscribedUser;
    setPublicKey(user.userethaddress);
    setUser(token);
    dispatch(addUser(user));
  };
};

export const LoginwithToken = (token) => {
  return async (dispatch) => {
    let response = await checkUserwithtoken(token);
    dispatch(addUser(response));
  };
};

export default userSlice.reducer;
