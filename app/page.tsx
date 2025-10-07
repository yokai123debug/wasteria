import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { ClickGUISection } from "@/components/clickgui-section"
import { DownloadSection } from "@/components/download-section"
import { Footer } from "@/components/footer"
import { CursorGlow } from "@/components/cursor-glow"

export default function Home() {
  return (
    <main className="min-h-screen animated-gradient">
      <CursorGlow />
      <HeroSection />
      <ClickGUISection />
      <FeaturesSection />
      <DownloadSection />
      <Footer />
    </main>
  )
}
