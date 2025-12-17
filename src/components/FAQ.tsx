import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How long does a project take?',
      answer: 'Project timelines depend on scope, but most websites take 2–6 weeks. More complex applications may take longer, and we\'ll provide a clear timeline during our initial consultation.',
    },
    {
      question: 'Can I start small and expand later?',
      answer: 'Yes. All DevSuite projects are designed with scalability in mind. You can start with a simple landing page or website and seamlessly upgrade it into a dynamic platform or full application without rebuilding from scratch.',
    },
    {
      question: 'Do you offer ongoing support?',
      answer: 'Yes. We offer maintenance, upgrades, and long-term support to ensure your digital product continues to perform and evolve with your business needs.',
    },
    {
      question: 'How is pricing determined?',
      answer: 'Pricing is based on features, complexity, and project requirements. We provide transparent quotes after understanding your specific needs and goals during our initial consultation.',
    },
    {
      question: 'What industries do you work with?',
      answer: 'We work across multiple industries including tech, retail, education, logistics, and services. Our approach is adaptable to any business that needs reliable, scalable digital solutions.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about working with DevSuite
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] rounded-2xl border border-white/5 overflow-hidden hover:border-[#84ff00]/30 transition-all"
            >
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-white pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown 
                    className="text-[#84ff00] flex-shrink-0"
                    size={24}
                  />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <motion.div
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      exit={{ y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5 pt-4"
                    >
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}