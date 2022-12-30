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
    dispatch(getOrganizations(data));
  };
};

export const addOrganization = (organization) => {
  return async (dispatch) => {
    await dispatch(setOrganization(organization));
  };
};

export const { getOrganizations, setOrganization } = organizationSlice.actions;
export default organizationSlice.reducer;
