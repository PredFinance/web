"use client"
import ParticleBackground from "@/components/particle-background"
import SocialLinks from "@/components/social-links"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import FeaturesSection from "@/components/features-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Social Links Section */}
      <section className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <SocialLinks />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}
