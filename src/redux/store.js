import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
  },
});

export default store;
