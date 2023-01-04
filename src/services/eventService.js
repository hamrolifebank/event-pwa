import api from "./client";

export const create = async (eventData) => {
  try {
    const response = await api.post("/event", eventData);

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getAll = async () => {
  try {
    const response = await api.get("/event");

    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
