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
import { bonusTypeOptions, offeringTypeOptions, referralBonusOptions } from "../../../const/variable";
import Select from "react-tailwindcss-select";

function referralSetting() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [checked, setChecked] = useState(false)
    const [bonusType, setBonusType] = useState({ value: "For All Transactions", label: "For All Transactions" });
    const [offeringType, setOfferingType] = useState({ value: "Percentage", label: "Percentage" });
    const [referalBonusType, setReferalBonusType] = useState({ value: "For All Transactions", label: "For All Transactions" });

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
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Referral Settings</span>
                    <div className="flex justify-end">    
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <p className="text-gray-600 text-[14px]">
                    Manage the referral system. Once enable referral system option, it will start tracking invitation link also user/contributor able to see invitation link on their profile. They can share any where to invite more people to join on your platform. You can specify how much bonus a user can get.
                    </p>
                    <p className="text-gray-600 font-semibold text-[14px] pt-4">
                        Note: To active referral system completly, you have set Show in Visibility by edit Referral page from
                         <span className="text-darkblue-700 text-decoration">{" Manage > Page"}</span>
                    </p>
                    <p className="text-gray-600 text-[14px] pt-4">
                        Referral System
                    </p>

                    <label>
                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                        offColor="#e5e7eb" onColor="#2c80ff"/>
                    </label>

                    <div className="w-full flex flex-col gap-4">
                        <p className="text-gray-700 text-[15px] font-medium">Invited User<span className="uppercase text-[13px] text-coral-300">{" (who joined)"}</span></p>
                    
                        <div className="w-full flex flex-col w-full lg:flex-row gap-5">
                            <div className="flex flex-col w-full md:flex-row gap-5">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Referral Bonus Allowed</p>
                                    <Select
                                        value={bonusType}
                                        onChange={(value) => setBonusType(value)}
                                        options={bonusTypeOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Limit with transaction, how many times bonus will add into account for purchase.
                                    </p>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Offering Type</p>
                                    <Select
                                        value={offeringType}
                                        onChange={(value) => setOfferingType(value)}
                                        options={offeringTypeOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Choose whether the referral bonus will calculated as percentage or fixed amount.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full lg:flex-row gap-5">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Bonus - Offer Amount</p>
                                    <input placeholder="10" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Specify bonus amount for who joined.
                                    </p>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Show Info to User</p>
                                    <label>
                                        <Switch onChange={() => {setChecked(prev => !prev)}} checked={checked} checkedIcon={false} uncheckedIcon={false}
                                        offColor="#e5e7eb" onColor="#2c80ff"/>
                                    </label>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Referral info show to user on signup page, so the user can see who refer him
                                    </p>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 text-[15px] font-medium">Referral User<span className="uppercase text-[13px] text-coral-300">{" (who referred)"}</span></p>

                        <div className="w-full flex flex-col w-full lg:flex-row gap-5">
                            <div className="flex flex-col w-full md:flex-row gap-5">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Referral Bonus Allowed</p>
                                    <Select
                                        value={referalBonusType}
                                        onChange={(value) => setReferalBonusType(value)}
                                        options={referralBonusOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Limit with referral bonus amount, how much bonus will add into account for invite someone.

                                    </p>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Offering Type</p>
                                    <Select
                                        value={offeringType}
                                        onChange={(value) => setOfferingType(value)}
                                        options={offeringTypeOptions}
                                    />
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Choose whether the referral bonus will calculated as percentage or fixed amount.
                                    </p>
                                </div>
                            </div>
                            <div className="flex flex-col w-full lg:flex-row gap-5">
                                <div className="flex w-full flex-col gap-2">
                                    <p className="text-gray-500 text-[14px] font-semibold pb-1">Bonus - Offer Amount</p>
                                    <input placeholder="10" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                    type="text"/>
                                    <p className="text-gray-400 text-[12px] font-medium w-full">
                                        Specify bonus amount for who joined.
                                    </p>
                                </div>
                                <div className="flex w-full flex-col gap-2">
                                </div>
                            </div>
                        </div>
                    </div>

                    <a className="text-14 w-32 px-2 py-2 my-6 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                        <div className="hidden md:block">
                            <RefreshIcon/>
                        </div>
                        <p className='text-white font-medium text-14'>Upgrade</p>
                    </a>

                    <p className="text-gray-600 text-[13px] font-medium w-full italic">
                        <span className="font-bold">Note: </span>
                         Bonus will automatically adjust after each successfull transaction.
                    </p>
                </div>
            </div>
        </div>
        </>
    );
}

export default referralSetting;
