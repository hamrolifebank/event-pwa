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
    updateEvent(state, action) {
      return state.map((event) => {
        if (event.id === action.payload.id) {
          return action.payload;
        }
        return event;
      });
    },
    deleteEvent(state, action) {
      return state.filter((event) => event.id !== action.payload.id);
    },
  },
});

export const { appendEvent, setEvents, updateEvent, deleteEvent } =
  eventSlice.actions;

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

export const updEvent = (id, data) => {
  return async (dispatch) => {
    const result = await eventService.updateEvent(id, data);
    await dispatch(updateEvent(result));
  };
};

export const delEvent = (event) => {
  return async (dispatch) => {
    await dispatch(deleteEvent(event));
    const result = eventService.deleteEvent(event);
  };
};
export default eventSlice.reducer;
