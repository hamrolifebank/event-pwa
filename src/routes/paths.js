// ----------------------------------------------------------------------

function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_DASHBOARD = "/";
const ROOTS_ASSETS = "/assets";

const ROOTS_EVENTS = "/event";
const ROOTS_ORGANIZATION = "/organization";
const ROOTS_PROFILE = "/profile";

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  one: path(ROOTS_DASHBOARD, "/one"),
};

export const PATH_EVENTS = {
  root: ROOTS_EVENTS,
  createEvent: path(ROOTS_EVENTS, "/create"),
  pastEvents: path(ROOTS_EVENTS, "/past-events"),
  upcomingEvents: path(ROOTS_EVENTS, "/upcoming-events"),
  eventPledgers: path(ROOTS_EVENTS, "/event-pledgers"),
  eventDoners: path(ROOTS_EVENTS, "/event-doners"),
};
export const PATH_ORGANIZATION = {
  root: ROOTS_ORGANIZATION,
  createOrg: path(ROOTS_ORGANIZATION, "/create"),
  joinOrg: path(ROOTS_ORGANIZATION, "/join-org"),
  pendingRequest: path(ROOTS_ORGANIZATION, "/approve-pending-req"),
  upcommingEvents: path(ROOTS_ORGANIZATION, "/upcomming-events"),
  yourPendingRequest: path(ROOTS_ORGANIZATION, "/view-your-pending-req"),
};
export const PATH_ASSETS = {
  root: ROOTS_ASSETS,
};

export const PATH_AUTH = {
  login: "/auth/login",
};

export const PATH_PROFILE = {
  root: ROOTS_PROFILE,
};

export const BOTTOM_NAVIGATION_OPTIONS = [
  {
    path: PATH_DASHBOARD.root,
    // label: "Home",
    icon: "eva:home-outline",
    sx: { color: "white" },
  },
  {
    path: PATH_EVENTS.root,
    // label: "",
    icon: "eva:calendar-outline",
    sx: { color: "white" },
  },
  {
    path: PATH_ASSETS.root,
    label: "scan",
    icon: "fluent:qr-code-24-filled",
    sx: {
      fontWeight: "fontWeightBold",
      background: "#ffffff",
      borderRadius: "50%",
      height: "80px",
      top: "-22px",
      boxShadow: 5,
    },

    iconStyle: {
      transform: "scale(2)",
    },
  },
  {
    path: PATH_ORGANIZATION.root,
    // label: "Organizations",
    icon: "ion:business-outline",
    sx: { color: "white" },
  },
  {
    path: PATH_PROFILE.root,
    // label: "Profile",
    icon: "eva:person-outline",
    sx: { color: "white" },
  },
];
