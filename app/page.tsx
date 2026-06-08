const projects = [
  {
    title: "Hate Speech Detection in Filipino Tweets",
    category: "Machine Learning • NLP",
    description:
      "Built and compared models using TF-IDF features, LASSO logistic regression, random forest, and LDA for Filipino political tweet classification.",
    href: "/projects/hate-speech-detection",
  },
  {
  title: "Learning Statistics Through Real Clients",
  category: "Statistical Consulting • Applied Research",
  description:
    "Worked with client datasets, prepared analyses in Excel and R, and learned how empathy, communication, and data quality shape statistical consulting.",
  href: "/projects/statistical-consulting",
},
  {
    title: "Stock Market Event Study",
    category: "Finance • Time Series",
    description:
      "Analyzed stock behavior around market events using event study methodology and abnormal return analysis.",
    href: "#",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <a href="#" className="text-sm font-semibold tracking-wide">
          Christian Villedo
        </a>

        <div className="flex gap-6 text-sm text-zinc-300">
          <a href="#about" className="hover:text-white">
            About
          </a>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
          <a href="#articles" className="hover:text-white">
            Articles
          </a>
          <a
  href="/RESUME-VILLEDO_CHRISTIAN.pdf"
  target="_blank"
  className="hover:text-white"
>
  Resume
</a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-28">
        <p className="mb-6 text-sm uppercase tracking-[0.35em] text-zinc-500">
          Statistics × Data Science
        </p>

        <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
          Christian P. Villedo
        </h1>

<p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-300 md:text-xl">
  Graduating Statistics student at the University of the Philippines
  Diliman specializing in machine learning, statistical modeling, and
  applied analytics.
</p>

<p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
  I enjoy building data-driven solutions and translating complex
  analyses into actionable insights through statistics, machine
  learning, and research.
</p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black"
          >
            View Projects
          </a>

          <a
            href="/RESUME-VILLEDO_CHRISTIAN.pdf"
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-white hover:border-zinc-400"
          >
            Download Resume
          </a>
        </div>

        <div className="mt-14 flex flex-wrap gap-3 text-sm text-zinc-400">
          <span>R</span>
          <span>•</span>
          <span>Python</span>
          <span>•</span>
          <span>SQL</span>
          <span>•</span>
          <span>Machine Learning</span>
          <span>•</span>
          <span>Statistical Modeling</span>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-20"
      >
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
              Featured Work
            </p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Selected projects and experience
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
  <a
    key={project.title}
   href={project.href}
    className="rounded-3xl border border-zinc-800 bg-zinc-950 p-6 transition hover:border-zinc-500"
  >
              <p className="mb-4 text-sm text-zinc-500">{project.category}</p>
              <h3 className="mb-4 text-xl font-semibold">{project.title}</h3>
              <p className="leading-7 text-zinc-400">{project.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-20"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          About
        </p>

        <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Data science with a statistical foundation.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-zinc-300">
            <p>
              I work with data through statistical analysis, predictive
              modeling, visualization, and research communication.
            </p>

            <p>
              My background includes machine learning projects, statistical
              consulting work, survey analytics, and applied research using R,
              Python, SQL, and SAS.
            </p>
          </div>
        </div>
      </section>

      <section
        id="articles"
        className="mx-auto max-w-6xl border-t border-zinc-800 px-6 py-20"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Articles
        </p>

        <h2 className="text-3xl font-semibold md:text-4xl">
          Notes and writeups coming soon.
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I plan to write about machine learning, statistical modeling, and
          lessons from applied analytics projects.
        </p>
      </section>
    </main>
  );
}