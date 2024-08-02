import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, AddFundsIcon, ArrowBeforeIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, KycRoundIcon, LogoutIcon, NextArrowIcon, OptionIcon, ProfileIcon, SearchIcon, SearchRoundIcon, SettingIcon } from "../../../icons";
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
import { registerCharts } from "../../../components/Charts/registerCharts";

function walletChange() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [avatar, setAvatar] = useState('');

    const [searchField, setSearchField] = useState({ value: "NAME", label: "NAME" });
    const [accountStatus, setAccountStatus] = useState({ value: "Any Status", label: "Any Status" });
    const [regMethod, setRegMethod] = useState({ value: "Any Status", label: "Any Status" });

    const [verifiedStatus, setVerifiedStatus] = useState({ value: "Anything", label: "Anything" });
    const [tokenBalance, setTokenBalance] = useState({ value: "Any Amount", label: "Any Amount" });
    const [isReferredBy, setIsReferredBy] = useState({ value: "Anything", label: "Anything" });

    const [advancedSearch, setAdvancedSearch] = useState(true);

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

    const handleChange = (value) => {
        setTrnxType(value);
    }

  return (
    <>
      <div className="flex h-full flex-col container justify-center items-center">
        <div className="flex flex-col justify-start items-center w-full h-full p-6 rounded-2 bg-white">
            <div className="flex flex-row w-full justify-between">
                <span className="text-darkblue-900 col-span-8 flex items-center justify-center text-[20px] font-medium px-1">Wallet Request List</span>
                <div className="flex flex-row justify-end gap-4 ">
                    <div className="py-2 px-2 text-darkblue-550 h-full rounded-2 w-full flex-wrap flex row justify-center gap-1 items-center" 
                    style={{border: '2px solid #2c80ff', textAlign: 'center', cursor: 'pointer'}} onClick={() => clear()}>
                        <ArrowBeforeIcon/>
                    <a className="font-medium text-darkblue-550 text-[13px]">Back to Users</a></div>
                </div>
            </div>

            <div className="overflow-x-auto x-scrollable-tag mt-4 w-full">
                <table className="text-darkblue-900 w-full table-auto text-sm text-left rtl:text-right text-gray-500 min-w-[410px]">
                  <thead className="text-[13px] font-semibold text-darkblue-550 bg-transparent">
                  <tr>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('title')}>
                            User
                        </div> 
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('artist')}>
                            Old Wallet
                        </div>
                      </th>
                      <th scope="col" className="pb-5 text-start">
                        <div className="flex justify-start w-full items-start flex-row cursor-pointer" onClick={() => createSortHandler('cover')}>
                            New Wallet
                        </div>
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody className="text-center w-full">  
                    No Data available in table
                  </tbody> */}
                </table>
                <div className="w-full h-56 flex justify-center items-center text-gray-500">
                    No Data available in table
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default walletChange;
