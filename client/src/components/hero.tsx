import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function Hero() {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`inline-flex items-center gap-3 px-5 py-2 rounded-full bg-muted/50 border border-border mb-10 ${isRTL ? "font-arabic" : ""}`}
          >
            <img src="/2.png" className="w-6 h-6" alt="iThing" />
            <span className="text-sm font-medium text-muted-foreground">
              {t("hero.subtitle")}
            </span>
          </div>

          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 ${isRTL ? "font-arabic leading-relaxed" : "leading-tight"}`}
            data-testid="text-hero-title"
          >
            <span className="relative inline-block text-primary pb-2">
              iThing
              <svg className="absolute -bottom-1 left-0 w-full h-3" viewBox="0 0 100 12" preserveAspectRatio="none">
                <path d="M0 6 Q25 0, 50 6 T100 6" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" className="text-primary" />
              </svg>
            </span>
            <span className="text-foreground">
              {isRTL ? " لتطوير حلول الأعمال الذكية" : " Smart Business Solutions"}
            </span>
          </h1>

          <p
            className={`text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-hero-description"
          >
            {t("hero.description")}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <Button
              size="lg"
              className={`group min-w-[200px] h-12 text-base font-semibold ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-primary"
            >
              {t("hero.cta.primary")}
              <ArrowIcon className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`min-w-[200px] h-12 text-base font-semibold ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-secondary"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-6 text-sm ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <div className={`flex items-center gap-2 ${isRTL ? "flex-row-reverse" : ""}`}>
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
                {isRTL ? "متوفرون الآن" : "Available Now"}
              </span>
            </div>
            <div className="w-px h-4 bg-border" />
            <span className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "استشارة مجانية" : "Free Consultation"}
            </span>
            <div className="w-px h-4 bg-border" />
            <span className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "ضمان الجودة" : "Quality Guaranteed"}
            </span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
