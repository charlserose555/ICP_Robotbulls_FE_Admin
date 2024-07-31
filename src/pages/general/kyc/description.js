import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, AvatarIcon, KycRoundIcon, LogoutIcon, NextArrowIcon, ProfileIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";

function description() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { balances } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState('');

  const [displayName, setDisplayName] = useState('');

  const logout = () => {
    history.push("/");
    dispatch(Logout({}))
  }

  useEffect(() => {
    if (auth.isLoggedIn) {
    }
  }, [auth.isLoggedIn]);

  useEffect(() => {
    setDisplayName(auth.user.displayname);

    setAvatar(auth.user.avatar);
  }, [auth.user]);

  return (
    <>
      <div className="flex h-full flex-col container justify-center items-center">
        <div className="flex col justify-center items-center w-full h-full p-5 rounded-2">
            <span className="text-darkblue-900 col-span-8 flex items-center justify-center text-[24px] lg:text-[42px] font-normal mg:font-thin px-2">KYC Verification</span>
        </div>

        <div className="flex justify-center items-center w-full h-full rounded-2 mb-[10px] lg:mb-[50px]">
            <div className="text-gray-600 text-[15px] md:text-[16px] lg:text-[20px] w-full col-span-8 flex items-center flex-wrap justify-center font-normal px-2 md:px-4 lg:px-16 xl:px-52">
                <p className="text-center">
                    To comply with regulations each participant is required to go through identity verification (KYC/AML) to prevent fraud, money laundering operations, transactions banned under the sanctions regime or those which fund terrorism. Please, complete our fast and secure verification process.
                </p>
            </div>
        </div>

        <div className="px-2 md:px-4 lg:px-8 xl:px-32">
            <div className="rounded-2 bg-white flex justify-center items-center flex-col w-full pt-16 gap-4 pb-24">
                <div className="rounded-5 w-24 h-24 flex justify-center items-center text-gray-330" style={{border: "2px solid #b1becc", borderRadius:"50%"}}>
                    <KycRoundIcon/>
                </div>
                <span className="text-gray-600 text-18 w-full justify-center text-center items-center flex px-2 md:px-8 lg:px-24 xl:px-36">
                    You have not submitted your necessary documents to verify your identity.
                </span>
                <span className="text-gray-500 text-15 w-full justify-center items-center text-center flex px-2 md:px-8 lg:px-24 xl:px-40">
                    It would great if you please submit the form. If you have any question, please feel free to contact our support team.
                </span>
                <a className="text-14 w-60 px-2 mx-2 my-2 py-3 mt-4 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}
                    onClick={() => {history.push("/app/kyc/upload")}}>
                    <p className='text-white font-medium text-15'>Click here to complete your KYC</p>
                </a>
            </div>
        </div>

        <div className="pt-2 md:pt-16 flex w-full justify-center items-center text-center">
            <p className="text-gray-500 text-[10x]">
                Contact our support team via email -
                <span className="text-darkblue-650"> info@yourdomain.com </span>
            </p>
        </div>
      </div>
    </>
  );
}

export default description;
