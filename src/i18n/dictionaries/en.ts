import { PATENT_APPLICATION_NO } from "@/lib/site";
import type { Dictionary } from "./ko";
import legalEn from "./legal.en";

const en: Dictionary = {
  meta: {
    title: "Vibe Trip — The AI Travel Planner That Builds Your Itinerary in One Chat",
    description:
      "From AI planning and automatic voucher organizing to real-time, location-based care on the ground. Finish your trip prep in 3 minutes with Vibe Trip.",
    keywords: ["Vibe Trip", "AI travel planner", "trip itinerary", "voucher OCR", "travel app"],
    ogLocale: "en_US",
    ogImageAlt: "Vibe Trip logo — a compass rose with an airplane",
  },

  header: {
    nav: {
      features: "Features",
      "how-it-works": "How It Works",
      "vibe-pick": "Vibe Pick",
      pass: "Pass",
      faq: "FAQ",
    },
    downloadApp: "Get the App",
    homeAria: "Vibe Trip home",
    mainNavAria: "Main menu",
    mobileNavAria: "Mobile menu",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    languageAria: "Select language",
  },

  store: {
    appStore: "Download on the App Store",
    googlePlay: "Get it on Google Play",
  },

  hero: {
    badge: "Patent-Pending Technology",
    titleLine1: "Plan in one chat,",
    titlePrefix: "then explore with",
    titleGradient: "your AI guide",
    description:
      "No more juggling dozens of tabs. From AI planning and automatic voucher organizing to real-time, location-based care on the ground — Vibe Trip does it all in one app.",
    trustPoints: [
      "Auto-generated itineraries",
      "Real-time trip care",
      "Automatic voucher organizing",
      "Turn your trip into a product (C2C)",
    ],
  },

  phone: {
    aria: "App screen where Routi, the Vibe Trip AI assistant, has generated a Day 1 Osaka itinerary timeline",
    chipVoucher: { title: "4 vouchers organized", sub: "Recognized by OCR" },
    chipLocation: { title: "Picks near you", sub: "4 min walk · Open now" },
    assistantName: "Routi",
    assistantStatus: "Osaka itinerary ready",
    userMsg: "Plan a 4-day, 3-night Osaka trip in October — food-focused!",
    botMsg: "Sure! I grouped your first day around Namba 👇",
    dayLabel: "DAY 1 · Oct 17",
    autoBadge: "Auto-generated",
    arrive: { title: "Arrive at Kansai Airport", time: "10:20", sub: "Haruka Express · 45 min to Namba" },
    checkin: { title: "Hotel check-in", time: "13:00", sub: "Namba Oriental Hotel", badge: "Voucher verified" },
    eats: { title: "Local eats · Kushikatsu Daruma", time: "18:30", sub: "4.7 · 6 min walk · 15 min wait" },
    viewAll: "View full itinerary",
    typing: "Routi is planning DAY 2",
    placeholder: "Ask Routi anything",
  },

  painSolution: {
    eyebrow: "Pain & Solution",
    titleLines: ["Still planning your trip", "with dozens of tabs open?"],
    description: "Instead of scattered bookings and endless searching, Vibe Trip organizes everything on one screen.",
    before: {
      badge: "BEFORE",
      caption: "Complicated trip prep",
      tabs: ["Booking emails", "Screenshots", "Maps app", "Blog posts", "Notes"],
      title: "Days of prep, dozens of rounds of sorting",
      items: [
        "Digging through booking emails and screenshots to organize flights, hotels, and transit one by one",
        "Bouncing between blogs, map apps, and notes to work out routes by hand",
        "Recalculating travel times from scratch whenever a single plan changes",
        "Searching again and asking around once you arrive",
      ],
    },
    after: {
      badge: "AFTER",
      time: "Done in 3 min",
      chip: "All in Vibe Trip",
      title: "Done in 3 minutes with Vibe Trip",
      items: [
        "One chat, and AI builds a day-by-day timeline for you",
        "Upload vouchers and OCR organizes flight, hotel, and transit info automatically",
        "Move an item and travel modes and routes are recalculated automatically",
        "On the ground, the app looks after you and guides you based on location and time",
      ],
    },
  },

  bento: {
    eyebrow: "Why Vibe Trip",
    titleLines: ["From the first idea to the last day,", "4 core strengths"],
    description:
      "Itinerary design, voucher organizing, local care, and turning your own trip into a product — all connected in one app.",
    ai: {
      tag: "AI Itinerary",
      title: "Plan by chat, recalculated when plans change",
      body: "Tell it where you want to go and AI builds a vertical, day-by-day timeline. Move an item and travel modes and routes are recalculated automatically.",
      recalc: "Auto route recalculation",
      before: [
        { time: "10:20", label: "Arrive at airport" },
        { time: "11:30", label: "Transit · 45 min" },
        { time: "13:00", label: "Hotel check-in" },
      ],
      after: [
        { time: "10:20", label: "Arrive at airport" },
        { time: "12:10", label: "Transit · recalculated" },
        { time: "13:40", label: "Hotel check-in" },
      ],
    },
    ocr: {
      tag: "Voucher OCR",
      title: "Just upload — we'll organize it",
      body: "Hybrid parsing powered by Gemini Vision reads your flight, hotel, and transit vouchers and adds them to your itinerary.",
      vouchers: ["Flight voucher", "Hotel voucher", "Transit voucher"],
      recognized: "Detected",
    },
    care: {
      tag: "Real-time Local Care",
      title: "It reads your location and time, and speaks up first",
      body: "Based on where you are and what time it is, the app proactively pushes your next move, nearby recommendations, and docent guides.",
      push1: { title: "Picks near you", sub: "4 min walk · Open now" },
      push2: { title: "Docent alert", sub: "Hear the story behind nearby landmarks" },
    },
    pick: {
      tag: "Vibe Pick",
      title: "Turn your trip into a product in our C2C marketplace",
      body: "Share the trip you took on Vibe Pick and other travelers can use your itinerary. Creator rebates build up in your wallet every time it's used.",
      nodes: [
        { label: "My itinerary", sub: "Share after your trip" },
        { label: "Vibe Pick", sub: "Used by other travelers" },
        { label: "Rebate Wallet", sub: "Earnings accrue" },
      ],
    },
  },

  howItWorks: {
    eyebrow: "How It Works",
    titleLines: ["Before, during, and after your trip,", "we connect every moment"],
    description: "Tap a step to see how Vibe Trip is with you at each moment.",
    tablistAria: "Vibe Trip steps",
    stepWord: "STEP",
    steps: [
      {
        phase: "Pre-Trip",
        label: "Planning · Voucher OCR",
        summary: "Build your itinerary by chat and organize vouchers automatically",
        title: "Plan by chat, and just upload your vouchers",
        points: [
          {
            title: "Conversational AI planning",
            body: "Tell it your city and tastes, and a day-by-day timeline is ready.",
          },
          {
            title: "Automatic voucher OCR",
            body: "Reads flight, hotel, and transit vouchers and places them at the right time and place.",
          },
        ],
      },
      {
        phase: "On-Trip",
        label: "Real-time GPS Care · Mobility Calls",
        summary: "The app looks out for you on the ground and connects your ride",
        title: "On the ground, the app looks out for you first",
        points: [
          {
            title: "Real-time location & time care",
            body: "Based on where you are and the time, it tells you your next move, nearby picks, and docent guides first.",
          },
          {
            title: "Mobility calls",
            body: "Connects you straight to the right service for the country: Uber for Korea and global, Grab for six Southeast Asian countries.",
          },
        ],
      },
      {
        phase: "Post-Trip",
        label: "Marketplace Sharing · Earnings",
        summary: "Share your trip and collect rebates",
        title: "Your finished trip becomes the next traveler's product",
        points: [
          {
            title: "Share on Vibe Pick",
            body: "Post the itinerary from your trip to Vibe Pick, our C2C marketplace.",
          },
          {
            title: "Creator Rebate Wallet",
            body: "When your itinerary is used, rebates are credited to your wallet.",
          },
        ],
      },
    ],
    visuals: {
      pre: {
        userMsg: "Plan a 4-day, 3-night Osaka trip in October — food-focused!",
        botMsg: "I grouped Day 1 around Namba.",
        vouchers: ["Flight voucher", "Hotel voucher", "Transit voucher"],
        reflected: "Added to itinerary",
      },
      on: {
        locationTitle: "Picks near you",
        locationSub: "4 min walk · Open now",
        nudge: "You have time before your next stop. Want to hear a docent guide for a nearby landmark?",
        mobilityTitle: "Mobility by country",
        uberRegion: "Korea · Global",
        grabRegion: "VN · TH · SG · MY · PH · ID",
      },
      post: {
        itineraryTitle: "Osaka 4-day food route",
        pickTag: "Vibe Pick",
        description: "Share your itinerary on the marketplace and other travelers can use it as is.",
        walletTitle: "Rebate Wallet",
        walletSub: "Credited when your itinerary is used",
      },
    },
  },

  pass: {
    eyebrow: "Pass & Reward",
    titleLines: ["One trip, one pass.", "Share a trip, get a free pass"],
    description:
      "No recurring payments — just what you need for each trip. Share your itinerary, and when the person you shared it with signs up, we'll give you a Single-Trip Pass for free.",
    passCard: {
      badge: "Pay-Per-Trip",
      title: "Single-Trip Pass",
      description: "One trip, one pass. For your next trip, you just need the next pass.",
      features: [
        "Conversational AI trip planning",
        "Automatic voucher OCR organizing",
        "Real-time local care · docent guides",
        "Uber · Grab mobility calls",
      ],
    },
    // PROMO (paused) English copy for the B2B offset card, ready for when it returns:
    //   eyebrow "B2B Offset", title "100% pass refund on partner bookings", badge "KRW 0" / "Effective cost",
    //   steps: "Start with a Single-Trip Pass" / "One pass per trip, every trip." ·
    //          "Book partner products in the app" / "Book the partner products in your itinerary through Vibe Trip." ·
    //          "100% of your pass refunded" / "Once a partner booking is made, your pass payment is refunded.",
    //   note "* Eligible partner products and detailed terms follow the in-app guidelines."
    //   Title/description: "One trip, one pass. Book with partners and it's free" /
    //     "No recurring payments — just what you need for each trip. Book with partners and your pass cost is refunded 100%."
    rewardCard: {
      eyebrow: "Share & Reward",
      title: "Share your itinerary — when a friend signs up, your pass is free",
      badge: "Free pass",
      badgeAria: "Free Single-Trip Pass",
      steps: [
        { title: "Share your itinerary", body: "Share your finished trip itinerary with someone else." },
        { title: "They sign up", body: "The person you shared with signs up for Vibe Trip." },
        { title: "Free Single-Trip Pass", body: "You — the one who shared — receive a Single-Trip Pass for free." },
      ],
      note: "* Timing and detailed terms follow the in-app guidelines.",
    },
  },

  faq: {
    eyebrow: "FAQ & Trust",
    title: "Frequently Asked Questions",
    description:
      "Check the answers to common questions first. We tell you plainly what Vibe Trip does — and doesn't do.",
    trustCards: [
      { title: "Patent pending", body: "Real-time context engine · heterogeneous data parsing" },
      { title: "Gemini Vision OCR", body: "Hybrid parsing of flight, hotel, and transit vouchers" },
      { title: "Uber · Grab integration", body: "Country-specific mobility deep links" },
    ],
    // PROMO (paused) English FAQ for the B2B offset:
    //   Q: How does the 100% refund on partner bookings work?
    //   A: After starting with a Single-Trip Pass, book a partner product in the app and your pass payment
    //      is refunded 100%, so your effective cost is KRW 0. Eligible partner products and detailed terms
    //      follow the in-app guidelines.
    items: [
      {
        question: "Can I use vouchers I booked elsewhere?",
        answer:
          "Vibe Trip doesn't connect directly to booking sites — it recognizes the voucher itself. Upload a flight, hotel, or transit voucher to the app and hybrid parsing based on Gemini Vision OCR reads the times and places and adds them to your itinerary timeline automatically. Currently supported types are flight, hotel, and transit vouchers.",
      },
      {
        question: "Can I get a refund on the Single-Trip Pass?",
        answer:
          "Whether a refund is available, and on what terms, follows the information shown at checkout and the refund policy in the Terms of Service. You can find the details in the Terms of Service or by contacting customer support.",
      },
      {
        question: "Can I get a Single-Trip Pass for free by sharing my itinerary?",
        answer:
          "If you share your trip itinerary with someone else and they sign up for Vibe Trip, you — the person who shared — will receive a Single-Trip Pass for free. Timing and detailed terms follow the in-app guidelines.",
      },
      {
        question: "Where can I call a ride?",
        answer:
          "You're connected automatically to the service that fits the country. Uber covers Korea and global regions, and Grab covers six Southeast Asian countries: Vietnam, Thailand, Singapore, Malaysia, the Philippines, and Indonesia.",
      },
      {
        question: "How do I earn on Vibe Pick?",
        answer:
          "Share a trip you've taken on Vibe Pick, our C2C marketplace, and creator rebates are credited to your wallet whenever another traveler uses your itinerary. Detailed settlement terms follow the in-app guidelines.",
      },
      {
        question: "Is the patent granted?",
        answer: `The patent for our real-time context engine and heterogeneous data parsing technology (Application No. ${PATENT_APPLICATION_NO}) is currently at the application stage.`,
      },
    ],
  },

  footer: {
    tagline: "Plan in one chat, then explore with your AI guide.",
    patentLabel: "Patent application no.",
    patentNumber: PATENT_APPLICATION_NO,
    patentStatus: "(patent pending)",
    brand: "Vibe Trip",
    rightsReserved: "All rights reserved.",
    // TODO: replace the placeholders with the real company info.
    company: {
      legalName: "Vibe Trip",
      ceo: "[Enter CEO name]",
      mailOrderNo: "0000-Region-0000",
      address: "[Enter business address]",
    },
    labels: {
      legalName: "Company",
      ceo: "CEO",
      businessNo: "Business registration no.",
      mailOrderNo: "Mail-order business report no.",
      address: "Address",
      support: "Customer support",
    },
    terms: "Terms of Service",
    privacy: "Privacy Policy",
    legalNavAria: "Terms and policies",
    legal: legalEn,
  },
};

export default en;
