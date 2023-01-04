import api from "./client";

const getAll = async () => {
  const organizations = await api.get("/organization");

  return organizations.data.data;
};

const create = async (organization) => {
  const newOrganization = await api.post("/organization", organization);

  return newOrganization.data.data;
};

export default { getAll, create };
