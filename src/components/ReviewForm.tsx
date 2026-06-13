import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../data/portfolioData';
import { FiStar, FiSend, FiCheck, FiAlertCircle, FiUser, FiBriefcase, FiMail } from 'react-icons/fi';

const ReviewForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    organization: '',
    rating: 5,
    review: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const stars = '⭐'.repeat(formData.rating);
      const mailtoLink = `mailto:${personalInfo.email}?subject=Performance Review from ${formData.name}&body=${encodeURIComponent(
        `=== Performance Review ===\n\nReviewer: ${formData.name}\nEmail: ${formData.email}\nRole: ${formData.role}\nOrganization: ${formData.organization}\nRating: ${stars} (${formData.rating}/5)\n\nReview:\n${formData.review}\n\n---\nSubmitted via portfolio review form`
      )}`;
      window.location.href = mailtoLink;
      setStatus('sent');
      setFormData({ name: '', email: '', role: '', organization: '', rating: 5, review: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="review" className="section-padding relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Review My <span className="gradient-text">Performance</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professors, mentors, and employers — your feedback helps me grow. Please take a moment to review my work.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 md:p-10 rounded-2xl"
          >
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">Share Your Feedback</h3>
              <p className="text-gray-400 text-sm">Your honest review helps me improve and grow professionally</p>
            </div>

            <div className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="review-name" className="block text-sm font-medium text-gray-300 mb-2">
                    <FiUser size={14} className="inline mr-1" /> Your Name
                  </label>
                  <input
                    type="text"
                    id="review-name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Dr. Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="review-email" className="block text-sm font-medium text-gray-300 mb-2">
                    <FiMail size={14} className="inline mr-1" /> Your Email
                  </label>
                  <input
                    type="email"
                    id="review-email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="smith@university.edu"
                    required
                  />
                </div>
              </div>

              {/* Role & Organization Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="review-role" className="block text-sm font-medium text-gray-300 mb-2">
                    <FiBriefcase size={14} className="inline mr-1" /> Your Role
                  </label>
                  <input
                    type="text"
                    id="review-role"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Professor / Manager / Mentor"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-300 mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="University / Company"
                    required
                  />
                </div>
              </div>

              {/* Star Rating */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-3">
                  Rating
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <motion.button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      onMouseEnter={() => setHoveredStar(star)}
                      onMouseLeave={() => setHoveredStar(0)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-3xl transition-colors"
                    >
                      <FiStar
                        size={32}
                        className={
                          star <= (hoveredStar || formData.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-600'
                        }
                      />
                    </motion.button>
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    {formData.rating === 5 ? 'Excellent' :
                     formData.rating === 4 ? 'Great' :
                     formData.rating === 3 ? 'Good' :
                     formData.rating === 2 ? 'Fair' : 'Needs Improvement'}
                  </span>
                </div>
              </div>

              {/* Review Text */}
              <div>
                <label htmlFor="review" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Review
                </label>
                <textarea
                  id="review"
                  value={formData.review}
                  onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  placeholder="Describe Balu's performance, skills, work ethic, and areas of improvement..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary to-accent rounded-xl text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 disabled:opacity-60"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'sending' ? (
                  <>Sending Review...</>
                ) : status === 'sent' ? (
                  <><FiCheck size={18} /> Review Submitted! Thank You!</>
                ) : status === 'error' ? (
                  <><FiAlertCircle size={18} /> Error - Please Try Again</>
                ) : (
                  <><FiSend size={18} /> Submit Review</>
                )}
              </motion.button>

              <p className="text-xs text-gray-500 text-center mt-4">
                Your review will be sent directly to Balu's email. It will not be published publicly without your consent.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;