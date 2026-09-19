import { Phone, MapPin, Clock } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-[#0F1E35] text-cream/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-gold font-medium">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-ping" />
            Book taxi service in Dehradun!
          </span>
          <span className="flex items-center gap-1.5 text-cream/70">
            <MapPin size={13} className="text-gold" />
            Dehradun, Uttarakhand
          </span>
          <span className="flex items-center gap-1.5 text-cream/70">
            <Clock size={13} className="text-gold" />
            24/7 Available
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="tel:7819909454"
            className="flex items-center gap-1.5 text-gold hover:text-white font-bold transition-colors"
          >
            <Phone size={13} />
            <span>Call Now: +91 78199 09454</span>
          </a>
        </div>
      </div>
    </div>
  )
}