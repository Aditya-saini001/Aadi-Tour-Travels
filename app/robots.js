export default function robots() {
  const baseUrl = 'https://aadi-tour-travels.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}