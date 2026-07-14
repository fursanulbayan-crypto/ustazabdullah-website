export interface FAQItem {
  q: string;
  a: string;
  list?: string[];
  note?: string;
}

export interface FAQCategory {
  title: string;
  items: FAQItem[];
}

export const faqCategories: FAQCategory[] = [
  {
    title: "Learning at Al-Mafaazat Arabic & Islamic Training Centre",
    items: [
      {
        q: "Who can join your classes?",
        a: "Students of all ages are welcome, including children, teenagers, adults, university students, professionals, and new Muslims. Lessons are tailored to each learner's level and learning objectives.",
      },
      {
        q: "Are the classes online or in person?",
        a: "Most classes are conducted online, allowing students to learn from anywhere in the world. In-person classes and workshops may also be available depending on location and schedule.",
      },
      {
        q: "Which platforms do you teach on?",
        a: "Teaching is available through:",
        list: ["Google Meet", "Zoom", "Microsoft Teams", "WhatsApp Video", "Telegram"],
        note: "The platform used depends on the student's preference and the nature of the course.",
      },
      {
        q: "Do I need previous knowledge of Arabic?",
        a: "No. Complete beginners are welcome. Courses are carefully structured to support learners from foundational to advanced levels.",
      },
      {
        q: "How do I register?",
        a: "Click the Register Now button on the Academy page and complete the online registration form. You will receive further guidance after your submission.",
      },
      {
        q: "Do you teach children?",
        a: "Yes. Children receive structured lessons using age-appropriate teaching methods, continuous assessment, and guidance for parents to support learning at home.",
      },
      {
        q: "Can adults learn the Qur'an?",
        a: "Absolutely. Many adult learners begin with little or no previous knowledge. Lessons are personalised to help every student progress confidently at their own pace.",
      },
    ],
  },
  {
    title: "Speaking Engagements",
    items: [
      {
        q: "What types of events do you speak at?",
        a: "I am available for:",
        list: [
          "Islamic lectures", "Friday khutbahs", "Conferences", "Educational seminars", "Schools",
          "Universities", "Youth programmes", "Community events", "Leadership workshops",
          "Professional development sessions", "Panel discussions",
        ],
      },
      {
        q: "Do you travel for speaking engagements?",
        a: "Yes. Subject to availability and logistics, I accept invitations within Nigeria and internationally.",
      },
      {
        q: "How far in advance should I make a booking?",
        a: "Booking at least two to four weeks in advance is recommended. Major conferences and large events should ideally be scheduled earlier.",
      },
      {
        q: "Is there a speaking fee?",
        a: "Some engagements are voluntary, while others attract professional speaking or consultancy fees. Each invitation is considered individually.",
      },
    ],
  },
  {
    title: "Research & Consultancy",
    items: [
      {
        q: "Do you supervise research projects?",
        a: "Yes. I provide academic guidance in areas including:",
        list: [
          "Islamic Studies", "Education", "Educational Technology", "Educational Research",
          "Research Methodology", "Academic Writing", "Data Analysis",
        ],
      },
      {
        q: "Do you offer SPSS data analysis services?",
        a: "Yes. Support includes:",
        list: [
          "Questionnaire analysis", "Data cleaning", "Descriptive statistics", "Correlation analysis",
          "Regression analysis", "Interpretation of findings", "APA style presentation of results",
        ],
      },
      {
        q: "Can you review dissertations and research papers?",
        a: "Yes. I review dissertations, theses, journal manuscripts, conference papers, research proposals, and academic articles.",
      },
    ],
  },
  {
    title: "General Questions",
    items: [
      {
        q: "How can I contact you?",
        a: "You can use the Contact page or submit an enquiry through the website. I aim to respond within two business days.",
      },
      {
        q: "Do you offer one-to-one mentoring?",
        a: "Yes. Mentoring is available for students, educators, researchers, aspiring Islamic scholars, and community leaders.",
      },
      {
        q: "Do you collaborate with organisations?",
        a: "Yes. I welcome collaborations with educational institutions, Islamic organisations, NGOs, community initiatives, research teams, and professional bodies whose values align with my areas of expertise.",
      },
      {
        q: "Where are you based?",
        a: "I am based in Lagos, Nigeria, and work with individuals and organisations locally and internationally through both online and in-person engagements.",
      },
    ],
  },
];

export const faqSidebarLinks = [
  { label: "Academy", href: "/academy" },
  { label: "Invite Ustaz Abdullah", href: "/book" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];
