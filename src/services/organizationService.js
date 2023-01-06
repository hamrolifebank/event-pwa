import api from "./client";

const getAll = async () => {
  const organizations = await api.get("/organization");

  return organizations.data.data;
};

const getMyPendingRequests = async () => {
  const myPendingRequests = await api.get("/organization/my-pendingrequests");

  return myPendingRequests.data.data;
};

const create = async (organization) => {
  const newOrganization = await api.post("/organization", organization);

  return newOrganization.data.data;
};

const join = async (organizationId) => {
  console.log("[organizationService.js--[16]], organizationId", organizationId);
  const joinedOrganization = await api.post(`/organization/join`, {
    organizationId,
  });

  return joinedOrganization.data.data;
};

export default { getAll, getMyPendingRequests, create, join };
