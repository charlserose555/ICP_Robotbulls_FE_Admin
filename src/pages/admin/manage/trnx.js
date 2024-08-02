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
import { bullOptions, dateWithInOptions, payCurrencyOptions, payMethodsOptions, planDurationOptions, searchTypeOptions, statusOptions, trnxOptions } from "../../../const/variable";
import { duration } from "moment/moment";

function trnx() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [avatar, setAvatar] = useState('');

    const [displayName, setDisplayName] = useState('');
    const [searchField, setSearchField] = useState({ value: "TRANX", label: "TRANX" });
    const [trnxType, setTrnxType] = useState({ value: "Any Type", label: "Any Type" });
    const [statusType, setStatusType] = useState({ value: "Show All", label: "Show All" });
    const [stageType, setStageType] = useState({ value: "All Stage", label: "All Stage" });
    const [paymethodType, setPaymethodType] = useState({ value: "All", label: "All" });
    const [paycurrencyType, setPayCurrencyType] = useState({ value: "All", label: "All" });
    const [dateWithInType, setDateWithInType] = useState({ value: "All Time", label: "All Time" });
    const [planDurationType, setPlanDurationType] = useState({ value: "All", label: "All" });
    const [bullType, setBullType] = useState({ value: "All", label: "All" });
    const [advancedSearch, setAdvancedSearch] = useState(false);

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

    useEffect(() => {
        setDisplayName(auth.user.displayname);

        setAvatar(auth.user.avatar);
    }, [auth.user]);


    const handleChange = (value) => {
        setTrnxType(value);
    }

  return (
    <>
      <div className="flex h-full flex-col container justify-center items-center">
        <div className="flex flex-col justify-start items-center w-full h-full p-6 rounded-2 bg-white">
            <div className="flex flex-row w-full justify-between">
                <span className="text-darkblue-900 col-span-8 flex items-center justify-center text-[20px] font-medium px-1">Expiring Transactions</span>
                <a className="text-14 w-32 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => { dispatch(ShowModal("addFunds"))}}>
                    <div className="hidden md:block">
                        <AddFundsIcon/>
                    </div>
                    <p className='text-white font-medium text-14'>Add Funds</p>
                </a>
            </div>
            <div className="rounded-2 bg-gray-60 w-full mt-5" style={{border: '1px solid #f4f5f7'}}>
                <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                    <div className="flex flex-row gap-4 py-6 px-4 justify-center items-center w-full flex-wrap md:flex-nowrap">
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Pending</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Approved</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Bonuses</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">All</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Expiring</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Percentage</p>
                        <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Biggest</p>
                    </div>
                    <div className="flex w-full flex-col justify-center items-center h-full px-5">
                        <input placeholder="Tranx ID to quick search" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
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
                    <div className="flex flex-col lg:flex-row w-full gap-4">
                        <div className="pt-2 w-full flex flex-col">
                            <p className="text-gray-500 text-[12px] uppercase pb-2">advanced search</p>
                            <div class="flex flex-row gap-1">
                                <div className="w-[90px]">
                                    <Select
                                        value={searchField}
                                        onChange={(value) =>  setSearchField(value)}
                                        options={searchTypeOptions}/>
                                </div>
                                <input placeholder="Search by ID" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>
                        <div className="pt-2 w-full flex flex-col md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">trnx type</p>
                                <Select
                                    value={trnxType}
                                    onChange={(value) =>  setTrnxType(value)}
                                    options={trnxOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">status</p>
                                <Select
                                    value={statusType}
                                    onChange={(value) => setStatusType(value)}
                                    options={statusOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">stage</p>
                                <Select
                                    label="Select Outlet"
                                    value={stageType}
                                    onChange={(value) => setStageType(value)}
                                    options={trnxOptions}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full gap-4">
                        <div className="pt-2 w-full flex flex-col md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                    <p className="text-gray-500 text-[12px] uppercase pb-2">pay method</p>
                                    <Select
                                        value={paymethodType}
                                        onChange={(value) => setPaymethodType(value)}
                                        options={payMethodsOptions}
                                    />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">pay currency</p>
                                <Select
                                    value={paycurrencyType}
                                    onChange={(value) => setPayCurrencyType(value)}
                                    options={payCurrencyOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">date within</p>
                                <Select
                                    label="Select Outlet"
                                    value={dateWithInType}
                                    onChange={(value) => setDateWithInType(value)}
                                    options={dateWithInOptions}
                                />
                            </div>
                        </div>
                        <div className="pt-2 w-full flex flex-col md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">plan duration</p>
                                <Select
                                    value={planDurationType}
                                    onChange={(value) => setPlanDurationType(value)}
                                    options={planDurationOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">bull</p>
                                <Select
                                    value={bullType}
                                    onChange={(value) => setBullType(value)}
                                    options={bullOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full h-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">exclude user ids</p>
                                <div className="flex flex-row justify-center items-center h-full gap-3">
                                    <input className="w-4 h-4 rounded-1 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                                    <p className="text-[14px] text-gray-500">Check to Exclude</p>
                                </div>
                            </div>
                        </div>                    
                    </div>

                    <a className="text-14 w-28 px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                        <SearchRoundIcon/>
                        <p className='text-white font-medium text-14'>Search</p>
                    </a>
                </div>                
            )}

            <div className="rounded-2 mt-12 flex text-gray-600 flex-col justify-center items-center bg-gray-60 w-full gap-5 py-12" style={{border: '1px solid #f4f5f7'}}>
                <BigDatabaseIcon/>  
                <p className="text-gray-500 text-[14px] font-medium cursor-pointer">No expiring transaction here!</p>              
                <a className="text-14 w-48 px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => { history.push("/app/dashboard")}}>
                    <p className='text-white font-medium text-14'>View All Transactions</p>
                </a>          
            </div>
        </div>
      </div>
    </>
  );
}

export default trnx;
