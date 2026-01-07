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
    <section className="py-16 lg:py-20 bg-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="text-center"
              data-testid={`stat-${stat.key}`}
            >
              <div className="flex items-baseline justify-center gap-1 mb-2" dir="ltr">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary">
                  {stat.value}
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-primary/60">
                  {stat.suffix}
                </span>
              </div>
              <div
                className={`text-background/60 text-sm font-medium ${isRTL ? "font-arabic" : ""}`}
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
