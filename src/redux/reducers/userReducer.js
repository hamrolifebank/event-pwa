import { createSlice } from "@reduxjs/toolkit";
import { setPublicKey } from "@utils/sessionManager";
const walletSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser(state, action) {
      return action.payload;
    },
  },
});

export const { addUser } = walletSlice.actions;
export default walletSlice.reducer;
export const storeWallet = (publicAddress) => {
  return async (dispatch) => {
    setPublicKey(publicAddress);
    dispatch(addUser(publicAddress));
  };
};
