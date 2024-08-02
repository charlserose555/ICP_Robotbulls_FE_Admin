import React, { useState, useContext, useRef } from 'react';
import { useDispatch } from '../../store/index.js';
import { ShowModal } from '../../store/reducers/menu.js';
import { useSelector } from '../../store/index.js';
import { ModalCloseIcon, NotificationIcon } from '../../icons/index.js';
import Select from "react-tailwindcss-select";
import { bullOptions, currencyOptions, options, planDurationOptions, purchaseType, stageOptions, statusOptions, trnxOptions } from '../../const/variable.js';
import Datepicker from "tailwind-datepicker-react"

function ManageCurrencyModal() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => (state.auth));
    const [wallet, setWallet] = useState('');

    const [currencyType, setCurrencyType] = useState({value: "US Dollar (USD)", label: "US Dollar (USD)"})
    const [birthday, setBirthday] = useState('');

    const changeBirthDay = (event) => {
        setBirthday(event.target.value);
    };    

    const changeWallet = (event) => {
        setWallet(event.target.value);
    };

    const closeModal = () => {
        dispatch(ShowModal(""))
    }

    const handleChange = (selectedDate) => {
        setDate(selectedDate);
	}

    const handleClose = (state) => {
		setShow(state)
	}

    return (
        <div className="modal-overlay fixed inset-0 flex items-center justify-start text-white">
            <div className="fixed inset-0 flex items-center justify-start">
                <div className="flex w-full flex-row justify-start overflow-y-auto scrollable-tag items-start px-4">
                    <div style={{maxWidth: "681px", maxHeight: '680px', margin: '0 auto'}} className="w-full modal-content relative p-4 sm:p-6 md:p-8 gap-[20px] bg-white rounded-3 shadow-bottom_1 flex justify-start flex-col items-start">                    
                        <div className="absolute right-[-15px] text-gray-300 cursor-pointer right-[10px] top-[10px] bg-white rounded-8 w-12 h-12 p-3 flex justify-center items-center"
                            onClick={() => {closeModal()}}
                            style={{boxShadow:"0 5px 10px rgba(24, 30, 43, 0.17)"}}>
                            <ModalCloseIcon/>
                        </div>
                        <p className="text-gray-800 font-semibold text-18 leading-22 uppercase">Manage currencies</p>
                        <p className="text-gray-600 font-medium text-[14px] leading-22">You can manage currency what you want to use in payment system. you can use one or multiple currency from below option.</p>
                        <div className="w-full flex flex-col gap-2">
                            <div className='w-full flex flex-col md:flex-row gap-4'>
                                <div className='w-full flex flex-col md:flex-row gap-4'>
                                    <div class="flex flex-col w-full">
                                        <p className="text-gray-700 text-[13px] uppercase pb-2">Based Currency</p>
                                        <Select
                                            value={currencyType}
                                            onChange={(value) => setCurrencyType(value)}
                                            options={purchaseType}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col'>
                            <p className="text-gray-700 text-[12px] uppercase pb-2">Payment Address</p>

                            <input placeholder="Optional" className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                            type="text"/>
                        </div>
                        <div className='flex flex-col md:flex-row gap-4 w-full'>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-700 text-[12px] uppercase pb-2">Number of Cryptos</p>

                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-700 text-[12px] uppercase pb-2">Amount of Investment in fiat</p>

                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-700 text-[12px] uppercase pb-2">Percentage</p>

                                <input className="h-[38px] flex text-[13px] justify-center items-center w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                            </div>
                        </div>
                        <a className="text-14 w-32 px-4 mx-2 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}>
                            <p className='text-white font-medium text-14'>Add Wallet</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManageCurrencyModal;