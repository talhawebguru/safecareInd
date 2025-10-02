import Hero from "./components/home/Hero";
import KeyStrength from "./components/home/KeyStrength";
import Manufacturing from "./components/home/Manufacturing";
import News from "./components/home/News";
import NewsLetter from "./components/home/NewsLetter";
import OurClients from "./components/home/OurClients";
import OurHistory from "./components/home/OurHistory";
import OurMission from "./components/home/OurMission";
import ProductCategories from "./components/home/ProductCategories";
import Quality from "./components/home/Quality";
import WhoWeAre from "./components/home/WhoWeAre";
import { fetchHomePage } from "./services/api";

// Generate metadata from API
export async function generateMetadata() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // Static default values
  const defaults = {
    title: "SafeCare Medical Industries | Medical Gloves, Face Masks, Dental & Pharma Packaging UAE",
    description: "SafeCare Medical Industries is a leading manufacturer and supplier of high-quality medical gloves, face masks, dental products, and pharma packaging solutions in the UAE.",
    keywords: "safecare medical, medical supplies, medical gloves, face masks, dental products, pharma packaging, UAE medical manufacturer",
    siteName: "SafeCare Medical Industries",
    twitterHandle: "@safecaremedical",
  };

  try {
    const homeData = await fetchHomePage();
    const seo = homeData?.completeHome?.seo;

    // Get dynamic values from Strapi (only 4 fields)
    const metaTitle = seo?.metaTitle || defaults.title;
    const metaDescription = seo?.metaDescription || defaults.description;
    const keywords = seo?.keywords || defaults.keywords;
    const ogImageUrl = seo?.OGimg?.url 
      ? apiUrl + seo.OGimg.url 
      : `${baseUrl}/images/og-default.jpg`;

    return {
      // Basic SEO (from Strapi)
      title: metaTitle,
      description: metaDescription,
      keywords: keywords,
      
      // Robots (static - always allow indexing)
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

      // Canonical URL (static - home page)
      alternates: {
        canonical: baseUrl,
      },

      // Open Graph (static + dynamic title/description/image)
      openGraph: {
        type: 'website',
        title: metaTitle,
        description: metaDescription,
        url: baseUrl,
        siteName: defaults.siteName,
        locale: 'en_AE',
        images: [{
          url: ogImageUrl,
          width: seo?.OGimg?.width || 1200,
          height: seo?.OGimg?.height || 630,
          alt: seo?.OGimg?.alternativeText || metaTitle,
        }],
      },

      // Twitter Card (static + dynamic title/description/image)
      twitter: {
        card: 'summary_large_image',
        title: metaTitle,
        description: metaDescription,
        site: defaults.twitterHandle,
        creator: defaults.twitterHandle,
        images: [ogImageUrl],
      },

      // Additional metadata (static)
      category: 'Medical Supplies',
      classification: 'Healthcare & Medical Products',
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    
    // Return comprehensive default metadata if API fails
    return {
      title: defaults.title,
      description: defaults.description,
      keywords: defaults.keywords,
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
      alternates: {
        canonical: baseUrl,
      },
      openGraph: {
        type: 'website',
        title: defaults.title,
        description: defaults.description,
        url: baseUrl,
        siteName: defaults.siteName,
        locale: 'en_AE',
        images: [{
          url: `${baseUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: defaults.title,
        }],
      },
      twitter: {
        card: 'summary_large_image',
        title: defaults.title,
        description: defaults.description,
        site: defaults.twitterHandle,
        creator: defaults.twitterHandle,
        images: [`${baseUrl}/images/og-default.jpg`],
      },
      category: 'Medical Supplies',
      classification: 'Healthcare & Medical Products',
    };
  }
}

export default async function Home() {
  let homeData = null;

  try {
    homeData = await fetchHomePage();
  } catch (error) {
    console.error("Error fetching home page data:", error);
  }

  return (
    <>
      <main>
        <Hero heroData={homeData?.completeHome?.heroSlider} />
        <WhoWeAre />
        <OurMission />
        <OurHistory />
        <ProductCategories />
        <OurClients />
        <Manufacturing />
        {/* <KeyStrength /> */}
        <News />
        <Quality />
        <NewsLetter />
      </main>
    </>
  );
}
