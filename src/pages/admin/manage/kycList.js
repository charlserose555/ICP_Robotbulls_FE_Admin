import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, AddFundsIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, KycRoundIcon, LogoutIcon, NextArrowIcon, OptionIcon, ProfileIcon, SearchIcon, SearchRoundIcon, SettingIcon } from "../../../icons";
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

function kycList() {
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
                <span className="text-darkblue-900 col-span-8 flex items-center justify-center text-[20px] font-medium px-1">Pending KYC Application</span>
                <a className="text-14 w-42 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => { dispatch(ShowModal("addBonus"))}}>
                    <div className="hidden md:block">
                        <SettingIcon/>
                    </div>
                    <p className='text-white font-medium text-14'>KYC Form Settings</p>
                </a>
            </div>
            <div className="rounded-2 bg-gray-60 w-full mt-5" style={{border: '1px solid #f4f5f7'}}>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                    <div className="flex flex-row gap-4 py-6 px-4 justify-between items-center w-full flex-wrap md:flex-nowrap whitespace-nowrap">
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer whitespace-nowrap">Pending</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer whitespace-nowrap">Missing</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer whitespace-nowrap">Approved</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer whitespace-nowrap">All</p>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center h-full px-5">
                        <input placeholder="Quick search with name/ids" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                        type="text"/>
                    </div>
                    <div className="flex w-full h-full flex-row justify-end px-4 items-center gap-2 pb-2">
                        <div className={`p-1 rounded-2 cursor-pointer ${advancedSearch ? "bg-gray-600 text-white" : "bg-white text-gray-400"}`} style={{border: '1px solid #e5e7eb'}} onClick={() => {setAdvancedSearch(prev => !prev)}}>
                            <OptionIcon/>
                        </div>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                    <div className="p-1 rounded-2 bg-white text-gray-400 cursor-pointer" style={{border: '1px solid #e5e7eb'}}>
                                        <DatabaseIcon/>
                                    </div>
                                </Menu.Button>
                            </div>
                            <Menu.Items 
                                className="absolute z-40 left-0 mt-1 w-24 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" >
                                <div className="gap-2">
                                <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-normal text-14 leading-[19px] uppercase">
                                            Entire
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-normal text-14 leading-[19px] uppercase">
                                            Minimal
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-normal text-14 leading-[19px] uppercase">
                                            Plans
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Menu>
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                    <div className="p-1 rounded-2 bg-white text-gray-400 cursor-pointer" style={{border: '1px solid #e5e7eb'}}>
                                        <SettingIcon/>
                                    </div>
                                </Menu.Button>
                            </div>
                            <Menu.Items 
                                className="absolute z-40 left-0 mt-1 w-24 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" >
                                <div className="gap-2">
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-medium text-14 leading-[19px]">
                                            10
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-medium text-14 leading-[19px]">
                                            20
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-medium text-14 leading-[19px]">
                                            50
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-medium text-14 leading-[19px]">
                                            100
                                            </a>
                                        </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                        <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                            <a className="block py-2 font-roboto font-medium text-14 leading-[19px]">
                                            200
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
            
            {advancedSearch && (
                <div className="rounded-2 flex flex-col bg-gray-60 w-full px-5 pt-2 pb-5 gap-4" style={{border: '1px solid #f4f5f7'}}>
                    <div className="flex flex-col lg:flex-row w-full justify-end gap-4">
                        <div className="pt-2 w-full flex flex-col">
                            <p className="text-gray-500 text-[12px] uppercase pb-2">advanced search</p>
                            <div class="flex flex-row gap-1">
                                <div className="w-[90px]">
                                    <Select
                                        value={searchField}
                                        onChange={(value) =>  setSearchField(value)}
                                        options={searchKycOptions}/>
                                </div>
                                <input placeholder="Search by ID" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>
                        <div className="pt-2 w-full flex flex-col justify-end md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">status</p>
                                <Select
                                    value={statusType}
                                    onChange={(value) =>  setStatusType(value)}
                                    options={statusTypeOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">doc type</p>
                                <Select
                                    value={docType}
                                    onChange={(value) => setDocType(value)}
                                    options={docTypeOptions}
                                />
                            </div>

                            <div className="h-full flex justify-end items-end">
                                <a className="text-14 w-32 px-2 py-1 h-[38px] fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                                    style={{textAlign: 'center', cursor: 'pointer'}}
                                    onClick={() => { history.push("/app/dashboard")}}>
                                    <SearchRoundIcon/>
                                    <p className='text-white font-medium text-14'>Search</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>                
            )}

            <div className="rounded-2 mt-12 flex text-gray-600 flex-col justify-center items-center bg-gray-60 w-full gap-5 py-12" style={{border: '1px solid #f4f5f7'}}>
                <BigDatabaseIcon/>  
                <p className="text-gray-500 text-[14px] font-medium cursor-pointer">No pending KYC application here!</p>              
                <a className="text-14 w-48 px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => { history.push("/app/dashboard")}}>
                    <p className='text-white font-medium text-14'>View All KYC Application</p>
                </a>          
            </div>
        </div>
      </div>
    </>
  );
}

export default kycList;
