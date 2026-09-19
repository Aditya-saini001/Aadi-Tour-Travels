'use client'
import { Car, Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

export const servicesData = [
  {
    id: 'saharanpur',
    title: 'Dehradun to Saharanpur Taxi',
    route: 'Dehradun ⇄ Saharanpur',
    image: 'https://images.unsplash.com/photo-1590736969955-71cc94801759?q=80&w=800&auto=format&fit=crop',
    desc: 'Affordable, fast one-way and round-trip taxi service between Dehradun and Saharanpur city & railway station.',
    price: 'Starting ₹1,499',
    badge: 'Popular Route',
    features: ['Doorstep Pickup', 'No Toll Surprise', 'AC Sedan/SUV'],
  },
  {
    id: 'delhi-ncr',
    title: 'Dehradun to Delhi / NCR Cabs',
    route: 'Dehradun ⇄ Delhi / Gurgaon / Noida',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800&auto=format&fit=crop',
    desc: 'Seamless highway travel to New Delhi, Gurgaon Cyber City, Noida, and IGI International Airport terminal 1/2/3.',
    price: 'Starting ₹2,799',
    badge: 'Express Highway',
    features: ['24/7 IGI Airport Transfer', 'Expressway Route', 'Sedan / Crysta'],
  },
  {
    id: 'chandigarh',
    title: 'Dehradun to Chandigarh Taxi',
    route: 'Dehradun ⇄ Chandigarh / Mohali',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop',
    desc: 'Comfortable inter-city cab service to Chandigarh City Beautiful, Panchkula, and Mohali with experienced drivers.',
    price: 'Starting ₹2,999',
    badge: 'Comfort Ride',
    features: ['Sedan & SUV Options', 'Highway Toll Clear', 'Clean Sanitized Cabs'],
  },
  {
    id: 'chardham',
    title: 'Chardham Yatra Taxi Packages',
    route: 'Kedarnath • Badrinath • Gangotri • Yamunotri',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=800&auto=format&fit=crop',
    desc: 'Complete holy pilgrimage tour with expert hill drivers skilled on Uttarakhand mountain roads. Do Dham & 4 Dham packages.',
    price: 'Custom Package',
    badge: 'Spiritual Tour',
    features: ['Hill Expert Drivers', 'All 4 Dhams Covered', 'Innova / Tempo Traveller'],
  },
  {
    id: 'mussoorie',
    title: 'Dehradun to Mussoorie Cab',
    route: 'Dehradun ⇄ Mussoorie / Dhanaulti',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop',
    desc: 'Enjoy Queen of Hills sightseeing including Kempty Falls, Mall Road, Gun Hill, and Dhanaulti Eco Park.',
    price: 'Starting ₹1,199',
    badge: 'Hill Station',
    features: ['Full Day Sightseeing', 'Mountain Experienced Drivers', 'Scenic Stops'],
  },
  {
    id: 'airport',
    title: 'Jolly Grant Airport Transfer',
    route: 'Dehradun Airport (DED) ⇄ Anywhere',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=800&auto=format&fit=crop',
    desc: 'Guaranteed on-time pickup and drop service for all flights arriving or departing from Dehradun Jolly Grant Airport.',
    price: 'Starting ₹799',
    badge: 'On-Time Guaranteed',
    features: ['Flight Tracking', 'Zero Waiting Hassle', 'Luggage Assistance'],
  },
  {
    id: 'haridwar-rishikesh',
    title: 'Haridwar & Rishikesh Tour',
    route: 'Dehradun ⇄ Haridwar / Rishikesh',
    image: 'https://images.unsplash.com/photo-1600100397608-f010f4446e54?q=80&w=800&auto=format&fit=crop',
    desc: 'Ganga Aarti at Har Ki Pauri, Laxman Jhula, Ram Jhula, river rafting, and Neelkanth Mahadev temple tours.',
    price: 'Starting ₹1,199',
    badge: 'Adventure & Holy',
    features: ['Ganga Aarti Timing', 'Rafting Point Drop', 'Local Temple Guide'],
  },
  {
    id: 'nainital-corbett',
    title: 'Nainital & Jim Corbett Safari',
    route: 'Dehradun ⇄ Nainital / Corbett',
    image: 'https://images.unsplash.com/photo-1582650625119-3a31f8418b7d?q=80&w=800&auto=format&fit=crop',
    desc: 'Complete Kumaon lake tour & wildlife tiger safari package to Jim Corbett National Park, Bhimtal, and Nainital.',
    price: 'Starting ₹3,499',
    badge: 'Wildlife & Lakes',
    features: ['Multi-Day Tour', 'Custom Itinerary', 'Sedan / SUV / Tempo'],
  },
  {
    id: 'local-rental',
    title: 'Dehradun Local City Rental',
    route: 'Within Dehradun City Limits',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    desc: 'Hourly rental packages (4hr/40km, 8hr/80km, 12hr/120km) for shopping, meetings, hospitals, FRI, and Robbers Cave.',
    price: 'Starting ₹999 (4h)',
    badge: 'Hourly Rental',
    features: ['Unlimited Stops', 'Courteous Chauffeur', 'Clean AC Car'],
  },
]

export default function Services({ onOpenBooking }) {
  return (
    <section id="services" className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            Our Taxi Services & Routes
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-3">
            Popular Taxi Routes from Dehradun
          </h2>
          <p className="text-gray-600 text-sm">
            Clean, sanitised vehicles with professional hill drivers for outstation trips, airport transfers, and spiritual tours.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {servicesData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 hover:border-gold/40 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badge */}
              <div className="relative h-52 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <span className="absolute top-3 right-3 bg-red-600 text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                  {item.badge}
                </span>
                <span className="absolute bottom-3 left-3 text-gold font-bold text-xs bg-navy/90 backdrop-blur-sm px-2.5 py-1 rounded-md">
                  {item.route}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-extrabold text-navy text-lg group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {item.desc}
                  </p>

                  {/* Feature Bullets */}
                  <div className="space-y-1.5 mb-5">
                    {item.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-green-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Book Button */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase font-bold">Fare</span>
                    <span className="text-base font-extrabold text-navy">{item.price}</span>
                  </div>
                  <button
                    onClick={() => onOpenBooking && onOpenBooking(item.title)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-md hover:scale-105 transition-all"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}