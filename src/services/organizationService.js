import api from "./client";
import axios from "axios";

const getAll = async () => {
  const organizations = await api.get("/api/organization");

  return organizations.data.data;
};

const getMyPendingRequests = async () => {
  const myPendingRequests = await api.get(
    "/api/organization/my-pendingrequests"
  );

  return myPendingRequests.data.data;
};

const getMyNotJoinedOrganizations = async () => {
  const token = JSON.parse(window.localStorage.getItem("user"));
  console.log("[organizationService.js--[20]], token", token);

  const config = {
    headers: {
      Authorization: `bearer ${token}`,
    },
  };
  const myNotJoinedOrganizations = await axios.get(
    "/api/organization/my-notjoinedorg",
    config
  );
  return myNotJoinedOrganizations.data.data;
};

const create = async (organization) => {
  const newOrganization = await api.post("/api/organization", organization);

  return newOrganization.data.data;
};

const join = async (organizationId) => {
  const joinedOrganization = await api.post(`/api/organization/join`, {
    organizationId,
  });

  return joinedOrganization.data.data;
};

export default {
  getAll,
  getMyPendingRequests,
  create,
  join,
  getMyNotJoinedOrganizations,
};
