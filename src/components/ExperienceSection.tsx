import { motion } from 'framer-motion';
import { experiences } from '../data/portfolioData';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const typeColors: Record<string, string> = {
  Internship: 'bg-blue-500/10 text-blue-400',
  Research: 'bg-purple-500/10 text-purple-400',
  Volunteer: 'bg-green-500/10 text-green-400',
};

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My professional journey in software engineering and AI research
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-primary/50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-[#06061a] border-2 border-primary flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[exp.type] || 'bg-gray-500/10 text-gray-400'}`}>
                      {exp.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <FiCalendar size={14} />
                    <span>{exp.year}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;