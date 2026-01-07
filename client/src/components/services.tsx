import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { useQuery } from "@tanstack/react-query";
import { Brain, BarChart3, Cloud, Code2, Lightbulb, Workflow, Wifi, Bot, LucideIcon } from "lucide-react";

interface Service {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  icon: string;
  sortOrder: number;
}

const iconMap: Record<string, LucideIcon> = {
  Brain,
  BarChart3,
  Cloud,
  Code2,
  Lightbulb,
  Workflow,
  Wifi,
  Bot,
};

export function Services() {
  const { language, isRTL } = useLanguage();

  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/content/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-20 lg:py-28 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-8 w-32 bg-muted rounded mx-auto mb-4" />
            <div className="h-10 w-48 bg-muted rounded mx-auto mb-4" />
            <div className="h-5 w-72 bg-muted rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-48 bg-muted rounded-lg" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (services.length === 0) {
    return null;
  }

  return (
    <section id="services" className="py-20 lg:py-28 relative border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4 ${isRTL ? "font-arabic" : ""}`}>
            {isRTL ? "ما نقدمه" : "What We Offer"}
          </p>
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-title"
          >
            {isRTL ? "خدماتنا" : "Our Services"}
          </h2>
          <p
            className={`text-base text-muted-foreground max-w-xl mx-auto ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-subtitle"
          >
            {isRTL 
              ? "حلول مبتكرة مصممة لتحويل عملك"
              : "Innovative solutions designed to transform your business"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Brain;
            const title = language === "ar" ? service.titleAr : service.titleEn;
            const description = language === "ar" ? service.descriptionAr : service.descriptionEn;

            return (
              <Card
                key={service.id}
                className="group border border-border/60 hover:border-primary/40 transition-colors duration-300"
                data-testid={`card-service-${service.id}`}
              >
                <CardContent className="p-6">
                  <div className={`flex items-start gap-4 mb-4 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                  <h3
                    className={`text-base font-semibold mb-2 group-hover:text-primary transition-colors ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm text-muted-foreground leading-relaxed ${isRTL ? "font-arabic text-right" : ""}`}
                  >
                    {description}
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
