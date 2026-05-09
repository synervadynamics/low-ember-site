import type { MediaFrameImage } from "@/components/ui/MediaFrame";
import {
  footerNavItems,
  legalNavItems,
  siteConfig,
} from "@/lib/site";

type Cta = {
  label: string;
  href: string;
};

type MenuHighlight = {
  name: string;
  price: string;
  description: string;
};

type EventItem = {
  title: string;
  description: string;
  cta: Cta;
  image: MediaFrameImage;
};

export const homepageData = {
  hero: {
    title: "Dinner worth settling into.",
    description:
      "Seasonal plates, balanced cocktails, and warm service from five until late.",
    secondaryDescription:
      "Bar seats for walk-ins, long tables for dinner, and a private room that keeps the pace.",
    primaryCta: {
      label: siteConfig.reservation.label,
      href: siteConfig.reservation.href,
    },
    secondaryCta: {
      label: "View Menus",
      href: "#menus",
    },
    location: "St. Catharines, Ontario",
    meta: "Dinner, cocktails, private dining",
    image: {
      src: "/images/low-ember/homepage/hero/hero-interior.jpg",
      label: "Hero Interior",
      aspectRatio: "16 / 9",
      alt: "Low-lit dining room and bar with warm amber lighting.",
      objectPosition: "center center",
      priority: true,
      sizes: "100vw",
      decorative: true,
    } satisfies MediaFrameImage,
  },
  featureStrip: [
    {
      title: "Dinner service",
      description: "Nightly from 5pm",
      icon: "utensils",
    },
    {
      title: "Cocktails & wine",
      description: "Classics, house drinks, Niagara wine",
      icon: "martini",
    },
    {
      title: "Private dining",
      description: "Birthdays, work dinners, buyouts",
      icon: "users",
    },
    {
      title: "Walk-ins welcome",
      description: "Bar seats and high-tops nightly",
      icon: "chair",
    },
  ],
  diningCards: {
    eyebrow: "Dinner, drinks, room",
    title: "Built for dinner. Better after dark.",
    cards: [
      {
        title: "Dining",
        description:
          "Seasonal plates, familiar dishes, and a menu built to be ordered without a speech first.",
        image: {
          src: "/images/low-ember/homepage/cards/dining-card.jpg",
          label: "Dining Card",
          aspectRatio: "4 / 3",
          alt: "Seasonal dinner plate in warm low light.",
          objectPosition: "center center",
          sizes: "(min-width: 1024px) 33vw, 100vw",
          decorative: true,
        } satisfies MediaFrameImage,
      },
      {
        title: "Cocktails",
        description:
          "Cold martinis, house classics, and balanced drinks for the table.",
        image: {
          src: "/images/low-ember/homepage/cards/cocktail-card.jpg",
          label: "Cocktail Card",
          aspectRatio: "4 / 3",
          alt: "Cocktail served over ice with orange garnish.",
          objectPosition: "center center",
          sizes: "(min-width: 1024px) 33vw, 100vw",
          decorative: true,
        } satisfies MediaFrameImage,
      },
      {
        title: "The room",
        description:
          "Low light, good pacing, and tables for the kind of nights that end with one more round.",
        image: {
          src: "/images/low-ember/homepage/cards/room-card.jpg",
          label: "Room Card",
          aspectRatio: "4 / 3",
          alt: "Warm dining room with low lighting and set tables.",
          objectPosition: "center center",
          sizes: "(min-width: 1024px) 33vw, 100vw",
          decorative: true,
        } satisfies MediaFrameImage,
      },
    ],
  },
  kitchen: {
    id: "menus",
    eyebrow: "From the kitchen",
    title: "From the kitchen",
    description:
      "The menu stays familiar on purpose: steak, fish, pasta, roast chicken, good vegetables, proper sauce, and clean seasoning.",
    secondaryDescription:
      "The menu changes with the season and the market. Buy well, cook carefully, and leave off anything that does not earn its place.",
    cta: {
      label: "View Dinner Menu",
      href: "#menus",
    } satisfies Cta,
    menuLink: {
      label: "View full menu",
      href: "#menus",
    } satisfies Cta,
    image: {
      src: "/images/low-ember/homepage/sections/kitchen-feature.jpg",
      label: "Kitchen Feature",
      aspectRatio: "4 / 5",
      alt: "Grilled steak sliced on a dark plate with herbs.",
      objectPosition: "center center",
      sizes: "(min-width: 1024px) 60vw, 100vw",
      decorative: true,
    } satisfies MediaFrameImage,
    highlights: [
      {
        name: "Charred Striploin",
        price: "46",
        description: "bone marrow butter, roasted garlic, jus",
      },
      {
        name: "Lake Erie Pickerel",
        price: "38",
        description: "fennel, capers, lemon brown butter",
      },
      {
        name: "Coal-Roasted Carrots",
        price: "24",
        description: "labneh, dukkah, chili crunch",
      },
      {
        name: "Ember Burger",
        price: "26",
        description: "aged cheddar, pickles, ember sauce",
      },
    ] satisfies MenuHighlight[],
  },
  bar: {
    id: "cocktails",
    eyebrow: "The bar",
    title: "The bar",
    description:
      "The bar keeps pace with dinner service: cold martinis, fresh citrus, and a wine list that helps more than it performs.",
    cta: {
      label: "View Cocktails",
      href: "#cocktails",
    } satisfies Cta,
    image: {
      src: "/images/low-ember/homepage/sections/cocktail-feature.jpg",
      label: "Cocktail Feature",
      aspectRatio: "4 / 5",
      alt: "Amber cocktail in a coupe glass on a dark bar.",
      objectPosition: "center center",
      sizes: "(min-width: 1024px) 60vw, 100vw",
      decorative: true,
    } satisfies MediaFrameImage,
    highlightTitle: "Cocktails for the table.",
    cocktails: [
      {
        name: "House Martini",
        description:
          "gin or vodka, house vermouth, olive or lemon",
      },
      {
        name: "Burnt Orange Old Fashioned",
        description:
          "bourbon, burnt orange, demerara, bitters",
      },
      {
        name: "Niagara Negroni",
        description: "gin, bitter orange, vermouth, orange oil",
      },
    ],
  },
  room: {
    id: "about",
    eyebrow: "The room",
    title: "The room",
    description:
      "Bright enough early, low-lit later, with banquettes, bar seats, and corners that make a long dinner feel easy.",
    image: {
      src: "/images/low-ember/homepage/sections/room-interior.jpg",
      label: "Room Interior",
      aspectRatio: "16 / 7",
      alt: "Low-lit dining room with candles, banquettes, and bar seating.",
      objectPosition: "center center",
      sizes: "100vw",
      decorative: true,
    } satisfies MediaFrameImage,
    features: [
      "Date nights",
      "Work dinners",
      "Late tables",
      "Regulars",
    ],
  },
  privateDining: {
    id: "private-dining",
    eyebrow: "Private dining",
    title: "Private dinners, done properly.",
    description:
      "A separate room, flexible set menus, and the same service pace as the main floor.",
    cta: {
      label: "Start an Inquiry",
      href: "#private-dining",
    } satisfies Cta,
    image: {
      src: "/images/low-ember/homepage/sections/private-dining.jpg",
      label: "Private Dining",
      aspectRatio: "16 / 9",
      alt: "Private dining table set with wine glasses and candlelight.",
      objectPosition: "center center",
      sizes: "100vw",
      decorative: true,
    } satisfies MediaFrameImage,
  },
  happenings: {
    id: "happenings",
    eyebrow: "What’s on",
    title: "What’s on",
    events: [
      {
        title: "Sunday Supper",
        description:
          "A Sunday set menu built for lingering. Different each time, always dinner first.",
        cta: {
          label: "See Details",
          href: "#happenings",
        },
        image: {
          src: "/images/low-ember/homepage/events/sunday-supper.jpg",
          label: "Sunday Supper",
          aspectRatio: "4 / 3",
          alt: "Shared dinner plates on a warm restaurant table.",
          objectPosition: "center center",
          sizes: "(min-width: 1024px) 33vw, 100vw",
          decorative: true,
        },
      },
      {
        title: "Guest Bartender Night",
        description:
          "Friends from around Niagara behind the bar for one-night drinks and a louder room.",
        cta: {
          label: "See Details",
          href: "#happenings",
        },
        image: {
          src: "/images/low-ember/homepage/events/guest-bartender-night.jpg",
          label: "Guest Bartender Night",
          aspectRatio: "4 / 3",
          alt: "Bartender preparing a cocktail behind the bar.",
          objectPosition: "center center",
          sizes: "(min-width: 1024px) 33vw, 100vw",
          decorative: true,
        },
      },
      {
        title: "Late Night Vinyl",
        description:
          "Fridays and Saturdays after 10. Records on, lights down, bar still moving.",
        cta: {
          label: "See Details",
          href: "#happenings",
        },
        image: {
          src: "/images/low-ember/homepage/events/late-night-vinyl.jpg",
          label: "Late Night Vinyl",
          aspectRatio: "4 / 3",
          alt: "Vinyl record beside a late-night drink.",
          objectPosition: "center center",
          sizes: "(min-width: 1024px) 33vw, 100vw",
          decorative: true,
        },
      },
    ] satisfies EventItem[],
  },
  contact: {
    id: "contact",
    title: "Find Low Ember",
    address: siteConfig.location.addressLines,
    hours: ["Mon–Thu: 5pm–11pm", "Fri–Sat: 5pm–1am", "Sun: 5pm–10pm"],
    phone: siteConfig.contact.phone,
    phoneHref: siteConfig.contact.phoneHref,
    email: siteConfig.contact.email,
    emailHref: siteConfig.contact.emailHref,
    instagram: siteConfig.contact.instagram,
    instagramHref: siteConfig.contact.instagramHref,
    cta: {
      label: siteConfig.reservation.label,
      href: siteConfig.reservation.href,
    },
    map: {
      src: "/images/low-ember/homepage/location/location-map-dark.jpg",
      label: "Map Placeholder",
      aspectRatio: "16 / 9",
      alt: "Dark map showing the Low Ember location.",
      objectPosition: "center center",
      sizes: "(min-width: 1024px) 50vw, 100vw",
      decorative: true,
    } satisfies MediaFrameImage,
  },
  footer: {
    tagline:
      "Seasonal plates. Good drinks. A room worth settling into.",
    navItems: footerNavItems,
    legalNavItems,
    socialLinks: siteConfig.social,
  },
} as const;
