import React, { useContext } from "react";
import { AuthContext } from "../Components/Context/AuthProvider";
import { isEmptyOrNull } from "../utility/helper";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Utils/Loading";

const PrivateRoute = ({ children }) => {
  const { user, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loading isLoading={isLoading} />;
  }

  if (!isEmptyOrNull(user)) {
    return children;
  }

  return <Navigate to="/" />;
};

export default PrivateRoute;
