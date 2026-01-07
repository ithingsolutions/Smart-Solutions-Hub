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
    <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="text-center"
              data-testid={`stat-${stat.key}`}
            >
              <div className="text-4xl sm:text-5xl font-bold mb-2" dir="ltr">
                {stat.value}
              </div>
              <div
                className={`text-primary-foreground/80 text-sm sm:text-base ${isRTL ? "font-arabic" : ""}`}
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
