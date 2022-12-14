import axios from "axios";

const API = "/api";

export const createUser = async (userTabledata, credential) => {
  try {
    const response = await axios.post(`${API}/user`, {
      method: "POST",
      userTabledata,
      credential,
    });
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const checkUser = async (token) => {
  try {
    const response = await axios.get(`${API}/user`, {
      method: "GET",
      params: { token: token },
    });

    return response.data;
  } catch (error) {}
};

export const googleDrive = async (tokenResponse, userwalletaddress) => {
  try {
    const response = await axios.post(`${API}/uploadToDrive`, {
      method: "POST",
      tokenResponse,
      userwalletaddress,
    });
    return response.data;
  } catch (error) {}
};

export const checkUserwithtoken = async (token) => {
  try {
    const response = await axios.get(`${API}/user`, {
      method: "GET",
      headers: {
        authorization: token,
      },
    });

    return response.data;
  } catch (error) {}
};
