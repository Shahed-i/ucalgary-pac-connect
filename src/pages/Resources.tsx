import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Clock, Globe, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const historyContent = [
  {
    title: "Ancient History",
    content: "Palestine has been inhabited for thousands of years, with evidence of human settlement dating back to the Paleolithic era. The region has been home to various civilizations including Canaanites, Philistines, Israelites, and many others.",
  },
  {
    title: "Ottoman Period (1517-1917)",
    content: "For 400 years, Palestine was part of the Ottoman Empire. During this time, the population was predominantly Arab, with small Jewish and Christian communities coexisting peacefully.",
  },
  {
    title: "British Mandate (1920-1948)",
    content: "Following World War I, Britain took control of Palestine under a League of Nations mandate. The Balfour Declaration of 1917 promised support for a 'national home for the Jewish people' in Palestine, leading to increased Jewish immigration.",
  },
  {
    title: "The Nakba (1948)",
    content: "In 1948, the State of Israel was declared, leading to the displacement of approximately 750,000 Palestinians from their homes. This event is known as the Nakba, meaning 'catastrophe' in Arabic.",
  },
  {
    title: "1967 War and Occupation",
    content: "During the Six-Day War in 1967, Israel occupied the West Bank, Gaza Strip, Sinai Peninsula, and Golan Heights. The occupation of the West Bank and Gaza continues to this day.",
  },
  {
    title: "Oslo Accords (1993-1995)",
    content: "The Oslo Accords were signed between Israel and the Palestine Liberation Organization, establishing the Palestinian Authority and outlining a framework for future negotiations.",
  },
];

const currentContent = [
  {
    title: "Ongoing Occupation",
    content: "The Israeli military occupation of the West Bank continues, with over 700,000 Israeli settlers living in settlements considered illegal under international law.",
  },
  {
    title: "Gaza Situation",
    content: "Gaza has been under blockade since 2007, severely restricting movement of people and goods. The humanitarian situation continues to deteriorate with limited access to clean water, electricity, and medical supplies.",
  },
  {
    title: "International Response",
    content: "The international community remains divided on the issue. Many countries and organizations call for a two-state solution, while others advocate for different approaches to achieving peace and justice.",
  },
  {
    title: "Human Rights Concerns",
    content: "International human rights organizations have documented concerns including restrictions on movement, home demolitions, and the impact of the occupation on Palestinian daily life.",
  },
];

const timelineEvents = [
  { year: 1917, title: "Balfour Declaration", description: "Britain promises support for Jewish homeland in Palestine" },
  { year: 1947, title: "UN Partition Plan", description: "UN proposes dividing Palestine into Jewish and Arab states" },
  { year: 1948, title: "The Nakba", description: "700,000+ Palestinians displaced during Israel's establishment" },
  { year: 1967, title: "Six-Day War", description: "Israel occupies West Bank, Gaza, Sinai, and Golan Heights" },
  { year: 1987, title: "First Intifada", description: "Palestinian uprising against Israeli occupation begins" },
  { year: 1993, title: "Oslo Accords", description: "Peace agreement signed between Israel and PLO" },
  { year: 2000, title: "Second Intifada", description: "Second Palestinian uprising begins" },
  { year: 2005, title: "Gaza Disengagement", description: "Israel withdraws settlers from Gaza" },
  { year: 2007, title: "Gaza Blockade", description: "Israel and Egypt impose blockade on Gaza Strip" },
  { year: 2023, title: "Ongoing Crisis", description: "Continued violence and humanitarian concerns" },
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState("history");
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Resources
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Learn & Understand
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Education is the foundation of advocacy. Explore our curated resources 
              to better understand Palestinian history, current events, and the path forward.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
            <TabsList className="bg-muted/50 p-1 rounded-xl">
              <TabsTrigger 
                value="history" 
                className="data-[state=active]:bg-background data-[state=active]:text-primary rounded-lg px-6 py-3 transition-all"
              >
                <BookOpen className="w-4 h-4 mr-2" />
                History
              </TabsTrigger>
              <TabsTrigger 
                value="current"
                className="data-[state=active]:bg-background data-[state=active]:text-primary rounded-lg px-6 py-3 transition-all"
              >
                <Globe className="w-4 h-4 mr-2" />
                Current Affairs
              </TabsTrigger>
              <TabsTrigger 
                value="timeline"
                className="data-[state=active]:bg-background data-[state=active]:text-primary rounded-lg px-6 py-3 transition-all"
              >
                <Clock className="w-4 h-4 mr-2" />
                Timeline
              </TabsTrigger>
            </TabsList>

            {/* History Tab */}
            <TabsContent value="history" className="mt-8" id="history">
              <div className="grid gap-4">
                {historyContent.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border/50 overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedItem(expandedItem === index ? null : index)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                    >
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <ChevronRight className={cn(
                        "w-5 h-5 text-muted-foreground transition-transform duration-200",
                        expandedItem === index && "rotate-90"
                      )} />
                    </button>
                    <div className={cn(
                      "overflow-hidden transition-all duration-300",
                      expandedItem === index ? "max-h-96 pb-6 px-6" : "max-h-0"
                    )}>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Current Tab */}
            <TabsContent value="current" className="mt-8" id="current">
              <div className="grid md:grid-cols-2 gap-6">
                {currentContent.map((item, index) => (
                  <div
                    key={index}
                    className="bg-card rounded-xl border border-border/50 p-6 hover-lift"
                  >
                    <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.content}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-6 bg-accent/5 rounded-xl border border-accent/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> The situation in Palestine is 
                  constantly evolving. For the most current information, we recommend following 
                  reputable news sources and human rights organizations.
                </p>
              </div>
            </TabsContent>

            {/* Timeline Tab */}
            <TabsContent value="timeline" className="mt-8" id="timeline">
              <div>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />
                  
                  {/* Timeline events */}
                  <div className="space-y-8">
                    {timelineEvents.map((event, index) => (
                      <div
                        key={event.year}
                        className="relative pl-20 animate-fade-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {/* Year bubble */}
                        <div className="absolute left-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shadow-lg">
                          {event.year}
                        </div>
                        
                        {/* Content */}
                        <div className="bg-card rounded-xl border border-border/50 p-6 hover:border-primary/30 transition-colors">
                          <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
}
