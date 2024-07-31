import React, { useContext, useEffect, useState } from "react";
import { ActivityIcon, AvatarIcon, BackArrowIcon, DownIcon, LogoutIcon, NextArrowIcon, ProfileIcon } from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function buyCrypto() {
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
          <div className="flex flex-col bg-white w-full p-5 rounded-2">
            <div className="flex flex-row justify-between">
              <span className="text-darkblue-900 text-[21px] font-semibold px-2 flex justify-center text-center items-center">How to purchase crypto currencies?</span>
              
              <a className="text-14 w-24 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                  style={{textAlign: 'center', cursor: 'pointer'}}
                  onClick={() => {history.goBack()}}>
                  <BackArrowIcon/>
                  <p className='text-white font-medium text-14'>Back</p>
              </a>

            </div>
            <div className="flex flex-col w-full gap-4 px-2 pt-6">
                <p className="text-[14px] text-gray-600">
                    Dear User,
                </p>
                <p className="text-[14px] text-gray-600">
                    We would like to inform you that at RobotBulls we only accept crypto transfers. If you are new to buying cryptocurrencies, we have compiled a list of the most convenient methods for you to get started.   
                </p>
                <p className="text-[14px] text-gray-600 font-semibold">
                    1. Bridge Wallet from Mt. Pelerin
                </p>
                <p className="text-[14px] text-gray-600">
                    We have found Mt. Pelerin's Bridge Wallet to be the most straightforward way for our users to transfer cryptocurrencies to and from your Bridge Wallet without any hassle. For a detailed walkthrough on how to use the Bridge Wallet, please refer to our dedicated video guide.                </p>
                <p className="text-[14px] text-gray-600 font-semibold">
                    2. MetaMask
                </p>
                <p className="text-[14px] text-gray-600">
                    MetaMask is one of the easiest ways to quickly buy cryptocurrencies. This digital wallet allows you to effortlessly manage and use your cryptocurrencies. MetaMask is open-source, making it a more trustworthy choice compared to other apps. Please note that you cannot withdraw funds in fiat currencies like EUR, CHF, or USD with MetaMask. You can use your credit card in EUR/CHF/USD to instantly buy cryptos with a commission of only 2% for transactions up to 10000 EUR/CHF/USD. Check out our selected MetaMask video guide directly on how to create an account and buy cryptocurrencies on MetaMask.                </p>
                <p className="text-[14px] text-gray-600">
                    We would like to inform you that at RobotBulls we only accept crypto transfers. If you are new to buying cryptocurrencies, we have compiled a list of the most convenient methods for you to get started.   
                </p>
                <p className="text-[14px] text-gray-600">
                    We would like to inform you that at RobotBulls we only accept crypto transfers. If you are new to buying cryptocurrencies, we have compiled a list of the most convenient methods for you to get started.   
                </p>
                <div className="flex flex-row justify-between w-full text-gray-600">
                    <p className="text-[14px] text-gray-600 font-semibold">
                        MetaMask Video Guide
                    </p>
                    <DownIcon/>
                </div>
                <div className="w-full h-[2px] pt-4">
                    <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="text-[14px] text-gray-600 font-semibold pt-4">
                    3. Revolut
                </p>
                <p className="text-[14px] text-gray-600">
                    Revolut, a digital banking app that supports cryptocurrency transactions, is another excellent choice. With Revolut, you can buy up to 11000 EUR/CHF/USD in cryptocurrencies, though only in BTC. They require one day for the KYC (Know Your Customer) approval process.               
                </p>
                <p className="text-[14px] text-gray-600 pt-4">
                    At RobotBulls, we are committed to making your journey through the cryptocurrency market as smooth as possible. If you need further assistance or have any questions, please do not hesitate to contact us.            
                </p>
                <p className="text-[14px] text-gray-600">
                    Best regards,
                </p>
                <p className="text-[14px] text-gray-600">
                    The RobotBulls Team.
                </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default buyCrypto;
