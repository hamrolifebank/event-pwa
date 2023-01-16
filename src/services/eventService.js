import api from "./client";

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

const getAllDoners = async () => {
  try {
    console.log("hey: I'm called");
    const response = await api.get("/api/events/event-doners");
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { create, getAll, getAllDoners };
