'use client';

import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function EngagementModel() {
  const benefits = [
    'Start with a landing page or website',
    'Upgrade into dynamic systems or applications',
    'No wasted work or rebuilds',
    'Pricing based on scope and complexity',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-white mb-4 text-3xl md:text-4xl">Start Small. Scale Confidently.</h2>
            <p className="text-xl text-gray-400">
              You don't need to build everything at once.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-[#84ff00]/10 to-[#84ff00]/5 rounded-3xl p-8 md:p-12 border border-[#84ff00]/20"
          >
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-6 mb-8"
            >
              <motion.div variants={itemVariants} className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-[#84ff00] to-[#60b000] text-black rounded-full flex items-center justify-center mx-auto mb-3 text-xl shadow-lg shadow-[#84ff00]/30"
                >
                  1
                </motion.div>
                <p className="text-gray-300">Start with a simple website</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                className="text-center flex items-center justify-center"
              >
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="text-[#84ff00] hidden md:block" size={32} />
                </motion.div>
              </motion.div>
              <motion.div variants={itemVariants} className="text-center">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-full flex items-center justify-center mx-auto mb-3 text-xl shadow-lg shadow-purple-500/30"
                >
                  2
                </motion.div>
                <p className="text-gray-300">Scale into full applications</p>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mt-8"
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5"
                >
                  <CheckCircle2 className="text-[#84ff00] flex-shrink-0 mt-0.5" size={24} />
                  <span className="text-gray-200 text-lg">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-500 italic">
              Every DevSuite project is engineered for growth — so your initial investment keeps delivering value.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}