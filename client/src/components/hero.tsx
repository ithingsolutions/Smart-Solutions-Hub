import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, ArrowLeft, ChevronDown } from "lucide-react";

export function Hero() {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 ${isRTL ? "font-arabic" : ""}`}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              {t("hero.subtitle")}
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 ${isRTL ? "font-arabic leading-tight" : "leading-tight"}`}
            data-testid="text-hero-title"
          >
            {t("hero.title")}
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-hero-description"
          >
            {t("hero.description")}
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <Button
              size="lg"
              className={`group min-w-[200px] ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-primary"
            >
              {t("hero.cta.primary")}
              <ArrowIcon className={`h-4 w-4 transition-transform group-hover:${isRTL ? "-translate-x-1" : "translate-x-1"}`} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`min-w-[200px] ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-secondary"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
            <ChevronDown className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
