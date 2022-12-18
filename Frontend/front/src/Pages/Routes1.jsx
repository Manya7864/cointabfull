import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Userdetail from "./Userdetail";

const Routes1 = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/userdetail" element={<Userdetail />}></Route>
      </Routes>
    </div>
  );
};

export default Routes1;
