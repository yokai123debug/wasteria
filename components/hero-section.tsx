"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
  const [showNavLogo, setShowNavLogo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200
      setShowNavLogo(shouldShow)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 overflow-visible pt-32 pb-16">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse float delay-300" />
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-purple-400/10 rounded-full blur-[100px] float delay-500" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className={`flex items-center gap-3 transition-all duration-500 ${
              showNavLogo ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
            }`}
          >
            <Image src="/logo.png" alt="Wasteria" width={40} height={40} className="rounded-lg" />
            <span
              className="text-2xl font-bold text-purple-500 font-wasteria"
              style={{
                textShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.5)",
              }}
            >
              WASTERIA
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#interface" className="text-white/70 hover:text-white transition-colors">
              Features
            </a>
            <a href="#download" className="text-white/70 hover:text-white transition-colors">
              Download
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-purple-500/50 text-white hover:bg-purple-500/10 bg-transparent transition-all duration-300 hover:scale-105 hover:border-purple-500"
              asChild
            >
              <Link href="/community">Join Community</Link>
            </Button>
            <Button
              className="pulse-glow bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="#download">
                <Download className="mr-2 h-4 w-4" />
                Buy now
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-6 fade-in-up">
        <h1 className="font-bold text-white leading-tight">
          <span
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[12rem] block text-purple-500 font-wasteria"
            style={{
              textShadow: "0 0 20px rgba(139, 92, 246, 0.8), 0 0 40px rgba(139, 92, 246, 0.5)",
            }}
          >
            WASTERIA
          </span>
          <span className="text-4xl md:text-5xl block mt-4 text-balance">The Ultimate Ghost Client</span>
        </h1>

        <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
          Fully undetectable Minecraft ghost client for 1.21+. Dominate all PvP gamemodes.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 pb-8">
          <Button
            size="lg"
            className="pulse-glow bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="#download">
              <Download className="mr-2 h-5 w-5" />
              Buy now
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-purple-500/50 text-white hover:bg-purple-500/10 text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105 hover:border-purple-500"
            asChild
          >
            <a href="#interface">View Features</a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-purple-500" />
      </div>
    </section>
  )
}
