'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import WhyChooseUs from '@/components/WhyChooseUs'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

export default function AboutPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleOpenBooking = (serviceName) => {
    setSelectedService(serviceName || 'General Inquiry')
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
              Our Journey &amp; Values
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-3">
              About <span className="text-amber-400">Aadi Tour &amp; Travels</span>
            </h1>
            <p className="text-cream/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Leading taxi and travel agency based in Dehradun, providing top-notch car rentals, outstation trips, and spiritual pilgrimage tours across Uttarakhand.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Meet Our Expert Team */}
        <Team />

        {/* Customer Testimonials / Reviews */}
        <Reviews />
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