import React from "react";
import { Navigate } from "react-router-dom";

const Dashboard = ({ isAuth }) => {
if (!isAuth) return <Navigate to="/login" replace />;
return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Dashboard</h1>
    <h3>Welcome! You are logged in</h3>
</div>
);
};
export default Dashboard;