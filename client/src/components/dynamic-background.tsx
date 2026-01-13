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
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20 animate-[float_8s_ease-in-out_infinite]"
        style={{ 
          transform: "translate(20%, -30%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.3) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-15 animate-[float_10s_ease-in-out_infinite_reverse]"
        style={{ 
          transform: "translate(-20%, 30%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.25) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-10 animate-[pulse_6s_ease-in-out_infinite]"
        style={{ 
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full opacity-15 animate-[float_12s_ease-in-out_infinite]"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.2) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-[350px] h-[350px] rounded-full opacity-10 animate-[float_9s_ease-in-out_infinite_reverse]"
        style={{ 
          background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
