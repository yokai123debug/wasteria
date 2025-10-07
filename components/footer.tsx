import Image from "next/image"
import { MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-purple-500/20 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Wasteria Client" width={40} height={40} className="rounded-lg" />
              <span className="text-xl font-bold text-white font-wasteria">WASTERIA</span>
            </div>
            <p className="text-sm text-white/70 leading-relaxed">
              The most advanced ghost client for Minecraft. Undetectable, powerful, and built for all PvP gamemodes.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-white/70 hover:text-purple-500 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#download" className="text-white/70 hover:text-purple-500 transition-colors">
                  Download
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://discord.gg/RSEaTwDdEu"
                  className="text-white/70 hover:text-purple-500 transition-colors"
                >
                  Discord Server
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-purple-500/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/70">© 2025 Wasteria Client. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://discord.gg/RSEaTwDdEu"
              className="text-white/70 hover:text-purple-500 transition-colors"
              aria-label="Discord"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
