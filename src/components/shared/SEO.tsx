import React from 'react';
import { Helmet } from 'react-helmet-async';
import { siteConfig } from '@/constants/site.config';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    type?: 'website' | 'article';
    articleData?: {
        publishedTime: string;
        modifiedTime: string;
        author: string;
        section: string;
        tags: string[];
    };
    canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
    title,
    description = siteConfig.seo.description,
    image = "https://drrashmisharma.in/og-image.jpg", // Default to main site since we don't have a specific OG image yet
    type = 'website',
    articleData,
    canonicalUrl
}) => {
    const siteUrl = siteConfig.seo.url;
    const fullTitle = `${title} | ${siteConfig.brandName}`;
    const fullCanonical = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '');

    return (
        <Helmet>
            {/* Basic */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={fullCanonical} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullCanonical} />
            <meta property="og:image" content={image} />
            <meta property="og:site_name" content={siteConfig.brandName} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />

            {/* Article Schema */}
            {type === 'article' && articleData && (
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": title,
                        "image": [image],
                        "datePublished": articleData.publishedTime,
                        "dateModified": articleData.modifiedTime,
                        "author": [{
                            "@type": "Person",
                            "name": articleData.author,
                            "url": `${siteUrl}/experts` // Or author specific URL
                        }],
                        "publisher": {
                            "@type": "Organization",
                            "name": siteConfig.brandName,
                            "logo": {
                                "@type": "ImageObject",
                                "url": `${siteUrl}/logo.png`
                            }
                        },
                        "description": description,
                        "articleSection": articleData.section,
                        "keywords": articleData.tags.join(", ")
                    })}
                </script>
            )}
        </Helmet>
    );
};
