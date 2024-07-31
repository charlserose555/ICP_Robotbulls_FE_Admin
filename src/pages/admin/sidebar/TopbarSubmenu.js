import React, { useState, useContext } from "react";
import { NavLink, Route } from "react-router-dom";
import * as Icons from "../../../icons";
import { Transition } from "@windmill/react-ui";
import { useTranslation, Trans } from 'react-i18next';
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}

function TopbarSubmenu({ route }) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(true);
  const { t, i18n} = useTranslation();
  const location = useLocation()
  const history = useHistory();

  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
      setIsVisible(true); // Show item on hover
  };

  const handleMouseLeave = () => {
      // Optionally hide on mouse leave
      setIsVisible(false);
  };

  const handleClick = () => {
      setIsVisible(false); // Hide item on click
  };

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  return (
    <>
    {/* <nav className="desktop-nav"> */}
      <ul className="navli relative rounded-2 gap-4 h-full justify-center items-center flex" key={route.name} onClick={() => handleDropdownMenuClick()}>
        <a className={`${location.pathname === `${route.path}` || location.pathname.startsWith(`${route.groupPath}`) ? "parent-navlink-active cursor-pointer" : "cursor-pointer parent-navlink inline-flex gap-1 rounded-2 py-45 items-center w-full text-darkblue-550 h-full"}`}>
          <span className="nav-border absolute inset-x-0 left-0 bottom-0 h-[2px] rounded-tl-2 rounded-bl-2"></span>
          <span className="leading-20 text-[14px] text-darkblue-550">{`${route.name}`}</span>
        </a>

        <ul className={`dropdown${isVisible ? " show" : ""}`} 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave} 
          onClick={handleClick}>
          {route.routes.map((route) => (
            <li className="cursor-pointer hover:bg-gray-100 w-full ">
              <NavLink
                  exact
                  to={`${route.path}`}
                  className="text-darkblue-750 inline-flex text-[13px] whitespace-nowrap cursor-pointer w-full h-full py-3 px-8 hover:bg-gray-100">
                  <Route path={`${route.path}`}/>
                  <span className="text-darkblue-750 text-[13px] inline-flex whitespace-nowrap">{`${route.name}`}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </ul>

    {/* </nav> */}
    </>
  );
}

export default TopbarSubmenu;
