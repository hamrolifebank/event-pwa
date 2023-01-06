import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const YourNotJoinedOrganizationSlice = createSlice({
  name: "YourNotJoinedOrganization",
  initialState: [],
  reducers: {
    getYourNotJoinedOrganizations(state, action) {
      return action.payload;
    },
    setYourNotJoinedOrganization(state, action) {
      return action.payload;
    },
  },
});

export const initializeYourNotJoinedOrganizations = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyNotJoinedOrganizations();
    dispatch(getYourNotJoinedOrganizations(data));
  };
};

export const updateOrganizationToBeJoined = (organizationId) => {
  return async (dispatch) => {
    const data = await organizationService.getMyNotJoinedOrganizations();
    const updatedNotJoinedOrganization = data.filter(
      (organization) => organization.id !== organizationId
    );
    await dispatch(setYourNotJoinedOrganization(updatedNotJoinedOrganization));
  };
};

export const { getYourNotJoinedOrganizations, setYourNotJoinedOrganization } =
  YourNotJoinedOrganizationSlice.actions;
export default YourNotJoinedOrganizationSlice.reducer;
