import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RefreshIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
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
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">ICO/STO Settings</span>
                    <div className="flex justify-end">                        
                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <p className="text-gray-500 text-[19px] font-normal">
                    ICO/STO Token Details
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Token Name</p>
                                <input placeholder="TokenLite" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-400 text-[12px] font-medium w-full">
                                    Enter name of token without spaces. Lower and uppercase can be used.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Token Symbol</p>
                                <input placeholder="TLE" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-400 text-[12px] font-medium w-full">
                                    Usually 3-4 Letters like ETH, BTC, WISH etc.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                            <p className="text-gray-700 text-[14px] font-normal pb-1">Decimal Minimum</p>
                            <input placeholder="" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-400 text-[12px] font-medium w-full">
                                Minimum number of decimal point for calculation. 2-8 are accepted.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                            <p className="text-gray-700 text-[14px] font-normal pb-1">Decimal Maximum
                            </p>
                            <input placeholder="" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-400 text-[12px] font-medium w-full">
                                Maximum number of decimal point for calculation. 6-18 are accepted.
                                </p>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                            <p className="text-gray-700 text-[14px] font-normal pb-1">Decimal Display

                            </p>
                            <input placeholder="" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                <p className="text-gray-400 text-[12px] font-medium w-full">
                                The number of decimal point apply to show number in User/Admin Card balance.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a className="text-14 w-32 px-2 py-2 mb-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                        <p className='text-white font-medium text-14'>Update</p>
                    </a>
                </div>
                <div className="h-[1px] bg-gray-200 w-full"></div>
                <div className="flex flex-col gap-4 w-full py-2">
                    <p className="text-gray-500 text-[19px] font-normal">
                        Purchase & Addtional Setting
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Default Selection
                                </p>
                                <Select
                                    value={walletType}
                                    onChange={(value) => setWalletType(value)}
                                    options={walletSettingOptions}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Token Price Show in
                                </p>
                                <Select
                                    value={priceType}
                                    onChange={(value) => setPriceType(value)}
                                    options={tokenPriceOptions}
                                />
                            </div>
                        </div>
                    </div>                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Per Token Price
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Show</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Amount in Money Format

                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Enable</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">KYC Before Purchase
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Enabled</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col">
                        <p className="text-gray-700 text-[14px] font-normal pb-2">Purchase With
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5" >
                            {
                                purchaseType.map((item, key) => (
                                <div className="flex flex-row justify-start items-center h-full gap-3" key={key}>
                                    <input className="w-4 h-4 rounded-1 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                                    <p className="text-[12px] text-gray-500">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="text-gray-700 text-[14px] font-normal pt-4">Progress Bar Setting
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Raised Amount Show in
                                </p>
                                <Select
                                    value={raisedAmountType}
                                    onChange={(value) => setRaisedAmountType(value)}
                                    options={progressAmountType}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Total Amount Show in
                                </p>
                                <Select
                                    value={totalAmountType}
                                    onChange={(value) => setTotalAmountType(value)}
                                    options={progressAmountType}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Soft/HardCap Show in
                                </p>
                                <Select
                                    value={softAmountType}
                                    onChange={(value) => setSoftAmountType(value)}
                                    options={progressAmountType}
                                />
                            </div>
                        </div>
                    </div>        
                    <a className="text-14 w-32 px-2 py-2 mt-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                        <p className='text-white font-medium text-14'>Update</p>
                    </a>
                </div>
                <div className="h-[1px] bg-gray-200 w-full"></div>
                <div className="flex flex-col gap-3 w-full py-2">
                    <p className="text-gray-500 text-[19px] font-normal">
                        User Panel Settings
                    </p>
                    <p className="text-gray-700 text-[14px] font-normal pb-1">Manage your User/Investor panel setting for your application.</p>
                    <p className="text-gray-900 text-[16px] font-normal">
                        User Dashboard
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Default Selection
                                </p>
                                <Select
                                    value={walletType}
                                    onChange={(value) => setWalletType(value)}
                                    options={walletSettingOptions}
                                />
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Token Price Show in
                                </p>
                                <Select
                                    value={priceType}
                                    onChange={(value) => setPriceType(value)}
                                    options={tokenPriceOptions}
                                />
                            </div>
                        </div>
                    </div>                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Token Sales Progress
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Show</p>
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">Whether show or hide the 'Token Sales Progress' in User Panel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Countdown in Sales Progress
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Hide</p>
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Whether hide or show the token sales countdown options in User Panel.
                                                                        </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Hide Welcome Block Image
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Hide</p>
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Whether hide or show the Image from 'Welcome block' in User Panel.
                                            </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Hide KYC Application
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Hide</p>
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Whether hide or show the 'KYC Application' in User Panel.
                                            </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Display Contribution In
                                    </p>
                                    <div className="flex justify-start w-full items-center gap-4">
                                        <Select
                                            classNames={`w-full`}
                                            value={firstCurrencyType}
                                            onChange={(value) => setFirstCurrencyType(value)}
                                            options={currencyOptions}
                                        />
                                        <Select
                                            classNames={`w-full`}
                                            value={secondCurrencyType}
                                            onChange={(value) => setSecondCurrencyType(value)}
                                            options={currencyOptions}
                                        />
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Select two currencies which will show on balance card for 'Contribution in'.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">My Token Page

                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Enable</p>
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Whether enable or disable the 'My Token' page from User Panel.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="flex w-full flex-col gap-2">
                                <div className="flex flex-col items-start justify-start gap-4 pt-2">
                                    <p className="text-gray-700 text-[14px] font-normal pb-1">Stage Wise Overview
                                    </p>
                                    <div className="flex justify-start items-center gap-4">
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                        <p className="text-gray-700 text-[15px]">Show</p>
                                    </div>
                                    <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Whether show or hide the stage wise purchase overview on 'My Token' page.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    <p className="text-gray-900 text-[16px] font-normal pt-4">
                        Receiving Wallet for User Profile
                    </p> 
                    <p className="text-gray-500 text-[14px] font-normal pb-1">You may need your user/investor wallet address so you can send token/smart contract to them. You can specify one or multiple or define your own name to ask your user/investor to provide address. If they provide then you can get from each user details.
                    </p>
                    <div className="flex w-full flex-col md:flex-row gap-6">
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-gray-700 text-[14px] font-normal pb-1">Supported Wallet
                            </p>
                            <Select
                                value={supportedWallets}
                                isMultiple={true}
                                onChange={(value) => setSupportedWallets(value)}
                                options={walletSettingOptions}
                            />
                            <p className="text-gray-400 text-[12px] font-medium w-full">
                                Choose one or multiple wallet name.
                            </p>
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">                            
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Custom Wallet
                                </p>
                                <div className="flex w-full flex-col md:flex-row gap-6">
                                    <input placeholder="wallet-name" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <input placeholder="wallet Label" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                </div>
                                <p className="text-gray-400 text-[12px] font-medium w-full">
                                    You can specify any custom wallet name.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col md:flex-row gap-6">
                        <div className="flex w-full flex-col gap-2">
                            <p className="text-gray-700 text-[14px] font-normal pb-1">Note for Wallet
                            </p>
                            <input placeholder="Address should be ERC20-compliant." className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                            type="text"/>
                            <p className="text-gray-400 text-[12px] font-medium w-full">
                                The note will show under the wallet address input field.
                            </p>
                        </div>
                        <div className="w-full flex flex-col md:flex-row gap-6 justify-center items-center">                            
                            <div className="flex w-full flex-col gap-2">
                                <p className="text-gray-700 text-[14px] font-normal pb-1">Before Purchase Alert
                                </p>
                                <div className="flex justify-start items-center gap-4">
                                    <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                    offColor="#e5e7eb" onColor="#2c80ff"/>
                                    <p className="text-gray-700 text-[15px]">Show</p>
                                </div>
                                <p className="text-gray-400 text-[13px] font-normal pb-1">
                                    Promote 'enter wallet address before buy' on buy token page.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a className="text-14 w-32 px-2 py-2 mt-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                            <RefreshIcon/>
                        <p className='text-white font-medium text-14'>Update</p>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}

export default icoSetting;
