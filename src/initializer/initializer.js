import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllEvents } from "@redux/reducers/eventReducer";
import { initializeOrganizations } from "@redux/reducers/organizationReducer";
import { initBenificiaryBloodBanks } from "@redux/reducers/benificiaryBloodBankReducer";
import { initializeMyJoinedOrganizations } from "@redux/reducers/myJoinedOrgReducer";
import { getAllEventPledgers } from "@redux/reducers/eventPledgersReducer";
import { getAllEventDoners } from "@redux/reducers/eventDonersReducer";

export default function Initializer({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(getAllEvents());
      dispatch(getAllEventPledgers());
      dispatch(getAllEventDoners());
      dispatch(initializeOrganizations());
      dispatch(initializeMyJoinedOrganizations());
      dispatch(initBenificiaryBloodBanks());
    }
  }, [dispatch, user]);
  return <>{children}</>;
}
