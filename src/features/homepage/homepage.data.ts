import {
  footerNavItems,
  legalNavItems,
  siteConfig,
} from "@/lib/site";

type Cta = {
  label: string;
  href: string;
};

type PlaceholderImageData = {
  label: string;
  aspectRatio: string;
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
  image: PlaceholderImageData;
};

export const homepageData = {
  hero: {
    title: "A neighbourhood restaurant built on good ingredients and steady hands.",
    description:
      "Seasonal cooking, a thoughtful bar, and a room that’s meant to be lived in.",
    secondaryDescription:
      "We opened with a simple idea: if you start with better ingredients and treat them with care, you don’t have to do much else.",
    primaryCta: {
      label: siteConfig.reservation.label,
      href: siteConfig.reservation.href,
    },
    secondaryCta: {
      label: "View Menus",
      href: "#menus",
    },
    location: `${siteConfig.location.city}, ${siteConfig.location.province}`,
    meta: "Dinner, Cocktails, Private Events",
    image: {
      label: "Hero Interior",
      aspectRatio: "16 / 9",
    } satisfies PlaceholderImageData,
  },
  featureStrip: [
    {
      title: "Dinner Service",
      description: "Nightly from 5pm",
      icon: "utensils",
    },
    {
      title: "Cocktail Program",
      description: "Crafted with intention",
      icon: "martini",
    },
    {
      title: "Private Events",
      description: "Intimate to full buyouts",
      icon: "users",
    },
    {
      title: "Walk-Ins Welcome",
      description: "Bar & high-top seating",
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
          "Seasonal cooking, balanced plates, and a menu built to be enjoyed, not overthought.",
        image: {
          label: "Dining Card",
          aspectRatio: "4 / 3",
        } satisfies PlaceholderImageData,
      },
      {
        title: "Cocktails",
        description:
          "Measured, balanced drinks and a bar that keeps up with the kitchen.",
        image: {
          label: "Cocktail Card",
          aspectRatio: "4 / 3",
        } satisfies PlaceholderImageData,
      },
      {
        title: "The Room",
        description:
          "A warm, low-lit space for long dinners, late rounds, and nights that stretch a little further.",
        image: {
          label: "Room Card",
          aspectRatio: "4 / 3",
        } satisfies PlaceholderImageData,
      },
    ],
  },
  kitchen: {
    id: "menus",
    eyebrow: "From the kitchen",
    title: "From the kitchen",
    description:
      "The kitchen leans on classic technique and lets the ingredients carry the dish. You’ll see familiar ideas — roast chicken, fresh pasta, well-cut steak — done with a bit more attention to detail than you might expect on a casual night out.",
    secondaryDescription:
      "We change the menu often, but the approach stays the same: balanced plates, clean flavours, and nothing on the dish that doesn’t belong there.",
    cta: {
      label: "Explore the Dinner Menu",
      href: "#menus",
    } satisfies Cta,
    menuLink: {
      label: "View full menu",
      href: "#menus",
    } satisfies Cta,
    image: {
      label: "Kitchen Feature",
      aspectRatio: "4 / 5",
    } satisfies PlaceholderImageData,
    highlights: [
      {
        name: "Charred Striploin",
        price: "46",
        description: "12oz striploin, bone marrow butter, roasted garlic",
      },
      {
        name: "Brown Butter Halibut",
        price: "38",
        description: "fennel, crispy capers, lemon brown butter",
      },
      {
        name: "Coal-Roasted Carrots",
        price: "24",
        description: "whipped labneh, dukkah, chili crunch",
      },
      {
        name: "Ember Burger",
        price: "26",
        description: "smash patty, aged cheddar, pickles, ember sauce",
      },
    ] satisfies MenuHighlight[],
  },
  bar: {
    id: "cocktails",
    eyebrow: "The bar",
    title: "The bar",
    description:
      "The bar is built to keep up with the kitchen. Cocktails are measured and consistent, with a focus on balance over novelty. The wine list is practical and well-curated. Bottles are actually like to drink, not just collect. Beer stays local where it makes sense, with a few classics that never left for a reason.",
    cta: {
      label: "See the Cocktail List",
      href: "#cocktails",
    } satisfies Cta,
    image: {
      label: "Cocktail Feature",
      aspectRatio: "4 / 5",
    } satisfies PlaceholderImageData,
    highlightTitle: "Sharp pours, no theatre.",
    cocktails: [
      {
        name: "Smoke Signal",
        description:
          "Mezcal, lapsang souchong, aperol, lime, agave, smoke.",
      },
      {
        name: "Burnt Orange Old Fashioned",
        description:
          "Bourbon, burnt orange, demerara, black walnut bitters.",
      },
      {
        name: "House Martini",
        description: "Gin or vodka, house vermouth, olive or lemon.",
      },
    ],
  },
  room: {
    id: "about",
    eyebrow: "The room",
    title: "The room",
    description:
      "It’s a space you don’t have to figure out. Dim enough in the evening, bright enough during the day, with a mix of tables, bar seats, and corners for people who plan to stay a while. We pay attention to the details — music, pacing, lighting — so you don’t have to.",
    image: {
      label: "Room Interior",
      aspectRatio: "16 / 7",
    } satisfies PlaceholderImageData,
    features: [
      "Date nights",
      "Client dinners",
      "Late drinks",
      "Neighbourhood regulars",
    ],
  },
  privateDining: {
    id: "private-dining",
    eyebrow: "Private dining",
    title: "Private dining, without the banquet energy.",
    description:
      "Intimate rooms, flexible menus, and a team that makes your event feel effortless. Birthdays, team dinners, client evenings, and full-room buyouts.",
    cta: {
      label: "Plan an Event",
      href: "#private-dining",
    } satisfies Cta,
    image: {
      label: "Private Dining",
      aspectRatio: "16 / 9",
    } satisfies PlaceholderImageData,
  },
  happenings: {
    id: "happenings",
    eyebrow: "What’s on",
    title: "What’s on",
    events: [
      {
        title: "Sunday Supper",
        description:
          "A three-course family-style menu. Different every week. Always worth coming for.",
        cta: {
          label: "Learn More",
          href: "#happenings",
        },
        image: {
          label: "Sunday Supper",
          aspectRatio: "4 / 3",
        },
      },
      {
        title: "Guest Bartender Night",
        description:
          "A rotating cast of friends behind the bar, exclusive drinks, and a room with a little extra energy.",
        cta: {
          label: "Learn More",
          href: "#happenings",
        },
        image: {
          label: "Guest Bartender Night",
          aspectRatio: "4 / 3",
        },
      },
      {
        title: "Late Night Vinyl",
        description:
          "Fridays and Saturdays from 10pm. All classics, no requests, and strong drinks all night.",
        cta: {
          label: "Learn More",
          href: "#happenings",
        },
        image: {
          label: "Late Night Vinyl",
          aspectRatio: "4 / 3",
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
      label: "Map Placeholder",
      aspectRatio: "16 / 9",
    } satisfies PlaceholderImageData,
  },
  footer: {
    tagline:
      "Seasonal cooking. Thoughtful drinks. A room worth settling into.",
    navItems: footerNavItems,
    legalNavItems,
    socialLinks: siteConfig.social,
  },
} as const;
