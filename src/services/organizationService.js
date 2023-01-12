
import axios from "axios";
import { getUserFromLocal } from "@utils/sessionManager";

const token = getUserFromLocal();

const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

const getAll = async () => {
  const organizations = await axios.get("/api/organization");

  return organizations.data.data;
};

const getMyPendingRequests = async () => {
  const myPendingRequests = await axios.get(
    "/api/organization/my-pendingrequests",
    config
  );

  return myPendingRequests.data.data;
};

const getMyNotJoinedOrganizations = async () => {
  const myNotJoinedOrganizations = await axios.get(
    "/api/organization/my-notjoinedorg",
    config
  );
  return myNotJoinedOrganizations.data.data;
};

const create = async (organization) => {
  const newOrganization = await axios.post(
    "/api/organization",
    organization,
    config
  );

  return newOrganization.data.data;
};

const join = async (organizationId) => {
  const joinedOrganization = await axios.post(
    `/api/organization/join`,
    {
      organizationId,
    },
    config
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
