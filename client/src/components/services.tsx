import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/lib/language-context";
import { useQuery } from "@tanstack/react-query";
import { Brain, BarChart3, Cloud, Code2, Lightbulb, Workflow, Wifi, Bot, ArrowUpRight, LucideIcon } from "lucide-react";

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

const gradients = [
  "from-rose-500/20 to-orange-500/20",
  "from-amber-500/20 to-yellow-500/20",
  "from-cyan-500/20 to-teal-500/20",
  "from-emerald-500/20 to-green-500/20",
  "from-violet-500/20 to-purple-500/20",
  "from-blue-500/20 to-cyan-500/20",
  "from-pink-500/20 to-rose-500/20",
  "from-indigo-500/20 to-blue-500/20",
];

export function Services() {
  const { language, isRTL } = useLanguage();

  const { data: services = [], isLoading } = useQuery<Service[]>({
    queryKey: ["/api/content/services"],
  });

  if (isLoading) {
    return (
      <section id="services" className="py-28 lg:py-40 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="h-10 w-48 bg-muted animate-pulse rounded-full mx-auto mb-8" />
            <div className="h-12 w-64 bg-muted animate-pulse rounded mx-auto mb-4" />
            <div className="h-6 w-96 bg-muted animate-pulse rounded mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="h-64 bg-muted animate-pulse rounded-xl" />
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
            {isRTL ? "خدماتنا" : "Our Services"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-services-subtitle"
          >
            {isRTL 
              ? "حلول مبتكرة مصممة لتحويل عملك"
              : "Innovative solutions designed to transform your business"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Brain;
            const gradient = gradients[index % gradients.length];
            const title = language === "ar" ? service.titleAr : service.titleEn;
            const description = language === "ar" ? service.descriptionAr : service.descriptionEn;

            return (
              <Card
                key={service.id}
                className="group relative overflow-hidden border-0 bg-background/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-service-${service.id}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                <CardContent className="relative p-6 lg:p-8">
                  <div className={`flex items-start justify-between mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                      <div className="relative p-4 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 border border-primary/10 group-hover:border-primary/30 transition-colors duration-500">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                    </div>
                    <div className="p-2 rounded-full border border-transparent group-hover:border-primary/20 transition-colors">
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300 ${isRTL ? "font-arabic text-right" : ""}`}
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
