import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";
import yourPendingRequestReducer from "./reducers/yourPendingRequestReducer";
import myNotJoinedOrgReducer from "./reducers/myNotJoinedOrgReducer";
import eventReducer from "./reducers/eventReducer";
import myJoinedOrgReducer from "./reducers/myJoinedOrgReducer";
import myApproveRequestReducer from "./reducers/myApproveRequestReducer";
import benificiaryBloodBankReducer from "./reducers/benificiaryBloodBankReducer";
import eventPledgersReducer from "./reducers/eventPledgersReducer";
import eventDonersReducer from "./reducers/eventDonersReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
    benificiaryBloodBanks: benificiaryBloodBankReducer,
    eventPledgers: eventPledgersReducer,
    eventDoners: eventDonersReducer,
    yourPendingRequests: yourPendingRequestReducer,
    myNotJoinedOrganizations: myNotJoinedOrgReducer,
    myJoinedOrganizations: myJoinedOrgReducer,
    myApproveRequests: myApproveRequestReducer,
    events: eventReducer,
  },
});

export default store;
