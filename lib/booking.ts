export interface BookingService {
  icon: string;
  title: string;
  audience: string;
  description: string;
  details: string[];
}

export const bookingServices: BookingService[] = [
  {
    icon: "mic",
    title: "Keynote Addresses",
    audience: "Conferences & summits",
    description: "Conference and summit keynotes on Islamic education, leadership and the future of learning.",
    details: [
      "30 to 60 minute keynote, tailored to your theme",
      "Delivered in English or Arabic",
      "In person or online",
    ],
  },
  {
    icon: "book-open",
    title: "Khutbahs & Islamic Talks",
    audience: "Mosques & Islamic organisations",
    description: "Friday khutbahs, Islamic talks and religious guidance for mosques and Islamic organisations.",
    details: [
      "Friday khutbahs and special occasion talks",
      "Topics in Aqeedah, Fiqh, and Islamic ethics",
      "Arabic and English, with translation on request",
    ],
  },
  {
    icon: "graduation-cap",
    title: "Teacher Training Workshops",
    audience: "Schools & training institutes",
    description: "Practical workshops for educators on pedagogy, classroom management and curriculum design.",
    details: [
      "Half-day or full-day workshop formats",
      "Grounded in real Arabic and Islamic Studies classrooms",
      "Includes take-home resources for staff",
    ],
  },
  {
    icon: "handshake",
    title: "Youth & Community Programmes",
    audience: "NGOs & community groups",
    description: "Peacebuilding, mentorship and values-based sessions for schools, NGOs and community groups.",
    details: [
      "Drawn from live SDG 16 outreach work in Aboru",
      "Interactive, discussion-led session format",
      "Scales from a single session to a multi-day programme",
    ],
  },
  {
    icon: "video",
    title: "Media Interviews & Panels",
    audience: "Media organisations",
    description: "Studio interviews, panel discussions and expert commentary for media organisations.",
    details: [
      "Television, radio and podcast appearances",
      "Comfortable on both religious and educational topics",
      "Available for live or pre-recorded formats",
    ],
  },
  {
    icon: "laptop",
    title: "Institutional Consulting",
    audience: "Universities & educational bodies",
    description: "Curriculum review and educational technology advice for schools and training institutes.",
    details: [
      "Arabic and Islamic Studies curriculum review",
      "Guidance on responsible AI adoption in the classroom",
      "Short advisory engagements or ongoing consultation",
    ],
  },
];

export const bookingSteps = [
  {
    icon: "send",
    title: "Submit a request",
    detail: "Fill in the booking form with your event details, audience and preferred dates.",
  },
  {
    icon: "message-square",
    title: "Initial conversation",
    detail: "A short call or message exchange to confirm the topic, format and any specific requirements.",
  },
  {
    icon: "clipboard-check",
    title: "Confirmation",
    detail: "Dates, logistics and expectations are agreed in writing before the engagement is confirmed.",
  },
  {
    icon: "pen-tool",
    title: "Preparation",
    detail: "Content is tailored to your audience, whether students, scholars, or a general community.",
  },
  {
    icon: "rocket",
    title: "The event",
    detail: "Delivered in person or online, with follow-up materials shared afterwards where relevant.",
  },
];

export const bookingFaqs = [
  {
    q: "What regions do you speak in?",
    a: "Based in Lagos, Nigeria, with regular engagements across Lagos and southwest Nigeria. Open to invitations elsewhere in Nigeria and internationally for larger events, travel and logistics permitting.",
  },
  {
    q: "Do you speak in English and Arabic?",
    a: "Both, depending on the audience. Sessions can be delivered fully in English, fully in Arabic, or with live translation where useful.",
  },
  {
    q: "Can sessions be delivered online?",
    a: "Yes. Keynotes, workshops and interviews are all available remotely, alongside in-person engagements.",
  },
  {
    q: "Is there a speaking fee?",
    a: "Fees are discussed individually based on the scope, format and location of the event. Mosque and community sessions are often arranged differently from institutional or conference bookings, so it's best to share your details in the form and we'll follow up.",
  },
  {
    q: "What do you need from organisers in advance?",
    a: "The audience type and size, session length, format (in person or online), and any specific themes you'd like covered. The more context provided in the booking form, the more tailored the session will be.",
  },
  {
    q: "How far in advance should I book?",
    a: "As early as possible, ideally four or more weeks ahead for conferences and institutional events, so there's time for a proper preparatory conversation. Shorter notice can sometimes be accommodated for community and mosque requests.",
  },
];
