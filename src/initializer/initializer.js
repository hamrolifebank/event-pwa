import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllEvents } from "@redux/reducers/eventReducer";
import { initializeOrganizations } from "@redux/reducers/organizationReducer";
import { initBenificiaryBloodBanks } from "@redux/reducers/benificiaryBloodBankReducer";
import { initializeMyJoinedOrganizations } from "@redux/reducers/myJoinedOrgReducer";
import { getEventsFromEventServer } from "@redux/reducers/eventsFromEventServerReducer";
import { getAllEventDonations } from "@redux/reducers/eventDonationReducer";
import { getAllEventManagers } from "@redux/reducers/eventManagerReducer";

export default function Initializer({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(getAllEvents());
      dispatch(getEventsFromEventServer());
      dispatch(getAllEventDonations());
      dispatch(initializeOrganizations());
      dispatch(initializeMyJoinedOrganizations());
      dispatch(initBenificiaryBloodBanks());
      dispatch(getAllEventManagers());
    }
  }, [dispatch, user]);
  return <>{children}</>;
}
