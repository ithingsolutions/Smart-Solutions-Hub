import { useEffect, useState } from "react";

export function CursorAnimation() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trail, setTrail] = useState<{ x: number; y: number; id: number }[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      trailId++;
      const newTrail = { x: e.clientX, y: e.clientY, id: trailId };
      setTrail((prev) => [...prev.slice(-8), newTrail]);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="absolute rounded-full bg-primary/30 blur-sm animate-cursor-trail"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            width: 8 + index * 0.5,
            height: 8 + index * 0.5,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${0.5 + index * 0.1})`,
          }}
        />
      ))}
      
      <div
        className={`absolute rounded-full transition-transform duration-100 ${
          isClicking ? "scale-75" : "scale-100"
        }`}
        style={{
          left: position.x - 20,
          top: position.y - 20,
          width: 40,
          height: 40,
        }}
      >
        <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse" />
        <div className="absolute inset-2 rounded-full bg-primary/20 backdrop-blur-sm" />
      </div>

      <div
        className="absolute w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
        style={{
          left: position.x - 6,
          top: position.y - 6,
          boxShadow: "0 0 20px hsl(var(--primary)), 0 0 40px hsl(var(--primary) / 0.5)",
        }}
      />
    </div>
  );
}
