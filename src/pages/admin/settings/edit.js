import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowBeforeIcon, ArrowNextIcon, AvatarIcon, BackArrowIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, EditIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RefreshIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import { CircularProgressbarWithChildren  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Select from "react-tailwindcss-select";
import { currencyOptions, progressAmountType, purchaseType, tokenPriceOptions, visibilityOptions, walletMultipleOptions, walletSettingOptions } from "../../../const/variable";
import Switch from "react-switch";
import Trumbowyg from 'react-trumbowyg';
// import $ from 'jquery';
import 'react-trumbowyg/dist/trumbowyg.min.css'

function edit() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [adminThemeType, setAdminThemeType] = useState({ value: "Ethereum", label: "Ethereum" });
    const [walletType, setWalletType] = useState({ value: "Ethereum", label: "Ethereum" });
    const [content, setContent] = useState('');
    const [visibility, setVisibility] = useState({ value: "Hide", label: "Hide" })

    useEffect(() => {
        setTimeout(() => {
        initFlowbite();
        }, 20);
    }, []);

    useEffect(() => {
    }, []);


    return (
        <>
            <div className="flex h-full flex-col container justify-center items-center">
                <div className="flex flex-col justify-start items-start w-full h-full p-6 rounded-2 bg-white gap-4">
                    <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                        <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Edit Page
                        </span>
                        <div className="flex flex-row justify-end gap-4 ">
                            <div className="py-1 px-3 text-darkblue-550 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                            style={{border: '1px solid #2c80ff', textAlign: 'center', cursor: 'pointer'}} onClick={() => history.goBack()}>
                                <BackArrowIcon/>
                            <a className="font-medium text-darkblue-550 text-[14px]">Back</a></div>
                        </div>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <p className="text-gray-700 text-[14px] font-normal pb-1">Menu Name</p>
                        <input placeholder="Welcome block" className="h-[40px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                        type="text"/>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <p className="text-gray-700 text-[14px] font-normal pb-1">Slug
                        </p>
                        <input placeholder="home-top-block" className="h-[40px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                        type="text"/>
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <p className="text-gray-700 text-[14px] font-normal pb-1">Page Title
                        </p>
                        <input placeholder="home-top-block" className="h-[40px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                        value={"Thank you for your interest in our Artificial Intelligence investment Robot"}
                        type="text"/>
                    </div>
                    <div className="flex flex-col w-full gap-2 text-gray-700">
                        <p className="text-gray-700 text-[14px] font-normal">Page Content
                        </p>
                        <Trumbowyg
                            value={content}
                            onChange={setContent}
                        />
                        <p className="text-gray-600 text-[12px] font-normal">{`Available Short-codes : [[token_name]], [[token_symbol]], [[site_name]], [[site_email]], [[whitepaper_download_link]], [[whitepaper_download_button]] Visibility`}
                        </p>
                    </div>
                    <div className="flex flex-col w-72 gap-2">
                        <p className="text-gray-700 text-[14px] font-normal pb-1">Visibility
                        </p>
                        <Select
                            value={visibility}
                            onChange={(value) => setVisibility(value)}
                            options={visibilityOptions}
                        />
                    </div>

                    <a className="text-14 w-36 my-4 px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                        <p className='text-white font-medium text-14 uppercase'>Update Page</p>
                    </a>
                    {/* <div>
                        <textarea id="editor" />
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default edit;
