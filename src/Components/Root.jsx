import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";


const Root = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <Header />
      <div className="container min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
