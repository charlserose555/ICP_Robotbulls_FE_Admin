import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, KycRoundIcon, LogoutIcon, NextArrowIcon, OptionIcon, ProfileIcon, SearchIcon, SearchRoundIcon, SettingIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import Select from "react-tailwindcss-select";
import { accountStatusOptions, bullOptions, dateWithInOptions, docTypeOptions, isReferredByOptions, payCurrencyOptions, payMethodsOptions, planDurationOptions, regMethodOptions, searchKycOptions, searchTypeOptions, searchUserOptions, statusOptions, statusTypeOptions, tokenBalanceOptions, trnxOptions, verifiedStatusOptions } from "../../../const/variable";
import { duration } from "moment/moment";
import { registerCharts } from "../../../components/Charts/registerCharts";

function ambassadors() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [avatar, setAvatar] = useState('');

    const [searchField, setSearchField] = useState({ value: "UID", label: "UID" });
    const [statusType, setStatusType] = useState({ value: "Any Status", label: "Any Status" });
    const [docType, setDocType] = useState({ value: "Any Type", label: "Any Type" });

    const [advancedSearch, setAdvancedSearch] = useState(true);

    const logout = () => {
        history.push("/");
        dispatch(Logout({}))
    }

    useEffect(() => {
        setTimeout(() => {
        initFlowbite();
        }, 20);
    }, []);

    useEffect(() => {
        if (auth.isLoggedIn) {
        }
    }, [auth.isLoggedIn]);

  return (
    <>
      <div className="flex h-full flex-col container justify-center items-center">
        <div className="flex flex-col justify-start items-center w-full h-full p-6 rounded-2 bg-white">
            <div className="flex flex-row w-full justify-between">
                <span className="text-darkblue-900 col-span-8 flex items-center justify-center text-[20px] font-medium px-1">All Ambassadors</span>
                <a className="text-14 w-36 px-2 mx-2 py-1 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => { history.push("/app/dashboard")}}>
                    <AddFundsIcon/>
                    <p className='text-white font-medium text-14 hidden md:block'>Add Bonues</p>
                </a>
            </div>
            <div className="rounded-2 bg-gray-60 w-full mt-5" style={{border: '1px solid #f4f5f7'}}>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                    <div className="flex flex-row gap-4 py-6 px-4 justify-start items-center w-full flex-wrap md:flex-nowrap whitespace-nowrap">
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer whitespace-nowrap">All</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer whitespace-nowrap">Ambassadors</p>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center h-full px-5">
                        <input placeholder="Quick search with name/email/id/wallet address" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                        type="text"/>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto x-scrollable-tag mt-4 w-full">
                <table className="text-darkblue-900 w-full table-auto text-sm text-left rtl:text-right text-gray-500 min-w-[410px]">
                  <thead className="text-[13px] font-semibold text-darkblue-550 bg-transparent">
                  <tr>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('title')}>
                            User
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('artist')}>
                            Amount of People
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('cover')}>
                            Amount Referred
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('cover')}>
                            Amount Referred
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody className="text-center w-full">  
                  </tbody> */}
                </table>
                <div className="w-full h-56 flex justify-center items-center text-gray-500">
                No Data available in table
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default ambassadors;
