import { useBackground, backgroundGradients } from "@/lib/background-context";

export function DynamicBackground() {
  const { currentBackground } = useBackground();
  const gradients = backgroundGradients[currentBackground];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients.primary} transition-all duration-1000`}
      />

      <div
        className="absolute top-0 right-0 w-[900px] h-[900px] rounded-full blur-[120px] opacity-40 transition-all duration-1000 animate-morph"
        style={{ 
          transform: "translate(15%, -25%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          animationDuration: "12s"
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full blur-[100px] opacity-35 transition-all duration-1000 animate-morph"
        style={{ 
          transform: "translate(-15%, 25%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          animationDuration: "15s",
          animationDelay: "-5s"
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full blur-[150px] opacity-20 transition-all duration-1000"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 60%)",
        }}
      />

      <div
        className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full blur-[80px] opacity-25 animate-float"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)",
          animationDuration: "8s"
        }}
      />

      <div
        className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full blur-[70px] opacity-20 animate-float"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          animationDuration: "10s",
          animationDelay: "-3s"
        }}
      />

      <div
        className="absolute top-[60%] left-[10%] w-[250px] h-[250px] rounded-full blur-[60px] opacity-15 animate-pulse"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.4) 0%, transparent 70%)",
          animationDuration: "4s"
        }}
      />

      <div
        className="absolute top-[20%] right-[15%] w-[200px] h-[200px] rounded-full blur-[50px] opacity-20 animate-pulse"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)",
          animationDuration: "5s",
          animationDelay: "-2s"
        }}
      />

      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary) / 0.15) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, hsl(var(--background) / 0.3) 50%, transparent 100%)",
        }}
      />
    </div>
  );
}
