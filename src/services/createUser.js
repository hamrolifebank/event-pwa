import axios from "axios";

const API = "/api";

export const createUser = async (userTabledata) => {
  try {
    const response = await axios.post(`${API}/userCreation`, {
      method: "POST",
      userTabledata,
    });
  } catch (error) {
    return error.response.data;
  }
};

export const checkUser = async (email) => {
  try {
    const response = await axios.post(`${API}/getUser`, {
      method: "POST",
      email,
    });
    return response.data;
  } catch (error) {}
};

export const googleDrive = async () => {
  try {
    const response = await axios.get(`${API}/uploadToDrive`, {
      method: "GET",
    });
    return response.data;
  } catch (error) {}
};
