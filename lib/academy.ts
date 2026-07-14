export interface AcademyProgram {
  icon: string;
  title: string;
  level: string;
  description: string;
  details: string[];
}

export const academyPrograms: AcademyProgram[] = [
  {
    icon: "languages",
    title: "Arabic Language",
    level: "All levels",
    description: "Nahw (grammar), Sarf (morphology) and Arabic Prosody ('Aruḍ), taught from first principles.",
    details: [
      "Structured progression from beginner to advanced",
      "Classical texts alongside modern teaching method",
      "Available in physical and online classes",
    ],
  },
  {
    icon: "book-open",
    title: "Qur'anic Education",
    level: "All ages",
    description: "Tajweed and memorisation (Hifz al-Qur'an), with a pace suited to the individual student.",
    details: [
      "One-to-one and small group memorisation tracks",
      "Regular revision and progress assessment",
      "Male and female student streams",
    ],
  },
  {
    icon: "landmark",
    title: "Islamic Studies",
    level: "All levels",
    description: "Aqeedah, Fiqh and Islamic ethics, building a grounded, authentic understanding of the deen.",
    details: [
      "Age-appropriate curriculum for children and adults",
      "Drawn from classical scholarship",
      "Continuous assessment, not just memorisation",
    ],
  },
  {
    icon: "graduation-cap",
    title: "Adult & Weekend Classes",
    level: "Adults",
    description: "Flexible weekend and evening tracks for adults returning to Arabic and Islamic learning.",
    details: [
      "Designed around working schedules",
      "Same curriculum depth as full-time tracks",
      "Physical classes at our Aboru centre or online",
    ],
  },
];

export const academyFeatures = [
  {
    icon: "award",
    title: "Qualified Instruction",
    detail: "Led by a First Class graduate in Education and Islamic Studies, and Chief Imam of Al-Mafaazat Central Mosque.",
  },
  {
    icon: "users",
    title: "Small, Focused Classes",
    detail: "Class sizes kept small enough for real feedback, not just attendance.",
  },
  {
    icon: "laptop",
    title: "Physical & Online",
    detail: "Attend in person at our Aboru centre, or join classes online from anywhere.",
  },
  {
    icon: "compass",
    title: "Values-Led Education",
    detail: "Academic rigour paired with the same community values behind our SDG 16 outreach work.",
  },
];

export const academyFaqs = [
  {
    q: "Who can enrol?",
    a: "Classes are open to children, teenagers and adults, with tracks structured by age and existing level rather than a single fixed curriculum.",
  },
  {
    q: "Do you offer online classes?",
    a: "Yes. Most Arabic Language and Islamic Studies classes are available both in person at our Aboru centre and online for students elsewhere.",
  },
  {
    q: "What is the class schedule?",
    a: "Schedules vary by track, with weekday and weekend options. Exact timing is confirmed after registration, based on current class groupings.",
  },
  {
    q: "Is there a registration fee?",
    a: "Fees depend on the programme and format (physical or online). Register your interest through the form and current fees will be shared directly.",
  },
  {
    q: "Do you issue certificates?",
    a: "Students progressing through structured tracks, particularly Hifz and Arabic Language levels, receive progress recognition on completion of each stage.",
  },
];
