'use client'
import { Phone, ArrowRight, Shield, Clock, Star, Car } from 'lucide-react'

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-[#0F1E35] overflow-hidden py-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 scale-105 transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1920&auto=format&fit=crop')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E35] via-[#0F1E35]/90 to-[#0F1E35]/60" />

      <div className="relative container mx-auto px-4 text-center max-w-4xl space-y-6">
        {/* Floating Brand Badge with Shiva Logo */}
        <div className="reveal-down active inline-flex items-center gap-2.5 bg-amber-400/20 border border-amber-400/40 text-amber-300 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
          <div className="w-5 h-5 rounded-full overflow-hidden bg-white flex-shrink-0">
            <img src="/images/logo.jpg" alt="Logo" className="w-full h-full object-contain" />
          </div>
          <span>Best Taxi Service In Dehradun • Shivdarshan</span>
        </div>

        <h1 className="reveal active delay-100 text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight tracking-tight">
          Shivdarshan Tour &amp; Travels <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-white">
            Reliable Taxi Anywhere
          </span>
        </h1>

        <p className="reveal active delay-200 text-cream/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Fast, reliable and affordable taxi services in Dehradun and Uttarakhand. 24/7 available for Chardham Yatra, Mussoorie sightseeing, Jolly Grant Airport drops, and outstation trips with experienced mountain drivers.
        </p>

        {/* Hero Action Buttons */}
        <div className="reveal active delay-300 flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href="tel:9762981527"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-7 py-3.5 rounded-xl text-sm md:text-base shadow-xl hover:scale-105 transition-all"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
          <button
            onClick={() => onOpenBooking && onOpenBooking('General Taxi Service')}
            className="flex items-center gap-2 bg-gradient-to-r from-[#0F766E] to-[#0D655E] hover:from-[#0D655E] hover:to-[#0B544E] text-white font-bold px-7 py-3.5 rounded-xl text-sm md:text-base shadow-xl hover:scale-105 transition-all"
          >
            <span>Book Service</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Feature Badges */}
        <div className="reveal active delay-400 flex flex-wrap justify-center gap-4 text-xs text-cream/90 font-medium pt-6">
          <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <Shield size={13} className="text-amber-400" /> 100% Safe Rides
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <Clock size={13} className="text-amber-400" /> 24/7 On-Time Pickup
          </span>
          <span className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
            <Car size={13} className="text-amber-400" /> Clean Sanitized Cabs
          </span>
        </div>
      </div>
    </section>
  )
}