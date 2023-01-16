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
    `/api/organization/my-pendingrequests`,
    {
      organizationId,
    },
    getHeader()
  );

  return joinedOrganization.data.data;
};

const getMyOrganizations = async () => {
  const myOrganizations = await axios.get(
    "/api/organization/my-organizations",
    getHeader()
  );
  return myOrganizations.data.data;
};

const getMyApproveRequests = async () => {
  const myApproveRequests = await axios.get(
    "/api/organization/my-approve-requests",
    getHeader()
  );

  return myApproveRequests.data.data;
};

const approveRequest = async (id) => {
  const approvedRequest = await axios.put(
    `/api/organization/my-approve-requests/${id}`,
    {},
    getHeader()
  );
  return approvedRequest.data.data;
};

const getMemberList = async (id) => {
  const memberList = await axios.get(
    `/api/organization/${id}/org-members-list`,
    getHeader()
  );
  return memberList.data.data;
};

const declineRequest = async (id) => {
  const declinedRequest = await axios.delete(
    `/api/organization/my-approve-requests/${id}`,

    getHeader()
  );
  return declinedRequest.data.data;
};

export default {
  getAll,
  getMyPendingRequests,
  create,
  join,
  getMyNotJoinedOrganizations,
  getMyOrganizations,
  getMyApproveRequests,
  approveRequest,
  declineRequest,
  getMemberList,
};
