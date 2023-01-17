import { createSlice } from "@reduxjs/toolkit";
import eventService from "@services/eventService";

const eventDonersSlice = createSlice({
  name: "eventDoners",
  initialState: [],
  reducers: {
    setEventDoners(state, action) {
      return action.payload;
    },
  },
});

export const { setEventDoners } = eventDonersSlice.actions;

export const getAllEventDoners = () => {
  return async (dispatch) => {
    const result = await eventService.getAllDoners();

    await dispatch(setEventDoners(result));
  };
};

export default eventDonersSlice.reducer;
