'use client'
import { Car, ArrowRight } from 'lucide-react'

export const quickRoutes = [
  { name: 'Dehradun to Delhi Taxi', dest: 'Delhi' },
  { name: 'Dehradun To Haridwar Taxi', dest: 'Haridwar' },
  { name: 'Dehradun To Manali Taxi', dest: 'Manali' },
  { name: 'Dehradun to Uttarkashi Taxi', dest: 'Uttarkashi' },
  { name: 'Dehradun to Kanatal Taxi', dest: 'Kanatal' },
  { name: 'Dehradun To Rishikesh Taxi', dest: 'Rishikesh' },
  { name: 'Dehradun to Noida Taxi', dest: 'Noida' },
  { name: 'Dehradun To Saharanpur Taxi', dest: 'Saharanpur' },
  { name: 'Dehradun To Haldwani Taxi', dest: 'Haldwani' },
  { name: 'Dehradun To Auli Taxi', dest: 'Auli' },
  { name: 'Dehradun To Dhanaulti Taxi', dest: 'Dhanaulti' },
  { name: 'Dehradun To Nainital Taxi', dest: 'Nainital' },
]

export const popularCabCards = [
  {
    title: 'Dehradun to Mussoorie Taxi',
    image: '/images/mussoorie.jpg',
    desc: 'Book a comfortable cab for sightseeing at Kempty Falls, Mall Road, and George Everest. One-way pick/drop available 24/7.',
    dest: 'Mussoorie Sightseeing',
  },
  {
    title: 'Dehradun to Delhi Taxi',
    image: '/images/delhi.jpg',
    desc: 'Hire Dehradun to Delhi taxi service for corporate travel, family trips, or Delhi IGI Airport transfers 24/7.',
    dest: 'Delhi / NCR / Airport',
  },
  {
    title: 'Dehradun Jolly Grant Airport Taxi',
    image: '/images/airport.jpg',
    desc: 'Affordable Jolly Grant Airport pickup & drop with guaranteed on-time driver arrival and flight tracking.',
    dest: 'Jolly Grant Airport (DED)',
  },
  {
    title: 'Dehradun to Haridwar Taxi',
    image: '/images/haridwar.jpg',
    desc: 'Book cab for evening Ganga Aarti at Har Ki Pauri, Mansa Devi temple pilgrimage, and family trips.',
    dest: 'Haridwar Ganga Aarti',
  },
  {
    title: 'Dehradun to Rishikesh Taxi',
    image: '/images/rishikesh.jpg',
    desc: 'Travel to Rishikesh for white water rafting, yoga ashrams, Ram Jhula, Laxman Jhula, and Triveni Ghat.',
    dest: 'Rishikesh Adventure & Yoga',
  },
  {
    title: 'Dehradun to Saharanpur Taxi',
    image: '/images/saharanpur.jpg',
    desc: 'Hassle-free one-way or round-trip commute with clean, AC cars and experienced hill and plain drivers.',
    dest: 'Saharanpur City & Station',
  },
]

export default function ServicesSection({ onOpenBooking }) {
  return (
    <div>
      {/* 1. Our Popular Cab Services with Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F1E35]">
              Our Popular <span className="text-[#0D9488]">Cab Services</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              Enjoy safe, comfortable, and timely rides with experienced hill chauffeurs and accurate destination photos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularCabCards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="h-56 w-full overflow-hidden relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-black text-[#0F1E35] text-lg mb-2 group-hover:text-[#0D9488] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed mb-4">
                      {card.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <button
                    onClick={() => onOpenBooking && onOpenBooking(card.dest)}
                    className="w-full bg-[#0F766E] hover:bg-[#0D655E] text-white font-bold text-xs py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm hover:scale-[1.02]"
                  >
                    <span>Book Service Now</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. All Taxi Routes From Dehradun */}
      <section className="py-16 bg-cream/40 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#0F1E35]">
              All Taxi Routes <span className="text-[#0D9488]">From Dehradun</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-2">
              We offer convenient and affordable taxi services from Dehradun to various cities and tourist destinations. Book your ride now for a comfortable journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickRoutes.map((route, i) => (
              <div
                key={i}
                onClick={() => onOpenBooking && onOpenBooking(route.name)}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md border-l-4 border-l-[#0D9488] border-gray-100 flex items-center justify-between cursor-pointer group transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Car size={18} />
                  </div>
                  <h4 className="font-bold text-xs md:text-sm text-[#0F1E35] group-hover:text-[#0D9488] transition-colors">
                    {route.name}
                  </h4>
                </div>
                <span className="text-xs font-bold text-[#0D9488] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Book &rarr;
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}