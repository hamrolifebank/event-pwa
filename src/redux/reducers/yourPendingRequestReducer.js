import organizationService from "@services/organizationService";
import {
  initializeYourNotJoinedOrganizations,
  removeYourNotJoinedOrganization,
} from "./myNotJoinedOrgReducer";

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
    removeYourPendingRequest(state, action) {
      return state.filter((item) => item.id !== action.payload);
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

export const withDrawRequest = (organizationId) => {
  return async (dispatch) => {
    await organizationService.withdrawRequest(organizationId);
    await dispatch(removeYourPendingRequest(organizationId));
    await dispatch(initializeYourNotJoinedOrganizations());
  };
};
export const {
  setYourPendingRequests,
  appendYourPendingRequest,
  removeYourPendingRequest,
} = yourPendingRequestSlice.actions;
export default yourPendingRequestSlice.reducer;
