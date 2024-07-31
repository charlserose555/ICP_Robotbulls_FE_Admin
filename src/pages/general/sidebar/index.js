import React from 'react'
import MobileSidebar from './MobileSidebar'
import { useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function Sidebar() {

  const location = useLocation();

  return (
    <>
        <>
          <MobileSidebar />
        </>      
    </>
  )
}

export default Sidebar
