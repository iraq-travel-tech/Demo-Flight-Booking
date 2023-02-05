import React from "react";
import NavBar from "./NavBar";

export default function MainLayout({ children }) {
  return (
    <div className="dark:bg-black min-h-screen transition-all bg-[#ecf2fa]">
      <NavBar />
      {children}
    </div>
  );
}
