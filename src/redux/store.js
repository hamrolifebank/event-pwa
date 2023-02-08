import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import organizationReducer from "./reducers/organizationReducer";
import yourPendingRequestReducer from "./reducers/yourPendingRequestReducer";
import myNotJoinedOrgReducer from "./reducers/myNotJoinedOrgReducer";
import eventReducer from "./reducers/eventReducer";
import myJoinedOrgReducer from "./reducers/myJoinedOrgReducer";
import myApproveRequestReducer from "./reducers/myApproveRequestReducer";
import benificiaryBloodBankReducer from "./reducers/benificiaryBloodBankReducer";
import eventsFromEventServerReducer from "./reducers/eventsFromEventServerReducer";
import eventDonationReducer from "./reducers/eventDonationReducer";
import eventManagerReducer from "./reducers/eventManagerReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    organizations: organizationReducer,
    benificiaryBloodBanks: benificiaryBloodBankReducer,
    yourPendingRequests: yourPendingRequestReducer,
    myNotJoinedOrganizations: myNotJoinedOrgReducer,
    myJoinedOrganizations: myJoinedOrgReducer,
    myApproveRequests: myApproveRequestReducer,
    events: eventReducer,
    eventsFromServer: eventsFromEventServerReducer,
    eventDonation: eventDonationReducer,
    eventManager: eventManagerReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export default store;
