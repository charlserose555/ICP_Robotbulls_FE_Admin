import React, { useContext, useEffect, useState } from "react";

function policy() {
  return (
    <>
      <div className="flex h-screen bg-gray-80 flex-row text-white">
        <div className="flex flex-col flex-1 w-full overflow-y-auto">
          <div className={`absolute w-full z-40 flex justify-start flex flex-row items-start `}>
            <div className="bg-darkblue-750 w-full absolute z-40 h-[66px] flex items-center">
              <div className={`container w-full flex col items-center justify-center`}>
                <img src="/demo/assets/logo-light.png" style={{width: '40px'}}/>
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center pt-32 pb-16 px-4 text-darkblue-850 text-[20px] md:text-[32px] lg:text-[42px] font-thin">Privacy and Policy</div>

          <div className="w-full h-full container">
            <div className="flex container h-full justify-center lg:gap-10">
              <div className="flex flex-col w-full gap-10 mb-8">
                <div className="flex flex-col bg-white w-full p-5 rounded-2">
                  <div className="flex flex-col w-full gap-4 px-4 pt-6">
                      <p className="text-[15px] text-gray-600">
                        Our Privacy Policy below describes in detail how RobotBulls handles the collection, management and protection of all confidential user information.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        Introduction    
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Your privacy is very important to us. We are committed to protecting and respecting your personal data. This Privacy Policy describes what types of personal data we collect about you when you choose to use our services, how we will use your personal data, when and with whom we share it and how we will keep it safe. It also details your rights in respect of our processing of your personal information and how you may exercise them. Please take the time to read and understand this policy.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We may make changes to this Notice from time to time and it is important that you check this Notice for any updates. Any personal information we hold will be governed by the current privacy notice at the given time. If we make changes we consider to be important, we will communicate them to you.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Please note that this notice is addressed to customers and potential customers. If you are an RobotBulls employee, a contractor to RobotBulls or a third-party service provider, your personal information will be used in connection with your employment contract, your contractual relationship or in accordance with our separate policies which are available by contacting us.  
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Any reference to ‘us’, ‘our’, ‘we’ or ‘RobotBulls’ in this privacy notice is a reference to each group company within the RobotBulls Group as the context requires unless otherwise stated.  
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Similarly, any reference to ‘you’, ‘your’, ‘yours’ or ‘yourself’ in this privacy notice is a reference to any of our customers and potential customers as the context requires unless otherwise stated.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        By accessing our websites, including using any of the communication channels to contact us, we consider that you have read and understood the terms of this notice and how we process any information you disclose to us including personal data prior to becoming a client. Once you open an account with us you agree that this notice, including any amendments, will govern how we collect, store, use, share and in any other form process your personal data and your rights during our business relationship and after its termination.  
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        Who are we?    
                      </p>
                      <p className="text-[15px] text-gray-600 pt-2">
                        RobotBulls performs significant processing on behalf of the other entities of the RobotBulls group. Therefore if you are a customer of the non- European entities of the group we process your personal data in accordance with this notice and you are entitled to the same protection and rights mentioned in this notice.  
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        What kind of personal information do we collect and store?   
                      </p>
                      <p className="text-[15px] text-gray-600 pt-2">
                        As part of our business we collect personal data from customers and potential customers that include the following:  
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Name, Surname and contact details<br/>
                        Date of birth and gender<br/>
                        Information about your income and wealth including details about your assets and liabilities, account balances, trading statements, tax and financial statements
                        Profession and employment details<br/>
                        Location data<br/>
                        Knowledge and experience in trading, risk tolerance and risk profile<br/>
                        IP address, device specifications and other information relating to your trading experience<br/>
                        Bank account, e-wallets and credit card details<br/>
                        Details of your visits to our Website or our Apps including, but not limited to, traffic data, location data, weblogs and other communication data.  
                      </p>
                      <p className="text-[15px] text-gray-600 pt-2">
                        We use cookies to store and collect information about your use of our Website. Cookies are small text files stored by the browser on your equipment’s hard drive. They send information stored on them back to our web server when you access our Website. These cookies enable us to put in place personal settings and load your personal preferences to improve your experience. You can find out more about our cookies on our “Cookies Policy” available on our Website. 
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We also keep records of your trading behaviour, including a record of:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Products you trade with us<br/>
                        Historical data about the trades and investments you have made, including the amount invested<br/>
                        Your preference for certain types of products and services<br/>
                      </p>
                      <p className="text-[15px] text-gray-600 pt-4">
                        We are required by law to identify you if you are opening a new account or adding a new signatory to an existing account. Anti-money laundering laws require us to sight and record details of certain documents (i.e. photographic and non-photographic documents) to meet the standards, set under those laws. Identification documentation, as required under anti-money laundering legislation or other legislation relevant to the services we provide to you includes:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        (a) passport;<br/>
                        (b) driver’s licence;<br/>
                        (c) national identity card (if applicable);<br/>
                        (d) utility bills;<br/>
                        (e) trust deed (if applicable);<br/>
                        (f) a credit check on the individual; or<br/>
                        (g) other information we consider necessary to our functions and activities.<br/>
                      </p>
                      <p className="text-[15px] text-gray-600 pt-4">
                        If you are a corporate client we are required to collect additional information such as corporate documents of address, shareholders, directors, officers including additional personal information on the Shareholders and Directors. We have the right to ask any additional information we deem necessary to be compliant with our legal requirements.  
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We obtain this information in a number of ways through your use of our services and websites, the account opening applications, our demo sign up forms, webinar sign up forms, website cookies and similar tracking technology built into our Websites and Apps, subscribing to news updates and from information provided in the course of our ongoing relationship.                      </p>
                      <p className="text-[15px] text-gray-600">
                        We may also collect this information about you from third parties either through bought-in third party marketing lists, publicly available sources, social media platforms, introducing brokers and affiliates, bankers and credit card processors, subscription-based intelligence databases and other third-party associates.                      </p>
                      <p className="text-[15px] text-gray-600">
                        We may ask for other personal information voluntarily from time to time (for example, through market research, surveys or special offers). If you choose not to provide the information we need to fulfil your request for a specific product or service, we may not be able to provide you with the requested product or service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We may record any communications, electronic, by telephone, in person or otherwise, that we have with you in relation to the services we provide to you and our relationship with you. These recordings will be our sole property and will constitute evidence of the communications between us. Such telephone conversations may be recorded without the use of a warning tone or any other further notice.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Further, if you visit any of our offices or premises, we may have CCTV which will record your image.
                      </p>    
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        Who may we disclose personal information to?
                      </p> 
                      <p className="text-[15px] text-gray-600">
                        As part of using your personal information for the purposes set out above, we may disclose your information to:
                      </p> 
                      <p className="text-[15px] text-gray-600">
                        other companies within the RobotBulls group who provide financial and other services;<br/>
                        third party apps providers when you use our apps, communication systems and trading platforms which are provided to us by third parties;<br/>
                        service providers and specialist advisers who have been contracted to provide us with services such as administrative, IT, analytics and online marketing optimization, financial, compliance, insurance, research or other services;<br/>
                        introducing brokers and affiliates with whom we have a mutual relationship;<br/>
                        Payment service providers and banks processing your transactions;<br/>
                        auditors or contractors or other advisers auditing, assisting with or advising on any of our business purposes;<br/>
                        courts and tribunals<br/>
                        any third-party where such disclosure is required in order to enforce or apply our Terms and Conditions of Service or other relevant agreements;<br/>
                        anyone authorised by you.<br/>
                      </p>  
                      <p className="text-[15px] text-gray-600 pt-12">
                        We endeavour to disclose to these third parties only the minimum personal data that is required to perform their contractual obligations to us. Our third-party service providers are not permitted to share or use personal data we make available to them for any other purpose than to provide services to us.
                      </p> 
                      <p className="text-[15px] text-gray-600">
                        Our websites or our apps may have links to external third-party websites. Please note, however, that third party websites are not covered by this privacy notice and those sites are not subject to our privacy standards and procedures. Please check with each third party as to their privacy practices and procedures.
                      </p>   
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                          When and how do we obtain your consent?
                      </p>            
                      <p className="text-[15px] text-gray-600">
                        We may process your personal data for one or more lawful bases of processing (“Lawful Basis”) depending on the specific purpose for which we are using your data.
                      </p> 
                      <p className="text-[15px] text-gray-600">
                        The Lawful basis are the following:</p>    
                      <p className="text-[15px] text-gray-600">
                      to perform our contractual obligations towards you<br/>
                      to pursue our legitimate interests
                      </p>     
                      <p className="text-[15px] text-gray-600 pt-4">
                        Where our use of your personal information does not fall under one of these three Lawful basis we require your consent. Such consent shall be freely given by you and you have the right to withdraw your consent at any time by contacting us using the contact details set out in this privacy notice or by unsubscribing from email lists.
                      </p> 
                      <p className="text-[15px] text-gray-600">
                        We may use personal data provided by you through our website or otherwise and personal data provided during our business relationship to communicate with you for marketing promotional purposes as well as to provide you with market news and analytical reports. The channels used for such communications may include calling you, sending emails, notifications through your online account portal and sms notifications including push notifications. You have the right to opt out by using your online account portal or by sending an email to our DPO, at dpo@robotbulls.com using the registered email address you disclosed to us, in case you do not have access to your online portal account, or one has not been provided to you for any reason.
                      </p> 
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        Management of personal information.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We are committed to safeguarding and protecting personal data and will implement and maintain appropriate technical and organisational measures to ensure a level of security appropriate to protect any personal data provided to us from accidental or unlawful destruction, loss, alteration, unauthorised disclosure of, or access to personal data transmitted, stored or otherwise processed.                 
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We have appointed a Data Protection Officer to ensure that our management of personal information is in accordance with this privacy notice and the applicable legislation.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We require organizations outside the RobotBulls Group who handle or obtain personal information acknowledge the confidentiality of this information, undertake to respect any individual’s right to privacy and comply with all relevant data protection laws and this privacy notice.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        In brief, the data protection measures we have in place are the following:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        we train our employees who handle personal information to respect the confidentiality of customer information and the privacy of individuals
                        requiring our employees to use passwords and two-factor authentication when accessing our systems;<br/>
                        we apply Chinese walls and employees only have access to the personal data required for the purposes of the tasks they handle.<br/>
                        We apply data encrypting technologies during data transmission during internet transactions and client access codes transmitted across networks<br/>
                        employing firewalls, intrusion detection systems and virus scanning tools to protect against unauthorised persons and viruses entering our systems;<br/>
                        using dedicated secure networks or encryption when we transmit electronic data for purposes of outsourcing;<br/>
                        practising a clean desk policy in all premises occupied by us and our related bodies corporate and providing secure storage for physical records;<br/> and
                        employing physical and electronic means such as access cards, cameras and guards to protect against unauthorised access.<br/>
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        How do we store personal information and for how long?
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We hold personal information in a combination of secure computer storage facilities and paper-based files and other records and take steps to protect the personal information we hold from misuse, loss, unauthorised access, modification or disclosure.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        When we consider that personal information is no longer needed, we will remove any details that will identify you or we will securely destroy the records.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        However, we may need to maintain records for a significant period of time.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Where you have opted out of receiving marketing communications we will hold your details on our suppression list so that we know you do not want to receive these communications.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area (“EEA”). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers or Affiliate companies. We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        When we transfer your data to other third parties outside the EEA, we may in some cases rely on applicable standard contractual clauses, binding corporate rules, the EU-US Privacy Shield or any other equivalent applicable arrangements
                      </p>
                      <p className="text-[15px] text-gray-600">
                        If you would like a copy of such arrangements, please contact us using the contact details below
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        Your rights
                      </p>
                      <p className="text-[15px] text-gray-600">
                      Please note that these rights do not apply in all circumstances. You are entitled to:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        If you would like a copy of such arrangements, please contact us using the contact details below
                      </p>
                      <p className="text-[15px] text-gray-600">
                      ( a) request access to your personal data (commonly known as a “data subject access request”);
                      </p>
                      <p className="text-[15px] text-gray-600">
                        (b) request correction of the personal data that we hold about you;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        (c) request erasure of your personal data. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        (d) object to processing of your personal data where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        (e) request restriction of processing of your personal data. This enables you to ask us to suspend the processing of your personal data in the following scenarios:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        if you want us to establish the data’s accuracy;<br/>
                        where our use of the data is unlawful, but you do not want us to erase it;<br/>
                        where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims; or<br/>
                        you have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it;<br/>  
                      </p>
                      <p className="text-[15px] text-gray-600 pt-4">
                        (f) request the transfer of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information (i.e. not to hard copies) which you initially provided consent for us to use or where we used the information to perform a contract with you; and
                      </p>
                      <p className="text-[15px] text-gray-600">
                        (g) withdraw consent at any time where we are relying on consent to process your personal data.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Please complete the personal data request by email using the registered email address you disclosed to us, to the following email address: dpo@robotbulls.com.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We try to respond to all requests within 1 (one) month. Occasionally, it may take us longer than 1 (one) month if your request is particularly complex or you have made a number of requests. In this case, we will notify you within 1 (one) month of the receipt of your request and keep you updated.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We may charge you a reasonable fee when a request is manifestly unfounded, excessive or repetitive, or we receive a request to provide further copies of the same data. In this case we will send you a fee request which you will have to accept prior to us processing your request. Alternatively, we may refuse to comply with your request in these circumstances.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        What if you have a query or a complaint?
                      </p>
                      <p className="text-[15px] text-gray-600">
                        If you want to exercise your rights, please contact us by email at dpo@robotbulls.com using the registered email address you disclosed to us.                      </p>
                      <p className="text-[15px] text-gray-600">
                        We try to respond to all requests within 1 (one) month. Occasionally, it may take us longer than 1 (one) month if your request is particularly complex or you have made a number of requests. In this case, we will notify you within 1 (one) month of the receipt of your request and keep you updated.                      
                      </p>
                      <p className="text-[15px] text-gray-600">
                        If you are not satisfied with our response to your complaint, you have the right to lodge a complaint with our supervisory authorities, the Information Commissioner’s Office (ICO) if you are a client of RobotBulls UK Limited or the Cyprus Data Protection Commissioner if you are a client of any of the remaining RobotBulls Group entities. Alternatively, you also have the right to lodge a complaint with the data protection authority of your country of residence.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You can find details about how to do this on the following websites:
                      </p>
                      <a className="text-[15px] text-darkblue-550" target="_blank" href="https://ico.org.uk/concerns/">
                        https://ico.org.uk/concerns/
                      </a>
                      <a className="text-[15px] text-darkblue-550" target="_blank" href="http://www.dataprotection.gov.cy">
                        http://www.dataprotection.gov.cy
                      </a>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-4 mt-16 pb-8 container">
                  <div className="flex flex-row flex-wrap gap-5">
                    <p className="text-[13px] text-gray-500 hover:text-darkblue-550 cursor-pointer">Privacy and Policy</p>
                    <p className="text-[13px] text-gray-500 hover:text-darkblue-550 cursor-pointer">Terms and Condition</p>
                  </div>
                  <div className="">
                    <p className="text-[13px] text-gray-500">© 2024 TokenLite. All Right Reserved.</p>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default policy;
