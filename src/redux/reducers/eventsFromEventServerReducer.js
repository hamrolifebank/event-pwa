import { createSlice } from "@reduxjs/toolkit";
import eventService from "@services/eventService";

const eventsFromServerSlice = createSlice({
  name: "eventsFromServer",
  initialState: [],
  reducers: {
    setEvents(state, action) {
      return action.payload;
    },
  },
});

export const { setEvents } = eventsFromServerSlice.actions;

export const getEventsFromEventServer = () => {
  return async (dispatch) => {
    const result = await eventService.getEventsFromServer();

    await dispatch(setEvents(result));
  };
};

export default eventsFromServerSlice.reducer;
