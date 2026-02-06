import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
// import Register from './components/Register';
// import Clinic from './components/Clinic';
// import React, { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from './components/Home';
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';

// function App() {
// const [isAuth, setIsAuth] = useState(false);
// return (
//   <div className="App">
//     <Routes>
//       <Route path="/" element={<Home/>} />
//       <Route path="/login" element={<Login setIsAuth={setIsAuth}/>} />
//       <Route path="/dashboard" element={<Dashboard isAuth={isAuth}/>} />
//     </Routes>
//   </div>
// );
// }

//  function App() {
//   return (
//     <div className="App">
//       {/* <Register/> */}
//       <Clinic/>
//     </div>
//   );
//  }

function App() {
  return (
    <div className="app-container">
      <ProductList />
      <Cart />
    </div>
  );
 }
export default App;
