'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export const holidayPackages = [
  {
    title: 'Dehradun to Mussoorie Tour',
    badge: '1 Day / 2 Days',
    image: '/images/mussoorie.jpg',
    points: ['Cab with experienced hill driver', 'Kempty Falls, Gun Hill, George Everest', 'Doorstep pickup from Dehradun'],
    package: 'Mussoorie Tour Package',
  },
  {
    title: 'Rishikesh & Haridwar Package',
    badge: '1 Day Special',
    image: '/images/rishikesh.jpg',
    points: ['Private cab pick & drop', 'Har Ki Pauri Evening Ganga Aarti', 'Laxman Jhula & White Water Rafting'],
    package: 'Rishikesh & Haridwar Package',
  },
  {
    title: 'Dehradun to Dhanaulti & Snow Tour',
    badge: '2 Days / 1 Night',
    image: '/images/mussoorie.jpg',
    points: ['SUV/Sedan cab for mountain terrain', 'Eco Park, Surkanda Devi Temple', 'Snow view point & apple orchards'],
    package: 'Dhanaulti Tour Package',
  },
  {
    title: 'Nainital & Jim Corbett Safari Package',
    badge: '3 Days / 2 Nights',
    image: '/images/delhi.jpg',
    points: ['Complete Kumaon Lake Tour (Naini, Bhimtal)', 'Jim Corbett Tiger Safari drop', 'Luxury Innova or Sedan cab'],
    package: 'Nainital & Jim Corbett Package',
  },
  {
    title: 'Chopta, Tungnath & Chandrashila Trek Tour',
    badge: '3 Days / 2 Nights',
    image: '/images/kedarnath.jpg',
    points: ['Mini Switzerland of Uttarakhand', 'World highest Shiva temple trek', 'Mountain certified driver'],
    package: 'Chopta Tungnath Package',
  },
  {
    title: 'Auli Skiing & Joshimath Snow Holiday',
    badge: '4 Days / 3 Nights',
    image: '/images/badrinath.jpg',
    points: ['Auli Ropeway & Snow Peaks', 'Nanda Devi Himalayan views', 'Comfortable 4x4 or SUV cab'],
    package: 'Auli Snow Package',
  },
]

export default function TourPackagesPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleOpenBooking = (serviceName) => {
    setSelectedService(serviceName || 'Holiday Tour Package')
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
              Weekend Trips &amp; Holiday Tours
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-3">
              Top Holiday Packages <span className="text-[#0D9488]">From Dehradun</span>
            </h1>
            <p className="text-cream/80 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
              Discover the beauty of Devbhoomi Uttarakhand with Aadi Tour &amp; Travels. Custom itineraries, comfortable cabs, and verified drivers.
            </p>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {holidayPackages.map((pkg, i) => (
                <div
                  key={i}
                  className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-gray-100 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="h-56 w-full overflow-hidden relative">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-3 left-3 bg-amber-500 text-navy font-black text-xs px-3 py-1 rounded-full shadow-md">
                        {pkg.badge}
                      </span>
                    </div>
                    <div className="p-6">
                      <h3 className="font-black text-[#0F1E35] text-lg mb-3 group-hover:text-[#0D9488] transition-colors">
                        {pkg.title}
                      </h3>

                      <div className="space-y-2 mb-4">
                        {pkg.points.map((pt, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                            <CheckCircle2 size={13} className="text-green-600 flex-shrink-0" />
                            <span>{pt}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6">
                    <button
                      onClick={() => handleOpenBooking(pkg.package)}
                      className="w-full bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02]"
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