import styles from '../pages/privacy-policy/styles.module.less';

export interface IPrivacyPolicyContents {
  className: string;
  content: string;
  isInnerHTML?: boolean;
}

export const privacyPolicyContents: IPrivacyPolicyContents[] = [
  {
    className: styles.fontL,
    content: `1. INTRODUCTION`,
  },
  {
    className: styles.fontS,
    content: `This Privacy Policy ("Policy") outlines the practices by which AELF Issuer Limited. ("Company", "we", "our", or "us"), collects, uses, and discloses information about you. This Policy applies when you access or use any application, website, or service (collectively, the "Platform") operated by the Company on FairyVault, engage with our customer support, interact with us on social media, or otherwise communicate with us.`,
  },
  {
    className: [styles.fontS].join(' '),
    content: `<b>A. Modifications to the Policy</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `We reserve the right to amend this Privacy Policy from time to time. Any updates will be communicated as required by applicable law, including revising the "Last Updated" date at the top of this Policy. In certain cases, additional notice may be provided, such as through a notice on the Platform or by contacting you directly. We encourage you to periodically review this Policy to stay informed about how we process your personal information and the choices available to you. By continuing to use our services after any updates become effective, you acknowledge and agree to the revised Policy.`,
  },
  {
    className: [styles.fontS, styles.link].join(' '),
    content: `This Privacy Policy forms an integral part of the FairyVault <a href='./terms-of-service' target='_blank'>Terms of Service</a> (the "Terms"). Capitalized terms used in this Policy but not defined herein shall have the meanings ascribed to them in the Terms. It is important that you read this Privacy Policy in conjunction with any other privacy or fair processing notices we may provide at the time we collect or process personal data about you, to fully understand how and why your data is being used. This Policy supplements other notices and legal agreements, including the Terms, and is not intended to override them.`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS].join(' '),
    content: `<b>B. Protection of Minors</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Our Platform is not intended for individuals under the age of 18, and we do not knowingly collect personal information from minors. If you believe we have inadvertently gathered data from a child under 18, please contact us at info@fairyvault.com, and we will take prompt action to delete such information.`,
  },
  {
    className: styles.fontL,
    content: `2. COLLECTION OF INFORMATION`,
  },
  {
    className: styles.fontS,
    content: `The types of personal information we collect are determined by your interaction with our services, and as required by applicable laws and regulations. We gather information you provide to us directly, information automatically collected when you use our services, and data obtained from third-party services or organizations. Below, we outline these categories in more detail:`,
  },
  {
    className: [styles.fontS].join(' '),
    content: `A. Information You Provide Directly`,
  },
  {
    className: styles.fontS,
    content: `We collect personal information that you provide when interacting with us or when using our Digital Wallet services. This may include, but is not limited to:`,
  },
  {
    className: styles.fontS,
    content: `• <b>Wallet Data:</b> When you connect to our Digital Wallet, we may collect your wallet address, wallet balance, historical or future transactions, and interactions with the blockchain.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Identity Information:</b> Including your first name, last name, username or similar identifier, date of birth, gender, and other personal identifiers.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Contact Information:</b> Such as your postal address, email address, and phone number.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Profile Information:</b> Including your username, password, preferences, feedback, and survey responses.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Financial Information:</b> This may include credit card or other payment method details used to facilitate transactions through our services.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Transactional Data:</b> Information relating to your transactions, such as the items purchased, the counterparty to the transaction, amounts paid, and the cryptocurrency used.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Communications:</b> We may collect personal data, such as your email address, phone number, or mailing address, during your interactions with us for support or other inquiries.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Surveys and Feedback:</b> If you participate in surveys or market research, we may collect personal information that you voluntarily provide.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Images and Multimedia:</b> This includes any photos, screenshots, or other images that you choose to upload or share during your use of our services.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Interactive Features:</b> Personal information you share through public forums, blogs, social media, or other interactive features of the platform. Please note that any information you make publicly available may not be protected under this Privacy Policy.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Contests and Sweepstakes:</b> We may collect personal information in connection with your participation in any contests, sweepstakes, or promotions we may offer, subject to legal requirements.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Events and Conferences:</b> We may gather personal information during your participation at events, trade shows, or conferences we host or attend.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Business Partnerships:</b> Personal information may also be collected from third parties in the course of assessing potential business development or partnership opportunities.`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS].join(' '),
    content: `B. Information Collected Automatically`,
  },
  {
    className: styles.fontS,
    content: `When you use our Services, certain information is automatically collected. This includes data related to your device, browsing actions, and patterns, as well as information about your interactions with our platform.`,
  },
  {
    className: styles.fontS,
    content: `• <b>Automatic Collection of Personal Information:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `   We may automatically gather information such as your Internet Protocol (IP) address, device type, browser type, operating system, mobile carrier, cookie identifiers, mobile advertising IDs, MAC address, and other unique device identifiers. We may also collect approximate location data derived from your IP address, as well as information related to your interactions with our services, including the pages visited, links clicked, content engaged with, and the frequency and duration of your activities on our platform.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Cookie Policy and Other Technologies:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `   We and third-party providers who supply content, advertising, or other services on our platform, may use cookies, pixel tags, and similar technologies (collectively, “Technologies”) to gather data automatically as you interact with our platform.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `      - <b>Cookies:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `         Cookies are small text files stored on your device through your browser, which help to improve user experience and store preferences.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `      - <b>Pixel Tags/Web Beacons:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `         Pixel tags (also known as web beacons) are small snippets of code embedded in our services, which enable us to track users’ interactions, such as whether they have visited specific pages or clicked on advertisements. We may also use these in emails to monitor whether they have been opened or acted upon.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Purpose of Technologies:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `      - <b>Operational Necessity:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `        Technologies that allow access to our Platform are essential for maintaining security, preventing fraud, and identifying irregular behaviors on our platform.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `      - <b>Performance Analytics:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `        We use certain technologies to assess the performance of our platform. These tools help us understand user behavior, allowing us to optimize our services (see <b>Analytics</b> section below).`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `      - <b>Functionality Enhancements:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `        Some technologies enable us to provide enhanced functionality, such as recognizing you upon login or remembering your preferences and interests.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Advertising and Analytics Tools:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `   We may collect information about your use of the platform through tools like Google Play’s Android Advertising ID and Apple iOS’s Advertising Identifier. This data is primarily used for advertising and analytics purposes, and is only associated with personally identifiable information where you have provided explicit consent. We respect your preferences regarding these technologies, and you can modify your settings at any time. For more information, you can contact us at info@fairyvault.com, Google, or Apple directly.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Social Media Platforms:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `   Our platform may incorporate social media widgets, such as a “share” button or other interactive elements provided by platforms like Discord. These features may collect personal information, including your IP address and the pages you visit on our platform. Please note that interactions with these features are governed by the privacy policies of the respective social media platforms.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontM,
    content: `C. Personal Information Collected from Other Sources`,
  },
  {
    className: styles.fontS,
    content: `We may also obtain personal information about you from various third-party services and sources, including public Blockchain data. For example, if you access our platform through a third-party application, or if our Platform interacts with third-party services such as protocols, app stores, third-party login services, or social networking sites, we may collect information from those third-party platforms in accordance with the privacy settings you have configured.`,
  },
  {
    className: styles.fontS,
    content: `• <b>Third-Party Services and Blockchain Data:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `   We may collect data from third-party services and organizations that provide personal information about you, including information available on public Blockchains. This includes, but is not limited to, your interactions with decentralized applications, wallet addresses, transaction histories, and other publicly available Blockchain data.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Use of Third-Party Logins and Applications:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `   If you use our platform to access third-party applications or services, such as logging in via social media platforms or using app store accounts, we may collect personal information that these third parties make available based on your consent and privacy settings on those platforms.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontM,
    content: `D. Updating your information`,
  },
  {
    className: styles.fontS,
    content: `If you wish to update any personal information you have provided to us, or if you believe that the data we hold is inaccurate, you may contact us directly at info@fairyvault.com. We will take reasonable steps to update or correct your information as promptly as possible, subject to any applicable legal or regulatory obligations.`,
  },
  {
    className: styles.fontL,
    content: `3. USE OF INFORMATION`,
  },
  {
    className: styles.fontS,
    content: `We use your personal information for various business purposes to deliver our services, manage administrative functions, and enhance our marketing efforts, all in compliance with applicable laws. Below, we detail how your personal data is utilized.`,
  },
  {
    className: styles.fontM,
    content: `A. Providing Our Services`,
  },
  {
    className: styles.fontS,
    content: `We process your personal information to fulfill our contractual obligations and provide you with access to our Platform. This includes:`,
  },
  {
    className: styles.fontS,
    content: `• managing and enhancing your user experience on our Platform;`,
  },
  {
    className: styles.fontS,
    content: `• enabling access to specific areas, functionalities, and features of our Platform;`,
  },
  {
    className: styles.fontS,
    content: `• interpreting your interactions with the blockchain through publicly available information;`,
  },
  {
    className: styles.fontS,
    content: `• responding to requests for customer service and technical support;`,
  },
  {
    className: styles.fontS,
    content: `• communicating important information regarding your account, service updates, and changes to policies;`,
  },
  {
    className: styles.fontS,
    content: `• processing applications if you apply for a job through our Platform; and`,
  },
  {
    className: styles.fontS,
    content: `• facilitating registrations for events, contests, or promotions.`,
  },
  {
    className: styles.fontM,
    content: `B. Administrative Purposes`,
  },
  {
    className: styles.fontS,
    content: `Your personal information may be used for various operational and administrative purposes, including:`,
  },
  {
    className: styles.fontS,
    content: `• pursuing legitimate business interests, such as research, development, and direct marketing;`,
  },
  {
    className: styles.fontS,
    content: `• protecting our Platform against malicious, fraudulent, or unlawful activities, and addressing security incidents;`,
  },
  {
    className: styles.fontS,
    content: `• measuring user engagement and interest in our Platform;`,
  },
  {
    className: styles.fontS,
    content: `• contextualizing and customizing advertisements to improve user experience;`,
  },
  {
    className: styles.fontS,
    content: `• enhancing the functionality of our Platform and developing new products;`,
  },
  {
    className: styles.fontS,
    content: `• verifying your identity and processing your requests under this Privacy Policy;`,
  },
  {
    className: styles.fontS,
    content: `• debugging and fixing technical issues to ensure service reliability;`,
  },
  {
    className: styles.fontS,
    content: `• auditing compliance with internal policies and external legal requirements;`,
  },
  {
    className: styles.fontS,
    content: `• sharing necessary information with trusted third parties to facilitate our Platform; and`,
  },
  {
    className: styles.fontS,
    content: `• enforcing our agreements, policies, and legal obligations.`,
  },
  {
    className: styles.fontM,
    content: `C. Marketing and Advertising`,
  },
  {
    className: styles.fontS,
    content: `We may use your personal information to personalize and deliver content, promotional materials, and advertisements that are relevant to your interests. These materials may be provided as permitted by applicable law. Should you have any concerns or questions regarding our marketing practices, you can contact us as outlined in the "Contact Us" section below.`,
  },
  {
    className: styles.fontM,
    content: `D. With Your Consent`,
  },
  {
    className: styles.fontS,
    content: `In certain situations, we may process your personal information with your explicit consent for purposes that are clearly communicated to you at the point of collection.`,
  },
  {
    className: styles.fontM,
    content: `E. Other Purposes`,
  },
  {
    className: styles.fontS,
    content: `We may also process your personal information for additional purposes at your request or as otherwise permitted by law. This includes:`,
  },
  {
    className: styles.fontS,
    content: `• <b>Automated Decision-Making:</b> We may engage in automated decision-making, including profiling, for purposes such as fraud detection. However, any decisions that significantly impact you will not be based solely on automated processing unless required by a contract, your consent, or as otherwise allowed by law.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>De-identified and Aggregated Information:</b> Your personal data may also be used to generate de-identified or aggregated information for analytical purposes, such as demographic insights or service usage trends.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontL,
    content: `4. DISCLOSURE OF INFORMATION`,
  },
  {
    className: styles.fontS,
    content: `We may disclose your personal information to third parties for various business purposes, including facilitating the delivery of our Services, ensuring the security of our operations, or during major corporate transactions such as mergers or acquisitions. The categories of third parties with whom we may share personal information and the circumstances under which disclosure may occur are outlined below.`,
  },
  {
    className: styles.fontM,
    content: `A. Disclosures to Provide Our Services`,
  },
  {
    className: styles.fontS,
    content: `To ensure the smooth provision and operation of our Platform, we may share personal information with the following categories of third parties:`,
  },
  {
    className: styles.fontS,
    content: `• <b>Service Providers:</b> We may share your personal information with third-party service providers that support the delivery of our Services. This includes entities that provide IT infrastructure, hosting, payment processing, customer support, and other essential functions.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Affiliates:</b> We may share your personal information with our corporate affiliates for internal administrative purposes, IT management, or to enhance the services offered to you via our Platform.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Other Users or Third Parties You Interact With:</b> Information about you may be published on public Blockchains, as our Platform interact with public ledger technology. This data, which may include wallet addresses and transaction details, is accessible to anyone, including individuals or entities not using our Platform. Additionally, in the context of promotions or airdrops, we may facilitate the sharing of personal information between you and third parties.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Advertising Partners:</b> We may share your personal information with third-party advertising partners. These partners may use technologies like cookies to track your interactions with our Services and deliver personalized advertisements across digital platforms. This practice, known as "interest-based" or "personalized" advertising, allows us to tailor marketing materials based on your interactions with our Platform.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>APIs/SDKs:</b> Our Platform may incorporate third-party application programming interfaces ("APIs") or software development kits ("SDKs") to provide enhanced functionality. For details about the specific APIs and SDKs we use, please refer to the "Contact Us" section below.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontM,
    content: `B. Disclosures to Protect Us or Others`,
  },
  {
    className: styles.fontS,
    content: `We may disclose your personal information to third parties if we believe such action is necessary to:`,
  },
  {
    className: styles.fontS,
    content: `• comply with legal obligations, including responding to court orders, subpoenas, or law enforcement requests;`,
  },
  {
    className: styles.fontS,
    content: `• protect the rights, property, or safety of you, us, or others;`,
  },
  {
    className: styles.fontS,
    content: `• enforce our terms and policies, or collect amounts owed to us;`,
  },
  {
    className: styles.fontS,
    content: `• assist with investigations or prosecutions related to suspected illegal activities or violations of our policies.`,
  },
  {
    className: styles.fontM,
    content: `C. Disclosures in the Event of a Merger, Sale, or Other Asset Transfers`,
  },
  {
    className: styles.fontS,
    content: `In the event of a corporate transaction such as a merger, acquisition, financing, reorganization, bankruptcy, or the sale of assets, your personal information may be transferred or sold as part of the transaction, to the extent permitted by applicable law and/or contract.`,
  },
  {
    className: styles.fontL,
    content: `5. SECURITY`,
  },
  {
    className: styles.fontS,
    content: `The Company is committed to ensuring the security of your personal information. We employ a combination of industry-leading physical, electronic, and administrative security measures to safeguard your data against accidental loss, unauthorized access, misuse, or alteration. These include but are not limited to:`,
  },
  {
    className: styles.fontS,
    content: `• <b>Encryption:</b> We use advanced encryption protocols, such as SSL (Secure Sockets Layer) for data in transit and AES-256 (Advanced Encryption Standard) for data at rest, to protect sensitive information.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Secure Servers:</b> Our servers are designed with secure architecture and are continuously monitored to detect potential vulnerabilities and ensure compliance with current security standards.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Password Protection:</b> If you are provided with login credentials to access certain sections of our platform, it is your responsibility to maintain the confidentiality of this information. We strongly advise against sharing your password with anyone and encourage you to use unique, strong passwords for enhanced security.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Access Control:</b> We restrict access to personal data to authorized employees, contractors, and third-party agents who require access to perform their duties. All personnel with access to personal data are bound by confidentiality obligations and will only process data based on our instructions.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Incident Response:</b> We have implemented robust incident response protocols to address any suspected data breaches swiftly. In the event of a breach that could impact your personal information, we will notify you and any relevant regulatory authorities as required by law.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontL,
    content: `6. INTERNATIONAL DATA TRANSFERS`,
  },
  {
    className: styles.fontS,
    content: `As a global Platform, the Company and/or FairyVault may transfer, process, and store your personal data in various jurisdictions around the world, including but not limited to the United States, Europe, Singapore, and other locations. These regions may have different data protection regulations than your home country. Regardless of where your data is processed, we are committed to ensuring that it is treated in accordance with the applicable legal standards.`,
  },
  {
    className: styles.fontS,
    content: `For data originating in regions with stringent data protection laws, such as the European Economic Area (EEA), the United Kingdom, Singapore, or Switzerland, we implement appropriate safeguards to ensure the continued protection of your personal information during international transfers. This includes relying on legally recognized mechanisms such as:`,
  },
  {
    className: styles.fontS,
    content: `• <b>Standard Contractual Clauses (SCCs):</b> Where applicable, we may use EU-approved SCCs or their equivalent to facilitate the lawful transfer of personal data.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>The Personal Data Protection Act (PDPA) of Singapore:</b> For transfers involving data governed by Singapore's PDPA, we comply with all applicable regulations outlined by the Personal Data Protection Commission of Singapore.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Adequacy Decisions:</b> In cases where data is transferred to countries that have not been formally recognized as having adequate levels of protection, we ensure that additional protective measures are applied.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `We continuously monitor and update our practices to remain compliant with evolving data privacy frameworks and ensure that your personal information remains protected, regardless of location.`,
  },
  {
    className: styles.fontL,
    content: `7. YOUR RIGHTS AND CHOICES`,
  },
  {
    className: styles.fontS,
    content: `As a data subject, you are entitled to a range of rights concerning your personal data. Below is a summary of your key rights, along with instructions on how you can exercise them.`,
  },
  {
    className: styles.fontM,
    content: `A. Right of Access`,
  },
  {
    className: styles.fontS,
    content: `You have the right to request access to the personal data we hold about you. Commonly referred to as a "subject access request," this right allows you to obtain a copy of the personal data we process, enabling you to ensure its accuracy and lawfulness.`,
  },
  {
    className: styles.fontS,
    content: `• This right applies exclusively to your personal data and does not extend to data relating to other individuals or documents that are unrelated to your personal information.`,
  },
  {
    className: styles.fontS,
    content: `• You can submit a request by contacting us directly at the details provided in this policy. While no specific form is required, it is important that you specify your request is a subject access request to avoid delays.`,
  },
  {
    className: styles.fontM,
    content: `B. Right to Rectification and Erasure`,
  },
  {
    className: styles.fontS,
    content: `• <b>Rectification:</b> You may request that we correct any inaccuracies in the personal data we hold about you. We may ask you to verify new information and may undertake checks to ensure its accuracy before making updates.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Erasure ("Right to be Forgotten"):</b> You may request that we delete personal data where you believe retention is no longer necessary. However, please be aware that it may not be possible to erase certain data due to legal obligations or technical limitations, such as data recorded on public blockchains (e.g., usernames, transaction history). In cases where data cannot be erased for these reasons, we will inform you and provide the rationale.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• To request rectification or erasure, contact us using the details provided, specifying the nature of your request.`,
  },
  {
    className: styles.fontM,
    content: `C. Right to Restrict Processing`,
  },
  {
    className: styles.fontS,
    content: `You have the right to request the restriction of processing under the following circumstances:`,
  },
  {
    className: styles.fontS,
    content: `• If you contest the accuracy of your personal data while we verify its correctness.`,
  },
  {
    className: styles.fontS,
    content: `• If the data processing is unlawful, but you oppose erasure and request restriction instead.`,
  },
  {
    className: styles.fontS,
    content: `• If we no longer require your personal data for processing, but you need the data for establishing, exercising, or defending legal claims. If we believe there is a valid legal reason to continue processing, we will notify you at the time of response.`,
  },
  {
    className: styles.fontM,
    content: `D. Right to Data Portability`,
  },
  {
    className: styles.fontS,
    content: `You may request the transfer of specific personal data, which is processed by automated means, to a third party in a commonly used, machine-readable format. While this right typically applies to certain types of data, we will review any requests and respond accordingly.`,
  },
  {
    className: styles.fontM,
    content: `E. Right to Object to Processing`,
  },
  {
    className: styles.fontS,
    content: `Where we process your personal data based on legitimate interests, you have the right to object if you believe this impacts your fundamental rights and freedoms. If we determine that there are compelling legitimate grounds to continue processing, we will inform you.`,
  },
  {
    className: styles.fontM,
    content: `F. Right to Stop Receiving Communications`,
  },
  {
    className: styles.fontS,
    content: `You have the right to ask us to stop sending you marketing or other non-essential communications. You can exercise this right by contacting us at any time using the details provided in this Privacy Policy.`,
  },
  {
    className: styles.fontM,
    content: `G. Right to Object to Automated Decision-Making and Profiling`,
  },
  {
    className: styles.fontS,
    content: `You have the right to be informed about and object to automated decision-making processes, including profiling, where these processes have a legal or similarly significant impact on you. You are entitled to request meaningful information about the logic involved and the potential consequences of such processing.`,
  },
  {
    className: styles.fontM,
    content: `H. Right to Withdraw Consent`,
  },
  {
    className: styles.fontS,
    content: `Where we rely on your consent to process your personal data, you may withdraw your consent at any time. This will not affect the lawfulness of processing carried out prior to the withdrawal. If you withdraw consent, we may be unable to provide certain services to you. We will notify you if this is the case.`,
  },
  {
    className: styles.fontM,
    content: `I. Exercising Your Rights`,
  },
  {
    className: styles.fontS,
    content: `To exercise any of the rights listed above, please contact us using the contact details provided in this policy. To ensure security and to verify your identity, we may request additional information, such as copies of identification documents. Clearly specify which right you wish to exercise and provide sufficient details to facilitate the request. If additional information is needed, we will inform you and explain any delays in processing your request.`,
  },
  {
    className: styles.fontL,
    content: `8. RESTRICTION OF SERVICES TO INDIVIDUALS BELOW AGE OF 13`,
  },
  {
    className: styles.fontS,
    content: `Our Platform is not intended for individuals under the age of 13 in the United States or under the age of consent in other relevant jurisdictions, including but not limited to Singapore, Canada, and the European Union. We do not knowingly collect personal information from children.`,
  },
  {
    className: styles.fontS,
    content: `If you are a parent or guardian and believe that your child may have submitted personal information without your consent, please contact us immediately as detailed in the "Contact Us" section below.`,
  },
  {
    className: styles.fontS,
    content: `In compliance with applicable laws, if we become aware that we have inadvertently collected personal information from a child without appropriate consent, we will promptly take steps to delete such data from our records, unless we are legally required to retain it.`,
  },
  {
    className: styles.fontL,
    content: `9. OTHER PROVISIONS`,
  },
  {
    className: styles.fontS,
    content: `<b>A. Third-Party Websites/Applications:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Our Platform may include links to third-party websites, applications, or services that are not operated or controlled by us. These third-party platforms may also reference or link to our Platform. We do not endorse, monitor, or have control over the privacy practices or content of these third-party services, and their privacy policies may differ from ours. We encourage you to review the privacy policies of any websites or applications you interact with, as providing personal information to these third-party services is done at your own risk.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `<b>B. Supervisory Authority:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Your personal information is subject to the applicable data protection laws of certain jurisdictions. If you believe that our processing of your personal information violates applicable data protection laws, you have the right to lodge a complaint with a supervisory authority in your jurisdiction. This includes:`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• Singapore:<a href='https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act' target='_blank'>Personal Data Protection Commission Singapore</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• Canada: <a href='https://www.state.gov/bureaus-offices/under-secretary-for-management/bureau-of-administration/privacy-office' target='_blank'>Privacy Office. U.S. DEPARTMENT of STATE</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• United States: <a href='https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda' target='_blank'>Office of the Privacy Commissioner of Canada</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• Australia: <a href='https://www.oaic.gov.au' target='_blank'>Office of the Australian Information Commissioner</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• Brazil: <a href='http://www.gov.br/anpd/pt-br' target='_blank'>Autoridade Nacional de Proteção de Dados (ANPD)</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• European Economic Area (EEA): <a href='https://edpb.europa.eu/about-edpb/about-edpb/members_en' target='_blank'>EEA Data Protection Authorities (DPAs)</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• Switzerland: <a href='https://www.edoeb.admin.ch/edoeb/en/home/deredoeb/kontakt.html' target='_blank'>Swiss Federal Data Protection and Information Commissioner (FDPIC)</a>`,
    isInnerHTML: true,
  },
  {
    className: [styles.fontS, styles.link].join(' '), // link
    content: `• United Kingdom: <a href='https://ico.org.uk/global/contact-us' target='_blank'>UK Information Commissioner's Office (ICO)</a>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontL,
    content: `10. CONTACT DETAILS`,
  },
  {
    className: styles.fontS,
    content: `If you have any questions or concerns regarding this Privacy Policy, or if you wish to exercise any of your rights outlined above, please contact us using the following details:`,
  },
  {
    className: styles.fontS,
    content: `<b>Email:</b> info@fairyvault.com`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `<b>Team:</b> FairVault Support Team`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `We are committed to addressing your inquiries promptly and ensuring that your rights are respected in accordance with applicable laws. `,
  },
];

export const privacyPolicyPageData = {
  metaTitle: 'FairyVault Privacy Policy',
  pageTitle: 'Privacy Policy',
  pageUpdateTime: 'Last Updated: 12 March, 2025.',
  logo: {
    src: '/logo.svg',
    width: 180,
    height: 54,
    alt: 'FairyVault Logo',
  },
  content: privacyPolicyContents,
};
