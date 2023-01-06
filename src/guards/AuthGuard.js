import { PATH_AUTH } from "@routes/paths";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";

// ----------------------------------------------------------------------

AuthGuard.propTypes = {
  children: PropTypes.node,
};

// Wrap this for all pages that require authentication

export default function AuthGuard({ children }) {
  // temporary --- remove this
  // if (certainCondition) {
  //   return <>{children}</>;
  // }

  // redirect to login page if not authenticated

  // const { isAuthenticated, isInitialized } = useAppAuthContext();

  // const { pathname, push } = useRouter();

  // const [requestedLocation, setRequestedLocation] = useState(null);

  // useEffect(() => {
  //   if (requestedLocation && pathname !== requestedLocation) {
  //     push(requestedLocation);
  //   }
  //   if (isAuthenticated) {
  //     setRequestedLocation(null);
  //   }
  // }, [isAuthenticated, pathname, push, requestedLocation]);

  // if (!isInitialized) {
  //   return <LoadingScreen />;
  // }

  // if (!isAuthenticated) {
  //   if (pathname !== requestedLocation) {
  //     setRequestedLocation(pathname);
  //   }
  //   return <Login />;
  // }
  const user = useSelector((state) => state.user);
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (user) {
      push("/");
    } else {
      push(PATH_AUTH.login);
    }
  }, [user]);

  return <>{children}</>;
}
