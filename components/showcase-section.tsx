import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Monitor, Sword, Footprints, Eye } from "lucide-react"

const showcaseItems = [
  {
    title: "Intuitive Click GUI",
    description:
      "Modern, sleek interface with smooth animations. Easily toggle modules and adjust settings on the fly.",
    badge: "Interface",
    icon: Monitor,
  },
  {
    title: "Advanced Combat Modules",
    description: "KillAura, Velocity, AutoClicker, and more. Fine-tune every aspect of your combat performance.",
    badge: "Combat",
    icon: Sword,
  },
  {
    title: "Movement Enhancements",
    description: "Fly, Speed, NoFall, and Spider. Move through the world like never before.",
    badge: "Movement",
    icon: Footprints,
  },
  {
    title: "Visual Overlays",
    description: "ESP, Tracers, Nametags, and custom HUD. See everything you need at a glance.",
    badge: "Visuals",
    icon: Eye,
  },
]

export function ShowcaseSection() {
  return (
    <section id="showcase" className="py-24 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Our Stunning <span className="text-purple-500 text-glow-pink">Interface</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto text-balance leading-relaxed">
            Experience the most beautiful and functional client interface ever created.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              className="overflow-hidden bg-white/5 backdrop-blur-sm border-purple-500/20 hover:border-pink-500/50 transition-all duration-300 hover:glow-pink group"
            >
              <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-purple-900/50 to-black/50 flex items-center justify-center">
                <item.icon className="w-24 h-24 text-pink-500 group-hover:scale-110 transition-transform duration-500" />
                <Badge className="absolute top-4 left-4 bg-pink-500/90 text-white">{item.badge}</Badge>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
