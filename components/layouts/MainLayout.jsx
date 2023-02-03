import React from "react";
import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="dark:bg-black">
      <NavBar />
      {children}
    </div>
  );
}
