import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServiceSection } from "./components/ServiceSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";

function App() {
  AOS.init({ once: true });
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <WhyChooseSection />
      <PortfolioSection />
      <CtaSection />
      <Footer />
    </>
  );
}

export default App;
