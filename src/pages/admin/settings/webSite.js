import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CashIcon, CheckIcon, CloseIcon, DatabaseIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RefreshIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Switch from "react-switch";
import { bonusTypeOptions, dateTimeFormatOptions, offeringTypeOptions, pageLayoutOptions, referralBonusOptions, themeTypeOptions, timeFormatOptions, timezoneOptions } from "../../../const/variable";
import Select from "react-tailwindcss-select";

function website() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [timezoneType, setTimezoneType] = useState({ value: "(UTC+00:00) UTC", label: "(UTC+00:00) UTC" });
    const [dateFormatType, setDateFormatType] = useState({ value: "02 Aug, 2024", label: "02 Aug, 2024" });
    const [timeFormatType, setTimeFormatType] = useState({ value: "11:12 AM", label: "11:12 AM" });
    const [adminThemeType, setAdminThemeType] = useState({ value: "Default", label: "Default" });
    const [userThemeType, setUserThemeType] = useState({ value: "Default", label: "Default" });
    const [pageLayoutType, setPageLayoutType] = useState({ value: "Default", label: "Default" });
    const [checked, setChecked] = useState(false)

    const [type, setType] = useState("site info");

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
            <div className="flex flex-col justify-start items-start w-full h-full p-6 rounded-2 bg-white gap-6">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Website Settings</span>
                    <div className="flex justify-end">    
                    </div>
                </div>
                <ul className="pt-2 w-full">
                    <li className={`inline-block cursor-pointer rounded-t-lg py-2 px-6 text-14 font-medium text-center hover:text-darkblue-550 border-b-2 uppercase ${type == "site info"? "border-darkblue-550 text-darkblue-550" : "border-gray-300 text-gray-400"}`} onClick={() => {setType("site info")}}>site info</li>
                    <li className={`inline-block cursor-pointer rounded-t-lg py-2 px-6 text-14 font-medium text-center hover:text-darkblue-550 border-b-2 uppercase ${type == "general settings"? "border-darkblue-550 text-darkblue-550" : "border-gray-300 text-gray-400"}`} onClick={() => {setType("general settings")}}>general settings</li>
                    <li className={`inline-block cursor-pointer rounded-t-lg py-2 px-6 text-14 font-medium text-center hover:text-darkblue-550 border-b-2 uppercase ${type == "social links"? "border-darkblue-550 text-darkblue-550" : "border-gray-300 text-gray-400"}`} onClick={() => {setType("social links")}}>social links</li>
                    <li className={`inline-block cursor-pointer rounded-t-lg py-2 px-6 text-14 font-medium text-center hover:text-darkblue-550 border-b-2 uppercase ${type == "api settings"? "border-darkblue-550 text-darkblue-550" : "border-gray-300 text-gray-400"}`} onClick={() => {setType("api settings")}}>api settings</li>
                    <li className={`inline-block cursor-pointer rounded-t-lg py-2 px-6 text-14 font-medium text-center hover:text-darkblue-550 border-b-2 uppercase ${type == "advanced"? "border-darkblue-550 text-darkblue-550" : "border-gray-300 text-gray-400"}`} onClick={() => {setType("advanced")}}>advanced</li>
                </ul>
                {type == "site info" && (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-darkblue-550 text-[18px] font-medium">
                            Website Information
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Site Name</p>
                                    <input placeholder="TokenLite" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Enter name of website name.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Site Email</p>
                                    <input placeholder="info@yourdomain.com" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                    Using for contact and sending email.
                                                            </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Site Copyright</p>
                                    <input placeholder="All Right Reserved." className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Copyright text for site.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Contact Address</p>
                                    <input placeholder="" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Enter the support address.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Contact Phone</p>
                                    <input placeholder="" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Using for contact and support.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Support Email 
                                    </p>
                                    <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                    Contact and Support Email.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Main Site URL
                                    </p>
                                    <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                    Set your main website url.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <a className="text-14 w-32 px-2 py-2 my-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                                <RefreshIcon/>
                            <p className='text-white font-medium text-14'>Update</p>
                        </a>
                    </div>
                )}
                {type == "general settings" && (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-darkblue-550 text-[18px] font-medium">
                            Application Settings
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Time Zone</p>
                                    <Select
                                        value={timezoneType}
                                        onChange={(value) => setTimezoneType(value)}
                                        options={timezoneOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Set application timezone.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Date Format</p>
                                    <Select
                                        value={dateFormatType}
                                        onChange={(value) => setDateFormatType(value)}
                                        options={dateTimeFormatOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Application date format
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Time Format</p>
                                    <Select
                                        value={timeFormatType}
                                        onChange={(value) => setTimeFormatType(value)}
                                        options={timeFormatOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Application time format
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] my-4 bg-gray-200"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Admin Theme
                                    </p>
                                    <Select
                                        value={adminThemeType}
                                        onChange={(value) => setAdminThemeType(value)}
                                        options={themeTypeOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                    Style scheme for admin area.

                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Auth Page Layout</p>
                                    <Select
                                        value={pageLayoutType}
                                        onChange={(value) => setPageLayoutType(value)}
                                        options={pageLayoutOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Login/Registration page design layout.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">User Panel Theme
                                    </p>
                                    <Select
                                        value={userThemeType}
                                        onChange={(value) => setUserThemeType(value)}
                                        options={themeTypeOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Style scheme for user area.
                                    </p>
                                </div>
                            </div>
                            <div className="col-span-1 flex justify-start items-center">
                                <div className="flex w-full justify-start items-center flex-col gap-2">
                                    <div className="flex flex-row justify-start items-center h-full gap-3">
                                        <input className="w-4 h-4 rounded-1 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                                        <p className="text-[12px] text-gray-500">Enable Custom Stylesheet</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Maintenance Mode
                                    </p>
                                    <div className="flex flew-row">
                                        <label>
                                            <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                            offColor="#e5e7eb" onColor="#2c80ff"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a className="text-14 w-32 px-2 py-2 my-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                            <p className='text-white font-medium text-14'>Update</p>
                        </a>
                    </div>
                )}
                {type == "social links" && (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-darkblue-550 text-[18px] font-medium">
                            Social Profile Links
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <div className="flex flew-row items-center gap-2">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-500 text-[13px]">Show on User/Client Area</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <div className="flex flew-row items-center gap-2">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-500 text-[13px]">Show on Login/Register Page</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="h-[1px] my-4 bg-gray-200"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Facebook</p>
                                    <input placeholder="https://www.facebook.com/user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Twitter</p>
                                    <input placeholder="https://twitter.com/user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Linked In</p>
                                    <input placeholder="https://www.linkedin.com/user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Github</p>
                                    <input placeholder="https://www.github.com/user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Medium</p>
                                    <input placeholder="https://www.medium.com/@user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Youtube
                                    </p>
                                    <input placeholder="https://www.youtube.com/user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                            <div className="col-span-1">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-600 text-[14px] font-medium pb-1">Telegram</p>
                                    <input placeholder="https://telegram.org/@user-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                            </div>
                        </div>
                        <a className="text-14 w-32 px-2 py-2 my-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                            <p className='text-white font-medium text-14'>Update</p>
                        </a>
                    </div>
                )}
                
                {type == "api settings" && (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-darkblue-550 text-[18px] font-medium">
                            Google reCaptcha v3
                        </p>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Site Key
                                </p>
                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-500 text-[12px] font-medium py-2">Get the API Key                                
                                    <span className="text-darkblue-800"> https://www.google.com/recaptcha/admin</span>
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Secret Key
                                </p>
                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>

                        <p className="text-darkblue-550 text-[18px] font-medium">
                            Social Login API Credentials
                        </p>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Facebook Client ID

                                </p>
                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-500 text-[12px] font-medium py-2">In Facebook App set redirect URL:                  
                                    <span className="text-darkblue-800"> https://app.tokenwiz.xyz/auth/facebook/callback</span>
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Facebook Client Secret
                                </p>
                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Google Client ID

                                </p>
                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-500 text-[12px] font-medium py-2">In Google App set redirect URL:                  
                                    <span className="text-darkblue-800"> https://app.tokenwiz.xyz/auth/google/callback</span>
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Google Client Secret

                                </p>
                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>

                        <a className="text-14 w-32 px-2 py-2 my-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                            <p className='text-white font-medium text-14'>Update</p>
                        </a>
                    </div>
                )}

                {type == "advanced" && (
                    <div className="flex flex-col gap-4 w-full">
                        <p className="text-darkblue-550 text-[18px] font-medium">
                            Header & Footer Code
                        </p>

                        <div className="flex flex-col w-full gap-6">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Header Code
                                </p>
                                <textarea className="h-[140px] flex text-[13px] w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-500 text-[12px] font-medium">Get the API Key                                
                                    {"You can use this for analytics code. Please enter full code including <script> tag."}
                                </p>
                            </div>
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-600 text-[14px] font-medium pb-1">Footer Code
                                </p>
                                <textarea className="h-[140px] flex text-[13px] w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-500 text-[12px] font-medium">Get the API Key                                
                                    {"You can use this for chat or third-party tracker codes. Please enter full code including <script> tag."}
                                </p>
                            </div>
                        </div>

                        <a className="text-14 w-32 px-2 py-2 my-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                            <p className='text-white font-medium text-14'>Update</p>
                        </a>
                    </div>
                )}
            </div>
        </div>
        </>
    );
}

export default website;
