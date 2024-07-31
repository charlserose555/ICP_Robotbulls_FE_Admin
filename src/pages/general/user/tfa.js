import React, { useContext, useEffect, useState } from "react";
import { ActivityIcon, AvatarIcon, BackArrowIcon, CloseIcon, DownIcon, LogoutIcon, NextArrowIcon, ProfileIcon } from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function tfa() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (auth.isLoggedIn) {
    }
  }, [auth.isLoggedIn]);

  useEffect(() => {
  }, [auth.user]);

  return (
    <>
      <div className="flex container h-full justify-center lg:gap-10">
        <div className="flex flex-col w-full gap-10 mb-8">
          <div className="flex flex-col bg-white w-full py-8 px-4 rounded-2">
            <div className="w-full flex flex-col justify-center items-center px-2 md:px-8 lg:px-24 xl:px-36">
                <div className="flex flex-row justify-between w-full">
                    <span className="text-darkblue-900 text-[14px] lg:text-[21px] font-semibold px-2 flex justify-center text-center items-center">Welcome to RobotBulls!</span>
                    
                    <a className="text-14 w-24 px-2 mx-2 py-1 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}
                        onClick={() => { history.push("/app/dashboard")}}>
                        <CloseIcon/>
                        <p className='text-white font-medium text-14 hidden md:block'>Close</p>
                    </a>
                </div>
                <div className="flex flex-col gap-4 px-2 pt-6 justify-start w-full items-start">
                    <p className="text-[14px] md:text-[18px] font-semibold text-gray-600">
                        For an increased security please setup 2FA.
                    </p>
                    <p className="text-[12px] md:text-[14px] text-gray-600 gap-2">
                        <span className="font-semibold pr-2">Step 1:</span>
                        Install this app from   
                        <a className="font-medium text-darkblue-700 cursor-pointer"  target="_blank" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&pli=1"> Google Play </a>        
                        store or     
                        <span className="font-medium text-darkblue-700 cursor-pointer"  target="_blank" href="https://apps.apple.com/us/app/google-authenticator/id388497605"> App Store.</span>   
                    </p>
                    <p className="text-[12px] md:text-[14px] text-gray-600 gap-2">
                        <span className="font-semibold pr-2">Step 2:</span>
                        Scan the below QR code by your Google Authenticator app, or you can add account manually.
                    </p>
                    <p className="text-[12px] md:text-[14px] font-semibold text-gray-600">
                        Manually add Account:
                    </p>
                    <p className="text-[12px] md:text-[14px] text-darkblue-700 font-medium  text-gray-600">
                        <span className="text-darkblue-400 cursor-pointer"> Account Name: </span>    
                        RobotBulls
                    </p>
                    <p className="text-[12px] md:text-[14px] text-darkblue-700 font-medium  text-gray-600">
                        <span className="text-darkblue-400 cursor-pointer"> Key: </span>    
                            J5RFS2TST6FSDO2D
                    </p>
                </div>
                <div className="w-full pt-4 flex flex-col md:flex-row gap-2 md:gap-16">
                    <img className="p-2 w-48 h-48" src="https://app.robotbulls.com/qrgen.png?text=otpauth%…TST6FSDO2D%26issuer%3DRobotBulls-Demo%2520Account" style={{border: "1px solid #e5e7eb", borderRadius: "2px"}}/>
                
                    <div className="w-full flex flex-col gap-4">
                        <p className="text-gray-600 text-[14px]">Enter Google Authenticator Code</p>
                        <input placeholder="Enter the code to Verify" className="text-[14px] h-[40px] text-gray-600 w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                            type="text"/>
                        <a className="text-14 w-32 px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                            style={{textAlign: 'center', cursor: 'pointer'}}
                            onClick={() => {history.go("/app/dashboard")}}>
                            <p className='text-white font-medium text-14'>Confirm 2FA</p>
                        </a>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default tfa;
