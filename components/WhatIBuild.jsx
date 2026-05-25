'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/lib/projects';

export default function WhatIBuild() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('All');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Dynamically extract unique technologies for filter list
  const allTags = projects.reduce((acc, proj) => {
    proj.tags.forEach((tag) => {
      if (!acc.includes(tag)) acc.push(tag);
    });
    return acc;
  }, []);
  const uniqueTechnologies = ['All', ...allTags.sort()];

  // Filter projects by search query and active dropdown tag
  const filteredProjects = projects.filter((project) => {
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(q) ||
      project.description.toLowerCase().includes(q) ||
      project.tags.some((tag) => tag.toLowerCase().includes(q));
    const matchesTech =
      selectedTech === 'All' || project.tags.includes(selectedTech);
    return matchesSearch && matchesTech;
  });

  const gridVars = {
    initial: {},
    animate: { transition: { staggerChildren: 0.08 } },
  };

  const cardVars = {
    initial: { opacity: 0, scale: 0.95, y: 30 },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 60, damping: 14 },
    },
    exit: { opacity: 0, scale: 0.95, y: 15, transition: { duration: 0.2 } },
  };

  return (
    <section
      id="what-i-build"
      className="relative w-full bg-white py-24 px-6 border-t border-slate-100 overflow-hidden flex flex-col items-center"
    >
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto relative z-10 flex flex-col items-center">

        {/* ── Header ── */}
        <div className="text-center max-w-xl">
          <h2 className="font-extrabold text-4xl text-slate-950 tracking-tight">
            My Projects
          </h2>
          <p className="text-slate-500 font-medium text-base md:text-lg mt-3">
            Projects I worked on — click a card to view its full case&nbsp;study.
          </p>
        </div>

        {/* ── Search bar ── */}
        <div className="w-full max-w-xl relative mt-10">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <svg
              className="h-5 w-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search by name, description, or technology…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-lg border border-slate-200/80 bg-white placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-400 transition-all text-sm shadow-sm"
          />
        </div>

        {/* ── Tech filter dropdown ── */}
        <div ref={dropdownRef} className="relative mt-5 self-center md:self-start md:ml-10 z-30">
          <button
            onClick={() => setDropdownOpen((v) => !v)}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 transition-colors text-sm font-semibold cursor-pointer"
          >
            Filter:{' '}
            <span className="text-slate-950 font-bold">{selectedTech}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${
                dropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>

          <AnimatePresence>
            {dropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute left-0 mt-2 w-48 bg-white border border-slate-100 rounded-lg shadow-lg py-1 z-40 max-h-60 overflow-y-auto"
              >
                {uniqueTechnologies.map((tech) => (
                  <button
                    key={tech}
                    onClick={() => {
                      setSelectedTech(tech);
                      setDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-semibold hover:bg-slate-50 transition-colors ${
                      selectedTech === tech ? 'text-[#D9265F]' : 'text-slate-600'
                    }`}
                  >
                    {tech}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ── Project card grid ── */}
        <motion.div
          variants={gridVars}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                variants={cardVars}
                layout
                className="group flex flex-col bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-slate-200 hover:-translate-y-1 transition-all duration-300"
              >
                {/* ── Project image / gradient banner ── */}
                <div
                  className={`w-full aspect-[16/10] bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-white/90 font-extrabold text-sm md:text-base uppercase tracking-wider text-center drop-shadow-sm select-none px-4">
                    {project.title}
                  </span>
                </div>

                {/* ── Card body ── */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Project name */}
                  <h3 className="font-extrabold text-slate-950 text-[17px] tracking-tight leading-tight group-hover:text-[#D9265F] transition-colors">
                    {project.title}
                  </h3>

                  {/* Short description */}
                  <p className="text-slate-500 font-medium text-xs md:text-sm mt-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <span
                        key={i}
                        className="border border-slate-200 bg-slate-50 px-2 py-0.5 rounded-full text-[10px] font-bold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] font-bold text-slate-400 self-center">
                        +{project.tags.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* ── "View More / Details" button ── */}
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 bg-slate-950 hover:bg-[#D9265F] text-white font-bold text-xs px-4 py-2.5 rounded-full transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
                    >
                      View Details
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="mt-20 text-center text-slate-400 font-semibold text-sm">
            No projects match your search. Try a different keyword or filter.
          </div>
        )}
      </div>
    </section>
  );
}