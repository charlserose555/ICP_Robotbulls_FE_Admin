import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivitiesMenuIcon, ActivityIcon, AddFundsIcon, ArrowNextIcon, AvatarIcon, BigDatabaseIcon, CloseIcon, DatabaseIcon, DocIcon, EditIcon, EmailMenuIcon, KycIcon, KycRoundedIcon, KycRoundIcon, LogoutIcon, MessageMenuIcon, MoreIcon, NextArrowIcon, NoteMenuIcon, OptionIcon, PastMsgMenuIcon, ProfileIcon, ReferralMenuIcon, RemoveIcon, ResetPassMenuIcon, RoundedCheckIcon, SearchIcon, SearchRoundIcon, SettingIcon, SuspendMenuIcon, TransactionsMenuIcon, UserMenuIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
require("flowbite/dist/flowbite.js");
import 'react-circular-progressbar/dist/styles.css';
import { DragFileInput } from "../../../components/DragDrop/DragFileInput";

function pages() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars

    const uploadFiles = (file) => {
        if (file && file.type.startsWith('application/pdf')) {
            const reader = new FileReader();
            // reader.onload = (e) => {
            //     const audio = new Audio(e.target.result);
            //     audio.onloadedmetadata = () => {
            //         console.log(audio.duration);
                    
            //         let encoded = e.target.result.toString().replace(/^data:(.*,)?/, '');
            //         if ((encoded.length % 4) > 0) {
            //             encoded += '='.repeat(4 - (encoded.length % 4));
            //         }
            //         const blob = base64ToBlob(encoded, file.type);

            //         setAudioInfo({
            //             duration: audio.duration,
            //             size: file.size,
            //             type: file.type,
            //             name: file.name,
            //             data: blob
            //         });
            //     };
            // };
            // reader.readAsDataURL(file);
        }
    };

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
        <div className="grid container h-full justify-center grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="flex bg-white rounded-1 flex-col w-full col-span-1 lg:col-span-2 gap-4 mb-8 p-6 rounded-2">
                <div className="flex flex-col md:flex-row w-full justify-between gap-1">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[20px] font-semibold px-1">Page List</span>
                    <div className="flex justify-end">                        
                    </div>
                </div>

                <div className="py-4">
                    <table className="text-darkblue-900  w-full table-auto text-sm text-left rtl:text-right text-gray-500" style={{overflow: "visible"}}>
                        <thead className="text-[13px] font-semibold text-darkblue-550 bg-transparent">
                            <tr>
                                <th scope="col" className="pb-3 text-start">
                                    <div className="flex justify-start w-full font-semibold items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                                        Page title
                                    </div> 
                                </th>
                                <th scope="col" className="pb-3 text-start hidden md:table-cell">
                                    <div className="flex justify-start font-semibold w-full items-start flex-row cursor-pointer uppercase" onClick={() => createSortHandler('title')}>
                                        Menu name
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
                                        <p className="text-gray-500 text-[16px] font-normal">Thank you for your interested</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    Welcome block
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer" onClick={() => {history.push("/admin/settings/edit")}}>
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">How to buy?</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    How to buy?
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">FAQ</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    FAQ
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">Privacy and Policy</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    Privacy and Policy
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">Terms and Condition</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                Terms and Condition
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">ICO Distribution
                                        </p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    ICO Distribution
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">Referral</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    Referral
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                            <tr className="font-normal bg-transparent cursor-pointer text-gray-600 transition-all duration-200 ease-in-out" style={{borderBottom: "1px solid #e6effb"}}>
                                <td className="py-4 text-start">
                                    <div className="flex flex-col">
                                        <p className="text-gray-500 text-[16px] font-normal">Custom Page</p>
                                    </div>
                                </td>
                                <td className="py-4 text-start text-[16px] hidden md:table-cell">	
                                    Custom Page
                                </td>
                                <td className="py-4 text-center">
                                    <div className="rounded-8 bg-gray-200 text-gray-600 w-8 h-8 flex justify-center items-center cursor-pointer">
                                        <EditIcon/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="flex flex-col w-full col-span-1 lg:col-span-1 gap-10 mb-8">
                <div className="flex flex-col bg-white w-full rounded-2 p-6 justify-between gap-4">
                    <span className="text-gray-800 col-span-8 flex items-start justify-start text-[19px] font-medium px-1">White Paper</span>
                    <div className="h-[1px] bg-gray-200"></div>
                    <div className="flex w-full flex-row md:flex-col gap-3">
                        <p className="text-[14px] text-gray-600 pt-4">Upload your whitepaper here.
                        </p>
                        <DragFileInput
                            onUpload={uploadFiles}
                            formats={["pdf"]}
                        />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default pages;
