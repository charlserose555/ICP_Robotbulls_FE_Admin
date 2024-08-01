import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, DocIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
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
        <div className="grid container h-full justify-center grid-cols-1 lg:grid-cols-4 gap-4">
            <div className="flex bg-white rounded-1 flex-col w-full col-span-1 lg:col-span-3 gap-4 mb-8 p-6 rounded-2">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Site Languages</span>
                    <div className="flex justify-end">                        
                    </div>
                </div>

                <p className="text-gray-500 text-[14px]">Enable or disable the languages of application. You can add your language and translate that on your way.</p>
                <div className="py-4">
                    <table className="text-darkblue-900 w-full table-auto text-sm text-left rtl:text-right text-gray-500" style={{overflow: "visible"}}>
                        <thead className="text-[13px] font-semibold text-darkblue-550 bg-transparent">
                            <tr>
                                <th scope="col" className="pb-3 text-start">
                                    <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                                        Language
                                    </div> 
                                </th>
                                <th scope="col" className="pb-3 text-start hidden md:table-cell">
                                    <div className="flex justify-start font-semibold w-full items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                                        Label
                                    </div> 
                                </th>
                                <th scope="col" className="pb-3 text-start">
                                    <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                                        Short
                                    </div> 
                                </th>
                                <th scope="col" className="pb-3 text-center hidden md:table-cell">
                                    <div className="flex justify-center w-full font-semibold items-center flex-row cursor-pointer uppercase" onClick={() => createSortHandler('artist')}>
                                        Status
                                    </div>
                                </th>
                                <th scope="col" className="pb-3 text-center hidden md:table-cell">
                                    <div className="flex justify-center w-full font-semibold items-center flex-row cursor-pointer uppercase" onClick={() => createSortHandler('cover')}>
                                        Last Generate
                                    </div>
                                </th>
                                <th scope="col" className="pb-3 text-start">
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-center w-full">  
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[14px] font-normal">English[EN]</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[14px] hidden md:table-cell">	
                                    English
                                </td>
                                <td className="py-4 text-start text-[14px]">
                                    EN
                                </td>
                                <td className="py-4 text-center hidden md:table-cell">	
                                    <div className="flex flex-row justify-end gap-4 ">
                                        <div className="py-1 text-green-400 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                                            style={{border: '1px solid #31c48d', textAlign: 'center', cursor: 'pointer'}} onClick={() => clear()}>
                                            <a className="font-medium text-green-400 text-[13px]">Actived</a>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 text-center hidden md:table-cell">
                                    <p className="text-darkblue-800 text-[12px] font-medium">	
                                        20 Jul, 2024 09:15 AM</p>
                                </td>
                                <td className="py-4 text-center">
                                    
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
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Translation
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Generate
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Update
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                        
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[14px] font-normal">Français [FR]</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[14px] hidden md:table-cell">	
                                    Français
                                </td>
                                <td className="py-4 text-start text-[14px]">
                                    FR
                                </td>
                                <td className="py-4 text-center hidden md:table-cell">	
                                    <div className="flex flex-row justify-end gap-4 ">
                                        <div className="py-1 text-green-400 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                                            style={{border: '1px solid #31c48d', textAlign: 'center', cursor: 'pointer'}} onClick={() => clear()}>
                                            <a className="font-medium text-green-400 text-[13px]">Actived</a>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 text-center hidden md:table-cell">
                                    <p className="text-darkblue-800 text-[12px] font-medium">	
                                        20 Jul, 2024 09:15 AM</p>
                                </td>
                                <td className="py-4 text-center">
                                    
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
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Translation
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Generate
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Update
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                        
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[14px] font-normal">Deutsch [DE]</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[14px] hidden md:table-cell">	
                                    Deutsch
                                </td>
                                <td className="py-4 text-start text-[14px]">
                                    DE
                                </td>
                                <td className="py-4 text-center hidden md:table-cell">	
                                    <div className="flex flex-row justify-end gap-4 ">
                                        <div className="py-1 text-green-400 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                                            style={{border: '1px solid #31c48d', textAlign: 'center', cursor: 'pointer'}} onClick={() => clear()}>
                                            <a className="font-medium text-green-400 text-[13px]">Actived</a>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 text-center hidden md:table-cell">
                                    <p className="text-darkblue-800 text-[12px] font-medium">	
                                        20 Jul, 2024 09:15 AM</p>
                                </td>
                                <td className="py-4 text-center">
                                    
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
                                            className="absolute z-40 right-12 top-0 mt-1 w-40 origin-top-right bg-white divide-y divide-gray-100 rounded-2 text-gray-500 shadow-bottom_1 transition-all duration-200 ease-in-out" 
                                            style={{zIndex: 9999}}>
                                            <div className="gap-2">
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Translation
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Generate
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-800 leading-[19px] uppercase">
                                                        Update
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
            <div className="flex flex-col w-full col-span-1 lg:col-span-1 gap-10 mb-8">
                <div className="flex flex-col bg-white w-full rounded-2 p-6 justify-between gap-4">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[19px] font-semibold px-1">Language</span>
                    <div className="flex w-full flex-row md:flex-col gap-3">    
                        <div className="flex flex-row text-darkblue-550 justify-start items-center gap-2 cursor-pointer">
                            <DocIcon/>
                            <p className="text-[14px] text-gray-500">
                                Add New
                            </p>
                        </div>
                        <div className="flex flex-row text-darkblue-550 justify-start items-center gap-2 cursor-pointer">
                            <SettingIcon/>
                            <p className="text-[14px] text-gray-500">
                                Settings
                            </p>
                        </div>                    
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default icoStage;
