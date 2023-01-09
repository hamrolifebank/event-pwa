import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";
import eventReducer from "./reducers/eventReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
    events: eventReducer,
  },
});

export default store;
