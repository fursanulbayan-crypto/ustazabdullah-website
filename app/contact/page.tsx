import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Abubakar, Abdulahi Olayinka for speaking, research collaboration or general enquiries.",
};

export default function ContactPage() {
  const mapQuery = encodeURIComponent(site.address);

  return (
    <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
      <Reveal>
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="For speaking invitations, research collaboration, teaching enquiries, or press requests."
        />

        <div className="mt-8 space-y-4 text-sm text-ink/70 dark:text-beige-100/70">
          <div>
            <p className="mb-1 flex items-center gap-2 font-medium text-ink dark:text-beige-100">
              <Mail size={16} className="text-emerald-800 dark:text-gold-300" /> General &amp; Speaking
            </p>
            <a href={`mailto:${site.email}`} className="ml-6 hover:text-emerald-800 dark:hover:text-gold-300">{site.email}</a>
          </div>
          <div>
            <p className="mb-1 flex items-center gap-2 font-medium text-ink dark:text-beige-100">
              <Mail size={16} className="text-emerald-800 dark:text-gold-300" /> Mosque &amp; Markaz (School)
            </p>
            <a href={`mailto:${site.mosqueEmail}`} className="ml-6 hover:text-emerald-800 dark:hover:text-gold-300">{site.mosqueEmail}</a>
          </div>
          <div>
            <p className="mb-1 flex items-center gap-2 font-medium text-ink dark:text-beige-100">
              <Phone size={16} className="text-emerald-800 dark:text-gold-300" /> Phone
            </p>
            <p className="ml-6">{site.phoneDisplay} (direct) · {site.mosquePhoneDisplay} (mosque / Markaz)</p>
          </div>
          <div>
            <p className="mb-1 flex items-center gap-2 font-medium text-ink dark:text-beige-100">
              <MapPin size={16} className="text-emerald-800 dark:text-gold-300" /> Address
            </p>
            <p className="ml-6">{site.address}</p>
          </div>
        </div>

        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90"
        >
          <MessageCircle size={16} /> Message on WhatsApp
        </a>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
          <iframe
            title="Al-Mafaazat Central Mosque location"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            width="100%"
            height="260"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="mt-2 text-xs text-ink/45 dark:text-beige-100/45">
          Map shown from the address text. Replace with a pinned Google Maps Embed API location for a precise marker before launch.
        </p>
      </Reveal>

      <Reveal delay={100}>
        {/*
          This form posts nowhere by default. Connect it to a form handling
          service (e.g. Formspree, Resend, or a custom API route) before launch.
        */}
        <form className="rounded-2xl border border-ink/10 p-8 dark:border-beige-100/10" action="#" method="post">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">Name</label>
              <input id="name" name="name" required className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none dark:border-beige-100/15" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">Email</label>
              <input id="email" type="email" name="email" required className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none dark:border-beige-100/15" />
            </div>
          </div>
          <div className="mt-5">
            <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">Subject</label>
            <select id="subject" name="subject" className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none dark:border-beige-100/15">
              <option>Speaking invitation</option>
              <option>Research collaboration</option>
              <option>Teaching enquiry</option>
              <option>Press or media</option>
              <option>Other</option>
            </select>
          </div>
          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none dark:border-beige-100/15" />
          </div>
          <button type="submit" className="mt-6 w-full rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800">
            Send Message
          </button>
        </form>
      </Reveal>
    </div>
  );
}
