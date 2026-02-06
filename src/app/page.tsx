import { COMPANY, SEO } from "@/data/company";
import Hero from "@/components/Hero";
import Proof from "@/components/Proof";
import Work from "@/components/Work";
import Culture from "@/components/Culture";
import Growth from "@/components/Growth";
import QuoteBand from "@/components/QuoteBand";
import RealEstate from "@/components/RealEstate";
import Tracks from "@/components/Tracks";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// JSON-LD: Organization / LocalBusiness
function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    description: SEO.description,
    url: COMPANY.siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "須坂市",
      addressRegion: "長野県",
      addressCountry: "JP",
    },
    telephone: COMPANY.contactPhone,
    email: COMPANY.contactEmail,
    sameAs: [
      COMPANY.socialLinks.instagram,
      COMPANY.socialLinks.youtube,
    ],
  };

  // JobPosting 雛形（募集要項の真偽が不明なため、本番では正確な値に差し替えること）
  // const jobPostingSchema = {
  //   "@context": "https://schema.org",
  //   "@type": "JobPosting",
  //   title: "施工スタッフ / 営業（中途・新卒）",
  //   description: "建材販売・建築工事・不動産事業を手がける堀内建材での施工・営業職",
  //   datePosted: "2025-01-01",
  //   validThrough: "2025-12-31",
  //   employmentType: "FULL_TIME",
  //   hiringOrganization: {
  //     "@type": "Organization",
  //     name: COMPANY.name,
  //     sameAs: COMPANY.siteUrl,
  //   },
  //   jobLocation: {
  //     "@type": "Place",
  //     address: {
  //       "@type": "PostalAddress",
  //       addressLocality: "須坂市",
  //       addressRegion: "長野県",
  //       addressCountry: "JP",
  //     },
  //   },
  //   // baseSalary, qualifications 等は事実確認後に追加
  // };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}

export default function Page() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Proof />
      <Work />
      <Culture />
      <QuoteBand />
      <Growth />
      <RealEstate />
      <Tracks />
      <FAQ />
      <ContactSection />
      <Footer />
    </>
  );
}
