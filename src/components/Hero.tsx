
import { motion } from 'framer-motion';
import { TypeAnimation } from './TypeAnimation';
import { personalInfo } from '../data/portfolioData';
import {
  FiDownload,
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiCode,
  FiCpu,
  FiArrowUpRight,
} from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    {
      icon: <FiGithub size={19} />,
      href: personalInfo.social.github,
      label: 'GitHub',
    },
    {
      icon: <FiLinkedin size={19} />,
      href: personalInfo.social.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: <FiMail size={19} />,
      href: personalInfo.social.email,
      label: 'Email',
    },
  ];

  const technologies = ['Python', 'AI / ML', 'React', 'TypeScript'];

  return (
    <section
      id="hero"
      className="relative isolate flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Ambient background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 75% 45%, rgba(108,99,255,0.15), transparent 40%), radial-gradient(ellipse at 15% 85%, rgba(0,212,170,0.08), transparent 35%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(148,163,184,0.16) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.16) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'linear-gradient(to bottom, black, transparent 90%)',
        }}
      />

      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-4 py-2 text-xs font-medium tracking-wide text-emerald-300 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              AI · Software Engineering · Innovation
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mb-4 font-mono text-sm tracking-[0.2em] text-violet-300"
            >
              HELLO, WORLD. I'M
            </motion.p>

            <h1 className="mb-6 text-5xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.2rem]">
              Balu
              <br />
              <span className="gradient-text">Pandi.</span>
            </h1>

            <div className="mb-6 min-h-[64px] text-xl font-semibold text-gray-200 sm:text-2xl lg:min-h-[36px]">
              <TypeAnimation
                strings={[
                  'AI Engineer in the making',
                  'Full-Stack Developer',
                  'Building intelligent software',
                  'Exploring Agentic AI',
                ]}
              />
            </div>

            <p className="mx-auto mb-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
              I build software experiences that bring together
              artificial intelligence, thoughtful design, and
              practical problem-solving. Turning ideas into useful
              digital products, one project at a time.
            </p>

            {/* Primary actions */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
              <motion.a
                href={personalInfo.resumeUrl}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-violet-500/20 transition-shadow hover:shadow-violet-500/40"
              >
                <FiDownload size={18} />
                View Resume
                <FiArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-white backdrop-blur-xl transition-colors hover:border-violet-400/40 hover:bg-violet-400/[0.08]"
              >
                Explore Projects
                <FiArrowRight />
              </motion.a>
            </div>

            {/* Social links */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <span className="text-xs uppercase tracking-[0.18em] text-gray-500">
                Find me on
              </span>

              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-gray-400 transition-colors hover:border-violet-400/40 hover:text-violet-300"
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>

            {/* Tech stack */}
            <div className="mt-10 flex flex-wrap justify-center gap-2 lg:justify-start">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-1.5 font-mono text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Futuristic visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center py-8"
          >
            <div className="absolute h-72 w-72 rounded-full bg-violet-600/10 blur-[90px] sm:h-96 sm:w-96" />

            <motion.div
              aria-hidden="true"
              className="absolute h-[280px] w-[280px] rounded-full border border-violet-400/20 sm:h-[370px] sm:w-[370px]"
              animate={{ rotate: 360 }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400 shadow-[0_0_20px_rgba(139,92,246,0.9)]" />
            </motion.div>

            <motion.div
              aria-hidden="true"
              className="absolute h-[235px] w-[235px] rounded-full border border-dashed border-cyan-400/20 sm:h-[315px] sm:w-[315px]"
              animate={{ rotate: -360 }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <span className="absolute bottom-8 right-3 h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.8)]" />
            </motion.div>

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full max-w-[330px] rounded-3xl border border-white/10 bg-[#0c0c24]/90 p-5 shadow-2xl shadow-violet-950/40 backdrop-blur-2xl sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500">
                  DEVELOPER_PROFILE
                </span>
              </div>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-500/20 to-cyan-400/10 text-2xl font-extrabold text-white shadow-lg shadow-violet-500/10">
                  BP
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">
                    Balu Pandi
                  </h2>
                  <p className="mt-1 text-sm text-gray-400">
                    Developer · AI Enthusiast
                  </p>
                </div>
              </div>

              <div className="mb-5 space-y-3 rounded-2xl border border-white/[0.06] bg-black/20 p-4 font-mono text-xs">
                <p className="text-gray-500">
                  <span className="text-violet-400">const</span>{' '}
                  developer = {'{'}
                </p>
                <p className="pl-4 text-gray-300">
                  focus: <span className="text-emerald-300">'AI + Code'</span>,
                </p>
                <p className="pl-4 text-gray-300">
                  mindset: <span className="text-cyan-300">'Build & Learn'</span>,
                </p>
                <p className="pl-4 text-gray-300">
                  goal: <span className="text-violet-300">'Solve Problems'</span>
                </p>
                <p className="text-gray-500">{'};'}</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-violet-400/15 bg-violet-400/[0.06] p-3">
                  <FiCpu className="mb-2 text-lg text-violet-300" />
                  <p className="text-sm font-semibold text-gray-200">AI & ML</p>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Intelligent systems
                  </p>
                </div>
                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-3">
                  <FiCode className="mb-2 text-lg text-cyan-300" />
                  <p className="text-sm font-semibold text-gray-200">
                    Development
                  </p>
                  <p className="mt-1 text-[11px] text-gray-500">
                    Web & software
                  </p>
                </div>
              </div>

              <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4">
                <span className="font-mono text-[10px] text-gray-500">
                  CURRENT FOCUS
                </span>
                <span className="ml-auto rounded-full bg-emerald-400/10 px-2.5 py-1 text-[10px] text-emerald-300">
                  Agentic AI
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mx-auto mt-16 flex w-fit flex-col items-center gap-2 text-gray-500 transition-colors hover:text-violet-300"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">
            Scroll to explore
          </span>
          <motion.span
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="text-xl"
          >
            ↓
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
