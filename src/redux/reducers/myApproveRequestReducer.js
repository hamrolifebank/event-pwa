import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const myApproveRequestSlice = createSlice({
  name: "myApproveRequest",
  initialState: [],
  reducers: {
    setMyApproveRequests(state, action) {
      return action.payload;
    },
    deleteMyApproveRequest(state, action) {
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

export const approveRequest = (id) => {
  return async (dispatch) => {
    await organizationService.approveRequest(id);
    dispatch(deleteMyApproveRequest(id));
  };
};

export const declineRequest = (id) => {
  return async (dispatch) => {
    await organizationService.declineRequest(id);
    dispatch(deleteMyApproveRequest(id));
  };
};

export const { setMyApproveRequests, deleteMyApproveRequest } =
  myApproveRequestSlice.actions;
export default myApproveRequestSlice.reducer;
