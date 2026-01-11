import { useBackground, backgroundGradients } from "@/lib/background-context";

export function DynamicBackground() {
  const { currentBackground } = useBackground();
  const gradients = backgroundGradients[currentBackground];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-all duration-1000">
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients.primary} transition-all duration-1000`} />
      
      <div
        className={`absolute top-0 right-0 w-[800px] h-[800px] ${gradients.glow} rounded-full blur-3xl opacity-60 transition-all duration-1000`}
        style={{ transform: "translate(20%, -30%)" }}
      />
      
      <div
        className={`absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr ${gradients.secondary} rounded-full blur-3xl opacity-50 transition-all duration-1000`}
        style={{ transform: "translate(-20%, 30%)" }}
      />
      
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r ${gradients.accent} rounded-full blur-3xl opacity-30 transition-all duration-1000`}
      />
    </div>
  );
}
