import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { WhyMe } from "@/components/sections/WhyMe";
import { Contact } from "@/components/sections/Contact";
import { SceneAtmosphere } from "@/components/effects/SceneAtmosphere";
import { siteConfig } from "@/data/portfolio";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.title,
  description: siteConfig.description,
  url: "https://akhlaqkafel.dev",
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    addressRegion: "Jammu & Kashmir",
    addressCountry: "IN",
  },
  sameAs: [siteConfig.github, siteConfig.linkedin],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SceneAtmosphere />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Skills />
        <WhyMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
