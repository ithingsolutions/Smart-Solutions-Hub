import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, ArrowLeft, Zap, Shield } from "lucide-react";
import heroBackground from "@assets/stock_images/abstract_technology__2c24a2c3.jpg";

export function Hero() {
  const { t, isRTL } = useLanguage();

  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-hero-bg"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/20" />

      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/30 to-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.2) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div
          className="absolute top-20 left-20 w-24 h-24 border-2 border-primary/25 rounded-2xl rotate-12 animate-spin"
          style={{ animationDuration: "20s" }}
        />
        <div
          className="absolute bottom-40 right-20 w-20 h-20 border-2 border-primary/20 rounded-full animate-spin"
          style={{ animationDuration: "15s", animationDirection: "reverse" }}
        />
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/15 rounded-xl rotate-45 animate-pulse" style={{ animationDuration: "3s" }} />
        <div className="absolute bottom-1/3 left-1/6 w-8 h-8 bg-primary/20 rounded-full animate-bounce" style={{ animationDuration: "2s" }} />
        <div className="absolute top-1/2 right-1/6 w-6 h-6 border border-primary/30 rounded-md rotate-45 animate-pulse" style={{ animationDuration: "4s" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border border-primary/30 mb-12 backdrop-blur-md shadow-xl shadow-primary/10 hover:shadow-primary/20 transition-all duration-300 hover:scale-105 ${isRTL ? "font-arabic" : ""}`}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border border-primary/20">
              <img src="/2.png" className="w-8 h-8" />
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-primary via-red-400 to-primary bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-10 ${isRTL ? "font-arabic leading-relaxed" : "leading-[1.05]"}`}
            data-testid="text-hero-title"
          >
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-red-400 to-red-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient drop-shadow-[0_0_30px_rgba(255,0,0,0.4)]">
                iThing
              </span>
              <svg
                className="absolute -bottom-2 -right-6 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 text-primary drop-shadow-[0_0_15px_rgba(255,0,0,0.6)] animate-pulse"
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{ animationDuration: "2s" }}
              >
                <path d="M4 4L10.5 20L12.5 14.5L18 12.5L4 4Z" />
                <path d="M12.5 14.5L17 19L19 17L14.5 12.5" />
              </svg>
            </span>
            <br />
            <span className="text-foreground">
              {isRTL ? "لتطوير حلول الأعمال الذكية" : "Smart Business Solutions"}
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-hero-description"
          >
            {t("hero.description")}
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-5 mb-16 ${isRTL ? "sm:flex-row-reverse" : ""}`}
          >
            <Button
              size="lg"
              className={`group min-w-[240px] h-16 text-lg font-bold shadow-2xl shadow-primary/30 hover:shadow-primary/40 transition-all duration-300 hover:scale-[1.02] ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-primary"
            >
              {t("hero.cta.primary")}
              <ArrowIcon
                className={`h-5 w-5 transition-transform duration-300 group-hover:${isRTL ? "-translate-x-1.5" : "translate-x-1.5"}`}
              />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className={`min-w-[240px] h-16 text-lg font-bold backdrop-blur-sm border-2 hover:bg-accent/50 transition-all duration-300 ${isRTL ? "font-arabic" : ""}`}
              data-testid="button-hero-secondary"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>

          <div
            className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm mb-24 ${isRTL ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
              <span
                className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "متوفرون الآن" : "Available Now"}
              </span>
            </div>
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <Zap className="w-4 h-4 text-primary" />
              <span
                className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "استشارة مجانية" : "Free Consultation"}
              </span>
            </div>
            <div
              className={`flex items-center gap-3 px-4 py-2 rounded-full bg-card/50 border border-border/50 backdrop-blur-sm ${isRTL ? "flex-row-reverse" : ""}`}
            >
              <Shield className="w-4 h-4 text-primary" />
              <span
                className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "ضمان الجودة" : "Quality Guaranteed"}
              </span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <a
            href="#services"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
              <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
