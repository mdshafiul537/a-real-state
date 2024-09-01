import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { NavLink } from "react-router-dom";
import { isEmptyOrNull } from "../../utility/helper";

const ProfileInf = ({ ...props }) => {
  const { user, logOut } = useContext(AuthContext);

  const onLogOut = () => {
    logOut();
    document.activeElement.blur();
  };

  console.log("User ", user);

  return (
    <React.Fragment>
      {!user ? (
        <>
          <NavLink className="btn" to="register">
            Register
          </NavLink>
          <NavLink className="btn" to="login">
            Login
          </NavLink>
        </>
      ) : (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar z-50"
          >
            <div className="w-10 rounded-full">
              <img alt={user?.displayName} src={user?.photoURL} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
          >
            <li>
              <NavLink to={`/users/profile`} className="justify-between">
                Profile
              </NavLink>
            </li>

            <li>
              <span onClick={onLogOut}>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default ProfileInf;
