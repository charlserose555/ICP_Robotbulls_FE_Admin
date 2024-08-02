import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, EditIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RefreshIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
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
import { currencyOptions, progressAmountType, purchaseType, tokenPriceOptions, walletMultipleOptions, walletSettingOptions } from "../../../const/variable";
import Switch from "react-switch";

function icoSetting() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [adminThemeType, setAdminThemeType] = useState({ value: "Ethereum", label: "Ethereum" });
    const [walletType, setWalletType] = useState({ value: "Ethereum", label: "Ethereum" });
    const [priceType, setPriceType] = useState({ value: "ETH", label: "USD->ETH" });
    const [checked, setChecked] = useState(false)

    const [raisedAmountType, setRaisedAmountType] = useState({ value: "Token Amount", label: "Token Amount" });
    const [totalAmountType, setTotalAmountType] = useState({ value: "Token Amount", label: "Token Amount" });
    const [softAmountType, setSoftAmountType] = useState({ value: "Token Amount", label: "Token Amount" });
    const [firstCurrencyType, setFirstCurrencyType] = useState({ value: "ETH", label: "ETH" });
    const [secondCurrencyType, setSecondCurrencyType] = useState({ value: "BTC", label: "BTC" });
    const [supportedWallets, setSupportedWallets] = useState([{ value: "Ethereum", label: "Ethereum" }, { value: "Bitcoin", label: "Bitcoin" }, { value: "Litecoin", label: "Litecoin" }]);

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
            <div className="flex flex-col justify-start items-start w-full h-full p-5 rounded-2 bg-white gap-4">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Email Templates
                    </span>
                    <div className="flex justify-end">
                        <a className="text-14 w-40 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => { history.push("/app/dashboard")}}>
                            <EmailMenuIcon/>
                            <p className='text-white font-medium text-14'>Email Settings</p>
                        </a>                        
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6">
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">KYC Approved Email</p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">KYC Missing Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">KYC Rejected Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">KYC Submitted Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Canceled by User (ADMIN)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Order Unpaid/Rejected by Gateway (USER)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Order Placed (ADMIN)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Refund - Refund By Admin (USER)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Order Rejected by Admin (USER)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Order Placed by Online Gateway (USER)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Order Placed by Manual payment (USER)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Token Purchase - Order Successful (USER)
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Send Email to User
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Password Change Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Confirm Your Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">2FA Disable Confirmation by Admin
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Password Reset Email by Admin
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Unusual Login Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className="flex justify-between rounded-2 p-3 w-full items-center" style={{border: '1px solid #e5e7eb'}}>
                            <p className="text-gray-600 text-[15px] text-center">Welcome Email
                            </p>
                            <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                <EditIcon/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default icoSetting;
