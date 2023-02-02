import { createSlice } from "@reduxjs/toolkit";

import eventService from "@services/eventService";

const eventSlice = createSlice({
  name: "eventDonation",
  initialState: [],
  reducers: {
    appendEventDonation(state, action) {
      state.push(action.payload);
    },
    setEventDonations(state, action) {
      return action.payload;
    },
  },
});

export const { appendEventDonation, setEventDonations } = eventSlice.actions;

export const createEventDonation = (event) => {
  return async (dispatch) => {
    const result = await eventService.eventDonationCreation(event);
    if (result.success === true) {
      await dispatch(appendEventDonation(result.data));
    }
  };
};

export const getAllEventDonations = () => {
  return async (dispatch) => {
    const result = await eventService.getEventDonation();
    await dispatch(setEventDonations(result));
  };
};

export default eventSlice.reducer;
