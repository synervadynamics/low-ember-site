export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  handle: string;
  href: string;
};

export const siteConfig = {
  name: "Low Ember",
  legalName: "Low Ember",
  description:
    "Dinner, cocktails, and private dining in downtown St. Catharines.",
  url: "https://lowember.ca",
  location: {
    city: "St. Catharines",
    province: "Ontario",
    country: "Canada",
    addressLines: ["123 St. Paul Street", "St. Catharines, ON", "L2R 3M3"],
  },
  contact: {
    phone: "905 555 0147",
    phoneHref: "tel:+19055550147",
    email: "hello@lowember.ca",
    emailHref: "mailto:hello@lowember.ca",
    instagram: "@lowember.bar",
    instagramHref: "https://www.instagram.com/lowember.bar",
  },
  reservation: {
    label: "Reserve a Table",
    href: "#reserve",
  },
  social: [
    {
      label: "Instagram",
      handle: "@lowember.bar",
      href: "https://www.instagram.com/lowember.bar",
    },
  ],
} as const;

export const primaryNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Menus", href: "#menus" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Private Dining", href: "#private-dining" },
  { label: "Happenings", href: "#happenings" },
  { label: "Contact", href: "#contact" },
];

export const footerNavItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Menus", href: "#menus" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Private Dining", href: "#private-dining" },
  { label: "Happenings", href: "#happenings" },
  { label: "Contact", href: "#contact" },
];

export const legalNavItems: NavItem[] = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
];
