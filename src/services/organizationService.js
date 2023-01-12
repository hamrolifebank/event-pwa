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

const getAll = async () => {
  const organizations = await axios.get("/api/organization", getHeader());

  return organizations.data.data;
};

const getMyPendingRequests = async () => {
  const myPendingRequests = await axios.get(
    "/api/organization/my-pendingrequests",
    getHeader()
  );

  return myPendingRequests.data.data;
};

const getMyNotJoinedOrganizations = async () => {
  const myNotJoinedOrganizations = await axios.get(
    "/api/organization/my-notjoinedorg",
    getHeader()
  );
  return myNotJoinedOrganizations.data.data;
};

const create = async (organization) => {
  const newOrganization = await axios.post(
    "/api/organization",
    organization,
    getHeader()
  );

  return newOrganization.data.data;
};

const join = async (organizationId) => {
  const joinedOrganization = await axios.post(
    `/api/organization/join`,
    {
      organizationId,
    },
    getHeader()
  );

  return joinedOrganization.data.data;
};

export default {
  getAll,
  getMyPendingRequests,
  create,
  join,
  getMyNotJoinedOrganizations,
};
