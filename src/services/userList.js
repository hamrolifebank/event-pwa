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

const getAllUsers = async () => {
  try {
    const response = await axios.get("/api/user/userList", getHeader());

    return response.data.data;
  } catch (error) {
    return error.response.data.data;
  }
};

export default {
  getAllUsers,
};
