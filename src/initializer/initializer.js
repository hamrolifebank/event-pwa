import { getAllEvents } from "@redux/reducers/eventReducer";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const Initializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);
  return <>{children}</>;
};

export default Initializer;
