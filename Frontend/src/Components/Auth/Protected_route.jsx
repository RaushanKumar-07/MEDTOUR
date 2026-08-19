import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Protected_route = () => {
    const accessToken = localStorage.getItem("token");

    if (!accessToken) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
};

export default Protected_route;