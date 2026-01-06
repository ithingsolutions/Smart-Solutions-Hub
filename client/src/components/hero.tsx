import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, ArrowLeft, ChevronDown, Sparkles } from "lucide-react";

export function Hero() {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full blur-3xl" />
        
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--muted-foreground) / 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-12 backdrop-blur-sm ${isRTL ? "font-arabic" : ""}`}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              {t("hero.subtitle")}
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 bg-gradient-to-br from-foreground via-foreground to-muted-foreground bg-clip-text ${isRTL ? "font-arabic leading-relaxed" : "leading-[1.1]"}`}
            data-testid="text-hero-title"
          >
            {t("hero.title")}
          </h1>

          <p
            className={`text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed font-light ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-hero-description"
          >
            {t("hero.description")}
          </p>

          <div className={`flex flex-col sm:flex-row items-center justify-center gap-5 ${isRTL ? "sm:flex-row-reverse" : ""}`}>
            <Button
              size="lg"
              className={`group min-w-[220px] h-14 text-lg font-semibold shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-primary"
            >
              {t("hero.cta.primary")}
              <ArrowIcon className={`h-5 w-5 transition-transform group-hover:${isRTL ? "-translate-x-1" : "translate-x-1"}`} />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`min-w-[220px] h-14 text-lg font-semibold backdrop-blur-sm ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-secondary"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          <div className="mt-20 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span>{isRTL ? "متوفرون الآن" : "Available Now"}</span>
            </div>
            <div className="w-px h-4 bg-border" />
            <div>{isRTL ? "استشارة مجانية" : "Free Consultation"}</div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <a href="#services" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group">
            <span className="text-xs font-medium uppercase tracking-widest">{isRTL ? "اكتشف المزيد" : "Scroll"}</span>
            <ChevronDown className="h-5 w-5 animate-bounce group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
