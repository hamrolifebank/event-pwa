import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getAllEvents } from "@redux/reducers/eventReducer";
import { initializeOrganizations } from "@redux/reducers/organizationReducer";

export default function Initializer({ children }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      dispatch(getAllEvents());
      dispatch(initializeOrganizations());
    }
  }, [dispatch, user]);
  return <>{children}</>;
}
