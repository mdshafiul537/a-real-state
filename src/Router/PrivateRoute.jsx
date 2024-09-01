import React, { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthProvider";
import { isEmptyOrNull } from "../utility/helper";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Components/Utils/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  const location = useLocation();

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!isEmptyOrNull(user)) {
    return children;
  }

  return <Navigate to="/login" state={location.pathname} />;
};

export default PrivateRoute;
