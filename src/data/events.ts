export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  category: keyof typeof categoryLabels;
  collaborators?: string[];
  price?: string | number; 
  isPast?: boolean;
  poster?: string;          // main card image
  gallery?: string[];       // extra images when expanded
  requiresRegistration?: boolean;
  registrationLink?: string; // URL for event registration
}

// Helper function to parse dates and sort events chronologically
export const parseEventDate = (dateStr: string): Date | null => {
  if (!dateStr) return null;
  try {
    // Remove ordinal suffixes (st, nd, rd, th) to normalize date parsing
    const normalized = dateStr.replace(/(\d+)(st|nd|rd|th),/, "$1,");
    return new Date(normalized);
  } catch {
    return null;
  }
};

export const sortEventsByDate = (events: Event[]): Event[] => {
  return [...events].sort((a, b) => {
    const dateA = parseEventDate(a.date);
    const dateB = parseEventDate(b.date);

    // Events with dates come first, sorted newest to oldest
    if (dateA && dateB) return dateB.getTime() - dateA.getTime();
    if (dateA) return -1;
    if (dateB) return 1;
    // Events without dates go to the end
    return 0;
  });
};

export const ucalgaryEvents: Event[] = [
  {
    id: "uc-1",
    title: "Cutz 4 Gaza",
    date: "October 10th, 2025",
    time: "11AM - 4PM",
    location: "TFDL Quad",
    description: "Join students and local barbers for a community fundraiser supporting humanitarian relief in Gaza. Get a fresh cut while standing in solidarity for a meaningful cause!",
    category: "fundraiser",
    collaborators: ["PAC", "MWB"],
    price: "20",
    isPast: true,
    poster: "/images/events/cutz4gaza.jpg",
    gallery: ["/images/events/cutz4gaza1.png", "/images/events/cutz4gaza2.png", "/images/events/cutz4gaza3.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-2",
    title: "Tatreez Night",
    date: "November 20th, 2024",
    time: "4PM - 6PM",
    location: "HNSC 330",
    description: "Experience the beauty of traditional Palestinian tatreez through hands-on embroidery and storytelling. No experience needed, just come ready to learn and connect!",
    category: "cultural",
    collaborators: ["PAC", "MISS", "MEC"],
    price: "7",
    isPast: true,
    poster: "/images/events/Tatreeznight.png",
    gallery: ["/images/events/tatreeznight1.png", "/images/events/tatreeznight2.png", "/images/events/tatreeznight3.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-3",
    title: "A Dive into the Occupation of Al-Aqsa",
    date: "April 18th, 2025",
    time: "3PM - 5:PM",
    location: "HNSC 128",
    description: "Explore the history, religious significance, and current realities surrounding Al-Aqsa Mosque. End the day off with learning how to make a Palestinian staple, Musakhan!.",
    category: "educational",
    collaborators: ["PAC", "MVP", "QP", "PHA"],
    price: "Free",
    isPast: true,
    poster: "/images/events/occupationofalaqsa.png",
    gallery: [ "/images/events/occupationofalaqsa1.png",  "/images/events/occupationofalaqsa2.png", "/images/events/occupationofalaqsa3.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-4",
    title: "Falastini Feud Night",
    date: "November 21st, 2025",
    time: "5PM - 7PM",
    location: "ICT 114",
    description: "Test your knowledge of Palestinian culture, history, and current events in a fun, interactive game-night format. Bring friends and compete for pride and prizes!",
    category: "cultural",
    collaborators: ["PAC"],
    price: "Free",
    isPast: true,
    poster: "/images/events/falastinifeud.jpg",
    gallery: ["/images/events/falastinifeud1.png", "/images/events/falastinifeud2.png", "/images/events/falastinifeud3.jpg"],
    requiresRegistration: false,
  },
  {
    id: "uc-5",
    title: "Keffiyeh Skate Night and Bonfire",
    date: "January 3rd, 2026",
    time: "5PM - 8PM",
    location: "Bowness Park Ice Rink",
    description: "Gather for an outdoor evening of skating, conversation, and a cozy bonfire, all while wearing keffiyehs in solidarity. A relaxed space to connect, unwind, and build community.",
    category: "fundraiser",
    collaborators: ["PAC", "IR Canada"],
    price: "Free",
    isPast: true,
    poster: "/images/events/skatenight.jpg",
    gallery: ["/images/events/skatenight1.PNG", "/images/events/skatenight2.PNG", "/images/events/skatenight3.PNG"],
    requiresRegistration: false,
  },
  {
    id: "uc-6",
    title: "Goals 4 Gaza",
    date: "October 31st, 2025",
    time: "11PM - 1AM",
    location: "Accurate Fieldhouse",
    description: "Take part in a soccer-based fundraiser that brings students together through friendly competition. Play, cheer, and contribute to relief efforts for Gaza.",
    category: "fundraiser",
    collaborators: ["PAC", "MWB", "ESA", "PAC MRU", "PCC"],
    price: "20",
    isPast: true,
    poster: "/images/events/goals4gaza.png",
    gallery: ["/images/events/goals4gaza1.jpg"],
    requiresRegistration: false,
  },
  {
    id: "uc-7",
    title: "Stateless people: Genocide, Resistance, and self-determination",
    date: "November 4th, 2025",
    time: "4PM - 8PM",
    location: "EEEL 161",
    description: "Explore powerful parallels between the struggles of Sikhs, Palestinians, and Indigenous peoples through a shared lens of displacement, resistance, and self-determination. This collaborative discussion creates space for cross-community learning, solidarity, and reflection.",
    category: "educational",
    collaborators: ["PAC", "Sikh Academic Forum"],
    price: "Free",
    isPast: true,
    poster: "/images/events/statelesspeople.png",
    gallery: [],
    requiresRegistration: false,
  },
  {
    id: "uc-8",
    title: "A Walk Through the Nakba",
    date: "May 15th, 2025",
    time: "2PM - 7PM",
    location: "TFDL Quad",
    description: "Learn about the Nakba and its lasting impact on Palestinian life through guided education and discussion. An essential session for understanding history and collective memory.",
    category: "workshop",
    collaborators: ["PAC", "MWB", "MEC", "MVP", "MSA Ucalgary", "YLY"],
    price: "Free",
    isPast: true,
    poster: "/images/events/walkthroughnakba.png",
    gallery: ["/images/events/walkthroughnakba1.jpg", "/images/events/walkthroughnakba2.jpg"],
    requiresRegistration: false,
  },
  {
    id: "uc-9",
    title: "Unpacking Apartheid",
    date: "April 7th, 2025",
    time: "5PM - 8PM",
    location: "HNSC 128",
    description: "An interactive workshop exploring how systems of apartheid operate through powerful parallels between Palestine, Sudan, and South Africa. Gain tools to critically understand oppression, resistance, and global struggles for justice across contexts.",
    category: "educational",
    collaborators: ["PAC", "SSA"],
    price: "Free",
    isPast: true,
    poster: "/images/events/unpackingaparthied.png",
    gallery: ["/images/events/unpackingaparthied1.png", "/images/events/unpackingaparthied2.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-10",
    title: "Life in Gaza: Journalist Panel and Film Screening",
    date: "February 12th, 2025",
    time: "6PM - 9PM",
    location: "ST 148",
    description: "Hear firsthand journalistic perspectives on daily life in Gaza alongside a curated film screening. Stay for a moderated discussion and audience Q&A.",
    category: "educational",
    collaborators: ["PAC","CMPAC" ,"MSA"],
    price: "Free",
    isPast: true,
    poster: "/images/events/lifeingaza.png",
    gallery: ["/images/events/lifeingaza1.png", "/images/events/lifeingaza2.png", "/images/events/lifeingaza3.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-11",
    title: "Strength Under Siege",
    date: "August 24th, 2025",
    time: "11:30AM - 2:00PM",
    location: "Baker Park",
    description: "A powerful talk led by Sheikh Abdurrahman Khattab, reflecting on resilience, faith, and moral clarity in the face of oppression. The event creates space for collective reflection, strength, and solidarity during a critical moment.",
    category: "educational",
    collaborators: ["PAC", "MWB"],
    price: "Free",
    isPast: true,
    poster: "/images/events/strengthundersiege.png",
    gallery: ["/images/events/strengthundersiege1.png", "/images/events/strengthundersiege2.png", "/images/events/strengthundersiege3.png", "/images/events/strengthundersiege4.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-12",
    title: "Educational Workshops: Session 1 - What is Zionism?",
    date: "November 10th, 2025",
    time: "4:30PM - 5:30PM",
    location: "HNSC 128",
    description: "An introductory workshop that critically examines Zionism, its origins, and its impact on Palestinian life today. The session features a speaker-led discussion designed to build clarity, historical understanding, and informed dialogue.",
    category: "workshop",
    collaborators: ["PAC"],
    price: "Free",
    isPast: true,
    poster: "/images/events/EWS1.png",
    gallery: [],
    requiresRegistration: false,
  },
  {
    id: "uc-13",
    title: "Educational Workshops: Session 2 - Life in Israeli Prisons",
    date: "November 24th, 2025",
     time: "4:30PM - 5:30PM",
    location: "HNSC 128",
    description: "A powerful speaker-led session exploring the realities of life inside Israeli prisons through the lived experiences of formerly imprisoned Palestinians. The workshop centers Palestinian voices and highlights resistance, resilience, and survival.",
    category: "workshop",
    collaborators: ["PAC"],
    price: "Free",
    isPast: true,
    poster: "/images/events/EWS2.png",
    gallery: [],
    requiresRegistration: false,
  },
  {
    id: "uc-14",
    title: "Educational Workshops: Session 3",
    date: "December 1st, 2025",
    time: "4:30PM - 5:30PM",
    location: "HNSC 128",
    description: "An intimate and impactful session led by formerly imprisoned Palestinians, focusing on resistance, identity, and the ongoing struggle for Palestinian existence. The workshop invites deep reflection on liberation, steadfastness, and collective responsibility.",
    category: "workshop",
    collaborators: ["PAC"],
    price: "Free",
    isPast: true,
    poster: "/images/events/EWS3.png",
    gallery: [],
    requiresRegistration: false,
  },
  {
    id: "uc-15",
    title: "Qiyam Night for our bleeding Ummah",
    date: "October 17th, 2025",
    time: "8PM - 10:30PM",
    location: "Vitruvian Prayer Space",
    description: "Join a spiritually grounding night of prayer, remembrance, and reflection for the Ummah. Centered on collective dua and solidarity for Palestine.",
    category: "religious",
    collaborators: ["PAC", "QP"],
    price: "Free",
    isPast: true,
    poster: "/images/events/qiyamnight.png",
    gallery: [],
    requiresRegistration: false,
  },
  {
    id: "uc-16",
    title: "October 7 Walkout",
    date: "October 7th, 2025",
    time: "1PM",
    location: "TFDL QUAD",
    description: "Stand with fellow students in a peaceful walkout calling attention to ongoing violence and injustice. A collective act of solidarity, visibility, and student voice.",
    category: "rally",
    collaborators: ["PAC"],
    price: "Free",
    isPast: true,
    poster: "/images/events/oct7walkout.png",
    gallery: ["/images/events/oct7walkout1.png", "/images/events/oct7walkout2.png", "/images/events/oct7walkout3.png"],
    requiresRegistration: false,
  },
  {
    id: "uc-17",
    title: "UCalgary Soccer World Cup",
    date: "February 12th, 2026",
    time: "10AM",
    location: "Viper's Dome",
    description: "World Cup season is coming… and so is ours ⚽️🔥The UofC Soccer World Cup is back for its annual return! Limited spots due to high demand!",
    category: "fundraiser",
    collaborators: ["PAC", "ESA", "BSS", "LASA", "ACSA", "MWB"],
    price: "20",
    isPast: false,
    poster: "/images/events/soccerworldcup.jpg",
    gallery: [],
    requiresRegistration: true,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeL2u8Zb6p4JXZ3OFpLncavk_JrWoLrmhPuKavg47MSa0Us3g/viewform",
  },
  {
    id: "uc-17",
    title: "Sisters Tatreez Night",
    date: "February 6th, 2026",
    time: "4:30PM",
    location: "HNSC 330",
    description: "An evening celebrating Palestinian culture through tatreez, storytelling, and community. Come connect, create, and honor a timeless tradition.",
    category: "cultural",
    collaborators: ["PAC", "MEC", "MOSAIC"],
    price: "15",
    isPast: false,
    poster: "/images/events/tatreeznight26.jpeg",
    gallery: [],
    requiresRegistration: true,
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSfHtHneOK8Gm47HCNbmqPYRvMuzmuFw9G71nn4Uw6S0doZ-eg/viewform?usp=sharing&ouid=113436390706788978376",
  },
];

export const mruEvents: Event[] = [
  {
    id: "uc-6",
    title: "Goals 4 Gaza",
    date: "October 31st, 2025",
    time: "11PM - 1AM",
    location: "Accurate Fieldhouse",
    description: "",
    category: "fundraiser",
    collaborators: ["PAC", "MWB", "ESA", "PAC MRU", "PCC"],
    price: "20",
    isPast: true,
    poster: "/images/events/goals4gaza.png",
    gallery: [],
    requiresRegistration: false,
  },
  {
    id: "uc-8",
    title: "A Walk Through the Nakba",
    date: "May 15th, 2025",
    time: "2PM - 7PM",
    location: "TFDL Quad",
    description: "Learn about the Nakba and its lasting impact on Palestinian life through guided education and discussion. An essential session for understanding history and collective memory.",
    category: "workshop",
    collaborators: ["PAC", "MWB", "MEC", "MVP", "MSA Ucalgary", "YLY"],
    price: "Free",
    isPast: true,
    poster: "/images/events/walkthroughnakba.png",
    gallery: [],
    requiresRegistration: false,
  },
];

export const categoryColors: Record<string, string> = {
  workshop: "bg-primary/10 text-primary",
  rally: "bg-accent/10 text-accent",
  cultural: "bg-olive/10 text-olive",
  fundraiser: "bg-gold/20 text-foreground",
  speaker: "bg-secondary text-secondary-foreground",
};

export const categoryLabels: Record<string, string> = {
  workshop: "Workshop",
  rally: "Rally",
  cultural: "Cultural Event",
  fundraiser: "Fundraiser",
  speaker: "Speaker Event",
  educational: "Educational Event",
  religious: "Religious Event",
};
