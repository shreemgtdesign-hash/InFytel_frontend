// Infytel API Service with live fetch + comprehensive fallback data

export const HOME_DEFAULT_DATA = {
  "heroSlides": [
    {
      "id": "why-infytel-hero-slide",
      "pillar": "WHY_INFYTEL",
      "badge": "Welcome to Infytel",
      "headline": "Powering growth With technology.",
      "subheadline": "Lagos-based enterprise IT partner delivering AI, fintech, cloud and cybersecurity",
      "description": "Infytel Communications is a Lagos-based IT company delivering AI, fintech, cloud and cybersecurity solutions to Africa's leading banks, government bodies and enterprises.",
      "primaryCtaText": "Explore Services",
      "primaryCtaLink": "/services",
      "secondaryCtaText": "Discover Infytel",
      "secondaryCtaLink": "/about",
      "visualType": "3d-orbit-sphere",
      "visualUrl": null,
      "metrics": {
        "brandsServed": "60+",
        "growth": "+18.4%",
        "uptimeSla": "92%",
        "industries": ["Banking", "Government", "Retail", "Hospitality"],
        "chartTitle": "Solutions Delivered",
        "chartData": [45, 70, 60, 88, 75, 95, 50, 30]
      },
      "displayOrder": 1,
      "isActive": true,
      "createdAt": "2026-11-24T09:20:08.484Z",
      "updatedAt": "2026-11-24T09:20:08.484Z"
    },
    {
      "id": "9acbfa4d-6afe-4b53-b959-dc6be9079d1e",
      "pillar": "AI_AUTOMATION",
      "badge": "AI-Powered Automation",
      "headline": "Smarter service. Happier Customers.",
      "subheadline": "Conversational AI, robotic process automation, and intelligent service desks",
      "description": "Infytel's AI chatbots answer, route and resolve customer queries across WhatsApp, web and mobile — instantly, in any language.",
      "primaryCtaText": "Explore Services",
      "primaryCtaLink": "/services",
      "secondaryCtaText": "Explore AI Chatbot",
      "secondaryCtaLink": "/services/ai-automation",
      "visualType": "3d-robot-agent",
      "visualUrl": null,
      "metrics": {
        "responseTime": "< 15 min",
        "deflectionRate": "60%",
        "queriesResolved": "70%",
        "growth": "+18.4%",
        "csat": "92%",
        "channels": ["WhatsApp", "Web chat", "Mobile app", "Email"]
      },
      "displayOrder": 2,
      "isActive": true,
      "createdAt": "2026-11-24T09:20:08.484Z",
      "updatedAt": "2026-11-24T09:20:08.484Z"
    },
    {
      "id": "60d8abf7-e89a-484c-9753-bb06adfd7036",
      "pillar": "FINANCIAL_TECH",
      "badge": "Fintech Solutions",
      "headline": "Safer Payment. Faster Growth.",
      "subheadline": "Centralized core banking, anti-money laundering, and smart POS payments",
      "description": "From card issuing to anti-money laundering and fraud risk management — trusted by Africa's leading banks to move money securely.",
      "primaryCtaText": "Explore Services",
      "primaryCtaLink": "/services",
      "secondaryCtaText": "Explore Cards and Payments",
      "secondaryCtaLink": "/services/financial-technology",
      "visualType": "3d-smartcard",
      "visualUrl": null,
      "metrics": {
        "fraudReduction": "42%",
        "loanDisbursementGrowth": "35%",
        "transactions": "2.4M",
        "growth": "+26.4%",
        "fraudBlocker": "92%",
        "compliance": ["KYC", "AML", "Fraud", "Cards"]
      },
      "displayOrder": 3,
      "isActive": true,
      "createdAt": "2026-11-24T09:20:08.484Z",
      "updatedAt": "2026-11-24T09:20:08.484Z"
    },
    {
      "id": "529e4061-ff71-47c4-921e-520ccd8bfc31",
      "pillar": "CYBERSECURITY",
      "badge": "Cybersecurity",
      "headline": "Stronger defence. Zero downtime.",
      "subheadline": "Proactive enterprise defense, identity protection, and regulatory compliance",
      "description": "Unified threat management, privileged access and round-the-clock network monitoring that stop attacks before they reach you.",
      "primaryCtaText": "Get in touch",
      "primaryCtaLink": "/contact",
      "secondaryCtaText": "Explore IT Security",
      "secondaryCtaLink": "/services/cybersecurity",
      "visualType": "3d-shield",
      "visualUrl": null,
      "metrics": {
        "uptime": "99.9%",
        "breaches": 0,
        "complianceRate": "100%",
        "threatsStopped": "1.2M",
        "growth": "+41.7%",
        "riskReduced": "87%",
        "protection": ["Firewall", "SASE", "PAM", "SOC"]
      },
      "displayOrder": 4,
      "isActive": true,
      "createdAt": "2026-11-24T09:20:08.484Z",
      "updatedAt": "2026-11-24T09:20:08.484Z"
    }
  ],
  "partners": [
    {
      "id": "61301f3f-1051-4165-9d94-a78da323e224",
      "name": "Zenith Bank",
      "slug": "zenith-bank",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/zenith-bank.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.zenithbank.com",
      "description": "Tier-1 commercial banking and enterprise digital payments partner.",
      "displayOrder": 1,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "8154e6a0-5761-403d-b591-48650999b1dd",
      "name": "FCMB",
      "slug": "fcmb",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/fcmb.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.fcmb.com",
      "description": "First City Monument Bank digital banking and financial technology partner.",
      "displayOrder": 2,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "2a92c228-80ec-43f6-a2df-95b4037702ec",
      "name": "GTBank",
      "slug": "gtbank",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/gtbank.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.gtbank.com",
      "description": "Guaranty Trust Bank enterprise banking and cloud infrastructure partner.",
      "displayOrder": 3,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "5559a46a-6d8b-438b-af10-299956904a92",
      "name": "Access Bank",
      "slug": "access-bank",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/access-bank.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.accessbankplc.com",
      "description": "Pan-African commercial banking and mission-critical ICT partner.",
      "displayOrder": 4,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "6da92c36-e5a6-471a-8ba7-1eeaf08c18e9",
      "name": "Wema Bank",
      "slug": "wema-bank",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/wema-bank.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.wemabank.com",
      "description": "Digital banking innovation and automated financial services partner.",
      "displayOrder": 5,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "00990376-9745-4c58-8d2b-4d3f22c24d8e",
      "name": "UBA",
      "slug": "uba",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/uba.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.ubagroup.com",
      "description": "United Bank for Africa pan-African enterprise technology and banking partner.",
      "displayOrder": 6,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "5143a447-9ec8-4246-a99f-812fc5510609",
      "name": "Stanbic IBTC",
      "slug": "stanbic-ibtc",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/stanbic-ibtc.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.stanbicibtcbank.com",
      "description": "Corporate investment banking, wealth, and secure enterprise operations partner.",
      "displayOrder": 7,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    },
    {
      "id": "943ef55d-6b28-4013-9dee-b651fca4472b",
      "name": "Standard Chartered",
      "slug": "standard-chartered",
      "logoUrl": "https://zbiimbluzudgfnfxwvkd.supabase.co/storage/v1/object/public/infytel-assets/partners/standard-chartered.jpg",
      "partnerType": "Banking & Financial Partner",
      "tier": "Enterprise Partner",
      "websiteUrl": "https://www.sc.com",
      "description": "International corporate and institutional banking technology partner.",
      "displayOrder": 8,
      "isActive": true,
      "createdAt": "2026-11-26T11:12:15.736Z",
      "updatedAt": "2026-11-26T11:12:15.736Z"
    }
  ],
  "empoweringBusiness": {
    "headline": "Efficient technology to turn powerful engine of growth.",
    "aboutUrl": "/about",
    "stats": [
      {
        "id": "63beec73-61e0-4e53-ab23-bb5097683f6d",
        "key": "uptime",
        "label": "Uptime Guaranteed",
        "numericValue": "99.9",
        "suffix": "%",
        "description": "Tier-3 data center availability with enterprise SLA",
        "icon": null,
        "displayOrder": 1,
        "isHighlight": false,
        "createdAt": "2026-11-24T09:20:04.493Z",
        "updatedAt": "2026-11-24T09:20:04.493Z"
      },
      {
        "id": "3577cd79-8228-4794-8719-ed8e98476bcd",
        "key": "experience",
        "label": "Industry Experience",
        "numericValue": "15",
        "suffix": "+ YEARS",
        "description": "Delivering mission-critical enterprise systems across Africa",
        "icon": null,
        "displayOrder": 2,
        "isHighlight": false,
        "createdAt": "2026-11-24T09:20:04.493Z",
        "updatedAt": "2026-11-24T09:20:04.493Z"
      },
      {
        "id": "3c27c071-4811-4dbc-9273-59d53eb734b2",
        "key": "projects",
        "label": "Projects Delivered",
        "numericValue": "200",
        "suffix": "+ PROJECTS",
        "description": "Successfully deployed across multiple industry verticals",
        "icon": null,
        "displayOrder": 3,
        "isHighlight": false,
        "createdAt": "2026-11-24T09:20:04.493Z",
        "updatedAt": "2026-11-24T09:20:04.493Z"
      },
      {
        "id": "756ce269-dd88-4445-9afe-5d663d675893",
        "key": "clients",
        "label": "Enterprise Clients",
        "numericValue": "80",
        "suffix": "+",
        "description": "Trusted by major financial institutions and government entities",
        "icon": null,
        "displayOrder": 4,
        "isHighlight": true,
        "createdAt": "2026-11-24T09:20:04.493Z",
        "updatedAt": "2026-11-24T09:20:04.493Z"
      }
    ]
  },
  "visionMission": {
    "id": "16d6da99-ee4d-41dd-b084-e4c6b01030c9",
    "headline": "Business growth is our core motivation. We seek out the best technology in the world and make it work for Africa's most forward-thinking companies.",
    "visionTitle": "Our Vision",
    "visionText": "To be the most trusted technology partner for organisations across global, turning every complex requirement into a solution that works.",
    "visionIcon": "bullseye",
    "missionTitle": "Our Mission",
    "missionText": "We are committed to providing exceptional software engineering, cloud architecture, and cybersecurity services. By bridging the gap between business needs and technological capabilities, we help our clients thrive in a digital-first economy.",
    "missionIcon": "flag",
    "coreValues": [
      "Listen",
      "Recommend",
      "Deliver",
      "Support"
    ],
    "updatedAt": "2026-11-24T09:20:06.708Z"
  },
  "practicesSection": {
    "badge": "# OUR PRACTICES & SOLUTIONS",
    "headline": "Seven practices, 31 Solutions. One Partner.",
    "description": "From individual technologies to end-to-end transformation, our 7 core practices cover every layer of modern enterprise ICT.",
    "practices": [
      {
        "id": "10f2cd3b-5e38-49fa-b8ec-5876efb00f5c",
        "code": "01",
        "name": "AI & Automation",
        "slug": "ai-automation",
        "tagline": "Streamline operations with conversational AI and robotic automation",
        "description": "Harness machine learning, intelligent document processing, and robotic automation bots to drive operational efficiency.",
        "icon": "bot",
        "badge": "High Impact",
        "displayOrder": 1,
        "isActive": true,
        "solutions": [
          {
            "id": "497d1e8d-506d-4e35-9e14-7dab2264022a",
            "name": "Conversational AI & Omni-Channel Chatbots",
            "slug": "conversational-ai-chatbots",
            "shortSummary": "Multi-lingual customer service bots integrated with WhatsApp, web, and social channels.",
            "fullDescription": "Deploy intelligent conversational assistants powered by natural language processing that handle customer inquiries, process service requests, and integrate directly with CRM and ticketing systems 24/7.",
            "features": [
              "WhatsApp Business integration",
              "Natural Language Understanding",
              "CRM two-way sync",
              "Live human agent handover"
            ],
            "benefits": [
              "60% routine ticket deflection",
              "Instant 24/7 response time",
              "Consistent customer satisfaction score"
            ],
            "specifications": {
              "channels": "WhatsApp, Web, Mobile App",
              "apiSupport": "REST / Webhook",
              "deployment": "Cloud / On-premise"
            },
            "oemPartners": ["Freshworks", "Konnect Insight"],
            "targetSectors": ["Financial services", "Hospitality", "Real estate"],
            "isFeatured": true
          },
          {
            "id": "d8aada38-35cd-439e-a375-36a91d4036e6",
            "name": "Robotic Process Automation (RPA)",
            "slug": "robotic-process-automation",
            "shortSummary": "Software bots automating high-volume, rule-based data entry and approvals.",
            "fullDescription": "Automate repetitive back-office operations across legacy banking platforms, web portals, and spreadsheets with custom RPA workflows that drastically reduce human error.",
            "features": [
              "Cross-platform GUI automation",
              "OCR document parsing",
              "Scheduled unattended workflows",
              "Audit trail generation"
            ],
            "benefits": [
              "90% reduction in processing cycle time",
              "Zero human transcription error",
              "Scalable burst capability"
            ],
            "specifications": {
              "protocols": "RDP, Citrix, Web, Database",
              "environment": "Windows Server"
            },
            "oemPartners": ["Rumango"],
            "targetSectors": ["Financial services", "Government"],
            "isFeatured": true
          }
        ]
      },
      {
        "id": "bd82fb96-f3c1-4f0d-9a53-0383e22807b1",
        "code": "02",
        "name": "Financial Technology",
        "slug": "financial-technology",
        "tagline": "Modernize core banking, fraud defense, and digital payment networks",
        "description": "Comprehensive financial software, secure biometric payment terminals, and real-time AML regulatory compliance suites.",
        "icon": "credit-card",
        "badge": "Core Competency",
        "displayOrder": 2,
        "isActive": true,
        "solutions": [
          {
            "id": "dd0de721-0709-495c-a26e-5ca04b699c18",
            "name": "Anti-Money Laundering (AML) & Fraud Risk Management",
            "slug": "aml-fraud-risk-management",
            "shortSummary": "Real-time transaction surveillance, sanction screening, and regulatory compliance.",
            "fullDescription": "Protect financial institutions with advanced transaction monitoring engines that detect suspicious behaviors like smurfing, execute automated sanction screening against global watchlists, and generate CBN-compliant reports.",
            "features": [
              "Real-time rule & scenario engine",
              "PEP & OFAC sanction screening",
              "Automated STR/CTR reporting",
              "Risk scoring matrix"
            ],
            "benefits": [
              "42% faster fraud case resolution",
              "Full statutory regulatory compliance",
              "Reduced false positive alerts"
            ],
            "specifications": {
              "compliance": "FATF, CBN Guidelines, ISO 20022",
              "throughput": "Up to 5,000 TPS"
            },
            "oemPartners": ["Rumango"],
            "targetSectors": ["Financial services"],
            "isFeatured": true
          },
          {
            "id": "86582bf7-70fe-49e6-ad68-9471327b7ecd",
            "name": "Core Banking & Digital Agency Banking",
            "slug": "core-agency-banking",
            "shortSummary": "Centralized banking ledger, mobile wallets, and field agent distribution network.",
            "fullDescription": "A cloud-native omni-channel core banking platform built for commercial banks, MFBs, and fintechs, supporting deposit accounts, micro-loans, transfers, and field agency operations.",
            "features": [
              "Multi-currency GL engine",
              "Agent POS banking module",
              "Mobile wallet & USSD bridge",
              "Loan origination system"
            ],
            "benefits": [
              "Rapid time to market for new products",
              "Scalable branchless banking reach",
              "Lower cost per transaction"
            ],
            "specifications": {
              "database": "PostgreSQL",
              "security": "PCI-DSS certified",
              "architecture": "Microservices"
            },
            "oemPartners": ["Rumango", "Feitian"],
            "targetSectors": ["Financial services"],
            "isFeatured": true
          },
          {
            "id": "a45a9952-70e8-436f-b5d9-6b2a509117e6",
            "name": "Feitian Smart POS & Payment Terminals",
            "slug": "feitian-smart-pos-terminals",
            "shortSummary": "EMV and biometric-certified payment terminals with custom merchant applications.",
            "fullDescription": "Enterprise distribution and firmware customization of Feitian Android-powered smart POS terminals supporting contactless NFC, chip cards, biometric fingerprint verification, and integrated merchant settlement.",
            "features": [
              "Contactless NFC & EMV Chip",
              "Integrated thermal receipt printer",
              "4G LTE & Wi-Fi connectivity",
              "Remote MDM device management"
            ],
            "benefits": [
              "Seamless field payments",
              "High transaction speed",
              "Tamper-resistant security architecture"
            ],
            "specifications": {
              "os": "Android OS (Security Hardened)",
              "certifications": "PCI PTS 5.x / 6.x, EMV L1/L2"
            },
            "oemPartners": ["Feitian"],
            "targetSectors": ["Financial services", "Hospitality", "Real estate"],
            "isFeatured": true
          }
        ]
      },
      {
        "id": "670f3abe-999e-428a-beb3-74989357431b",
        "code": "03",
        "name": "Cloud & Data",
        "slug": "cloud-data",
        "tagline": "Resilient cloud infrastructure, database architecture, and data engineering",
        "description": "Architecting high-availability cloud platforms, multi-region database replication, and automated disaster recovery.",
        "icon": "cloud",
        "badge": "Enterprise Grade",
        "displayOrder": 3,
        "isActive": true,
        "solutions": [
          {
            "id": "2399d819-a4c4-4159-9068-5e5b0fdcb3a6",
            "name": "Enterprise Cloud Migration & Architecture",
            "slug": "enterprise-cloud-migration",
            "shortSummary": "Migrate on-premise mission-critical workloads to hybrid or private cloud environments.",
            "fullDescription": "End-to-end cloud infrastructure planning, lift-and-shift, database refactoring, and zero-downtime cutover backed by 99.99% availability SLAs.",
            "features": [
              "Hybrid cloud architecture",
              "Zero-downtime database replication",
              "Infrastructure as Code (Terraform)",
              "FinOps cost optimization"
            ],
            "benefits": [
              "40% reduction in infrastructure TCO",
              "High elasticity and autoscaling",
              "Automated disaster recovery"
            ],
            "specifications": {
              "sla": "99.99%",
              "platforms": "Microsoft Azure, AWS, Private Cloud"
            },
            "oemPartners": ["Microsoft", "Dell"],
            "targetSectors": ["Government", "Financial services", "Hospitality"],
            "isFeatured": true
          }
        ]
      },
      {
        "id": "ccc2ce00-b21e-4547-8d35-dd3beb7fbaf5",
        "code": "04",
        "name": "Cybersecurity",
        "slug": "cybersecurity",
        "tagline": "Zero-trust defense, identity access management, and threat response",
        "description": "Protect enterprise digital assets with multi-factor authentication, perimeter firewalls, data encryption, and 24/7 security monitoring.",
        "icon": "shield-check",
        "badge": "Zero Breach",
        "displayOrder": 4,
        "isActive": true,
        "solutions": [
          {
            "id": "7656a034-616d-4f8e-ab1d-d9e7ae948016",
            "name": "Multi-Factor Authentication & HSM Security",
            "slug": "mfa-hsm-security",
            "shortSummary": "Hardware security modules, OTP tokens, and enterprise FIDO2 biometric authentication.",
            "fullDescription": "Deploy un-phishable multi-factor authentication across enterprise VPNs, workstations, and banking apps using Feitian hardware tokens and cloud IAM integrations.",
            "features": [
              "FIDO2 / WebAuthn tokens",
              "PKI and smart card certificates",
              "Privileged Access Management (PAM)",
              "Hardware Security Modules (HSM)"
            ],
            "benefits": [
              "Complete mitigation of credential theft",
              "Regulatory compliance with CBN and global standards",
              "Seamless user sign-in flow"
            ],
            "specifications": {
              "standard": "FIDO Alliance, ISO 27001, CC EAL5+",
              "interface": "USB-A, USB-C, NFC, Bluetooth"
            },
            "oemPartners": ["Feitian"],
            "targetSectors": ["Financial services", "Government"],
            "isFeatured": true
          }
        ]
      },
      {
        "id": "9dbfd26c-c158-4f77-b0b1-cf970525f199",
        "code": "05",
        "name": "Enterprise & Collaboration",
        "slug": "enterprise-collaboration",
        "tagline": "Unified helpdesk, IT service management, and corporate productivity",
        "description": "Streamline internal employee workflows and external customer support with ITIL-compliant service management suites.",
        "icon": "users",
        "badge": "CX & EX",
        "displayOrder": 5,
        "isActive": true,
        "solutions": [
          {
            "id": "1d3c6ba2-a3d4-4549-b523-0c0e93e75a60",
            "name": "ITSM & Omni-Channel Enterprise Helpdesk",
            "slug": "itsm-omnichannel-helpdesk",
            "shortSummary": "Freshservice-powered ITIL service desk and omnichannel ticketing for fast issue resolution.",
            "fullDescription": "Unify IT asset management, incident ticketing, SLA tracking, and employee self-service portals with AI-assisted resolution workflows.",
            "features": [
              "ITIL-aligned incident & change management",
              "Automated SLA escalation rules",
              "Asset lifecycle tracking",
              "Mobile app for IT agents"
            ],
            "benefits": [
              "Response times under 15 minutes",
              "30% increase in first-contact resolution",
              "Full visibility across hardware assets"
            ],
            "specifications": {
              "delivery": "SaaS / Hybrid",
              "integration": "Active Directory, Slack, Teams"
            },
            "oemPartners": ["Freshworks"],
            "targetSectors": ["Government", "Hospitality", "Real estate", "Financial services"],
            "isFeatured": true
          }
        ]
      },
      {
        "id": "03a6347c-dd1d-4a01-ae11-6b0b42198e3e",
        "code": "06",
        "name": "Infrastructure & Hardware",
        "slug": "infrastructure-hardware",
        "tagline": "Enterprise networking, server appliances, and unified communications",
        "description": "Turnkey physical ICT infrastructure from Dell enterprise servers and Cisco SD-WAN to high-definition IP voice and video systems.",
        "icon": "server",
        "badge": "Turnkey ICT",
        "displayOrder": 6,
        "isActive": true,
        "solutions": [
          {
            "id": "64ff7f79-9e91-4ef2-b5c7-d5e63cfaa7ea",
            "name": "Enterprise Networking & Voice/Video Solutions",
            "slug": "enterprise-networking-voice-video",
            "shortSummary": "Structured cabling, Cisco switching, enterprise IP-PBX, and WebRTC video conferencing.",
            "fullDescription": "Design and deploy robust corporate networks with secure Wi-Fi, high-definition SIP trunking, IP telephony, and unified video rooms.",
            "features": [
              "Gigabit switching & routing",
              "High-density Wi-Fi 6",
              "Enterprise IP-PBX telephony",
              "WebRTC video room integration"
            ],
            "benefits": [
              "Crystal-clear voice and video quality",
              "Rock-solid network uptime",
              "Centralized network management"
            ],
            "specifications": {
              "hardware": "Cisco, Dell PowerEdge",
              "protocols": "SIP, H.323, WebRTC"
            },
            "oemPartners": ["Cisco", "Dell"],
            "targetSectors": ["Government", "Real estate", "Hospitality"],
            "isFeatured": true
          }
        ]
      },
      {
        "id": "6097bdbe-5efd-4b63-b13f-b2f1b00b8aa9",
        "code": "07",
        "name": "Digital & Engineering",
        "slug": "digital-engineering",
        "tagline": "Custom software development, web platforms, and mobile apps",
        "description": "Bespoke web applications, cross-platform mobile apps, and robust API microservices engineered for high scalability.",
        "icon": "code",
        "badge": "Agile Delivery",
        "displayOrder": 7,
        "isActive": true,
        "solutions": [
          {
            "id": "c11cd0f8-37d8-4133-aeaf-3e40b224eb49",
            "name": "Custom Web & Mobile Application Engineering",
            "slug": "custom-web-mobile-engineering",
            "shortSummary": "Modern React, Node.js, and native mobile apps tailored to unique business operations.",
            "fullDescription": "From customer-facing self-service portals to complex ERP dashboards, we engineer scalable, secure, and modern digital software platforms.",
            "features": [
              "Modern React & Node.js architecture",
              "RESTful & Socket.IO APIs",
              "Strict role-based access control",
              "Automated CI/CD deployment"
            ],
            "benefits": [
              "Tailored 100% to your workflows",
              "No recurring per-seat software licensing fees",
              "Complete IP ownership"
            ],
            "specifications": {
              "stack": "React, Node.js, PostgreSQL, Docker",
              "standards": "OWASP Top 10 Security"
            },
            "oemPartners": ["Microsoft"],
            "targetSectors": ["Financial services", "Government", "Real estate", "Hospitality"],
            "isFeatured": true
          }
        ]
      }
    ]
  },
  "excellenceFramework": {
    "headline": "From complex requirements to functional excellence",
    "subtitle": "A structured, five-stage delivery model that ensures predictable outcomes, zero surprises, and continuous value.",
    "stages": [
      {
        "id": "196fcf84-bae4-4c70-bfa3-a8baa7f4d0e8",
        "stageNumber": 1,
        "stageName": "Discover",
        "subtitle": "Stage 01 - Business Analysis & Audit",
        "description": "We audit existing infrastructure, document pain points, map stakeholder requirements, and define clear success metrics.",
        "deliverables": [
          "Infrastructure & Security Audit Report",
          "Stakeholder Requirements Specification",
          "Project Scope & Feasibility Matrix"
        ],
        "icon": "search",
        "displayOrder": 1
      },
      {
        "id": "184f994d-df23-4cc2-9658-08424b312149",
        "stageNumber": 2,
        "stageName": "Design",
        "subtitle": "Stage 02 - Solution Architecture",
        "description": "Architecting scalable, vendor-agnostic blueprints with rigorous security and compliance baked in.",
        "deliverables": [
          "System Architecture Blueprint",
          "OEM Hardware & Software Bill of Materials",
          "Data Flow & Integration Schema"
        ],
        "icon": "pen-tool",
        "displayOrder": 2
      },
      {
        "id": "117336e9-aeb1-4d72-82fc-93f6005b1db3",
        "stageNumber": 3,
        "stageName": "Build & Integrate",
        "subtitle": "Stage 03 - Engineering & Deployment",
        "description": "Agile deployment, custom integration, legacy migration, and automated testing with named workstream owners.",
        "deliverables": [
          "Custom Code & API Integrations",
          "OEM Terminal & Server Hardware Provisioning",
          "Database Migration Scripts"
        ],
        "icon": "cpu",
        "displayOrder": 3
      },
      {
        "id": "02ac22e5-3047-41a3-928d-fa391db6797c",
        "stageNumber": 4,
        "stageName": "Test & Validate",
        "subtitle": "Stage 04 - Quality Assurance & Security",
        "description": "Performance testing, user acceptance testing (UAT), penetration testing, and security hardening.",
        "deliverables": [
          "UAT Sign-off Documentation",
          "Vulnerability Assessment & Pen-Test Report",
          "Stress & Load Testing Benchmarks"
        ],
        "icon": "check-circle",
        "displayOrder": 4
      },
      {
        "id": "272b3fe3-8932-4f7e-92eb-c595dc8553d8",
        "stageNumber": 5,
        "stageName": "Deploy & Support",
        "subtitle": "Stage 05 - Operations & Evolution",
        "description": "Seamless zero-downtime cutover, comprehensive staff training, 24/7 SLA monitoring, and continuous optimization.",
        "deliverables": [
          "Cutover Runbook Execution",
          "Staff Training Modules & User Manuals",
          "24/7 SLA Monitoring Dashboard"
        ],
        "icon": "life-buoy",
        "displayOrder": 5
      }
    ]
  },
  "realOutcomes": {
    "badge": "SUCCESS STORIES",
    "headline": "Real outcomes for real businesses",
    "subtitle": "How we've helped banks, retailers and insurers solve hard problems with the right technology.",
    "kpis": [
      {
        "id": "bb016690-a969-4d2d-b233-4a2b070d515e",
        "key": "projects_delivered",
        "label": "Projects delivered",
        "value": 104,
        "icon": "target",
        "displayOrder": 1
      },
      {
        "id": "f0957513-6995-4288-b5c7-ae6d040d16b3",
        "key": "active_clients",
        "label": "Active clients",
        "value": 83,
        "icon": "users",
        "displayOrder": 2
      },
      {
        "id": "7a8f4e94-1cc6-4c7f-8bbb-c8b155fcfae2",
        "key": "solutions_live",
        "label": "Solutions live",
        "value": 31,
        "icon": "layers",
        "displayOrder": 3
      },
      {
        "id": "26929020-05c7-4656-a5fb-47741848f1fe",
        "key": "sectors_served",
        "label": "Sectors served",
        "value": 4,
        "icon": "building",
        "displayOrder": 4
      }
    ],
    "growthChart": {
      "title": "Growth since 2021",
      "subtitle": "Projects delivered per year",
      "defaultMetric": "projects",
      "yAxisTicks": [0, 30, 60, 90, 120],
      "toggles": [
        {
          "key": "projects",
          "label": "Projects",
          "subtitle": "Projects delivered per year",
          "unitLabel": "projects delivered"
        },
        {
          "key": "clients",
          "label": "Clients",
          "subtitle": "Active clients per year",
          "unitLabel": "active clients"
        }
      ],
      "series": [
        {
          "id": "949cd6a1-6117-4be1-b777-26ced56e8c2c",
          "year": 2021,
          "projectsCount": 32,
          "clientsCount": 18
        },
        {
          "id": "4600df06-ab8c-458b-9e99-a003ecef8b04",
          "year": 2022,
          "projectsCount": 48,
          "clientsCount": 31
        },
        {
          "id": "9a66fbde-607f-4e4a-8e13-4edd7919861b",
          "year": 2023,
          "projectsCount": 74,
          "clientsCount": 47
        },
        {
          "id": "0e73349f-47a5-4a56-9795-a6d9f8e80f07",
          "year": 2024,
          "projectsCount": 60,
          "clientsCount": 54
        },
        {
          "id": "2c2dad9f-1986-4569-8583-1351bc9b913e",
          "year": 2025,
          "projectsCount": 60,
          "clientsCount": 65
        },
        {
          "id": "40440d72-dd21-423e-b432-fd91dc751063",
          "year": 2026,
          "projectsCount": 120,
          "clientsCount": 83
        }
      ]
    },
    "sectorBreakdown": {
      "title": "Projects by sector",
      "subtitle": "Share of delivered projects",
      "centerValue": 104,
      "centerLabel": "projects",
      "sectors": [
        {
          "id": "00a7df33-6e9c-4296-ad8b-b4958ecda035",
          "name": "Financial Services",
          "slug": "financial-services",
          "projectSharePercent": 75,
          "chartColor": "#00B4D8",
          "outcomeDisplayOrder": 1
        },
        {
          "id": "60d84d16-9f3e-415e-98ee-8461cd687dad",
          "name": "Government",
          "slug": "government",
          "projectSharePercent": 16,
          "chartColor": "#FB923C",
          "outcomeDisplayOrder": 2
        },
        {
          "id": "de1392f3-49bf-4495-9c70-f5e6ceb37628",
          "name": "Real Estate",
          "slug": "real-estate",
          "projectSharePercent": 25,
          "chartColor": "#FB7185",
          "outcomeDisplayOrder": 3
        },
        {
          "id": "424e9ef9-0001-426c-8799-67d775c7cfa4",
          "name": "Hospitality",
          "slug": "hospitality",
          "projectSharePercent": 38,
          "chartColor": "#FFFFFF",
          "outcomeDisplayOrder": 4
        }
      ]
    },
    "caseStudies": [
      {
        "id": "3713d06e-26a5-4673-a92e-b3a419815455",
        "title": "Tier-1 Commercial Bank AML Transformation",
        "slug": "commercial-bank-aml-transformation",
        "sector": "FINANCIAL SECTOR",
        "metricValue": "42%",
        "metricLabel": "Reduction in fraud incident resolution time",
        "headline": "Automating regulatory transaction surveillance for 12+ million daily transactions",
        "clientMasked": "Tier-1 Commercial Bank, Nigeria",
        "challenge": "A legacy transaction monitoring system with a 65% false positive rate was overwhelming compliance teams and delaying CBN reports.",
        "solutionText": "Deployed an automated AML engine integrated directly into the core banking switch, with automated sanction screening and rule-based clustering.",
        "resultsText": "42% decrease in fraud investigation cycle time, 100% on-time statutory CBN filings, and 50% fewer false positive escalations.",
        "displayOrder": 1,
        "isFeatured": true
      },
      {
        "id": "01fea90d-8129-437d-a340-209e9f0faee3",
        "title": "Microfinance Agency Banking Scale",
        "slug": "microfinance-agency-banking-scale",
        "sector": "MICROFINANCE BANKING",
        "metricValue": "35%",
        "metricLabel": "Increase in digital loan disbursement volume",
        "headline": "Enabling branchless financial inclusion across 400+ agent locations",
        "clientMasked": "National Microfinance Institution",
        "challenge": "Rural and semi-urban customers faced 3-day approval turnaround times for essential micro-enterprise credit.",
        "solutionText": "Equipped field agents with Feitian biometric Android POS terminals connected to a centralized digital lending and account opening engine.",
        "resultsText": "35% boost in disbursement volume within the first 6 months, and loan processing times dropped from 3 days to under 10 minutes.",
        "displayOrder": 2,
        "isFeatured": true
      },
      {
        "id": "096c1e7d-6810-462e-b05d-0c50fafead8f",
        "title": "Healthcare & Enterprise Unified Helpdesk",
        "slug": "healthcare-unified-helpdesk",
        "sector": "HEALTHCARE / ENTERPRISE",
        "metricValue": "< 15 min",
        "metricLabel": "Average first response time achieved",
        "headline": "Centralizing ITIL incident management across multi-site hospital network",
        "clientMasked": "Leading Private Healthcare Network",
        "challenge": "Uncoordinated IT support requests across 6 hospital locations caused medical workstation downtime and delayed patient admissions.",
        "solutionText": "Implemented Freshservice ITSM with omnichannel ticketing, WhatsApp submission, and automated priority routing for critical care equipment.",
        "resultsText": "First response time slashed to under 15 minutes, with critical incident resolution improved by 60%.",
        "displayOrder": 3,
        "isFeatured": true
      }
    ]
  },
  "testimonialsSection": {
    "headline": "Loved by the teams who run Africa's business",
    "testimonials": [
      {
        "id": "7afb7672-1acf-4bf5-98ff-f40f909000d1",
        "authorName": "Adebayo Ogunlesi",
        "designation": "Chief Information Officer",
        "company": "Apex Commercial Bank",
        "industry": "Banking",
        "rating": 5,
        "quote": "Infytel delivered our AML and payment monitoring platform ahead of schedule. Their local engineering team in Lagos understands African banking compliance like nobody else.",
        "isFeatured": true,
        "displayOrder": 1
      },
      {
        "id": "40f0069c-cb3d-462e-a5f1-e79d9a0cabba",
        "authorName": "Ngozi Eze",
        "designation": "Head of Operations",
        "company": "Prime Microfinance Bank",
        "industry": "Microfinance",
        "rating": 5,
        "quote": "Deploying Feitian POS terminals through Infytel transformed our field agency banking. Uptime is 99.9%, and our agent network doubled within 6 months.",
        "isFeatured": true,
        "displayOrder": 2
      },
      {
        "id": "43500db7-b02e-4c0a-bc96-67b791649710",
        "authorName": "Chidi Okonkwo",
        "designation": "Director of ICT",
        "company": "State Internal Revenue Service",
        "industry": "Government",
        "rating": 5,
        "quote": "The digital revenue collection infrastructure built by Infytel has been rock solid. Citizen transaction reconciliation is now real-time and fully automated.",
        "isFeatured": true,
        "displayOrder": 3
      },
      {
        "id": "8ef4d138-784f-4197-9c83-9d8fae40aa2d",
        "authorName": "Folake Adeleke",
        "designation": "Chief Operating Officer",
        "company": "Grand Horizon Hospitality Group",
        "industry": "Hospitality",
        "rating": 5,
        "quote": "From high-density guest Wi-Fi to automated customer service helpdesks, Infytel handles our multi-hotel technology seamlessly.",
        "isFeatured": true,
        "displayOrder": 4
      },
      {
        "id": "ffc7e14f-06a2-40df-9955-c4b40f977ef7",
        "authorName": "Tunde Bakare",
        "designation": "VP of Technology",
        "company": "Vanguard Capital Partners",
        "industry": "Investment & Finance",
        "rating": 5,
        "quote": "Their zero-trust cybersecurity posture and hardware MFA implementation gave our board complete confidence in safeguarding client portfolios.",
        "isFeatured": true,
        "displayOrder": 5
      },
      {
        "id": "3777c974-802d-42f3-b590-a83229e099fd",
        "authorName": "Khadijah Sanusi",
        "designation": "Managing Director",
        "company": "Bluecrest Real Estate Assets",
        "industry": "Real Estate",
        "rating": 5,
        "quote": "Infytel bridged the gap between our complex facility management needs and intuitive digital tenant portals. Outstanding delivery.",
        "isFeatured": true,
        "displayOrder": 6
      },
      {
        "id": "9d8effed-c8f3-4167-a4d4-7b44d6fd45c6",
        "authorName": "Emeka Nwosu",
        "designation": "Head of Customer Experience",
        "company": "OmniHealth Services",
        "industry": "Healthcare",
        "rating": 5,
        "quote": "We cut our patient ticket response time to under 15 minutes. The Freshworks ITSM integration powered by Infytel was an absolute game changer.",
        "isFeatured": true,
        "displayOrder": 7
      },
      {
        "id": "2ece83d6-6dc7-4a33-9cf2-8969cc43b4c1",
        "authorName": "Olumide Jacobs",
        "designation": "Enterprise Architect",
        "company": "Trans-Atlantic Logistics",
        "industry": "Logistics",
        "rating": 5,
        "quote": "Working with Infytel feels like having an extension of our internal IT team. Pragmatic solutions, transparent communication, and zero surprises.",
        "isFeatured": true,
        "displayOrder": 8
      }
    ]
  },
  "newsSection": {
    "headline": "Latest news, launches & partnerships",
    "articles": [
      {
        "id": "c4b694c8-0a56-48bf-ba0c-859e7f482818",
        "title": "Why Africa's banks are accelerating their AML and fraud detection transition",
        "slug": "africas-banks-accelerating-aml-transition",
        "category": "FINTECH",
        "excerpt": "Financial institutions across Nigeria and West Africa face rising regulatory mandates. Learn how real-time automated transaction surveillance is turning compliance into a competitive moat.",
        "content": "Financial institutions across Nigeria and the wider African continent are navigating an unprecedented wave of digital transaction volume. With mobile money, instant payment switches, and agency banking networks expanding exponentially, compliance departments are challenged by legacy AML systems that yield unsustainable false positive rates.\n\nModern AML platforms leverage real-time clustering, rule engines, and automated sanction screening to isolate suspicious patterns like smurfing in milliseconds without disrupting legitimate customer transactions.\n\nAt Infytel Communications, we partner with financial institutions to deploy certified AML architectures that automate CBN compliance filings and protect enterprise brand trust.",
        "coverImageUrl": "/assets/blog/aml-banking.jpg",
        "authorName": "Infytel Fintech Practice",
        "readTimeMinutes": 5,
        "isFeatured": true,
        "status": "PUBLISHED",
        "publishedAt": "2026-11-24T09:20:46.753Z"
      },
      {
        "id": "7bf08f91-f240-4998-a8c8-a079a7d0ad0c",
        "title": "Deploying Zero-Trust Identity Defense in Financial & Enterprise Workspaces",
        "slug": "deploying-zero-trust-identity-defense",
        "category": "CYBERSECURITY",
        "excerpt": "Hardware MFA tokens and biometric FIDO2 protocols prevent credential stuffing before it starts.",
        "content": "Protecting remote workers and banking switches requires shifting from static passwords to hardware-backed identity authentication.",
        "coverImageUrl": "/assets/blog/cybersecurity.jpg",
        "authorName": "Infytel Security Operations",
        "readTimeMinutes": 4,
        "isFeatured": false,
        "status": "PUBLISHED",
        "publishedAt": "2026-11-24T09:20:46.753Z"
      },
      {
        "id": "3f0f307a-42a6-4551-81b8-ef090f479439",
        "title": "Bridging Customer Experience & Employee Productivity with AI Service Desks",
        "slug": "bridging-cx-ex-ai-service-desks",
        "category": "AI_AUTOMATION",
        "excerpt": "How AI-assisted ticketing reduces first response times to under 15 minutes.",
        "content": "Unifying external customer support and internal IT helpdesk workflows allows organisations to streamline resolution workflows across all channels.",
        "coverImageUrl": "/assets/blog/ai-helpdesk.jpg",
        "authorName": "Infytel CX Practice",
        "readTimeMinutes": 6,
        "isFeatured": false,
        "status": "PUBLISHED",
        "publishedAt": "2026-11-24T09:20:46.753Z"
      },
      {
        "id": "54b64afd-e678-46d1-bef7-b5547343e99f",
        "title": "Infytel Expands OEM Technology Partnership with Feitian for Smart POS Solutions",
        "slug": "infytel-expands-feitian-partnership",
        "category": "PROJECT_UPDATE",
        "excerpt": "Announcing strategic distribution of next-generation contactless Android payment terminals across Nigeria.",
        "content": "Infytel Communications Limited is pleased to announce the deepening of its strategic partnership with Feitian Technologies to bring next-generation smart payment devices to African merchants.",
        "coverImageUrl": "/assets/blog/feitian-partnership.jpg",
        "authorName": "Corporate Communications",
        "readTimeMinutes": 3,
        "isFeatured": false,
        "status": "PUBLISHED",
        "publishedAt": "2026-11-24T09:20:46.753Z"
      }
    ]
  },
  "cta": {
    "headline": "Start your dream project with Infytel",
    "subtitle": "Besides our high-impact technology solutions, you get the expertise and support of passionate professionals committed to your success.",
    "talkToExpertUrl": "/contact",
    "whatsappNumber": "2348144033103"
  }
};

export const ABOUT_DEFAULT_DATA = {
  "hero": {
    "badge": "# ABOUT INFYTEL",
    "headline": "A technology partner built around your outcomes.",
    "description": "Infytel Communications Ltd. is a leading information technology company providing industry-focused solutions integrated with leading-edge ICT to clients in government, financial services, real estate, hospitality and other sectors."
  },
  "whoWeAre": {
    "headline": "We seek out, develop and deploy the right solution.",
    "fullAbout": "We build tailor-made solutions in-house or through strategic technology partnerships, then serve them to forward-thinking companies. Our consultants, engineers, and support teams work as one group, so you deal with a single accountable partner. Based in Victoria Island, Lagos, we combine local knowledge with global vendor relationships to bring proven platforms to organisations that cannot afford to get technology wrong.",
    "headOffice": "Plot 1661, Oyin Jolayemi Street, Victoria Island, Lagos, Nigeria",
    "stages": [
      {
        "step": 1,
        "title": "Listen",
        "description": "We start with your goals, constraints and the people who will use the system."
      },
      {
        "step": 2,
        "title": "Recommend",
        "description": "We propose the simplest solution that meets the need, and tell you when something is not required."
      },
      {
        "step": 3,
        "title": "Deliver",
        "description": "We implement, integrate and train, with a named owner for every workstream."
      },
      {
        "step": 4,
        "title": "Support",
        "description": "We stay after go-live with monitoring, service reviews and improvements."
      }
    ]
  },
  "visionMission": {
    "id": "16d6da99-ee4d-41dd-b084-e4c6b01030c9",
    "headline": "Business growth is our core motivation. We seek out the best technology in the world and make it work for Africa's most forward-thinking companies.",
    "visionTitle": "Our Vision",
    "visionText": "To be the most trusted technology partner for organisations across global, turning every complex requirement into a solution that works.",
    "visionIcon": "bullseye",
    "missionTitle": "Our Mission",
    "missionText": "We are committed to providing exceptional software engineering, cloud architecture, and cybersecurity services. By bridging the gap between business needs and technological capabilities, we help our clients thrive in a digital-first economy.",
    "missionIcon": "flag",
    "coreValues": [
      "Listen",
      "Recommend",
      "Deliver",
      "Support"
    ],
    "updatedAt": "2026-11-24T09:20:06.708Z"
  },
  "industries": [
    {
      "id": "c37a558c-247d-42d5-8e6e-3c73d1a6e893",
      "name": "Government",
      "slug": "government",
      "shortDescription": "Records, citizen services, secure infrastructure.",
      "icon": "building-columns",
      "fullDescription": "End-to-end digital governance solutions, secure citizen identity verification, document management systems, and sovereign cloud infrastructure.",
      "keyCapabilities": [
        "Digital Identity & Biometric Verification",
        "Sovereign Data Storage & Cloud",
        "Citizen Portal & e-Services Delivery",
        "Secure Inter-Agency Document Workflow"
      ],
      "displayOrder": 1,
      "isActive": true
    },
    {
      "id": "a071da03-24d3-4a14-a9a1-50bc86c99f01",
      "name": "Financial services",
      "slug": "financial-services",
      "shortDescription": "KYC, fraud, cards and omni-channel banking.",
      "icon": "wallet",
      "fullDescription": "Comprehensive banking suites, anti-money laundering (AML), automated transaction monitoring, payment terminals, and agent banking ecosystems.",
      "keyCapabilities": [
        "Core Banking & Agency Banking Platforms",
        "AML & Fraud Risk Monitoring",
        "Certified Feitian Smart POS & Cards",
        "Digital Onboarding & e-KYC"
      ],
      "displayOrder": 2,
      "isActive": true
    },
    {
      "id": "6df92667-ceaf-4b2e-bd8b-9d30926a5996",
      "name": "Real estate",
      "slug": "real-estate",
      "shortDescription": "Collaboration, security and customer engagement.",
      "icon": "map-pin",
      "fullDescription": "Property management platforms, IoT-driven facility automation, visitor management systems, and integrated tenant communication portals.",
      "keyCapabilities": [
        "Smart Facility IoT & Access Control",
        "Tenant & Lease Management Portal",
        "Omni-Channel Customer Helpdesk",
        "Unified Surveillance & Physical Security"
      ],
      "displayOrder": 3,
      "isActive": true
    },
    {
      "id": "d4871391-7873-498b-8b82-b7ea32eab9d2",
      "name": "Hospitality",
      "slug": "hospitality",
      "shortDescription": "Guest services, helpdesk and connected operations.",
      "icon": "star",
      "fullDescription": "High-density guest Wi-Fi networks, automated check-in kiosks, digital concierge bots, and unified staff communication systems.",
      "keyCapabilities": [
        "Digital Guest Concierge & AI Chatbots",
        "Enterprise PBX & VoIP Telephony",
        "Property Management System Integrations",
        "Contactless Mobile Payment & Checkout"
      ],
      "displayOrder": 4,
      "isActive": true
    }
  ],
  "partners": [
    {
      "id": "92a11c0b-ea3b-4aff-8401-28685202fa45",
      "name": "Feitian",
      "slug": "feitian",
      "logoUrl": "/assets/partners/feitian.svg",
      "partnerType": "Hardware & Security OEM",
      "tier": "Strategic Partner",
      "websiteUrl": null,
      "description": "Global leader in smart POS payment terminals and multi-factor authentication hardware."
    },
    {
      "id": "57e9285f-b1d4-45b4-8b84-ec3f826856d8",
      "name": "Freshworks",
      "slug": "freshworks",
      "logoUrl": "/assets/partners/freshworks.svg",
      "partnerType": "SaaS & Helpdesk OEM",
      "tier": "Preferred Partner",
      "description": "Unified employee and customer experience software suites including Freshservice and Freshdesk."
    },
    {
      "id": "91d592c8-763d-42af-8a1c-5a2a9ddc8ba0",
      "name": "Konnect Insight",
      "slug": "konnect-insight",
      "logoUrl": "/assets/partners/konnect-insight.svg",
      "partnerType": "Customer Experience & Analytics",
      "tier": "Solution Partner",
      "description": "Omni-channel customer listening, social CRM, and real-time sentiment analytics."
    },
    {
      "id": "f3278e75-eb94-41aa-8498-870191b4f3a4",
      "name": "Rumango",
      "slug": "rumango",
      "logoUrl": "/assets/partners/rumango.svg",
      "partnerType": "Banking & Digital Finance",
      "tier": "Alliance Partner",
      "description": "Enterprise digital banking, microfinance core systems, and regulatory reporting."
    },
    {
      "id": "b796f24f-3815-42cb-8e70-3ee11bc43ea0",
      "name": "Microsoft",
      "slug": "microsoft",
      "logoUrl": "/assets/partners/microsoft.svg",
      "partnerType": "Cloud & Enterprise Productivity",
      "tier": "Cloud Solution Provider",
      "description": "Microsoft Azure cloud architecture, Microsoft 365 enterprise deployment, and identity management."
    },
    {
      "id": "fba30c29-d6ce-4c72-b9f6-5c4798342702",
      "name": "Cisco",
      "slug": "cisco",
      "logoUrl": "/assets/partners/cisco.svg",
      "partnerType": "Networking & Unified Communications",
      "tier": "Certified Partner",
      "description": "Enterprise routing, switching, secure SD-WAN, and enterprise IP telephony solutions."
    },
    {
      "id": "96077500-a7c8-4bb3-83f3-ece0f3259dbc",
      "name": "Dell",
      "slug": "dell",
      "logoUrl": "/assets/partners/dell.svg",
      "partnerType": "Server & Storage Infrastructure",
      "tier": "OEM Partner",
      "description": "Enterprise PowerEdge rack servers, SAN storage arrays, and enterprise hyperconverged appliances."
    },
    {
      "id": "0627fcd7-9f32-4089-8575-2323383d28bb",
      "name": "Veeam",
      "slug": "veeam",
      "logoUrl": "/assets/partners/veeam.svg",
      "partnerType": "Backup & Disaster Recovery",
      "tier": "ProPartner",
      "description": "Automated enterprise data backup, instant recovery, and ransomware protection solutions."
    }
  ],
  "cta": {
    "headline": "Start your dream project with Infytel",
    "subtitle": "Besides our high-impact technology solutions, you get the expertise and support of passionate professionals committed to your success.",
    "talkToExpertUrl": "/contact",
    "whatsappNumber": "2348144033103"
  },
  "contactDetails": {
    "address": "Plot 1661, Oyin Jolayemi Street, Victoria Island, Lagos, Nigeria",
    "emails": [
      "hello@infytel.ng",
      "sales@infytel.net",
      "support@infytel.net"
    ],
    "phones": [
      "08144033103",
      "09168832564",
      "08141870187"
    ]
  }
};

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://infytel-backend.onrender.com/api';

/**
 * Fetch with timeout helper
 */
async function fetchWithTimeout(url, options = {}, timeoutMs = 2500) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(id);
    return res;
  } catch (err) {
    clearTimeout(id);
    throw err;
  }
}

export async function getHomeData() {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/home`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json && json.success && json.data) {
      const data = { ...json.data };
      if (Array.isArray(data.heroSlides)) {
        const hasWhy = data.heroSlides.some(s => s.pillar === 'WHY_INFYTEL');
        if (!hasWhy) {
          data.heroSlides = [HOME_DEFAULT_DATA.heroSlides[0], ...data.heroSlides];
        }
      }
      return { data, isLive: true };
    }
  } catch (err) {
    console.info('[Infytel API] Using cached Home data:', err.message);
  }
  return { data: HOME_DEFAULT_DATA, isLive: false };
}

export async function getSuccessStories() {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/home/success-stories`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json && json.success && json.data) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.info('[Infytel API] Using cached Success Stories data:', err.message);
  }
  return { data: HOME_DEFAULT_DATA.realOutcomes, isLive: false };
}

export const CONTACT_DEFAULT_DATA = {
  "hero": {
    "badge": "CONTACT US",
    "headline": "Tell us what you need. We will take it from there.",
    "subtitle": "A solutions consultant will review your message and reply with next steps."
  },
  "contactInfo": {
    "visitUs": {
      "title": "Visit us",
      "address": "Plot 1661, Oyin Jolayemi Street, Victoria Island, Lagos, Nigeria"
    },
    "email": {
      "title": "Email",
      "emails": [
        "hello@infytel.ng",
        "sales@infytel.net",
        "support@infytel.net"
      ]
    },
    "call": {
      "title": "Call",
      "phones": [
        "09168832163",
        "09168832164",
        "08141870187"
      ]
    },
    "officeHours": {
      "title": "Office hours",
      "schedule": "Mon–Fri · 8:00 – 17:00 WAT",
      "supportNote": "Support available 24/7"
    },
    "whatsapp": {
      "label": "Chat with us on WhatsApp",
      "subtext": "Need help?",
      "number": "2348144033103"
    }
  },
  "form": {
    "headline": "Send us a message",
    "subtitle": "Fields marked optional can be left blank.",
    "submitButtonText": "Send message",
    "fields": [
      {
        "name": "fullName",
        "type": "text",
        "label": "Full name",
        "required": true,
        "placeholder": "Enter your full name"
      },
      {
        "name": "workEmail",
        "type": "email",
        "label": "Work email",
        "required": true,
        "placeholder": "xyz@gmail.com"
      },
      {
        "name": "phone",
        "type": "tel",
        "label": "Phone",
        "required": false,
        "placeholder": "Enter your 10 digit mobile number"
      },
      {
        "name": "companyName",
        "type": "text",
        "label": "Company name",
        "required": false,
        "placeholder": "Enter your company name"
      },
      {
        "name": "solutionOfInterest",
        "type": "select",
        "label": "Solution of interest",
        "required": false,
        "placeholder": "Select a solution..."
      },
      {
        "name": "message",
        "type": "textarea",
        "label": "How can we help?",
        "required": true,
        "placeholder": ""
      }
    ],
    "solutionsOfInterest": [
      {
        "id": "d268bdd4-2efa-4881-8d71-30679c6d6bf4",
        "code": "01",
        "name": "AI & Automation",
        "slug": "ai-automation"
      },
      {
        "id": "d11f0f94-6892-4858-a767-b15332cf3427",
        "code": "02",
        "name": "Financial Technology",
        "slug": "financial-technology"
      },
      {
        "id": "8fc1e86c-daee-41a7-8fba-19849c19553c",
        "code": "03",
        "name": "Cloud & Data",
        "slug": "cloud-data"
      },
      {
        "id": "5e76e1a5-b4b8-45b5-a5c6-7d8a5dda13d8",
        "code": "04",
        "name": "Cybersecurity",
        "slug": "cybersecurity"
      },
      {
        "id": "1e0828f6-d14c-47f3-82c0-3f0112971b90",
        "code": "05",
        "name": "Enterprise & Collaboration",
        "slug": "enterprise-collaboration"
      },
      {
        "id": "6037aa4d-f20d-4c12-bbab-c72d99404520",
        "code": "06",
        "name": "Infrastructure & Hardware",
        "slug": "infrastructure-hardware"
      },
      {
        "id": "5947dece-3331-4bf6-8fe3-8b1f58692ae3",
        "code": "07",
        "name": "Digital & Engineering",
        "slug": "digital-engineering"
      }
    ]
  },
  "mapLocation": {
    "title": "Oyin Jolayemi Street",
    "address": "Oyin Jolayemi Street, Victoria Island, Lagos 106104, Nigeria",
    "googleMapsUrl": "https://maps.google.com/?q=Oyin+Jolayemi+Street,+Victoria+Island,+Lagos+106104,+Nigeria",
    "embedUrl": "https://www.google.com/maps?q=Oyin+Jolayemi+Street,+Victoria+Island,+Lagos,+Nigeria&output=embed",
    "openInMapsText": "Open in Maps",
    "latitude": 6.4281,
    "longitude": 3.4219
  }
};

export async function getContactData() {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/contact`, {}, 4500);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json && json.success && json.data) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.info('[Infytel API] Using cached Contact data:', err.message);
  }
  return { data: CONTACT_DEFAULT_DATA, isLive: false };
}

export async function submitContactInquiry(payload) {
  const res = await fetchWithTimeout(
    `${API_BASE_URL}/contact`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
    10000
  );
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json?.success) {
    throw new Error(json?.message || `Failed to send message (${res.status})`);
  }
  return json;
}

export const CAREER_DEFAULT_DATA = {
  "hero": {
    "badge": "CAREER",
    "headline": "Do the best work of your career.",
    "subtitle": "Join a growth-minded team delivering technology that powers Africa's leading banks and enterprises.",
    "ctaText": "See open roles",
    "ctaUrl": "#open-roles"
  },
  "whyInfytel": {
    "badge": "WHY INFYTEL",
    "headline": "A place to grow fast",
    "benefits": [
      {
        "id": "784fff06-a231-468a-bdc5-6904fe1357dc",
        "icon": "zap",
        "title": "Grow faster",
        "description": "Certifications, mentorship and real enterprise projects from day one.",
        "displayOrder": 1,
        "isActive": true
      },
      {
        "id": "7668cc33-0c19-4517-a9a1-4cd551042954",
        "icon": "award",
        "title": "Global partners",
        "description": "Work hands-on with Microsoft, Cisco, Netcore, Veeam and more.",
        "displayOrder": 2,
        "isActive": true
      },
      {
        "id": "7d023d55-1039-46aa-930a-0360f2de375d",
        "icon": "users",
        "title": "Great people",
        "description": "A collaborative, growth-minded team that celebrates wins together.",
        "displayOrder": 3,
        "isActive": true
      },
      {
        "id": "fc7e079a-0f8c-4f78-a43b-a70fc499591a",
        "icon": "clock",
        "title": "Flexible work",
        "description": "Hybrid options and a culture that values outcomes over hours.",
        "displayOrder": 4,
        "isActive": true
      }
    ]
  },
  "openRoles": {
    "badge": "OPEN ROLES",
    "headline": "Find your next move",
    "activeFilter": "all",
    "modalActions": {
      "allFilterLabel": "All",
      "applyButtonText": "Apply Now",
      "closeButtonText": "Close",
      "viewDetailsButtonText": "View Details"
    },
    "departments": [
      { "id": "all", "name": "All", "slug": "all", "jobCount": 8 },
      { "id": "e5dfdfdb-8f64-4b77-885a-1994fe13f2e3", "name": "Engineering", "slug": "engineering", "jobCount": 2 },
      { "id": "4219856b-1e92-4ded-8dbd-1c33939aa30c", "name": "Sales", "slug": "sales", "jobCount": 1 },
      { "id": "12e68965-238f-4ed8-a485-2ba0ff1fa972", "name": "Design", "slug": "design", "jobCount": 1 },
      { "id": "c08fb119-decc-4109-97ba-a2aae1adaffd", "name": "Development", "slug": "development", "jobCount": 1 },
      { "id": "9ee2780c-a880-4ae7-843f-28399de9c2d1", "name": "Marketing", "slug": "marketing", "jobCount": 1 },
      { "id": "b1f672f5-a54c-47e2-9886-c84e44580425", "name": "SEO", "slug": "seo", "jobCount": 1 },
      { "id": "4f5e73ee-90b7-47e4-90c9-5603a4189315", "name": "Support", "slug": "support", "jobCount": 1 }
    ],
    "jobs": [
      {
        "id": "444a1a6e-2413-4aa6-a86b-11165250f18d",
        "title": "Senior Frontend Engineer",
        "slug": "senior-frontend-engineer",
        "departmentId": "e5dfdfdb-8f64-4b77-885a-1994fe13f2e3",
        "location": "Bengaluru, India",
        "employmentType": "Full time",
        "experienceRange": "4–6 years experience",
        "shortSummary": "Own the interfaces our customers use every day to track shipments and manage fleets.",
        "aboutJob": "Own the interfaces our customers use every day to track shipments and manage fleets.",
        "responsibilities": [
          "Build and ship fast, accessible web interfaces with React and TypeScript",
          "Review code and mentor engineers on the team",
          "Work with design and product to shape features from idea to release"
        ],
        "requirements": [
          "4+ years building production web apps",
          "Strong grasp of performance and accessibility",
          "Clear written communication"
        ],
        "benefits": [
          "Hybrid work",
          "Health cover for you and family",
          "Learning budget"
        ],
        "displayOrder": 1,
        "isActive": true,
        "department": {
          "id": "e5dfdfdb-8f64-4b77-885a-1994fe13f2e3",
          "name": "Engineering",
          "slug": "engineering"
        }
      },
      {
        "id": "ad2e06c6-f450-4cdd-af34-c6f4e34679d9",
        "title": "Enterprise Cloud Solutions Architect",
        "slug": "enterprise-cloud-solutions-architect",
        "departmentId": "e5dfdfdb-8f64-4b77-885a-1994fe13f2e3",
        "location": "Victoria Island, Lagos",
        "employmentType": "Full time",
        "experienceRange": "5–8 years experience",
        "shortSummary": "Design resilient Microsoft Azure, Kubernetes, and hybrid cloud infrastructure for tier-1 financial clients.",
        "aboutJob": "Lead technical architecture and cloud transformation engagements across banking, telecoms, and public sector institutions.",
        "responsibilities": [
          "Architect high-availability hybrid cloud and disaster recovery topologies",
          "Partner with OEM engineering teams across Microsoft, Cisco, and Veeam",
          "Lead pre-sales solutioning and executive technical workshops"
        ],
        "requirements": [
          "5+ years designing enterprise cloud or datacenter infrastructure",
          "Active Azure Solutions Architect or AWS Professional certification",
          "Strong client-facing consulting and documentation skills"
        ],
        "benefits": [
          "Hybrid work",
          "Health cover for you and family",
          "Sponsored OEM certifications"
        ],
        "displayOrder": 2,
        "isActive": true,
        "department": {
          "id": "e5dfdfdb-8f64-4b77-885a-1994fe13f2e3",
          "name": "Engineering",
          "slug": "engineering"
        }
      }
    ]
  },
  "hiringProcess": {
    "badge": "HIRING PROCESS",
    "headline": "Simple, Transparent, Fast",
    "steps": [
      {
        "id": "14e9a54b-3363-43b3-b951-86d6d48a056d",
        "stepNumber": 1,
        "stepCode": "01",
        "title": "Apply",
        "description": "Send your details and CV link — it takes two minutes.",
        "displayOrder": 1,
        "isActive": true
      },
      {
        "id": "31533083-69da-4e9a-8650-ca61f46ebebc",
        "stepNumber": 2,
        "stepCode": "02",
        "title": "Intro call",
        "description": "A friendly 30-minute chat with our talent team.",
        "displayOrder": 2,
        "isActive": true
      },
      {
        "id": "cd86ae8f-cddc-4538-8849-e0b551c00163",
        "stepNumber": 3,
        "stepCode": "03",
        "title": "Skill Session",
        "description": "A practical conversation or task with the hiring team.",
        "displayOrder": 3,
        "isActive": true
      },
      {
        "id": "b62a1060-9ea9-4b23-b759-dc8815daabbc",
        "stepNumber": 4,
        "stepCode": "04",
        "title": "Offer",
        "description": "We move fast — most decisions within two weeks.",
        "displayOrder": 4,
        "isActive": true
      }
    ]
  }
};

export async function getCareerData(department = 'all') {
  try {
    const query = department && department !== 'all' ? `?department=${encodeURIComponent(department)}` : '';
    const res = await fetchWithTimeout(`${API_BASE_URL}/career${query}`, {}, 4500);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json && json.success && json.data) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.info('[Infytel API] Using cached Career data:', err.message);
  }
  const fallbackJobs =
    !department || department === 'all'
      ? CAREER_DEFAULT_DATA.openRoles.jobs
      : CAREER_DEFAULT_DATA.openRoles.jobs.filter(
          (j) => j.department?.slug?.toLowerCase() === department.toLowerCase()
        );
  return {
    data: {
      ...CAREER_DEFAULT_DATA,
      openRoles: {
        ...CAREER_DEFAULT_DATA.openRoles,
        activeFilter: department || 'all',
        jobs: fallbackJobs,
      },
    },
    isLive: false,
  };
}

export async function getCareerJobDetails(slug) {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/career/jobs/${encodeURIComponent(slug)}`, {}, 4500);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json && json.success && json.data) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.info('[Infytel API] Using cached Job details:', err.message);
  }
  const found = CAREER_DEFAULT_DATA.openRoles.jobs.find((j) => j.slug === slug);
  return { data: found || null, isLive: false };
}

export async function submitCareerApplication(payload) {
  const res = await fetchWithTimeout(
    `${API_BASE_URL}/career/apply`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    },
    10000
  );
  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json?.success) {
    throw new Error(json?.message || `Failed to submit application (${res.status})`);
  }
  return json;
}

export async function getAboutData() {
  try {
    const res = await fetchWithTimeout(`${API_BASE_URL}/about`);
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    if (json && json.success && json.data) {
      return { data: json.data, isLive: true };
    }
  } catch (err) {
    console.info('[Infytel API] Using cached About data:', err.message);
  }
  return { data: ABOUT_DEFAULT_DATA, isLive: false };
}
