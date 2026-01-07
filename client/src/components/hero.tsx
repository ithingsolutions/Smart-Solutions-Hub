import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight, ArrowLeft, Zap, Shield } from "lucide-react";

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
        <div
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-primary/25 to-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-primary/15 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/8 to-transparent rounded-full blur-3xl" />

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />

        <div
          className="absolute top-20 left-20 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-40 right-20 w-16 h-16 border border-primary/15 rounded-full animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-primary/10 rounded-xl rotate-45" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/15 via-primary/10 to-primary/15 border border-primary/25 mb-12 backdrop-blur-sm shadow-lg shadow-primary/5 ${isRTL ? "font-arabic" : ""}`}
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
              <img src="/2.png" className="w-8 h-8 text-primary" />
            </div>
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 ${isRTL ? "font-arabic leading-relaxed" : "leading-[1.1]"}`}
            data-testid="text-hero-title"
          >
            {isRTL ? (
              <>
                <span className="relative inline-block">
                  <span className="text-primary">iThing</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full" />
                </span>
                <span className="text-foreground"> لتطوير حلول</span>
                <br />
                <span className="text-foreground">الأعمال الذكية</span>
              </>
            ) : (
              <>
                <span className="relative inline-block">
                  <span className="text-primary italic">iThing</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-full" />
                </span>
                <span className="text-foreground"> Smart Business</span>
                <br />
                <span className="text-foreground">Solutions</span>
              </>
            )}
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
