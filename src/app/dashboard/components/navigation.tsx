"use client";
import { useState } from "react";
import { SideBar } from "./side-bar";
import { TopBar } from "./top-bar";

export const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <TopBar isExpanded={isExpanded} onExpand={setIsExpanded} />
      <div className="flex bg-white">
        <SideBar isExpanded={isExpanded} />
      </div>
    </>
  );
};
