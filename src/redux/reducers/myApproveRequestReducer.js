import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const myApproveRequestSlice = createSlice({
  name: "myApproveRequest",
  initialState: [],
  reducers: {
    setMyApproveRequests(state, action) {
      return action.payload;
    },
  },
});

export const initializeYourApproveRequests = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyApproveRequests();

    dispatch(setMyApproveRequests(data));
  };
};

export const { setMyApproveRequests } = myApproveRequestSlice.actions;
export default myApproveRequestSlice.reducer;
