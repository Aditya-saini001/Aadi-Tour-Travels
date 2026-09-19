'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Info, Car, Mountain, Briefcase, Phone, Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Car },
  { name: 'Chardham Yatra', href: '/chardham-yatra', icon: Mountain },
  { name: 'Tour Packages', href: '/tour-packages', icon: Briefcase },
  { name: 'Contact', href: '/contact', icon: Phone },
]

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#0F1E35] shadow-xl' : 'bg-[#0F1E35]/98 backdrop-blur-md'}`}>
      {/* Top Announcement Bar */}
      <div className="bg-[#0A1424] text-cream/90 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gold font-semibold">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-ping" />
              Book taxi service in Dehradun!
            </span>
            <span className="text-cream/70">Dehradun, Uttarakhand • 24/7 Available</span>
          </div>
          <a href="tel:7819909454" className="flex items-center gap-1.5 text-gold hover:text-white font-bold transition-colors">
            <Phone size={13} className="text-red-400" />
            <span>Call Now: +91 78199 09454</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Circular Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 p-0.5 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0">
              <div className="w-full h-full rounded-full bg-[#0F1E35] flex flex-col items-center justify-center text-center">
                <Car size={18} className="text-amber-400" />
                <span className="text-[7px] font-black uppercase text-amber-300 leading-none mt-0.5">AADI</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg md:text-xl tracking-wide group-hover:text-amber-400 transition-colors">
                Aadi Tour &amp; Travels
              </span>
              <span className="text-amber-400/90 text-[11px] font-medium tracking-wider uppercase">
                Taxi Service Dehradun
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                    isActive
                      ? 'text-amber-400 bg-white/10 shadow-sm'
                      : 'text-cream/90 hover:text-amber-400 hover:bg-white/5'
                  }`}
                >
                  <Icon size={15} />
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Glowing Book Now Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenBooking ? onOpenBooking('General Booking') : window.location.href = '/contact'}
              className="flex items-center gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-[#0F1E35] font-black text-sm px-5 py-2.5 rounded-full shadow-lg shadow-amber-500/30 hover:scale-105 transition-all duration-200"
            >
              <Car size={16} />
              <span>Book Now</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-cream hover:text-amber-400 p-2 transition-colors rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#0F1E35] border-t border-white/10 pb-6 px-4 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-1.5 pt-3">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 py-3 px-3 rounded-lg text-sm font-bold transition-all ${
                    isActive
                      ? 'bg-amber-500 text-navy'
                      : 'text-cream/90 hover:text-amber-400 hover:bg-white/5'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon size={18} />
                  <span>{link.name}</span>
                </Link>
              )
            })}
            <button
              onClick={() => {
                setIsOpen(false)
                if (onOpenBooking) onOpenBooking('General Booking')
              }}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-navy font-black text-sm py-3 px-4 rounded-xl text-center mt-3 shadow-md"
            >
              <Car size={16} />
              <span>Book Taxi Online</span>
            </button>
            <a
              href="tel:7819909454"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-4 rounded-xl text-center mt-2 shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} />
              <span>Call Now: +91 78199 09454</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}