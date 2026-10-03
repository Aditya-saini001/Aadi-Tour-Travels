import { Inter } from 'next/font/google'
import './globals.css'
import FloatingButtons from '@/components/FloatingButtons'
import JsonLd from '@/components/JsonLd'
import AnimationObserver from '@/components/AnimationObserver'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://aadi-tour-travels.vercel.app'),
  title: {
    default: 'Shivdarshan Tour & Travels | Best Taxi Service in Dehradun & Uttarakhand',
    template: '%s | Shivdarshan Tour & Travels Dehradun',
  },
  description:
    'Best taxi service in Dehradun! Book affordable outstation cabs, Chardham Yatra packages (Kedarnath, Badrinath), Mussoorie sightseeing, Jolly Grant airport transfers, Saharanpur & Delhi NCR cabs 24/7. Call: +91 78199 09454.',
  keywords: [
    'shivdarshan tour and travels',
    'shivdarshan taxi service',
    'taxi service in dehradun',
    'cab service dehradun',
    'best taxi in dehradun',
    'dehradun taxi',
    'dehradun to delhi taxi',
    'dehradun to delhi airport cab',
    'dehradun to mussoorie taxi',
    'dehradun to saharanpur taxi',
    'dehradun to haridwar taxi',
    'dehradun to rishikesh cab',
    'dehradun to chandigarh taxi',
    'chardham yatra taxi package',
    'kedarnath taxi from dehradun',
    'badrinath cab service',
    'jolly grant airport taxi',
    'dehradun airport pickup drop',
    'outstation cab dehradun',
    'innova crysta rental dehradun',
    'tempo traveller in dehradun'
  ],
  authors: [{ name: 'Shivdarshan Tour & Travels', url: 'https://aadi-tour-travels.vercel.app' }],
  creator: 'Shivdarshan Tour & Travels',
  publisher: 'Shivdarshan Tour & Travels',
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Shivdarshan Tour & Travels | Best Taxi & Tour Service in Dehradun',
    description:
      'Fast, reliable, and affordable taxi services in Dehradun. 24/7 available for Chardham Yatra, Mussoorie, Delhi Airport, Haridwar, Rishikesh & Saharanpur. Call +91 78199 09454.',
    url: 'https://aadi-tour-travels.vercel.app',
    siteName: 'Shivdarshan Tour & Travels Dehradun',
    images: [
      {
        url: '/images/logo.jpg',
        width: 1024,
        height: 1024,
        alt: 'Shivdarshan Tour & Travels Logo',
      },
      {
        url: '/images/kedarnath.jpg',
        width: 1200,
        height: 630,
        alt: 'Shivdarshan Tour & Travels Kedarnath Yatra',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shivdarshan Tour & Travels | Best Taxi Service in Dehradun',
    description:
      'Book 24/7 Dehradun cabs for Chardham Yatra, Delhi Airport, Mussoorie, Saharanpur & Haridwar. Call +91 78199 09454.',
    images: ['/images/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'geo.region': 'IN-UT',
    'geo.placename': 'Dehradun',
    'geo.position': '30.3165;78.0322',
    'ICBM': '30.3165, 78.0322',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 min-h-screen flex flex-col justify-between`}>
        <JsonLd />
        <AnimationObserver />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}