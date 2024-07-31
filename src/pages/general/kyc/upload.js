import React, { useContext, useEffect, useState } from "react";
import { ActivityIcon, AvatarIcon, CheckIcon, KycRoundIcon, LogoutIcon, NextArrowIcon, NotificationIcon, ProfileIcon, RoundCheckIcon } from "../../../icons";
import { useDispatch, useSelector } from "../../../store";
import { Logout, SetBalances, UpdateBalances } from "../../../store/reducers/auth";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ThumbnailInput } from "../../../components/DragDrop/ThumbnailInput";
import { Dropdown } from "primereact/dropdown";

function upload() {
    const history = useHistory();
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const { balances } = useSelector((state) => state.auth);
    // eslint-disable-next-line no-unused-vars
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState("none");
    const [thumbnail, setThumbnail] = useState('');
    const [currentAuth, setCurrentAuth] = useState('passport');

    const logout = () => {
        history.push("/");
        dispatch(Logout({}))
    }

    const handleThumbnail = async (image) => {
        setThumbnail(image);
    }

    const changeBirthDay = (event) => {
        setBirthday(event.target.value);
    };

    const changeGender = (event) => {
        setGender(event.target.value);
    };

    useEffect(() => {
        if (auth.isLoggedIn) {
        }
    }, [auth.isLoggedIn]);

    const countries = ["Select Country",
        "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"
    ];

    return (
        <>
        <div className="flex h-full flex-col container justify-center items-center">
            <div className="flex col justify-center items-center w-full h-full py-1 rounded-2">
                <span className="text-darkblue-900 col-span-8 flex items-center justify-center text-[22px] lg:text-[42px] font-thin mg:font-thin px-2">Begin your ID-Verification</span>
            </div>

            <div className="flex justify-center items-center w-full h-full rounded-2 mb-[10px] lg:mb-[50px]">
                <div className="text-gray-600 text-[15px] md:text-[16px] lg:text-[20px] w-full col-span-8 flex items-center flex-wrap justify-center font-normal px-2 md:px-4 lg:px-16 xl:px-52">
                    <p className="text-center">
                        Verify your identity.
                    </p>
                </div>
            </div>

            <div className="w-full px-2 md:px-4 lg:px-8 xl:px-32">
                <div className="rounded-2 bg-white flex justify-start items-center flex-col w-full">
                    <div className="flex flex-row justify-start items-center gap-8 w-full p-6">
                        <div className="rounded-5 w-12 h-12 flex flex-shrink-0 justify-center items-center text-gray-330" style={{border: "2px solid #b1becc", borderRadius:"50%"}}>
                            <p className="text-center font-medium text-[21px] text-gray-400">
                                01
                            </p>
                        </div>
                        <div className="flex flex-col relative">
                            <span className="text-gray-600 text-[16px] md:text-[20px] font-normal justify-start w-full items-center flex">
                                Personal Details
                            </span>
                            <span className="text-gray-600 text-[14px] md:text-[16px] justify-start items-center flex justify">
                                Your basic personal information is required for identification purposes.
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-[4px]">
                    <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                    </div>
                    <div className="flex justify-start flex-col px-2 md:px-4 lg:px-8">
                        <div className="py-5 flex gap-1 flex-row justify-start">
                            <div className="pt-1">
                                <NotificationIcon/>                        
                            </div>
                            <span className="text-gray-500 text-[14px] md:text-[16px] justify-start items-center flex">
                                Please type carefully and fill out the form with your personal details. You are not allowed to edit the details once you have submitted the application.
                            </span>
                        </div>
                        <div className="flex w-full flex-col py-2 gap-8">
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
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full gap-8">
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    Gender
                                </span>
                                <select id="gender" className="h-[40px] w-full text-gray-600 rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" value={gender} onChange={changeGender}>
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                                </div>
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    Telegram
                                </span>
                                <input placeholder="Tom" className="h-[40px] text-gray-600 w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-col py-2 gap-8">
                            <span className="text-darkblue-750 text-18 justify-start items-center flex">
                                Your Address
                            </span>
                            <div className="flex flex-col md:flex-row w-full gap-8">
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    Country
                                </span>
                                <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                                <div className="flex flex-col w-full gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    State
                                </span>
                                <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full gap-8">
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    City
                                </span>
                                <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    Zip Code
                                </span>
                                <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full gap-8">
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    Address Line 1
                                </span>
                                <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                                <div className="w-full flex flex-col gap-4 px-2">
                                <span className="text-gray-600 text-14 font-medium">
                                    Address Line 2
                                </span>
                                <input placeholder="Tom" className="h-[40px] w-full rounded-2 border-gray-300 focus:border-transparent focus:border-coral-650 focus:ring-gray-300 focus:outline-none" 
                                type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[4px] pt-4">
                    <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                    </div>
                    <div className="flex flex-row justify-start items-center gap-8 w-full p-6">
                        <div className="rounded-5 w-12 h-12 flex flex-shrink-0 justify-center items-center text-gray-330" style={{border: "2px solid #b1becc", borderRadius:"50%"}}>
                            <p className="text-center font-medium text-[21px] text-gray-400">
                                02
                            </p>
                        </div>
                        <div className="flex flex-col w-full">
                            <span className="text-gray-600 text-[16px] md:text-[20px] font-normal justify-start items-center flex">
                                Document Upload
                            </span>
                            <span className="text-gray-600 text-[14px] md:text-[16px] justify-start items-center flex">
                                To verify your identity, we ask you to upload high-quality scans or photos of your official identification documents issued by the government.
                            </span>
                        </div>
                    </div>
                    <div className="w-full h-[4px]">
                    <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                    </div>
                    <div className="flex flex-col justify-start px-2 md:px-4 lg:px-8 w-full">
                        <div className="py-6 flex gap-1 flex-row justify-start w-full">
                            <div className="pt-1">
                                <NotificationIcon/>                        
                            </div>
                            <span className="text-gray-500 text-15 justify-start items-center flex">
                                In order to complete, please upload any of the following personal documents.
                            </span>                    
                        </div> 
                        <div className="flex w-full flex-col md:flex-row py-2 gap-8">
                            <div className="w-full flex justify-center items-center rounded-2 gap-3 py-3 cursor-pointer" style={{border: `2px solid ${currentAuth == 'passport'? '#7668fe' : '#e6effb'}`}} onClick={() => {setCurrentAuth('passport')}}>
                                {currentAuth != 'passport' && (<img src="/demo/assets/icon-passport.png" className="w-[30px] md:w-[32px] lg:w-[40px]"/>)}
                                {currentAuth == 'passport' && (<img src="/demo/assets/icon-passport-color.png" className="w-[30px] md:w-[32px] lg:w-[40px]"/>)}
                                <span className="text-gray-500 text-14 justify-start font-semibold items-center flex">
                                    PASSPORT
                                </span>
                                {currentAuth == 'passport' && ( 
                                <div className="text-darkblue-550">
                                    <RoundCheckIcon/>
                                </div>)}
                            </div>
                            <div className="w-full flex justify-center items-center rounded-2 gap-3 py-3 cursor-pointer" style={{border: `2px solid ${currentAuth == 'idcard'? '#7668fe' : '#e6effb'}`}} onClick={() => {setCurrentAuth('idcard')}}>
                                {currentAuth != 'idcard' && (<img src="/demo/assets/icon-national-id.png" className="w-[30px] md:w-[32px] lg:w-[40px]"/>)}
                                {currentAuth == 'idcard' && (<img src="/demo/assets/icon-national-id-color.png" className="w-[30px] md:w-[32px] lg:w-[40px]"/>)}
                                <span className="text-gray-500 text-14 font-semibold justify-start items-center flex">
                                    NATIONAL ID CARD
                                </span>
                                {currentAuth == 'idcard' && ( 
                                <div className="text-darkblue-550">
                                    <RoundCheckIcon/>
                                </div>)}
                            </div>
                            <div className="w-full flex justify-center items-center rounded-2 gap-3 py-3 cursor-pointer" style={{border: `2px solid ${currentAuth == 'driving license'? '#7668fe' : '#e6effb'}`}} onClick={() => {setCurrentAuth('driving license')}}>
                                {currentAuth != 'driving license' && (<img src="/demo/assets/icon-license.png" className="w-[30px] md:w-[32px] lg:w-[40px]"/>)}
                                {currentAuth == 'driving license' && (<img src="/demo/assets/icon-license-color.png" className="w-[30px] md:w-[32px] lg:w-[40px]"/>)}
                                <span className="text-gray-500 text-14 justify-start font-semibold items-center flex">
                                    DRIVING LICENSE
                                </span>
                                {currentAuth == 'driving license' && ( 
                                <div className="text-darkblue-550">
                                    <RoundCheckIcon/>
                                </div>)}
                            </div>
                        </div>
                        <span className="text-darkblue-900 font-semibold text-15 justify-start items-center flex pt-2 w-full">
                            To avoid delays with verification process, please double-check to ensure the below requirements are fully met:
                        </span>
                        <div className="text-gray-700 font-normal text-15 justify-start items-center flex pt-2 w-full gap-2">
                            <CheckIcon/>
                            Chosen credential must not be expired.
                        </div>
                        <div className="text-gray-700 font-normal text-15 justify-start items-center flex pt-2 w-full gap-2">
                            <CheckIcon/>
                            Document should be in good condition and clearly visible.
                        </div>
                        <div className="text-gray-700 font-normal text-15 justify-start items-center flex pt-2 w-full gap-2">
                            <CheckIcon/>
                            There is no light glare or reflections on the card.
                        </div>
                        <div className="text-gray-700 font-normal text-15 justify-start items-center flex pt-2 w-full gap-2">
                            <CheckIcon/>
                            File is at least 1 MB in size and has at least 300 dpi resolution.
                        </div>
                        <span className="text-gray-600 font-semibold text-14 justify-start items-center flex pt-4 w-full">
                            {currentAuth == "passport" && "Upload Here Your Passport Copy"}
                            {currentAuth == "idcard" && "Upload Here Your National ID Card Copy"}
                            {currentAuth == "driving license" && "Upload Here Your Driver’s License Copy"}
                        </span>
                        <div className="flex w-full items-center justify-center gap-16 pb-8">
                            <ThumbnailInput setThumbnail={handleThumbnail}/>
                            {currentAuth == "passport" && (<img src="/demo/assets/vector-passport.png" className="w-[160px] pt-5 hidden md:block"/>)}                           
                            {currentAuth == "idcard" && (<img src="/demo/assets/vector-nidcard.png" className="w-[160px] pt-5 hidden md:block"/>)}                           
                            {currentAuth == "driving license" && (<img src="/demo/assets/vector-driving.png" className="w-[160px] pt-5 hidden md:block"/>)} 
                        </div>
                        <div className="w-full h-[4px]">
                        <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                        </div>
                        <span className="text-gray-600 font-semibold text-14 justify-start items-center flex pt-8 w-full">
                            {currentAuth == "passport" && "Upload a selfie as a Photo Proof while holding document in your hand"}
                            {currentAuth == "idcard" && "Upload Here Your National ID Back Side"}
                            {currentAuth == "driving license" && "Upload a selfie as a Photo Proof while holding document in your hand"}                           
                        </span>
                        <div className="flex w-full items-center justify-center gap-16 pb-8">
                            <ThumbnailInput setThumbnail={handleThumbnail}/>
                            {currentAuth == "passport" && (<img src="/demo/assets/vector-hand.png" className="w-[160px] pt-5 hidden md:block"/>)}                           
                            {currentAuth == "idcard" && (<img src="/demo/assets/vector-id-back.png" className="w-[160px] pt-5 hidden md:block"/>)}                           
                            {currentAuth == "driving license" && (<img src="/demo/assets/vector-hand.png" className="w-[160px] pt-5 hidden md:block"/>)} 
                        </div>
                    </div>
                    <div className="w-full h-[4px]">
                    <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
                    </div>
                    <div className="px-2 md:px-4 lg:px-8 flex flex-col gap-4 pt-4">
                        <div className="text-[4x] text-gray-600 w-full flex gap-2 pt-2">
                            <input id="term-condition" className="w-6 h-6 rounded-2 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                            <label for="term-condition" className="text-gray-600 text-[10x]">
                            I agree to the
                            <span className="text-darkblue-650"> Terms and Condition </span>
                            and
                            <span className="text-darkblue-650 "> Privacy and Policy.</span>
                            </label>
                        </div>
                        <div className="text-[4x] text-gray-600 w-full flex gap-2 pt-2">
                            <input id="info-currect" className="w-6 h-6 rounded-2 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                            <label for="info-currect" className="text-gray-600 text-[10x] cursor-pointer">
                                All the personal information I have entered is correct.
                            </label>
                        </div>
                        <div className="text-[4x] text-gray-600 w-full flex gap-2 pt-2">
                            <input id="certification" className="w-6 h-6 rounded-2 focus:border-transparent focus:transparent border-gray-300 focus:outline-none cursor-pointer" type="checkbox"></input>
                            <label for="certification" className="text-gray-600 text-[10x] cursor-pointer">
                                I affirm that I am enrolling to contribute to the RobotBulls product in my own capacity as an individual (and ultimate owner), not acting on behalf of a third-party corporate entity.
                            </label>
                        </div>
                    </div>

                    <div className="w-full flex justify-start items-center px-2 md:px-4 lg:px-8 py-8">
                        <a className="text-14 px-3 py-3 fill-btn-continue text-white font-medium bg-darkblue-550 rounded-2 flex flex-row flex-wrap justify-around items-center"
                        style={{textAlign: 'center', cursor: 'pointer'}}>
                        <p className='text-white font-medium text-14 text-center flex items-center justify-center'>Proceed to Verify</p>
                    </a>
                    </div>

                </div>
            </div>

            <div className="pt-2 md:pt-16 flex w-full justify-center items-center text-center">
                <p className="text-gray-500 text-[10x]">
                    Contact our support team via email -
                    <span className="text-darkblue-650"> info@yourdomain.com </span>
                </p>
            </div>
            <div className="w-full h-[4px]">
                <div className="w-full" style={{borderBottom: "1px solid #e5e7eb"}}></div>
            </div>
        </div>
        </>
    );
}

export default upload;
