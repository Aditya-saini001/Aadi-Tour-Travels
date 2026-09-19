const teamMembers = [
  {
    name: 'Aditya Saini',
    role: 'Founder & CEO',
    bio: 'Aditya started Aadi Tour & Travels with a vision to offer the most reliable, transparent, and comfortable taxi service across Uttarakhand and North India.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Anjali Sharma',
    role: 'Operations Manager',
    bio: 'Anjali ensures smooth day-to-day fleet dispatches, flight tracking for airport transfers, and prompt 24/7 customer support.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Vikram Singh',
    role: 'Head of Customer Relations',
    bio: 'Vikram is passionate about delivering 5-star pilgrimage experiences for Chardham Yatra and customized hill tour packages.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop',
  },
]

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#0F1E35]">
            Meet Our <span className="text-[#0D9488]">Expert Team</span>
          </h2>
          <p className="text-gray-500 text-xs md:text-sm mt-2">
            The dedicated professionals behind Aadi Tour &amp; Travels ensuring every passenger rides with complete peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all flex flex-col group"
            >
              <div className="h-64 w-full overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#0F1E35] mb-1">{member.name}</h3>
                  <p className="text-xs font-bold text-amber-600 mb-3">{member.role}</p>
                  <p className="text-xs text-gray-500 leading-relaxed">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}