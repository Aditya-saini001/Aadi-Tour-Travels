'use client'
import { X } from 'lucide-react'

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative border border-gray-100">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-6">
          <span className="text-gold text-xs font-bold uppercase tracking-widest">
            Legal &amp; Policies
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy mt-1">
            Terms &amp; Conditions
          </h2>
          <p className="text-gray-400 text-xs mt-1">Shivdarshan Tour &amp; Travels</p>
        </div>

        <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
          <section>
            <h3 className="font-bold text-navy text-base mb-1">1. Booking Policy</h3>
            <p>
              All bookings with Shivdarshan Tour &amp; Travels are confirmed only upon receiving advance confirmation via WhatsApp or phone call.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy text-base mb-1">2. Payment Terms</h3>
            <p>
              We accept cash, UPI, and online payments. Pricing is inclusive of fuel and driver allowance unless stated otherwise. All prices are in Indian Rupees (INR).
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy text-base mb-1">3. Cancellation Policy</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Cancellation 24h+ before travel: Full refund / cancellation without fee.</li>
              <li>Cancellation 12–24h before travel: 50% cancellation fee.</li>
              <li>Cancellation less than 12h: Non-refundable for arranged vehicles.</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold text-navy text-base mb-1">4. Mountain Travel Liability</h3>
            <p>
              Shivdarshan Tour &amp; Travels provides verified mountain vehicles and chauffeurs, but is not liable for delays caused by weather, road blocks, landslides, or natural calamities.
            </p>
          </section>

          <section>
            <h3 className="font-bold text-navy text-base mb-1">5. Contact &amp; Support</h3>
            <p>
              For any queries, please call or WhatsApp us at:{' '}
              <a href="tel:7819909454" className="text-amber-600 font-bold hover:underline">
                +91 78199 09454
              </a>
            </p>
          </section>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={onClose}
            className="bg-navy hover:bg-navy-light text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
