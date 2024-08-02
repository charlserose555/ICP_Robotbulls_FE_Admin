import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CashIcon, CheckIcon, CloseIcon, DatabaseIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function paymentMethods() {
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
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Payment Methods</span>
                    <div className="flex justify-end">        
                        <div className="flex flex-row justify-end gap-4 ">
                            <div className="py-1.5 px-2 text-darkblue-550 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                                style={{border: '1px solid #2c80ff', textAlign: 'center', cursor: 'pointer'}}             
                                onClick={() => { dispatch(ShowModal("manageCurrency"))}}>

                                <CashIcon/>
                                <a className="font-medium text-darkblue-550 text-[13px]">Manage Currency</a>
                            </div>
                        </div>                
                    </div>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 px-2">
                    <div className="col-span-1">
                        <div className="flex flex-col w-full rounded-2 bg-white stage-card overflow-hidden"  style={{border: '1px solid #d5d6d7'}}>
                            <div className="w-full flex relative justify-between items-center flex-row px-2  bg-gray-60">
                                <div className="payment-label">
                                    <span className="uppercase">add-ons</span>
                                </div>
                                <div className="w-8 h-8">
                                    <a className="text-14 w-8 h-8 text-gray-500 font-medium flex flex-row flex-wrap justify-around gap-45 items-center cursor-pointer"
                                        style={{textAlign: 'center', cursor: 'pointer'}}>
                                    </a>
                                </div>
                                <div className="flex flex-row gap-3 justify-center items-center">
                                    <img src="/demo/assets/pay-coinpayments-admin.png" height={100}/>
                                </div>
                                <div className="text-gray-300 ">
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
                                                        Update
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                                <Menu.Item>
                                                    {({ active }) => (
                                                    <div className={`menu-item flex justify-row items-center flex start px-45 gap-[10px] rounded-2 cursor-pointer hover:bg-gray-50`} onClick={() => logout()}>
                                                        <a className="block py-2 font-roboto font-normal text-[13px] text-gray-500 leading-[19px] uppercase">
                                                        Disabled
                                                        </a>
                                                    </div>
                                                    )}
                                                </Menu.Item>
                                            </div>
                                        </Menu.Items>
                                    </Menu>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-7" >
                                <div className="flex flex-col w-full justify-center items-center">
                                    <div className="flex flex-col w-full">
                                        <p className="text-gray-600 text-[17px] font-semibold uppercase text-center">CoinPayments Gateway</p>
                                        <p className="text-gray-400 text-[15px] font-medium text-center">
                                            Receive online payments from contributors using CoinPayments.
                                        </p>
                                    </div>
                                    <div className="rounded-8 w-10 h-10 bg-green-400 text-white flex justify-center items-center mt-10">
                                        <CheckIcon/>
                                    </div>
                                    <p className="text-[14px] text-green-400 font-medium text-center pt-2">
                                        Displayed on Purchase Tokens 
                                    </p>
                                </div>
                            </div>
                            <div className="h-[1px] bg-gray-200"></div>
                            <div className="flex flex-row w-full gap-4 p-8" >
                                <div className="flex flex-row w-full justify-around items-start">
                                    <p className="text-gray-600 text-[15px] w-full text-start">API Key</p>
                                    <p className="text-gray-600 text-[15px] w-full text-end">dsfj...j203</p>
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

export default paymentMethods;
