import { motion } from 'framer-motion';
import { blogPosts } from '../data/portfolioData';
import { FiCalendar, FiTag, FiArrowRight } from 'react-icons/fi';

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Sharing my knowledge and experiences in AI, software engineering, and cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-xl group cursor-pointer block"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <FiCalendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:gradient-text transition-all">
                {post.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                {post.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    <FiTag size={10} className="inline mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1 text-primary text-sm font-medium">
                Read More <FiArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;