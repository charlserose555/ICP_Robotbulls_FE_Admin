import React, { useState, useContext, useEffect } from "react";
// import routes from "../../routes/sidebar";
import { NavLink, Route, Link } from "react-router-dom";
import * as Icon from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { SidebarContext } from "../../../context/SidebarContext";
import { Transition } from "@windmill/react-ui";
import routes from "../../../routes/general/topbar";
import { useTranslation, Trans } from 'react-i18next';
import useMediaQuery from "../../../hooks/useMediaQuery";

function SidebarContent() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { t, i18n} = useTranslation();
  const history = useHistory();

  return (
    <>
      <div className="text-gray-500 dark:text-gray-400 font-normal font-roboto text-16 h-full w-65" style={{padding: "5px 10px"}}>            
          <div className="flex flex-col h-full">
            <div className="flex flex-col justify-start items-start px-2 gap-45 pt-4">
                <img src="/demo/assets/logo.png" style={{width: '60px'}}/>
                <ul className="w-full flex flex-col" key={isLoggedIn}>
                {routes.map((route) =>
                <li className="navli relative rounded-2 gap-4 h-full justify-center" key={route.name}>
                  <NavLink
                    exact
                    to={`${route.path}`}
                    isActive={(match, location) =>
                      location.pathname === `${route.path}` || location.pathname.startsWith(`${route.path}`)
                    }
                    activeClassName="parent-navlink-active"
                    className="parent-navlink inline-flex gap-1 rounded-2 py-45 items-center w-full text-darkblue-550 h-full">
                      <Route path={`${route.path}`}/>
                      <span className="nav-border absolute inset-x-0 left-0 bottom-0 h-[2px] rounded-tl-2 rounded-bl-2"></span>    
                        {route.name == "Dashboard" && (<Icon.HomeIcon/>)}    
                        {route.name == "Our Plans" && (<Icon.InvestIcon/>)}    
                        {route.name == "Profile" && (<Icon.BoxProfileIcon/>)}    

                        <span className="leading-20 text-[14px] text-darkblue-550">{`${route.name}`}</span>
                  </NavLink>
                </li>)}
                </ul>

                <div className="px-3 py-1 rounded-2 text-darkblue-550 flex flex-row gap-1" style={{border: '1px solid #c9cfd6'}}>
                  <Icon.KycIcon/>
                  <span className="text-gray-95 font-medium cursor-pointer" onClick={() => {history.push("/app/kyc/description")}}>
                    KYC Application
                  </span>
                </div>
            </div>                
          </div>
      </div>
    </>
  );
}

export default SidebarContent;
