export default function JsonLd() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'TaxiService',
    '@id': 'https://aadi-tour-travels.vercel.app/#business',
    name: 'Aadi Tour & Travels',
    alternateName: ['Aadi Taxi Service Dehradun', 'Aadi Tour and Travels', 'Aadi Cabs Dehradun'],
    url: 'https://aadi-tour-travels.vercel.app',
    logo: 'https://aadi-tour-travels.vercel.app/images/delhi.jpg',
    image: [
      'https://aadi-tour-travels.vercel.app/images/kedarnath.jpg',
      'https://aadi-tour-travels.vercel.app/images/mussoorie.jpg',
      'https://aadi-tour-travels.vercel.app/images/haridwar.jpg',
      'https://aadi-tour-travels.vercel.app/images/saharanpur.jpg'
    ],
    description: 'Best taxi and cab service in Dehradun offering reliable outstation cabs, Chardham Yatra packages, Mussoorie sightseeing, Jolly Grant airport transfers, and Delhi NCR drops 24/7.',
    telephone: '+917819909454',
    email: 'aaditourandtravels@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'Cash, Credit Card, UPI, Google Pay, PhonePe, Paytm, Net Banking',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Near Railway Station & Clock Tower',
      addressLocality: 'Dehradun',
      addressRegion: 'Uttarakhand',
      postalCode: '248001',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 30.3165,
      longitude: 78.0322
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        opens: '00:00',
        closes: '23:59'
      }
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '486',
      bestRating: '5',
      worstRating: '1'
    },
    areaServed: [
      { '@type': 'City', name: 'Dehradun' },
      { '@type': 'City', name: 'Mussoorie' },
      { '@type': 'City', name: 'Haridwar' },
      { '@type': 'City', name: 'Rishikesh' },
      { '@type': 'City', name: 'Saharanpur' },
      { '@type': 'City', name: 'Delhi' },
      { '@type': 'City', name: 'Gurgaon' },
      { '@type': 'City', name: 'Noida' },
      { '@type': 'City', name: 'Chandigarh' },
      { '@type': 'AdministrativeArea', name: 'Uttarakhand' },
      { '@type': 'TouristAttraction', name: 'Kedarnath' },
      { '@type': 'TouristAttraction', name: 'Badrinath' }
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taxi and Tour Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dehradun to Delhi Taxi',
            description: 'One-way and round-trip taxi service from Dehradun to New Delhi, Gurgaon, and IGI Airport.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chardham Yatra Taxi Package',
            description: 'Complete pilgrimage cab package for Kedarnath, Badrinath, Gangotri, and Yamunotri.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dehradun to Mussoorie Cab',
            description: 'Sightseeing and one-way cab service for Queen of Hills Mussoorie and Dhanaulti.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dehradun Airport Taxi (Jolly Grant)',
            description: 'Guaranteed on-time airport pickup and drop taxi service in Dehradun.'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dehradun to Saharanpur Taxi',
            description: 'Fast, comfortable highway cab service to Saharanpur city and railway station.'
          }
        }
      ]
    }
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How can I book a taxi with Aadi Tour & Travels in Dehradun?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book a taxi instantly by calling our 24/7 hotline at +91 78199 09454, booking on WhatsApp, or filling out the quick online booking form on our website.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are the charges for Dehradun to Delhi taxi?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Dehradun to Delhi taxi fare starts from ₹2,799 for AC Sedan (Swift Dzire/Etios) and ₹3,999 for SUV (Ertiga/Innova) with transparent pricing and no hidden charges.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide Chardham Yatra taxi packages from Dehradun and Haridwar?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide customized Chardham Yatra (4 Dham & Do Dham) cab packages covering Kedarnath, Badrinath, Gangotri, and Yamunotri with expert mountain drivers and all-inclusive toll/fuel.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Jolly Grant Airport (Dehradun) pickup service available 24/7?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide 24/7 guaranteed on-time Jolly Grant Airport taxi pickup and drop service with live flight tracking assistance.'
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}