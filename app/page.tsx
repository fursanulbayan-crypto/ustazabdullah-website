import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { Stats } from "@/components/home/Stats";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";
import { KnowledgePreview } from "@/components/home/KnowledgePreview";
import { SpeakingCTA } from "@/components/home/SpeakingCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutPreview } from "@/components/home/AboutPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Stats />
      <AboutPreview />
      <ExpertiseGrid />
      <ArticlesPreview />
      <KnowledgePreview />
      <SpeakingCTA />
      <Testimonials />
    </>
  );
}
