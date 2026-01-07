import { useLanguage } from "@/lib/language-context";
import { useQuery } from "@tanstack/react-query";
import { Building2 } from "lucide-react";

interface Client {
  id: number;
  nameEn: string;
  nameAr: string;
  logoUrl: string;
  icon: string;
  sortOrder: number;
}

export function Clients() {
  const { language, isRTL } = useLanguage();

  const { data: clients = [], isLoading } = useQuery<Client[]>({
    queryKey: ["/api/content/clients"],
  });

  if (isLoading) {
    return (
      <section className="py-24 lg:py-32 relative overflow-hidden bg-card/50 dark:bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-10 w-48 bg-muted animate-pulse rounded-full mx-auto mb-8" />
            <div className="h-12 w-64 bg-muted animate-pulse rounded mx-auto mb-4" />
            <div className="h-6 w-96 bg-muted animate-pulse rounded mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="h-32 bg-muted animate-pulse rounded-2xl"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (clients.length === 0) {
    return null;
  }

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/50 dark:bg-transparent">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5">
            <span
              className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}
            >
              {isRTL ? "شركاء النجاح" : "Success Partners"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-clients-title"
          >
            {isRTL ? "عملاؤنا" : "Our Clients"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-clients-subtitle"
          >
            {isRTL
              ? "نفخر بالعمل مع شركات رائدة في المنطقة"
              : "Proud to work with leading companies across the region"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => {
            const name = language === "ar" ? client.nameAr : client.nameEn;
            return (
              <div
                key={client.id}
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`client-${client.id}`}
              >
                {client.logoUrl ? (
                  <div className="h-24 w-full flex items-center justify-center mb-4">
                    <img
                      src={client.logoUrl}
                      alt={name}
                      className="max-h-24 max-w-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                )}
                <span
                  className={`text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}
                >
                  {name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
