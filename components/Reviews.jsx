import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    initials: 'RS',
    name: 'Rohit Sharma',
    route: 'Dehradun to Mussoorie',
    text: 'Aadi Tour & Travels made our trip from Dehradun to Mussoorie super comfortable and affordable. Highly recommended for family travel!',
    rating: 5,
  },
  {
    initials: 'PK',
    name: 'Priya Khanna',
    route: 'Dehradun to Delhi Airport',
    text: 'The driver was punctual and the car was very clean. Had a smooth ride to Delhi Airport without any hassle or delays. Very satisfied!',
    rating: 5,
  },
  {
    initials: 'AS',
    name: 'Amit Singh',
    route: 'Chardham Yatra 2026',
    text: 'Booked Aadi Tour & Travels for our complete Chardham Yatra. The driver was very knowledgeable about all the mountain routes and temples.',
    rating: 5,
  },
  {
    initials: 'SR',
    name: 'Sunita Rawat',
    route: 'Haridwar & Rishikesh Tour',
    text: 'Excellent service! The Innova Crysta was spotless, and our driver handled the mountain hairpins with extreme care and patience for our elders.',
    rating: 5,
  },
  {
    initials: 'DV',
    name: 'Deepak Verma',
    route: 'Dehradun to Saharanpur / Chandigarh',
    text: 'Best outstation cab service in Dehradun. No hidden toll or extra charges, transparent pricing, and very polite and professional driver.',
    rating: 5,
  },
  {
    initials: 'RP',
    name: 'Rajesh Patel',
    route: 'Kedarnath & Badrinath Do Dham',
    text: 'We traveled with elderly parents for Do Dham Yatra. The team arranged everything smoothly, drove safely, and guided us at every temple stop.',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="py-20 bg-cream/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            Customer Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F1E35] mt-3 mb-2">
            What Our Travelers Say
          </h2>
          <p className="text-gray-500 text-xs">Real feedback from families, solo travelers, and pilgrims who traveled with us.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 flex flex-col justify-between transition-all"
            >
              <div>
                <Quote size={24} className="text-amber-400 mb-3 opacity-70" />
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed italic mb-6">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#0F766E] text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#0F1E35]">{item.name}</h4>
                  <p className="text-[11px] text-gray-400">{item.route}</p>
                  <div className="flex items-center gap-0.5 mt-0.5">
                    {[...Array(item.rating)].map((_, idx) => (
                      <Star key={idx} size={11} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}