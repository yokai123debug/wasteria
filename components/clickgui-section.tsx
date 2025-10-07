"use client"

import type React from "react"

import Image from "next/image"
import { useState } from "react"

export function ClickGUISection() {
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
    <section id="interface" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Main <span className="text-purple-500 text-glow-pink">Client</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
            Simple ClickGUI that doesn't suck. Everything's organized so you can actually find what you need.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto fade-in-up delay-200">
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
                src="/clickgui.png"
                alt="Wasteria Client ClickGUI Interface"
                width={1920}
                height={1080}
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <h3 className="text-xl font-bold text-white mb-2">Auto Mace</h3>
              <p className="text-white/70 leading-relaxed">
                Works in literally any gamemode. Tons of settings to tweak it exactly how you want
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <h3 className="text-xl font-bold text-white mb-2">Auto Hit Anchor</h3>
              <p className="text-white/70 leading-relaxed">Hitanchor just like SakuraFx does it</p>
            </div>
            <div className="p-6 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale">
              <h3 className="text-xl font-bold text-white mb-2">Auto Crystal</h3>
              <p className="text-white/70 leading-relaxed">Get the cleanest D-Taps you've ever seen</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="col-start-2 p-6 rounded-xl bg-white/5 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 hover-scale text-center">
              <h3 className="text-xl font-bold text-white">and more...</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
