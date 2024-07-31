import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css';
import ReactLanguageSelect from 'react-languages-select'; 

function Register() {
    const history = useHistory();
    const [mobile, setMobile] = useState('');
    const changeMobile = (value) => {
        setMobile(value);
    }

    const continueRegister = () =>{
        console.log("sdfdsf")
        history.push("/auth/login")
    }

    return (<>
        <div className="flex justify-center items-center bg-center flex h-full bg-darkblue-750" style={{minHeight: "100vh"}}>
            <div className="flex flex-col py-2 justify-center items-center w-full gap-8" style={{
                maxWidth: "440px",
                margin: "0 auto",
                width: "100%"
            }}>
                <div className="flex justify-center items-center w-full">
                    <img src="/demo/assets/logo-light2x.png" style={{maxHeight: "100px", maxWidth: "220px"}}/>
                </div>
                <div className="w-full h-full px-10 pt-8 pb-8  mt-4 flex flex-col justify-between bg-white rounded-2">
                    <div className="flex flex-col gap-2">
                        <p className="text-[42px] text-darkblue-900 font-thin">Connect</p>
                        <p className="text-[18px] text-gray-600">Sign up/sign in to your RobotBulls Account</p>
                        <div className="flex w-full pt-6">
                            <PhoneInput 
                                containerClass="bg-white font-normal w-full outline-none border-transparent focus:border-transparent focus:border-transparent focus:border-coral-650 focus:ring-coral-650 focus:outline-none"    
                                inputStyle={{width:"100%", height:"45px"}} 
                                searchStyle={{width:"45px"}}    
                                inputClass="focus:border-transparent focus:border-coral-650 focus:ring-transparent focus:outline-none"
                                searchClass="focus:border-transparent focus:border-coral-650 focus:ring-transparent focus:outline-none"                       
                                country={'ch'}
                                value={mobile}
                                onChange={changeMobile}
                                inputProps={{
                                    name: 'phone',
                                    required: true,
                                    autoFocus: true,
                                }}
                            />
                        </div>
                        <a className="text-12 my-6 px-4 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 w-full flex flex-row justify-center gap-45 items-center"
                            onClick={() => continueRegister()}
                            style={{textAlign: 'center', cursor: 'pointer'}}>
                            <p className='text-white font-medium'>Continue</p>
                        </a>
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

export default Register;