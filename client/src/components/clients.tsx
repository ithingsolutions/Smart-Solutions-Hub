import { useLanguage } from "@/lib/language-context";

interface Client {
  id: number;
  nameEn: string;
  nameAr: string;
  logoUrl: string;
}

const clients: Client[] = [
  {
    id: 1,
    nameEn: "AIRVINE",
    nameAr: "AIRVINE",
    logoUrl: "/attached_assets/Airvine-Logo_1767774778537.png",
  },
  {
    id: 2,
    nameEn: "Dictum Health",
    nameAr: "Dictum Health",
    logoUrl: "/attached_assets/DICTUM-HEALTH-1_1767774778538.jpg",
  },
  {
    id: 3,
    nameEn: "Flow-MED",
    nameAr: "Flow-MED",
    logoUrl: "/attached_assets/Flow-MED_1767774778540.png",
  },
  {
    id: 4,
    nameEn: "HQ Inc",
    nameAr: "HQ Inc",
    logoUrl: "/attached_assets/HQInc_1767774778539.jpg",
  },
  {
    id: 5,
    nameEn: "Swiss Discovery",
    nameAr: "Swiss Discovery",
    logoUrl: "/attached_assets/Swiss-Discovery_1767774778538.jpg",
  },
  {
    id: 6,
    nameEn: "Thermoflix",
    nameAr: "Thermoflix",
    logoUrl: "/attached_assets/Thermoflix_1767774778540.jpg",
  },
];

export function Clients() {
  const { language, isRTL } = useLanguage();

  const duplicatedClients = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-card/50">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
          50% { box-shadow: 0 8px 30px rgba(255,0,0,0.15), 0 12px 25px rgba(0,0,0,0.12); }
        }
        .carousel-track {
          animation: scroll-left 40s linear infinite;
        }
        .carousel-track-rtl {
          animation: scroll-right 40s linear infinite;
        }
        .carousel-track:hover,
        .carousel-track-rtl:hover {
          animation-play-state: paused;
        }
        .client-card {
          animation: float 4s ease-in-out infinite, glow 4s ease-in-out infinite;
        }
        .client-card:nth-child(1) { animation-delay: 0s; }
        .client-card:nth-child(2) { animation-delay: 0.5s; }
        .client-card:nth-child(3) { animation-delay: 1s; }
        .client-card:nth-child(4) { animation-delay: 1.5s; }
        .client-card:nth-child(5) { animation-delay: 2s; }
        .client-card:nth-child(6) { animation-delay: 2.5s; }
        .client-card:nth-child(7) { animation-delay: 0.25s; }
        .client-card:nth-child(8) { animation-delay: 0.75s; }
        .client-card:nth-child(9) { animation-delay: 1.25s; }
        .client-card:nth-child(10) { animation-delay: 1.75s; }
        .client-card:nth-child(11) { animation-delay: 2.25s; }
        .client-card:nth-child(12) { animation-delay: 2.75s; }
        .client-card:hover {
          animation-play-state: paused;
          transform: translateY(-12px) scale(1.1);
          box-shadow: 0 15px 40px rgba(255,0,0,0.25), 0 20px 35px rgba(0,0,0,0.15);
        }
      `}</style>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/3 rounded-full blur-2xl animate-[pulse_4s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/4 rounded-full blur-2xl animate-[pulse_6s_ease-in-out_infinite]" />
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

        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${isRTL ? "carousel-track-rtl" : "carousel-track"}`}
            style={{ width: "fit-content" }}
          >
            {duplicatedClients.map((client, index) => {
              const name = language === "ar" ? client.nameAr : client.nameEn;
              return (
                <div
                  key={`${client.id}-${index}`}
                  className="client-card group flex flex-col items-center justify-center p-4 rounded-xl bg-background border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 min-w-[140px]"
                  data-testid={`client-${client.id}`}
                >
                  <div className="h-16 w-full flex items-center justify-center mb-2">
                    <img
                      src={client.logoUrl}
                      alt={name}
                      className="max-h-16 max-w-full object-contain"
                    />
                  </div>
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
      </div>
    </section>
  );
}
