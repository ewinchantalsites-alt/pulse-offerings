import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
