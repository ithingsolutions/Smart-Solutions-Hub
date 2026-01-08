import { useLanguage } from "@/lib/language-context";
import { Card } from "@/components/ui/card";
import { SiLinkedin } from "react-icons/si";
import { Users } from "lucide-react";
import teamMember1 from "@assets/stock_images/professional_corpora_1a8fc176.jpg";
import teamMember2 from "@assets/stock_images/professional_corpora_164ce9df.jpg";
import teamMember3 from "@assets/stock_images/professional_corpora_4ea7d5ba.jpg";
import teamMember4 from "@assets/stock_images/professional_corpora_4a571262.jpg";

const teamMembers = [
  {
    id: 1,
    nameEn: "Ahmad Al-Hassan",
    nameAr: "أحمد الحسن",
    roleEn: "Chief Executive Officer",
    roleAr: "الرئيس التنفيذي",
    image: teamMember1,
    linkedin: "#",
  },
  {
    id: 2,
    nameEn: "Sarah Mitchell",
    nameAr: "سارة ميتشل",
    roleEn: "Chief Technology Officer",
    roleAr: "رئيس قسم التكنولوجيا",
    image: teamMember2,
    linkedin: "#",
  },
  {
    id: 3,
    nameEn: "Omar Khalid",
    nameAr: "عمر خالد",
    roleEn: "Head of AI Solutions",
    roleAr: "رئيس حلول الذكاء الاصطناعي",
    image: teamMember3,
    linkedin: "#",
  },
  {
    id: 4,
    nameEn: "Layla Farouk",
    nameAr: "ليلى فاروق",
    roleEn: "Director of Operations",
    roleAr: "مدير العمليات",
    image: teamMember4,
    linkedin: "#",
  },
];

export function Team() {
  const { language, isRTL } = useLanguage();

  return (
    <section className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/20 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Users className="w-4 h-4 text-primary" />
            <span className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "فريق العمل" : "Our Team"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-team-title"
          >
            {isRTL ? "قادة الابتكار" : "Meet Our Leaders"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-team-subtitle"
          >
            {isRTL 
              ? "خبراء متخصصون يقودون الطريق نحو التحول الرقمي"
              : "Expert professionals leading the way to digital transformation"}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => {
            const name = language === "ar" ? member.nameAr : member.nameEn;
            const role = language === "ar" ? member.roleAr : member.roleEn;
            
            return (
              <Card
                key={member.id}
                className="group border-0 bg-background/80 backdrop-blur-sm shadow-xl overflow-hidden hover-lift"
                data-testid={`card-team-${member.id}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={member.image}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className={`absolute bottom-0 left-0 right-0 p-6 ${isRTL ? "text-right" : ""}`}>
                    <h3 
                      className={`text-xl font-bold text-white mb-1 ${isRTL ? "font-arabic" : ""}`}
                      data-testid={`text-team-name-${member.id}`}
                    >
                      {name}
                    </h3>
                    <p 
                      className={`text-sm text-white/70 mb-4 ${isRTL ? "font-arabic" : ""}`}
                      data-testid={`text-team-role-${member.id}`}
                    >
                      {role}
                    </p>
                    <a
                      href={member.linkedin}
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 hover:bg-primary transition-colors"
                      data-testid={`link-team-linkedin-${member.id}`}
                    >
                      <SiLinkedin className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
