import { useLanguage } from "@/lib/language-context";
import { Sparkles, Users, HeadphonesIcon, TrendingUp, CheckCircle2 } from "lucide-react";

const reasons = [
  { key: "innovation", icon: Sparkles },
  { key: "expertise", icon: Users },
  { key: "support", icon: HeadphonesIcon },
  { key: "scalable", icon: TrendingUp },
];

export function WhyChooseUs() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-28 lg:py-36 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary/5 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent/50 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center ${isRTL ? "lg:flex-row-reverse" : ""}`}>
          <div className={isRTL ? "text-right order-2 lg:order-1" : "order-2 lg:order-1"}>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
              <CheckCircle2 className="w-4 h-4 text-primary" />
              <span className={`text-sm font-semibold text-primary ${isRTL ? "font-arabic" : ""}`}>
                {isRTL ? "لماذا نحن؟" : "Why Us?"}
              </span>
            </div>
            <h2
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${isRTL ? "font-arabic" : ""}`}
              data-testid="text-why-title"
            >
              {t("why.title")}
            </h2>
            <p
              className={`text-xl text-muted-foreground mb-10 leading-relaxed ${isRTL ? "font-arabic" : ""}`}
              data-testid="text-why-subtitle"
            >
              {t("why.subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.key}
                    className={`group p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg ${isRTL ? "text-right" : ""}`}
                    data-testid={`card-why-${reason.key}`}
                  >
                    <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="shrink-0 p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className={`text-lg font-bold mb-1 ${isRTL ? "font-arabic" : ""}`}>
                          {t(`why.${reason.key}.title`)}
                        </h3>
                        <p className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                          {t(`why.${reason.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`relative order-1 lg:order-2 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl" />
              <div className="absolute inset-4 bg-gradient-to-tl from-accent/50 to-card rounded-2xl border border-border" />
              <div className="absolute inset-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent mb-4">
                    10+
                  </div>
                  <div className={`text-xl font-medium text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                    {isRTL ? "سنوات من التميز" : "Years of Excellence"}
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
