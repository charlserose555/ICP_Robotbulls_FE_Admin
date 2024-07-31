import React, { useContext, useEffect, useState } from "react";
import { ActivityIcon, ArrowNextIcon, AvatarIcon, DownIcon, LogoutIcon, NextArrowIcon, ProfileIcon } from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AccountCharts from "../../../components/Charts/AccountCharts";
import { registerCharts } from "../../../components/Charts/registerCharts"

function dashboard() {
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
        <a className="text-14 px-6 w-full py-5 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-between gap-45 items-center"
            style={{textAlign: 'center', cursor: 'pointer'}}
            onClick={() => {history.push("/app/kyc/description")}}>
            <p className='text-white font-medium'>Submit your KYC</p>
            <NextArrowIcon/>
        </a>
        <div className="grid flex-col w-full grid-cols-1 lg:grid-cols-3 mb-8 mt-4 gap-[30px]">
            <div className="col-span-1 lg:col-span-1 card-token flex w-full rounded-2 mt-3 lg:mt-0">
                <div className="flex flex-col w-full h-full p-5 rounded-2 gap-2">
                    <div className="flex w-full flex-row gap-8 justify-start items-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center" style={{background: "rgba(255,255,255,0.2)", borderRadius:"50%"}}>
                            <img className="flex" src="/demo/assets/token-symbol-light.png" style={{width: "32px"}}/>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-darkblue-150 uppercase text-[13px] font-medium">Account Equity</span>
                            <div className="flex flex-row justify-start items-end gap-2">
                                <span className="text-white uppercase text-[26px] leading-[26px] font-medium">0.00</span>
                                <span className="text-white uppercase text-[14px] font-medium">CHF</span>
                            </div>
                            <span className="text-darkblue-150 uppercase text-[13px] font-medium">Account Balance</span>
                            <div className="flex flex-row justify-start items-end gap-2">
                                <span className="text-white uppercase text-[26px] leading-[26px] font-medium">0.00</span>
                                <span className="text-white uppercase text-[14px] font-medium">CHF</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                        <span className="text-darkblue-150 uppercase text-[13px] font-medium">The equivalent of your Equity in Crypto</span>
                        <div className="flex flex-row w-full justify-around">
                            <div className="flex flex-col justify-start items-start">
                                <span className="text-white uppercase text-[26px] leading-[26px] font-medium">~</span>
                                <span className="text-white uppercase text-[12px] font-medium">RBC</span>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <span className="text-white uppercase text-[26px] leading-[26px] font-medium">~</span>
                                <span className="text-white uppercase text-[12px] font-medium">RBC</span>
                            </div>
                            <div className="flex flex-col justify-start items-start">
                                <span className="text-white uppercase text-[26px] leading-[26px] font-medium">~</span>
                                <span className="text-white uppercase text-[12px] font-medium">RBC</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 lg:col-span-2 grid w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-[30px]">
                    <div className="hidden md:block col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
                       <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
                            <span className="text-darkblue-900 text-[17px] font-medium px-2">Our Bulls</span>
                            <span className="pt-2 text-gray-600 px-2 text-[15px]">
                                We develop trading robots that research for you on the basis of past market experiences and of the emotional state of traders.    
                            </span>
                            <div className="flex w-full flex-col pt-4 gap-8">
                            <a className="text-14 w-36 px-2 mx-2 mt-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                                style={{textAlign: 'center', cursor: 'pointer'}}>
                                <p className='text-white font-medium'>Learn more</p>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden w-full">
                       <div className="flex flex-row bg-white justify-between items-center w-full h-full py-3 px-4 rounded-2">
                            <span className="text-darkblue-900 text-[15px] font-normal px-2 w-full">Our Plans</span>
                            <a className="text-14 w-16 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                                style={{textAlign: 'center', cursor: 'pointer'}}>
                                <NextArrowIcon/>
                            </a>
                        </div>
                    </div>
                    <div className="col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
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
                    </div>
                </div>
            </div>
        </div>
        <div className="grid flex-col w-full grid-cols-1 lg:grid-cols-2 mb-8 mt-4 gap-[30px]">
            <div className="col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
                <div className="flex flex-col md:flex-row bg-white w-full h-full p-5 rounded-2 gap-4 justify-start items-start">
                    <img className="flex flex-wrap" src="/demo/assets/welcome_old.png" style={{width: "150px"}}/>
                    <div className="flex flex-col">
                        <span className="text-darkblue-900 text-[18px] font-medium px-2">Thank you for your interest in the RobotBullsCoin</span>
                        <span className="pt-2 text-gray-600 px-2 text-[15px]">
                            We are currently developing our own coin that is going to power our algorithm and all of our applications.          
                        </span>
                        <div className="flex w-full flex-col pt-2 gap-8">
                            <a className="text-14 w-24 px-2 mx-2 mt-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                                style={{textAlign: 'center', cursor: 'pointer'}}>
                                <p className='text-white font-medium'>Our coin</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-span-1 mg:col-span-1 lg:col-span-1 flex w-full">
                <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
                    <div className="flex flex-row w-full justify-between items-center">
                        <span className="text-darkblue-900 text-[15px] font-semibold px-2">How to purchase crypto currencies?</span>
                        <span className="text-darkblue-900 text-[13px] font-medium px-2 uppercase cursor-pointer flex flex-row items-center"  onClick={() => {history.push("/app/buy-crypto")}}>learn more
                            <ArrowNextIcon/>
                        </span>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-2 pl-2">
                        <div className="w-[2px] h-full pt-2">
                            <div className="w-[2px] h-full" style={{borderLeft: "1px solid #707275"}}></div>
                        </div>
                        <span className="pt-2 text-gray-600 px-2 text-[15px]">
                            If you're new to purchasing cryptocurrencies, we have curated a list of the most convenient methods for you to get started.
                        </span>
                    </div>
                    <div className="flex w-full flex-col pt-4 gap-8">
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default dashboard;
