'use client'
import { Users, Briefcase, Wind, Shield, CheckCircle2, ArrowRight } from 'lucide-react'

const fleetData = [
  {
    name: 'Sedan (Swift Dzire / Etios)',
    category: 'Budget & City Travel',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop',
    passengers: '4 Passengers',
    luggage: '2-3 Large Bags',
    ac: 'Dual AC Climate',
    rate: 'Starting ₹11/km',
    features: ['Best for Couples & Small Family', 'High Mileage / Low Cost', 'Comfortable Pushback Seats'],
  },
  {
    name: 'SUV (Maruti Ertiga)',
    category: 'Family & Hill Travel',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
    passengers: '6 Passengers',
    luggage: '4 Large Bags',
    ac: 'Roof AC Vents',
    rate: 'Starting ₹14/km',
    features: ['Extra Legroom for Hills', 'Carrier for Luggage', 'Smooth Mountain Suspension'],
  },
  {
    name: 'Luxury SUV (Toyota Innova Crysta)',
    category: 'Premium & Chardham Yatra',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop',
    passengers: '7 Passengers',
    luggage: '5 Large Bags',
    ac: 'Automatic Climate Control',
    rate: 'Starting ₹18/km',
    features: ['Captain Seat Luxury', 'Ideal for Kedarnath & Yatra', 'Top Safety Rating & Comfort'],
  },
  {
    name: 'Tempo Traveller (12 to 26 Seater)',
    category: 'Group Tours & Corporate',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop',
    passengers: '12–26 Passengers',
    luggage: 'Massive Boot Space',
    ac: 'Individual AC & Music System',
    rate: 'Starting ₹25/km',
    features: ['Reclining Pushback Seats', 'LED TV & Sound System', 'Long Distance Group Comfort'],
  },
]

export default function Fleet({ onOpenBooking }) {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            Our Maintained Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-3">
            Choose Your Travel Vehicle
          </h2>
          <p className="text-gray-600 text-sm">
            Clean, sanitized, and commercial permit vehicles with verified GPS tracking and professional chauffeurs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fleetData.map((car, idx) => (
            <div
              key={idx}
              className="bg-cream/40 rounded-2xl overflow-hidden border border-gray-200 hover:border-gold/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-navy text-gold font-bold text-[10px] px-2.5 py-1 rounded-md">
                  {car.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-extrabold text-navy text-base mb-2">{car.name}</h3>

                  <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 mb-3 bg-white p-2.5 rounded-lg border border-gray-100">
                    <span className="flex items-center gap-1">
                      <Users size={12} className="text-gold" /> {car.passengers}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase size={12} className="text-gold" /> {car.luggage}
                    </span>
                    <span className="flex items-center gap-1">
                      <Wind size={12} className="text-gold" /> {car.ac}
                    </span>
                    <span className="flex items-center gap-1 text-green-700 font-bold">
                      <Shield size={12} /> Sanitized
                    </span>
                  </div>

                  <div className="space-y-1 mb-4">
                    {car.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-[11px] text-gray-500">
                        <CheckCircle2 size={11} className="text-green-600 flex-shrink-0" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-200 flex items-center justify-between">
                  <span className="text-xs font-black text-navy">{car.rate}</span>
                  <button
                    onClick={() => onOpenBooking && onOpenBooking(car.name)}
                    className="bg-navy hover:bg-gold hover:text-navy text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Book</span>
                    <ArrowRight size={12} />
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