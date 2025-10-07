import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Users } from "lucide-react"
import Link from "next/link"
import { CursorGlow } from "@/components/cursor-glow"

export default function CommunityPage() {
  return (
    <main className="min-h-screen animated-gradient">
      <CursorGlow />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 bg-black/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 pb-16">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-8 w-full">
          <div className="text-center space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white">
              Join Our <span className="text-purple-500">Community</span>
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Connect with other players, get support, and stay updated with the latest news
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* HitsOnly Community */}
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm p-8 space-y-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-500" />
                  <h2 className="text-2xl font-bold text-white">HitsOnly</h2>
                </div>
                <p className="text-white/70 leading-relaxed">
                  Join HitsOnly's community server for general discussions, support, and connecting with other players.
                </p>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://discord.gg/hitsonly" target="_blank" rel="noopener noreferrer">
                  Join HitsOnly
                </a>
              </Button>
            </Card>

            {/* Wasteria.rw */}
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-sm p-8 space-y-6 hover:border-purple-500/50 transition-all duration-300 hover:scale-[1.02]">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-500" />
                  <h2 className="text-2xl font-bold text-white">Wasteria.rw</h2>
                </div>
                <p className="text-white/70 leading-relaxed">
                  The official Wasteria server for updates, announcements, and dedicated support for the client.
                </p>
              </div>
              <Button
                className="w-full bg-purple-600 hover:bg-purple-700 text-white transition-all duration-300 hover:scale-105"
                asChild
              >
                <a href="https://discord.gg/RSEaTwDdEu" target="_blank" rel="noopener noreferrer">
                  Join Wasteria.rw
                </a>
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}
