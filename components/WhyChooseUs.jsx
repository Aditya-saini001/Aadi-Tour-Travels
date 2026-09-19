import { Clock, Wallet, ShieldCheck, Mountain, Smartphone, Sparkles } from 'lucide-react'

const reasons = [
  {
    icon: Clock,
    title: '24/7 Taxi Service',
    desc: 'Available day and night for your convenience. Whether it\'s an early morning flight or a late-night arrival, we\'re always ready for you.',
  },
  {
    icon: Wallet,
    title: 'Affordable Fares',
    desc: 'Transparent pricing with zero hidden charges. Enjoy competitive outstation and local rates without compromising on quality or safety.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Reliable Rides',
    desc: 'Verified mountain drivers and clean, sanitized cars. Your safety is our highest priority with regular vehicle maintenance checks.',
  },
  {
    icon: Mountain,
    title: 'Local Mountain Expertise',
    desc: 'Decades of combined knowledge of Uttarakhand hill roads, Chardham terrains, shortcuts, weather updates, and scenic spots.',
  },
  {
    icon: Smartphone,
    title: 'Easy Instant Booking',
    desc: 'Fast 1-click booking via WhatsApp or direct phone call. Instant quote and confirmed vehicle allocation in minutes.',
  },
  {
    icon: Sparkles,
    title: 'Premium Experience',
    desc: 'Well-maintained fleet, respectful chauffeurs, comfortable pushback seats, and chilled AC for a truly relaxing ride.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F1E35]">
            Why Choose <span className="text-[#0D9488]">Aadi Tour &amp; Travels</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            Top reasons why thousands of tourists and pilgrims trust us for their journey across Dehradun and Devbhoomi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => {
            const Icon = r.icon
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D9488] flex items-center justify-center mb-4 group-hover:bg-[#0D9488] group-hover:text-white transition-colors">
                  <Icon size={22} />
                </div>
                <h3 className="text-base font-bold text-[#0F1E35] mb-2">{r.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{r.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}