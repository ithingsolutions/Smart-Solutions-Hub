import { useLanguage } from "@/lib/language-context";
import { Card } from "@/components/ui/card";
import { Cpu, Database, Cloud, Code2, Layers, Shield, Workflow, Sparkles } from "lucide-react";
import { SiReact, SiNodedotjs, SiPython, SiTensorflow, SiDocker, SiKubernetes, SiMongodb, SiPostgresql, SiRedis, SiTypescript, SiTailwindcss, SiNextdotjs, SiFigma } from "react-icons/si";

const techCategories = [
  {
    id: "frontend",
    titleEn: "Frontend Development",
    titleAr: "تطوير الواجهات الأمامية",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    id: "backend",
    titleEn: "Backend Development",
    titleAr: "تطوير الخوادم",
    icon: Layers,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    id: "cloud",
    titleEn: "Cloud & DevOps",
    titleAr: "السحابة والعمليات",
    icon: Cloud,
    color: "from-orange-500 to-amber-500",
    technologies: [
      { name: "AWS", icon: Cloud },
      { name: "Azure", icon: Cloud },
      { name: "Google Cloud", icon: Cloud },
      { name: "Docker", icon: SiDocker },
      { name: "Kubernetes", icon: SiKubernetes },
    ],
  },
  {
    id: "database",
    titleEn: "Databases",
    titleAr: "قواعد البيانات",
    icon: Database,
    color: "from-purple-500 to-violet-500",
    technologies: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redis", icon: SiRedis },
    ],
  },
  {
    id: "ai",
    titleEn: "AI & Machine Learning",
    titleAr: "الذكاء الاصطناعي",
    icon: Sparkles,
    color: "from-pink-500 to-rose-500",
    technologies: [
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "OpenAI", icon: Sparkles },
    ],
  },
  {
    id: "design",
    titleEn: "Design & Prototyping",
    titleAr: "التصميم والنماذج",
    icon: Workflow,
    color: "from-indigo-500 to-blue-500",
    technologies: [
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export function TechStack() {
  const { language, isRTL } = useLanguage();

  return (
    <section id="tech-stack" className="py-28 lg:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/10 to-background" />
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category) => {
            const Icon = category.icon;
            const title = language === "ar" ? category.titleAr : category.titleEn;
            
            return (
              <Card
                key={category.id}
                className="group border-0 bg-background/80 backdrop-blur-sm shadow-xl overflow-hidden hover-lift"
                data-testid={`card-tech-${category.id}`}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="p-8">
                  <div className={`flex items-center gap-4 mb-6 ${isRTL ? "flex-row-reverse" : ""}`}>
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-20`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className={`text-xl font-bold ${isRTL ? "font-arabic text-right" : ""}`}>
                      {title}
                    </h3>
                  </div>
                  
                  <div className={`flex flex-wrap gap-3 ${isRTL ? "justify-end" : ""}`}>
                    {category.technologies.map((tech) => {
                      const TechIcon = tech.icon;
                      return (
                        <div
                          key={tech.name}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/50 border border-border/50 hover:bg-accent transition-colors group/tech"
                        >
                          <TechIcon className="w-4 h-4 text-muted-foreground group-hover/tech:text-primary transition-colors" />
                          <span className="text-sm font-medium text-muted-foreground group-hover/tech:text-foreground transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm ${isRTL ? "flex-row-reverse" : ""}`}>
            <Shield className="w-5 h-5 text-primary" />
            <span className={`text-muted-foreground ${isRTL ? "font-arabic" : ""}`}>
              {isRTL 
                ? "نختار دائماً الأدوات المناسبة لكل مشروع لضمان أفضل النتائج"
                : "We always choose the right tools for each project to ensure the best results"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
