import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const MyJoinedOrganizationSlice = createSlice({
  name: "MyJoinedOrganization",
  initialState: [],
  reducers: {
    setMyJoinedOrganization(state, action) {
      return action.payload;
    },
  },
});

export const initializeMyJoinedOrganizations = () => {
  return async (dispatch) => {
    const data = await organizationService.getMyOrganizations();
    dispatch(setMyJoinedOrganization(data));
  };
};

export const { setMyJoinedOrganization } = MyJoinedOrganizationSlice.actions;
export default MyJoinedOrganizationSlice.reducer;
