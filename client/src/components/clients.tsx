import { useLanguage } from "@/lib/language-context";
import { Building2, Landmark, ShoppingBag, Plane, Stethoscope, GraduationCap } from "lucide-react";

const clients = [
  { key: "bank", icon: Landmark },
  { key: "retail", icon: ShoppingBag },
  { key: "airline", icon: Plane },
  { key: "healthcare", icon: Stethoscope },
  { key: "education", icon: GraduationCap },
  { key: "enterprise", icon: Building2 },
];

const clientData = {
  en: {
    bank: "Jordan National Bank",
    retail: "Gulf Retail Group",
    airline: "Royal Jordanian",
    healthcare: "Emirates Health",
    education: "MENA Academy",
    enterprise: "Al-Futtaim Group",
  },
  ar: {
    bank: "البنك الأردني الوطني",
    retail: "مجموعة الخليج للتجزئة",
    airline: "الملكية الأردنية",
    healthcare: "الإمارات الصحية",
    education: "أكاديمية الشرق الأوسط",
    enterprise: "مجموعة الفطيم",
  },
};

export function Clients() {
  const { language, isRTL } = useLanguage();
  const data = clientData[language as keyof typeof clientData];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/50">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5">
            <span className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "شركاء النجاح" : "Success Partners"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-clients-title"
          >
            {isRTL ? "عملاؤنا" : "Our Clients"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-clients-subtitle"
          >
            {isRTL
              ? "نفخر بالعمل مع شركات رائدة في المنطقة"
              : "Proud to work with leading companies across the region"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => {
            const Icon = client.icon;
            const name = data[client.key as keyof typeof data];
            return (
              <div
                key={client.key}
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`client-${client.key}`}
              >
                <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className={`text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}>
                  {name}
                </span>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
            {isRTL ? "وأكثر من 80 عميل راضٍ آخر..." : "And 80+ more satisfied clients..."}
          </p>
        </div>
      </div>
    </section>
  );
}
