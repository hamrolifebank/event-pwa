import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const yourPendingRequestSlice = createSlice({
  name: "yourPendingRequest",
  initialState: [],
  reducers: {
    getYourPendingRequests(state, action) {
      return action.payload;
    },
    setYourPendingRequest(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeYourPendingRequests = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyPendingRequests();
    dispatch(getYourPendingRequests(data));
  };
};

export const joinOrganization = (organizationId) => {
  return async (dispatch) => {
    const joinedOrganization = await organizationService.join(organizationId);

    await dispatch(setYourPendingRequest(joinedOrganization));
  };
};

export const { getYourPendingRequests, setYourPendingRequest } =
  yourPendingRequestSlice.actions;
export default yourPendingRequestSlice.reducer;
