import { DateBeforeIcon, DateNextIcon } from "../icons";

export const options = {
	autoHide: true,
	todayBtn: false,
	clearBtn: true,
	clearBtnText: "Clear",
	maxDate: new Date("2030-01-01"),
	minDate: new Date("1950-01-01"),
	theme: {
		background: "bg-white dark:bg-white text-gray-700 dark:text-gray-700",
		todayBtn: "bg-white dark:bg-white text-gray-700 dark:text-gray-700",
		clearBtn: "bg-white dark:bg-white text-gray-700 dark:text-gray-700",
		icons: "bg-white dark:bg-white text-gray-700 dark:text-gray-700",
		text: "text-gray-700 dark:text-gray-700 text-[13px]",
		disabledText: "bg-gray-200",
		input: "bg-white dark:bg-white text-gray-700 dark:text-gray-700 pr-4 rounded-1",
		inputIcon: "",
		selected: "bg-darkblue-550 dark:bg-darkblue-550 text-white dark:text-white",
	},
	icons: {
		// () => ReactElement | JSX.Element
		prev: () => <span><DateBeforeIcon/></span>,
		next: () => <span><DateNextIcon/></span>,
	},
	datepickerClassNames: "top-18 bg-white dark:bg-white ",
	defaultDate: new Date("2024-01-01"),
	language: "en",
	disabledDates: [],
	weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
	inputNameProp: "date",
	inputIdProp: "date",
	inputPlaceholderProp: "Select Date",
	inputDateFormatProp: {
		day: "numeric",
		month: "long",
		year: "numeric"
	}
}

export const trnxOptions = [
    { value: "Any Type", label: "Any Type" },
    { value: "Purchase", label: "Purchase" },
    { value: "Bonus", label: "Bonus" },
    { value: "Referral", label: "Referral" },
    { value: "Transfer", label: "Transfer" },
    { value: "Refund", label: "Refund" },
];

export const statusOptions = [
    { value: "Show All", label: "Show All" },
    { value: "Pending", label: "Pending" },
    { value: "Onhold", label: "Onhold" },
    { value: "Approved", label: "Approved" },
    { value: "Canceled", label: "Canceled" },
    { value: "Deleted", label: "Deleted" },
];

export const stageOptions = [
    { value: "All Stage", label: "All Stage" },
    { value: "Demo Stage 1", label: "Demo Stage 1" },
    { value: "Demo Stage 2", label: "Demo Stage 2" },
    { value: "Investment Plan", label: "Investment Plan" }
];

export const payMethodsOptions = [
    { value: "All", label: "All" },
    { value: "Coinpayments", label: "Coinpayments" }
];

export const payCurrencyOptions = [
    { value: "All", label: "All" },
    { value: "USD", label: "USD" },
    { value: "ETH", label: "ETH" },
    { value: "BTC", label: "BTC" },
    { value: "LTC", label: "LTC" }
];

export const dateWithInOptions = [
    { value: "All Time", label: "All Time" },
    { value: "Today", label: "Today" },
    { value: "This month", label: "This month" },
    { value: "Last month", label: "Last month" },
    { value: "Last 90 Days", label: "Last 90 Days" },
    { value: "Custom Range", label: "Custom Range" }
];

export const planDurationOptions = [
    { value: "All", label: "All" },
    { value: "3 Month", label: "3 Month" },
    { value: "6 Month", label: "6 Month" },
    { value: "12 Month", label: "12 Month" }
];

export const userOptions = [
    { value: "Regular", label: "Regular" },
    { value: "Admin", label: "Admin" }
]; 

export const searchUserOptions = [
    { value: "NAME", label: "NAME" },
    { value: "EMAIL", label: "EMAIL" },
    { value: "ID", label: "ID" },
    { value: "WALLET", label: "WALLET" }
];

export const searchKycOptions = [
    { value: "UID", label: "UID" },
    { value: "NAME", label: "NAME" }
];

export const searchTypeOptions = [
    { value: "TRANX", label: "TRANX" },
    { value: "USER", label: "USER" },
    { value: "REFERENCE", label: "REFERENCE" }
];

export const statusTypeOptions = [
    { value: "Any Status", label: "Any Status" },
    { value: "Pending", label: "Pending" },
    { value: "Missing", label: "Missing" },
    { value: "Approved", label: "Approved" },
    { value: "Deleted", label: "Deleted" }
];

export const docTypeOptions = [
    { value: "Any Type", label: "Any Type" },
    { value: "Nidcard", label: "Nidcard" },
    { value: "Passport", label: "Passport" },
    { value: "Driving", label: "Driving" }
];

export const bullOptions = [
    { value: "All", label: "All" },
    { value: "General Bull", label: "General Bull" },
    { value: "Stocks Bull", label: "Stocks Bull" },
    { value: "Crypto Bull", label: "Crypto Bull" },
    { value: "Ecological Bull", label: "Ecological Bull" },
    { value: "NFT Bull", label: "NFT Bull" },
    { value: "Metaverse Bull", label: "Metaverse Bull" },
    { value: "IPO Bull", label: "IPO Bull" },
    { value: "Commodities Bull", label: "Commodities Bull" },
    { value: "Forex Bull", label: "Forex Bull" },
    { value: "Real Estate Bull", label: "Real Estate Bull" },
    { value: "BTC Bull", label: "BTC Bull" },
    { value: "ETH Bull", label: "ETH Bull" },
    { value: "AI Bull", label: "AI Bull" },
    { value: "RBC", label: "RBC" }
];

export const accountStatusOptions = [
    { value: "Any Status", label: "Any Status" },
    { value: "Actived", label: "Actived" },
    { value: "Suspended", label: "Suspended" }
];

export const regMethodOptions = [
    { value: "Any Method", label: "Any Method" },
    { value: "Internal", label: "Internal" },
    { value: "Email", label: "Email" },
    { value: "Google", label: "Google" },
    { value: "Facebook", label: "Facebook" }
];

export const pageLayoutOptions = [
    { value: "Default", label: "Default" },
    { value: "Alter Side", label: "Alter Side" },
    { value: "Center Light", label: "Center Light" },
    { value: "Center Dark", label: "Center Dark" }
];

export const verifiedStatusOptions = [
    { value: "Anything", label: "Anything" },
    { value: "Email Verified", label: "Email Verified" },
    { value: "KYC Verified", label: "KYC Verified" },
    { value: "Both Verified", label: "Both Verified" }
];

export const tokenBalanceOptions = [
    { value: "Any Amount", label: "Any Amount" },
    { value: "Has Token", label: "Email Verified" },
    { value: "KYC Verified", label: "KYC Verified" },
    { value: "Both Verified", label: "Both Verified" }
];

export const walletSettingOptions = [
    { value: "Ethereum", label: "Ethereum" },
    { value: "Bitcoin", label: "Bitcoin" },
    { value: "BitcoinCash", label: "BitcoinCash" },
    { value: "Litecoin", label: "Litecoin" },
    { value: "Ripple", label: "Ripple" },
    { value: "Stellar", label: "Stellar" },
    { value: "Tether", label: "Tether" },
    { value: "WAVES", label: "WAVES" },
    { value: "Monero", label: "Monero" },
    { value: "DASH", label: "DASH" },
    { value: "TRON", label: "TRON" },
    { value: "BinanceUSD", label: "BinanceUSD" },
    { value: "Cardano", label: "Cardano" },
    { value: "Dogecoin", label: "Dogecoin" },
    { value: "Solana", label: "Solana" },
    { value: "Uniswap", label: "Uniswap" },
    { value: "Chainlink", label: "Chainlink" },
    { value: "PancakeSwap", label: "PancakeSwap" }
]

export const visibilityOptions = [
    { value: "Hide", label: "Hide" },
    { value: "Show", label: "Show" }
];

export const tokenPriceOptions = [
    { value: "ETH", label: "USD->ETH" },
    { value: "GBP", label: "USD->GBP" },
    { value: "CAD", label: "USD->CAD" },
    { value: "AUD", label: "USD->AUD" },
    { value: "TRY", label: "USD->TRY" },
    { value: "RUB", label: "USD->RUB" },
    { value: "INR", label: "USD->INR" },
    { value: "BRL", label: "USD->BRL" },
    { value: "NZD", label: "USD->NZD" },
    { value: "PLN", label: "USD->PLN" },
    { value: "JPY", label: "USD->JPY" },
    { value: "MYR", label: "USD->MYR" },
    { value: "IDR", label: "USD->IDR" },
    { value: "NGN", label: "USD->NGN" },
    { value: "MXN", label: "USD->MXN" },
    { value: "PHP", label: "USD->PHP" },
    { value: "CHF", label: "USD->CHF" },
    { value: "THB", label: "USD->THB" },
    { value: "SGD", label: "USD->SGD" },
    { value: "CZK", label: "USD->CZK" },
    { value: "NOK", label: "USD->NOK" },
    { value: "ZAR", label: "USD->ZAR" },
    { value: "SEK", label: "USD->SEK" },
    { value: "KES", label: "USD->KES" },
    { value: "NAD", label: "USD->NAD" },
    { value: "DKK", label: "USD->DKK" },
    { value: "HKD", label: "USD->HKD" },
    { value: "LTC", label: "USD->LTC" },
    { value: "BTC", label: "USD->BTC" },
    { value: "BCH", label: "USD->BCH" },
    { value: "BNB", label: "USD->BNB" },
    { value: "TRX", label: "USD->TRX" },
    { value: "XLM", label: "USD->XLM" },
    { value: "XRP", label: "USD->XRP" },
    { value: "USDT", label: "USD->USDT" },
    { value: "USDC", label: "USD->USDC" },
    { value: "DASH", label: "USD->DASH" },
    { value: "WAVES", label: "USD->WAVES" },
    { value: "XMR", label: "USD->XMR" }
]


export const isReferredByOptions = [
    { value: "Anything", label: "Anything" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" }
];

export const bonusTypeOptions = [
    { value: "For All Transactions", label: "For All Transactions" },
    { value: "Max 1 Transactions", label: "Max 1 Transactions" },
    { value: "Max 2 Transactions", label: "Max 2 Transactions" },
    { value: "Max 3 Transactions", label: "Max 3 Transactions" },
    { value: "Max 4 Transactions", label: "Max 4 Transactions" },
    { value: "Max 5 Transactions", label: "Max 5 Transactions" },
    { value: "Max 10 Transactions", label: "Max 10 Transactions" }
]

export const offeringTypeOptions = [
    { value: "Percentage", label: "Percentage" },
    { value: "Fixed/Fiat", label: "Fixed/Fiat" }
]

export const themeTypeOptions = [
    { value: "Default", label: "Default" },
    { value: "Azure Blue", label: "Azure Blue" },
    { value: "Teal Green", label: "Teal Green" },
    { value: "Charcoal", label: "Charcoal" },
    { value: "Coral Red", label: "Coral Red" },
    { value: "Fire Gold", label: "Fire Gold" },
    { value: "Tangerine Orange", label: "Tangerine Orange" },
    { value: "Watermelon Green", label: "Watermelon Green" }
]

export const referralBonusOptions = [
    { value: "For All Transactions", label: "Percentage" },
    { value: "Max 5,000 Tokens", label: "Max 5,000 Tokens" },
    { value: "Max 10,000 Tokens", label: "Max 10,000 Tokens" },
    { value: "Max 25,000 Tokens", label: "Max 25,000 Tokens" },
    { value: "Max 50,000 Tokens", label: "Max 50,000 Tokens" },
    { value: "Max 75,000 Tokens", label: "Max 75,000 Tokens" },
    { value: "Max 100,000 Tokens", label: "Max 100,000 Tokens" },
    { value: "Max 250,000 Tokens", label: "Max 250,000 Tokens" },
    { value: "Max 1,000,000 Tokens", label: "Max 1,000,000 Tokens" },
    { value: "Max 5,000,000 Tokens", label: "Max 5,000,000 Tokens" },
    { value: "Max 10,000,000 Tokens", label: "Max 10,000,000 Tokens" },
    { value: "Max 100,000,000 Tokens", label: "Max 100,000,000 Tokens" }
]

export const dateTimeFormatOptions = [
    { value: "02 Aug, 2024", label: "02 Aug, 2024" },
    { value: "Aug 02, 2024", label: "Aug 02, 2024" },
    { value: "02 Aug 24", label: "02 Aug 24" },
    { value: "08-02-2024", label: "08-02-2024" },
    { value: "02-08-2024", label: "02-08-2024" },
    { value: "2024-08-02", label: "2024-08-02" },
    { value: "08-02-24", label: "08-02-24" },
    { value: "24-08-02", label: "24-08-02" }
]

export const timeFormatOptions = [
    { value: "11:12 AM", label: "11:12 AM" },
    { value: "15:30 (24hr)", label: "15:30 (24hr)" },
    { value: "15:30:25 (24hr)", label: "15:30:25 (24hr)" }
]

export const timezoneOptions = [
    { value: "(UTC-11:00) Midway Island", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-11:00) Samoa", label: "(UTC-11:00) Samoa" },
    { value: "(UTC-10:00) Hawaii", label: "(UTC-10:00) Hawaii" },
    { value: "(UTC-09:00) Alaska", label: "(UTC-09:00) Alaska" },
    { value: "(UTC-08:00) Pacific Time (US &amp; Canada)", label: "(UTC-08:00) Pacific Time (US &amp; Canada)" },
    { value: "(UTC-08:00) Tijuana", label: "(UTC-08:00) Tijuana" },
    { value: "(UTC-07:00) Arizona", label: "(UTC-07:00) Arizona" },
    { value: "(UTC-07:00) Chihuahua", label: "(UTC-07:00) Chihuahua" },
    { value: "(UTC-07:00) La Paz", label: "(UTC-07:00) La Paz" },
    { value: "(UTC-07:00) Mazatlan", label: "(UTC-07:00) Mazatlan" },
    { value: "(UTC-07:00) Mountain Time (US &amp; Canada)", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-06:00) Central America", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-06:00) Central Time (US &amp; Canada)", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-06:00) Guadalajara", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-06:00) Mexico City", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-06:00) Monterrey", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-05:00) Bogota", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-05:00) Eastern Time (US &amp; Canada)", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-05:00) Indiana (East)", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-05:00) Lima", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-05:00) Quito", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-04:00) Atlantic Time (Canada)", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-04:30) Caracas", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-04:00) La Paz", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-04:00) Santiago", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-03:30) Newfoundland", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-03:00) Brasilia", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-03:00) Buenos Aires", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-03:00) Georgetown", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-03:00) Greenland", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-02:00) Mid-Atlantic", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-01:00) Azores", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC-01:00) Cape Verde Is.", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) Casablanca", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) Edinburgh", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) Greenwich Mean Time : Dublin", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) Lisbon", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) London", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) Monrovia", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+00:00) UTC", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Amsterdam", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Belgrade", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Berlin", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Bern", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Bratislava", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Brussels", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Budapest", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Copenhagen", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Ljubljana", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Madrid", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Paris", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Prague", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Rome", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Sarajevo", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Skopje", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Stockholm", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Vienna", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Warsaw", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) West Central Africa", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+01:00) Zagreb", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Athens", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Bucharest", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Cairo", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Harare", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Helsinki", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Istanbul", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Jerusalem", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Kyiv", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Pretoria", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Riga", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Sofia", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Tallinn", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+02:00) Vilnius", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+03:00) Baghdad", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+03:00) Kuwait", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+03:00) Minsk", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+03:00) Riyadh", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+03:00) Volgograd", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+03:30) Tehran", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) Abu Dhabi", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) Baku", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) Moscow", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) Muscat", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) St. Petersburg", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) Tbilisi", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:00) Yerevan", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+04:30) Kabul", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:00) Islamabad", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:00) Karachi", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:00) Tashkent", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:30) Chennai", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:30) Kolkata", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:30) Mumbai", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:30) New Delhi", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:30) Sri Jayawardenepura", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+05:45) Kathmandu", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+06:00) Almaty", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+06:00) Astana", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+06:00) Dhaka", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+06:00) Ekaterinburg", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+07:00) Bangkok", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+07:00) Hanoi", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+07:00) Jakarta", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+07:00) Novosibirsk", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Beijing", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Chongqing", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Hong Kong", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Krasnoyarsk", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Kuala Lumpur", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Perth", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Singapore", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Taipei", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Ulaan Bataar", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+08:00) Urumqi", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:00) Irkutsk", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:00) Osaka", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:00) Sapporo", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:00) Seoul", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:00) Tokyo", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:30) Adelaide", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+09:30) Darwin", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Brisbane", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Canberra", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Guam", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Hobart", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Melbourne", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Port Moresby", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Sydney", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+10:00) Yakutsk", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+11:00) Vladivostok", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+12:00) Auckland", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+12:00) Fiji", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+12:00) International Date Line West", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+12:00) Kamchatka", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+12:00) Marshall Is.", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+12:00) Wellington", label: "(UTC-11:00) Midway Island" },
    { value: "(UTC+13:00) Nuku'alofa", label: "(UTC-11:00) Midway Island" }
]

export const purchaseType = [
    {value: "US Dollar (USD)", label: "US Dollar (USD)"},
    {value: "Euro (EUR)", label: "Euro (EUR)"},
    {value: "Pound Sterling (GBP)", label: "Pound Sterling (GBP)"},
    {value: "Canadian Dollar (CAD)", label: "Canadian Dollar (CAD)"},
    {value: "Australian Dollar (AUD)", label: "Australian Dollar (AUD)"},
    {value: "Turkish Lira (TRY)", label: "Turkish Lira (TRY)"},
    {value: "Russian Ruble (RUB)", label: "Russian Ruble (RUB)"},
    {value: "Indian Rupee (INR)", label: "Indian Rupee (INR)"},
    {value: "Brazilian Real (BRL)", label: "Brazilian Real (BRL)"},
    {value: "New Zealand Dollar (NZD)", label: "New Zealand Dollar (NZD)"},
    {value: "Polish Złoty (PLN)", label: "Polish Złoty (PLN)"},
    {value: "Japanese Yen (JPY)", label: "Japanese Yen (JPY)"},
    {value: "Malaysian Ringgit (MYR)", label: "Malaysian Ringgit (MYR)"},
    {value: "Indonesian Rupiah (IDR)", label: "Indonesian Rupiah (IDR)"},
    {value: "Nigerian Naira (NGN)", label: "Nigerian Naira (NGN)"},
    {value: "Mexican Peso (MXN)", label: "Mexican Peso (MXN)"},
    {value: "Philippine Peso (PHP)", label: "Philippine Peso (PHP)"},
    {value: "Swiss franc (CHF)", label: "Swiss franc (CHF)"},
    {value: "Thai Baht (THB)", label: "Thai Baht (THB)"},
    {value: "Singapore dollar (SGD)", label: "Singapore dollar (SGD)"},
    {value: "Czech koruna (CZK)", label: "Czech koruna (CZK)"},
    {value: "Norwegian krone (NOK)", label: "Norwegian krone (NOK)"},
    {value: "South African rand (ZAR)", label: "South African rand (ZAR)"},
    {value: "Swedish krona (SEK)", label: "Swedish krona (SEK)"},
    {value: "Kenyan shilling (KES)", label: "Kenyan shilling (KES)"},
    {value: "Namibian dollar (NAD)", label: "Namibian dollar (NAD)"},
    {value: "Danish krone (DKK)", label: "Danish krone (DKK)"},
    {value: "Hong Kong dollar (HKD)", label: "Hong Kong dollar (HKD)"},
    {value: "Hungarian Forint (HUF)", label: "Hungarian Forint (HUF)"},
    {value: "Pakistani Rupee (PKR)", label: "Pakistani Rupee (PKR)"},
    {value: "Egyptian Pound (EGP)", label: "Egyptian Pound (EGP)"},
    {value: "Chilean Peso (CLP)", label: "Chilean Peso (CLP)"},
    {value: "Colombian Peso (COP)", label: "Colombian Peso (COP)"},
    {value: "Jamaican Dollar (JMD)", label: "Jamaican Dollar (JMD)"},
    {value: "Ethereum (ETH)", label: "Ethereum (ETH)"},
    {value: "Binance Coin (BNB)", label: "Binance Coin (BNB)"},
    {value: "Tether (USDT)", label: "Tether (USDT)"},
    {value: "TRON (TRX)", label: "TRON (TRX)"},
    {value: "USD Coin (USDC)", label: "USD Coin (USDC)"},
    {value: "Dash (DASH)", label: "Dash (DASH)"},
    {value: "Waves (WAVES)", label: "Waves (WAVES)"},
    {value: "Monero (XMR)", label: "Monero (XMR)"},
    {value: "Binance USD (BUSD)", label: "Binance USD (BUSD)"},
    {value: "Cardano (ADA)", label: "Cardano (ADA)"},
    {value: "Dogecoin (DOGE)", label: "Dogecoin (DOGE)"},
    {value: "Solana (SOL)", label: "Solana (SOL)"},
    {value: "Uniswap (UNI)", label: "Uniswap (UNI)"},
    {value: "Chainlink (LINK)", label: "Chainlink (LINK)"},
    {value: "PancakeSwap (CAKE)", label: "PancakeSwap (CAKE)"},
    {value: "Franc Congolais (CDF)", label: "Franc Congolais (CDF)"},
    {value: "Franc Congolais (CFA)", label: "Franc Congolais (CFA)"}
];

export const currencyOptions = [
    {value: "USD", label: "USD"}, 
    {value: "EUR", label: "EUR"}, 
    {value: "GBP", label: "GBP"}, 
    {value: "CAD", label: "CAD"}, 
    {value: "AUD", label: "AUD"}, 
    {value: "TRY", label: "TRY"}, 
    {value: "INR", label: "INR"}, 
    {value: "BRL", label: "BRL"}, 
    {value: "NZD", label: "NZD"}, 
    {value: "PLN", label: "PLN"}, 
    {value: "JPY", label: "JPY"}, 
    {value: "MYR", label: "MYR"}, 
    {value: "IDR", label: "IDR"}, 
    {value: "MXN", label: "MXN"}, 
    {value: "PHP", label: "PHP"}, 
    {value: "CHF", label: "CHF"}, 
    {value: "THB", label: "THB"}, 
    {value: "SGD", label: "SGD"}, 
    {value: "CZK", label: "CZK"}, 
    {value: "SEK", label: "SEK"}, 
    {value: "ZAR", label: "ZAR"}, 
    {value: "NOK", label: "NOK"}, 
    {value: "KES", label: "KES"}, 
    {value: "NAD", label: "NAD"}, 
    {value: "DKK", label: "DKK"}, 
    {value: "HKD", label: "HKD"}, 
    {value: "ETH", label: "ETH"}, 
    {value: "BTC", label: "BTC"}, 
    {value: "TRX", label: "TRX"}, 
    {value: "BNB", label: "BNB"}, 
    {value: "BCH", label: "BCH"}, 
    {value: "XLM", label: "XLM"}, 
    {value: "XRP", label: "XRP"}, 
    {value: "USDT", label: "USDT"}, 
    {value: "USDC", label: "USDC"}, 
    {value: "DASH", label: "DASH"}, 
    {value: "WAVES", label: "WAVES"}, 
    {value: "XMR", label: "XMR"}
];

export const progressAmountType = [
    {value: "Token Amount", label: "Token Amount"}, 
    {value: "US Dollar", label: "US Dollar"}, 
    {value: "Euro", label: "Euro" },
    {value: "Pound", label: "Pound"},
    {value: "Canadian Dollar", label: "Canadian Dollar"},
    {value: "Australian Dollar", label: "Australian Dollar"},
    {value: "Turkish Lira", label: "Turkish Lira"},
    {value: "Russian Ruble", label: "Russian Ruble"},
    {value: "Indian Rupee", label: "Indian Rupee"},
    {value: "Brazilian Real", label: "Brazilian Real"},
    {value: "New Zealand Dollar", label: "New Zealand Dollar"},
    {value: "Polish Złoty", label: "Polish Złoty"},
    {value: "Japanese Yen", label: "Japanese Yen"},
    {value: "Malaysian Ringgit", label: "Malaysian Ringgit"},
    {value: "Indonesian Rupiah", label: "Indonesian Rupiah"},
    {value: "Nigerian Naira", label: "Nigerian Naira"},
    {value: "Mexican Peso", label: "Mexican Peso"},
    {value: "Philippine Peso", label: "Philippine Peso"},
    {value: "Swiss franc", label: "Swiss franc"},
    {value: "Thai Baht", label: "Thai Baht"},
    {value: "Singapore dollar", label: "Singapore dollar"},
    {value: "Czech koruna", label: "Czech koruna"},
    {value: "Norwegian krone", label: "Norwegian krone"},
    {value: "South African rand", label: "South African rand"},
    {value: "Swedish krona", label: "Swedish krona"},
    {value: "Kenyan shilling", label: "Kenyan shilling"},
    {value: "Namibian dollar", label: "Namibian dollar"},
    {value: "Danish krone", label: "Danish krone"},
    {value: "Hong Kong dollar", label: "Hong Kong dollar"},
    {value: "Hungarian Forint", label: "Hungarian Forint"},
    {value: "Pakistani Rupee", label: "Pakistani Rupee"},
    {value: "Egyptian Pound", label: "Egyptian Pound"},
    {value: "Chilean Peso", label: "Chilean Peso"},
    {value: "Colombian Peso", label: "Colombian Peso"},
    {value: "Jamaican Dollar", label: "Jamaican Dollar"},
    {value: "Ethereum", label: "Ethereum"},
    {value: "Binance Coin", label: "Binance Coin"},
    {value: "Tether", label: "Tether"},
    {value: "TRON", label: "TRON"},
    {value: "USD Coin", label: "USD Coin"},
    {value: "Dash", label: "Dash"},
    {value: "Waves", label: "Waves"},
    {value: "Monero", label: "Monero"},
    {value: "Binance USD", label: "Binance USD"},
    {value: "Cardano", label: "Cardano"},
    {value: "Dogecoin", label: "Dogecoin"},
    {value: "Solana", label: "Solana"},
    {value: "Uniswap", label: "Uniswap"},
    {value: "Chainlink", label: "Chainlink"},
    {value: "PancakeSwap", label: "PancakeSwap"},
    {value: "Franc Congolais", label: "Franc Congolais"},
    {value: "Franc Congolais", label: "Franc Congolais"}
];