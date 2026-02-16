import type { Metadata } from "next";
import { SITE } from "./site.config";

type Params = {
    title: string;
    description: string;
    path: string;
    image?: string;
    keywords?: string[];
};

export function createMetadata({
    title,
    description,
    path,
    image,
    keywords,
}: Params): Metadata {
    const url = `${SITE.domain}${path}`;

    return {
        title,
        description,
        keywords,

        alternates: {
            canonical: url,
        },

        openGraph: {
            title,
            description,
            url,
            images: image
                ? [{ url: image, width: 1200, height: 630 }]
                : undefined,
        },

        twitter: {
            title,
            description,
            images: image ? [image] : undefined,
        },
    };
}
