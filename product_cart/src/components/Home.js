import React from "react";
import { Link } from "react-router-dom";
const Home = () => (
 <div style={{ textAlign: "center", marginTop: "50px" }}>
   <h1>Welcome to the Home Page</h1>
   <p>
    <Link to="/login">Go to Login</Link> {" "}
   </p>
 </div>
);
export default Home;