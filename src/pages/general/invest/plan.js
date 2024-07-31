import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../context/SidebarContext";
import { ActivityIcon, ArrowNextIcon, AvatarIcon, BackArrowIcon, DownIcon, LogoutIcon, NextArrowIcon, NotificationIcon, ProfileIcon, WallletIcon } from "../../../icons";
import { Avatar} from "@windmill/react-ui";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { Menu } from '@headlessui/react';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
// import { TEChart } from "tw-elements-react";
import { registerCharts } from "../../../components/Charts/registerCharts"
import BtcBullCharts from "../../../components/Charts/BtcBullCharts";
import GeneralBullCharts from "../../../components/Charts/GeneralBullCharts";
import CryptoBullCharts from "../../../components/Charts/CryptoBullCharts";
import NftBullCharts from "../../../components/Charts/NftBullCharts";
import MetaverseBullCharts from "../../../components/Charts/MetaverseBullCharts";
import EcologicalBullCharts from "../../../components/Charts/EcologicalBullCharts";
import CommoditiesBullCharts from "../../../components/Charts/CommoditiesBullCharts";

function Dashboard() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const { balances } = useSelector((state) => state.auth);
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState('');

  const [displayName, setDisplayName] = useState('');
  const [aiBallMonths, setAIBallMonths] = useState('');
  const [isCollapasedAIBull, setIsCollapasedAIBull] = useState(true);
  const [isCollapasedETHBull, setIsCollapasedETHBull] = useState(true);
  const [isCollapasedBTCBull, setIsCollapasedBTCBull] = useState(true);
  const [isCollapasedGeneralBull, setIsCollapasedGeneralBull] = useState(true);
  const [isCollapasedCryptoBull, setIsCollapasedCryptoBull] = useState(true);
  const [isCollapasedNFTBull, setIsCollapasedNFTBull] = useState(true);
  const [isCollapasedMetaverseBull, setIsCollapasedMetaverseBull] = useState(true);
  const [isCollapasedEcologicalBull, setIsCollapasedEcologicalBull] = useState(true);
  const [isCollapasedCommoditiesBull, setIsCollapasedCommoditiesBull] = useState(true);

  registerCharts()

  const logout = () => {
    history.push("/");
    dispatch(Logout({}))
  }

  const changeAIBallMonths = (event) => {
    setAIBallMonths(event.target.value);
  };

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
      <div className="grid container h-full justify-center grid-cols-1 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col w-full col-span-2 lg:col-span-2 gap-10 mb-8">
          <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
            <div className="flex flex-row justify-between">
              <span className="text-darkblue-900 text-[21px] font-medium px-2 flex justify-center text-center items-center">New</span>
              
              <a className="text-14 w-28 px-2 mx-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                  style={{textAlign: 'center', cursor: 'pointer'}}
                  onClick={() => {history.goBack()}}>
                  <BackArrowIcon/>
                  <p className='text-white font-medium text-14'>Back</p>
              </a>
            </div>
            <div className="flex flex-row justify-between pt-4 px-2 md:px-8 lg:px-24">
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">plan</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">risk level</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">expected roi</span>
            </div>
            <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedAIBull(prev => !prev)}}>
              <a className="text-14 w-28 px-2 mx-2 py-2 text-white font-medium bg-coral-550 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                  style={{textAlign: 'center', cursor: 'pointer'}}>
                  <p className='text-white font-medium text-14'>AI Bull</p>
              </a>        
              <span className="text-gray-600 text-[15px] font-normal hidden md:block px-2 flex justify-center text-center items-center">Aggressive</span>             
              <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">New
                <DownIcon/>
              </span>
            </div>
            <div className="w-full h-[4px] pt-4 px-4 md:px-12">
              <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
            </div>
            <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedAIBull ? "max-h-0" : "max-h-full"}`}>
              <p className="w-full text-[15px] text-gray-600 text-justify pt-4">
                The AI Bull is an innovative plan tailored for individuals aiming to capitalize on the expected volatility surrounding the increasing popularity of TAO, FetchAI, SingularityNET, Render, and Worldcoin. This emerging shift in the cryptocurrency market indicates an expansion in the accessibility and usability of these cryptocurrencies. Historically, such shifts have sparked significant price fluctuations, creating opportunities for astute financial strategists.
              </p>
              <p className="w-full text-[24px] font-normal pt-4 text-gray-600 text-justify">
                Our Strategy:
              </p>
              <div className="w-full h-[4px] pt-3">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                Employing extensive research and analysis of previous market trends to guide our financial decisions.
              </p>
              <div className="w-full h-[4px] pt-3">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                Consistently monitoring the wallets of leading TAO, FetchAI, SingularityNET, Render, and Worldcoin miners and major exchanges.
              </p>
              <div className="w-full h-[4px] pt-3">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                Gathering insights into the trading behaviors of key market influencers to better predict market movements.
              </p>
              <div className="w-full h-[4px] pt-3">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                Aiming to identify potential market changes at the earliest and make informed financial decisions accordingly.
              </p>
              <div className="w-full h-[4px] pt-3">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <p className="w-full text-[24px] font-normal pt-6 text-gray-600 text-justify">
                Why Choose The AI Bull?
              </p>
              <p className="w-full text-[15px] text-gray-600 pt-3 text-justify">
               For those keen on exploring the dynamic world of TAO, FetchAI, SingularityNET, Render, and Worldcoin during this anticipated period of increased volatility, the AI Bull presents an excellent opportunity. While this trend offers the potential for significant financial gains, it's not without its risks. Our strategy is designed to reduce these uncertainties by using data-driven analysis and proactive management techniques to maximize possible gains while minimizing potential losses.              </p>
              <div className="w-full h-[4px] pt-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                Select Amount  
              </p>
              <p className="w-full text-[13px] text-gray-600 text-justify">
                The minimum amount for the operation is: 10000 CHF.
              </p>
              <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                  <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                    <option value="3 Months">3 Months</option>
                    <option value="6 Months">6 Months</option>
                    <option value="12 Months">12 Months</option>
                  </select>
                  <div className="flex items-center border border-gray-300 rounded-md">
                    <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                    <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                      CHF
                    </span>
                  </div>
                </div> 

                <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                  style={{textAlign: 'center', cursor: 'pointer'}}>
                  <p className='text-white font-medium text-14'>Make Transaction</p>
                  <WallletIcon/>
                </a>
              </div>
              <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                <NotificationIcon/>
                <p className="w-full text-[13px] text-justify">
                  RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                </p>
              </div>
            </div>
            <div className="w-full h-[1px] px-1 md:px-2">
              <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
            </div>
          </div>

          <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
            <div className="flex flex-row justify-between">
              <span className="text-darkblue-900 text-[21px] font-medium px-2 flex justify-center text-center items-center">Temporary</span>              
            </div>
            <div className="flex flex-row justify-between pt-4 px-2 md:px-8 lg:px-24">
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">plan</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">risk level</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">expected roi</span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedETHBull(prev => !prev)}}>
                <a className="text-14 w-28 px-2 mx-2 py-2 text-white font-medium bg-blue-650 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>ETH Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 hidden md:block flex justify-center text-center items-center">Moderatly Agressive</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">New
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedETHBull ? "max-h-0" : "max-h-full"}`}>
                <p className="w-full text-[15px] text-gray-600 text-justify pt-1">
                  The Ethereum Bull is a unique investment product specifically designed for individuals looking to capitalize on the upcoming volatility that will stem from the launch of an Ethereum ETF. This exciting new development in the cryptocurrency market, expected to roll out in the coming months, represents an increase in the availability and accessibility of Ethereum as a tradable asset. Historically, such occurrences have been associated with significant fluctuations in price, creating opportunities for savvy investors.
                </p>
                <p className="w-full text-[24px] font-normal pt-4 text-gray-600 text-justify">
                  Our Strategy:
                </p>
                <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                  Leveraging comprehensive research and analysis of past ETF launches to inform our investment decisions.
                </p>
                <div className="w-full h-[4px] pt-3">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                  Continuously monitoring the wallets of leading Ethereum mining corporations and major exchanges.
                </p>
                <div className="w-full h-[4px] pt-3">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                  Gaining insights into the trading habits of key players in the market to better anticipate shifts in direction.
                </p>
                <div className="w-full h-[4px] pt-3">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                  Aiming to detect potential market drifts early on and make informed investment choices accordingly.
                </p>
                <div className="w-full h-[4px] pt-3">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[24px] font-normal pt-6 text-gray-600 text-justify">
                  Why Choose The Ethereum Bull?
                </p>
                <p className="w-full text-[15px] text-gray-600 pt-3 text-justify">
                  For those interested in diving headfirst into the exciting world of Ethereum trading during this predicted period of increased volatility, the Ethereum Bull offers a perfect opportunity. While the introduction of an ETF presents potential for significant returns, it's not without its risks. Our strategy is focused on mitigating these uncertainties by employing data-driven analysis and proactive management techniques to maximize potential profits while minimizing potential losses. 
                </p>
                <div className="w-full h-[4px] pt-12">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedBTCBull(prev => !prev)}}>
                <a className="text-14 w-28 px-2 mx-2 py-2 text-white font-medium bg-yellow-750 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>BTC Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 hidden md:block flex justify-center text-center items-center">Moderate</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">New
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedBTCBull ? "max-h-0" : "max-h-full"}`}>
                <p className="w-full text-[15px] text-gray-600 text-justify pt-1">
                  The BTC Halfening Bull is an investment product crafted for those aiming to make the most of the upcoming BTC halfening event. This significant event, forecasted to take place in April next year, denotes a decrease in block rewards for miners. Such events have historically propelled the Bitcoin market into heightened volatility.                </p>
                <p className="w-full text-[24px] font-normal pt-4 text-gray-600 text-justify">
                  Our Strategy:
                </p>
                <p className="w-full text-[15px] text-gray-600 pt-4 text-justify px-2 md:px-4">
                  Based on in-depth research and analysis of past BTC halvening occurrences.
                  Constant monitoring of wallets of leading mining corporations and exchanges.
                  Insight into the purchasing and selling habits of key players to anticipate market directions.
                  Objective to detect potential market drifts and make enlightened investment choices.
                </p>
                <p className="w-full text-[24px] font-normal pt-6 text-gray-600 text-justify">
                  Why Choose The BTC Halfening Bull?
                </p>
                <p className="w-full text-[15px] text-gray-600 pt-3 text-justify">
                  It's a perfect match for investors desiring a slice of the Bitcoin market during this predicted phase of intensified volatility. Although the halvening event offers chances for notable returns, it's not without its risks. Our strategy is geared towards circumventing these uncertainties by employing data-backed analysis and proactive management.                </p>
                <div className="w-full h-[4px] pt-12">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>

                <BtcBullCharts/>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
            <div className="flex flex-row justify-between">
              <span className="text-darkblue-900 text-[21px] font-medium px-2 flex justify-center text-center items-center">Our Plans</span>              
            </div>
            <div className="flex flex-row justify-between pt-4 px-2 md:px-8 lg:px-24">
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">plan</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">risk level</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">expected roi</span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedGeneralBull(prev => !prev)}}>
                <a className="text-14 w-28 px-2 mx-2 py-2 text-white font-medium bg-gray-450 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>General Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 flex hidden md:block justify-center text-center items-center">Moderatly Conservative</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">0%
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>

              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedGeneralBull ? "max-h-0" : "max-h-full"}`}>
                <div className="pt-4">
                  <GeneralBullCharts/>
                </div>

                <p className="w-full text-[15px] font-bold pt-6 text-gray-500 text-justify">
                  Expected Amount: Enter an amount
                </p>
                <div className="w-full h-[4px] pt-2">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedCryptoBull(prev => !prev)}}>
                <a className="text-14 w-28 px-2 mx-2 py-2 text-white font-medium bg-yellow-850 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>Crypto Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 flex justify-center hidden md:block text-center items-center">Moderatly Agressive</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">0%
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedCryptoBull ? "max-h-0" : "max-h-full"}`}>
                <div className="pt-4">
                  <CryptoBullCharts/>
                </div>
                <p className="w-full text-[15px] font-bold pt-6 text-gray-500 text-justify">
                  Expected Amount: Enter an amount
                </p>
                <div className="w-full h-[4px] pt-2">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedNFTBull(prev => !prev)}}>
                <a className="text-14 w-28 px-2 mx-2 py-2 text-white font-medium bg-gray-70 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-gray-800 font-medium text-14'>NFT Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 flex justify-center hidden md:block text-center items-center">Moderate</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">0%
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] py-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className="w-full">
              </div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedNFTBull ? "max-h-0" : "max-h-full"}`}>
                <div className="pt-4">
                  <NftBullCharts/>
                <p className="w-full text-[15px] font-bold pt-6 text-gray-500 text-justify">
                  Expected Amount: Enter an amount
                </p>
                <div className="w-full h-[4px] pt-2">                  
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedMetaverseBull(prev => !prev)}}>
                <a className="text-14 w-32 px-2 mx-2 py-2 text-white font-medium bg-purple-250 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>Metaverse Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 flex justify-center hidden md:block text-center items-center">Moderate</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">0%
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedMetaverseBull ? "max-h-0" : "max-h-full"}`}>
                <div className="pt-4">
                  <MetaverseBullCharts/>
                </div>
                <p className="w-full text-[15px] font-bold pt-6 text-gray-500 text-justify">
                  Expected Amount: Enter an amount
                </p>
                <div className="w-full h-[4px] pt-2">                  
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col bg-white w-full h-full p-5 rounded-2">
            <div className="flex flex-row justify-between">
              <span className="text-darkblue-900 text-[21px] font-medium px-2 flex justify-center text-center items-center">Currently Unavailable</span>              
            </div>
            <div className="flex flex-row justify-between pt-4 px-2 md:px-8 lg:px-24">
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">plan</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">risk level</span>             
              <span className="text-darkblue-550 text-[12px] font-medium px-2 flex justify-center text-center items-center uppercase">expected roi</span>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedEcologicalBull(prev => !prev)}}>
                <a className="text-14 w-32 px-2 mx-2 py-2 text-white font-medium bg-green-250 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>Ecological Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 flex justify-center hidden md:block text-center items-center">Moderate</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">0%
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedEcologicalBull ? "max-h-0" : "max-h-full"}`}>
                <div className="pt-4">
                  <EcologicalBullCharts/>
                </div>
                <p className="w-full text-[15px] font-bold pt-6 text-gray-500 text-justify">
                  Expected Amount: Enter an amount
                </p>
                <p className="w-full text-[15px] font-bold pt-2 pl-4 text-gray-500 text-justify">
                  The ecological Bull is compromized of environmental friendly high-yield green bonds and Dow Jones STOXX Sustainability Index.    
                </p>
                <div className="w-full h-[4px] pt-2">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="pt-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-8">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row justify-between pt-8 px-2 md:px-8 lg:px-24 xl:px-24 cursor-pointer items-center" onClick={() => {setIsCollapasedCommoditiesBull(prev => !prev)}}>
                <a className="text-14 w-36 px-2 mx-2 py-2 text-white font-medium bg-gray-750 rounded-2 flex flex-row flex-wrap justify-around gap-45 items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14'>Commodities Bull</p>
                </a>        
                <span className="text-gray-600 text-[13px] font-medium px-2 flex hidden md:block justify-center text-center items-center">Conservative</span>             
                <span className="text-gray-600 text-[12px] font-bold px-2 flex justify-center text-center items-center gap-4 md:gap-16">0%
                  <DownIcon/>
                </span>
              </div>
              <div className="w-full h-[4px] pt-4 px-4 md:px-12">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
              <div className={`w-full px-4 md:px-8 overflow-hidden transition-all duration-3000 ease-in-out ${isCollapasedCommoditiesBull ? "max-h-0" : "max-h-full"}`}>
                <div className="pt-4">
                  <CommoditiesBullCharts/>
                </div>
                <p className="w-full text-[15px] font-bold pt-6 text-gray-500 text-justify">
                  Expected Amount: Enter an amount
                </p>
                <div className="w-full h-[4px] pt-2">
                  <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                </div>
                <p className="w-full text-[15px] font-normal pt-5 text-gray-600 text-justify">
                  Select Amount  
                </p>
                <p className="w-full text-[13px] text-gray-600 text-justify">
                  The minimum amount for the operation is: 10000 CHF.
                </p>
                <div className="pt-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8">
                  <div className="w-full flex justify-start gap-8 flex-col md:flex-row">
                    <select id="gender" className="h-[38px] w-full rounded-2 text-gray-500 justify-center items-center border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={aiBallMonths} onChange={changeAIBallMonths}>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months">12 Months</option>
                      </select>
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <input type="text" className="px-3 h-[38px] py-2 w-full text-gray-500 rounded-l-2 border-transparent focus:border-transparent focus:ring-transparent focus:outline-none"/>
                        <span className="px-3 py-2 bg-gray-100 text-gray-500 font-normal rounded-r-2 h-[40px]">
                          CHF
                        </span>
                      </div>
                  </div> 

                  <a className="text-14 w-64 h-[38px] px-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-250 rounded-2 flex flex-row flex-wrap justify-around items-center"
                    style={{textAlign: 'center', cursor: 'pointer'}}>
                    <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Make Transaction</p>
                    <WallletIcon/>
                  </a>
                </div>
                <div className="py-4 flex flex-row justify-between items-center text-gray-500 gap-4 pb-6">
                  <NotificationIcon/>
                  <p className="w-full text-[13px] text-justify">
                    RobotBulls takes 20% as a commission ONLY from the profits that are automatically redistributed to RBC holders after the period is completed.
                    Additionally, we implement a 20% stop-loss to ensure users cannot lose more than 20% of their investment.
                  </p>
                </div>
              </div>
              <div className="w-full h-[1px] px-1 md:px-2">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 w-full lg:col-span-1 gap-4">
           <div className="flex flex-col bg-white w-full p-5 rounded-2">
              <div className="flex flex-col w-full justify-start items-start">
                  <span className="text-darkblue-800 text-[15px] font-medium px-2">How to purchase crypto currencies?</span>
                  <span className="text-darkblue-700 text-[13px] font-medium px-2 uppercase cursor-pointer flex flex-row items-center" onClick={() => {history.push("/app/buy-crypto")}}>learn more
                      <ArrowNextIcon/>
                  </span>
              </div>
              <div className="flex flex-row justify-start items-center gap-2 pl-2">
                  <div className="w-[2px] h-full pt-2">
                      <div className="w-[2px] h-full" style={{borderLeft: "1px solid #707275"}}></div>
                  </div>
                  <span className="pt-2 text-gray-600 px-2 justify text-[14px]">
                      If you're new to purchasing cryptocurrencies, we have curated a list of the most convenient methods for you to get started.
                  </span>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
