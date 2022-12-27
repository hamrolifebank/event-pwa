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
