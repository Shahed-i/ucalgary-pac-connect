import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Globe } from "lucide-react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const currentContent = [
  {
    title: "Ongoing Occupation",
    content:
      "The Israeli military occupation of the West Bank continues, with over 700,000 Israeli settlers living in settlements considered illegal under international law.",
  },
  {
    title: "Gaza Situation",
    content:
      "Gaza remains under blockade, severely restricting movement of people and goods and creating an ongoing humanitarian crisis.",
  },
  {
    title: "International Response",
    content:
      "Global responses vary, with calls for accountability, ceasefires, and political solutions grounded in international law.",
  },
  {
    title: "Human Rights Concerns",
    content:
      "Human rights organizations document systemic violations impacting daily Palestinian life, freedom of movement, and access to basic needs.",
  },
];

const timelineEvents = [
  {
    year: "1917",
    title: "Balfour Declaration",
    description:
      "Britain announces support for establishing a Jewish homeland in Palestine without consulting its Indigenous population.",
  },
  {
    year: "1947",
    title: "UN Partition Plan",
    description:
      "The UN proposes partitioning Palestine, allocating the majority of land to a newly proposed Jewish state.",
  },
  {
    year: "1948",
    title: "The Nakba",
    description:
      "Over 700,000 Palestinians are forcibly displaced following the establishment of Israel.",
  },
  {
    year: "1967",
    title: "Six-Day War",
    description:
      "Israel occupies the West Bank, Gaza Strip, East Jerusalem, Sinai Peninsula, and Golan Heights.",
  },
  {
    year: "1987",
    title: "First Intifada",
    description:
      "A grassroots Palestinian uprising emerges in response to military occupation.",
  },
  {
    year: "1993",
    title: "Oslo Accords",
    description:
      "Agreements establish the Palestinian Authority while deferring core political issues.",
  },
  {
    year: "2007",
    title: "Gaza Blockade",
    description:
      "A land, air, and sea blockade is imposed on Gaza, intensifying humanitarian conditions.",
  },
  {
    year: "2023–Present",
    title: "Ongoing Crisis",
    description:
      "Escalating violence and humanitarian devastation continue across Gaza and the West Bank.",
  },
];

const bookRecommendations = [
  {
    title: "The Ethnic Cleansing of Palestine",
    author: "Ilan Pappé",
    description:
      "A detailed account of the forced displacement of Palestinians during the creation of Israel.",
  },
  {
    title: "Palestine: Peace Not Apartheid",
    author: "Jimmy Carter",
    description:
      "An examination of Israeli policies and their impact on Palestinian self-determination.",
  },
  {
    title: "The Question of Palestine",
    author: "Edward Said",
    description:
      "A foundational text on Palestinian identity, narrative, and resistance.",
  },
  {
    title: "Gaza: A History",
    author: "Jean-Pierre Filiu",
    description:
      "A comprehensive historical overview of Gaza from ancient times to the present.",
  },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState("current");

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Resources
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Learn & Understand
          </h1>
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
            <TabsList className="bg-muted/50 p-1 rounded-xl mb-12">
              <TabsTrigger value="current">
                <Globe className="w-4 h-4 mr-2" />
                Current Affairs
              </TabsTrigger>
              <TabsTrigger value="timeline">
                <Clock className="w-4 h-4 mr-2" />
                Timeline
              </TabsTrigger>
              <TabsTrigger value="books">
                <BookOpen className="w-4 h-4 mr-2" />
                Books
              </TabsTrigger>
            </TabsList>

            {/* Current Affairs */}
            <TabsContent value="current">
              <div className="grid md:grid-cols-2 gap-6">
                {currentContent.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card rounded-xl border border-border/50 p-6 hover-lift"
                  >
                    <h3 className="font-display text-lg font-semibold mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Timeline */}
            <TabsContent value="timeline">
              <VerticalTimeline lineColor="hsl(var(--primary))">
                {timelineEvents.map((event, index) => (
                  <VerticalTimelineElement
                    key={index}
                    date={event.year}
                    contentStyle={{
                      background: "hsl(var(--card))",
                      color: "hsl(var(--foreground))",
                      borderRadius: "1rem",
                      boxShadow: "none",
                      border: "1px solid hsl(var(--border))",
                    }}
                    contentArrowStyle={{
                      borderRight: "7px solid hsl(var(--border))",
                    }}
                    iconStyle={{
                      background: "hsl(var(--primary))",
                      color: "#fff",
                    }}
                  >
                    <h3 className="font-display text-lg font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {event.description}
                    </p>
                  </VerticalTimelineElement>
                ))}
              </VerticalTimeline>
            </TabsContent>

            {/* Books */}
            <TabsContent value="books">
              <div className="grid md:grid-cols-2 gap-6">
                {bookRecommendations.map((book, idx) => (
                  <div
                    key={idx}
                    className="bg-card rounded-xl border border-border/50 p-6 hover-lift"
                  >
                    <h3 className="font-display text-lg font-semibold mb-1">
                      {book.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {book.author}
                    </p>
                    <p className="text-muted-foreground">
                      {book.description}
                    </p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
