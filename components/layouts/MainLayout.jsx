import React from "react";
import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
}
