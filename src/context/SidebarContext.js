import React, { useState, useMemo, useEffect } from "react";
import { isDoStatement } from "typescript";

// create context
export const SidebarContext = React.createContext();

export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
    setIsSidebarExpanded(true)
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  function toggleExpandSidebar() {
    setIsSidebarExpanded(!isSidebarExpanded)
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      isSidebarExpanded,
      toggleSidebar,
      closeSidebar,
      toggleExpandSidebar,
    }),
    [isSidebarOpen, isSidebarExpanded]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
