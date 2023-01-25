import axios from "axios";
import api from "./client";
import { getUserFromLocal } from "@utils/sessionManager";

const getHeader = () => {
  const token = getUserFromLocal();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return config;
};

const create = async (eventData) => {
  try {
    const response = await api.post("/api/events", eventData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getAll = async () => {
  try {
    const response = await api.get("/api/events");

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getEventsFromServer = async () => {
  try {
    const response = await axios.get(
      "/api/events/eventsFromEventServer",
      getHeader()
    );

    return response.data.data;
  } catch (error) {
    return error.response.data.data;
  }
};

export default { create, getAll, getEventsFromServer };
