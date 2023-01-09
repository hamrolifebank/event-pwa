import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const YourNotJoinedOrganizationSlice = createSlice({
  name: "YourNotJoinedOrganization",
  initialState: [],
  reducers: {
    setYourNotJoinedOrganization(state, action) {
      return action.payload;
    },
    removeYourNotJoinedOrganization(state, action) {
      return state.filter((organization) => organization.id !== action.payload);
    },
  },
});

export const initializeYourNotJoinedOrganizations = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyNotJoinedOrganizations();
    dispatch(setYourNotJoinedOrganization(data));
  };
};

export const { setYourNotJoinedOrganization, removeYourNotJoinedOrganization } =
  YourNotJoinedOrganizationSlice.actions;
export default YourNotJoinedOrganizationSlice.reducer;
