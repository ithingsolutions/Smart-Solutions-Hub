import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { Brain, BarChart3, Cloud, Code2, Lightbulb, Workflow, ArrowUpRight } from "lucide-react";

const services = [
  { key: "ai", icon: Brain, gradient: "from-rose-500/20 to-orange-500/20" },
  { key: "analytics", icon: BarChart3, gradient: "from-blue-500/20 to-cyan-500/20" },
  { key: "cloud", icon: Cloud, gradient: "from-violet-500/20 to-purple-500/20" },
  { key: "software", icon: Code2, gradient: "from-emerald-500/20 to-teal-500/20" },
  { key: "consulting", icon: Lightbulb, gradient: "from-amber-500/20 to-yellow-500/20" },
  { key: "integration", icon: Workflow, gradient: "from-pink-500/20 to-rose-500/20" },
];

export function Services() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="services" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/40 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5">
            <span className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "ما نقدمه" : "What We Offer"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-title"
          >
            {t("services.title")}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
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
                className="group relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-service-${service.key}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <CardContent className="relative p-8 lg:p-10">
                  <div className={`flex items-start justify-between mb-8 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative p-5 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors duration-500">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <div className="p-2 rounded-full border border-transparent group-hover:border-primary/20 transition-colors">
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
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
