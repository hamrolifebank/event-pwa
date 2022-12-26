import { configureStore } from "@reduxjs/toolkit";
import organizationReducer from "./reducers/organizationReducer";

const store = configureStore({
  reducer: {
    organizations: organizationReducer,
  },
});

export default store;
