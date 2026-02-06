import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
const [user, setUser] = useState({ username: "", password: "" });
const navigate = useNavigate();

const handleLogin = (e) => {
e.preventDefault();
if (user.username && user.password) {
    setIsAuth(true);
    navigate("/dashboard");
} else {
    alert("Enter username and password");
}
};

return (
<div style={{ textAlign: "center", marginTop: "50px" }}>
    <h2>Login Page</h2>
    <form onSubmit={handleLogin}>
    <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
    /><br/><br/>
    <input
        type="password"
        placeholder="Password"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
    /><br/><br/>
    <button type="submit">Login</button>
    </form>
</div>
);
};
export default Login;