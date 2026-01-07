import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { Linkedin } from "lucide-react";

const team = [
  { key: "1", number: 1 },
  { key: "2", number: 2 },
  { key: "3", number: 3 },
  { key: "4", number: 4 },
];

const teamData = {
  en: {
    "1": { name: "Name 1", role: "CEO & Founder" },
    "2": { name: "Name 2", role: "Chief Technology Officer" },
    "3": { name: "Name 3", role: "Chief Operations Officer" },
    "4": { name: "Name 4", role: "Lead Solutions Architect" },
  },
  ar: {
    "1": { name: "الاسم 1", role: "الرئيس التنفيذي والمؤسس" },
    "2": { name: "الاسم 2", role: "المدير التقني" },
    "3": { name: "الاسم 3", role: "مديرة العمليات" },
    "4": { name: "الاسم 4", role: "كبير مهندسي الحلول" },
  },
};

export function Team() {
  const { language, isRTL } = useLanguage();
  const data = teamData[language as keyof typeof teamData];

  return (
    <section className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/30 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5">
            <span className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "تعرف علينا" : "Meet The Experts"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-team-title"
          >
            {isRTL ? "فريقنا" : "Our Team"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-team-subtitle"
          >
            {isRTL
              ? "خبراء متخصصون ملتزمون بتقديم حلول استثنائية لعملك"
              : "Dedicated experts committed to delivering exceptional solutions for your business"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => {
            const memberData = data[member.key as keyof typeof data];
            return (
              <Card
                key={member.key}
                className="group relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-team-${member.key}`}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <div className="w-full aspect-square bg-gradient-to-br from-primary/20 via-primary/10 to-accent flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-4xl font-bold text-primary">{member.number}</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href="#"
                        className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    </div>
                  </div>
                  <div className={`p-6 text-center ${isRTL ? "font-arabic" : ""}`}>
                    <h3 className="text-xl font-bold mb-1">{memberData.name}</h3>
                    <p className="text-primary font-medium">{memberData.role}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
