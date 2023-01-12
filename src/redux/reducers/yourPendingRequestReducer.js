import organizationService from "@services/organizationService";
import { removeYourNotJoinedOrganization } from "./myNotJoinedOrgReducer";

const { createSlice } = require("@reduxjs/toolkit");

const yourPendingRequestSlice = createSlice({
  name: "yourPendingRequest",
  initialState: [],
  reducers: {
    setYourPendingRequests(state, action) {
      return action.payload;
    },
    appendYourPendingRequest(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeYourPendingRequests = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyPendingRequests();
    dispatch(setYourPendingRequests(data));
  };
};

export const joinOrganization = (organizationId) => {
  return async (dispatch) => {
    const joinedOrganization = await organizationService.join(organizationId);

    await dispatch(appendYourPendingRequest(joinedOrganization));
    await dispatch(removeYourNotJoinedOrganization(organizationId));
  };
};

export const { setYourPendingRequests, appendYourPendingRequest } =
  yourPendingRequestSlice.actions;
export default yourPendingRequestSlice.reducer;
