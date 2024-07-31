import React, { useContext, useEffect, useState } from "react";
import { ActivityIcon, AvatarIcon, LogoutIcon, NextArrowIcon, ProfileIcon } from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ShowModal } from "../../../store/reducers/menu";
import { Dropdown } from 'primereact/dropdown';

function account() {
  const history = useHistory();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const [birthday, setBirthday] = useState('');
  const [nationality, setNationality] = useState("none");

  const logout = () => {
    history.push("/");
    dispatch(Logout({}))
  }

  const changeBirthDay = (event) => {
    setBirthday(event.target.value);
  };

  useEffect(() => {
    if (auth.isLoggedIn) {
    }
  }, [auth.isLoggedIn]);

  useEffect(() => {
  }, [auth.user]);

  const countries = ["Select Country",
      "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
  ];

  const addWalletAddress = () => {
    dispatch(ShowModal("walletAddress"));
  }

  // const [value, setValue] = useState({
  //   startDate: new Date(),
  //   endDate: new Date().setMonth(11)
  // });

  // const handleValueChange = newValue => {
  //     console.log("newValue:", newValue);
  //     setValue(newValue);
  // };

  return (
    <>
      <div className="grid container h-full justify-center grid-cols-1 lg:grid-cols-3 lg:gap-10">
        <div className="flex flex-col w-full col-span-2 lg:col-span-2 gap-10 mb-8">
          <div className="flex flex-col bg-white w-full p-5 rounded-2">
            <span className="text-darkblue-900 text-[21px] font-medium px-2">Profile Details</span>
            <ul className="pt-2 px-2">
              <li className="text-darkblue-550 border-darkblue-550 inline-block cursor-pointer hover:text-gray-300 rounded-t-lg p-2 text-14 font-medium text-center border-b-2">PERSONAL DATA</li>
            </ul>

            <div className="flex w-full flex-col pt-6 gap-8">
              <div className="flex flex-col md:flex-row w-full gap-8">
                <div className="w-full flex flex-col gap-4 px-2">
                  <span className="text-gray-600 text-14 font-medium">
                    Full Name
                  </span>
                  <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                  type="text"/>
                </div>
                <div className="flex flex-col w-full gap-4 px-2">
                  <span className="text-gray-600 text-14 font-medium">
                    Your Login
                  </span>
                  <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                  type="text"/>
                </div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-8">
                <div className="w-full flex flex-col gap-4 px-2">
                  <span className="text-gray-600 text-14 font-medium">
                    Date of Birth
                  </span>
                  <input
                    type="date"
                    id="birthday"
                    className="h-[40px] w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none"
                    value={birthday}
                    onChange={changeBirthDay}/>

                </div>
                <div className="w-full flex flex-col gap-4 px-2">
                  <span className="text-gray-600 text-14 font-medium">
                    Nationality
                  </span>
                  <div className="custom-dropdown">
                    <Dropdown value={nationality} 
                        onChange={(e) => {setNationality(e.value);}} 
                        options={countries} 
                        placeholder="Select Country" 
                        filter className="h-[40px] w-full text-gray-600 rounded-2 border-gray-300"/>
                  </div>
                  {/* <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                  type="text"/> */}
                </div>
              </div>

              <a className="text-14 w-36 px-2 mx-2 mt-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white font-medium'>Update Profile</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white w-full p-5 rounded-2">
            <span className="text-darkblue-900 text-[21px] font-medium px-2">Two-Factor Verification</span>
            <span className="pt-2 text-gray-600 px-2">
              Two-factor authentication is a method to protect your account. When it is enabled, you need to enter not only your password, but also a special code. You can get this code in the mobile app. Even if a third person gets access to your password, they won't be able to access your account without the 2FA code.
            </span>
            <div className="flex w-full flex-col pt-4 gap-8">
              <a className="text-14 w-36 px-2 mx-2 mt-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white font-medium'>Enable 2FA</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col bg-white w-full p-5 rounded-2">
            <span className="text-darkblue-900 text-[21px] font-medium px-2">Contact us</span>
            <span className="pt-2 text-gray-600 px-2">
              Should you encounter any technical challenges or have queries regarding our offerings, we are readily available to assist. Connect with us through this form to address your concerns, seek further details about our services, or share your user experience feedback. We value your input and are committed to providing you with the most efficient solutions and comprehensive information.            </span>
            <div className="flex w-full flex-col pt-4 gap-8">
              <a className="text-14 w-36 px-2 mx-2 mt-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white font-medium'>Message us</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col col-span-1 w-full lg:col-span-1 gap-4">
          <div className="flex w-full flex-col gap-8">
            <a className="text-14 px-8 py-5 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-between gap-45 items-center"
              style={{textAlign: 'center', cursor: 'pointer'}}
              onClick={() => {addWalletAddress()}}>
              <p className='text-white font-medium'>Add your wallet address</p>
              <NextArrowIcon/>
            </a>
          </div>
          <div className="flex flex-col bg-white w-full p-5 rounded-2 mt-4 lg:mt-0">
            <span className="text-darkblue-900 text-[21px] font-normal px-2">Thank you for your interest in the RobotBullsCoin</span>
            <span className="pt-2 text-gray-600 px-2">
              We are currently developing our own coin that is going to power our algorithm and all of our applications.</span>
            <div className="flex w-full flex-col gap-8">
              <a className="text-14 w-24 px-2 mx-2 mt-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white font-medium'>Our coin</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col mt-4 bg-white w-full p-5 rounded-2">
            <span className="text-darkblue-900 text-[21px] font-medium px-2">Identity Verification - KYC</span>
            <span className="pt-2 text-gray-600 px-2">
              To comply with regulation, participant will have to go through identity verification.
            </span>
            <span className="pt-2 text-gray-500 text-[17px] px-2 font-thin">
              You have not submitted your documents to verify your identity (KYC).
            </span>
            <a className="text-14 w-32 mx-3 mt-6 mb-2 py-2 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
              style={{textAlign: 'center', cursor: 'pointer'}}>
              <p className='text-white font-medium'>Click to Proceed</p>
            </a>
          </div>
          <div className="flex flex-col mt-4 bg-white w-full p-5 rounded-2">
            <span className="text-darkblue-900 text-[21px] font-medium px-2">Whitelisting</span>
            <span className="pt-2 text-gray-600 px-2">
              Certain platforms necessitate the whitelisting of your cryptocurrency wallet prior to authorizing any transfers. To initiate this whitelisting process, please select the "Start Whitelisting" option.
            </span>
            <div className="flex w-full flex-col mt-5">
              <a className="text-14 w-36 px-2 mx-2 my-2 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-center gap-45 items-center"
                style={{textAlign: 'center', cursor: 'pointer'}}>
                <p className='text-white font-medium'>Submit your KYC</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default account;
