import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { Stats } from "@/components/home/Stats";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ExpertiseGrid } from "@/components/home/ExpertiseGrid";
import { ToolsPreview } from "@/components/home/ToolsPreview";
import { ArticlesPreview } from "@/components/home/ArticlesPreview";
import { KnowledgePreview } from "@/components/home/KnowledgePreview";
import { SpeakingCTA } from "@/components/home/SpeakingCTA";
import { Testimonials } from "@/components/home/Testimonials";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Stats />
      <AboutPreview />
      <ExpertiseGrid />
      <ToolsPreview />
      <ArticlesPreview />
      <KnowledgePreview />
      <SpeakingCTA />
      <Testimonials />
    </>
  );
}
