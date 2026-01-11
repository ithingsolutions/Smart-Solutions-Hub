import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Stats } from "@/components/stats";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Team } from "@/components/team";
import { TechStack } from "@/components/tech-stack";
import { Testimonials } from "@/components/testimonials";
import { Clients } from "@/components/clients";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <TechStack />
        <Stats />
        <WhyChooseUs />
        <Team />
        <Testimonials />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
