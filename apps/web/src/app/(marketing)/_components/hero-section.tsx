import { AnimatedTitle } from "./animated-title";
import { NavigationButtons } from "./navigation-buttons";

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10">
        <AnimatedTitle />
        <p className="text-red-300 text-xl mb-8 max-w-2xl mx-auto">
          Welcome to the darkness. Where shadows dance and secrets whisper.
        </p>
        <NavigationButtons />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(220,38,38,0.1)_0%,_transparent_50%)]"></div>
    </section>
  );
}
