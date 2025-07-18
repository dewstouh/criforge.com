import { Metadata } from "next";
import { HeroSection } from "./(marketing)/_components/hero-section";
import { AboutSection } from "./(marketing)/_components/about-section";
import { GallerySection } from "./(marketing)/_components/gallery-section";
import { ContactSection } from "./(marketing)/_components/contact-section";
import { Footer } from "./(marketing)/_components/footer";
import { AnimationWrapper } from "./(marketing)/_components/animation-wrapper";
import "./(marketing)/styles.css";

export const metadata: Metadata = {
  title: "SALVA-JE | Gothic Landing",
  description: "Welcome to SALVA-JE - A gothic experience awaits",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <AnimationWrapper>
        <HeroSection />
        <AboutSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </AnimationWrapper>
    </div>
  );
}