import axios from "axios";

const API = "/api";

export const createUser = async (userTabledata) => {
  try {
    console.log("the try entered");
    const response = await axios.post(`${API}/userCreation`, {
      method: "POST",
      userTabledata,
    });
    console.log(response);
  } catch (error) {
    return error.response.data;
  }
};

export const checkUser = async (email) => {
  try {
    console.log("the checkuser entered", email);
    const response = await axios.get(`${API}/getUser`, {
      method: "GET",
      email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
