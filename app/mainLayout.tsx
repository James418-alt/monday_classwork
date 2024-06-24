"use client";
import { usePathname } from "next/navigation";
import React, { FC, ReactNode } from "react";
import Header from "./static/Header";
interface iProps {
  children: ReactNode;
}
const MainLayout: FC<iProps> = ({ children }) => {
  const pathname = usePathname();
  if (pathname === "/register" || pathname === "/signin") {
    return <div>{children}</div>;
  } else {
    return (
      <div>
        <Header />
        <div>{children}</div>
      </div>
    );
  }
};

export default MainLayout;
