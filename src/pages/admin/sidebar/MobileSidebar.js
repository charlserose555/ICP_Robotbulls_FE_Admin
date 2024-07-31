import React, { useContext, useEffect, useState } from "react";

import SidebarContent from "./SidebarContent";
import { Transition, Backdrop } from "@windmill/react-ui";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { SidebarContext } from "../../../context/SidebarContext";

function MobileSidebar() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);

  const location = useLocation();

  return (
    <div>
    <Transition show={isSidebarOpen}>
      <>
        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Backdrop onClick={closeSidebar} />
        </Transition>

        <Transition
          enter="transition ease-in-out duration-150"
          enterFrom="opacity-0 transform -translate-x-20"
          enterTo="opacity-100"
          leave="transition ease-in-out duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 transform -translate-x-20"
        >

        {(<aside className="fixed z-40 inset-y-0 flex-shrink-0 w-65 overflow-y-auto bg-white">
          <SidebarContent />
        </aside>)}
        </Transition>
      </>
    </Transition>
    </div>
  );
}

export default MobileSidebar;
