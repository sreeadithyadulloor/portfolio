import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Moon,
  Sun,
  MapPin,
  Phone,
} from "lucide-react";

const site = {
  name: "Sreeadithya Dulloor",
  tagline: "Data Science • Analytics • Machine Learning • BI",
  location: "Boston, MA",
  email: "sreeadithyadulloor@gmail.com",
  phone: "774-271-4784",
  links: {
    github: "https://github.com/sreeadithyadulloor?tab=repositories",
    linkedin: "http://www.linkedin.com/in/sreeadithyadulloor",
  },
};

const resume = { url: "/Sreeadithya.pdf" };

const about = {
  summary:
    "Data Science graduate with a strong foundation in data analytics, statistical modeling, and business intelligence. Proficient in Python, R, SQL, Tableau, and Power BI, with hands-on experience analyzing large datasets and developing data-driven insights. Experienced with Azure Databricks, PySpark, and ML to transform raw data into actionable decisions.",
};

const projects = [
  {
    title: "Predictive Analysis of US Flight Delays & Cancellations",
    blurb:
      "Processed 1.5M+ records in Azure Databricks with PySpark; trained Linear Regression, Random Forest, and Gradient Boosting (best RMSE 36.37). Built Tableau dashboards for ops planning.",
    tags: ["Python", "PySpark", "Azure Databricks", "Gradient Boosting", "Tableau"],
  },
  {
    title: "Movie Data Analysis & Recommendation System",
    blurb:
      "Built ALS recommender on Databricks; surfaced insights into genre trends and power users driving 50%+ of ratings.",
    tags: ["PySpark", "ALS", "Recommender Systems", "Azure Databricks"],
  },
  {
    title: "Parallelized Music Recs with MPI",
    blurb:
      "Parallelized k-NN/SVM/DT/RF pipeline with MPI; cut compute time by 50%+ on 8 processors.",
    tags: ["MPI", "Parallel Computing", "k-NN", "SVM", "Random Forest"],
  },
];

const experience = [
  {
    role: "Big Data Club — Member",
    org: "University of Massachusetts Dartmouth",
    dates: "Sep 2022 – May 2024",
    bullets: [
      "Collaborated on data projects to expand portfolio.",
      "Participated in workshops on PySpark & analytics.",
    ],
  },
  {
    role: "Digital Scholarship Hub (DiSH) — Member",
    org: "University of Massachusetts Dartmouth",
    dates: "Sep 2022 – May 2024",
    bullets: [
      "Created and shared data projects.",
      "Engaged with digital content & presentation of analytics work.",
    ],
  },
];

const skills = {
  core: [
    "Python",
    "R",
    "SQL",
    "Tableau",
    "Power BI",
    "Statistics",
    "Predictive Modeling",
    "Deep Learning",
    "A/B Testing",
  ],
  tools: [
    "PySpark",
    "Azure Databricks",
    "Scikit-learn",
    "TensorFlow",
    "Keras",
    "Spark ML",
    "Hadoop",
    "MLflow",
    "AWS",
    "SageMaker",
    "Snowflake",
    "Jupyter",
    "RStudio",
    "MySQL",
  ],
};

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const themeClass = useMemo(() => (dark ? "dark" : ""), [dark]);
  const section = "max-w-6xl mx-auto px-4 md:px-6 lg:px-8";

  const primaryBtn =
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium bg-slate-900 text-white hover:opacity-90 dark:bg-white dark:text-slate-900";
  const secondaryBtn =
    "inline-flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-medium border border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10";
  const card =
    "rounded-2xl border border-black/5 dark:border-white/10 shadow-lg bg-white/70 dark:bg-slate-900/60";
  const badge =
    "inline-flex items-center px-2 py-1 text-xs rounded-full bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200";

  return (
    <div className={themeClass}>
      <div className="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors">
        <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60 border-b border-black/5 dark:border-white/10">
          <nav className={`${section} flex items-center justify-between py-3`}>
            <a href="#home" className="font-semibold tracking-tight text-lg">
              Portfolio
            </a>
                       <div className="flex items-center gap-2">
              <a
                href="#projects"
                className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
              >
                Projects
              </a>
              <a
                href="#experience"
                className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
              >
                Experience
              </a>
              <a
                href="#skills"
                className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="px-3 py-2 rounded-xl hover:bg-black/5 dark:hover:bg-white/10"
              >
                Contact
              </a>
              <button
                className="px-2 py-2 rounded-2xl hover:bg-black/5 dark:hover:bg-white/10"
                onClick={() => setDark(!dark)}
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>
          </nav>
        </header>

        <section id="home" className={`${section} pt-20 pb-12`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                {site.name}
              </h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
                {site.tagline}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {site.location}
                </span>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={`mailto:${site.email}`}
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                >
                  <Phone className="h-4 w-4" />
                  {site.phone}
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={site.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  className="inline-flex items-center gap-2 hover:underline"
                  href={site.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="#projects" className={primaryBtn}>
                  See Projects
                </a>
                <a
                  href={resume.url}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryBtn}
                >
                  <Download className="h-4 w-4" />
                  Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className={card}>
                <div className="px-6 pt-6">
                  <h3 className="text-lg font-semibold">About</h3>
                </div>
                <div className="p-6 pt-2">
                  <p className="leading-relaxed text-slate-700 dark:text-slate-200">
                    {about.summary}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="projects" className={`${section} py-10`}>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Projects</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
              >
                <div className={`${card} h-full flex flex-col`}>
                  <div className="px-6 pt-6">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                  </div>
                  <div className="p-6 pt-2 flex-1 flex flex-col">
                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
                      {p.blurb}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span className={badge} key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="experience" className={`${section} py-10`}>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Experience</h2>
          <div className="space-y-4">
            {experience.map((e) => (
              <div key={e.role + e.org} className={card}>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h3 className="font-semibold">
                        {e.role} • {e.org}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">
                        {e.dates}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-slate-700 dark:text-slate-200">
                    {e.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className={`${section} py-10`}>
          <h2 className="text-2xl font-semibold tracking-tight mb-6">Skills</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className={card}>
              <div className="px-6 pt-6">
                <h3 className="text-lg font-semibold">Core</h3>
              </div>
              <div className="p-6 pt-2 flex flex-wrap gap-2">
                {skills.core.map((s) => (
                  <span key={s} className={badge}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className={card}>
              <div className="px-6 pt-6">
                <h3 className="text-lg font-semibold">Tools</h3>
              </div>
              <div className="p-6 pt-2 flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <span key={s} className={badge}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

<section id="contact" className={`${section} py-12`}>
  <div className="grid md:grid-cols-2 gap-8 items-start">
    <div>
      <h2 className="text-2xl font-semibold tracking-tight">Get in touch</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        Want to collaborate or have a role in mind? Reach out via phone, email, or LinkedIn.
      </p>
      <div className="mt-4 flex flex-col gap-3 text-sm">
        <a
          href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
          className="inline-flex items-center gap-2 hover:underline"
        >
          <Phone className="h-4 w-4" />
          {site.phone}
        </a>
        <a
          href={`mailto:${site.email}`}
          className="inline-flex items-center gap-2 hover:underline"
        >
          <Mail className="h-4 w-4" />
          {site.email}
        </a>
        <a
          href={site.links.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </a>
        <a
          href={site.links.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 hover:underline"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </div>
  </div>
</section>


        <footer className="py-10 border-t border-black/5 dark:border-white/10">
          <div
            className={`${section} flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-600 dark:text-slate-400`}
          >
            <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a
                href={`tel:${site.phone.replace(/[^0-9+]/g, "")}`}
                className="hover:underline"
              >
                {site.phone}
              </a>
              <a
                href={site.links.github}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={site.links.linkedin}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <a
                href={resume.url}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

