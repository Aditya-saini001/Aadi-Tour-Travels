'use client'
import Navbar from '@/components/Navbar'
import BookingForm from '@/components/BookingForm'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, MessageCircle, Shield } from 'lucide-react'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Banner */}
        <section className="bg-[#0F1E35] text-white py-16 text-center relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <span className="text-amber-400 text-xs font-bold uppercase tracking-widest bg-amber-400/10 px-3.5 py-1.5 rounded-full border border-amber-400/20">
              Get in Touch 24/7
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black mt-3 mb-3">
              Contact Us &amp; <span className="text-amber-400">Book Your Ride</span>
            </h1>
            <p className="text-cream/80 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
              Have questions about taxi fares or custom Uttarakhand tour itineraries? Call us, message on WhatsApp, or submit the booking form below!
            </p>
          </div>
        </section>

        {/* Form + Contact Info Section */}
        <section className="py-16 bg-cream/30">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Form */}
              <div className="lg:col-span-7">
                <BookingForm />
              </div>

              {/* Right Details Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 space-y-6">
                  <h3 className="text-xl font-black text-[#0F1E35] border-b border-gray-100 pb-3">
                    Direct Contact Details
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
                        <Phone size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">24/7 Call Hotline</p>
                        <a href="tel:7819909454" className="text-base font-black text-[#0F1E35] hover:text-amber-600 transition-colors">
                          +91 78199 09454
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0">
                        <MessageCircle size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">WhatsApp Direct</p>
                        <a href="https://wa.me/917819909454" target="_blank" rel="noopener noreferrer" className="text-base font-black text-[#0F1E35] hover:text-green-600 transition-colors">
                          +91 78199 09454
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                        <Mail size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Email Support</p>
                        <a href="mailto:aaditourandtravels@gmail.com" className="text-sm font-bold text-[#0F1E35] hover:text-blue-600 transition-colors">
                          aaditourandtravels@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center flex-shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Office Address</p>
                        <p className="text-xs font-semibold text-gray-700">
                          Dehradun, Uttarakhand — 248001
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0">
                        <Clock size={18} />
                      </div>
                      <div>
                        <p className="text-[11px] text-gray-400 uppercase font-bold">Operating Hours</p>
                        <p className="text-xs font-semibold text-gray-700">
                          Open 24 Hours • 7 Days a Week • 365 Days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Assistance Box */}
                <div className="bg-[#0F1E35] text-white rounded-2xl p-6 shadow-md border border-white/10 space-y-3">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
                    <Shield size={16} />
                    <span>Instant Booking Confirmation</span>
                  </div>
                  <h4 className="text-lg font-black">Need a cab urgently in 15 minutes?</h4>
                  <p className="text-xs text-cream/70">
                    Call our dispatch supervisor directly for emergency pickups at Dehradun Railway Station or Jolly Grant Airport.
                  </p>
                  <a
                    href="tel:7819909454"
                    className="inline-flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white font-black py-2.5 rounded-xl text-xs shadow-md transition-colors"
                  >
                    <Phone size={14} />
                    <span>Call Helpline: +91 78199 09454</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}