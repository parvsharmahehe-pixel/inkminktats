// All editable website content lives here. Change text, prices, hours, links
// and the site updates everywhere.

import work1 from "@/assets/ink-1.jpg";
import work2 from "@/assets/ink-2.jpg";
import work3 from "@/assets/ink-3.jpg";
import work4 from "@/assets/ink-4.jpg";
import work5 from "@/assets/ink-5.jpg";
import work6 from "@/assets/ink-6.jpg";
import work7 from "@/assets/ink-7.jpg";
import work8 from "@/assets/ink-8.jpg";
import studioImg from "@/assets/studio.jpg";

export const studio = {
  name: "INK MINK TATTOOZ",
  tagline: "Custom tattoo atelier in Rohini, New Delhi",
  intro:
    "A private, appointment-led studio built around one idea: a tattoo should be drawn for one person only. Every piece begins as a conversation and ends as a custom design, applied with hospital-grade hygiene and single-use needles.",
  city: "Rohini, New Delhi",
  address: "Rohini, New Delhi, Delhi, India",
  phone: "+91 97175 56727",
  whatsapp: "+919717556727",
  email: "hello@inkminktattooz.in",
  instagram: "https://instagram.com/",
  hours: [
    { day: "Monday – Saturday", time: "11:00 – 20:00" },
    { day: "Sunday", time: "By appointment" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Rohini,+New+Delhi&output=embed",
};

export const studioImage = studioImg;

export const services = [
  {
    title: "Custom Black & Grey",
    copy: "Realism, portraits and shading-led work built from your reference photos.",
  },
  {
    title: "Fine Line & Minimal",
    copy: "Delicate single-needle linework, script and small symbolic pieces.",
  },
  {
    title: "Mandala & Geometry",
    copy: "Ornamental dotwork mapped to the body's own lines and symmetry.",
  },
  {
    title: "Neo-Traditional Colour",
    copy: "Bold outlines and saturated palettes that stay readable for decades.",
  },
  {
    title: "Cover-Ups & Reworks",
    copy: "Older or unfinished tattoos redesigned into something you want to show.",
  },
  {
    title: "Piercings",
    copy: "Studio piercings with sterile, single-use jewellery and aftercare guidance.",
  },
];

export const portfolio = [
  { src: work3, alt: "Lord Shiva forearm tattoo with Hindi script", category: "Black & Grey", tall: true },
  { src: work7, alt: "Matching fine line infinity wrist tattoos", category: "Fine Line", tall: false },
  { src: work2, alt: "Raven and ornamental shoulder tattoo", category: "Black & Grey", tall: true },
  { src: work4, alt: "Colour floral wrist and forearm tattoo", category: "Colour", tall: false },
  { src: work8, alt: "Fine line hands and Hinaya name tattoo", category: "Fine Line", tall: true },
  { src: work6, alt: "Ornamental all-seeing eye forearm tattoo", category: "Mandala", tall: false },
  { src: work1, alt: "Hindi name script hand tattoo", category: "Fine Line", tall: false },
  { src: work5, alt: "Tiny moon and bear wrist tattoos", category: "Fine Line", tall: false },
  { src: studioImg, alt: "Interior of the studio", category: "Studio", tall: false },
];


export const tattooTypes = [
  {
    title: "Black & Grey",
    kicker: "01 / SHADING",
    copy: "Portraits, realism and deep tonal work built around contrast, texture and controlled shading.",
    image: work3,
  },
  {
    title: "Fine Line",
    kicker: "02 / DETAIL",
    copy: "Delicate linework, script and minimal pieces where clean placement and precision do the talking.",
    image: work7,
  },
  {
    title: "Colour",
    kicker: "03 / COLOUR",
    copy: "Floral and illustrative colour work with bold shapes designed to stay readable as they heal.",
    image: work4,
  },
  {
    title: "Mandala",
    kicker: "04 / ORNAMENT",
    copy: "Ornamental geometry and dotwork shaped to the body's natural lines and symmetry.",
    image: work6,
  },
];

export const artists = [
  { name: "Kamal", experience: "15 years of experience" },
  { name: "Moni Tamang", experience: "9 years of experience" },
];

export const piercing = {
  ear: [
    ["Industrial", "₹5,000"],
    ["Helix", "₹3,000"],
    ["Forward Helix", "₹3,000"],
    ["Rook", "₹4,000"],
    ["Snug", "₹4,000"],
    ["Daith", "₹4,000"],
    ["Inner Conch", "₹3,500"],
    ["Orbital Conch", "₹3,500"],
    ["Conch", "₹3,500"],
    ["Tragus", "₹2,500"],
    ["Lobe", "₹2,000"],
    ["Upper Lobe", "₹2,000"],
  ],
  belly: { name: "Belly Button Piercing", price: "₹3,000" },
  notes: ["Both-side pricing", "Sterile", "Hypoallergenic jewellery included"],
};

export const nails = {
  groups: [
    {
      title: "Basic Services",
      rows: [
        ["Gel Polish", "₹499"],
        ["Gel Overlay", "₹599"],
        ["Nail Cut & Shape", "₹99"],
        ["Removal", "₹299"],
      ],
    },
    {
      title: "Nail Extensions",
      rows: [
        ["Acrylic Extension", "₹799"],
        ["Gel Extension", "₹999"],
        ["Extension Refill", "₹799"],
        ["Extension Removal", "₹299"],
        ["Extension with Gel Polish", "₹1,199"],
      ],
    },
    {
      title: "Full Set Designs",
      rows: [
        ["Simple Design Set", "₹999"],
        ["French Nail Set", "₹1,299"],
        ["Ombre Nail Set", "₹1,299"],
        ["Chrome / Cat Eye Set", "₹1,299"],
        ["Premium / 3D Set", "₹1,499 - ₹1,799"],
      ],
    },
    {
      title: "Nail Art",
      rows: [
        ["Simple Art", "₹50 / nail"],
        ["French Tips", "₹100 / nail"],
        ["Ombre", "₹1,299 (Full Set)"],
        ["Chrome", "₹100 / nail"],
        ["Cat Eye", "₹100 / nail"],
        ["Glitter", "₹50 / nail"],
        ["Foil Work", "₹100 / nail"],
        ["Stones / Charms", "₹30 - ₹100 / nail"],
        ["3D Art", "₹100 - ₹300 / nail"],
        ["Hand Painting (Custom)", "₹150 – ₹300 / nail"],
        ["Custom / Heavy Art", "₹150 – ₹300 / nail"],
      ],
    },
    {
      title: "Add-Ons",
      rows: [
        ["Nail Repair (Each) / Extra Length (Each)", "₹50 - ₹100"],
        ["Matte Top Coat", "₹50"],
        ["Chrome / Glitter Top Coat", "₹50"],
      ],
    },
  ],
  offers: ["New Customer: 10% off", "Refer a Friend: ₹100 off", "Home service available (within area)"],
};

export const process = [
  { n: "01", title: "Consult", copy: "Share your idea, placement and budget over WhatsApp or in the studio." },
  { n: "02", title: "Design", copy: "A custom drawing is made for you, with one round of refinements included." },
  { n: "03", title: "Session", copy: "Stencil, comfort check, then ink in a sterile, private booth." },
  { n: "04", title: "Aftercare", copy: "Written aftercare, a follow-up check and free touch-ups where needed." },
];

export const faqs = [
  {
    q: "How do I book a tattoo appointment in Rohini?",
    a: "Send your idea, reference images, placement and preferred dates through the booking form or WhatsApp. We reply with a design slot and the advance amount needed to hold it.",
  },
  {
    q: "Do you tattoo walk-in clients?",
    a: "Small pieces can sometimes be fitted in on the day, but custom work is appointment-led so the design can be drawn for you in advance.",
  },
  {
    q: "How much does a tattoo cost?",
    a: "Pricing depends on size, detail and placement. Share a reference and we will quote before you commit. No work starts without an agreed price.",
  },
  {
    q: "Is the studio hygienic?",
    a: "Yes. Single-use needles and tubes, sealed sterile jewellery, disposable barriers and medical-grade surface disinfection for every session.",
  },
  {
    q: "Does it hurt?",
    a: "Sensation varies with placement. We work in comfortable sessions with breaks, and can plan longer pieces across multiple sittings.",
  },
  {
    q: "Do you fix or cover old tattoos?",
    a: "Often, yes. Send a clear photo of the existing tattoo and we will tell you honestly whether a cover-up, rework or removal-first route is best.",
  },
];
