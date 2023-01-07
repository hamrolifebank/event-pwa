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
  const user = useSelector((state) => state.user);
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (user === null) {
      push(PATH_AUTH.login);
    }
  }, [user]);

  if (!user) {
    if (pathname === PATH_AUTH.login) {
      return <>{children}</>;
    } else {
      return <></>;
    }
  } else return <>{children}</>;
}
