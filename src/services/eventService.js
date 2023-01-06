import api from "./client";

const create = async (eventData) => {
  try {
    const response = await api.post("/api/event", eventData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

const getAll = async () => {
  try {
    const response = await api.get("/api/event");

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export default { create, getAll };
