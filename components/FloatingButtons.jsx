'use client'
import { Phone, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
      {/* Call Button */}
      <a
        href="tel:7819909454"
        title="Call Now"
        className="flex items-center gap-2 bg-[#0F766E] hover:bg-[#0D655E] text-white px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-bold border border-white/20"
      >
        <Phone size={16} className="animate-pulse" />
        <span>Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917819909454"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="flex items-center gap-2 bg-[#22C55E] hover:bg-[#16A34A] text-white px-4 py-2.5 rounded-full shadow-2xl hover:scale-105 transition-all text-xs font-bold border border-white/20"
      >
        <MessageCircle size={16} />
        <span>WhatsApp</span>
      </a>
    </div>
  )
}