import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import ReactLanguageSelect from 'react-languages-select'; 

function login() {
    const history = useHistory();
    const [mobile, setMobile] = useState('');
    const changeMobile = (value) => {
        setMobile(value);
    }

    const connect = () => {
        history.push("/admin/dashboard")
    }
    
    return (<>
    <div className="flex justify-center items-center bg-center flex h-full bg-darkblue-750" style={{minHeight: "100vh"}}>
            <div className="flex flex-col py-2 justify-center items-center w-full gap-10" style={{
                maxWidth: "440px",
                margin: "0 auto",
                width: "100%"
            }}>
                <div className="flex justify-center items-center w-full">
                    <img src="/demo/assets/logo-light2x.png" style={{maxHeight: "100px", maxWidth: "220px"}}/>
                </div>
                <div className="w-full h-full px-10 pt-8 pb-8 flex flex-col justify-between bg-white rounded-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-[42px] text-darkblue-900 font-thin">Connect</p>
                        <p className="text-[18px] text-gray-600">Sign up/sign in to your RobotBulls Account</p>
                        <div className="flex w-full pt-6">
                            <input placeholder="SMS verification code" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                            type="text"/>
                        </div>
                        <div className="text-[13px] text-gray-500 w-full flex gap-2 pt-2">
                            <input className="w-6 h-6 rounded-2 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                            <p className="text-gray-500 text-[13px]">
                            I agree to the
                            <span className="text-darkblue-650 text-[13px]"> Terms and Condition </span>
                            and
                            <span className="text-darkblue-650 text-[13px] "> Privacy and Policy.</span>
                            </p>
                        </div>
                        <a className="text-12 mt-4 px-4 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 w-full flex flex-row justify-center gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => connect()}>
                            <p className='text-white font-medium'>Connect</p>
                        </a>
                        <div className="flex w-full flex-row justify-between pb-4">
                            <span className="text-darkblue-750 text-[14px] font-semibold cursor-pointer">Back</span>
                            <span className="text-darkblue-750 text-[14px] font-semibold cursor-pointer">Send code again</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                        <div className="flex flex-row gap-4 justify-center items-center">
                            <p className="text-[13px] text-gray-200 hover:text-darkblue-550 cursor-pointer" onClick={() => {history.push("/help/privacy-policy")}}>Privacy and Policy</p>
                            <p className="text-[13px] text-gray-200 hover:text-darkblue-550 cursor-pointer" onClick={() => {history.push("/help/terms-of-service")}}>Terms and Condition</p>
                        </div>
                        <ReactLanguageSelect
                            className="text-gray-400"
                            alignOptions="top"
                            defaultLanguage="en"
                            languages={["en", "fr", "de", "it", "es"]} 
                            customLabels={{"en": "EN", "fr": "FR", "de": "DE", "it": "IT"}} />
                    </div>
                    <div className="flex flex-row justify-center items-center">
                        <p className="text-[13px] text-gray-200 text-center">© 2024 TokenLite. All Right Reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default login;