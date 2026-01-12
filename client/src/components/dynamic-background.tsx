import { useBackground, backgroundGradients } from "@/lib/background-context";

export function DynamicBackground() {
  const { currentBackground } = useBackground();
  const gradients = backgroundGradients[currentBackground];

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className={`absolute inset-0 bg-gradient-to-br ${gradients.primary}`}
      />
      <div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-20"
        style={{ 
          transform: "translate(20%, -30%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-15"
        style={{ 
          transform: "translate(-20%, 30%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
