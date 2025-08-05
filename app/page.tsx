import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import DownloadAppSection from '../components/DownloadAppSection';

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white font-sans overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <DownloadAppSection /> {/* Added after Pricing */}
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <Footer />
    </main>
  );
}
