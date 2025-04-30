import HeroSection from "@/component/HeroSection";
import FeaturesGrid from "@/component/FeaturesGrid";
import InfoSection from "@/component/InfoSection";
import ClaimLandingSection from "@/component/ClaimLandingSection";
import HomeFAQ from "@/component/HomeFAQ";
import ContactForm from "@/component/ContactForm";
import MainFooter from "@/component/MainFooter";
import AnimatedBackground from "@/component/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <HeroSection />
      <FeaturesGrid />
      <InfoSection />
      <ClaimLandingSection />
      <HomeFAQ />
      <ContactForm />
      <MainFooter />
    </main>
  );
}
