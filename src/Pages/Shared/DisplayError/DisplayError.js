import React, { useContext } from "react";
import { useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const DisplayError = () => {
  const error = useRouteError();
  const { logout } = useContext(AuthContext);
  const handleSignOut = () => {
    logout()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <p className="text-red-500">Something went wrong</p>
      <p className="text-red-500">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        Please <button onClick={handleSignOut}>Sign Out</button> and log back in
      </h4>
    </div>
  );
};

export default DisplayError;
