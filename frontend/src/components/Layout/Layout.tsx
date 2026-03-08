import React, { ReactNode } from "react";
import { Header } from "./Header";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="absolute top-7.5 left-12 right-12">
          <Header />
        </div>
        {children}
      </div>
    </>
  );
};
