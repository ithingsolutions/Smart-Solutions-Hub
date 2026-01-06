import { Card, CardContent } from "@/components/ui/card";
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
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {isRTL ? "مزايانا" : "Our Advantages"}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-why-title"
          >
            {t("why.title")}
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-why-subtitle"
          >
            {t("why.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <Card
                key={reason.key}
                className="group hover-elevate transition-all duration-300 border-border"
                data-testid={`card-why-${reason.key}`}
              >
                <CardContent className="p-8 lg:p-10">
                  <div className={`flex items-start gap-6 ${isRTL ? "flex-row-reverse text-right" : ""}`}>
                    <div className="shrink-0 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-bold mb-3 ${isRTL ? "font-arabic" : ""}`}
                      >
                        {t(`why.${reason.key}.title`)}
                      </h3>
                      <p
                        className={`text-muted-foreground leading-relaxed ${isRTL ? "font-arabic" : ""}`}
                      >
                        {t(`why.${reason.key}.description`)}
                      </p>
                    </div>
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
