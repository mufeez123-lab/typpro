import React from "react";

export interface MenuItem {
  title: string;
  href: string;
  badge?: string;
  icon: React.ReactNode;
}

export interface MenuColumn {
  category: string;
  items: MenuItem[];
}

export interface MegaMenuData {
  title: string;
  href: string;
  columns: MenuColumn[];
}

export interface DropdownItem {
  title: string;
  href: string;
  description?: string;
  icon: React.ReactNode;
}

/* =========================================================================
   SVG ICONS (Crisp, modern, matching reference design)
   ========================================================================= */

// City / Building
export const BuildingIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M8 10h.01" />
    <path d="M16 10h.01" />
    <path d="M8 14h.01" />
    <path d="M16 14h.01" />
  </svg>
);

// Landmark / Courthouse
export const LandmarkIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="21" x2="21" y2="21" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="M4 10v11" />
    <path d="M20 10v11" />
    <path d="M8 10v11" />
    <path d="M12 10v11" />
    <path d="M16 10v11" />
    <path d="M12 2l9 8H3l9-8z" />
  </svg>
);

// Map Pin / Location
export const MapPinIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// Globe
export const GlobeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

// Badge / License / Certificate
export const BadgeCheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Document / Contract
export const FileTextIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

// Briefcase
export const BriefcaseIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);

// Anchor / Offshore
export const AnchorIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="5" r="3" />
    <line x1="12" y1="8" x2="12" y2="21" />
    <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
  </svg>
);

// Shield Check / Compliance
export const ShieldCheckIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

// Package / Box
export const PackageIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m7.5 4.27 9 5.15" />
    <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
    <path d="m3.3 7 8.7 5 8.7-5" />
    <path d="M12 22V12" />
  </svg>
);

// Sparkles / Special
export const SparklesIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

// Rocket / Launchpad
export const RocketIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

// Passport / Visa
export const PassportIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="3" />
    <circle cx="12" cy="10" r="3" />
    <path d="M8 17h8" />
  </svg>
);

// ID Card / Contact
export const IdCardIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <circle cx="8" cy="11" r="2.5" />
    <path d="M14 9h4" />
    <path d="M14 13h4" />
    <path d="M5 17a3 3 0 0 1 6 0" />
  </svg>
);

// Users / Labour
export const UsersIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

// Laptop / Online Service
export const LaptopIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55A1 1 0 0 1 20.38 20H3.62a1 1 0 0 1-.9-1.45L4 16" />
  </svg>
);

// Calculator
export const CalculatorIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <line x1="8" y1="6" x2="16" y2="6" />
    <line x1="16" y1="14" x2="16" y2="14.01" />
    <line x1="12" y1="14" x2="12" y2="14.01" />
    <line x1="8" y1="14" x2="8" y2="14.01" />
    <line x1="16" y1="18" x2="16" y2="18.01" />
    <line x1="12" y1="18" x2="12" y2="18.01" />
    <line x1="8" y1="18" x2="8" y2="18.01" />
    <line x1="8" y1="10" x2="8" y2="10.01" />
    <line x1="12" y1="10" x2="12" y2="10.01" />
    <line x1="16" y1="10" x2="16" y2="10.01" />
  </svg>
);

// Receipt / VAT
export const ReceiptIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
    <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
    <path d="M12 6v12" />
  </svg>
);

// Refresh / Renewal
export const RefreshCwIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
    <path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" />
    <path d="M16 16h5v5" />
  </svg>
);

// Edit / Amendments
export const EditIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);

// Stamp / Document Clearance
export const StampIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 22h14" />
    <path d="M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z" />
    <path d="M14 13V8.5C14 7.12 12.88 6 11.5 6S9 7.12 9 8.5V13" />
  </svg>
);

// Folder / Documentation
export const FolderIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z" />
  </svg>
);

// Customer / Support
export const HeadphonesIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
  </svg>
);

// News / Blog
export const BookOpenIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

// FAQ / Help
export const HelpCircleIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

/* =========================================================================
   1. BUSINESS SETUP - MEGA MENU DATA (Image 2)
   ========================================================================= */
export const BUSINESS_SETUP_MENU: MenuColumn[] = [
  {
    category: "Mainland Company Formation",
    items: [
      {
        title: "Dubai Mainland",
        href: "#business-setup",
        icon: <BuildingIcon />,
      },
      {
        title: "Sharjah Mainland",
        href: "#business-setup",
        icon: <LandmarkIcon />,
      },
      {
        title: "Ajman Mainland",
        href: "#business-setup",
        icon: <MapPinIcon />,
      },
      {
        title: "Abu Dhabi Mainland",
        href: "#business-setup",
        icon: <BuildingIcon />,
      },
    ],
  },
  {
    category: "Free Zone Company Formation",
    items: [
      {
        title: "UAE Free Zone Setup",
        href: "#business-setup",
        icon: <GlobeIcon />,
      },
      {
        title: "Free Zone Licence",
        href: "#business-setup",
        icon: <BadgeCheckIcon />,
      },
      {
        title: "Free Zone Company Registration",
        href: "#business-setup",
        icon: <FileTextIcon />,
      },
      {
        title: "Free Zone Business Setup",
        href: "#business-setup",
        icon: <BriefcaseIcon />,
      },
    ],
  },
  {
    category: "Offshore Company Formation",
    items: [
      {
        title: "Offshore Company Setup",
        href: "#business-setup",
        icon: <AnchorIcon />,
      },
      {
        title: "Offshore Company Registration",
        href: "#business-setup",
        icon: <ShieldCheckIcon />,
      },
    ],
  },
  {
    category: "Packages & Offers",
    items: [
      {
        title: "Business Setup Packages",
        href: "#business-setup",
        icon: <PackageIcon />,
      },
      {
        title: "Special Offers",
        href: "#contact",
        badge: "Special",
        icon: <SparklesIcon />,
      },
      {
        title: "Launchpad Packages",
        href: "#contact",
        icon: <RocketIcon />,
      },
    ],
  },
];

/* =========================================================================
   2. SERVICES - MEGA MENU DATA (Image 3)
   ========================================================================= */
export const SERVICES_MENU: MenuColumn[] = [
  {
    category: "PRO & Visa Services",
    items: [
      {
        title: "Visa & Immigration Services",
        href: "#services",
        icon: <PassportIcon />,
      },
      {
        title: "Emirates ID Services",
        href: "#services",
        icon: <IdCardIcon />,
      },
      {
        title: "MOHRE & Labour Services",
        href: "#services",
        icon: <UsersIcon />,
      },
      {
        title: "Online PRO Services",
        href: "#services",
        icon: <LaptopIcon />,
      },
    ],
  },
  {
    category: "Tax & Accounting",
    items: [
      {
        title: "Corporate Tax Filing",
        href: "#services",
        icon: <CalculatorIcon />,
      },
      {
        title: "VAT Filing",
        href: "#services",
        icon: <ReceiptIcon />,
      },
    ],
  },
  {
    category: "Business Licensing",
    items: [
      {
        title: "Trade Licence Application",
        href: "#services",
        icon: <BadgeCheckIcon />,
      },
      {
        title: "Trade Licence Renewal",
        href: "#services",
        icon: <RefreshCwIcon />,
      },
      {
        title: "Licence Amendments",
        href: "#services",
        icon: <EditIcon />,
      },
    ],
  },
  {
    category: "Corporate Services",
    items: [
      {
        title: "Document Clearing",
        href: "#services",
        icon: <StampIcon />,
      },
      {
        title: "Corporate Documentation",
        href: "#services",
        icon: <FolderIcon />,
      },
      {
        title: "Government Transaction Support",
        href: "#services",
        icon: <LandmarkIcon />,
      },
      {
        title: "Business Support Services",
        href: "#services",
        icon: <HeadphonesIcon />,
      },
    ],
  },
];

/* =========================================================================
   3. RESOURCES - DROPDOWN DATA (Image 4)
   ========================================================================= */
export const RESOURCES_DROPDOWN: DropdownItem[] = [
  {
    title: "Cost Calculator",
    href: "#contact",
    description: "Estimate your license & setup fee",
    icon: <CalculatorIcon />,
  },
  {
    title: "Company Profile",
    href: "#about",
    description: "Learn about our mission & history",
    icon: <BuildingIcon />,
  },
  {
    title: "Blogs",
    href: "#blogs",
    description: "Latest insights, guides & updates",
    icon: <BookOpenIcon />,
  },
  {
    title: "FAQ",
    href: "#contact",
    description: "Frequently asked questions answered",
    icon: <HelpCircleIcon />,
  },
];
