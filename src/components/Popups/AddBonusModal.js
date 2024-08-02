import React, { useState, useContext, useRef } from 'react';
import { useDispatch } from '../../store/index.js';
import { ShowModal } from '../../store/reducers/menu.js';
import { useSelector } from '../../store/index.js';
import { ModalCloseIcon, NotificationIcon } from '../../icons/index.js';
import Select from "react-tailwindcss-select";
import { bullOptions, currencyOptions, options, planDurationOptions, stageOptions, statusOptions, trnxOptions } from '../../const/variable.js';
import Datepicker from "tailwind-datepicker-react"
import { CSVFileInput } from '../DragDrop/CSVFileInput.js';

function AddBonusModal() {
    const dispatch = useDispatch();
    const {user} = useSelector((state) => (state.auth));
    const [wallet, setWallet] = useState('');
    const [show, setShow] = useState(false);
    const [trnxType, setTrnxType] = useState({ value: "No User Found", label: "No User Found" });

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

    const uploadFiles = (file) => {
        if (file && file.type.startsWith('application/csv')) {
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
                        <p className="text-gray-800 uppercase font-semibold text-18 leading-22">Add Bonuses</p>
                        <div className="w-full flex flex-col gap-2">
                            <div className='w-full flex flex-col md:flex-row gap-4'>
                                <Select
                                        isSearchable={true}
                                        value={trnxType}
                                        onChange={(value) => setTrnxType(value)}
                                        options={trnxOptions}
                                    />
                            </div>
                        </div>
                        <div className='w-full flex'>
                            <CSVFileInput
                                onUpload={uploadFiles}
                                formats={["csv"]}
                            />
                        </div>
                        <a className="text-14 w-32 px-4 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}>
                            <p className='text-white font-medium text-14'>Process CSV</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddBonusModal;