import { Metadata } from "next";

const baseUrl = "https://annazheng.vercel.app/";

export function createMetadata({
    title,
    description,
    keywords = [],
    image = "/preview.jpg",
    path = "",
} : {
    title: string;
    description: string;
    keywords?: string[];
    image?: string;
    path?: string;
}) : Metadata {
    const fullUrl = `${baseUrl}${path}`;

    return {
        title,
        description,
        keywords: [
            "Anna Zheng",
            "Software Engineer",
            "Web Development",
            "Full-stack",
            "Game Development",
            "University of Central Florida",
            "Univ. of Central Florida",
            "UCF",
            "Society of Hispanic Professional Engineers",
            "SHPE",
            "SHPE UCF",
            "Knight Hacks",
            "Computer Science",
            ...keywords,
        ],
        authors: [{ name: "Anna Zheng" }],
        icons: {
            icon: "./favicon.ico",
        },
        openGraph: {
            type: "website",
            locale: "en_US",
            title,
            description,
            url: fullUrl,
            siteName: "Anna Zheng Portfolio",
            images: [
              {
                url: image,
                width: 1200,
                height: 630,
                alt: title,
              },
            ],
        },
        metadataBase: new URL(baseUrl),
    };
}