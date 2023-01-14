import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const myApproveRequestSlice = createSlice({
  name: "myApproveRequest",
  initialState: [],
  reducers: {
    setMyApproveRequests(state, action) {
      return action.payload;
    },
    deleteMyApproveRequests(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const initializeYourApproveRequests = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyApproveRequests();

    dispatch(setMyApproveRequests(data));
  };
};

export const approveRequests = (id) => {
  return async (dispatch) => {
    await organizationService.approveRequests(id);
    dispatch(deleteMyApproveRequests(id));
  };
};

export const { setMyApproveRequests, deleteMyApproveRequests } =
  myApproveRequestSlice.actions;
export default myApproveRequestSlice.reducer;
