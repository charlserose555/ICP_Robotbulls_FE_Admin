import React, { useState, useContext, useRef } from 'react';
import { useDispatch } from '../../store/index.js';
import { ShowModal } from '../../store/reducers/menu.js';
import { useSelector } from '../../store/index.js';
import { ModalCloseIcon, NotificationIcon } from '../../icons/index.js';
import Select from "react-tailwindcss-select";
import { bullOptions, currencyOptions, options, planDurationOptions, stageOptions, statusOptions, trnxOptions } from '../../const/variable.js';
import Datepicker from "tailwind-datepicker-react"

function KycFormModal() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => (state.auth));
    const [wallet, setWallet] = useState('');
    const [show, setShow] = useState(false);
    const [trnxType, setTrnxType] = useState({ value: "Purchase", label: "Purchase" });
    const [trnxStatus, setTrnxStatus] = useState({ value: "approved", label: "approved" });
    const [stageType, setStageType] = useState({ value: "Demo Stage 1", label: "Demo Stage 1" });
    const [paymentGateway, setPaymentGateway] = useState({ value: "Coinpayments", label: "Coinpayments" });
    const [firstCurrencyType, setFirstCurrencyType] = useState({ value: "ETH", label: "ETH" });
    const [secondCurrencyType, setSecondCurrencyType] = useState({ value: "BTC", label: "BTC" });
    const [planDurationType, setPlanDurationType] = useState({ value: "All", label: "All" });
    const [bullType, setBullType] = useState({ value: "All", label: "All" });

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
                        <p className="text-gray-800 font-semibold text-18 leading-22 uppercase">Manually Add Funds</p>
                        <div className="w-full flex flex-col gap-2">
                            <div className='w-full flex flex-col md:flex-row gap-4'>
                                <div className='w-full flex flex-col md:flex-row gap-4'>
                                    <div class="flex flex-col w-full">
                                        <p className="text-gray-700 text-[12px] uppercase pb-2">Tranx Type</p>
                                        <Select
                                            value={trnxType}
                                            onChange={(value) => setTrnxType(value)}
                                            options={trnxOptions}
                                        />
                                    </div>
                                    <div class="flex flex-col w-full">
                                        <p className="text-gray-700 text-[12px] uppercase pb-2">Tranx Status</p>
                                        <Select
                                            value={trnxStatus}
                                            onChange={(value) => setTrnxStatus(value)}
                                            options={statusOptions}
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col w-full'>
                                    <p className="text-gray-700 text-[12px] uppercase pb-2">Tranx Date</p>
                                    <input
                                        type="date"
                                        id="birthday"
                                        className="h-[38px] w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none"
                                        value={birthday}
                                        onChange={changeBirthDay}/>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-4'>
                            <div className='w-full flex flex-col md:flex-row gap-4'>
                                <div class="flex flex-col w-full">
                                    <p className="text-gray-700 text-[12px] uppercase pb-2">User</p>
                                    <Select
                                        isSearchable={true}
                                        isClearable={true}
                                        value={trnxType}
                                        onChange={(value) => setTrnxType(value)}
                                        options={trnxOptions}
                                    />
                                    <p className="text-gray-500 text-[10px] pt-1">Select account to add fund.</p>
                                </div>
                                <div class="flex flex-col w-full">
                                    <p className="text-gray-700 text-[12px] uppercase pb-2">Token for Stage</p>
                                    <Select
                                        value={stageType}
                                        onChange={(value) => setStageType(value)}
                                        options={stageOptions}
                                    />
                                    <p className="text-gray-500 text-[10px] pt-1">Select Stage where from adjust tokens.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-4'>
                            <div className='w-full flex flex-col md:flex-row gap-4'>
                                <div class="flex flex-col w-full">
                                    <p className="text-gray-700 text-[12px] uppercase pb-2">Payment Gateway</p>
                                    <Select
                                        value={paymentGateway}
                                        onChange={(value) => setPaymentGateway(value)}
                                        options={[{ value: "Coinpayments", label: "Coinpayments" }]}
                                    />
                                    <p className="text-gray-500 text-[10px] pt-1">Select method for this transaction.</p>
                                </div>
                                <div className='flex w-full flex-col'>
                                    <div className='flex flex-col w-full md:flex-row gap-4'>
                                        <div class="flex flex-col w-full">
                                            <p className="text-gray-700 text-[12px] uppercase pb-2">Crypto Amount
                                            </p>
                                            <Select
                                                value={firstCurrencyType}
                                                onChange={(value) => setFirstCurrencyType(value)}
                                                options={currencyOptions}
                                            />
                                        </div>
                                        <div class="flex flex-col w-full">
                                            <p className="text-gray-700 text-[12px] uppercase pb-2">Payment Amount</p>
                                            <Select
                                                value={secondCurrencyType}
                                                onChange={(value) => setSecondCurrencyType(value)}
                                                options={currencyOptions}
                                            />
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-[10px] pt-1">Select Stage where from adjust tokens.</p>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex flex-col md:flex-row gap-4'>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-700 text-[12px] uppercase pb-2">Duration</p>
                                <Select
                                    value={planDurationType}
                                    onChange={(value) => setPlanDurationType(value)}
                                    options={planDurationOptions}
                                />
                                <p className="text-gray-500 text-[10px] pt-1">Select duration for this transaction.</p>
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-700 text-[12px] uppercase pb-2">Plan</p>
                                <Select
                                    value={bullType}
                                    onChange={(value) => setBullType(value)}
                                    options={bullOptions}
                                />
                                <p className="text-gray-500 text-[10px] pt-1">Select method for this transaction.</p>
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
                        <div className='flex flex-col md:flex-row gap-4 w-full'>
                            <div class="flex flex-col w-full">
                                <div className="flex flex-row justify-start items-center h-full gap-3">
                                    <input className="w-4 h-4 rounded-1 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                                    <p className="text-[14px] text-gray-500">Bonus Adjusted from Stage</p>
                                </div>
                            </div>
                            <div class="flex flex-col w-full">
                                <p className="text-gray-700 text-[12px] uppercase pb-2">Referree</p>
                                <Select
                                        isSearchable={true}
                                        value={trnxType}
                                        onChange={(value) => setTrnxType(value)}
                                        options={trnxOptions}
                                    />
                                <p className="text-gray-500 text-[10px] pt-1">Select referee account.</p>
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

export default KycFormModal;