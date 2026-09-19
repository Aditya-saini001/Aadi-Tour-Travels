'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import { Shield, MapPin, Clock, Users, ArrowRight, CheckCircle2 } from 'lucide-react'

export const yatraCards = [
  {
    title: 'Kedarnath Dham Taxi',
    image: '/images/kedarnath.jpg',
    desc: 'Dehradun / Haridwar / Rishikesh to Sonprayag & Gaurikund taxi service for Lord Shiva darshan with reliable hill drivers.',
    duration: '3–4 Days',
    package: 'Kedarnath Dham Yatra',
  },
  {
    title: 'Badrinath Dham Taxi',
    image: '/images/badrinath.jpg',
    desc: 'Direct comfortable cab transfer to Badrinath temple, Mana Village (last Indian village), and Vishnu Prayag.',
    duration: '3–4 Days',
    package: 'Badrinath Dham Yatra',
  },
  {
    title: 'Do Dham Yatra (5–6 Days)',
    image: '/images/haridwar.jpg',
    desc: 'Kedarnath + Badrinath Yatra complete cab package from Dehradun or Haridwar with dedicated driver & toll covered.',
    duration: '5–6 Days',
    package: 'Do Dham (Kedarnath + Badrinath)',
  },
  {
    title: 'Full 4 Dham Yatra (9–10 Days)',
    image: '/images/gangotri.jpg',
    desc: 'Yamunotri, Gangotri, Kedarnath, and Badrinath complete sacred pilgrimage package with experienced hill chauffeurs.',
    duration: '9–10 Days',
    package: 'Complete 4 Dham Yatra Package',
  },
  {
    title: 'Gangotri Dham Taxi Service',
    image: '/images/gangotri.jpg',
    desc: 'Dehradun to Gangotri temple through scenic Uttarkashi, Harshil Valley, and Bhagirathi river route.',
    duration: '3 Days',
    package: 'Gangotri Dham Yatra',
  },
  {
    title: 'Yamunotri Dham Taxi Service',
    image: '/images/yamunotri.webp',
    desc: 'Smooth cab transfer from Dehradun to Janki Chatti / Barkot for holy Yamunotri Mata shrine trek.',
    duration: '3 Days',
    package: 'Yamunotri Dham Yatra',
  },
]

export default function ChardhamPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleOpenBooking = (serviceName) => {
    setSelectedService(serviceName || 'Chardham Yatra')
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
              Devbhoomi Uttarakhand Holy Pilgrimage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-3">
              Book Sacred <span className="text-[#0D9488]">Yatra Taxi Packages</span>
            </h1>
            <p className="text-cream/80 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Travel with complete peace of mind. Well-maintained mountain vehicles (Sedan, Ertiga, Innova Crysta, Tempo Traveller) with verified local chauffeurs.
            </p>
          </div>
        </section>

        {/* Yatra Packages Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {yatraCards.map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-56 w-full overflow-hidden relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 right-3 bg-amber-500 text-navy font-black text-[10px] px-2.5 py-1 rounded-full shadow-md">
                        {card.duration}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-black text-[#0F1E35] text-base mb-2 group-hover:text-[#0D9488] transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-xs leading-relaxed mb-4">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 pb-5">
                    <button
                      onClick={() => handleOpenBooking(card.package)}
                      className="w-full bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02]"
                    >
                      <span>Book Package Now</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inclusions & Highlights */}
        <section className="py-16 bg-cream/40 border-t border-gray-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-black text-[#0F1E35]">
                What is Included in Our Yatra Packages?
              </h2>
              <p className="text-gray-500 text-xs mt-1">Zero hidden charges. Complete transparency guaranteed.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Commercial Tourist Permit Cab with GPS Tracking',
                'Mountain-Expert Driver with 10+ Years Hill Experience',
                'Fuel Charges, State Border Taxes & Toll Fees Included',
                'Driver Allowance, Night Halts & Food Covered',
                'Emergency 24/7 Breakdown & Route Helpline',
                'Helicopter & Biometric Registration Guidance',
              ].map((inc, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                  <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                  <span className="text-xs font-semibold text-gray-700">{inc}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
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