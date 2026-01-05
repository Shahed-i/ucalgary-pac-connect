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

/* -------------------------
   Component
--------------------------*/

export default function Resources() {
  const [activeTab, setActiveTab] = useState("timeline");

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-12">
              <TabsTrigger value="timeline">
                <Clock className="w-4 h-4 mr-2" />
                Timeline
              </TabsTrigger>
            </TabsList>

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
                      className="group hover:shadow-2xl hover:shadow-emerald-700/30 transition-all duration-300"
                      contentStyle={{
                        background: "hsl(var(--card))",
                        borderRadius: "1rem",
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
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
