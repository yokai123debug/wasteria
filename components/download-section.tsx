import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function DownloadSection() {
  return (
    <section id="download" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Get Started Today</h2>
          <p className="text-lg text-purple-300 max-w-2xl mx-auto">
            Download Wasteria Client and experience the ultimate ghost client
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <div className="relative group fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500 animate-pulse-glow"></div>
            <div className="relative bg-black border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-purple-400">$9.99</span>
                  <span className="text-purple-300">USD</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">All ghost client features unlocked</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Advanced combat modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Custom configuration profiles</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Priority support & updates</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Exclusive premium modules</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="text-white">Lifetime access & free updates</span>
                </li>
              </ul>

              <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white font-semibold py-6 text-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 hover:scale-105">
                Purchase Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
