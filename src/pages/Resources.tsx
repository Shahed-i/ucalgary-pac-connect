import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock } from "lucide-react";
import {
  Globe,
  ScrollText,
  Users,
  Flame,
  Scale,
  Shield,
  Landmark,
  AlertTriangle,
  Map,
  Flag,
  Hand,
  Lock,
  Link,
  Home,
  Eye,
  Megaphone,
} from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

/* -------------------------
   Palestinian Symbol Icons
--------------------------*/

const OliveBranchIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 2c-3 5-4 9-4 13 0 3 2 5 4 5s4-2 4-5c0-4-1-8-4-13z" />
  </svg>
);

const KeyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M7 14a5 5 0 1 1 4-8l9 9-2 2-2-2-2 2-2-2-1 1H7z" />
  </svg>
);

const StoneIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <circle cx="12" cy="12" r="6" />
  </svg>
);

const DomeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
    <path d="M12 3c-5 2-8 6-8 10v6h16v-6c0-4-3-8-8-10z" />
  </svg>
);

/* -------------------------
   Timeline Events
--------------------------*/

const timelineEvents = [
  {
    year: "1917",
    title: "Balfour Declaration",
    icon: ScrollText,
    description:
      "Britain issues the Balfour Declaration, promising a “Jewish national home” in Palestine without consulting its Indigenous population.",
  },
  {
    year: "1922",
    title: "British Mandate for Palestine",
    icon: Globe,
    description:
      "The League of Nations grants Britain control over Palestine, formally disregarding Palestinian political rights.",
  },
  {
    year: "1929–1939",
    title: "Mass Jewish Immigration",
    icon: Users,
    description:
      "Due to rising fascism in Europe, large-scale Jewish immigration reshapes Palestine’s demographics under British rule.",
  },
  {
    year: "1947",
    title: "UN Partition Plan",
    icon: Map,
    description:
      "The UN proposes dividing Palestine into two states, allocating the majority of land to a minority settler population.",
  },
  {
    year: "1948",
    title: "The Nakba",
    icon: KeyIcon,
    description:
      "Over 750,000 Palestinians are expelled from their homes and more than 600 villages are destroyed during Israel’s creation.",
  },
  {
    year: "1950",
    title: "Capital Moved to West Jerusalem",
    icon: Landmark,
    description:
      "Israel declares West Jerusalem its capital in defiance of UN resolutions, while the West Bank falls under Jordanian rule.",
  },
  {
    year: "1952",
    title: "Israeli Nationality Law",
    icon: Lock,
    description:
      "Laws are enacted preventing Palestinian refugees from returning while restricting citizenship rights for Palestinians.",
  },
  {
    year: "1956",
    title: "Village Massacres",
    icon: AlertTriangle,
    description:
      "Israeli military attacks target Palestinian towns including Qalqilya, Kafr Qasim, and Khan Younis.",
  },
  {
    year: "1960",
    title: "Land Administration Laws",
    icon: Scale,
    description:
      "State land is reserved almost exclusively for Jewish ownership, institutionalizing land dispossession.",
  },
  {
    year: "1964",
    title: "PLO Established",
    icon: Flag,
    description:
      "The Palestine Liberation Organization forms to demand self-determination and represent Palestinians globally.",
  },
  {
    year: "1967",
    title: "The Naksa",
    icon: Shield,
    description:
      "Israel occupies the West Bank, Gaza, East Jerusalem, Golan Heights, and Sinai Peninsula.",
  },
  {
    year: "1967",
    title: "UN Resolution 242",
    icon: ScrollText,
    description:
      "The UN calls for Israeli withdrawal from occupied territories, affirming land-for-peace principles.",
  },
  {
    year: "1974",
    title: "Palestinian Rights Recognized",
    icon: OliveBranchIcon,
    description:
      "The UN affirms Palestinian rights to self-determination and recognizes the PLO as their legitimate representative.",
  },
  {
    year: "1982",
    title: "Sabra & Shatila Massacres",
    icon: Flame,
    description:
      "Over 1,500 Palestinian and Lebanese civilians are killed in refugee camps during Israel’s invasion of Lebanon.",
  },
  {
    year: "1987",
    title: "First Intifada",
    icon: StoneIcon,
    description:
      "A mass civil uprising erupts across Gaza and the West Bank against military occupation.",
  },
  {
    year: "1988",
    title: "PLO Recognizes Israel",
    icon: Hand,
    description:
      "The PLO accepts UN resolutions and recognizes Israel in pursuit of a political settlement.",
  },
  {
    year: "1993",
    title: "Oslo Accords I",
    icon: Link,
    description:
      "Israel and the PLO sign interim agreements while deferring core issues like refugees and borders.",
  },
  {
    year: "1995",
    title: "Oslo Accords II",
    icon: Map,
    description:
      "The West Bank is fragmented into Areas A, B, and C, severely limiting Palestinian autonomy.",
  },
  {
    year: "2000",
    title: "Second Intifada",
    icon: Flame,
    description:
      "A second uprising emerges amid continued occupation, settlement growth, and political failure.",
  },
  {
    year: "2002",
    title: "West Bank Reoccupation",
    icon: Shield,
    description:
      "Israeli forces reoccupy major Palestinian cities and expand checkpoints and military control.",
  },
  {
    year: "2005",
    title: "Gaza Siege",
    icon: Lock,
    description:
      "Israel withdraws settlers from Gaza while imposing a land, air, and sea blockade.",
  },
  {
    year: "2006",
    title: "Hamas Electoral Victory",
    icon: Megaphone,
    description:
      "Hamas wins democratic elections in Gaza, followed by sanctions and international isolation.",
  },
  {
    year: "2008",
    title: "Assault on Gaza",
    icon: Flame,
    description:
      "A 22-day military assault devastates Gaza, killing hundreds and destroying infrastructure.",
  },
  {
    year: "2012",
    title: "Pillar of Defense",
    icon: Eye,
    description:
      "Israel launches an eight-day military operation on Gaza with widespread civilian impact.",
  },
  {
    year: "2018",
    title: "Great March of Return",
    icon: KeyIcon,
    description:
      "Weekly peaceful protests in Gaza demand the right of return and an end to the blockade.",
  },
  {
    year: "2023–Present",
    title: "Ongoing Genocide & Regional Escalation",
    icon: AlertTriangle,
    description:
      "A prolonged military campaign devastates Gaza and the West Bank, with spillover into Lebanon, Syria, Yemen, and beyond.",
  },
];

const bookRecommendations = [
  {
    title: "The Ethnic Cleansing of Palestine",
    author: "Ilan Pappé",
    description:
      "For Palestinians, the foundation of the state of Israel in 1948 is known as the nakba (catastrophe), in which at least 400 Palestinain villages were destroyed, many Palestinians murdered and one million Palestinians expelled or displaced from their homes. Ilan Pappe’s groundbreaking work to recount what happened between 1947 and 1949 helps illuminate the initial injustices that remain unrepaired and continue to be replicated to this day.",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/TheEthnicCleansingofPalestine.jpg",
  },
  {
    title: "Decolonizing Israel, Liberating Palestine",
    author: "Jeff Halper",
    description:
      "A text which debunks myths around the ‘Israel-Palestine conflict’, asking - what if our understanding of the issue has been wrong all along? The book explores the concept of settler colonialism, providing a clearer understanding of the Zionist movement's project to establish a Jewish state in Palestine, displacing the Palestinian Arab population and marginalizing its cultural presence. ",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/DecolonizingIsraelLiberatingPalestine.jpg",
  },
  {
    title: "The Hundred Years’ war on Palestine",
    author: "Rashid Khalidi",
    description:
      "A book which approaches the 20th century as a century of denial for Palestinians: denial of statehood, denial of nationhood and denial of history. Drawing on his family archives, Khalidi reclaims the fundamental right of any people: to narrate their history on their own terms. This text will help you understand the early context of the Zionist project; and moves through critical moments within a hundred year long war of occupation, dispossession and colonization.",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/HundredYearswar.jpg",
  },
  {
    title: "Ten Myths About Israel",
    author: "Ilan Pappe",
    description:
      "A book exploring ‘ten myths’ that are repeated endlessly in the media, upheld by the military and accepted by the world’s governments - reinforcing the regional status quo in Palestine. Pappe explores various claims - that Palestine was empty, that Palestinians voluntarily left their homeland - and breaks down what lies behind the mythology.",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/TenMythsAboutIsrael.jpg",
  },
  {
    title: "State of Siege",
    author: "Mahmoud Darwish",
    description:
      "Written from Ramallah in 2002, this epic poem from Palestine’s poet laureate, explores the tragedy and injustice of a life of occupation.",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/StateofSiege.jpg",
  },
  {
    title: "Return, A Palestinian Memoir",
    author: "Ghada Karmi",
    description:
      "Ghada Karmi, raised in Britain after her family was exiled from Palestine, revisits the now highly militarized and largely unrecognisable land she had not seen since childhood. Arriving to find her home and much of the land she once knew, occupied by strangers, she explores the possibility of return for Palestinians in exile.",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/Return.jpg",
  },
    {
    title: "Morning in Jenin",
    author: "Susan Abulhawa",
    description:
      "A novel set in Palestine in 1948, told through the eyes of a young girl as she and her family are expelled from their home in Ein Hod, to a refugee camp.",
    color: "from-red-100 via-red-50 to-emerald-100",
    accentColor: "from-red-300 via-red-200 to-emerald-300",
    coverImage: "/images/books/MorningsinJenin.jpg",
  },
];

/* -------------------------
   Component
--------------------------*/

const BookCard = ({ book }) => {
  return (
    <div className="h-auto cursor-pointer" style={{ perspective: "1000px" }}>
      <div
        className="relative w-full transition-transform duration-500"
        style={{
          width: "340px",
          height: "510px",
          transformStyle: "preserve-3d",
          transform: "rotateY(0deg)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "rotateY(180deg)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "rotateY(0deg)";
        }}
      >
        {/* Front of book - Book Cover */}
        <div
          className="absolute w-full h-full rounded-lg shadow-xl overflow-hidden border-8 border-white/40 bg-white/10"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 text-white text-xs font-medium bg-black/30 px-3 py-1 rounded-full backdrop-blur">
            Hover →
          </div>
        </div>

        {/* Back of book - Description */}
        <div
          className={`absolute w-full h-full rounded-lg bg-gradient-to-br ${book.color} shadow-xl border-8 border-white/40 p-5 flex flex-col justify-between overflow-hidden`}
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${book.accentColor} rounded-full blur-3xl opacity-30`} />
          <div className={`absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr ${book.accentColor} rounded-full blur-3xl opacity-20`} />

          <div className="relative z-10">
            <h3 className="font-display text-base font-bold text-slate-800 mb-2 leading-tight">
              {book.title}
            </h3>
            <p className="text-slate-600 text-xs font-semibold uppercase tracking-wide mb-4 opacity-70">
              {book.author}
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              {book.description}
            </p>
          </div>

          <div className="text-slate-500 text-xs font-medium">← Back</div>
        </div>
      </div>
    </div>
  );
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <Layout>
      {/* Animated Emerald Background */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-bl from-emerald-700/20 via-emerald-700/5 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-emerald-700/15 to-transparent rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/10 via-transparent to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-emerald-700/30 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-gradient-to-tl from-emerald-700/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resources
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Learn & Understand
          </h1>
          <div className="w-full h-1 bg-gradient-to-r from-emerald-700 via-emerald-600 to-emerald-700 mb-8 animate-fade-up delay-150 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Education is the foundation of advocacy. Explore historical context,
            current realities, and recommended readings to deepen your
            understanding of Palestine.
          </p>
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-muted/50 p-1 rounded-xl mb-12 border border-border/50">
              <TabsTrigger value="timeline" className="data-[state=active]:bg-background data-[state=active]:text-emerald-700 rounded-lg px-6 py-3 transition-all">
                <Clock className="w-4 h-4 mr-2" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="books" className="data-[state=active]:bg-background data-[state=active]:text-emerald-700 rounded-lg px-6 py-3 transition-all">
                <BookOpen className="w-4 h-4 mr-2" />
                Books
              </TabsTrigger>
            </TabsList>

            {/* Timeline */}
            <TabsContent value="timeline">
              <VerticalTimeline lineColor="hsl(var(--primary))">
                {timelineEvents.map((event, index) => {
                  const Icon = event.icon;
                  return (
                    <VerticalTimelineElement
                      key={index}
                      date={event.year}
                      icon={
                        <div className=" translate-y-7 group-hover:scale-125 transition-transform duration-300">
                          <Icon />
                        </div>
                      }
                      iconStyle={{
                        background: "#047857",
                        color: "#fff",
                        boxShadow:
                          "0 0 0 4px hsl(var(--background)), 0 0 0 10px rgba(4,120,87,0.4)",
                      }}
                      contentStyle={{
                        background: "hsl(var(--card))",
                        color: "hsl(var(--foreground))",
                        borderRadius: "1rem",
                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                        border: "1px solid hsl(var(--border) / 0.5)",
                      }}
                    >
                      <h3 className="font-display text-lg font-semibold mb-2 text-emerald-700">
                        {event.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </VerticalTimelineElement>
                  );
                })}
              </VerticalTimeline>
            </TabsContent>

            {/* Books */}
            <TabsContent value="books">
              <div className="flex flex-wrap justify-center gap-8">
                {bookRecommendations.map((book, idx) => (
                  <BookCard key={idx} book={book} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
