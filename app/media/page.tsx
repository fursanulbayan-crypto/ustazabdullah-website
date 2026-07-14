import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/ui/PageHeader";
import { ComingSoonGrid } from "@/components/ui/ComingSoonGrid";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = { title: "Media", description: "Podcast appearances, interviews, videos, news mentions and press kit." };

export default function MediaPage() {
  return (
    <div>
      <PageHeader eyebrow="Media" title="Press and media" description="Podcast appearances, interviews, video features and news coverage, with a downloadable press kit." />

      <div className="mx-auto max-w-3xl px-6 py-14">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <Image
              src="/images/media-moontv.jpg"
              alt="Abubakar, Abdulahi Olayinka speaking on Moon TV"
              width={1537}
              height={1023}
              className="w-full object-cover"
            />
          </div>
          <p className="mt-3 text-sm text-ink/55 dark:text-beige-100/55">Television appearance, Moon TV.</p>
        </Reveal>
      </div>

      <ComingSoonGrid
        items={[
          { title: "Podcast Appearances", detail: "Episodes featuring interviews and panel discussions." },
          { title: "Interviews", detail: "Written and video interviews with media outlets." },
          { title: "Press Kit", detail: "Biography, headshots and logo assets for media use." },
        ]}
      />
    </div>
  );
}
