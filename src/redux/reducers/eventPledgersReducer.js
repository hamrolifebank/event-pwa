import { createSlice } from "@reduxjs/toolkit";
import eventService from "@services/eventService";

const eventPledgersSlice = createSlice({
  name: "eventPledgers",
  initialState: [],
  reducers: {
    setEventPledgers(state, action) {
      return action.payload;
    },
  },
});

export const { setEventPledgers } = eventPledgersSlice.actions;

export const getAllEventPledgers = () => {
  return async (dispatch) => {
    const result = await eventService.getAllPledgers();

    await dispatch(setEventPledgers(result));
  };
};

export default eventPledgersSlice.reducer;
