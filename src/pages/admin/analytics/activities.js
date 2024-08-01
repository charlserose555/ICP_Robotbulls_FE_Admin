import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import Select from "react-tailwindcss-select";
import { accountStatusOptions, bullOptions, dateWithInOptions, isReferredByOptions, payCurrencyOptions, payMethodsOptions, planDurationOptions, regMethodOptions, searchTypeOptions, searchUserOptions, statusOptions, tokenBalanceOptions, trnxOptions, verifiedStatusOptions } from "../../../const/variable";
import { duration } from "moment/moment";

function activities() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars

    const [searchField, setSearchField] = useState({ value: "NAME", label: "NAME" });
    const [accountStatus, setAccountStatus] = useState({ value: "Any Status", label: "Any Status" });
    const [regMethod, setRegMethod] = useState({ value: "Any Status", label: "Any Status" });

    const [verifiedStatus, setVerifiedStatus] = useState({ value: "Anything", label: "Anything" });
    const [tokenBalance, setTokenBalance] = useState({ value: "Any Amount", label: "Any Amount" });
    const [isReferredBy, setIsReferredBy] = useState({ value: "Anything", label: "Anything" });
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


    return (
        <>
        <div className="flex h-full flex-col container justify-center items-center">
            <div className="flex flex-col justify-start items-center w-full h-full p-5 rounded-2 bg-white">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-medium px-1">Last-week User List</span>
                    <div className="flex justify-end">
                        <div className="flex flex-row justify-end gap-4 ">
                            <div className="py-1 px-2 text-darkblue-550 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                            style={{border: '2px solid #2c80ff', textAlign: 'center', cursor: 'pointer'}} onClick={() => clear()}>
                            <a className="font-medium text-darkblue-550 text-[14px]">Wallet Change Request</a></div>
                        </div>
                        <a className="text-14 w-32 px-2 mx-2 py-1 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                            <div className="hidden md:block">
                                <AddFundsIcon/>
                            </div>
                            <p className='text-white font-medium text-14'>Add User</p>
                        </a>
                    </div>
                </div>
                <div className="rounded-2 bg-gray-60 w-full mt-5" style={{border: '1px solid #f4f5f7'}}>
                    <div className="flex flex-col Wjustify-between items-center gap-2">
                        <div className="flex flex-row gap-4 py-6 px-4 justify-center items-center w-full flex-wrap md:flex-nowrap whitespace-nowrap">
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">All</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Today</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Last Week</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Last 2 Week</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Last Month</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Last 3 Months</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Last 2 Months</p>
                            <p className="text-gray-500 text-[14px] font-medium cursor-pointer">Last Year</p>
                        </div>
                        <div className="flex flex-row w-full justify-between">
                            <div className="flex w-full flex-col justify-center items-center h-full px-5">
                                <input placeholder="Quick search with name/email/id/wallet address" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                            <div className="flex w-full h-full flex-row justify-end px-4 items-center gap-2 pb-2">
                                <div className={`p-1 rounded-2 cursor-pointer bg-white text-coral-500`} style={{border: '1px solid #FD363B'}}>
                                    <RemoveIcon/>
                                </div>
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
                                        options={searchUserOptions}/>
                                </div>
                                <input placeholder="Search by ID" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>
                        <div className="pt-2 w-full flex flex-col md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                <div className="flex flex-row justify-end items-center h-full gap-3">
                                    <input className="w-4 h-4 rounded-1 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                                    <p className="text-[14px] text-gray-500">Has Wallet</p>
                                </div>
                            </div>
                            <div class="flex flex-col w-full">
                                <div className="flex flex-row justify-end items-center h-full gap-3">
                                    <input className="w-4 h-4 rounded-1 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                                    <p className="text-[14px] text-gray-500">Including Admin</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row w-full gap-4">
                        <div className="pt-2 w-full flex flex-col md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                    <p className="text-gray-500 text-[12px] uppercase pb-2">account status</p>
                                    <Select
                                        value={accountStatus}
                                        onChange={(value) => setAccountStatus(value)}
                                        options={accountStatusOptions}
                                    />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">reg method</p>
                                <Select
                                    value={regMethod}
                                    onChange={(value) => setReg(value)}
                                    options={regMethodOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">verified status</p>
                                <Select
                                    label="Select Outlet"
                                    value={verifiedStatus}
                                    onChange={(value) => setVerifiedStatus(value)}
                                    options={verifiedStatusOptions}
                                />
                            </div>
                        </div>
                        <div className="pt-2 w-full flex flex-col md:flex-row gap-3">
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">token balance</p>
                                <Select
                                    value={tokenBalance}
                                    onChange={(value) => setTokenBalance(value)}
                                    options={tokenBalanceOptions}
                                />
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-500 text-[12px] uppercase pb-2">is referred by</p>
                                <Select
                                    value={isReferredBy}
                                    onChange={(value) => setIsReferredBy(value)}
                                    options={isReferredByOptions}
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

            <div className="mt-4 w-full">
                <table className="text-darkblue-900 w-full table-auto text-sm text-left rtl:text-right text-gray-500" style={{overflow: "visible"}}>
                  <thead className="text-[13px] font-semibold text-darkblue-550 bg-transparent">
                  <tr>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                            User
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start hidden md:table-cell">
                        <div className="flex justify-start font-semibold w-full items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                            Email
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                            Tokens
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start hidden md:table-cell">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('artist')}>
                            Verified Status
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start hidden md:table-cell">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('cover')}>
                            Last/First Login	
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-center">
                        <div className="flex justify-center w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('cover')}>
                            Status	
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-center">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('cover')}>
                            	
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center w-full">  
                    <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                        <td className="pb-4 text-start">
                            <div className="flex flex-col">
                                <p className="text-darkblue-800 text-[14px] font-semibold">aaa</p>
                                <p className="text-gray-400 text-[13px]">UD00007</p>
                            </div>
                        </td>
                        <td className="pb-4 text-start text-[12px] hidden md:table-cell">	
                            +416543
                        </td>
                        <td className="pb-4 text-start text-[12px]">
                            0 (0)
                        </td>
                        <td className="pb-4 text-start hidden md:table-cell">	
                            <div className="flex flex-row justify-start items-center">
                                <div className="text-green-400">
                                    <RoundedCheckIcon/>
                                </div>
                                <p className="text-gray-600 text-[13px]">Email</p>
                                <div className="text-gray-400">
                                    <KycRoundedIcon/>
                                </div>
                                <p className="text-gray-600 text-[13px]">KYC</p>
                            </div>
                        </td>
                        <td className="pb-4 text-start hidden md:table-cell">
                            <div className="flex flex-col">
                                <p className="text-darkblue-800 text-[12px] font-medium">	
                                    20 Jul, 2024 09:15 AM</p>
                                <p className="text-gray-400 text-[12px]">
                                    20 Jul, 2024 09:15 AM</p>
                            </div>
                        </td>
                        <td className="pb-4 text-start">
                            <div className="flex flex-row justify-end gap-4 ">
                                <div className="py-1 px-2 text-green-400 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                                    style={{border: '1px solid #31c48d', textAlign: 'center', cursor: 'pointer'}} onClick={() => clear()}>
                                    <a className="font-medium text-green-400 text-[13px]">Active</a>
                                </div>
                            </div>
                        </td>
                        <td className="pb-4 text-center">
                            
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                        <a className="text-14 w-8 h-8 fill-btn-continue text-gray-700 font-medium bg-gray-200 hover:bg-gray-600 hover:text-white rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                                            style={{textAlign: 'center', cursor: 'pointer'}}>
                                            <SettingIcon/>
                                        </a>
                                    </Menu.Button>
                                </div>
                                <Menu.Items 
                                    className="absolute z-40 right-12 top-0 mt-1 w-48 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                    style={{zIndex: 9999}}>
                                    <div className="gap-2">
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <UserMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                User Details
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <EmailMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Send Email
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <MessageMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Send Message
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <PastMsgMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Past Messages
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <TransactionsMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Transactions
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <ActivitiesMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Activities
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <ReferralMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Referrals
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <ResetPassMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Reset Pass
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <SuspendMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Suspend
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                <NoteMenuIcon/>
                                                <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                Note
                                                </a>
                                            </div>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                                
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    );
}

export default activities;
