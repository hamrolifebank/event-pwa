
import axios from "axios";

const getAll = async () => {
  const organizations = await axois.get("/api/organization");

  return organizations.data.data;
};

const getMyPendingRequests = async () => {
  const myPendingRequests = await axios.get(
    "/api/organization/my-pendingrequests"
  );

  return myPendingRequests.data.data;
};

const getMyNotJoinedOrganizations = async () => {
  const myNotJoinedOrganizations = await axios.get(
    "/api/organization/my-notjoinedorg"
  );
  return myNotJoinedOrganizations.data.data;
};

const create = async (organization) => {
  const newOrganization = await axios.post("/api/organization", organization);

  return newOrganization.data.data;
};

const join = async (organizationId) => {
  const joinedOrganization = await axios.post(`/api/organization/join`, {
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
