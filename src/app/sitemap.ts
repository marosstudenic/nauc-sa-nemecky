import { MetadataRoute } from 'next'
import { categories } from './pre-koho-su-kurzy/categories'

interface SitemapEntry {
    url: string;
    lastModified: Date;
    changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority: number;
}

export default function sitemap(): MetadataRoute.Sitemap {
    const categoryUrls: SitemapEntry[] = categories.map(category => ({
        url: process.env.NEXT_PUBLIC_HOST_URL + '/pre-koho-su-kurzy/' + category.id,
        lastModified: new Date(),
        changeFrequency: 'weekly' as 'weekly',
        priority: 0.7,
    }))
    return [
        {
            url: process.env.NEXT_PUBLIC_HOST_URL ?? 'https://nemecky-jazyk-online.sk',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: process.env.NEXT_PUBLIC_HOST_URL + '/cennik',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: process.env.NEXT_PUBLIC_HOST_URL + '/dohodnut-prvu-hodinu',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        {
            url: process.env.NEXT_PUBLIC_HOST_URL + '/pre-koho-su-kurzy',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.5,
        },
        ...categoryUrls
    ]
}