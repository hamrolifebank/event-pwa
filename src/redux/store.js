import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";
import yourPendingRequestReducer from "./reducers/yourPendingRequestReducer";
import myNotJoinedOrgReducer from "./reducers/myNotJoinedOrgReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
    yourPendingRequests: yourPendingRequestReducer,
    myNotJoinedOrganizations: myNotJoinedOrgReducer,
  },
});

export default store;
