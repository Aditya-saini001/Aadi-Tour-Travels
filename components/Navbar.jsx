'use client'
import { useState } from 'react'
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
  const pathname = usePathname()

  return (
    <header className="sticky top-0 left-0 right-0 z-50 shadow-2xl" style={{ backgroundColor: '#0F1E35' }}>
      {/* Top Announcement Bar */}
      <div className="text-xs py-2 px-4 border-b border-white/10 hidden md:block" style={{ backgroundColor: '#07111E' }}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-ping" />
              Book taxi service in Dehradun!
            </span>
            <span className="text-gray-300 font-medium">Dehradun, Uttarakhand • 24/7 Available</span>
          </div>
          <a href="tel:9762981527" className="flex items-center gap-1.5 text-amber-400 hover:text-white font-black transition-colors">
            <Phone size={13} className="text-red-400 fill-red-400" />
            <span>Call Now: +91 97629 81527</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Circular Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform flex-shrink-0 bg-white">
              <img
                src="/images/logo.jpg"
                alt="Shivdarshan Tour & Travels Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-black text-lg md:text-xl tracking-wide group-hover:text-amber-400 transition-colors">
                Shivdarshan Tour &amp; Travels
              </span>
              <span className="text-amber-400 text-[11px] font-bold tracking-wider uppercase">
                Taxi Service Dehradun
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-black transition-all duration-200 ${
                    isActive
                      ? 'bg-red-600 text-white shadow-lg shadow-red-600/30'
                      : 'text-white hover:text-amber-400 hover:bg-white/10'
                  }`}
                >
                  <Icon size={16} />
                  <span>{link.name}</span>
                </Link>
              )
            })}
          </nav>

          {/* Right Glowing Call Now Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:9762981527"
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 via-red-500 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white font-black text-sm px-6 py-2.5 rounded-full shadow-lg shadow-red-600/40 hover:scale-105 transition-all duration-200"
            >
              <Phone size={16} className="fill-white" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white hover:text-amber-400 p-2 transition-colors rounded-lg bg-white/5"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-white/10 pb-6 px-4 shadow-2xl animate-fadeIn" style={{ backgroundColor: '#0F1E35' }}>
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => {
              const Icon = link.icon
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-3 py-3 px-3.5 rounded-xl text-sm font-black transition-all ${
                    isActive
                      ? 'bg-red-600 text-white shadow-md'
                      : 'text-white hover:text-amber-400 hover:bg-white/10'
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
                else window.location.href = '/contact'
              }}
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-[#0F1E35] font-black text-sm py-3 px-4 rounded-xl text-center mt-3 shadow-lg"
            >
              <Car size={16} />
              <span>Book Taxi Online</span>
            </button>
            <a
              href="tel:9762981527"
              className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold text-sm py-3 px-4 rounded-xl text-center mt-2 shadow-md"
              onClick={() => setIsOpen(false)}
            >
              <Phone size={16} />
              <span>Call Now: +91 97629 81527</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}