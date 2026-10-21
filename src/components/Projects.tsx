import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projects } from '../data/portfolioData';
import {
  FiGithub,
  FiExternalLink,
  FiCheck,
  FiArrowUpRight,
  FiCpu,
  FiShoppingBag,
  FiShield,
  FiZap,
} from 'react-icons/fi';

const getProjectStyle = (title: string) => {
  if (title.includes('JARVIS')) {
    return {
      label: 'AI & AUTOMATION',
      icon: FiCpu,
      accent: 'text-violet-300',
      soft: 'bg-violet-500/10',
      border: 'border-violet-400/20',
      symbol: 'AI',
      previewTitle: 'Intelligent Assistant',
      previewItems: ['Voice interaction', 'Task automation', 'AI processing'],
    };
  }

  if (title.includes('ShootOutMaxx')) {
    return {
      label: 'BOOKING PLATFORM',
      icon: FiZap,
      accent: 'text-orange-300',
      soft: 'bg-orange-500/10',
      border: 'border-orange-400/20',
      symbol: 'SM',
      previewTitle: 'Photography Experience',
      previewItems: ['Photography', 'Booking experience', 'Web platform'],
    };
  }

  if (title.includes('LookMint')) {
    return {
      label: 'FASHION DISCOVERY',
      icon: FiShoppingBag,
      accent: 'text-emerald-300',
      soft: 'bg-emerald-500/10',
      border: 'border-emerald-400/20',
      symbol: 'LM',
      previewTitle: 'Style Discovery',
      previewItems: ['Explore styles', 'Discover products', 'Outfit ideas'],
    };
  }

  return {
    label: 'CYBERSECURITY & AI',
    icon: FiShield,
    accent: 'text-rose-300',
    soft: 'bg-rose-500/10',
    border: 'border-rose-400/20',
    symbol: 'SEC',
    previewTitle: 'Security Research',
    previewItems: ['Threat detection', 'Incident analysis', 'Cloud security'],
  };
};

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080b14] px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-violet-500/[0.08] blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Featured Work
            </span>
          </div>

          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Featured
              <br />
              <span className="text-cyan-400">Projects.</span>
            </h2>

            <p className="max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              A selection of my work across AI, software development,
              digital products and cybersecurity. Explore the technologies,
              project highlights and available demos.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          {projects.map((project, index) => {
            const style = getProjectStyle(project.title);
            const Icon = style.icon;
            const projectNumber = String(index + 1).padStart(2, '0');

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: Math.min(index * 0.1, 0.3),
                }}
                whileHover={{ y: -4 }}
                className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111827] text-white shadow-lg shadow-black/10 transition-all duration-300 hover:border-cyan-400/40 hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div className="flex h-full flex-col p-5 sm:p-7">
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold tracking-widest text-slate-500">
                      PROJECT {projectNumber}
                    </span>

                    <span
                      className={`inline-flex items-center gap-2 rounded-full border border-white/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider ${style.soft} ${style.accent}`}
                    >
                      <Icon size={13} />
                      {style.label}
                    </span>
                  </div>

                  <div
                    className={`mb-6 flex min-h-44 items-center justify-center overflow-hidden rounded-xl border ${style.border} ${style.soft} p-5 sm:min-h-48`}
                  >
                    <div className="w-full max-w-sm">
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#111827] text-sm font-bold text-white shadow-sm">
                            {style.symbol}
                          </div>

                          <div>
                            <p className="text-xs font-semibold text-slate-100">
                              {style.previewTitle}
                            </p>
                            <p className="mt-1 text-[10px] text-slate-400">
                              Project overview
                            </p>
                          </div>
                        </div>

                        <Icon className={style.accent} size={21} />
                      </div>

                      <div className="space-y-2">
                        {style.previewItems.map((item, itemIndex) => (
                          <div
                            key={item}
                            className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#111827]/80 px-3 py-2.5"
                          >
                            <span
                              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${style.soft} ${style.accent}`}
                            >
                              <FiCheck size={13} />
                            </span>

                            <span className="text-xs font-medium text-slate-200">
                              {item}
                            </span>

                            <span className="ml-auto text-[10px] text-slate-500">
                              0{itemIndex + 1}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-3 text-xl font-bold leading-snug tracking-tight text-white transition-colors group-hover:text-cyan-200 sm:text-2xl">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mb-6 border-t border-white/10 pt-5">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-300">
                      Project Highlights
                    </h4>

                    <ul className="space-y-2.5">
                      {project.features.slice(0, 4).map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm leading-6 text-slate-300"
                        >
                          <FiCheck
                            className={`mt-1 shrink-0 ${style.accent}`}
                            size={15}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-5 sm:flex-row">
                    {project.live && project.live !== '#' ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#111827]"
                        aria-label={`View live project: ${project.title}`}
                      >
                        <FiExternalLink size={16} />
                        Live Demo
                        <FiArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
                        Demo unavailable
                      </span>
                    )}

                    {project.github && project.github !== '#' ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-white/30 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-[#111827]"
                        aria-label={`View source code: ${project.title}`}
                      >
                        <FiGithub size={17} />
                        Source Code
                      </a>
                    ) : (
                      <span className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-400">
                        <FiGithub size={16} />
                        Source unavailable
                      </span>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 rounded-xl border border-white/10 bg-[#111827]/70 p-5 sm:flex-row sm:items-center sm:px-6">
          <div>
            <p className="font-semibold text-white">
              Interested in my work?
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-400">
              Explore my projects or get in touch to discuss opportunities.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex min-h-10 shrink-0 items-center gap-2 text-sm font-semibold text-cyan-300 transition-colors hover:text-white"
          >
            Contact Me
            <FiArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;