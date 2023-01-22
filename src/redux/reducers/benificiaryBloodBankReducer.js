import organizationService from "@services/organizationService";

const { createSlice } = require("@reduxjs/toolkit");

const organizationSlice = createSlice({
  name: "benificiaryBloodBank",
  initialState: [],
  reducers: {
    setBenificiaryBloodBanks(state, action) {
      return action.payload;
    },
  },
});

export const initBenificiaryBloodBanks = () => {
  return async (dispatch) => {
    const data = await organizationService.getBenificiaryBloodBanks();
    dispatch(setBenificiaryBloodBanks(data));
  };
};

export const { setBenificiaryBloodBanks } = organizationSlice.actions;
export default organizationSlice.reducer;
