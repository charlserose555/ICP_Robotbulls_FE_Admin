import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function icoStage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars

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
            <div className="flex flex-col justify-start items-center w-full h-full p-6 rounded-2 bg-white gap-6">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Available ICO/STO Stage</span>
                    <div className="flex justify-end">                        
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-2">
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-coral-400 rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>expired</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #2c80ff'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-green-400 rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>running</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex justify-between flex-row p-6">
                                <div className="flex flex-col">
                                    <div className="flex flex-row gap-3">
                                        <span className="text-gray-400 text-[16px] uppercase font-semibold">Stage name</span>
                                        <a className="bg-black rounded-2 flex px-3 gap-45 items-center">
                                            <p className='text-white font-medium text-[12px] uppercase'>inactive</p>
                                        </a>
                                    </div>
                                    <span className="text-gray-500 text-[17px]">Demo Stage 1</span>
                                </div>
                                <div className="text-gray-300">
                                    <Menu as="div" className="relative inline-block text-left">
                                        <div>
                                            <Menu.Button className="flex flex-row justify-between items-center transition-all duration-200 ease-in-out">
                                                <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                                    style={{textAlign: 'center', cursor: 'pointer'}}>
                                                    <MoreIcon/>
                                                </a>
                                            </Menu.Button>
                                        </div>
                                        <Menu.Items 
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Overview
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        update stage
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        make as active
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        sales pause
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="flex flex-roww-full gap-4 px-6 pt-2 pb-6">
                                <div className="flex justify-center items-center" style={{ width: 110}}>
                                    <CircularProgressbarWithChildren  value={0} >
                                        <div className="flex flex-col justify-center items-center">
                                            <p className="text-darkblue-550 text-[20px]">0%</p>
                                            <p className="text-gray-400 text-[13px] uppercase">sold</p>
                                        </div>
                                    </CircularProgressbarWithChildren>
                                </div>
                                <div className="flex flex-col justify-center w-full items-start">
                                    <p className="text-gray-400 text-[13px]">Token Issued</p>
                                    <p className="text-darkblue-550 text-[20px] font-semibold">850,000,000,000</p>
                                    <p className="text-gray-400 text-[13px]">Sold 200 tokens</p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Price</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                            14.0061
                                            <span className="text-darkblue-550 text-[10px]"> USD </span>
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Base Bonus</p>
                                        <p className="text-gray-700 text-[17px] font-medium">
                                           0
                                            <span className="text-darkblue-550 text-[10px]"> % </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Jan, 2021
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                        07:15 AM
                                        </p>
                                    </div>
                                    <div className="flex flex-col w-full">
                                    <p className="text-gray-400 text-[15px]">Start Date</p>
                                        <p className="text-gray-700 text-[15px] font-medium">
                                            24 Feb, 2050
                                        </p>
                                        <p className="text-gray-700 text-[13px] font-medium">
                                            07:15 AM
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default icoStage;
