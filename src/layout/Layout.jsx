import React from "react";
import Header from "../header/Header";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="layoutContainer">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
