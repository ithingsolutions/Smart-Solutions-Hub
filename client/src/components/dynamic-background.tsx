import { useBackground, backgroundGradients } from "@/lib/background-context";

export function DynamicBackground() {
  const { currentBackground } = useBackground();
  const gradients = backgroundGradients[currentBackground];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none will-change-auto">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients.primary}`}
      />

      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
        style={{ 
          transform: "translate(20%, -30%) translateZ(0)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.35) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-25"
        style={{ 
          transform: "translate(-20%, 30%) translateZ(0)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] rounded-full opacity-15"
        style={{ 
          transform: "translate(-50%, -50%) translateZ(0)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 60%)",
          filter: "blur(100px)",
        }}
      />
    </div>
  );
}
