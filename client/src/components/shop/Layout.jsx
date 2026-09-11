import React from "react";
import { Outlet } from "react-router";
import { ShopHeader, ShopFooter } from "./";

const ShopLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
      {/* common header */}
      <ShopHeader />
      <main className="flex flex-col w-full">
        <Outlet />
      </main>
      <ShopFooter />
    </div>
  );
};

export default ShopLayout;
