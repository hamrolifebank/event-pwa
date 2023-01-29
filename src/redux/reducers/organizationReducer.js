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
    updateOrganization(state, action) {
      const updatedState = state.map((organization) => {
        if (organization.id === action.payload.id) {
          return { ...organization, ...action.payload };
        }
        return organization;
      });
      return updatedState;
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

export const updateOrg = (id, organization) => {
  return async (dispatch) => {
    const updatedOrganization = await organizationService.update(
      id,
      organization
    );
    await dispatch(updateOrganization(updatedOrganization));
  };
};

export const { setOrganizations, appendOrganization, updateOrganization } =
  organizationSlice.actions;
export default organizationSlice.reducer;
