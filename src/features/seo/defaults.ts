import type { Metadata } from "next";
import { SITE } from "./site.config";

export function buildRootMetadata(): Metadata {
    const socialImage = `${SITE.domain}/seo/social-preview.png`;

    return {
        metadataBase: new URL(SITE.domain),

        title: {
            default: SITE.defaultTitle,
            template: `%s | ${SITE.name}`,
        },

        description: SITE.defaultDescription,
        keywords: SITE.defaultKeywords,

        openGraph: {
            type: "website",
            locale: "en_EN",
            siteName: SITE.name,
            title: SITE.defaultTitle,
            description: SITE.defaultDescription,
            url: SITE.domain,
            images: [
                {
                    url: socialImage,
                    width: 1200,
                    height: 630,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: SITE.defaultTitle,
            description: SITE.defaultDescription,
            images: [socialImage],
        },

        robots: {
            index: true,
            follow: true,
        },
    };
}
