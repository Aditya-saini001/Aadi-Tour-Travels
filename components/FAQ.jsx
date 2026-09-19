'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How can I book a taxi with Aadi Tour & Travels?',
    a: 'You can book instantly by clicking any "Book Now" button on our website (which connects directly to WhatsApp), calling our 24/7 hotline at +91 78199 09454, or filling out the quick booking form.',
  },
  {
    q: 'Do you provide one-way and round-trip outstation cabs?',
    a: 'Yes! We provide both one-way and round-trip taxi services to Saharanpur, Delhi NCR, Chandigarh, Gurgaon, Haridwar, Rishikesh, Mussoorie, and all across North India with zero return charge on selected routes.',
  },
  {
    q: 'What is included in the Chardham Yatra package?',
    a: 'Our Chardham Yatra packages include a dedicated commercial vehicle (Sedan, Ertiga, Innova Crysta, or Tempo Traveller), experienced mountain driver, fuel, toll taxes, state parking, and driver allowance.',
  },
  {
    q: 'Are your drivers experienced on mountain hill roads?',
    a: 'All our chauffeurs have 10+ years of active experience driving in Uttarakhand mountain terrains including Mussoorie, Kedarnath, Badrinath, Chopta, and Dhanaulti. Safety is our top priority.',
  },
  {
    q: 'Is Jolly Grant Airport (Dehradun) pickup guaranteed on-time?',
    a: 'Yes, we track your flight timing in real-time. Even if your flight is delayed or arrives early, your driver will be waiting outside the terminal with a name board.',
  },
  {
    q: 'What are the payment options accepted?',
    a: 'We accept Cash, UPI (Google Pay, PhonePe, Paytm), and Net Banking. Flexible payment with a small booking token is supported for multi-day tours.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <span className="text-gold text-xs font-bold uppercase tracking-widest bg-gold/10 px-3.5 py-1.5 rounded-full border border-gold/20">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mt-3 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-xs">Everything you need to know about our taxi & tour services in Dehradun.</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                className="w-full flex items-center justify-between p-4 md:p-5 text-left gap-4 font-bold text-navy text-sm md:text-base hover:text-gold transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gold transition-transform duration-200 flex-shrink-0 ${
                    open === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {open === idx && (
                <div className="px-5 pb-5 text-gray-600 text-xs md:text-sm leading-relaxed border-t border-gray-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}