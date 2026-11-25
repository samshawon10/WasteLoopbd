
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

import HeroSection from "../features/home/components/HeroSection";
import ImpactSection from "../features/home/components/ImpactSection";
import HowItWorksSection from "../features/home/components/HowItWorksSection";
import RecyclingSection from "../features/home/components/RecyclingSection";
import ReSaleSection from "../features/home/components/ReSaleSection";
import RewardsSection from "../features/home/components/RewardsSection";
import EcoBusinessSection from "../features/home/components/EcoBusinessSection";
import CallToActionSection from "../features/home/components/CallToActionSection";
import AboutSection from "../features/home/components/AboutSection";
export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <ImpactSection />
        <HowItWorksSection />
        <RecyclingSection />
        <ReSaleSection />
        <RewardsSection />
        <AboutSection />
        <EcoBusinessSection />
        <CallToActionSection />
      </main>

      <Footer />
    </>
  );
}
