import { Inter } from 'next/font/google'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Aadi Tour & Travels | Best Taxi Service in Dehradun & Uttarakhand',
  description:
    'Aadi Tour & Travels offers fast, reliable, and affordable taxi services in Dehradun, Chardham Yatra, Mussoorie, Haridwar, Rishikesh, Saharanpur, and Delhi Airport transfers. Book 24/7 on WhatsApp.',
  keywords:
    'taxi service dehradun, dehradun cab, chardham yatra taxi, dehradun to delhi taxi, dehradun to saharanpur cab, aadi tour travels, best cab in dehradun',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col justify-between`}>
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}