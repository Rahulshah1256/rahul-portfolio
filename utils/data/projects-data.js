export const projectsData = [
    {
        id: 1,
        name: 'Exam Portal',
        description: "Developed a secure online examination system featuring full-screen mode, tab-switch prevention, and automated submission, eliminating manual data entry for professors.",
        tools: ['Java', 'Spring Boot', 'Rest API', 'Hibernate', 'Angular', 'MySQL'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    },
    {
        id: 2,
        name: 'Cafe Management System',
        description: "A full-stack, production-grade food ordering & cafe management platform inspired by Swiggy/Zomato/Uber Eats. Built a Spring Boot 3 (Java 21) + PostgreSQL backend with a React 18 + TypeScript + MUI frontend, covering the entire order lifecycle: menu browsing, cart, coupons & loyalty points, multi-step checkout, and real-time online payments via Razorpay (UPI/Cards/Net Banking/Wallets) with server-side HMAC-SHA256 signature verification plus Cash on Delivery. Features JWT authentication with email OTP signup verification, role-based access (admin/user/delivery), a live Kitchen Display, delivery-partner dashboards, order tracking, PDF invoices, refunds, a full back-office admin suite, and a Playwright end-to-end regression suite.",
        tools: ['Java 21', 'Spring Boot 3', 'Spring Security', 'JWT', 'Hibernate', 'PostgreSQL', 'React', 'TypeScript', 'MUI', 'Vite', 'Razorpay', 'Playwright'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    },
    {
        id: 3,
        name: 'AI Digital Cards Manager',
        description: "Built an AI-powered digital cards management platform that lets customers securely manage their bank cards and financial wellbeing through a multi-agent assistant. Features card-based authentication with a demo OTP flow, new digital card registration, real-time card controls and spending-limit management, and a personalized 30-day financial wellbeing summary with tailored recommendations driven by recent financial signals and saved preferences. Designed with an orchestrator (bank_agent) that delegates to specialist AI agents for profiles, card insights, controls, and preferences, with graceful fallback to bundled local data when BigQuery is not configured.",
        tools: ['Python', 'Google BigQuery', 'Vertex AI', 'Docker', 'Multi-Agent (ADK)'],
        code: '',
        demo: '',
        role: 'AI/Backend Developer',
    },
    {
        id: 4,
        name: 'JantaBank - NetBanking Platform',
        description: "Built an enterprise-grade, full-stack Internet & Mobile Banking platform modelling a real retail bank. The Spring Boot 3 (Java 20) REST backend exposes ~120 endpoints across 18 controllers, secured with Spring Security 6 and JWT (access + refresh tokens with blacklist), backed by MySQL 8 with Flyway-versioned migrations. Features customer onboarding with KYC, multi-account management, inter-bank fund transfers (IMPS/NEFT/RTGS/UPI) with per-mode limits, debit/credit cards, loans with EMI calculator, fixed & recurring deposits, cheque services, UPI handles with QR codes, notifications, support desk, reporting, and a full admin console. Includes background schedulers for recurring transfers, deposit maturity, and token cleanup. The React 19 + Vite SPA uses Material UI 6 with a custom fintech design system, protected route guards, and role-based access for customers and administrators.",
        tools: ['Java 20', 'Spring Boot 3', 'Spring Security', 'JWT', 'Hibernate', 'MySQL', 'Flyway', 'React', 'Material UI', 'Vite', 'REST API'],
        code: '',
        demo: '',
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },