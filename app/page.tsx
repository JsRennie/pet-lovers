import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import BookingSection from "./components/BookingSection";
import FooterSection from "./components/FooterSection";
import HeroSection from "./components/HeroSection";
import PricingSection from "./components/PricingSection";
import ServiceSection from "./components/ServiceSection";
import TeamSection from "./components/TeamSection";
import TestimonialsSection from "./components/TestimonialsSection";
import WhySection from "./components/WhySection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BookingSection />
      <AboutSection />
      <ServiceSection />
      <WhySection />
      <PricingSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <FooterSection />
    </main>
  );
}
