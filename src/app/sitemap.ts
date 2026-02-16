import type { MetadataRoute } from 'next'

const SITE_URL = 'https://peridotvault.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return getBasicSitemap()
}

function getBasicSitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: SITE_URL,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/roadmap`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/ai`,
            lastModified: new Date(),
        },
        {
            url: `${SITE_URL}/peri`,
            lastModified: new Date(),
        },
    ]
}
