'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServicesSection from '@/components/ServicesSection'
import Fleet from '@/components/Fleet'
import WhyChooseUs from '@/components/WhyChooseUs'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleOpenBooking = (serviceName) => {
    setSelectedService(serviceName || 'General Taxi Service')
    setIsBookingOpen(true)
  }

  return (
    <>
      <Navbar onOpenBooking={handleOpenBooking} />
      <main>
        <Hero onOpenBooking={handleOpenBooking} />
        <ServicesSection onOpenBooking={handleOpenBooking} />
        <Fleet onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
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