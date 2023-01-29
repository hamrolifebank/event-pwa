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

const getBenificiaryBloodBanks = async () => {
  const benificiaries = await axios.get(
    "/api/organization/benificiaryBloodBank",
    getHeader()
  );

  return benificiaries.data.data;
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

const update = async (id, organization) => {
  const updatedOrganization = await axios.put(
    `/api/organization/${id}`,
    organization,
    getHeader()
  );

  return updatedOrganization.data.data;
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

const withdrawRequest = async (organizationId) => {
  const withDrawnRequest = await axios.delete(
    `/api/organization/my-pendingrequests/${organizationId}`,

    getHeader()
  );
  return withDrawnRequest.data.data;
};

const declineRequest = async (id) => {
  const declinedRequest = await axios.delete(
    `/api/organization/my-approve-requests/${id}`,

    getHeader()
  );
  return declinedRequest.data.data;
};

const getTableEvents = async () => {
  const events = await axios.get(`/api/event-app-events`, getHeader());
  return events.data.data;
};

export default {
  getAll,
  getBenificiaryBloodBanks,
  getMyPendingRequests,
  create,
  update,
  join,
  getMyNotJoinedOrganizations,
  getMyOrganizations,
  getMyApproveRequests,
  approveRequest,
  declineRequest,
  withdrawRequest,
  getMemberList,
  getTableEvents,
};
