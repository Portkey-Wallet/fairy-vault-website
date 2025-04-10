import styles from '../pages/terms-of-service/styles.module.less';

export interface ITermsOfServiceContents {
  className: string;
  content: string;
  isInnerHTML?: boolean;
}

export const termsOfServiceContents: ITermsOfServiceContents[] = [
  {
    className: styles.fontS,
    content: `These FairyVault Terms of Service ("Terms") constitute a legal agreement between you ("User" or "you") and AELF Issuer Limited ("we," "us," or "Company") (the "Agreement"). These Terms apply when you access or use any application including decentralised applications ("DApps"), website, or service (collectively, the "Platform") operated by the Company on FairyVault, engage with our customer support, interact with us on social media, or otherwise communicate with us. By accessing or using FairyVault, including the FairyVault extension or FairyVault App, you agree to be bound by these Terms.`,
  },
  {
    className: styles.fontS,
    content: `<b>Please carefully review these Terms and all referenced documents before using FairyVault.</b> Pay particular attention to the section titled "Disclaimer and Limitation of Liability" and other sections that are emphasized in bold. It is crucial that you fully understand these Terms and assess the associated risks independently. WE DO NOT PROVIDE INVESTMENT OR FINANCIAL ADVICE OR CONSULTING SERVICES AND WE DO NOT ADVISE OR MAKE RECOMMENDATIONS ABOUT ENGAGING IN DIGITAL ASSET TRANSACTIONS OR OPERATIONS. DECISIONS TO ENGAGE IN TRANSACTIONS OR PERFORM OPERATIONS INVOLVING DIGITAL ASSETS SHOULD BE TAKEN ON YOUR OWN ACCORD.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontL,
    content: `1. CONFIRMATION AND ACCEPTANCE OF THESE TERMS`,
  },
  {
    className: styles.fontM,
    content: `A. Applicability`,
  },
  {
    className: styles.fontS,
    content: `These Terms, along with any other relevant documents referenced herein, govern your use of the FairyVault developed and owned by the Company. This Agreement does not apply to DApps developed by third parties.`,
  },
  {
    className: styles.fontM,
    content: `B. Acceptance of Terms`,
  },
  {
    className: styles.fontS,
    content: `By accessing or using any or all of the FairyVault, you expressly acknowledge that (i) you have read and understood these Terms; (ii) you agree to be bound by these Terms; and (iii) you are legally competent to enter into these Terms. If you do not agree to be bound by these Terms or any updates or modifications to these Terms, you may not access or use FairyVault. `,
  },
  {
    className: styles.fontM,
    content: `C. Modifications to these Terms`,
  },
  {
    className: styles.fontS,
    content: `The Company reserves the right to amend these Terms from time to time. Any updates will be communicated as required by applicable law, including revising the "Last Updated" date at the top of these Terms. In certain cases, additional notice may be provided, such as through a notice on the FairyVault or by contacting you directly. We encourage you to periodically review these Terms to stay informed about any such changes and decide whether or not to accept the revised version of these Terms. If you continue to use FairyVault following any update or modification of the Terms, you shall be deemed to have accepted the revised Terms. If you do not agree to the Terms or any update or modification to the Terms, you must cease to access or use our FairyVault. Our FairyVault and its related services evolve over time. We may change or discontinue all or any part of the FairyVault, at any time and without prior notice, and at our sole discretion. `,
  },
  {
    className: styles.fontM,
    content: `D. Privacy Policy`,
  },
  {
    className: [styles.fontS, styles.link].join(' '),
    content: `For an explanation on how we collect, use and disclose information from our users please see our <a href='./privacy-policy' target='_blank'>Privacy Policy</a>.You acknowledge and agree that your use of the FairyVault is subject to, and that we can collect, use and/or disclose your information (including any personal data you provide to us) in accordance with our Privacy Policy.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontM,
    content: `E. Eligibility`,
  },
  {
    className: styles.fontS,
    content: `To be eligible to use FairyVault: (i) you must be at least eighteen (18) years old and legally competent to enter into these Terms; (ii) you must not be a resident of sanctioned jurisdictions according to any trade embargoes, UN Security Council Resolutions (“UNSCR”) or HM Treasury’s financial sanctions regime; and (iii) you must not be currently the subject of or subject to economic sanctions such as the United Nations Security Council Sanctions List, the list of specially designated nationals maintained by OFAC, the denied persons or entity list of the U.S. Department of Commerce or any similar list maintained by any other relevant sanctions authority. If you are using our Services on behalf of a legal entity, you further represent and warrant that: (iv) the legal entity is duly organized and validly existing under the applicable laws of the jurisdiction of its organization; and (v) you are duly authorized by such legal entity to act on its behalf. You can only use our Services if permitted under the laws of your jurisdiction. For the avoidance of doubt, you may not use our Services if you are located in, or a citizen or resident of any state, country, territory or other jurisdiction where your use of our FairyVault would be illegal or otherwise violate any applicable laws. Please make sure that these Terms are in compliance with all laws, rules, and regulations that apply to you. You agree that you are only using our Services with legally-obtained funds that rightfully belong to you. By using FairyVault, you represent and warrant that you meet all eligibility requirements that we outline in these Terms. We may still refuse to let certain people access or use all or part of our FairyVault, however, and we reserve the right to change our eligibility criteria at any time.`,
  },
  {
    className: styles.fontL,
    content: `2. DEFINITIONS`,
  },
  {
    className: styles.fontM,
    content: `A. FairyVault:`,
  },
  {
    className: styles.fontS,
    content: `means the blockchain wallet developed by Company based on AElf blockchain system, including other supporting tools developed for users’ convenience of using blockchain systems.`,
  },
  {
    className: styles.fontM,
    content: `B. User:`,
  },
  {
    className: styles.fontS,
    content: `a) a User must be a natural person who possesses full capacity for civil acts;`,
  },
  {
    className: styles.fontS,
    content: `b) if you are under 18 years old, please use FairyVault under the guidance of your parents or legal representatives. If any person of no capacity for civil acts conducts any transactions on FairyVault or any person of limited capacity for civil acts conducts any transaction which is not commensurate with his/her civil rights or act capacity, the parents or legal representatives of the User shall be liable for the consequences of such transactions.`,
  },
  {
    className: styles.fontM,
    content: `C. PIN:`,
  },
  {
    className: styles.fontS,
    content: `means the pin you set to safeguard your assets when you sign up or log in. FairyVault, as a decentralized application, will not store your PIN on our servers, nor will it be stored on your own mobile devices. If you lose or forget your PIN, FairyVault will not be able to restore it for you.`,
  },
  {
    className: styles.fontM,
    content: `D. Alert:`,
  },
  {
    className: styles.fontS,
    content: `means the messages displayed on FairyVault’s operation interface which provides suggestions for Users on subsequent operations. `,
  },
  {
    className: styles.fontM,
    content: `E. Specific Users:`,
  },
  {
    className: styles.fontS,
    content: `means users who should cooperate with FairyVault and disclose Personal Information in order to comply with the laws, regulations and policies of his/her country of nationality and/or country of residence.`,
  },
  {
    className: styles.fontM,
    content: `F. Tokens:`,
  },
  {
    className: styles.fontS,
    content: `means the tokens which are supported by FairyVault currently. `,
  },
  {
    className: styles.fontM,
    content: `G. Personal Information:`,
  },
  {
    className: styles.fontS,
    content: `means information recorded in electronic or any other form which may identify a natural person when used alone or in combination with other information, including but not limited to name, date of birth, identity number, personal biological identification information, address, telephone number, bank card number, e-mail address, wallet address, mobile device information, operation record, and transaction record.`,
  },
  {
    className: styles.fontM,
    content: `H. Private Key/Seed Phrase:`,
  },
  {
    className: styles.fontS,
    content: `means the cryptographic private key or mnemonic seed phrase that grants control over your blockchain address and assets. FairyVault, as a decentralized application, does not store your private key or seed phrase on our servers. You are solely responsible for safeguarding this information. If you lose or forget your private key or seed phrase, FairyVault will not be able to restore access to your wallet or assets.`,
  },
  {
    className: styles.fontL,
    content: `3. SERVICES`,
  },
  {
    className: styles.fontM,
    content: `A. Wallet Creation and Access`,
  },
  {
    className: styles.fontS,
    content: `Users may create a new EOA wallet through FairyVault by generating a new cryptographic key pair, or import an existing wallet using a private key or seed phrase. Access to the wallet is exclusively controlled by possession of the corresponding private key or seed phrase.`,
  },
  {
    className: styles.fontM,
    content: `B. Transfer and Receive Tokens`,
  },
  {
    className: styles.fontS,
    content: `FairyVault enables the management of digital tokens through transfer and reception functionalities. Token transfers occur directly on the blockchain and involve the payer transferring tokens to the blockchain address of the payee. Please note that the actual transfer of tokens is executed on the blockchain network, not within FairyVault.`,
  },
  {
    className: styles.fontM,
    content: `C. Manage Tokens`,
  },
  {
    className: styles.fontS,
    content: `FairyVault allows users to add, manage, or remove tokens that are supported by the FairyVault.`,
  },
  {
    className: styles.fontM,
    content: `D. Browse DApps`,
  },
  {
    className: styles.fontS,
    content: `Users can explore and interact with services provided by DApps through FairyVault. This includes both DApps developed by the FairyVault team and those created by third parties.`,
  },
  {
    className: styles.fontM,
    content: `E. Transaction Records`,
  },
  {
    className: styles.fontS,
    content: `FairyVault may retain copies of your transaction records from the blockchain. However, users should refer to the blockchain network for the most current and accurate transaction records.`,
  },
  {
    className: styles.fontM,
    content: `F. Suspension of Services`,
  },
  {
    className: styles.fontS,
    content: `Transactions conducted via blockchain technology are irreversible. FairyVault cannot reverse or cancel transactions. Nonetheless, under specific circumstances, FairyVault reserves the right to suspend or restrict access to certain functionalities for individual users.`,
  },
  {
    className: styles.fontM,
    content: `G. Additional Services and Limitations`,
  },
  {
    className: styles.fontS,
    content: `<b>Users who use FairyVault must understand that:</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Users acknowledge and agree to the following:`,
  },
  {
    className: styles.fontS,
    content: `<b>i. Decentralized Nature</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `FairyVault operates on a decentralized model, distinct from traditional banking and financial institutions. FairyVault does not provide the following services:`,
  },
  {
    className: styles.fontS,
    content: `• Storage of private keys or seed phrases`,
  },
  {
    className: styles.fontS,
    content: `• Freezing of wallet addresses`,
  },
  {
    className: styles.fontS,
    content: `• Reporting the loss of private keys/seed phrases`,
  },
  {
    className: styles.fontS,
    content: `• Restoration of wallet access`,
  },
  {
    className: styles.fontS,
    content: `• Transaction rollbacks`,
  },
  {
    className: styles.fontS,
    content: `<b>ii. User Responsibility</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Users are solely responsible for securing their devices, backing up the FairyVault extension or app, and most critically, safeguarding their private keys or seed phrases. Unlike custodial services or account abstraction wallets, there is NO recovery mechanism if you lose your private key or seed phrase. FairyVault does not assist in recovering wallet access or rectifying mishandled transactions (e.g., incorrect addresses).`,
  },
  {
    className: styles.fontS,
    content: `<b>iii. Token Support</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `FairyVault does not support all tokens. Users should only handle tokens supported by FairyVault.`,
  },
  {
    className: styles.fontS,
    content: `<b>iv. FairyVault Role</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `FairyVault serves as a tool for managing on-chain identities and tokens. It is not an exchange or trading FairyVault. In this context, "transactions" refer solely to the transfer and reception of tokens, which differs from transactions conducted on exchanges or trading FairyVaults.`,
  },
  {
    className: styles.fontS,
    content: `<b>v. Third-Party DApps</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `FairyVault integrates with both FairyVault-developed and third-party DApps. FairyVault functions as a blockchain browser for third-party DApps. Users must exercise their own judgment regarding the risks of using third-party DApps and conducting transactions with them.`,
  },
  {
    className: styles.fontL,
    content: `4. YOUR RIGHTS AND OBLIGATIONS`,
  },
  {
    className: styles.fontM,
    content: `A. Wallet Creation and Access`,
  },
  {
    className: styles.fontS,
    content: `<b>i. Wallet Creation</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `You may create a new wallet through FairyVault by generating a cryptographic key pair, which provides you with a public address and a private key. Alternatively, you may import an existing wallet using your private key or seed phrase. Your private key or seed phrase is the sole means of controlling your wallet and accessing your assets on the blockchain.`,
  },
  {
    className: styles.fontS,
    content: `<b>ii. Wallet Backup</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Upon creating a wallet, you will be provided with a seed phrase that must be securely backed up. This seed phrase can be used to restore access to your wallet if you lose access to your device or the application. FairyVault will never store your private key or seed phrase, and we cannot recover them for you if lost.`,
  },
  {
    className: styles.fontS,
    content: `<b>iii. Wallet Access</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Access to your wallet requires your private key or seed phrase. Unlike account-based systems, there are no login credentials, password recovery options, or alternative authentication methods. You are solely responsible for maintaining the security and accessibility of your private key or seed phrase`,
  },
  {
    className: styles.fontS,
    content: `<b>iv. Identity Verification</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `To comply with applicable laws and regulations, certain users may be required to complete identity verification before using specific features of FairyVault. The verification process may require submission of personal information, such as name, identification number, phone number, and bank card details. Failure to complete the required verification may result in the inability to access certain features, and any losses incurred as a result of delayed verification are solely the user's responsibility.`,
  },
  {
    className: styles.fontS,
    content: `<b>v. Authorized Versions of FairyVault</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `FairyVault may release different versions of its application for different devices. Users must download and install the version compatible with their device. FairyVault cannot guarantee the security or functionality of any versions downloaded from unauthorized third-party sources. Any losses resulting from the use of unauthorized versions are borne by the user.`,
  },
  {
    className: styles.fontS,
    content: `<b>vi. Updates and Versioning</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `FairyVault reserves the right to discontinue the operation of older versions once a new version has been released. FairyVault does not guarantee the security or continued service support for outdated versions. Users are responsible for downloading and using the latest version.`,
  },
  {
    className: styles.fontM,
    content: `B. Use of FairyVault`,
  },
  {
    className: styles.fontS,
    content: `<b>i. Private Key and Seed Phrase Management</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Users are solely responsible for securely storing and managing their private keys or seed phrases. Unlike account abstraction wallets, EOA wallets like FairyVault have no social recovery or guardian system. If you lose your private key or seed phrase, there is NO mechanism to recover access to your wallet and assets.`,
  },
  {
    className: styles.fontS,
    content: `<b>ii. Alerts and Notifications</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Users agree to adhere to all alerts or notifications provided by FairyVault. Failure to follow these alerts may result in risks, liabilities, or losses, for which FairyVault is not responsible.`,
  },
  {
    className: styles.fontS,
    content: `<b>iii. Third-Party DApps</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `The Company does not conduct due diligence on the services or transactions provided by third-party decentralized applications (DApps) that may be accessible through FairyVault. Users are advised to make informed decisions when interacting with third-party services and assume all associated risks.`,
  },
  {
    className: styles.fontS,
    content: `<b>iv. Identity Verification Process</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `If the Company identifies irregular or suspicious activity or if there is any doubt about a user’s identity, users may be required to submit additional identification or verification documents. Users must cooperate with FairyVault’s verification process as required.`,
  },
  {
    className: styles.fontS,
    content: `<b>v. Transfer of Tokens</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• Users may be subject to daily limits on transfers, which may vary based on location, legal requirements, risk management, or verification status.`,
  },
  {
    className: styles.fontS,
    content: `• Blockchain operations are irreversible. Users are responsible for ensuring the accuracy of transfer details (e.g., wallet address, node servers). FairyVault is not liable for errors or mishandled transactions.`,
  },
  {
    className: styles.fontS,
    content: `• Reasons for potential failed transfers may include, but are not limited to:`,
  },
  {
    className: styles.fontS,
    content: `  - Insufficient wallet balance or transaction fees.`,
  },
  {
    className: styles.fontS,
    content: `  - Smart contract execution failures.`,
  },
  {
    className: styles.fontS,
    content: `  - Transfer amounts exceeding regulatory or FairyVault-imposed limits.`,
  },
  {
    className: styles.fontS,
    content: `  - Network or technical failures, including blockchain congestion.`,
  },
  {
    className: styles.fontS,
    content: `  - Identification of involved wallet addresses as high-risk, such as ICO or exchange addresses.`,
  },
  {
    className: styles.fontS,
    content: `• FairyVault serves solely as a tool for the transfer of tokens. Upon successful transfer execution, FairyVault’s obligations are considered fulfilled, and any resulting disputes fall outside of FairyVault’s responsibility.`,
  },
  {
    className: styles.fontS,
    content: `<b>vi. Legal Compliance</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `Users must comply with the laws and regulations of their country of nationality or residence when using FairyVault or its associated DApps.`,
  },
  {
    className: styles.fontS,
    content: `<b>vii. Notifications and Communication</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `The Company may send important notifications through various channels, including website announcements, emails, text messages, push notifications, or pop-up alerts. Users are responsible for timely reviewing and acknowledging these communications.`,
  },
  {
    className: styles.fontS,
    content: `<b>viii. Fees and taxes</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• Users are responsible for paying any transaction fees imposed by the relevant blockchain network when transferring tokens.`,
  },
  {
    className: styles.fontS,
    content: `• In some cases, transaction failures may occur due to network instability, yet blockchain fees may still be charged.`,
  },
  {
    className: styles.fontS,
    content: `• Users are responsible for paying all applicable taxes and other charges arising from transactions conducted through FairyVault.`,
  },
  {
    className: styles.fontS,
    content: `• When sending transactions through FairyVault, you are responsible for setting appropriate gas fees. Lower gas fees may result in delayed transactions or transaction failures. FairyVault may provide suggested gas fees but cannot guarantee that these suggestions will result in optimal transaction processing times. You acknowledge that you understand the concept of gas fees on the blockchain and accept full responsibility for transaction management.`,
  },
  {
    className: styles.fontL,
    content: `5. RISKS`,
  },
  {
    className: styles.fontM,
    content: `A. Blockchain and Token Risks`,
  },
  {
    className: styles.fontS,
    content: `You acknowledge and understand that blockchain technology is an evolving field where regulations are still being developed. As a result, you may face significant risks, including but not limited to technological instability, network failure, or the inability to redeem Tokens. Additionally, Tokens exhibit high volatility compared to other financial assets. You are responsible for making informed investment decisions and for holding or disposing of Tokens in a manner that aligns with your financial circumstances and risk tolerance. Furthermore, you acknowledge that the market information provided through FairyVault may be sourced from various exchanges and may not always reflect the most up-to-date or optimal price for each Token.`,
  },
  {
    className: styles.fontM,
    content: `B. Transaction and Payment Failures`,
  },
  {
    className: styles.fontS,
    content: `If either you or your counterparty fails to comply with these Terms or disregards the instructions, guidelines, or rules provided on the FairyVault or during the course of a transaction, FairyVault does not guarantee the successful transfer of Tokens. FairyVault shall not be held liable for any consequences arising from such failure. Moreover, once a payment or transfer is executed and confirmed on the blockchain via FairyVault or a third-party wallet, you acknowledge that blockchain transactions are irreversible and irrevocable. You and your counterparty bear full responsibility for the outcomes and liabilities associated with your transactions.`,
  },
  {
    className: styles.fontM,
    content: `C. Third-Party DApp Risks`,
  },
  {
    className: styles.fontS,
    content: `When engaging with third-party DApps integrated with FairyVault, you are advised to carefully review these Terms and any relevant alerts provided by FairyVault. It is your responsibility to familiarize yourself with the counterparty and product information, as well as to thoroughly assess the associated risks before executing any transactions. You understand that these transactions, along with any associated contractual relationships, exist solely between you and your counterparty. FairyVault disclaims all liability for any risks, losses, expenses, or obligations that may arise from such transactions.`,
  },
  {
    className: styles.fontM,
    content: `D. Counterparty Responsibility`,
  },
  {
    className: styles.fontS,
    content: `It is your sole responsibility to ensure that your counterparty has the legal capacity to engage in civil acts and to make an informed decision as to whether you wish to transact with them. FairyVault bears no responsibility for verifying the status of your counterparty.`,
  },
  {
    className: styles.fontM,
    content: `E. Transaction Verification`,
  },
  {
    className: styles.fontS,
    content: `In the event you receive an alert such as "transaction failed," it is your responsibility to verify the status of the transaction using official blockchain systems or other blockchain tools. Failure to follow this verification process may result in duplicate transactions, and you will be solely responsible for any resulting losses or expenses.`,
  },
  {
    className: styles.fontM,
    content: `F. Security Measures`,
  },
  {
    className: styles.fontS,
    content: `To safeguard against potential security risks, FairyVault strongly advises you to use the FairyVault in a secure network environment. Avoid using devices that have been jailbroken or rooted, as this may compromise the security of your transactions and personal information.`,
  },
  {
    className: styles.fontM,
    content: `G. Fraud Prevention`,
  },
  {
    className: styles.fontS,
    content: `FairyVault urges all users to be vigilant against potential fraud when using the FairyVault. If you encounter any suspicious activity or believe you have been targeted by fraudulent behavior, you are encouraged to notify FairyVault immediately for further investigation.`,
  },
  {
    className: styles.fontM,
    content: `H. Private Key Security`,
  },
  {
    className: styles.fontS,
    content: `The security of your private key or seed phrase is of utmost importance. Unlike traditional financial systems or account abstraction wallets, there is no 'forgot password' feature or recovery mechanism if you lose your private key or seed phrase. We strongly recommend:`,
  },
  {
    className: styles.fontS,
    content: `• Never sharing your private key or seed phrase with anyone`,
  },
  {
    className: styles.fontS,
    content: `• Storing your seed phrase in a secure, offline location`,
  },
  {
    className: styles.fontS,
    content: `• Consider using a hardware wallet for additional security`,
  },
  {
    className: styles.fontS,
    content: `• Being vigilant about phishing attempts targeted at obtaining your private key or seed phrase`,
  },
  {
    className: styles.fontS,
    content: `• Regularly backing up your wallet information`,
  },
  {
    className: styles.fontS,
    content: `You acknowledge that the responsibility for safeguarding your private key or seed phrase rests solely with you, and FairyVault has no ability to recover or reset access to your wallet if this information is lost.`,
  },
  {
    className: styles.fontL,
    content: `6. GUIDELINES FOR FLAGGING OBJECTIONABLE CONTENT AND BLOCKING OF ABUSIVE USERS`,
  },
  {
    className: styles.fontM,
    content: `A. Flagging Objectionable Content`,
  },
  {
    className: styles.fontS,
    content: `Users are empowered to help maintain a safe and respectful environment by flagging content they believe violates FairyVault’s community standards or Terms of Use. Objectionable content includes, but is not limited to, hate speech, harassment, explicit or offensive material, violent threats, and any activity that is discriminatory, illegal, or otherwise harmful. To report such content, please utilize the “Report” feature adjacent to the flagged material. Upon receiving a report, our internal team will promptly review the content and take appropriate measures, which may include content removal and/or disciplinary action against the responsible user.`,
  },
  {
    className: styles.fontM,
    content: `B. Blocking Abusive Users`,
  },
  {
    className: styles.fontS,
    content: `To protect your experience on FairyVault, you may block users who engage in abusive or harassing behavior. Blocking prevents the user from further contact and interaction with your account. To block an abusive user, visit their profile and select the "Block" option. Additionally, we recommend reporting such users via the “Report” feature, so our team can investigate the abusive behavior and take further action if necessary.`,
  },
  {
    className: styles.fontM,
    content: `C. Review and Action`,
  },
  {
    className: styles.fontS,
    content: `All flagged content and reports submitted by users are treated with priority and are reviewed carefully by our moderation team. FairyVault is committed to ensuring the safety and well-being of all users. Based on the nature and severity of the violation, actions may range from issuing warnings to suspending or permanently banning accounts from the FairyVault. All actions are taken in accordance with our community standards and these Terms, with the goal of fostering a safe, respectful environment for all.`,
  },
  {
    className: styles.fontM,
    content: `D. User Responsibility`,
  },
  {
    className: styles.fontS,
    content: `As a valued member of the FairyVault community, it is your responsibility to contribute positively and use the reporting and blocking tools in good faith. We urge you to familiarize yourself with our community standards and avoid misusing these tools to harass or unfairly target other users. Abuse of these tools may result in disciplinary action against your account. By following these guidelines, you are helping to create a more secure and positive experience for all users on the FairyVault.`,
  },
  {
    className: styles.fontL,
    content: `7. CHANGE, SUSPENSION AND TERMINATION OF FairyVault SERVICES`,
  },
  {
    className: styles.fontM,
    content: `A. Service Modifications`,
  },
  {
    className: styles.fontS,
    content: `You acknowledge and accept that FairyVault may, at its sole discretion, modify, introduce, or discontinue parts of its services at any time. This may include the suspension of certain functionalities or the introduction of new features. By continuing to use FairyVault following any changes, you are deemed to have accepted the updated terms and conditions, including revisions to this Agreement.`,
  },
  {
    className: styles.fontM,
    content: `B. Temporary Suspension of Services`,
  },
  {
    className: styles.fontS,
    content: `FairyVault may temporarily suspend its services under the following circumstances:`,
  },
  {
    className: styles.fontS,
    content: `• Maintenance, upgrades, equipment failures, interruptions in blockchain systems, or disruptions in communication networks that necessitate the temporary suspension of FairyVault's operations.`,
  },
  {
    className: styles.fontS,
    content: `• Force majeure events, including but not limited to natural disasters (typhoons, earthquakes, floods), power outages, wars, terrorist attacks, computer viruses, malware, hacker activities, system instabilities, or governmental actions that render the continued provision of services impractical or pose significant risks, in FairyVault's reasonable opinion.`,
  },
  {
    className: styles.fontS,
    content: `• Other unforeseen events outside FairyVault’s control or ability to predict.`,
  },
  {
    className: styles.fontM,
    content: `C. Unilateral Suspension or Termination`,
  },
  {
    className: styles.fontS,
    content: `FairyVault reserves the right to unilaterally suspend or terminate all or part of its services for any of the following reasons:`,
  },
  {
    className: styles.fontS,
    content: `• Death of a User.`,
  },
  {
    className: styles.fontS,
    content: `• Theft or unauthorized use of another person’s wallet information or mobile device.`,
  },
  {
    className: styles.fontS,
    content: `• Refusal to install a mandatory update to FairyVault.`,
  },
  {
    className: styles.fontS,
    content: `• Use of FairyVault for illegal or criminal activities.`,
  },
  {
    className: styles.fontS,
    content: `• Actions that impede the normal use of FairyVault by other users.`,
  },
  {
    className: styles.fontS,
    content: `• Impersonation of FairyVault staff or management.`,
  },
  {
    className: styles.fontS,
    content: `• Threats to FairyVault’s computer systems, including hacking, unauthorized alterations, or other malicious activities.`,
  },
  {
    className: styles.fontS,
    content: `• Sending spam or unsolicited communications via FairyVault.`,
  },
  {
    className: styles.fontS,
    content: `• Spreading false information or engaging in actions that harm the reputation of FairyVault or its team.`,
  },
  {
    className: styles.fontS,
    content: `• Any other illegal activity, breach of these Terms, or other circumstances where FairyVault deems it reasonably necessary to suspend or terminate services.`,
  },
  {
    className: styles.fontM,
    content: `D. User Rights Upon Service Modifications, Suspension or Termination of FairyVault Services`,
  },
  {
    className: styles.fontS,
    content: `In the event of any changes, suspension, or termination of services, you will have a reasonable amount of time to export your wallet data.`,
  },
  {
    className: styles.fontM,
    content: `E. Effect of Termination`,
  },
  {
    className: styles.fontS,
    content: `Upon the date of termination:`,
  },
  {
    className: styles.fontS,
    content: `(i) all your rights under these Terms immediately terminate; and`,
  },
  {
    className: styles.fontS,
    content: `(ii) each party remains responsible for all fees and charges it has incurred through the date of termination and is responsible for any fees and charges it incurs during the post-termination period;`,
  },
  {
    className: styles.fontS,
    content: `(iii) these Terms shall survive the expiration or termination to the full extent necessary for their enforcement and for the protection of the party in whose favor they operate. `,
  },
  {
    className: styles.fontL,
    content: `8. YOUR REPRESENTATIONS AND WARRANTIES`,
  },
  {
    className: styles.fontM,
    content: `A. Compliance with Laws`,
  },
  {
    className: styles.fontS,
    content: `You represent and warrant that you will comply with all applicable laws, regulations, and policies of your country of nationality and/or country of residence. You shall not use FairyVault for any unlawful purposes or through any unlawful means.`,
  },
  {
    className: styles.fontM,
    content: `B. Prohibited Activities`,
  },
  {
    className: styles.fontS,
    content: `You agree not to engage in any illegal or prohibited activities while using FairyVault, including but not limited to:`,
  },
  {
    className: styles.fontS,
    content: `• Engaging in illegal activities such as money laundering, unauthorized fundraising, or other financial crimes;`,
  },
  {
    className: styles.fontS,
    content: `• Accessing or utilizing FairyVault services through the use of automated programs, software, network bots, web crawlers, web analytics tools, data mining tools, or similar technologies to collect or process data or to interfere with the use of the services by others;`,
  },
  {
    className: styles.fontS,
    content: `• Providing or disseminating gambling-related information or inducing others to engage in gambling, including but not limited to sharing links to gambling sites or utilizing gambling-related bots;`,
  },
  {
    className: styles.fontS,
    content: `• Gaining unauthorized access to another user’s FairyVault account or attempting to steal Tokens or any other assets;`,
  },
  {
    className: styles.fontS,
    content: `• Conducting false or fraudulent transactions with counterparties or any actions that distort the integrity of the services provided by FairyVault;`,
  },
  {
    className: styles.fontS,
    content: `• Engaging in activities that harm or attempt to harm - Engaging in activities that harm or attempt to harm FairyVault’s systems, data, or services; systems, data, or services;`,
  },
  {
    className: styles.fontS,
    content: `• Any other activities that FairyVault reasonably determines to be inappropriate or in violation of its policies.`,
  },
  {
    className: styles.fontM,
    content: `C. Responsibility for Violations`,
  },
  {
    className: styles.fontS,
    content: `You acknowledge and accept that you are responsible for any violation of applicable laws, including but not limited to customs and tax regulations, or breaches of these terms. You agree to indemnify and hold FairyVault harmless from any losses, third-party claims, or administrative penalties incurred by FairyVault as a result of your violations, including reasonable attorney’s fees.`,
  },
  {
    className: styles.fontM,
    content: `D. Service Fees`,
  },
  {
    className: styles.fontS,
    content: `You confirm that you will pay any applicable service fees charged by FairyVault in a timely manner. FairyVault reserves the right to suspend or terminate services if you fail to pay the required fees.`,
  },
  {
    className: styles.fontL,
    content: `9. DISCLAIMER AND LIMITATION OF LIABILITY`,
  },
  {
    className: styles.fontM,
    content: `A. FairyVault's obligations are strictly limited to those expressly stated in this Agreement.`,
  },
  {
    className: styles.fontM,
    content: `B. YOU ACKNOWLEDGE AND AGREE THAT, TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW IN YOUR JURISDICTION, FairyVault IS PROVIDED "AS IS," "AS AVAILABLE," AND "WITH ALL FAULTS." FairyVault shall not be liable for any malfunction resulting from the following circumstances:`,
  },
  {
    className: styles.fontS,
    content: `• Scheduled maintenance or updates to the FairyVault system;`,
  },
  {
    className: styles.fontS,
    content: `• Events of force majeure, including but not limited to natural disasters, acts of war, terrorist attacks, or other unforeseeable events;`,
  },
  {
    className: styles.fontS,
    content: `• Failures of your hardware, software, telecommunications infrastructure, or power supply;`,
  },
  {
    className: styles.fontS,
    content: `• Your improper, unauthorized, or unrecognized use of FairyVault services;`,
  },
  {
    className: styles.fontS,
    content: `• Events caused by computer viruses, malware, network congestion, system instability, or security breaches; and`,
  },
  {
    className: styles.fontS,
    content: `• Any other circumstances not attributable to FairyVault.`,
  },
  {
    className: styles.fontM,
    content: `C. FairyVault shall not be liable in the following situations:`,
  },
  {
    className: styles.fontS,
    content: `• Users disclose their private keys or seed phrases, lend or transfer access to others, or use FairyVault through unofficial channels, leading to loss or theft of Tokens;`,
  },
  {
    className: styles.fontS,
    content: `• Users improperly handle FairyVault services (e.g., sending Tokens to incorrect addresses, selecting malfunctioning node servers), resulting in loss of Tokens;`,
  },
  {
    className: styles.fontS,
    content: `• Users’ lack of understanding of blockchain technology resulting in the mishandling of Tokens;`,
  },
  {
    className: styles.fontS,
    content: `• Delays in processing transactions due to system performance or blockchain instability; and`,
  },
  {
    className: styles.fontS,
    content: `• Any risks associated with transactions or interactions with third-party DApps, for which users assume full responsibility.`,
  },
  {
    className: styles.fontM,
    content: `D. Risk Factors: Users should carefully evaluate the following risks associated with cryptographic tokens, which are inherently volatile and speculative assets:`,
  },
  {
    className: styles.fontS,
    content: `• <b>Price Volatility:</b> Token prices are subject to extreme fluctuations caused by factors such as, but not limited to, market trends, regulatory developments, technological advancements, and economic conditions. FairyVault WILL NOT BE LIABLE FOR ANY LOSSES INCURRED DUE TO TOKEN PRICE VOLATILITY.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Blockchain Protocols:</b> Tokens operate on decentralized protocols that may malfunction or experience security breaches. FairyVault DOES NOT CONTROL THESE PROTOCOLS AND WILL NOT BE RESPONSIBLE FOR LOSSES ARISING FROM PROTOCOL FAILURES OR ATTACKS.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Regulatory and Legal Uncertainty:</b> The legal status of tokens is constantly evolving, and new regulations may impact your ability to hold, trade, or use tokens. FairyVault IS NOT LIABLE FOR LOSSES ARISING FROM CHANGES IN THE REGULATORY ENVIRONMENT.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Tax Implications:</b> The taxation of tokens is complex and may vary by jurisdiction. Users are solely responsible for understanding and complying with applicable tax obligations. FairyVault SHALL NOT BE HELD LIABLE FOR ANY TAX LIABILITIES OR PENALTIES.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• <b>Unanticipated Risks:</b> Additional risks not covered here may emerge as the blockchain and token ecosystem evolves. USERS ASSUME FULL RESPONSIBILITY FOR ALL RISKS ASSOCIATED WITH THE PURCHASE, HOLDING, AND USE OF TOKENS.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontM,
    content: `E. You acknowledge that FairyVault functions solely as a tool for managing on-chain identities and Tokens. It has no control over the quality, security, or accuracy of services provided by third-party DApps. FairyVault encourages users to conduct thorough due diligence before engaging with third-party DApps and assumes no liability for losses resulting from such interactions.`,
  },
  {
    className: styles.fontM,
    content: `F. You acknowledge that FairyVault may provide services to both you and your counterparties, and you hereby waive any actual or perceived conflict of interest. You agree not to hold FairyVault responsible for any such conflicts or impose additional duties or liabilities on FairyVault as a result.`,
  },
  {
    className: styles.fontM,
    content: `G. FairyVault does not warrant that:`,
  },
  {
    className: styles.fontS,
    content: `• the services will fully meet your expectations;`,
  },
  {
    className: styles.fontS,
    content: `• the techniques, information, or services provided are comprehensive or entirely accurate;`,
  },
  {
    className: styles.fontS,
    content: `• the transaction data retrieved from third-party exchanges is timely, accurate, or reliable; or`,
  },
  {
    className: styles.fontS,
    content: `• your counterparties will fulfill their obligations in any transactions facilitated through FairyVault.`,
  },
  {
    className: styles.fontM,
    content: `H. In any case, FairyVault’s total liability under this Agreement shall not exceed the greater of:`,
  },
  {
    className: styles.fontS,
    content: `• The USD equivalent of 0.05 Ether; or`,
  },
  {
    className: styles.fontS,
    content: `• US$80.`,
  },
  {
    className: styles.fontM,
    content: `I. You acknowledge that FairyVault does not provide legal, tax, or investment advice. Users are encouraged to seek independent professional advice. FairyVault shall not be liable for any financial or data losses incurred during the use of our services.`,
  },
  {
    className: styles.fontM,
    content: `J. FairyVault reserves the right to modify its eligibility criteria and restrict or limit access to services based on the legal, regulatory, or policy requirements in your jurisdiction.`,
  },
  {
    className: styles.fontL,
    content: `10. INTELLECTUAL PROPERTY RIGHTS PROTECTION`,
  },
  {
    className: styles.fontM,
    content: `A. Ownership and Usage Restrictions`,
  },
  {
    className: styles.fontS,
    content: `FairyVault is a proprietary application developed and owned by the FairyVault team. All intellectual property rights related to any content available within the FairyVault FairyVault, including but not limited to this Agreement, announcements, articles, videos, audio files, images, data, materials, trademarks, logos, and other related content, are either owned by FairyVault or licensed to FairyVault by third-party licensors.`,
  },
  {
    className: styles.fontS,
    content: `Users are granted a limited, non-exclusive, non-transferable license to use FairyVault and its contents solely for the purpose of managing and holding their Tokens in accordance with this Agreement.`,
  },
  {
    className: styles.fontM,
    content: `B. Prohibited Activities`,
  },
  {
    className: styles.fontS,
    content: `Unless expressly authorized in writing by the FairyVault team or relevant third-party licensors, Users shall not engage in any of the following activities with respect to the content or intellectual property associated with FairyVault:`,
  },
  {
    className: styles.fontS,
    content: `• Use, modify, or decompile the software or any of its components;`,
  },
  {
    className: styles.fontS,
    content: `• Reproduce, copy, or distribute content for commercial purposes;`,
  },
  {
    className: styles.fontS,
    content: `• Publicly display, disseminate, or alter any content; and`,
  },
  {
    className: styles.fontS,
    content: `• Issue, sublicense, or otherwise publicly publish the application or any content therein.`,
  },
  {
    className: styles.fontS,
    content: `Any unauthorized use of FairyVault’s intellectual property or related content will be considered a violation of intellectual property rights and subject to legal action.`,
  },
  {
    className: styles.fontL,
    content: `11. BINDING ARBITRATION AND CLASS ACTION WAIVER`,
  },
  {
    className: styles.fontS,
    content: `<b>PLEASE READ THIS SECTION CAREFULLY – IT MAY SIGNIFICANTLY AFFECT YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontM,
    content: `A. Binding Arbitration`,
  },
  {
    className: styles.fontS,
    content: `Any dispute, claim or controversy (“Claim”) relating in any way to this Agreement, or your use of the FairyVault will be resolved by binding arbitration as provided in this Section 11, rather than in court, except that you may assert claims in small claims court if your claims qualify.`,
  },
  {
    className: styles.fontS,
    content: `<b>i. If you are located in the United States:</b> This agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the laws of the State of Texas. The Federal Arbitration Act and federal arbitration law apply to this Agreement. There is no judge or jury in arbitration, and court review of an arbitration award is limited. However, an arbitrator can award on an individual basis the same damages and relief as a court (including injunctive and declaratory relief or statutory damages), and must follow the terms of this Agreement as a court would. The arbitration will be conducted in accordance with the expedited procedures set forth in the JAMS Comprehensive Arbitration Rules and Procedures (the “Rules”) as those Rules exist on the effective date of this Agreement, including Rules 16.1 and 16.2 of those Rules. The arbitrator’s decision shall be final, binding, and non-appealable. Judgment upon the award may be entered and enforced in any court having jurisdiction. Neither party shall sue the other party other than as provided herein or for enforcement of this clause or of the arbitrator’s award; any such suit may be brought only in a Federal District Court or a Texas state court located in Tarrant County, Texas. The arbitrator, and not any federal, state, or local court, shall have exclusive authority to resolve any dispute relating to the interpretation, applicability, unconscionability, arbitrability, enforceability, or formation of this Agreement including any claim that all or any part of the Agreement is void or voidable. If for any reason a claim proceeds in court rather than in arbitration we and you waive any right to a jury trial. Notwithstanding the foregoing we and you both agree that you or we may bring suit in court to enjoin infringement or other misuse of intellectual property rights.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `<b>ii. If you are located in the United Kingdom:</b> This Agreement and any dispute or claim (including non-contractual disputes or claims) arising out of or in connection with it or its subject matter or formation shall be governed by and construed in accordance with the law of England and Wales. Any dispute, claim or controversy relating in any way to this Agreement, your use of the FairyVault, or to any products or services licensed or distributed by us will be resolved by binding arbitration as provided in this clause. Prior to commencing any formal arbitration proceedings, parties shall first seek settlement of any claim by mediation in accordance with the LCIA Mediation Rules, which Rules are deemed to be incorporated by reference into this clause. If the dispute is not settled by mediation within 14 days of the commencement of the mediation, or such further period as the parties shall agree in writing, the dispute shall be referred to and finally resolved by arbitration under the LCIA Rules, which are deemed to be incorporated by reference into this clause. The language to be used in the mediation and in the arbitration shall be English. The seat or legal place of arbitration shall be London.`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `<b>iii. If you are located in any territory that is not specifically enumerated in Sections 11A(i) or 11A(ii):</b>`,
    isInnerHTML: true,
  },
  {
    className: styles.fontS,
    content: `• If you are located in any territory not specifically referenced in Sections 11A(i) or 11A(ii), you may elect for either Section 11A(i) or Section 11A(ii) to apply to you. Otherwise, this Agreement and any Claim (including non-contractual disputes or claims) arising out of or in connection with it, or its subject matter or formation, shall be governed by and construed in accordance with the laws of Singapore. Any Claim relating to this Agreement, your use of the FairyVault, or any products or services licensed or distributed by us, shall be resolved through binding arbitration.`,
  },
  {
    className: styles.fontS,
    content: `• Prior to initiating formal arbitration, the parties shall first attempt to resolve the Claim by mediation in accordance with the Singapore International Arbitration Centre (SIAC) Mediation Rules, which are incorporated by reference into this clause. If the dispute is not settled by mediation within 14 days of commencement, or within any other period agreed upon by the parties in writing, the Claim shall be referred to and finally resolved by arbitration under the SIAC Rules, which are also deemed incorporated into this clause.`,
  },
  {
    className: styles.fontS,
    content: `• The arbitration tribunal shall consist of a single arbitrator. The parties shall mutually agree upon the appointment of the arbitrator. If the parties fail to agree on an arbitrator within 30 days of a party requesting arbitration, the arbitrator shall be appointed by the Chairman of the Singapore International Arbitration Centre. The language to be used in the mediation and arbitration shall be English. `,
  },
  {
    className: styles.fontS,
    content: `• The arbitration shall be conducted in English. The seat or legal place of arbitration shall be Singapore.`,
  },
  {
    className: styles.fontM,
    content: `B. Class Action Waiver`,
  },
  {
    className: styles.fontS,
    content: `YOU AND WE AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY ON AN INDIVIDUAL BASIS, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. YOU AND WE EXPRESSLY WAIVE ANY RIGHT TO FILE A CLASS ACTION OR SEEK RELIEF ON A CLASS BASIS. Unless both you and we agree, no arbitrator or judge may consolidate more than one person’s claims or otherwise preside over any form of a representative or class proceeding. The arbitrator may award injunctive relief only in favor of the individual party seeking relief and only to the extent necessary to provide relief warranted by that party’s individual claim. If a court decides that applicable law precludes enforcement of any of this paragraph’s limitations as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and may be brought in court. If any court or arbitrator determines that the class action waiver set forth in this paragraph is void or unenforceable for any reason or that an arbitration can proceed on a class basis, then the arbitration provision set forth above shall be deemed null and void in its entirety and the parties shall be deemed to have not agreed to arbitrate disputes.`,
  },
  {
    className: styles.fontL,
    content: `12. MISCELLANEOUS`,
  },
  {
    className: styles.fontM,
    content: `A. Assignment`,
  },
  {
    className: styles.fontS,
    content: `You will not assign or otherwise transfer this Agreement or any of your rights and obligations under this Agreement, without our prior written consent. Any assignment or transfer in violation of this Section 12 will be void. We may assign this Agreement and the Terms herein without your consent (a) in connection with a merger, acquisition or sale of all or substantially all of our assets, or (b) to any Affiliate or as part of a corporate reorganization; and effective upon such assignment, the assignee is deemed substituted for us as a party to this Agreement and we are fully released from all of our obligations and duties to perform under this Agreement. Subject to the foregoing, this Agreement will be binding upon, and inure to the benefit of the parties and their respective permitted successors and assigns.`,
  },
  {
    className: styles.fontM,
    content: `B. Entire Agreement`,
  },
  {
    className: styles.fontS,
    content: `These Terms set forth the entire understanding and agreement as to the subject matter hereof and supersedes any and all prior discussions, agreements, and understandings of any kind (including, without limitation, any prior versions of the Terms) and every nature between us.`,
  },
  {
    className: styles.fontM,
    content: `C. Severability`,
  },
  {
    className: styles.fontS,
    content: `If any provision of this Agreement is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision will be interpreted, to the extent possible, to fulfill the original intent. If such interpretation is not feasible, the invalid or unenforceable provision will be severed from this Agreement, and the remaining terms will remain fully operative and enforceable.`,
  },
  {
    className: styles.fontM,
    content: `D. Independent Contractors; Non-Exclusive Rights`,
  },
  {
    className: styles.fontS,
    content: `The relationship between you and FairyVault is that of independent contractors. Nothing in these Terms shall be construed as creating a partnership, joint venture, agency, fiduciary, or employment relationship between the parties. Neither party has the authority to act on behalf of or bind the other in any way. Both parties retain the right to independently develop or have developed products, services, systems, or techniques that may be similar to or competitive with the other party’s offerings. Additionally, both parties may provide assistance to third-party developers or systems integrators who may offer products or services that compete with the other party’s offerings.`,
  },
  {
    className: styles.fontM,
    content: `E. Notices`,
  },
  {
    className: styles.fontS,
    content: `Any notices or other communications provided by us under these Terms, including those regarding modifications to it will be given by posting to the Platform and/or through other electronic communication. You agree and consent to receive electronically all communications, agreements, documents, notices and disclosures that we provide in connection with your account and your use of the Any notices or other communications provided by us under these Terms, including those regarding modifications to it will be given by posting to the FairyVault and/or through other electronic communication. You agree and consent to receive electronically all communications, agreements, documents, notices and disclosures that we provide in connection with your account and your use of the FairyVault..`,
  },
  {
    className: styles.fontM,
    content: `F. Questions/Comments`,
  },
  {
    className: styles.fontS,
    content: `If you have any questions relating to these Terms, your rights and obligations arising from these Terms and/or your use of the FairyVault or any other matter please send us a message on FairyVault.`,
  },
];

export const termsOfServicePageData = {
  metaTitle: 'FairyVault Terms of Service',
  pageTitle: 'FairyVault Terms of Service',
  pageUpdateTime: 'Last Updated: 17 February, 2025.',
  logo: {
    src: '/logo.svg',
    width: 180,
    height: 54,
    alt: 'FairyVault Logo',
  },
  content: termsOfServiceContents,
};
