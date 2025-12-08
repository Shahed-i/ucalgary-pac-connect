export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: "workshop" | "rally" | "cultural" | "fundraiser" | "speaker";
  isPast: boolean;
  attendees?: number;
  image?: string;
}

export const ucalgaryEvents: Event[] = [
  {
    id: "uc-1",
    title: "Palestinian Culture Night",
    date: "December 15, 2024",
    time: "6:00 PM - 9:00 PM",
    location: "MacEwan Hall, University of Calgary",
    description: "Join us for an evening celebrating Palestinian culture through traditional food, music, dabke dancing, and poetry. Open to all students and community members.",
    category: "cultural",
    isPast: false,
    attendees: 150,
  },
  {
    id: "uc-2",
    title: "Documentary Screening: 'The Present'",
    date: "December 10, 2024",
    time: "7:00 PM - 9:30 PM",
    location: "Science Theatres, Room 140",
    description: "Screening of the Oscar-nominated short film 'The Present' followed by a discussion panel with local Palestinian community members.",
    category: "cultural",
    isPast: false,
    attendees: 80,
  },
  {
    id: "uc-3",
    title: "Know Your Rights Workshop",
    date: "December 5, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Taylor Family Digital Library",
    description: "Learn about your rights as a student activist. Workshop led by legal experts covering freedom of expression, peaceful protest, and advocacy on campus.",
    category: "workshop",
    isPast: false,
    attendees: 45,
  },
  {
    id: "uc-4",
    title: "Humanitarian Aid Fundraiser",
    date: "November 20, 2024",
    time: "12:00 PM - 4:00 PM",
    location: "MacHall Hub",
    description: "Fundraising event with bake sale, art auction, and donation drive. All proceeds go to verified humanitarian organizations providing aid in Gaza.",
    category: "fundraiser",
    isPast: true,
    attendees: 200,
  },
  {
    id: "uc-5",
    title: "Guest Speaker: Dr. Noura Erakat",
    date: "November 10, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Science B, Room 103",
    description: "Human rights attorney and academic Dr. Noura Erakat discusses international law, Palestinian rights, and the path to justice.",
    category: "speaker",
    isPast: true,
    attendees: 250,
  },
  {
    id: "uc-6",
    title: "Solidarity Rally for Peace",
    date: "October 28, 2024",
    time: "2:00 PM - 4:00 PM",
    location: "Olympic Plaza, Downtown Calgary",
    description: "Community gathering calling for an immediate ceasefire and humanitarian access to Gaza. Speakers include community leaders and student representatives.",
    category: "rally",
    isPast: true,
    attendees: 500,
  },
];

export const mruEvents: Event[] = [
  {
    id: "mru-1",
    title: "Art for Palestine Exhibition",
    date: "December 18, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "MRU Art Gallery, Riddell Library",
    description: "A student-curated exhibition featuring artwork that explores Palestinian identity, resistance, and hope. Artists from across Calgary showcase their work.",
    category: "cultural",
    isPast: false,
    attendees: 120,
  },
  {
    id: "mru-2",
    title: "Tatreez Embroidery Workshop",
    date: "December 12, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Wyckham House, Room 304",
    description: "Learn the traditional Palestinian art of tatreez embroidery. All materials provided. Beginner-friendly workshop led by local Palestinian artisans.",
    category: "workshop",
    isPast: false,
    attendees: 30,
  },
  {
    id: "mru-3",
    title: "Open Mic: Voices for Palestine",
    date: "December 8, 2024",
    time: "7:00 PM - 10:00 PM",
    location: "The Hub, MRU",
    description: "An evening of poetry, spoken word, and music dedicated to Palestinian voices. Open to performers and audience members alike.",
    category: "cultural",
    isPast: false,
    attendees: 75,
  },
  {
    id: "mru-4",
    title: "Film Night: 'Farha'",
    date: "November 25, 2024",
    time: "6:30 PM - 9:00 PM",
    location: "Lincoln Park Building, Theatre A",
    description: "Screening of the critically acclaimed film 'Farha' depicting the 1948 Nakba. Discussion and Q&A to follow.",
    category: "cultural",
    isPast: true,
    attendees: 100,
  },
  {
    id: "mru-5",
    title: "Charity Bake Sale",
    date: "November 15, 2024",
    time: "11:00 AM - 3:00 PM",
    location: "Main Street, MRU",
    description: "Delicious homemade Palestinian treats! All proceeds support humanitarian relief efforts. Featuring knafeh, baklava, and more.",
    category: "fundraiser",
    isPast: true,
    attendees: 180,
  },
  {
    id: "mru-6",
    title: "Educational Panel: Understanding the Crisis",
    date: "November 5, 2024",
    time: "4:00 PM - 6:00 PM",
    location: "Bella Concert Hall",
    description: "A panel of experts including historians, human rights advocates, and community members discuss the ongoing humanitarian crisis.",
    category: "speaker",
    isPast: true,
    attendees: 220,
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
};
