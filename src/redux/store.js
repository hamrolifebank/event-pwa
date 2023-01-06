import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";
import yourPendingRequestReducer from "./reducers/yourPendingRequestReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
    yourPendingRequests: yourPendingRequestReducer,
  },
});

export default store;
