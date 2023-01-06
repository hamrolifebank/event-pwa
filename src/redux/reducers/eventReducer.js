import { createSlice } from "@reduxjs/toolkit";

import eventService from "@services/eventService";

const eventSlice = createSlice({
  name: "event",
  initialState: [],
  reducers: {
    setEvent(state, action) {
      return [...state, action.payload];
    },
    getEvents(state, action) {
      return action.payload;
    },
  },
});

export const { setEvent, getEvents } = eventSlice.actions;

export const createEvent = (event) => {
  return async (dispatch) => {
    const result = await eventService.create(event);

    await dispatch(setEvent(result));
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    const result = await eventService.getAll();

    await dispatch(getEvents(result));
  };
};

export default eventSlice.reducer;
