import axios from "axios";
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
    const response = await axios.post("/api/events", eventData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getAll = async () => {
  try {
    const response = await axios.get("/api/events");

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getUserEvents = async () => {
  try {
    const response = await axios.get("/api/events/userEvents");

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const updateEvent = async (id, data) => {
  try {
    const response = await axios.put(`/api/events/${id}`, data, getHeader());
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const deleteEvent = async (event) => {
  try {
    const response = await axios.delete(
      `/api/events/${event.id}`,
      event,
      getHeader()
    );

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

const eventDonationCreation = async (data) => {
  try {
    const response = await axios.post(
      "/api/events/eventDonation",
      data,
      getHeader()
    );

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getEventDonation = async () => {
  try {
    const response = await axios.get("/api/events/eventDonation", getHeader());

    return response.data.data;
  } catch (error) {
    return error.response.data.data;
  }
};

export default {
  create,
  getAll,
  getEventsFromServer,
  eventDonationCreation,
  getEventDonation,
  deleteEvent,
  updateEvent,
  getUserEvents,
};
