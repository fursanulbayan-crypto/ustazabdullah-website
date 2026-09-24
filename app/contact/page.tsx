import type { Metadata } from "next";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Abubakar, Abdulahi Olayinka for speaking, research collaboration, academy enquiries or general contact.",
};

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    sublabel: "Fastest response",
    value: site.phoneDisplay,
    href: `https://wa.me/${site.whatsapp}`,
    primary: true,
    color: "bg-[#25D366] text-white hover:opacity-90",
  },
  {
    icon: Mail,
    label: "General & Speaking",
    sublabel: "Speaking, research, media",
    value: site.email,
    href: `mailto:${site.email}`,
    primary: false,
    color: "bg-emerald-900 text-beige-100 hover:bg-emerald-800",
  },
  {
    icon: Mail,
    label: "Academy & Mosque",
    sublabel: "Enrolment, class enquiries",
    value: site.mosqueEmail,
    href: `mailto:${site.mosqueEmail}`,
    primary: false,
    color: "bg-emerald-900 text-beige-100 hover:bg-emerald-800",
  },
  {
    icon: Phone,
    label: "Phone",
    sublabel: "Direct line",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
    primary: false,
    color: "border border-ink/15 text-ink dark:border-beige-100/15 dark:text-beige-100",
  },
];

export default function ContactPage() {
  return (
    <div>
      <section className="border-b border-ink/10 bg-beige-100/50 dark:border-beige-100/10 dark:bg-emerald-950/40">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-gold-600 dark:text-gold-300">Contact</p>
          <h1 className="mt-3 font-display text-3xl font-medium text-ink dark:text-beige-100 sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl leading-relaxed text-ink/65 dark:text-beige-100/65">
            For speaking invitations, academy enquiries, research collaboration, or press requests.
            WhatsApp is the fastest way to reach Ustaz Abdullah directly.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-6 py-16 grid gap-12 lg:grid-cols-2">
        {/* CONTACT METHODS */}
        <Reveal>
          <div className="space-y-4">
            {contactMethods.map((m) => {
              const Icon = m.icon;
              return (
                <a
                  key={m.label}
                  href={m.href}
                  target={m.href.startsWith("http") ? "_blank" : undefined}
                  rel={m.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 rounded-2xl p-5 transition-opacity ${m.primary ? m.color : `${m.color} border`}`}
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${m.primary ? "bg-white/20" : "bg-emerald-900/10 dark:bg-beige-100/10"}`}>
                    <Icon size={18} className={m.primary ? "text-white" : "text-emerald-800 dark:text-gold-300"} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <p className={`text-sm font-semibold ${m.primary ? "text-white" : "text-ink dark:text-beige-100"}`}>
                        {m.label}
                      </p>
                      {m.primary && (
                        <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-medium text-white">
                          Recommended
                        </span>
                      )}
                    </div>
                    <p className={`text-xs mt-0.5 ${m.primary ? "text-white/70" : "text-ink/55 dark:text-beige-100/55"}`}>
                      {m.sublabel}
                    </p>
                    <p className={`text-xs mt-0.5 truncate ${m.primary ? "text-white/90" : "text-ink/70 dark:text-beige-100/70"}`}>
                      {m.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Location */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-ink/10 p-5 dark:border-beige-100/10">
            <MapPin size={18} className="mt-0.5 shrink-0 text-emerald-800 dark:text-gold-300" />
            <div>
              <p className="text-sm font-semibold text-ink dark:text-beige-100">Visit Us</p>
              <p className="mt-1 text-sm text-ink/65 dark:text-beige-100/65">{site.address}</p>
              <p className="mt-1 text-xs text-ink/45 dark:text-beige-100/45">
                Al-Mafaazat Central Mosque &amp; Training Centre
              </p>
            </div>
          </div>
        </Reveal>

        {/* CONTACT FORM */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-ink/10 p-8 dark:border-beige-100/10">
            <h2 className="font-display text-xl font-semibold text-ink dark:text-beige-100 mb-6">
              Send a message
            </h2>
            <form className="space-y-5" action="#" method="post">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-beige-100/15"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-beige-100/15"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-beige-100/15"
                >
                  <option>Speaking invitation</option>
                  <option>Academy enquiry</option>
                  <option>Research collaboration</option>
                  <option>Press or media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-ink/70 dark:text-beige-100/70">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-ink/15 bg-transparent px-4 py-2.5 text-sm outline-none focus:border-gold-500 dark:border-beige-100/15"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-emerald-900 px-6 py-3 text-sm font-medium text-beige-100 hover:bg-emerald-800"
              >
                Send Message
              </button>
              <p className="text-xs text-ink/40 dark:text-beige-100/40 text-center">
                We aim to reply within 2 working days. Your information is used only to respond to
                your message.
              </p>
            </form>
          </div>
        </Reveal>
      </div>

      {/* MAP */}
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-ink/10 dark:border-beige-100/10">
            <iframe
              title="Al-Mafaazat Central Mosque location — 32 Ojikutu Road, Heritage Estate, Aboru, Lagos"
              src="https://maps.google.com/maps?q=32+Ojikutu+Road+Heritage+Estate+Aboru+Lagos&output=embed"
              width="100%"
              height="280"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="mt-2 text-xs text-ink/40 dark:text-beige-100/40">
            32, Ojikutu Road, Heritage Estate, Aboru, Lagos State. Friday prayers and Madrasah classes held on-site.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
