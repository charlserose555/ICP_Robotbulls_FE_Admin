import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import Select from "react-tailwindcss-select";
import { accountStatusOptions, bullOptions, dateWithInOptions, isReferredByOptions, payCurrencyOptions, payMethodsOptions, planDurationOptions, regMethodOptions, searchTypeOptions, searchUserOptions, statusOptions, tokenBalanceOptions, trnxOptions, verifiedStatusOptions } from "../../../const/variable";
import { duration } from "moment/moment";

function wallets() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars

    const [searchField, setSearchField] = useState({ value: "NAME", label: "NAME" });
    const [accountStatus, setAccountStatus] = useState({ value: "Any Status", label: "Any Status" });
    const [regMethod, setRegMethod] = useState({ value: "Any Status", label: "Any Status" });

    const [verifiedStatus, setVerifiedStatus] = useState({ value: "Anything", label: "Anything" });
    const [tokenBalance, setTokenBalance] = useState({ value: "Any Amount", label: "Any Amount" });
    const [isReferredBy, setIsReferredBy] = useState({ value: "Anything", label: "Anything" });
    const [advancedSearch, setAdvancedSearch] = useState(false);

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
            <div className="flex flex-col justify-start items-center w-full h-full p-6 rounded-2 bg-white">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-medium px-1">All Wallets</span>
                    <div className="flex justify-end">
                    </div>
                </div>
                <div className="rounded-2 bg-gray-60 w-full mt-5" style={{border: '1px solid #f4f5f7'}}>
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-2">
                        <div className="flex w-full flex-col justify-center items-center h-full p-5" >
                            <input placeholder="Quick search with name/email/id/wallet address" className="h-[34px] flex text-[13px] justify-center items-center w-full h-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                            type="text"/>
                        </div>
                    </div>
                </div>
                
            <div className="mt-4 w-full">
                <table className="text-darkblue-900 w-full table-auto text-sm text-left rtl:text-right text-gray-500" style={{overflow: "visible"}}>
                  <thead className="text-[13px] font-semibold text-darkblue-550 bg-transparent">
                  <tr>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                            User
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start hidden md:table-cell">
                        <div className="flex justify-start font-semibold w-full items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                            ETH
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                            USDT
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start hidden md:table-cell">
                        <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('artist')}>
                            USDC
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-center w-full">  
                    <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                        
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>
        </div>
        </>
    );
}

export default wallets;
