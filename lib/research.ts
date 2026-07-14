export type ResearchCategory = "Journal Article" | "Conference Paper" | "Research Report" | "Working Paper";

export interface ResearchProject {
  slug: string;
  title: string;
  category: ResearchCategory;
  year: number;
  abstract: string;
  keywords: string[];
  methodology: string;
  status: "Published" | "Under Review" | "In Progress";
  citation: string;
  /** Link to where this is actually published or shared: LinkedIn post, ResearchGate, Academia.edu, a DOI, etc. Leave unset until a real link exists. */
  externalUrl?: string;
  /** Link to a downloadable PDF, e.g. hosted in public/research/ or on Google Drive. Leave unset until a real file exists. */
  pdfUrl?: string;
}

export const researchProjects: ResearchProject[] = [
  {
    slug: "islamic-education-moral-values",
    title: "Islamic Education and Moral Development Among Secondary School Students in Lagos State",
    category: "Working Paper",
    year: 2026,
    abstract:
      "A quantitative study of 200 respondents examining the relationship between structured Islamic education and moral development indicators, using a 29 item Likert questionnaire across five thematic sections.",
    keywords: ["Islamic education", "moral development", "Likert scale", "Lagos State", "secondary education"],
    methodology: "Descriptive statistics with planned Pearson correlation and chi-square analysis (SPSS).",
    status: "In Progress",
    citation:
      "Abubakar, A. O. (2026). Islamic education and moral development among secondary school students in Lagos State. Working paper, Al-Mafaazat Training Centre.",
  },
  {
    slug: "hifz-academic-performance",
    title: "Qur'anic Memorisation (Ḥifẓ al-Qur'ān) and Academic Performance: A Correlational Study",
    category: "Research Report",
    year: 2025,
    abstract:
      "An investigation into whether structured Qur'anic memorisation programmes correlate with measurable gains in general academic performance among Islamic school students.",
    keywords: ["Hifz al-Qur'an", "academic performance", "Islamic schools", "correlational research"],
    methodology: "Correlational design using school assessment records and memorisation progress logs.",
    status: "Published",
    citation:
      "Abubakar, A. O. (2025). Qur'anic memorisation and academic performance: A correlational study. Research Report, Al-Mafaazat Training Centre.",
  },
  {
    slug: "ai-islamic-studies-pedagogy",
    title: "Artificial Intelligence in Islamic Studies Education: Opportunities and Boundaries",
    category: "Conference Paper",
    year: 2026,
    abstract:
      "A framework for the responsible adoption of AI tools in Qur'anic and Arabic pedagogy, addressing where automation supports scholarship and where isnad and human oversight remain essential.",
    keywords: ["artificial intelligence", "Islamic pedagogy", "educational technology", "Qur'anic education"],
    methodology: "Conceptual and policy-oriented analysis, informed by classroom practice.",
    status: "In Progress",
    citation:
      "Abubakar, A. O. (2026). Artificial intelligence in Islamic Studies education: Opportunities and boundaries. Conference paper (in preparation).",
  },
];

export const publicationCategories = ["All", "Journal Article", "Conference Paper", "Research Report", "Working Paper"] as const;
