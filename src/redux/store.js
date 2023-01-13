import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";
import yourPendingRequestReducer from "./reducers/yourPendingRequestReducer";
import myNotJoinedOrgReducer from "./reducers/myNotJoinedOrgReducer";
import eventReducer from "./reducers/eventReducer";
import myJoinedOrgReducer from "./reducers/myJoinedOrgReducer";
import myApproveRequestReducer from "./reducers/myApproveRequestReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
    yourPendingRequests: yourPendingRequestReducer,
    myNotJoinedOrganizations: myNotJoinedOrgReducer,
    myJoinedOrganizations: myJoinedOrgReducer,
    myApproveRequests: myApproveRequestReducer,
    events: eventReducer,
  },
});

export default store;
