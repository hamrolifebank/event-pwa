import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const organizationSlice = createSlice({
  name: "organization",
  initialState: [],
  reducers: {
    getOrganizations(state, action) {
      return action.payload;
    },
    setOrganization(state, action) {
      state.push(action.payload);
    },
  },
});

export const initializeOrganizations = () => {
  return async (dispatch) => {
    const data = await organizationService.getAll();
    dispatch(getOrganizations(data));
  };
};

export const addOrganization = (organization) => {
  return async (dispatch) => {
    const newOrganization = await organizationService.create(organization);
    await dispatch(setOrganization(newOrganization));
  };
};

export const joinOrganization = (organizationId) => {
  return async (dispatch) => {
    await organizationService.join(organizationId);
    const data = await organizationService.getAll();
    await dispatch(getOrganizations(data));
  };
};

export const { getOrganizations, setOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
