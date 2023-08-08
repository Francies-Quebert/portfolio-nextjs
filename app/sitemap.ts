import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://portfolio-francies-quebert.vercel.app/',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-francies-quebert.vercel.app/about',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-francies-quebert.vercel.app/resume',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-francies-quebert.vercel.app/blog',
      lastModified: new Date(),
    },
    {
      url: 'https://portfolio-francies-quebert.vercel.app/contact',
      lastModified: new Date(),
    },
  ]
}