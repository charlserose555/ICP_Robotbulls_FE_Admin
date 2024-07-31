import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, AvatarIcon, KycRoundIcon, LogoutIcon, NextArrowIcon, ProfileIcon, RemoveIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
import ReactPaginate from 'react-paginate';

function activity() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { balances } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState('');

  const [displayName, setDisplayName] = useState('');

  const logout = () => {
    history.push("/");
    dispatch(Logout({}))
  }

  const handlePageChange = (data) => {
    
  };

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
      <div className="flex container h-full justify-center lg:gap-10">
        <div className="flex flex-col w-full gap-10 mb-8">
          <div className="flex flex-col bg-white w-full p-5 rounded-2">
            <div className="flex flex-row justify-between">
              <span className="text-darkblue-900 text-[21px] font-medium px-2 flex justify-center text-center items-center">Account Activities Log</span>
              
              <a className="text-14 w-20 px-1 mx-2 py-1 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                  style={{textAlign: 'center', cursor: 'pointer'}}
                  onClick={() => {history.goBack()}}>
                  <p className='text-white font-medium text-[10px]'>Clear All</p>
              </a>

            </div>
            <div className="flex flex-col w-full gap-4 px-2 pt-6">
              <p className="text-darkblue-900 text-[14px] font-medium flex justify-start text-start items-center">
                Here is your recent activities. You can clear this log as well as disable the feature from profile settings tabs.
              </p>

              <div className="overflow-x-auto x-scrollable-tag mt-4">
                <table className="text-darkblue-900 w-full table-auto text-sm text-left rtl:text-right text-gray-500 min-w-[410px]">
                  <thead className="text-sm text-gray-500 bg-transparent">
                  <tr>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('title')}>
                            Date
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('artist')}>
                            Device
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('cover')}>
                            Browser
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer"  onClick={() => createSortHandler('playCount')}>
                            IP
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start">
                      </th>
                    </tr>
                  </thead>
                  <tbody>   
                    <tr className="z-0 font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out dark" >
                      <td className="pb-8 text-start">30 Jul, 2024 10:17 PM</td>
                      <td className="pb-8 text-start">Windows-10.0</td>
                      <td className="pb-8 text-start">	Chrome</td>
                      <td className="pb-8 text-start">	185.245.80.217</td>
                      <td className="pb-8 text-start"><RemoveIcon/></td>
                    </tr>
                    <tr className="z-0 font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out dark" >
                      <td className="pb-8 text-start">30 Jul, 2024 10:17 PM</td>
                      <td className="pb-8 text-start">Windows-10.0</td>
                      <td className="pb-8 text-start">	Chrome</td>
                      <td className="pb-8 text-start">	185.245.80.217</td>
                      <td className="pb-8 text-start"><RemoveIcon/></td>
                    </tr>
                    <tr className="z-0 font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out dark" >
                      <td className="pb-8 text-start">30 Jul, 2024 10:17 PM</td>
                      <td className="pb-8 text-start">Windows-10.0</td>
                      <td className="pb-8 text-start">	Chrome</td>
                      <td className="pb-8 text-start">	185.245.80.217</td>
                      <td className="pb-8 text-start"><RemoveIcon/></td>
                    </tr>
                    <tr className="z-0 font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out dark" >
                      <td className="pb-8 text-start">30 Jul, 2024 10:17 PM</td>
                      <td className="pb-8 text-start">Windows-10.0</td>
                      <td className="pb-8 text-start">	Chrome</td>
                      <td className="pb-8 text-start">	185.245.80.217</td>
                      <td className="pb-8 text-start"><RemoveIcon/></td>
                    </tr>
                    <tr className="z-0 font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out dark" >
                      <td className="pb-8 text-start">30 Jul, 2024 10:17 PM</td>
                      <td className="pb-8 text-start">Windows-10.0</td>
                      <td className="pb-8 text-start">	Chrome</td>
                      <td className="pb-8 text-start">	185.245.80.217</td>
                      <td className="pb-8 text-start"><RemoveIcon/></td>
                    </tr>
                    <tr className="z-0 font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out dark" >
                      <td className="pb-8 text-start">30 Jul, 2024 10:17 PM</td>
                      <td className="pb-8 text-start">Windows-10.0</td>
                      <td className="pb-8 text-start">	Chrome</td>
                      <td className="pb-8 text-start">	185.245.80.217</td>
                      <td className="pb-8 text-start"><RemoveIcon/></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row">
              {50 > 10 ? ( <div style={{alignItems: "center", justifyContent:"end"}} >
                <ReactPaginate
                  className="inline-flex text-sm h-8 mt-6 "
                  previousLabel={"previous"}
                  nextLabel={"Next"}
                  nextLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                  border rounded-e-lg bg-primary border-gray-300 text-gray-400 hover:bg-gray-300 hover:text-white"
                  previousLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                    border rounded-s-lg bg-primary border-gray-300 text-gray-400 hover:bg-gray-300 hover:text-white"
                  breakLabel={"..."}
                  selectedPageRel={1}
                  breakClassName=""
                  breakLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                  border bg-primary border-gray-300 text-gray-400 hover:bg-gray-300 hover:text-white"
                  pageCount={Math.ceil(50 / 10)}
                  pageLinkClassName="flex items-center justify-center px-3 h-8 ms-0 leading-tight
                  border bg-primary border-gray-300 text-gray-400 hover:bg-gray-300 hover:text-white"
                  pageClassName=""
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageChange}
                  containerClassName={"pagination"}
                  activeLinkClassName="flex items-center justify-center h-8 text-gray-700 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border-gray-300 bg-gray-300 text-white"
                />
              </div>) : ("")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default activity;
