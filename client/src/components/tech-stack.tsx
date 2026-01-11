import { useLanguage } from "@/lib/language-context";
import { Cpu } from "lucide-react";
import { 
  SiReact, 
  SiNodedotjs, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiTypescript, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiFigma,
  SiGooglecloud,
  SiOpenai,
  SiFlutter,
  SiVuedotjs,
  SiAngular,
  SiDjango,
  SiExpress,
  SiGraphql,
  SiFirebase,
  SiJavascript,
  SiGit,
  SiDotnet
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";
import { type IconType } from "react-icons";

interface Technology {
  name: string;
  icon: IconType;
  color: string;
}

const technologies: Technology[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
  { name: "Angular", icon: SiAngular, color: "#DD0031" },
  { name: ".NET", icon: SiDotnet, color: "#512BD4" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Express", icon: SiExpress, color: "#ffffff" },
  { name: "Azure", icon: VscAzure, color: "#0078D4" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "SQL Server", icon: TbBrandMysql, color: "#CC2927" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "OpenAI", icon: SiOpenai, color: "#00A67E" },
  { name: "Flutter", icon: SiFlutter, color: "#02569B" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

export function TechStack() {
  const { isRTL } = useLanguage();

  return (
    <section id="tech-stack" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/10 border border-primary/20 mb-8 shadow-lg shadow-primary/5 ${isRTL ? "flex-row-reverse" : ""}`}>
            <Cpu className="w-4 h-4 text-primary" />
            <span className={`text-sm font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent ${isRTL ? "font-arabic" : ""}`}>
              {isRTL ? "التقنيات" : "Technologies"}
            </span>
          </div>
          <h2
            className={`text-4xl sm:text-5xl lg:text-6xl font-black mb-8 ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-tech-title"
          >
            {isRTL ? "التقنيات التي نستخدمها" : "Our Technology Stack"}
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isRTL ? "font-arabic" : ""}`}
            data-testid="text-tech-subtitle"
          >
            {isRTL 
              ? "نستخدم أحدث التقنيات والأدوات لبناء حلول قوية وقابلة للتطوير"
              : "We leverage cutting-edge technologies and tools to build powerful, scalable solutions"}
          </p>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-6 md:gap-8">
          {technologies.map((tech) => {
            const Icon = tech.icon;
            return (
              <div
                key={tech.name}
                className="tech-card group flex flex-col items-center gap-3 p-4 rounded-2xl bg-card/50 border-2 border-border/30 backdrop-blur-sm hover:bg-card transition-all duration-300 hover:-translate-y-1"
                style={{
                  "--tech-color": tech.color,
                } as React.CSSProperties}
                data-testid={`tech-${tech.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="p-3 rounded-xl bg-accent/50 transition-all duration-300">
                  <Icon 
                    className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" 
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-xs sm:text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors text-center">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
