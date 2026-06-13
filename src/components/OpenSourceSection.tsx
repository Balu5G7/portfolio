import { motion } from 'framer-motion';
import { openSourceContributions } from '../data/portfolioData';
import { FiGitBranch, FiStar, FiCode } from 'react-icons/fi';

const languageColors: Record<string, string> = {
  TypeScript: 'bg-blue-400',
  Python: 'bg-yellow-400',
  Markdown: 'bg-gray-400',
};

const OpenSourceSection = () => {
  return (
    <section id="opensource" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Open Source <span className="gradient-text">Contributions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My contributions to the open source community
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {openSourceContributions.map((contribution, index) => (
            <motion.div
              key={contribution.repo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${languageColors[contribution.language] || 'bg-gray-500'}`} />
                <h3 className="font-bold text-lg">{contribution.repo}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">{contribution.description}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <FiCode size={14} />
                  {contribution.language}
                </span>
                <span className="flex items-center gap-1">
                  <FiStar size={14} />
                  {contribution.stars}
                </span>
                <span className="flex items-center gap-1">
                  <FiGitBranch size={14} />
                  {contribution.forks}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;