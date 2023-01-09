import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const organizationSlice = createSlice({
  name: "organization",
  initialState: [],
  reducers: {
    setOrganizations(state, action) {
      return action.payload;
    },
    appendOrganization(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeOrganizations = () => {
  return async (dispatch) => {
    const data = await organizationService.getAll();
    dispatch(setOrganizations(data));
  };
};

export const addOrganization = (organization) => {
  return async (dispatch) => {
    const newOrganization = await organizationService.create(organization);
    await dispatch(appendOrganization(newOrganization));
  };
};

export const { setOrganizations, appendOrganization } =
  organizationSlice.actions;
export default organizationSlice.reducer;
