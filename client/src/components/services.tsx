import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { Brain, BarChart3, Cloud, Code2, Lightbulb, Workflow, ArrowUpRight } from "lucide-react";

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
    <section id="services" className="py-28 lg:py-36 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/30 via-accent/50 to-accent/30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className={`text-sm font-semibold text-primary ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "ما نقدمه" : "What We Offer"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-title"
          >
            {t("services.title")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-subtitle"
          >
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.key}
                className="group relative overflow-hidden border-0 bg-background shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
                data-testid={`card-service-${service.key}`}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-8 lg:p-10">
                  <div className={`flex items-start justify-between mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 group-hover:from-primary/20 group-hover:to-primary/10 transition-colors duration-500">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <h3
                    className={`text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p
                    className={`text-muted-foreground leading-relaxed ${isRTL ? "font-arabic text-right" : ""}`}
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
