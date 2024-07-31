import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, AvatarIcon, LogoutIcon, MenuIcon, ProfileIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { toggleSidebar } = useContext(SidebarContext);

  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState('');

  const [displayName, setDisplayName] = useState('');

  const logout = () => {
    history.push("/");
    dispatch(Logout({}))
  }

  const menuToggle = () => {
    toggleSidebar();
  }

  useEffect(() => {
    if (auth.isLoggedIn) {
    }
  }, [auth.isLoggedIn]);

  useEffect(() => {
    setDisplayName(auth.user.displayname);

    setAvatar(auth.user.avatar);
  }, [auth.user]);

  return (
    <>
      <div className={`absolute w-full z-40 flex justify-start flex flex-row items-start `}>
        <div className="bg-darkblue-750 w-full absolute z-50 h-[66px] flex items-center">
          <div className={`container w-full flex col items-center justify-between`}>            
            <div
              className="rounded-md cursor-pointer block md:hidden"
              onClick={menuToggle}
              aria-label="Menu"
            >
              <MenuIcon className="w-6 h-6" aria-hidden="true" />
            </div>     

            <img src="/demo/assets/logo-light.png" style={{width: '40px'}}/>
            <div className="flex flex-row gap-8 items-center">
              <span className="text-white">Welcome Tom</span>

                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="user-profile-section py-[10px] flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                      <div className="bg-darkblue-550 rounded-5 w-8 h-8 flex justify-center items-center">
                        <AvatarIcon/>
                      </div>
                    </Menu.Button>
                  </div>
                  <Menu.Items 
                    className="absolute right-0 mt-4 w-72 origin-top-right bg-white divide-y divide-gray-100 rounded-4 text-white shadow-bottom_1 transition-all duration-200 ease-in-out" >
                    <div className="">
                      <Menu.Item>
                        {({ active }) => (
                          <div onClick={() => history.push("/app/profile")} className={`menu-item bg-darkblue-750 flex justify-row items-center flex start px-45 mb-[10px] gap-[10px]`}>
                            <a
                              className="block px-3 py-5 text-white text-15 leading-[19px]"
                            >
                              +41563232
                              </a>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`menu-item flex text-darkblue-750 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => history.push("/app/profile")}>
                            <ProfileIcon/>
                            <a
                              className="block py-3 text-16 leading-[19px]" 
                            >
                              My Profile
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`menu-item flex text-darkblue-750 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => history.push("/app/profile/activity")}>
                            <ActivityIcon/>
                            <a
                              className="block py-3 text-16 leading-[19px]" 
                            >
                              Activity
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className={`menu-item flex text-darkblue-750 justify-row items-center flex start px-45 gap-[10px] bg-gray-90 cursor-pointer`} onClick={() => logout()}>
                            <LogoutIcon/>
                            <a
                              className="block py-5 text-16 leading-[19px]" 
                            >
                              Logout
                            </a>
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Menu>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
