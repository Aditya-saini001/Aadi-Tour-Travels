'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import ServicesSection from '@/components/ServicesSection'
import Fleet from '@/components/Fleet'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

export default function ServicesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleOpenBooking = (serviceName) => {
    setSelectedService(serviceName || 'Taxi Service')
    setIsBookingOpen(true)
  }

  return (
    <>
      <Navbar onOpenBooking={handleOpenBooking} />
      <main>
        {/* Banner */}
        <section className="bg-[#0F1E35] text-white py-16 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Dehradun Cabs &amp; Outstation Rides
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-3">
              Our Taxi <span className="text-amber-400">Services &amp; Routes</span>
            </h1>
            <p className="text-cream/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Explore our wide range of taxi solutions including local hourly rentals, airport transfers, one-way drops, and outstation holiday cabs.
            </p>
          </div>
        </section>

        <ServicesSection onOpenBooking={handleOpenBooking} />
        <Fleet onOpenBooking={handleOpenBooking} />
      </main>
      <Footer />
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultService={selectedService}
      />
    </>
  )
}