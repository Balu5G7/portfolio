import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiStar, FiGitBranch, FiCode, FiCalendar } from 'react-icons/fi';

const GitHubStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <FiGithub size={20} />, label: 'Repositories', value: '10+' },
    { icon: <FiStar size={20} />, label: 'Stars', value: '15+' },
    { icon: <FiGitBranch size={20} />, label: 'Contributions', value: '200+' },
    { icon: <FiCode size={20} />, label: 'Commits', value: '500+' },
  ];

  return (
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            GitHub <span className="gradient-text">Statistics</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 glass-hover text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 text-primary">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="glass p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <FiCalendar className="text-primary" size={20} />
            <h3 className="font-semibold">Contribution Activity</h3>
          </div>

          {/* Simulated Contribution Grid */}
          <div className="flex flex-wrap gap-1">
            {Array.from({ length: 210 }).map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + i * 0.002 }}
                className={`w-3 h-3 rounded-sm ${
                  Math.random() > 0.7
                    ? 'bg-primary/80'
                    : Math.random() > 0.5
                    ? 'bg-primary/40'
                    : Math.random() > 0.3
                    ? 'bg-primary/20'
                    : 'bg-white/5'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center justify-end gap-2 mt-3">
            <span className="text-xs text-gray-500">Less</span>
            {['bg-white/5', 'bg-primary/20', 'bg-primary/40', 'bg-primary/80'].map((color) => (
              <div key={color} className={`w-3 h-3 rounded-sm ${color}`} />
            ))}
            <span className="text-xs text-gray-500">More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;