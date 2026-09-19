'use client'
import { useState, useEffect } from 'react'
import { X, Send, User, Phone, MapPin, Calendar, Users, Car, MessageSquare, Clock } from 'lucide-react'

export default function BookingModal({ isOpen, onClose, defaultService = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: defaultService || '',
    datetime: '',
    tripType: 'One-Way Drop',
    passengers: '2',
    message: '',
  })

  useEffect(() => {
    if (defaultService) {
      setForm((prev) => ({ ...prev, destination: defaultService }))
    }
  }, [defaultService])

  if (!isOpen) return null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const msg =
      `🚖 *New Taxi / Tour Booking Request*\n` +
      `*Aadi Tour & Travels Dehradun*\n\n` +
      `👤 *Full Name:* ${form.name}\n` +
      `📞 *Mobile Number:* ${form.phone}\n` +
      `📍 *Pick-Up Location:* ${form.pickup}\n` +
      `🏁 *Destination / Package:* ${form.destination}\n` +
      `📅 *Pickup Date & Time:* ${form.datetime}\n` +
      `🔄 *Trip Type:* ${form.tripType}\n` +
      `👥 *Passengers:* ${form.passengers}\n` +
      (form.message ? `📝 *Vehicle Preference / Note:* ${form.message}\n` : '') +
      `\n_Please confirm availability and share best fare quote._`

    const url = `https://wa.me/917819909454?text=${encodeURIComponent(msg)}`
    window.open(url, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl relative border border-amber-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-navy rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <X size={22} />
        </button>

        <div className="text-center mb-6">
          <span className="inline-block bg-amber-100 text-amber-800 font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider mb-2">
            Instant Booking
          </span>
          <h2 className="text-2xl font-black text-[#0F1E35]">
            Book Your Taxi &amp; Tour Package
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Fill the details below — your request goes directly to our 24/7 WhatsApp!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Your Mobile Number *</label>
              <input
                type="tel"
                name="phone"
                placeholder="10-digit mobile number"
                required
                value={form.phone}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
          </div>

          {/* Pickup & Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Pick-Up Location *</label>
              <input
                type="text"
                name="pickup"
                placeholder="e.g. Dehradun Railway Station / Airport"
                required
                value={form.pickup}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Destination / Package *</label>
              <input
                type="text"
                name="destination"
                placeholder="e.g. Mussoorie / Delhi / Haridwar / Chardham"
                required
                value={form.destination}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 bg-amber-50/50"
              />
            </div>
          </div>

          {/* Pickup Date & Time, Trip Type, Passengers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Pickup Date &amp; Time *</label>
              <input
                type="datetime-local"
                name="datetime"
                required
                value={form.datetime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-gray-700"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Trip Type</label>
              <select
                name="tripType"
                value={form.tripType}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-gray-700"
              >
                <option value="One-Way Drop">One-Way Drop</option>
                <option value="Round-Trip">Round-Trip</option>
                <option value="Local Sightseeing (8hr/80km)">Local Sightseeing</option>
                <option value="Multi-Day Chardham / Tour">Multi-Day Tour</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">Passengers</label>
              <select
                name="passengers"
                value={form.passengers}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 text-gray-700"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 12, 16, 26].map((n) => (
                  <option key={n} value={n}>
                    {n} {n > 1 ? 'Passengers' : 'Passenger'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Vehicle Preference Message */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-1">Your Message / Vehicle Preference</label>
            <textarea
              name="message"
              rows={2}
              placeholder="Any specific vehicle requirement (e.g. Sedan, Ertiga, Innova Crysta, Tempo Traveller)..."
              value={form.message}
              onChange={handleChange}
              className="w-full px-3.5 py-2 border border-gray-300 rounded-lg text-xs focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#16A34A] hover:bg-[#15803D] text-white font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.01] shadow-lg shadow-green-600/30 text-sm"
          >
            <Send size={16} />
            <span>Send Booking Request on WhatsApp</span>
          </button>
        </form>
      </div>
    </div>
  )
}