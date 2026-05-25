import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/projects';

// Generate static params for all known slugs
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

// Generate per-page metadata
export function generateMetadata({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Nahin Ahmed`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero Banner ── */}
      <div
        className={`w-full h-64 md:h-80 bg-gradient-to-br ${project.gradient} relative flex items-end`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

        {/* Back link */}
        <Link
          href="/#what-i-build"
          className="absolute top-6 left-6 flex items-center gap-2 text-white/80 hover:text-white text-xs font-bold tracking-wide transition-colors bg-white/10 hover:bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full border border-white/20"
        >
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Projects
        </Link>

        <div className="relative z-10 px-6 md:px-12 pb-8 max-w-4xl w-full mx-auto">
          {/* Tag chips */}
          <div className="flex flex-wrap gap-2 mb-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-white font-extrabold text-3xl md:text-4xl drop-shadow-sm leading-tight">
            {project.title}
          </h1>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-14 flex flex-col gap-12">

        {/* ── Description ── */}
        <section>
          <SectionLabel>Brief Description</SectionLabel>
          <p className="text-slate-600 font-medium text-base leading-relaxed mt-4">
            {project.longDescription}
          </p>
        </section>

        {/* ── Technology Stack ── */}
        <section>
          <SectionLabel>Main Technology Stack</SectionLabel>
          <div className="flex flex-wrap gap-2.5 mt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="border border-slate-200 bg-slate-50 text-slate-700 font-bold text-sm px-3.5 py-1.5 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        {/* ── Project Links ── */}
        <section>
          <SectionLabel>Project Links</SectionLabel>
          <div className="flex flex-wrap gap-3 mt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D9265F] hover:bg-[#b01e4a] text-white font-bold text-sm px-5 py-2.5 rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Live Project
            </a>

            <a
              href={project.githubClient}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm px-5 py-2.5 rounded-full shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub (Client)
            </a>
          </div>
        </section>

        {/* ── Challenges ── */}
        <section>
          <SectionLabel>Challenges Faced</SectionLabel>
          <ul className="mt-4 space-y-4">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 text-xs font-extrabold">
                  {i + 1}
                </span>
                <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                  {c}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Future Plans ── */}
        <section className="pb-4">
          <SectionLabel>Potential Improvements &amp; Future Plans</SectionLabel>
          <ul className="mt-4 space-y-4">
            {project.futurePlans.map((fp, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-0.5 shrink-0 w-6 h-6 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 text-xs font-extrabold">
                  ✦
                </span>
                <p className="text-slate-600 font-medium text-sm md:text-base leading-relaxed">
                  {fp}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── Back button footer ── */}
        <div className="pt-6 border-t border-slate-100">
          <Link
            href="/#what-i-build"
            className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-950 font-bold text-sm transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}

// Small helper component for section headings
function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="font-extrabold text-slate-950 text-xs uppercase tracking-widest">
        {children}
      </h2>
      <div className="flex-1 h-px bg-slate-100" />
    </div>
  );
}
