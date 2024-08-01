import React from "react";
import { useSelector } from "../../../store";
import Header from "../header/Header";
import routes from "../../../routes/admin/topbar";
import { AnalyticsIcon, BoxProfileIcon, HomeIcon, InvestIcon, KycIcon, ManagementIcon, NextArrowIcon, SearchIcon, SettingIcon } from "../../../icons";
import { NavLink, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Sidebar from "../sidebar";
import TopbarSubmenu from "../sidebar/TopbarSubmenu";


function Main({ children }) {
  const history = useHistory();
  const { isSports, isTable } = useSelector((state) => state.menu);

  return (
    <div className="h-full relative">     
      <div className="w-full mt-[66px] h-[56px] z-40">
        <div className="w-full h-full flex bg-white hidden md:block" style={{boxShadow:"0 5px 15px rgba(24, 30, 43, 0.1)"}}>
          <div className="w-full h-full container flex justify-between bg-white items-center mb-[50px]">
            <ul className="flex flex-row h-full gap-8 items-center menus">
              {routes.map((route) =>
                route.routes ? (
                  <TopbarSubmenu route={route} key={route.name} />
                ) : (
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
                        {route.name == "Dashboard" && (<HomeIcon/>)}    
                        {route.name == "Management" && (<ManagementIcon/>)}    
                        {route.name == "Search" && (<SearchIcon/>)}    
                        {route.name == "Analytics" && (<AnalyticsIcon/>)}    
                        {route.name == "Settings" && (<SettingIcon/>)}  
                        <span className="leading-20 text-[14px] text-darkblue-550">{`${route.name}`}</span>
                  </NavLink>
                </li>))}
            </ul>
          </div>
        </div>
        <div className="pt-12">
          <div className="container flex gap-4 flex-col pb-4">
            <a className="text-14 py-3 px-4 hover:bg-coral-400 transition-all durtaion-500 ease text-white font-medium bg-coral-550 rounded-2 flex justify-between items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white text-start font-medium text-[13px]'>Important: Please setup at least one payment method to active your sale.</p>
                <NextArrowIcon/>
            </a>
            <a className="text-14 py-3 px-4 hover:bg-yellow-850 hover:text-white transition-all durtaion-500 ease text-yellow-880 font-medium bg-yellow-250 rounded-2 flex justify-between items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='font-medium text-start text-[13px]'>Please setup your application mail settings</p>
                <NextArrowIcon/>
            </a>
          </div>
          {children}
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 pb-8 container">
              <div className="flex flex-row flex-wrap gap-5">
                <p className="text-[13px] text-gray-500 hover:text-darkblue-550 cursor-pointer">How to buy?</p>
                <p className="text-[13px] text-gray-500 hover:text-darkblue-550 cursor-pointer">FAQ</p>
                <p className="text-[13px] text-gray-500 hover:text-darkblue-550 cursor-pointer">Privacy and Policy</p>
                <p className="text-[13px] text-gray-500 hover:text-darkblue-550 cursor-pointer">Terms and Condition</p>
              </div>
              <div className="">
                <p className="text-[13px] text-gray-500">© 2024 TokenLite. All Right Reserved.</p>
              </div>
          </div>
          <Sidebar />
        </div>
      </div> 
    </div>
  );
}

export default Main;
