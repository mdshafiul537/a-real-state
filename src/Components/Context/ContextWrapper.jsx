import React from "react";
import AuthProvider from "./AuthProvider";

const ContextWrapper = ({ children, ...props }) => {
  return (
    <React.Fragment>
      <AuthProvider>{children}</AuthProvider>
    </React.Fragment>
  );
};

export default ContextWrapper;
