import React, { useContext, useEffect, useState } from "react";

function terms() {
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

          <div className="w-full flex justify-center items-center pt-32 pb-16 px-4 text-darkblue-850 text-[20px] md:text-[32px] lg:text-[42px] font-thin">Terms of Service</div>

          <div className="w-full h-full container">
            <div className="flex container h-full justify-center lg:gap-10">
              <div className="flex flex-col w-full gap-10 mb-8">
                <div className="flex flex-col bg-white w-full p-5 rounded-2">
                  <div className="flex flex-col w-full gap-4 px-4 pt-6">
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        TERMS OF SERVICE
                      </p>
                      <p className="text-[15px] text-gray-600">
                        These terms of service (“Terms”) cover your use (“you”, “Customer”) and access to our services, client software and websites (collectively as “Services”) effective January 1, 2019.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        By accepting these Terms, either by registering on our web sites, registering for a free trial or purchase of one of our subscriptions, clicking a box indicating your acceptance or by executing an order form or any other documentation that references this agreement, you agree to the terms of this agreement. If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions, in which case the terms “you” or “your” shall refer to such entity and its affiliates. If you do not have such authority, or if you do not agree with these terms and conditions, you must not accept this agreement and may not use the services.  
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Our Privacy Policy explains how we collect and use your information when using our Services. By using our Services, you are agreeing to be bound by these Terms and our Privacy Policy.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Our Data Processing Agreement (DPA) is an extension of the Terms and explains our role as a Data Processor and our mutual obligations and responsibilities.  By using our Services, you are agreeing to be bound by these Terms and the DPA.  
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        UPDATES TO TERMS OF SERVICE
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls reserves the right to update and change the Terms of Service at any time without notice. All new features that augment or enhance the current Service, including the release of new tools and resources, shall be subject to the Terms of Service. Continued use of the Service after any such changes shall constitute your consent to said changes.                      </p>
                      <p className="text-[15px] text-gray-600">
                        The Terms of Service set forth the entire understanding between you and RobotBulls as to the Service, and supersedes any prior agreements between you and RobotBulls (including, but not limited to, prior versions of the Terms of Service).
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        SERVICES
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Our services allow Customer to:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        store data that you chose to transfer to our databases and servers,<br/>
                        edit, transform, combine, modify data to build additional views or data<br/>
                        create reports and dashboards of the supplied data and<br/>
                        publish the reports and dashboards along with the data to other users or the public.<br/>
                      </p>
                      <p className="text-[15px] text-gray-600 pt-4">
                        We may remove, temporarily halt, modify, and add any and all services without prior notice to you.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Your use of the Service, including any content, information, or functionality contained within it, is provided “as is” and “as available” with no representations or warranties of any kind, either expressed or implied, including but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. You assume total responsibility and risk for your use of this Service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Our services allow the archival or removal of data at certain time intervals and depending on the subscription level. RobotBulls is not responsible for any loss of data nor should it be considered a backup for critical data.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You can select different types of subscription and each may have different features and functionality that may change over time.
                      </p>
                      <p className="text-[15px] text-gray-600">
                      a) Personal, Free, Trial Subscriptions
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls may offer subscriptions that allow limited use of the service in functionality or duration. Users of these subscriptions may be subject to advertisement, limited functionality, and reduction of services and/or limits in data capacity.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        These subscriptions can be removed to free up space for other accounts if not actively used over a certain duration of time.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        These subscriptions can be cancelled at any time and without warning if these Terms are violated.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        b) Not for Profit or Academic Use Only Subscriptions
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls may offer subscriptions for free or at a reduced cost that allows academic and not for profit organizations use of our Services with limited functionality.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Users of this subscription may be subject to advertisement, limited functionality, and reduction of services and/or limits in data capacity unless there are paying components to their subscription.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        These types of accounts can be removed to free up space for other accounts if not actively used over a certain duration of time.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        c) Paid Subscriptions
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls offers paid services that allow use of the service. Users of this service will have different capabilities depending on the level of subscription.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        There are different levels of service depending on the level and agreement between Customer and RobotBulls.  In general, lower tier levels have less performance, storage and capabilities than higher tiers, however these can change over time and can be overridden or modified on a case by case basis.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        d) Early Adopter Functionality
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We sometimes release products and features that we are still testing and evaluating. Those Services have been marked beta, preview, early access, or evaluation (or with words or phrases with similar meanings) and may not be as reliable as other services.  Please use them at own risk.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        SOFTWARE
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Some of our Services allow you to download client software (“Software”) which may update automatically. So long as you comply with these Terms, we give you a limited, nonexclusive, nontransferable, revocable license to use the Software, solely to access the Services. To the extent any component of the Software may be offered under an open source license, we’ll make that license available to you and the provisions of that license may expressly override some of these Terms. Unless the following restrictions are prohibited by law, you agree not to reverse engineer or decompile the Services, attempt to do so, or assist anyone in doing so.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        CONTENT
                      </p>
                      <p className="text-[15px] text-gray-600">
                        When you use our Services, you are able to store files and data as well as meta data (“Content”). These Terms do not give us the right to access, use or distribute your Content unless needed to provide the Service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Our Services also provide you with features such as searching, detection of meta data, or linking. These and other features may require our systems to access, store and scan the Content. You give us permission to do those things, and this permission extends to our affiliates and trusted third parties we work with.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Our Services let you share your Content with others via dashboards and data Live Links and similar features. We do publish on your behalf nor do we control the recipients of your Content.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        ACCEPTABLE USE
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The following outlines actions that constitute a non-acceptable use of our Service and will result in immediate cancellation and removal of your account and all of its contents from our Service without warning, notification, reimbursement or credit for any amounts already paid.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services to encourage any illegal, abusive or other activities that interfere with the business or activities of RobotBulls and/or other customers.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Attempting to bypass or break any security mechanism on any of the Services or using the Services in any other manner that poses a security or service risk to RobotBulls or any of its users.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Reverse engineering the Services in order to find limitations, vulnerabilities, or evade filtering capabilities.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services in any manner that may subject RobotBulls or any third party to liability, damages or danger.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Launching or facilitating, whether intentionally or unintentionally, a denial of service attack on any of the Services or any other conduct that adversely impacts the availability, reliability, or stability of the Services.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Transmitting any material that contains viruses, trojan horses, worms or any other malicious, harmful, or deleterious programs.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services to engage in or in connection with fraudulent activity.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services contrary to any privacy policy including but not limited to HIPAA, PIPEDA and GDPR.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Taking any action to participate in, encourage or promote any activity prohibited under this Terms of Service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the service to mass email or spam third parties without their consent or not in accordance to CAN-SPAM and similar guides.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services to store or transmit any material that infringes the intellectual property rights or other rights of third parties.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services to store or transmit any material that is libelous, defamatory, discriminatory, or otherwise malicious or harmful to any person or entity.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Using the Services, or any component of the Services, in any manner not authorized by RobotBulls.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Impersonate other users without permission, or access any area of the platform not allowed to access.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You and Your Company are responsible for your conduct and Content and you must comply with all terms of acceptable use above.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We may review your conduct and content for compliance with these Terms.  With that said, we have no obligation to do so.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Please safeguard your password to the Services, make sure that others don’t have access to it, and keep your account information current.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Finally, our Services are not intended for and may not be used by people under the age of 13. By using our Services, you are representing to us that you are over 13.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        COMMUNICATION
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You must provide your full legal name, a valid email address, and other information as required in order to complete the sign up and activation process. Invalid email addresses, names or company information are not an acceptable use of the Services.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Irrespective of our Privacy Policy, and in order to provide the Service to you, RobotBulls may communicate with you via email or telephone regarding your account, updates, news, and other issues related to your account.   Please refer to our Privacy Policy for additional information.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You are responsible for maintaining the security of your account and password. RobotBulls will never request your password nor will it provide your password via e-mail or any other channels of communication.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        SERVICE AVAILABILITY
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls will strive to make the Service available 99.5% of the year but does not warrant to do so unless otherwise documented via an Enterprise Customer contract overriding these Terms.
                      </p>
                      <p className="text-[15px] text-gray-600">
                      RobotBulls will not be responsible for any loss of data, business, revenue or property due to service lack of availability.Unexpected failures caused by third parties including Microsoft Azure, OVH, Amazon, and Google used by our infrastructure as well as any software or service that we connect to do not count towards our service availability metrics.
                      </p>
                      <p className="text-[15px] text-gray-600">
                      Upon request we may provide at our discretion more details into the interuption of service in the form of a Service Interruption Report (SIR).  A SIR may be issued in a limited manner or not at all  if containing security sensitive and/or proprietary information.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        SERVICE SUPPORT
                      </p>
                      <p className="text-[15px] text-gray-600">
                      RobotBulls strives to provide support to all Customers within an acceptable amount of time but does not warrant to do so unless otherwise documented via a specific Service Level Agreement contract overriding these all or portions of the Terms.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                      TERMINATION
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You’re free to stop using our Services at any time. We also reserve the right to suspend or end the Services at any time at our discretion and without notice. For example, we may suspend or terminate your use of the Services if you’re not complying with these Terms, or use the Services in a manner that would cause us legal liability, disrupt the Services or disrupt others’ use of the Services.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Except for paid subscriptions, we reserve the right to terminate and delete your account if you haven’t accessed our Services after a certain duration of time.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls will provide you with notice via the email address associated with your account before we do so. We are not responsible for proper reception of the email due to spam, rules, firewall or disabling notifications.We reserve the rights to accept or refuse a Customer.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We have the sole discretion on whether to allow you to register, renew, change plan, or use our services.To cancel an account, you must contact RobotBulls staff directly via email or telephone.  Please use email address info@robotbulls.com to cancel your account.Your Paid subscription will remain in effect until (i) you cancel it, or (ii) it is terminated under these Terms or (iii) payment is not made at the end of each renewal payment cycle.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Cancellation of the account is immediate and will result in permanent loss of data.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls is not able to restore the account past a certain duration of time, nor recover any of its data.No credit or refunds will be made in case of a Customer initiated Cancellation prior to the end of the Billing Period/Subscription duration.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                      DOWNGRADE
                      </p>
                      <p className="text-[15px] text-gray-600">
                      Certain subscriptions can be downgraded to a lower tier provided that the subscription is not currently exceeding usage limits or features available only in their current subscription level.Subscriptions that do not meet the requirements for the target subscription level will remain at their current subscription.
                      </p>
                      <p className="text-[15px] text-gray-600">
                      It is not the responsibility of RobotBulls to ensure that the requirements are met prior to changing the subscription.Downgrades must be modified prior to the end of the billing cycle and will be effective immediately at time of modification.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        No refunds or credit will be given for subscriptions that remain at their subscription level due to exceeding the usage limits of the desired subscription level.No refunds or credit will be given for unused pre-paid features or limits added to the initial subscription level.Loss of data and functionality may occur when downgrading subscriptions so please be careful prior to downgrading.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Some subscriptions levels can’t be downgraded only cancelled.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        UPGRADE
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Addition of options or upgrades causing an increase in rates are charged to your credit card and are effective immediately.Not all subscriptions levels can be upgraded or can have their options modified.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        PRICING AND PAYMENT
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Prices of all Services, including but not limited to subscription plan fees to the Service, are subject to change without notice from us.  Having said the above, we will attempt to notify all Customers at least 30 days before via email.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Acceptable payment methods are by bank transfer, credit card or PayPal. Payment by bank check on agreement by both parties only.   All other payment methods will be declined and constitute non-payment.If paying by credit card or PayPal and depending on your location your payment will be processed either by a US payment processor or a European payment processor.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You are responsible for all applicable taxes, bank fees, transfer fees, credit card fees, currency exchange fees, federal, regional, state, local taxes or any surcharges and similar exactions imposed on or with respect to our Services.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        For purposes of this section, taxes do not include any taxes that are imposed on or measured by the net income, property tax or payroll taxes of RobotBulls.You must notify us in writing if you dispute any portion of any fees paid or payable by you under this Agreement.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You must provide that written notice to us within sixty (60) days of the applicable charge and we will work together with you to resolve the applicable dispute promptly.   If you do not provide us with this written notice of your fee dispute within this period, you will not be entitled to dispute any fees paid or payable by you.If your use of our Services exceeds the amounts prepaid by you or of if you fail to pay any amounts due by you, we may suspend our Services associated with your account without prior notice to you.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We will have no liability for any damage, liabilities, losses (including any loss of data or profits) or any other consequences that you may incur with connection with any suspension of our services pursuant to this section.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        If service fees are not paid in a timely manner or we are unable to process your transaction using the credit card information provided or using an alternative payment method, we reserve the right to revoke access to your account or to downgrade your account to a free account which may result in loss of data and/or features.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        COPYRIGHT AND OWNERSHIP
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls owns the intellectual property rights to all protectable components of the Service, including but not limited to the name of the Service, artwork and end-user interface elements contained within the Service, many of the individual features, and the related documentation.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        We welcome your feedback on our Services however by submitting suggestions or other feedback about our Services (“Contributions”) you agree that:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        we are not under any obligation of confidentiality with respect to your Contributions;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        we may use or disclose (or choose not to use or disclose) your Contributions for any purpose and in any way;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        you irrevocably, non-exclusively license to us rights to exploit your Contributions; and
                      </p>
                      <p className="text-[15px] text-gray-600">
                        you are not entitled to any compensation or reimbursement of any kind from us under any circumstances for your Contributions.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        You may not copy, modify, adapt, reproduce, distribute, reverse engineer, decompile, or disassemble any aspect of the Service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls claims no intellectual property rights over the Content you upload or provide to the Service.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        TRADEMARKS AND LOGOS
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Subject to these Terms, we both grant each other the right to use and display each other’s name and logo (the Licensor Marks) on our respective websites and in other promotional materials solely in connection with each of our respective activities under these Terms.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        All of this use of the Licensor Marks will be in accordance with each other’s applicable usage guidelines and will insure to the benefit of Licensor.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The one of us using the other’s Licensor Marks under this subsection will not use, register or take other action with respect to any of the Licensor Marks, except to the extent allowed in advance in writing by the one of us whose Licensor Marks are being used.In using the Licensor Marks under this subsection, the one of us using the other’s Licensor Marks will always use the then current Licensor Marks and will not add to, delete from or modify any of Licensor Marks.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The one of us using the other’s Licensor Marks will not, at any time, misrepresent the relationship between us.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The one using the other’s Licensor Marks will not present itself as an affiliate or other legal agent of the one of us whose Licensor Marks are being used.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The rights to use and display each other’s Licensor Marks under this subjection will end automatically in the event these Terms terminate or if one of the parties requests to remove name and logos from websites or promotional materials.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        CONFIDENTIALITY
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Confidential Information means any information or data, regardless of whether it is in tangible form, disclosed by either party that is marked or otherwise designated as confidential or proprietary or that should otherwise be reasonably understood to be confidential given the nature of the information and the circumstances surrounding disclosure.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        “Confidential Information” does not include any information which:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        is publicly available through no fault of receiving party;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        was properly known to receiving party, without restriction, prior to disclosure by the disclosing party;
                      </p>
                      <p className="text-[15px] text-gray-600">
                        was properly disclosed to receiving party, without restriction, by another person without violation of disclosing party’s rights; or
                      </p>
                      <p className="text-[15px] text-gray-600">
                        is independently developed by the receiving party without use of or reference to the disclosing party’s Confidential Information.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Each party agrees that it will use the Confidential Information of the other party solely in accordance with the provisions of this Agreement and it will not disclose such information to any third party without the other party’s prior written consent, except as otherwise permitted hereunder.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Each party agrees to exercise due care in protecting the Confidential Information from unauthorized use and disclosure.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Each party may disclose the Confidential Information of the other party, in whole or in part to its employees, representatives, actual or potential investors and subcontractors who have a need to know and are legally bound to keep such information confidential consistent with the terms of this Section.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Either party may disclose the Confidential Information of the other party as required by law, upon prior written notice to the other party (where allowed by law); provided that such party will use its reasonable efforts to minimize such disclosure to the extent permitted by applicable law.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        LIMITED WARRANTY/LIMITATION OF LIABILITY
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The services are provided “as is” and as available. RobotBulls makes no express or implied warranties of any kind, including without limitation implied warranties of merchantability or fitness for a particular purpose.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        No communication between customer and RobotBulls, written or oral, will create a warranty or in any way alter or restrict any disclaimer of warranty or limitation of liability set forth in this section or elsewhere in this agreement.Under no circumstances will RobotBulls be liable for lost profits or other indirect, special, cover, exemplary, incidental, or consequential damages arising out of or related to this agreement or to the use or inability to use the service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        In no event will RobotBulls’s liability for damages, losses, or causes of action, whether in contract or tort, either jointly or severally, exceed the aggregate dollar amount paid by customer to RobotBulls during the twelve (12) months prior to the claimed injury or damage.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        The limitations of liability here described and in subsection (b) below apply equally to liability for negligence.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Without limiting the generality of the above, RobotBulls will have no liability for any claims or losses resulting from security breaches, exposure of sensitive or private data (except to the extent that applicable law forbids limitation of such liability), or loss of data or access to data.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        RobotBulls is not liable for the accuracy, truthfulness, or validity of any data entered by Customer or provided through the Service. RobotBulls will not be liable for interruption of or delays in transmission of the Service caused by acts of God, terrorism, fire, water, riots, acts of Government, acts or omissions of Internet backbone providers, or any other causes beyond RobotBulls’s control.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Customer’s sole and exclusive remedy, if it is dissatisfied with the Service or with any terms, conditions, rules, policies, guidelines, or practices of RobotBulls is to discontinue using the Service.
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Customer acknowledges and agrees that RobotBulls has set its prices and entered into this Agreement in reliance upon the limitations and exclusions of liability and disclaimers of warranty set forth in this section and elsewhere in this Agreement, (collectively, the “Limitations”), and that the Limitations form an essential basis of the bargain between RobotBulls and Customer. The Limitations survive and apply even if Customer’s remedies provided in this Agreement are found to have failed of their essential purpose.
                      </p>
                      <p className="text-[22px] pt-4 font-medium text-gray-600">
                        INDEMNIFICATION
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Customer will indemnify and hold harmless RobotBulls and its affiliates, employees, officers, directors, agents, licensors, successors, and assigns from all damages and liability, including without limitation attorneys’ fees, incurred as a result of:
                      </p>
                      <p className="text-[15px] text-gray-600">
                        Customer’s violation of its obligations under this Agreement,
                      </p>
                      <p className="text-[15px] text-gray-600">
                        the negligent or willful acts of Customer,
                      </p>
                      <p className="text-[15px] text-gray-600">
                        the violation by Customer of any third party’s rights in connection with the use or operation of the Service, including without limitation privacy rights, other property rights, trade secret, proprietary information, trademark, copyright, or patent rights, other intellectual property rights, and claims for libel, slander, or unfair trade practices.
                      </p>
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

export default terms;
