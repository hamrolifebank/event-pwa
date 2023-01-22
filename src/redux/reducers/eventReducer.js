import { createSlice } from "@reduxjs/toolkit";

import eventService from "@services/eventService";

const eventSlice = createSlice({
  name: "event",
  initialState: [],
  reducers: {
    appendEvent(state, action) {
      state.push(action.payload);
    },
    setEvents(state, action) {
      return action.payload;
    },
  },
});

export const { appendEvent, setEvents } = eventSlice.actions;

export const createEvent = (event) => {
  return async (dispatch) => {
    const result = await eventService.create(event);
    if (result.status === 201) {
      await dispatch(appendEvent(result.registeredEvent));
    }
  };
};

export const getAllEvents = () => {
  return async (dispatch) => {
    const result = await eventService.getAll();

    await dispatch(setEvents(result));
  };
};

export default eventSlice.reducer;
