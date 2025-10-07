"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"

export function FeaturesSection() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height

    const tiltX = (y - 0.5) * 8
    const tiltY = (x - 0.5) * -8

    setTilt({ x: tiltX, y: tiltY })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <section id="features" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="relative max-w-6xl mx-auto fade-in-up delay-400">
          <div className="text-center mb-8 space-y-2">
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              Addons <span className="text-purple-500 text-glow-pink">Category</span>
            </h3>
            <p className="text-lg text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
              Extend your client with 40+ additional modules. Create your own custom addons to fit your playstyle.
            </p>
          </div>

          <div
            className="relative rounded-2xl overflow-hidden border border-purple-500/30 hover:border-purple-500/50 transition-all duration-500 hover-scale glow-pink bg-black/40 backdrop-blur-sm"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-purple-500/10 pointer-events-none" />
            <div className="relative w-full aspect-video bg-black flex items-center justify-center p-4">
              <Image
                src="/addons.png"
                alt="Wasteria Client Addons System"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-6 rounded-lg bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <div className="text-2xl font-bold text-purple-500 mb-2">Blatant</div>
              <div className="text-sm text-white/70 leading-relaxed">
                Fly, Speed, NoFall, Jesus, and more movement-focused addons
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <div className="text-2xl font-bold text-purple-500 mb-2">Donut</div>
              <div className="text-sm text-white/70 leading-relaxed">
                AuctionSniper, AutoSell, BaseFinder, and server-specific utilities
              </div>
            </div>
            <div className="text-center p-6 rounded-lg bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <div className="text-2xl font-bold text-purple-500 mb-2">Minigames</div>
              <div className="text-sm text-white/70 leading-relaxed">
                BridgeAssist, ChestStealer, Scaffold, and minigame-optimized modules
              </div>
            </div>
            <div className="md:col-start-2 text-center p-6 rounded-lg bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <div className="text-2xl font-bold text-purple-500 mb-2">and more...</div>
              <div className="text-sm text-white/70 leading-relaxed">
                You can download more add-ons created by the community
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
