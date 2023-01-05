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
    const response = await axios.get(`${API}/getUser`, {
      method: "GET",
      params: { email: email },
    });
    return response.data;
  } catch (error) {}
};

export const googleDrive = async (tokenResponse, userwalletaddress) => {
  try {
    console.log("the googel drive enterd", userwalletaddress);

    const response = await axios.post(`${API}/uploadToDrive`, {
      method: "POST",
      tokenResponse,
      userwalletaddress,
    });
    return response.data;
  } catch (error) {}
};
