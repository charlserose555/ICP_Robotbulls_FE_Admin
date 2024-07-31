import React, { useContext, useEffect, useState } from "react";
import { ActivityIcon, ArrowNextIcon, AvatarIcon, DownIcon, LogoutIcon, NextArrowIcon, ProfileIcon, RoundedCheckIcon } from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AccountCharts from "../../../components/Charts/AccountCharts";
import { registerCharts } from "../../../components/Charts/registerCharts"
import SalesCharts from "../../../components/Charts/SalesCharts";
import StatisticsCharts from "../../../components/Charts/StatisticsCharts";
import KycCharts from "../../../components/Charts/KycCharts";

function dashboard() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [avatar, setAvatar] = useState('');

    const [displayName, setDisplayName] = useState('');

    const [totalUser, setTotalUser] = useState('kyc');

    const [equity, setEquity] = useState('details');

    const logout = () => {
        history.push("/");
        dispatch(Logout({}))
    }

    useEffect(() => {
        if (auth.isLoggedIn) {
        }
    }, [auth.isLoggedIn]);

    useEffect(() => {
        setDisplayName(auth.user.displayname);

        setAvatar(auth.user.avatar);
    }, [auth.user]);

    registerCharts();

  return (
    <>
      <div className="justify-center container w-full pb-8">        
        <div className="grid flex-col w-full grid-cols-1 lg:grid-cols-3 mb-8 mt-4 gap-[30px]">
            <div className="col-span-1 lg:col-span-2 grid w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    <div className="hidden md:block col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
                       <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
                            <span className="text-gray-500 text-[14px] font-medium px-2 uppercase">Since Last Week</span>
                            <span className="text-gray-600 px-2 font-semibold text-[32px]">
                                0
                            </span>
                        </div>
                    </div>
                    <div className="col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
                        <div className="flex flex-col bg-white w-full h-full p-5 rounded-2 justify-between">
                            <div className="flex flex-row justify-between items-center">
                                <span className="text-gray-500 text-[14px] font-medium px-2 uppercase">Total Users</span>

                                <div className="flex gap-1 flex-row">
                                    <span className={`text-gray-500 text-[12px] font-medium px-2 cursor-pointer uppercase ${totalUser == "kyc" && "bg-gray-200 rounded-3"}`} onClick={() => {setTotalUser('kyc')}}>kyc</span>
                                    <span className={`text-gray-500 text-[12px] font-medium px-2 cursor-pointer uppercase ${totalUser == "user" && "bg-gray-200 rounded-3"}`} onClick={() => {setTotalUser('user')}}>user</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center gap-2">
                                <p className="text-gray-600 px-2 font-semibold text-[32px]">4</p>
                                <p className="text-darkblue-550 px-4 py-1 font-medium text-[14px] bg-darkblue-100 rounded-5">100%</p>
                            </div>
                            <div className="flex flex-row justify-between items-center gap-2">
                                <div className="flex flex-row items-center gap-2">
                                    <p className="text-gray-500 px-2 font-semibold text-[16px]">0</p>
                                    <p className="text-gray-500 px-2 font-normal text-[13px]">since last week</p>
                                </div>
                                <p className="text-darkblue-200 px-2 font-normal text-[13px] uppercase">View</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
                        <div className="flex flex-col justify-between bg-white w-full p-5 rounded-2">
                            <div className="flex flex-row justify-between items-center">
                                <p className="text-darkblue-900 text-[16px] font-medium px-2">Account Predictions</p>
                                <div className="flex flex-col gap-8">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                            <span className="flex justify-center flex-row text-[13px] font-medium text-gray-600 items-start uppercase">
                                                12 months
                                                <DownIcon/>
                                            </span>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items  className="absolute flex w-full justify-center items-center right-0 mt-1 w-32 origin-top-right bg-white divide-y divide-gray-100 rounded-1 text-white shadow-bottom_1 transition-all duration-200 ease-in-out" >
                                            <div>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                        <p className="py-1 text-[13px] uppercase" >
                                                            3 months
                                                        </p>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                        <p className="py-1 text-[13px] uppercase" >
                                                            6 months
                                                        </p>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                        <p className="py-1 text-[13px] uppercase" >
                                                            12 months
                                                        </p>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex h-full w-full text-gray-900">
                                <AccountCharts/>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="col-span-1 lg:col-span-1 card-token flex w-full rounded-2 mt-3 lg:mt-0">
                <div className="flex flex-col w-full h-full p-5 rounded-2 gap-2">
                    <div className="flex w-full flex-row gap-8 justify-start items-center">
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex flex-row justify-between w-full">
                                <span className="text-darkblue-150 uppercase text-[13px] font-medium">Account Equity</span>
                                <div className="flex gap-1 flex-row items-center">
                                    <span className={`text-white text-[12px] font-medium px-2 cursor-pointer uppercase ${equity == "details" && "bg-gray-200 rounded-3 bg-opacity-20"}`} onClick={() => {setEquity('details')}}>Details</span>
                                    <span className={`text-white text-[12px] font-medium px-2 cursor-pointer uppercase ${equity == "overview" && "bg-gray-200 rounded-3 bg-opacity-20"}`} onClick={() => {setEquity('overview')}}>Overview</span>
                                </div>
                            </div>
                            <div className="flex flex-row justify-start items-end gap-2">
                                <span className="text-white text-[14px] font-medium">Equity: </span>
                                <span className="text-white uppercase text-[16px] font-medium">0 USD</span>
                            </div>
                            <div className="flex flex-row justify-start items-end gap-2">
                                <span className="text-white text-[14px] font-medium">Tokens: </span>
                                <span className="text-white uppercase text-[16px] font-medium">0 USD</span>
                            </div>
                            <div className="flex flex-row justify-start items-end gap-2">
                                <span className="text-white text-[18px] font-semibold">0</span>
                                <span className="text-white uppercase text-[12px] font-medium">Users with Equity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid flex-col w-full grid-cols-1 lg:grid-cols-12 mb-8 mt-4 gap-[30px]">
            <div className="col-span-1 mg:col-span-1 lg:col-span-5 flex w-full">
                <div className="flex flex-col bg-white w-full h-full p-5 rounded-2 gap-1">
                    <div className="flex flex-row w-full justify-between items-center">
                        <span className="text-darkblue-900 text-[15px] font-semibold px-2">Recent Transaction</span>
                        <span className="text-darkblue-900 text-[13px] font-medium px-2 uppercase cursor-pointer flex flex-row items-center"  onClick={() => {history.push("/app/buy-crypto")}}>View All
                            <ArrowNextIcon/>
                        </span>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <div className="flex flex-col">
                            <span className="pt-2 text-gray-600 px-2 text-[14px] font-semibold">
                                Diamond
                            </span>
                            <span className="pt-1 text-gray-400 px-2 text-[12px]">
                                26 Jan, 2021 06:18 PM
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="pt-2 text-gray-600 px-2 text-[14px] font-semibold">
                                +200
                            </span>
                            <span className="pt-1 text-gray-600 px-2 text-[12px]">
                                200 USD
                            </span>
                        </div>
                        <div className="text-green-400">
                            <RoundedCheckIcon/>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-2">
                        <div className="flex flex-col">
                            <span className="pt-2 text-gray-600 px-2 text-[14px] font-semibold">
                                Diamond
                            </span>
                            <span className="pt-1 text-gray-400 px-2 text-[12px]">
                                26 Jan, 2021 06:18 PM
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="pt-2 text-gray-600 px-2 text-[14px] font-semibold">
                                +200
                            </span>
                            <span className="pt-1 text-gray-600 px-2 text-[12px]">
                                200 USD
                            </span>
                        </div>
                        <div className="text-green-400 w-[48px] h-[48px]">
                        </div>
                    </div>
                    <div className="flex w-full flex-col pt-4 gap-8">
                    </div>
                </div>
            </div>
            <div className="col-span-1 mg:col-span-1 lg:col-span-7 flex w-full">
                <div className="flex flex-col justify-between bg-white w-full p-5 rounded-2">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-darkblue-900 text-[16px] font-semibold px-2">Account Predictions</p>
                        <div className="flex flex-col gap-8">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                    <span className="flex justify-center flex-row text-[13px] font-medium text-gray-600 px-2 items-start uppercase">
                                        30 DAYS
                                        <DownIcon/>
                                    </span>
                                    </Menu.Button>
                                </div>
                                <Menu.Items  className="absolute flex w-full justify-center items-center right-0 mt-1 w-32 origin-top-right bg-white divide-y divide-gray-100 rounded-1 text-white shadow-bottom_1 transition-all duration-200 ease-in-out" >
                                    <div>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    7 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    15 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    30 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    90 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    160 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    360 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                        </div>
                    </div>
                    <div className="flex h-full w-full text-gray-900">
                        <SalesCharts/>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid flex-col w-full grid-cols-1 lg:grid-cols-12 mb-8 mt-4 gap-[30px]">
            <div className="col-span-1 mg:col-span-1 lg:col-span-5 flex w-full">
                <div className="flex flex-col justify-between bg-white w-full p-5 rounded-2">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-darkblue-900 text-[16px] font-semibold px-2">Registration Statistics</p>
                        <div className="flex flex-col gap-8">
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                    <span className="flex justify-center flex-row text-[13px] px-2 font-medium text-gray-600 items-start uppercase">
                                        30 DAYS
                                        <DownIcon/>
                                    </span>
                                    </Menu.Button>
                                </div>
                                <Menu.Items  className="absolute flex w-full justify-center items-center right-0 mt-1 w-32 origin-top-right bg-white divide-y divide-gray-100 rounded-1 text-white shadow-bottom_1 transition-all duration-200 ease-in-out" >
                                    <div>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    7 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    15 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    30 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    90 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    160 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                            <div className={`menu-item flex text-darkblue-650 justify-row items-center flex start px-45 gap-[10px] cursor-pointer`} onClick={() => logout()}>
                                                <p className="py-1 text-[13px] uppercase" >
                                                    360 DAYS
                                                </p>
                                            </div>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                        </div>
                    </div>
                    <div className="flex h-full w-full text-gray-900">
                        <StatisticsCharts/>
                    </div>
                </div>
            </div>
            <div className="col-span-1 mg:col-span-1 lg:col-span-3 flex w-full">
                <div className="flex flex-col justify-between bg-white w-full p-5 rounded-2">
                    <div className="flex flex-row justify-between items-center">
                        <p className="text-darkblue-900 text-[16px] font-semibold px-2">KYC Countries</p>
                    </div>
                    <div className="flex h-full w-full text-gray-900">
                        <KycCharts/>
                    </div>
                </div>
            </div>
            <div className="col-span-1 mg:col-span-1 lg:col-span-4 flex w-full">
                <div className="flex flex-col justify-center bg-white w-full p-5 rounded-2">
                    <div className="flex flex-row justify-center items-center">
                        <p className="text-gray-500 text-[20px] font-semibold px-2">User Countries</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
