import { useLanguage } from "@/lib/language-context";

const stats = [
  { key: "projects", value: "150+" },
  { key: "clients", value: "80+" },
  { key: "experience", value: "10+" },
  { key: "experts", value: "50+" },
];

export function Stats() {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 lg:py-24 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className={`text-center ${index !== stats.length - 1 ? "md:border-r md:border-background/20" : ""}`}
              data-testid={`stat-${stat.key}`}
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-primary" dir="ltr">
                {stat.value}
              </div>
              <div
                className={`text-background/80 text-sm sm:text-base font-medium uppercase tracking-wider ${isRTL ? "font-arabic" : ""}`}
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
