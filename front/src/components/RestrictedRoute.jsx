import React from "react";
import { useSelector } from "react-redux";

const RestrictedRoute = ({children}) => {
  const { userDetail } = useSelector((state) => state.user);
  return (
    <>
      {userDetail ? (
        <Navigate to="/" replace />
      ) : (
        children
      )}
    </>
  );
};

export default RestrictedRoute;
