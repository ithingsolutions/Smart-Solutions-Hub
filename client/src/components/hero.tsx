import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/language-context";
import { useTheme } from "@/lib/theme-context";
import {
  ArrowRight,
  ArrowLeft,
  Zap,
  Shield,
  Brain,
  Cloud,
  Code,
  BarChart3,
  Sparkles,
  Globe,
  Clock,
  Users,
} from "lucide-react";
import heroBackground from "@assets/stock_images/abstract_technology__2c24a2c3.jpg";
import ithingLogoLight from "@assets/logos/Logo/logaster_No_6_png/1024_pixels/1_Primary_logo_on_transparent_1024.png";
import ithingLogoDark from "@assets/ithing_logo_dark.png_1768127827204.png";

export function Hero() {
  const { t, isRTL } = useLanguage();
  const { theme } = useTheme();
  const ithingLogo = theme === "dark" ? ithingLogoDark : ithingLogoLight;

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
        <div
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-primary/15 rounded-xl rotate-45 animate-pulse"
          style={{ animationDuration: "3s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/6 w-8 h-8 bg-primary/20 rounded-full animate-bounce"
          style={{ animationDuration: "2s" }}
        />
        <div
          className="absolute top-1/2 right-1/6 w-6 h-6 border border-primary/30 rounded-md rotate-45 animate-pulse"
          style={{ animationDuration: "4s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="relative mb-10">
            <div className="relative inline-flex flex-col items-center justify-center">
              <div
                className="absolute w-80 h-80 sm:w-[420px] sm:h-[420px] md:w-[480px] md:h-[480px] lg:w-[520px] lg:h-[520px] rounded-full border border-dashed border-primary/20 animate-spin"
                style={{
                  animationDuration: "25s",
                  animationDirection: "reverse",
                }}
              />
              <div
                className="absolute w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[520px] md:h-[520px] lg:w-[580px] lg:h-[580px] rounded-full border border-primary/10 animate-spin"
                style={{ animationDuration: "35s" }}
              />
              <div
                className="absolute w-72 h-72 sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] rounded-full border-2 border-primary/15 animate-pulse"
                style={{ animationDuration: "4s" }}
              />
              <div
                className="absolute w-64 h-64 sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] lg:w-[440px] lg:h-[440px] rounded-full bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse"
                style={{ animationDuration: "3s" }}
              />

              <div className="relative z-10 py-8 sm:py-12 md:py-14 flex flex-col items-center">
                <div className="relative group mb-6">
                  <div
                    className="absolute -inset-12 sm:-inset-16 bg-gradient-radial from-primary/40 via-primary/20 to-transparent rounded-full blur-3xl opacity-70 group-hover:opacity-90 transition-opacity animate-pulse"
                    style={{ animationDuration: "2.5s" }}
                  />
                  <div
                    className="absolute -inset-8 sm:-inset-10 bg-gradient-to-t from-primary/30 via-red-500/20 to-transparent rounded-full blur-2xl opacity-60 animate-pulse"
                    style={{ animationDuration: "3.5s" }}
                  />
                  <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-b from-transparent via-primary/25 to-primary/10 rounded-full blur-xl opacity-50" />
                  <img
                    src={ithingLogo}
                    alt="iThing Logo"
                    className="relative h-44 sm:h-56 md:h-64 lg:h-72 w-auto drop-shadow-[0_0_80px_rgba(255,0,0,0.6)] hover:scale-105 transition-all duration-700 hover:drop-shadow-[0_0_100px_rgba(255,0,0,0.8)]"
                  />
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl opacity-60" />
                  <h1
                    className={`relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide ${isRTL ? "font-arabic leading-relaxed" : "leading-[1.3]"}`}
                    data-testid="text-hero-title"
                  >
                    <span className="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent bg-[length:200%_auto] animate-shimmer">
                      {isRTL
                        ? "لتطوير حلول الأعمال الذكية"
                        : "Smart Business Solutions"}
                    </span>
                  </h1>
                  <div className="mt-3 flex justify-center">
                    <div className="h-1 w-24 sm:w-32 md:w-40 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            className={`flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm mb-16 ${isRTL ? "flex-row-reverse" : ""}`}
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
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
              <Brain className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <span
                className={`text-sm font-semibold text-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL
                  ? " الذكاء الاصطناعي وتحليل البيانات"
                  : "AI & Data Analytics"}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
              <Cloud className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <span
                className={`text-sm font-semibold text-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "الحوسبة السحابية" : "Cloud Services"}
              </span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-xl bg-card/30 border border-border/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-300 group">
              <Code className="w-8 h-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
              <span
                className={`text-sm font-semibold text-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "تطوير البرمجيات" : "Software Development"}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 max-w-5xl mx-auto">
            <div className="text-center p-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-black text-foreground">
                  100+
                </span>
              </div>
              <span
                className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "عميل سعيد" : "Happy Clients"}
              </span>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-black text-foreground">
                  500+
                </span>
              </div>
              <span
                className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "مشروع منجز" : "Projects Done"}
              </span>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-black text-foreground">
                  5+
                </span>
              </div>
              <span
                className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "دولة" : "Countries"}
              </span>
            </div>
            <div className="text-center p-4">
              <div className="flex items-center justify-center gap-1 mb-1">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-3xl sm:text-4xl font-black text-foreground">
                  10+
                </span>
              </div>
              <span
                className={`text-sm text-muted-foreground ${isRTL ? "font-arabic" : ""}`}
              >
                {isRTL ? "سنوات خبرة" : "Years Experience"}
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
