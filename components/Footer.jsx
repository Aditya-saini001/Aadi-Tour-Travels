import { Phone, Mail, MapPin, Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#0A1424] text-cream/80 border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 p-0.5 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0F1E35] flex items-center justify-center">
                  <span className="text-xs font-black text-amber-400">AADI</span>
                </div>
              </div>
              <div>
                <h3 className="text-white font-black text-lg">Aadi Tour &amp; Travels</h3>
                <p className="text-amber-400 text-xs font-semibold">Taxi Service Dehradun, Uttarakhand</p>
              </div>
            </div>
            <p className="text-xs text-cream/70 leading-relaxed mb-6">
              Your most trusted travel partner in Dehradun. Providing safe, reliable, and comfortable taxi services for Chardham Yatra, airport transfers, hill stations, and outstation trips 24/7.
            </p>

            {/* Social Media Icons */}
            <div>
              <p className="text-xs font-bold text-white uppercase tracking-wider mb-3">Follow Us on Social Media</p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter X"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white border border-white/20 shadow-md hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-[#FF0000] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>

                {/* WhatsApp Direct */}
                <a
                  href="https://wa.me/917819909454"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md hover:scale-110 transition-transform"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Routes */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs text-cream/70">
              <li>• Dehradun to Mussoorie / Dhanaulti Taxi</li>
              <li>• Dehradun to Delhi / NCR / Airport Taxi</li>
              <li>• Dehradun to Saharanpur Taxi</li>
              <li>• Dehradun to Haridwar &amp; Rishikesh Taxi</li>
              <li>• Dehradun to Chandigarh / Mohali Taxi</li>
              <li>• Complete Chardham Yatra (Kedarnath &amp; Badrinath)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-amber-400 pl-2">
              Contact Us
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Dehradun, Uttarakhand — 248001</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={15} className="text-amber-400 flex-shrink-0" />
                <a href="tel:7819909454" className="text-white font-bold hover:text-amber-400 transition-colors">
                  +91 78199 09454
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="text-amber-400 flex-shrink-0" />
                <a href="mailto:aaditourandtravels@gmail.com" className="text-white hover:text-amber-400 transition-colors">
                  aaditourandtravels@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-5 p-3.5 bg-white/5 rounded-xl border border-white/10">
              <p className="text-[11px] text-amber-400 font-bold uppercase">24/7 Booking Helpline</p>
              <a href="tel:7819909454" className="text-base font-black text-white hover:text-amber-400 transition-colors">
                +91 78199 09454
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/50 gap-2">
          <span>&copy; 2026 Aadi Tour &amp; Travels. All rights reserved.</span>
          <span>Designed with care for seamless Uttarakhand travel.</span>
        </div>
      </div>
    </footer>
  )
}