import React, { useState, useContext } from 'react';
import { useDispatch } from '../../store/index.js';
import { ShowModal } from '../../store/reducers/menu.js';
import { useSelector } from '../../store/index.js';
import { ModalCloseIcon, NotificationIcon } from '../../icons/index.js';

function WalletAddressModal() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => (state.auth));
    const [wallet, setWallet] = useState('');

    const changeWallet = (event) => {
        setWallet(event.target.value);
    };

    const closeModal = () => {
        dispatch(ShowModal(""))
    }

    return (
        <div className="modal-overlay fixed inset-0 flex items-center justify-start text-white">
            <div className="fixed inset-0 flex items-center justify-start">
                <div className="flex w-full flex-row justify-start items-start px-4">
                    <div style={{maxWidth: "681px", maxHeight: '666px', margin: '0 auto'}} className="w-full relative p-4 sm:p-6 md:p-8 gap-[20px] bg-white rounded-3 shadow-bottom_1 flex justify-start flex-col items-start">                    
                        <div className="absolute right-[-15px] text-gray-300 cursor-pointer top-[-20px] bg-white rounded-8 w-12 h-12 p-3 flex justify-center items-center"
                            onClick={() => {closeModal()}}
                            style={{boxShadow:"0 5px 10px rgba(24, 30, 43, 0.17)"}}>
                            <ModalCloseIcon/>
                        </div>
                        <p className="text-gray-800 uppercase font-roboto font-bold text-18 leading-22">Wallet Address</p>
                        <p className="text-gray-800 font-roboto font-normal text-14">In order to withdraw your funds, please select your wallet address.</p>
                        <div className="w-full flex flex-col gap-2">
                            <span className="text-gray-600 text-14 font-semibold">
                                Select Wallet
                            </span>
                            <select id="gender" className="h-[38px] w-full text-14 rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={wallet} onChange={changeWallet}>
                                <option value="Ethereum">Ethereum</option>
                                <option value="Bitcoin">Bitcoin</option>
                                <option value="USDT-ERC20">USDT-ERC20</option>
                                <option value="USDC-ERC20">USDC-ERC20</option>
                            </select>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <span className="text-gray-600 text-14 font-semibold">
                                Enter your wallet address
                            </span>
                            <input className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" type="text"/>
                            <p className="text-gray-500 text-[12px] font-thin">
                                Note: . Ethereum, USDT and USDC addresses must be ERC20-compliant.
                            </p>
                            <div className="pt-4 flex flex-row justify-between items-center text-coral-500 gap-4">
                                <NotificationIcon/>
                                <p className="w-full text-[13px] text-justify">
                                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                                </p>
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

export default WalletAddressModal;