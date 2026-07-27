import { withBasePath } from "@/lib/basePath";

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  tech: string[];
  features: string[];
  android?: string;
  ios?: string;
  responsibilities?: string;
  /** Paths under /public (basePath-prefixed for static export). */
  screenshots: string[];
  /** Full case-study route at /work/[slug] */
  flagship?: boolean;
  /** Hide from public grid until real copy exists */
  draft?: boolean;
  /** Display order on the home page (lower = earlier) */
  order: number;
};

function shots(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    withBasePath(`/screenshots/${folder}/screen_${i + 1}.webp`),
  );
}

/** Numbered mockups like satsang/1.webp, bonno/1.webp */
function numberedShots(folder: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) =>
    withBasePath(`/screenshots/${folder}/${i + 1}.webp`),
  );
}

/**
 * Reconciled from Manthan_Portfolio/lib/ui/data/projects.dart + prompt Section 5.
 * Live dart wins on copy/store links. Public site references Odigo only.
 * Spice is prompt placeholder (not in dart). Screenshot-only folders with no
 * dart entry are skipped until real copy exists.
 */
export const projects: Project[] = [
  // ── Flagship ──────────────────────────────────────────────
  {
    slug: "odigo",
    title: "Odigo",
    shortDescription:
      "Flutter & Android apps powering a production advertising-robot platform",
    fullDescription:
      "Cross-platform application suite for ROS-based advertising robots deployed in commercial malls. Built Flutter and Android operator interfaces with real-time robot communication, live telemetry, and secure low-latency control — running in production across India and Dubai, not demos.",
    category: "Robotics",
    tech: [
      "Flutter",
      "Java",
      "ROS",
      "ROS 2",
      "WebSockets",
      "Serial/UART",
      "WebRTC",
      "Real-time Communication",
    ],
    features: [
      "ROS and ROS 2 integration",
      "Flutter–ROS bridge for real-time robot communication",
      "Live telemetry and robot-operator interfaces",
      "WebSockets, Serial/UART, WebRTC",
      "Secure, low-latency communication for production",
      "Cross-platform support (Android, iOS, Web, Desktop)",
      "Multi-module deployment and version compatibility",
    ],
    responsibilities:
      "Developed Flutter and Android applications for the Odigo platform, contributed to the Flutter–ROS bridge, integrated multi-protocol communication (WebSockets, UART, WebRTC), improved performance and stability across versions, and supported live mall deployments in India and Dubai.",
    screenshots: [],
    flagship: true,
    order: 1,
  },
  {
    slug: "odigo-etihad-rail",
    title: "Odigo–Etihad Rail",
    shortDescription:
      "Voice assistant, indoor navigation & robot platform at Etihad Rail Fujairah",
    fullDescription:
      "Cross-platform application suite for a ROS-based guidance robot deployed at Etihad Rail's Fujairah station. Built Flutter and Android interfaces with real-time robot communication, a multilingual voice assistant, live indoor navigation, and secure low-latency control — running in a live public infrastructure deployment, not a demo. Currently built on ROS, with ROS 2 integration underway.",
    category: "Robotics",
    tech: [
      "Flutter",
      "Java",
      "ROS",
      "ROS 2 (upcoming)",
      "WebSockets",
      "Serial/UART",
      "WebRTC",
      "Real-time Communication",
      "Indoor mapping / wayfinding engine",
      "Voice/NLU (multilingual)",
    ],
    features: [
      "ROS integration (ROS 2 migration planned)",
      "Flutter–ROS bridge for real-time robot communication",
      "Voice assistant with wake-on-tap interaction (\"How may I help you?\")",
      "Indoor map rendering with live route-from-current-position navigation",
      "Cruise-mode ambient display (images/video loop) with seamless transition to assistant mode",
      "Multi-language voice and UI support",
      "Live telemetry and robot-operator interfaces",
      "WebSockets, Serial/UART, WebRTC",
      "Secure, low-latency communication for production",
    ],
    responsibilities:
      "Developed the Flutter and Android applications for the Odigo platform at Etihad Rail, contributed to the Flutter–ROS bridge, integrated multi-protocol communication (WebSockets, UART, WebRTC), and built the voice assistant and indoor navigation flow: the robot runs in cruise mode looping ambient images/videos, and on tap switches to an active listening state (\"How may I help you?\"). When a passenger asks something like \"Where is the washroom?\", Odigo resolves the query and renders the full indoor map with a live route drawn from the robot's current position to the destination. Multi-language support included.",
    screenshots: [],
    flagship: true,
    order: 2,
  },
  {
    slug: "spice",
    title: "Spice",
    shortDescription:
      "Enterprise mobile platform — 1.5 years of architecture ownership",
    fullDescription:
      "Enterprise mobile platform engagement spanning approximately 1.5 years with architecture ownership and delivery leadership. Real product domain, scale, and contribution details to be confirmed before public launch.",
    category: "Enterprise",
    tech: ["Flutter", "Clean Architecture", "Modular Codebase"],
    features: [
      "Architecture ownership across a long-running enterprise engagement",
      "Modular Flutter codebase designed for team delivery",
      "Delivery leadership across a multi-developer effort",
    ],
    responsibilities:
      "Architecture ownership and delivery over approximately 1.5 years on an enterprise mobile platform.",
    screenshots: [],
    draft: true,
    order: 99,
  },
  {
    slug: "takeprofit",
    title: "TakeProfit",
    shortDescription: "Crypto analytics, tracking & trader toolkit",
    fullDescription:
      "TakeProfit is a subscription-based crypto analytics app that delivers real-time market data, advanced profit/loss tracking, stop-loss alerts, and auto-trade triggers. Built with a scalable backend and intuitive UX, it supports multilingual displays, light/dark modes, and separate roles for Traders and Recommenders, enabling deep signal insights and investment performance tools.",
    category: "Finance",
    tech: [
      "Flutter",
      "Laravel",
      "Firebase Auth",
      "Real-time APIs",
      "Multilingual Support",
    ],
    features: [
      "Live crypto price tracking",
      "Profit & loss dashboards",
      "Stop-loss & auto-triggered alerts",
      "Role-based access (Recommenders & Traders)",
      "Subscription paywall",
      "Dark/Light theme support",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.takeproft.trader&hl=en_IN",
    ios: "https://apps.apple.com/in/app/takeprofit-%D8%AA%D9%8A%D9%83-%D8%A8%D8%B1%D9%88%D9%81%D8%AA/id6471070700",
    responsibilities:
      "Architected multi-role system, integrated real-time crypto APIs, built secure auth with Firebase, and designed analytics interfaces.",
    screenshots: [],
    flagship: true,
    order: 9,
  },
  {
    slug: "karuna-care",
    title: "Karuna Care",
    shortDescription:
      "A live contribution platform for real-time animal welfare support",
    fullDescription:
      "Karuna Care is a compassionate mobile platform that connects users with animal shelters and gaushalas across India. Through live streaming and in-app contributions, users can watch care for cows, dogs, elephants, birds, and more as it happens and directly support their feeding and wellbeing. The app's transparent contribution system ensures every act of kindness has a visible impact on animals in need.",
    category: "Social Good / Animal Welfare",
    tech: [
      "Flutter",
      "Firebase",
      "Live Streaming Integration",
      "In-App Wallet & Coins",
      "Push Notifications",
      "REST API",
      "Secure Authentication",
    ],
    features: [
      "Live video streaming of animal care activities",
      "In-app contribution wallet with virtual coins",
      "Browse and support verified animal shelters & gaushalas",
      "Real-time updates on contributions and seva impact",
      "User profile and contribution history",
      "Transparent tracking of how support is used",
    ],
    android: "https://play.google.com/store/apps/details?id=com.karuna.app",
    ios: "https://apps.apple.com/in/app/karuna-care/id6746252753",
    responsibilities:
      "Architected the contribution flow, integrated live streaming back-end, implemented secure wallet and in-app purchase features, optimized UI for seamless donation experiences, and ensured reliable real-time updates.",
    screenshots: shots("karuna", 5),
    flagship: true,
    order: 5,
  },
  {
    slug: "satsang",
    title: "Satsang",
    shortDescription:
      "A spiritual learning platform for daily satsang, scriptures, katha, and devotional content",
    fullDescription:
      "Satsang is a devotional mobile application developed for devotees of Shree Swaminarayan Gurukul Rajkot. Inspired by Guruvarya Shri Devkrushnadasji Swami, the app enables users to stay connected with Bhagwan and saints through daily spiritual content anytime and anywhere. It provides a complete digital satsang experience by offering kathas, kirtans, scriptures, monthly magazines, and devotional videos, helping users strengthen their faith, gain inner peace, and lead a principled life.",
    category: "Spirituality / Religious Education",
    tech: [
      "Flutter",
      "Firebase",
      "REST API",
      "Audio Streaming",
      "Video Streaming",
      "Push Notifications",
      "Offline Caching",
      "Secure Authentication",
    ],
    features: [
      "Listen to spiritual kathas and devotional kirtans",
      "Read scriptures and religious literature",
      "Access monthly magazines like Sadvidya and Swaminarayan Darshan",
      "Watch spiritual discourses and devotional videos",
      "Daily spiritual content updates and notifications",
      "Clean and user-friendly devotional reading experience",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.gurukul.satsang",
    ios: "https://apps.apple.com/in/app/satsang/id552732601",
    responsibilities:
      "Developed the complete Flutter application, integrated audio and video streaming, implemented digital scripture and magazine readers, optimized content loading for smooth performance, integrated backend APIs, and delivered a seamless cross-platform spiritual experience.",
    screenshots: numberedShots("satsang", 9),
    flagship: true,
    order: 3,
  },

  // ── Grid (from projects.dart) ─────────────────────────────
  {
    slug: "mamgo",
    title: "Mamgo",
    shortDescription: "Secure social messaging and calling platform",
    fullDescription:
      "Mamgo is a fast, secure, and easy-to-use social networking app that enables one-to-one and group messaging, voice and video calls, and media sharing. Designed for simplicity and speed, it helps users stay connected with friends and family while maintaining privacy and performance at the core.",
    category: "Social Networking",
    tech: [
      "Flutter",
      "Real-time Messaging",
      "Voice/Video Calls",
      "Push Notifications",
      "Secure Encryption",
    ],
    features: [
      "Instant private messaging",
      "Group chats",
      "Free voice and video calls",
      "Media (photos/videos) sharing",
      "Status and presence indicators",
      "Lightweight, responsive design",
    ],
    android: "https://play.google.com/store/apps/details?id=com.app.mamgo",
    ios: "https://apps.apple.com/us/app/mamgo/id6739275263",
    responsibilities:
      "Built real-time chat infrastructure, integrated voice & video calling features, and designed a lightweight cross-platform UI.",
    screenshots: shots("mamgo", 8),
    flagship: true,
    order: 6,
  },
  {
    slug: "crimechime",
    title: "Crimechime",
    shortDescription: "Community-driven crime reporting & heatmaps",
    fullDescription:
      "Crimechime enables users to quickly report local incidents and view dynamic crime heatmaps in real time. Leveraging location services, custom map markers, and clustering, it delivers actionable insights for community safety and supports collaboration with authorities to encourage safer neighborhoods.",
    category: "Safety",
    tech: [
      "Flutter",
      "Laravel",
      "Google Maps API",
      "Real-time Database",
      "Push Notifications",
    ],
    features: [
      "Real-time incident reporting",
      "Interactive crime heatmap layers",
      "Clustered map markers",
      "Location alerts",
      "Quick report wizard",
      "Authority collaboration tools",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.user.crimechime&pli=1",
    responsibilities:
      "Built real-time data reporting system, integrated advanced mapping features, and optimized geographic clustering UX.",
    screenshots: shots("crimechime", 5),
    flagship: true,
    order: 7,
  },
  {
    slug: "country-kart",
    title: "Country Kart",
    shortDescription: "Service discovery & booking with real-time chat",
    fullDescription:
      "Country Kart is a multi-category service booking platform that connects users with providers for home, beauty, relocation, and automotive needs. Featuring secure authentication, custom real-time chat, intuitive service discovery, and transparent pricing, it elevates user convenience across diverse services.",
    category: "Marketplace",
    tech: ["Flutter", "Laravel", "Firebase", "Real-time Chat"],
    features: [
      "Service search & scheduling",
      "Firebase authentication",
      "One-to-one chat",
      "Ratings & reviews",
      "Transparent pricing UI",
      "Responsive UX flows",
    ],
    ios: "https://apps.apple.com/us/app/countrykart/id6744250319",
    responsibilities:
      "Led app architecture, integrated secure auth flows, built custom chat, and crafted intuitive service discovery screens.",
    screenshots: shots("country_kart", 6),
    flagship: true,
    order: 8,
  },
  {
    slug: "bonno",
    title: "Bonno",
    shortDescription:
      "A premium pet care platform offering trusted services for every stage of a pet’s life",
    fullDescription:
      "BONN-O Premium Pet Care is a comprehensive pet services platform that delivers ethical, transparent, and luxury-driven care for pets. The app connects pet parents with verified service providers for boarding, grooming, pet sitting, training, veterinary care, and ethical mating. With technology-powered tracking, real-time updates, secure bookings, and a community-focused ecosystem, BONN-O ensures pets receive exceptional physical, emotional, and social care while giving owners complete peace of mind.",
    category: "Pet Care / Marketplace",
    tech: [
      "Flutter",
      "Firebase",
      "REST API",
      "Google Maps",
      "Real-Time Tracking",
      "Push Notifications",
      "Secure Authentication",
      "Payment Gateway",
    ],
    features: [
      "Book premium pet boarding with verified caregivers",
      "Schedule professional grooming services",
      "Hire trusted pet sitters for home care",
      "Connect with certified trainers using positive reinforcement",
      "Access 24/7 veterinary consultation and support",
      "Ethical pet mating through verified breeders",
      "Real-time booking status and service tracking",
      "Secure online payments and booking management",
      "Manage pet profiles, health records, and service history",
      "Ratings, reviews, and transparent provider verification",
    ],
    android: "https://play.google.com/store/apps/details?id=com.app.bonno",
    ios: "https://apps.apple.com/in/app/bonno/id6747674706",
    responsibilities:
      "Led the end-to-end Flutter application development, architected the service booking workflow, integrated secure payment gateway, real-time notifications, maps, backend APIs, and authentication, optimized the user experience across multiple pet service modules, and delivered a scalable cross-platform solution for premium pet care.",
    screenshots: numberedShots("bonno", 10),
    flagship: true,
    order: 4,
  },
  {
    slug: "blupaws",
    title: "Blupaws",
    shortDescription: "Pet care platform with live consultations",
    fullDescription:
      "Blupaws offers pet wellness services, including vet appointments, grooming bookings, marketplace items, and live video consultations powered by Twilio. Pet owners can schedule services, chat or video call their vets, and track appointment history all within one seamless mobile experience.",
    category: "Pet Care",
    tech: ["Flutter", "Node.js", "Twilio Video SDK", "Real-time Comms"],
    features: [
      "Vet appointments & bookings",
      "Live video consultations",
      "Grooming & service marketplace",
      "Secure messaging",
      "Appointment history",
      "Twilio integration",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.oner.blupaws&pli=1",
    ios: "https://apps.apple.com/in/app/blupaws/id1534901938",
    responsibilities:
      "Integrated real-time video SDK, built marketplace features, implemented appointment workflows.",
    screenshots: [],
    order: 10,
  },
  {
    slug: "medan-tv",
    title: "Medan TV",
    shortDescription: "Live TV & on-demand video streaming app",
    fullDescription:
      "Medan TV delivers live television channels and on-demand video content with flexible quality options, program guides, bookmarking, and offline downloads. Tailored for modern viewers, it supports personalized content interaction and seamless streaming experiences.",
    category: "Media & Entertainment",
    tech: ["Flutter", "Video Streaming", "Live TV"],
    features: [
      "Live streaming channels",
      "On-demand video content",
      "EPG schedule UI",
      "Bookmarks & favorites",
      "Multi-quality streaming",
      "Offline downloads",
    ],
    android: "https://play.google.com/store/apps/details?id=com.app.medantv",
    ios: "https://apps.apple.com/us/app/medantv/id6464369787",
    responsibilities:
      "Built adaptive streaming player, integrated EPG UI, and implemented offline download workflows.",
    screenshots: shots("medantv", 8),
    order: 8,
  },
  {
    slug: "calling-vault",
    title: "Calling Vault",
    shortDescription:
      "Encrypted calling & messaging with anonymous numbers and privacy tools",
    fullDescription:
      "Calling Vault is a secure communication platform that empowers users to make encrypted voice calls and send secure messages while protecting privacy with anonymous U.S. phone numbers. Built using Flutter with a Laravel backend and the Telnyx WebRTC SDK, the app delivers high-quality VoIP calling, advanced call management, call blocking, and remote access handling. It leverages robust state management using Riverpod and Firebase for notifications and user state sync.",
    category: "Communication",
    tech: [
      "Flutter",
      "Telnyx WebRTC SDK",
      "Laravel",
      "Riverpod",
      "Firebase",
      "End-to-End Encryption",
      "VoIP",
    ],
    features: [
      "End-to-end encrypted voice & text communication",
      "Anonymous U.S. phone number support",
      "Secure VoIP calling via Telnyx WebRTC SDK",
      "Call blocking & privacy controls",
      "Riverpod for scalable state management",
      "Real-time UI updates & push notifications",
      "Strict privacy & data-protection compliance",
      "Remote access handling through Firebase",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.app.callingvault&hl=en",
    ios: "https://apps.apple.com/us/app/calling-vault/id6642672160",
    responsibilities:
      "Integrated secure WebRTC calling with Telnyx SDK, implemented end-to-end encryption protocols, architected Riverpod state flows, and built reliable messaging and VoIP features for privacy-centric communication.",
    screenshots: [],
    order: 11,
  },
  {
    slug: "crumbss",
    title: "Crumbss",
    shortDescription:
      "Platform connecting surplus food with local users to reduce waste",
    fullDescription:
      "Crumbss is a socially impactful mobile platform designed to reduce food waste by connecting users with surplus food from restaurants, bakeries, supermarkets, and other food vendors at discounted prices. Through location-based discovery, real-time availability updates, and community engagement features, users can reserve “Crumbs” surprise packages — meals or food items that would otherwise go to waste — helping communities fight hunger while promoting sustainability and affordability.",
    category: "Social Impact",
    tech: [
      "Flutter",
      "Firebase",
      "Maps & Location Integration",
      "Real-time Database",
      "Push Notifications",
    ],
    features: [
      "Post and browse food donation or surplus offers",
      "Real-time availability updates for nearby Crumbs",
      "Location-based search and filtering",
      "Volunteer & community coordination tools",
      "Impact tracking and donation history",
      "In-app notifications for reservations",
      "Sustainable food rescue initiative",
    ],
    android:
      "https://play.google.com/store/apps/details?id=hr.crumbs.crumbs&hl=en_IN",
    ios: "https://apps.apple.com/in/app/crumbs-spasi-hranu/id6504109863",
    responsibilities:
      "Designed intuitive donation & pickup workflows, implemented location-based matching, built real-time availability and notification systems, and developed community engagement and impact-tracking features.",
    screenshots: [],
    order: 12,
  },
  {
    slug: "cero",
    title: "CERO",
    shortDescription: "EV charging network with dynamic status updates",
    fullDescription:
      "CERO is an EV charging management app that offers live station availability, historical usage logs, partner dashboards, and analytics to deliver transparent charging network insights across multiple partner operators.",
    category: "EV Charging",
    tech: ["Flutter", "Firebase", "OCPP"],
    features: [
      "Live availability updates",
      "Charging history logs",
      "Partner dashboard",
      "Advanced usage analytics",
      "Network status UI",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.smartmobility.cero",
    ios: "https://apps.apple.com/in/app/cero/id6480592872",
    responsibilities:
      "Built network syncing, real-time availability logic, and partner analytics tools.",
    screenshots: [],
    order: 13,
  },
  {
    slug: "wuerth-ev",
    title: "Wuerth EV App",
    shortDescription: "Enterprise EV fleet charging & tariff tracking",
    fullDescription:
      "Built for Wuerth India, this app enables enterprise fleet charging with navigation to stations, live tariff tracking, wallet payments, and in-app purchases. It supports fleet dashboards and advanced enterprise feature sets for smart charge planning.",
    category: "EV Charging",
    tech: ["Flutter", "Fleet Mgmt", "Navigation"],
    features: [
      "Fleet charging dashboards",
      "Live tariff info",
      "Station navigation",
      "Wallet & IAP support",
      "Real-time tracking",
    ],
    android:
      "https://play.google.com/store/apps/details?id=com.wuerth.wuerthcharger",
    ios: "https://apps.apple.com/us/app/wuerth-ev/id6443577487",
    responsibilities:
      "Led fleet charging UX, implemented tariff feeds, and integrated key platform payments.",
    screenshots: [],
    order: 14,
  },
  {
    slug: "icarica",
    title: "iCarica",
    shortDescription: "EV charging across MENA region",
    fullDescription:
      "Supported 10,000+ EV charging stations across MENA (Jordan, Egypt, UAE). Real-time station status, live charging sessions, remote start/stop, and wallet payments.",
    category: "EV Charging",
    tech: [
      "Flutter",
      "Firebase",
      "OCPP",
      "Google Maps",
      "Payment Gateway",
      "Real-time Updates",
    ],
    features: [
      "10,000+ charging stations across MENA",
      "Coverage in Jordan, Egypt, and UAE",
      "Real-time station availability",
      "Live charging session monitoring",
      "Remote start/stop control",
      "Wallet-based payments",
      "Multi-language support (Arabic & English)",
    ],
    responsibilities:
      "Developed MENA-region specific features, implemented OCPP standards, integrated regional payment systems, optimized for Arabic language.",
    screenshots: [],
    order: 15,
  },
  {
    slug: "scholarcafe",
    title: "ScholarCafe",
    shortDescription:
      "AI-powered education platform with ChatGPT, translate, and OCR tools",
    fullDescription:
      "Developed a productivity platform for students and professionals using Flutter and Laravel backend. Integrated ChatGPT, Google Translate (20+ languages), and AI-based OCR Calculator and scientific calculator. Built modules for note-taking, group discussion (with report handling), speech-to-text/text-to-speech, and paint canvas. Exported custom charts and presentations to editable image content with local storage. Optimized UI for interactive learning and accessibility.",
    category: "Education",
    tech: [
      "Flutter",
      "Laravel",
      "ChatGPT",
      "Google Translate",
      "AI OCR",
      "Speech-to-Text",
      "Text-to-Speech",
    ],
    features: [
      "AI-powered learning with ChatGPT integration",
      "Google Translate support for 20+ languages",
      "AI-based OCR Calculator",
      "Scientific calculator",
      "Note-taking and organization",
      "Group discussion with report handling",
      "Speech-to-text and text-to-speech",
      "Paint canvas for visual learning",
      "Custom chart and presentation export",
      "Local storage for offline access",
      "Interactive and accessible UI",
    ],
    responsibilities:
      "Integrated AI features (ChatGPT, OCR), implemented multilingual support, developed note-taking and collaboration tools, optimized for accessibility.",
    screenshots: [],
    order: 16,
  },
  {
    slug: "xandria",
    title: "Xandria",
    shortDescription: "eBook and audiobook platform with epub reader",
    fullDescription:
      "Developed an eBook and audiobook platform with epub reader and audio streaming support. Collaborated in early MVP phase with a 3-member team; later led solo development and feature expansion. Integrated in-app purchases, Dogecoin-based payment system, and deep linking across the app. Implemented Riverpod for modular state management and socket-based 1:1 chat for book clubs. Created immersive UI for a virtual artifact museum with 3D object rendering.",
    category: "Education",
    tech: [
      "Flutter",
      "Epub Reader",
      "Audio Streaming",
      "Riverpod",
      "Socket.io",
      "In-App Purchases",
      "Dogecoin",
      "3D Rendering",
    ],
    features: [
      "eBook and audiobook platform",
      "Epub reader with audio streaming",
      "In-app purchases",
      "Dogecoin-based payment system",
      "Deep linking throughout app",
      "Riverpod state management",
      "Socket-based 1:1 chat for book clubs",
      "Virtual artifact museum with 3D rendering",
      "Immersive reading experience",
    ],
    responsibilities:
      "Led solo development after MVP, integrated payment systems, implemented book club chat, created 3D museum experience.",
    screenshots: [],
    order: 17,
  },
  {
    slug: "volo",
    title: "VOLO",
    shortDescription: "On-demand ride-sharing and booking platform",
    fullDescription:
      "A comprehensive ride-sharing platform connecting passengers with drivers for safe, reliable, and affordable transportation.",
    category: "Transportation",
    tech: [
      "Flutter",
      "Google Maps",
      "Real-time Tracking",
      "Payment Gateway",
      "Socket.io",
    ],
    features: [
      "Real-time ride tracking",
      "Multiple payment options",
      "Fare estimation",
      "Ride history",
      "Driver ratings",
      "In-app chat",
    ],
    responsibilities:
      "Implemented real-time tracking, integrated payment systems, developed booking flow, and optimized map performance.",
    screenshots: [],
    order: 18,
  },
  {
    slug: "volo-pilot",
    title: "VOLO Pilot",
    shortDescription: "Driver companion app for VOLO ride-sharing",
    fullDescription:
      "A dedicated driver application with navigation, earnings tracking, and ride management for VOLO drivers.",
    category: "Transportation",
    tech: [
      "Flutter",
      "Location Tracking",
      "Push Notifications",
      "Maps",
      "Real-time Updates",
    ],
    features: [
      "Turn-by-turn navigation",
      "Earnings dashboard",
      "Ride acceptance workflow",
      "Driver analytics",
      "Offline mode",
      "Support system",
    ],
    responsibilities:
      "Developed driver-side features, implemented navigation, created earnings tracking, and optimized battery usage.",
    screenshots: [],
    draft: true,
    order: 100,
  },
  {
    slug: "zokar",
    title: "Zokar",
    shortDescription: "On-demand service marketplace",
    fullDescription:
      "A versatile on-demand service marketplace connecting service providers with customers for various home and professional services.",
    category: "Marketplace",
    tech: [
      "Flutter",
      "Firebase",
      "Real-time Database",
      "Payment Integration",
      "Location Services",
    ],
    features: [
      "Multi-service marketplace",
      "Real-time booking management",
      "Service provider profiles",
      "In-app payments",
      "Rating and reviews",
      "Chat support",
    ],
    responsibilities:
      "Developed marketplace infrastructure, implemented booking system, integrated payment gateway.",
    screenshots: [],
    draft: true,
    order: 101,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

function byOrder(a: Project, b: Project) {
  return a.order - b.order;
}

export function getFlagshipProjects(): Project[] {
  return projects.filter((p) => p.flagship && !p.draft).sort(byOrder);
}

export function getGridProjects(): Project[] {
  return projects.filter((p) => !p.flagship && !p.draft).sort(byOrder);
}

export function hasProjectDetail(project: Project): boolean {
  return project.flagship === true || project.screenshots.length > 0;
}

export const caseStudySlugs = [
  "odigo",
  "odigo-etihad-rail",
  "satsang",
  "bonno",
  "karuna-care",
  "mamgo",
  "crimechime",
  "country-kart",
  "takeprofit",
  "medan-tv",
] as const;

export type CaseStudySlug = (typeof caseStudySlugs)[number];
