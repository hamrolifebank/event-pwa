import { createSlice } from "@reduxjs/toolkit";
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
export default userSlice.reducer;
export const storeUser = (subscribedUser) => {
  return async (dispatch) => {
    const { user, token } = subscribedUser;
    setPublicKey(user.userethaddress);
    setUser(token);
    dispatch(addUser(user));
  };
};
