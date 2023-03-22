import { createSlice } from "@reduxjs/toolkit";

import eventService from "@services/eventService";

const eventManagerSlice = createSlice({
  name: "eventManagers",
  initialState: [],
  reducers: {
    appendEventManager(state, action) {
      state.push(action.payload);
    },
    setEventManagers(state, action) {
      return action.payload;
    },
  },
});

export const { appendEventManager, setEventManagers } =
  eventManagerSlice.actions;

export const createEventManager = (eventManager) => {
  return async (dispatch) => {
    const result = await eventService.eventManagerCreation(eventManager);
    if (result.success === true) {
      await dispatch(appendEventManager(result.data));
    }
  };
};

export const getAllEventManagers = () => {
  return async (dispatch) => {
    const result = await eventService.getEventManagers();
    await dispatch(setEventManagers(result));
  };
};

export default eventManagerSlice.reducer;
