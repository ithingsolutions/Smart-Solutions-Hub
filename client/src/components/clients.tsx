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
      <section className="py-16 lg:py-20 border-t border-border/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="h-8 w-32 bg-muted rounded mx-auto mb-3" />
            <div className="h-10 w-48 bg-muted rounded mx-auto" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-24 bg-muted rounded-lg" />
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
    <section className="py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className={`text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3 ${isRTL ? "font-arabic" : ""}`}>
            {isRTL ? "شركاء النجاح" : "Success Partners"}
          </p>
          <h2
            className={`text-2xl sm:text-3xl font-bold ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-clients-title"
          >
            {isRTL ? "عملاؤنا" : "Our Clients"}
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {clients.map((client) => {
            const name = language === "ar" ? client.nameAr : client.nameEn;
            return (
              <div
                key={client.id}
                className="group flex flex-col items-center justify-center p-6 rounded-lg border border-border/40 hover:border-primary/30 transition-all"
                data-testid={`client-${client.id}`}
              >
                {client.logoUrl ? (
                  <div className="h-16 w-full flex items-center justify-center mb-3">
                    <img
                      src={client.logoUrl}
                      alt={name}
                      className="max-h-16 max-w-full object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ) : (
                  <div className="p-3 rounded-lg bg-muted/50 group-hover:bg-primary/10 transition-colors mb-3">
                    <Building2 className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                )}
                <span
                  className={`text-xs font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors ${isRTL ? "font-arabic" : ""}`}
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
