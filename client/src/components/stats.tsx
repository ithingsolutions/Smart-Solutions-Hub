import { useLanguage } from "@/lib/language-context";

const stats = [
  { key: "projects", value: "150", suffix: "+" },
  { key: "clients", value: "80", suffix: "+" },
  { key: "experience", value: "10", suffix: "+" },
  { key: "experts", value: "50", suffix: "+" },
];

export function Stats() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center p-8 ${index !== stats.length - 1 ? "lg:border-r lg:border-background/10" : ""}`}
              data-testid={`stat-${stat.key}`}
            >
              <div className="flex items-baseline justify-center gap-1 mb-4" dir="ltr">
                <span className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                  {stat.value}
                </span>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary/70">
                  {stat.suffix}
                </span>
              </div>
              <div
                className={`text-background/60 text-sm sm:text-base font-medium uppercase tracking-[0.2em] ${isRTL ? "font-arabic" : ""}`}
              >
                {t(`stats.${stat.key}`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
