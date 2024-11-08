import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthSideSection from "../Components/AuthSideSection";
import authImage from "../assets/images/authImage.png";

const PublicLayout = () => {
  const isToken = localStorage.getItem("token");
  return (
    <div className="background-login">
        <div className="login-container">
        {
          <>
            <div className="section2">
              {!isToken ? <Outlet /> : <Navigate to="/dashboard" />}{" "}
            </div>
          </>
        }
      </div>
    </div>
  );
};

export default PublicLayout;
