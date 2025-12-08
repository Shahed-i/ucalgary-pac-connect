import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { FileText, Calendar, ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Statement {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  category: "statement" | "letter" | "response";
}

const statements: Statement[] = [
  {
    id: "1",
    title: "Statement on the Humanitarian Crisis in Gaza",
    date: "November 15, 2024",
    excerpt: "The Palestine Advocacy Club calls for an immediate ceasefire and humanitarian access to Gaza...",
    content: `The Palestine Advocacy Club at the University of Calgary stands in solidarity with the Palestinian people during this unprecedented humanitarian crisis.

We call upon our university administration, the Canadian government, and the international community to:

1. Support an immediate and lasting ceasefire to prevent further loss of civilian life.

2. Demand unrestricted humanitarian access to Gaza, including food, water, medicine, and fuel.

3. Uphold international humanitarian law and protect civilian infrastructure including hospitals, schools, and places of worship.

4. Support independent investigations into potential violations of international law.

5. Commit to long-term solutions that address the root causes of this conflict and ensure justice, dignity, and self-determination for all people.

We believe in the power of peaceful advocacy and education. We invite all members of our university community to engage with these issues thoughtfully and compassionately.

The path to lasting peace requires acknowledging historical injustices, addressing ongoing human rights concerns, and working toward a future where all people can live in dignity and security.

In solidarity,
The Palestine Advocacy Club Executive Team`,
    category: "statement",
  },
  {
    id: "2",
    title: "Open Letter to University Administration",
    date: "October 28, 2024",
    excerpt: "We urge the University of Calgary to take concrete steps toward ethical investment practices...",
    content: `Dear President and Members of the Board of Governors,

We, the Palestine Advocacy Club, write to you representing hundreds of students, faculty, and staff who are deeply concerned about the university's investment portfolio and its alignment with our institutional values.

We respectfully request:

1. Full transparency regarding the university's investments and any ties to companies profiting from human rights violations.

2. A comprehensive review of investment policies to ensure alignment with international humanitarian law.

3. Establishment of an ethical investment committee with student and faculty representation.

4. Protection of academic freedom and the right to peaceful advocacy on campus.

5. Institutional support for students affected by the ongoing crisis, including mental health resources and academic accommodations.

The University of Calgary has long championed values of justice, equity, and human dignity. We believe these principles must extend to all aspects of our institution, including our financial practices.

We look forward to a constructive dialogue on these matters.

Respectfully submitted,
The Palestine Advocacy Club`,
    category: "letter",
  },
  {
    id: "3",
    title: "Response to Media Coverage",
    date: "October 15, 2024",
    excerpt: "Clarifying our position and correcting misrepresentations in recent media coverage...",
    content: `The Palestine Advocacy Club wishes to address recent media coverage that has mischaracterized our organization and our activities.

We want to be clear:

1. PAC is committed to peaceful advocacy and education. We categorically reject all forms of violence and discrimination.

2. Our activities focus on raising awareness about Palestinian history, culture, and human rights through educational events, workshops, and community building.

3. We welcome dialogue with all members of our university community and are committed to fostering understanding across differences.

4. We support the rights and dignity of all people, regardless of their background, religion, or ethnicity.

5. Our criticism is directed at policies and actions, not at any ethnic or religious group.

We invite members of the media to reach out to us directly for accurate information about our organization and activities.

For press inquiries, please contact: media@pacucalgary.ca

The Palestine Advocacy Club`,
    category: "response",
  },
  {
    id: "4",
    title: "Statement of Solidarity with Healthcare Workers",
    date: "September 20, 2024",
    excerpt: "Honoring the brave healthcare workers providing care under impossible conditions...",
    content: `The Palestine Advocacy Club honors the courage and dedication of healthcare workers in Gaza who continue to provide life-saving care under impossible conditions.

Despite severe shortages of medical supplies, electricity, and clean water, these heroes persist in their mission to heal and comfort the wounded.

We call upon:

1. The international community to ensure immediate and unrestricted access for medical supplies and personnel.

2. All parties to respect the protected status of healthcare facilities and workers under international humanitarian law.

3. Medical organizations worldwide to raise their voices in support of their colleagues.

4. Our university to support medical students and faculty who wish to contribute to humanitarian relief efforts.

We will continue to raise awareness about the healthcare crisis and support humanitarian organizations providing medical assistance.

In solidarity with all who heal,
The Palestine Advocacy Club`,
    category: "statement",
  },
];

const categoryColors: Record<string, string> = {
  statement: "bg-primary/10 text-primary",
  letter: "bg-accent/10 text-accent",
  response: "bg-olive/10 text-olive",
};

const categoryLabels: Record<string, string> = {
  statement: "Official Statement",
  letter: "Open Letter",
  response: "Response",
};

export default function Statements() {
  const [selectedStatement, setSelectedStatement] = useState<Statement | null>(null);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-hero tatreez-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Statements
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Our Voice, Our Stand
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Read our official statements, open letters, and responses. We believe in 
              transparent communication and standing firmly for justice.
            </p>
          </div>
        </div>
      </section>

      {/* Statements List */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {statements.map((statement, index) => (
              <article
                key={statement.id}
                className="group bg-card rounded-2xl border border-border/50 p-6 md:p-8 hover:border-primary/30 transition-all duration-300 hover-lift cursor-pointer"
                onClick={() => setSelectedStatement(statement)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <span className={cn("px-3 py-1 rounded-full text-xs font-medium", categoryColors[statement.category])}>
                      {categoryLabels[statement.category]}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {statement.date}
                  </div>
                </div>

                <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {statement.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  {statement.excerpt}
                </p>

                <Button variant="ghost" className="group/btn text-primary p-0 h-auto">
                  Read Full Statement
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedStatement && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-foreground/80 backdrop-blur-sm"
            onClick={() => setSelectedStatement(null)}
          />
          <div className="relative bg-background rounded-2xl shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-start justify-between">
              <div>
                <span className={cn("inline-block px-3 py-1 rounded-full text-xs font-medium mb-2", categoryColors[selectedStatement.category])}>
                  {categoryLabels[selectedStatement.category]}
                </span>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  {selectedStatement.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {selectedStatement.date}
                </p>
              </div>
              <button
                onClick={() => setSelectedStatement(null)}
                className="p-2 rounded-lg hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
              <div className="prose prose-lg max-w-none">
                {selectedStatement.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/80 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
