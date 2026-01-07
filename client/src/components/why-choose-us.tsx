import { useLanguage } from "@/lib/language-context";
import { Sparkles, Users, HeadphonesIcon, TrendingUp } from "lucide-react";

const reasons = [
  { key: "innovation", icon: Sparkles },
  { key: "expertise", icon: Users },
  { key: "support", icon: HeadphonesIcon },
  { key: "scalable", icon: TrendingUp },
];

export function WhyChooseUs() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 lg:py-28 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center`}>
          <div className={isRTL ? "text-right order-2 lg:order-1" : "order-2 lg:order-1"}>
            <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "لماذا نحن؟" : "Why Choose Us?"}
            </p>
            <h2
              className={`text-3xl sm:text-4xl font-bold mb-4 ${isRTL ? "font-arabic" : ""}`}
              data-testid="text-why-title"
            >
              {t("why.title")}
            </h2>
            <p
              className={`text-base text-muted-foreground mb-10 ${isRTL ? "font-arabic" : ""}`}
              data-testid="text-why-subtitle"
            >
              {t("why.subtitle")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={reason.key}
                    className={`group p-5 rounded-lg border border-border/60 hover:border-primary/40 transition-colors ${isRTL ? "text-right" : ""}`}
                    data-testid={`card-why-${reason.key}`}
                  >
                    <div className={`flex items-start gap-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <div className="shrink-0 p-2.5 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-semibold mb-1 ${isRTL ? "font-arabic" : ""}`}>
                          {t(`why.${reason.key}.title`)}
                        </h3>
                        <p className={`text-xs text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                          {t(`why.${reason.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={`order-1 lg:order-2 ${isRTL ? "lg:order-1" : "lg:order-2"}`}>
            <div className="relative max-w-sm mx-auto">
              <div className="bg-muted/30 rounded-2xl p-10 text-center border border-border/60">
                <div className="text-6xl lg:text-7xl font-bold text-primary mb-3">
                  10+
                </div>
                <div className={`text-lg font-medium text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                  {isRTL ? "سنوات من التميز" : "Years of Excellence"}
                </div>
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                    {isRTL ? "يثق بنا العملاء" : "Trusted by Clients"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
