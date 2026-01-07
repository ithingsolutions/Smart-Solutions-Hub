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
    <section id="services" className="py-20 lg:py-24 bg-accent/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${isRTL ? "font-arabic" : ""}`}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className="group hover-elevate transition-all duration-300 border-border/50 hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                data-testid={`card-service-${service.key}`}
              >
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3
                    className={`text-xl font-semibold mb-3 ${isRTL ? "font-arabic" : ""}`}
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
