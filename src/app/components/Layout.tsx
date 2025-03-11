import React from "react";

interface ILayout{
    children?:string
    className?:string
}

const Layout = ({ children, className = "" }:ILayout) => {
  return (
    <div
      className={`w-full h-full inline-block z-0 bg-light p-32  ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
