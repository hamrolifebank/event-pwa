import api from "./client";

const getAll = async () => {
  const organizations = await api.get("/organization");

  return organizations.data.data;
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
  console.log(
    "[organizationService.js--[19]], joinedOrganization",
    joinedOrganization
  );
  return joinedOrganization.data.data;
};

export default { getAll, create, join };
