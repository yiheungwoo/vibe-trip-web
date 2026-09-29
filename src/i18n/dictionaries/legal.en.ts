import type { LegalContent } from "../legal-types";

/**
 * English translation of the legal documents. legal.ko.ts is the authoritative text —
 * update both files together.
 */
const legalEn: LegalContent = {
  closeAria: "Close",
  translationNotice:
    "This is an English translation provided for convenience. If there is any discrepancy, the Korean version prevails.",

  terms: {
    title: "Vibe Trip Terms of Service",
    sections: [
      {
        chapter: "Chapter 1. General Provisions",
        heading: "Article 1 (Purpose)",
        blocks: [
          {
            type: "p",
            text: "These Terms set out the basic matters governing the use of the mobile application and web service “Vibe Trip” (the “Service”) operated by Vibe Trip Inc. (the “Company”), including the rights, obligations and responsibilities of the Company and users, and the conditions and procedures for using the Service.",
          },
        ],
      },
      {
        heading: "Article 2 (Definitions)",
        blocks: [
          {
            type: "ol",
            items: [
              "**“Service”** means all services the Company provides through devices such as smartphones and tablets, including AI trip itinerary generation, route optimization, real-time location- and time-based local guidance (Proactive Push and Q&A), Voucher OCR registration, and the C2C itinerary sharing marketplace (Vibe Pick).",
              "**“Member”** means a person who has agreed to these Terms, completed sign-up (for example through a social account) and can continue to use the Service.",
              "**“Non-member”** means a person who has not signed up and merely browses parts of the Service within the scope the Company allows (such as sample or shared itineraries).",
              "**“Paid Pass”** means a digital entitlement (Short Trip Pass, Long Trip Pass, Annual Unlimited Pass, Daily Extension Pass, etc.) that a Member purchases in advance to use paid features such as the AI Guide.",
              "**“AI Guide (Proactive Guide)”** means the feature that provides proactive notifications (Push) and real-time Q&A during a Member’s trip, based on location (GPS), local time and the itinerary the Member has registered.",
              "**“Vibe Pick (also called Members’ Pick / itinerary marketplace)”** means the C2C content area where Members can register itineraries they created and traveled, and share them with or let them be copied by other Members.",
              "**“Reward”** means a benefit, such as a trip pass or a prize, that the Company provides through an event to a Member who authored a Vibe Pick itinerary.",
            ],
          },
        ],
      },
      {
        heading: "Article 3 (Notice, Effect and Amendment of the Terms)",
        blocks: [
          {
            type: "ol",
            items: [
              "The Company posts these Terms on the Service’s initial screen or in the My Page settings menu so that Members can easily find them.",
              "The Company may amend these Terms to the extent that doing so does not violate applicable laws, including the Act on the Consumer Protection in Electronic Commerce, the Act on the Regulation of Terms and Conditions, and the Act on Promotion of Information and Communications Network Utilization and Information Protection.",
              "When the Terms are amended, the Company will announce the effective date and the reason for the amendment at least 7 days before the effective date. For changes that are unfavorable to Members or significantly affect their rights, the Company will notify Members individually, at least 30 days before the effective date, through in-service notices, push notifications, email and similar means.",
              "A Member who does not agree to the amended Terms may terminate the agreement (withdraw from membership). A Member who does not expressly object within the notice period and continues to use the Service is deemed to have agreed to the amended Terms.",
            ],
          },
        ],
      },
      {
        chapter: "Chapter 2. Sign-up and Account Management",
        heading: "Article 4 (Formation of the Agreement and Simple Sign-up)",
        blocks: [
          {
            type: "ol",
            items: [
              "The agreement is formed when an applicant agrees to these Terms and the Privacy Policy, applies to sign up through a social login supported by the Company (Kakao, Apple, Google, etc.), and the Company accepts the application.",
              "In principle, the Company permits sign-up only by persons aged 14 or older and may restrict sign-up by children under 14.",
              "Members use a **nickname** as their identifier within the Service. Real names are verified only where required by law.",
            ],
          },
        ],
      },
      {
        heading: "Article 5 (Member’s Duty to Manage the Account)",
        blocks: [
          {
            type: "ol",
            items: [
              "Members are responsible for managing their account information (social login connection, device security, etc.) with due care, and may not lend or transfer it to any third party.",
              "Members are responsible for any disadvantage or damage arising from account information being leaked through the Member’s fault.",
            ],
          },
        ],
      },
      {
        chapter: "Chapter 3. Provision and Use of the Service",
        heading: "Article 6 (Service Content and Free Usage Quota)",
        blocks: [
          {
            type: "ol",
            items: [
              {
                text: "The Company provides the following services:",
                sub: [
                  "Generative-AI-based trip itinerary planning, conversational editing and route optimization",
                  "Automatic extraction of OCR data from external voucher images (e-tickets, booking confirmations, etc.) and registration on the timeline",
                  "Proactive trip care notifications and local Q&A based on real-time location and local time (AI Guide)",
                  "Registration of C2C trip itineraries and importing other Members’ courses (Vibe Pick)",
                  "Linked calls to mobility and partner services (deep links to Grab, Uber, etc.)",
                ],
              },
              "To manage API costs and keep server operations stable, the Company may set and operate free quotas for free Members, such as the number of AI planning conversation turns available per month and the number of itinerary slots that can be held at the same time. A free Member who wishes to exceed the quota must purchase a Paid Pass.",
            ],
          },
        ],
      },
      {
        heading: "Article 7 (Limits of the AI Service and Disclaimer)",
        blocks: [
          {
            type: "ol",
            items: [
              "Trip itineraries, recommended places (POIs), routes, local information, docent commentary and similar content provided in the Service are generated by combining generative AI technology with external public and commercial data.",
              "Owing to the nature of AI, errors or hallucinations may occur because of timing differences, local circumstances (changes in opening hours, closures, construction, traffic restrictions, etc.) or technical limitations.",
              "Before relying on information suggested by the AI as absolute, Members must cross-check local conditions (visa rules, flight schedules, safety rules, etc.) themselves. Unless the law provides otherwise, the Company is not liable for indirect or consequential damages arising from errors in information provided by the AI.",
            ],
          },
        ],
      },
      {
        heading: "Article 8 (Use of Location-Based Services)",
        blocks: [
          {
            type: "ol",
            items: [
              "To provide services such as real-time local guidance, airport arrival briefings and nearby-attraction docent notifications, the Company collects and uses the user’s device location (GPS) in real time.",
              "Members may refuse or disable location sharing in their device settings, but location-based personalized push and docent notifications may then be limited.",
              "Location data is destroyed or anonymized as soon as the purpose of the relevant notification has been achieved. Further details follow the separate “Location-Based Services Terms” or the Privacy Policy.",
            ],
          },
        ],
      },
      {
        chapter: "Chapter 4. Paid Services and Payment/Refund Policy",
        heading: "Article 9 (Payment and Use of Paid Passes)",
        blocks: [
          {
            type: "ol",
            items: [
              "Paid Passes are operated on a prepaid basis and are paid for through in-app purchase (IAP) on the Apple App Store or Google Play, or through another electronic payment method designated by the Company.",
              {
                text: "The types and basic effect of Pass products are as follows:",
                sub: [
                  "**Short Trip Pass (single-trip)**: covers a trip of up to 5 days",
                  "**Long Trip Pass (single-trip)**: covers a trip of 6 to 15 days",
                  "**Annual Unlimited Pass (1-year pass)**: unlimited planning and AI Guide for every trip the Member registers for 365 days from the payment date (an annual maximum number of trips may apply under the fair use policy)",
                  "**Daily Extension Pass**: extends the end date of a specific trip in 1-day increments",
                ],
              },
              "A single-trip Pass (Short/Long) switches to “PURCHASED” status upon payment, and is bound to “ACTIVE” status when the Member **activates [Start AI Guide] for that trip or the trip departure date arrives**.",
            ],
          },
        ],
      },
      {
        heading: "Article 10 (Withdrawal of Purchase and Refund Policy)",
        blocks: [
          {
            type: "p",
            text: "Because digital content and LLM API infrastructure costs are consumed immediately, the following refund policy applies under Article 17(2) of the Act on the Consumer Protection in Electronic Commerce:",
          },
          {
            type: "ol",
            items: [
              {
                text: "**Single-trip Pass (Short Trip / Long Trip Pass)**:",
                sub: [
                  "**100% full refund**: if requested within 7 days of payment and the “AI real-time guide” (GPS/time-based push and local Q&A) has never been operated for the relevant trip.",
                  "**No refund**: if more than 7 days have passed since payment, or the departure date has arrived and a local AI Guide push has been sent or a session has started even once (this is deemed the start of use, and partial refunds for remaining days due to a change of mind, such as returning home early, are not available).",
                ],
              },
              {
                text: "**Annual Unlimited Pass**:",
                sub: [
                  "**100% full refund**: if requested within 7 days of payment and the AI real-time guide has never been run using the Pass benefits.",
                  "**No refund**: if more than 7 days have passed since payment, or the AI Guide has already been run at least once.",
                ],
              },
              {
                text: "**Daily Extension Pass**:",
                sub: [
                  "Because the validity period in the backend scheduler is updated in real time immediately upon payment and provision of the service begins at once, withdrawal of purchase and refunds are in principle not available.",
                ],
              },
              {
                text: "**Exceptional refund due to system failure**:",
                sub: [
                  "If a Member could not receive the guide service at all at the destination due solely to the Company’s fault, such as a server outage or an AI core communication failure, the Company will, after review, refund the full payment.",
                ],
              },
              {
                text: "**Refund procedure**:",
                sub: [
                  "For payments made through in-app purchase (IAP), the refund procedure may follow the refund policies of the respective app market (Apple, Google).",
                ],
              },
            ],
          },
        ],
      },
      {
        chapter: "Chapter 5. C2C Itinerary Marketplace and Creator Rewards",
        heading: "Article 11 (Marketplace Registration of Itineraries and Copyright)",
        blocks: [
          {
            type: "ol",
            items: [
              "Members may package a completed trip (My Trip) and register it on “Vibe Pick” within the platform.",
              "Copyright in the itineraries, photos, reviews and other content that a Member writes and registers belongs to that Member. However, the Member grants the Company a free, non-exclusive license, in Korea and abroad, to reproduce, distribute, transmit and display such content for the purpose of operating, promoting and improving the Service and enabling other Members to copy the course.",
              "Members must not post itineraries that defame others, infringe intellectual property rights such as copyright, or contain false information or illegally filmed material. The registrant bears all civil and criminal liability arising from such content.",
            ],
          },
        ],
      },
      {
        heading: "Article 12 (Creator Rewards)",
        blocks: [
          {
            type: "ol",
            items: [
              "The Company may select, through events, Members whose itineraries on Vibe Pick have been adopted by many other Members, and provide them with Rewards such as trip passes or prizes. The eligible period, selection criteria and Rewards are set out in each event notice.",
              "Adoptions of official itineraries registered by the Company, and a Member’s adoption of their own itinerary, are not counted, and repeated adoptions of the same itinerary by the same Member count as one.",
              "No monetary earnings (rebates) accrue from adoptions, and nothing is paid out or withdrawn in cash on that basis.",
              "Where providing a prize gives rise to obligations such as tax withholding under applicable tax law, the Company will set out the required information and procedure in advance in the relevant event notice.",
              "Where the number of adoptions has been inflated by improper means such as multiple accounts or macros, the Company may exclude the Member from selection or recover Rewards already provided.",
            ],
          },
        ],
      },
      {
        chapter: "Chapter 6. Termination and Liability",
        heading: "Article 13 (Termination and Withdrawal of Membership)",
        blocks: [
          {
            type: "ol",
            items: [
              "Members may request to withdraw from membership at any time through the in-app My Page settings, and the Company will process the request immediately as provided by applicable law.",
              "Upon withdrawal, the Member’s free quota and remaining Pass entitlements expire immediately and cannot be restored.",
            ],
          },
        ],
      },
      {
        heading: "Article 14 (Disclaimer and Dispute Resolution)",
        blocks: [
          {
            type: "ol",
            items: [
              "The Company is not liable when it cannot provide the Service due to natural disasters, war, service interruption by a telecommunications carrier, force majeure failures of external AI platforms (API providers), or similar causes.",
              "Partner OTA (flights, hotels, etc.) and mobility (Grab, Uber) services are provided directly by external partners. Responsibility for the conclusion, cancellation, refund or accidents of such external contracts lies with each service provider, and the Company, as a platform that only brokers or connects through deep links, is not liable for them.",
              "Disputes between the Company and a Member relating to these Terms are governed by the laws of the Republic of Korea, and if a lawsuit is filed, the court with jurisdiction under the Civil Procedure Act has exclusive jurisdiction as the court of first instance.",
            ],
          },
        ],
      },
    ],
    dates: [
      { label: "Announced on", value: "September 19, 2026" },
      { label: "Effective on", value: "September 19, 2026" },
    ],
  },

  privacy: {
    title: "Vibe Trip Privacy Policy",
    intro:
      "Vibe Trip Inc. (the “Company”) values users’ personal information and strictly complies with applicable Korean laws, including the Personal Information Protection Act and the Act on Promotion of Information and Communications Network Utilization and Information Protection.",
    sections: [
      {
        heading: "1. Personal Information We Collect and How We Collect It",
        blocks: [
          {
            type: "p",
            text: "As a principle, the Company collects only the minimum personal information necessary, and collects it stage by stage (progressive onboarding) as follows.",
          },
          {
            type: "table",
            head: ["Category", "When collected", "Required items", "Optional items", "Purpose"],
            rows: [
              [
                "**Basic sign-up**",
                "At social sign-up",
                "• Social identifier (Provider UID)\n• Linked email\n• Service nickname",
                "• Profile image URL\n• Consent to marketing push notifications",
                "Member identification, account management, essential notices",
              ],
              [
                "**Preference onboarding**",
                "After sign-up (can be skipped)",
                "None",
                "• Travel theme/mood\n• Itinerary tempo\n• Usual travel companions\n• Accommodation/budget preferences",
                "Reflecting personal context in AI itinerary recommendations",
              ],
              [
                "**Service use**",
                "When creating a trip and during travel",
                "• Destination and trip dates\n• Real-time location (GPS)\n• Device OS information, push token (FCM)",
                "• Voucher images (flight/accommodation confirmations for OCR parsing)\n• Checklist data",
                "Building the timeline, flight/hotel time-difference alerts, local proactive guidance and docent",
              ],
              [
                "**Event prizes**",
                "When winning a prize",
                "• Recipient name\n• Contact number\n• Delivery address",
                "None",
                "Sending the prize (destroyed without delay once it has been delivered)",
              ],
            ],
          },
          {
            type: "note",
            text: "Collection methods: direct input by the user in the mobile app, social OAuth linking, backend location sensors, and voucher image upload (OCR).",
          },
        ],
      },
      {
        heading: "2. Purposes of Processing Personal Information",
        blocks: [
          { type: "p", text: "The Company uses the personal information it collects for the following purposes:" },
          {
            type: "ol",
            items: [
              "**Providing the Service and performing the contract**: generating AI-personalized trip itineraries, editing itineraries, real-time local time/location-based Proactive Push guidance, attraction docent guidance, confirming in-app purchases and granting entitlements.",
              "**Member management**: identifying simple-login accounts, managing nickname-based community activity, preventing abuse, and responding to 1:1 customer support inquiries.",
              "**C2C marketplace and events**: posting completed trips to Vibe Pick, selecting authors for adoption-based events, and sending prizes.",
              "**Service analysis and improvement**: improving AI recommendation performance and analyzing user statistics.",
            ],
          },
        ],
      },
      {
        heading: "3. Legal Basis for Processing Unique Identification Information",
        blocks: [
          {
            type: "p",
            text: "The Company does not collect unique identification information such as the resident registration number.",
          },
        ],
      },
      {
        heading: "4. Provision of Personal Information to Third Parties",
        blocks: [
          {
            type: "p",
            text: "The Company does not provide personal information to third parties without the user’s prior consent, except in the following cases:",
          },
          {
            type: "ol",
            items: [
              "Where required by law, or where an investigative agency requests it for investigation purposes in accordance with the procedures and methods prescribed by law.",
              "Where the user moves to an external link to use a partner service (external OTA, ride-hailing, etc.) and provides information to a third party themselves (the third party’s privacy policy applies in that case).",
            ],
          },
        ],
      },
      {
        heading: "5. Entrustment of Personal Information Processing",
        blocks: [
          {
            type: "p",
            text: "To provide the Service smoothly, the Company entrusts personal information processing to the following external specialists:",
          },
          {
            type: "table",
            head: ["Processor", "Entrusted tasks"],
            rows: [
              ["**Supabase Inc. / Amazon Web Services**", "Database hosting and cloud server infrastructure operation"],
              [
                "**Google Cloud Platform (Firebase / Gemini API)**",
                "Sending push notifications (FCM), vision OCR parsing and AI Q&A processing",
              ],
              ["**RevenueCat, Inc.**", "Verifying in-app purchase (IAP) receipts and managing Paid Pass subscription status"],
            ],
          },
        ],
      },
      {
        heading: "6. Retention and Destruction of Personal Information",
        blocks: [
          {
            type: "ol",
            items: [
              "**Principle of destruction**: Personal information is destroyed without delay once the purpose of use has been achieved. Electronic files are permanently deleted by technical means that make recovery impossible, and printed material is shredded.",
              {
                text: "**Retention required by law**: Where retention is required by applicable law, information is stored separately for the statutory period as follows:",
                sub: [
                  "**Records on contracts or withdrawal of purchase in e-commerce**: 5 years (Electronic Commerce Act)",
                  "**Records on payment and supply of goods**: 5 years (Electronic Commerce Act)",
                  "**Records on consumer complaints or dispute handling**: 3 years (Electronic Commerce Act)",
                  "**Service access login records (logs)**: 3 months (Protection of Communications Secrets Act)",
                ],
              },
            ],
          },
        ],
      },
      {
        heading: "7. User Rights and How to Exercise Them",
        blocks: [
          {
            type: "ol",
            items: [
              "Users may at any time view or edit their personal information, or apply to withdraw from membership (withdraw consent to collection and use), under [My Page ➔ Profile/Settings] in the Service.",
              "Users may request access, correction, deletion or suspension of processing of their personal information through 1:1 customer support inquiries, or in writing or by email to the Chief Privacy Officer, and the Company will act without delay.",
            ],
          },
        ],
      },
      {
        heading: "8. Measures to Ensure the Security of Personal Information",
        blocks: [
          {
            type: "p",
            text: "In handling users’ personal information, the Company takes the following technical and managerial measures to prevent loss, theft, leakage, alteration or damage:",
          },
          {
            type: "ol",
            items: [
              "**Encryption of passwords and other important information**: Passwords and other important information are encrypted when stored and managed.",
              "**Network security**: SSL/TLS encrypted communication is applied to every channel through which personal information is transmitted.",
              "**Access restriction**: Access rights to personal information processing systems are kept to a minimum and access control policies are strictly enforced.",
            ],
          },
        ],
      },
      {
        heading: "9. Chief Privacy Officer and Responsible Department",
        blocks: [
          {
            type: "p",
            text: "You may direct any personal-information-related complaint arising from your use of the Service to the officer and department below.",
          },
          {
            type: "ul",
            items: [
              "**Chief Privacy Officer (CPO)**: 홍희진",
              "**Email**: support@vibetrip.co.kr",
              "**Customer support**: in-app 1:1 inquiry channel",
            ],
          },
        ],
      },
    ],
    dates: [
      { label: "Announced on", value: "September 19, 2026" },
      { label: "Effective on", value: "September 19, 2026" },
    ],
  },
};

export default legalEn;
