import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { Brain, BarChart3, Cloud, Code2, Lightbulb, Workflow } from "lucide-react";

const services = [
  { key: "ai", icon: Brain },
  { key: "analytics", icon: BarChart3 },
  { key: "cloud", icon: Cloud },
  { key: "software", icon: Code2 },
  { key: "consulting", icon: Lightbulb },
  { key: "integration", icon: Workflow },
];

export function Services() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services" className="py-24 lg:py-32 bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            {isRTL ? "ما نقدمه" : "What We Offer"}
          </span>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-title"
          >
            {t("services.title")}
          </h2>
          <p
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-subtitle"
          >
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className="group hover-elevate transition-all duration-300 border-border bg-background"
                data-testid={`card-service-${service.key}`}
              >
                <CardContent className="p-8">
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-primary/10 group-hover:bg-primary/15 transition-colors">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-4 ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p
                    className={`text-muted-foreground leading-relaxed ${isRTL ? "font-arabic" : ""}`}
                  >
                    {t(`services.${service.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
