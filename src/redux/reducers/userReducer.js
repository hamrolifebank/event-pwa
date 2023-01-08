import { createSlice } from "@reduxjs/toolkit";
import { checkUser, checkUserwithtoken } from "@services/createUser";
import { setPublicKey, setUser } from "@utils/sessionManager";
import { add } from "date-fns";
const walletSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser(state, action) {
      return { ...action.payload };
    },
  },
});
export const { addUser } = walletSlice.actions;
export default walletSlice.reducer;
export const storeWallet = (subscribedUser) => {
  return async (dispatch) => {
    const { user, token } = subscribedUser;
    setPublicKey(user.userethaddress);
    setUser(token);
    dispatch(addUser(user));
  };
};

export const LoginwithToken = (token) => {
  return async (dispatch) => {
    console.log("the reducer token is", token);
    let response = await checkUserwithtoken(token);
    console.log("the reposne in reducer", response);
    dispatch(addUser(response));
  };
};
