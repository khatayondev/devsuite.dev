'use client';

import { Target, Eye, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export function About() {
  const principles = [
    'Clear communication',
    'Thoughtful planning',
    'Strong technical foundations',
    'Continuous improvement',
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
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white mb-6 text-3xl md:text-4xl">Who We Are</h2>
            <p className="text-lg text-gray-400 mb-6">
              DevSuite is a software development company focused on building reliable, scalable, and growth-ready digital products.
            </p>
            <p className="text-lg text-gray-400">
              We partner with startups, SMEs, and organizations to transform ideas into well-engineered websites and applications.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-gradient-to-br from-[#84ff00]/20 to-transparent rounded-3xl blur-2xl"
            ></motion.div>
            <motion.img 
              whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
              src="/4F4A9110.JPG"
              alt="DevSuite Team"
              className="relative rounded-3xl shadow-2xl border border-white/10"
            />
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-white/5"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-gradient-to-br from-[#84ff00] to-[#60b000] rounded-xl flex items-center justify-center mb-4"
            >
              <Target className="text-black" size={24} />
            </motion.div>
            <h3 className="text-white mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To help businesses grow through technology by building digital products that are scalable, maintainable, and purpose-driven.
            </p>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -5, transition: { duration: 0.3 } }}
            className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-white/5"
          >
            <motion.div 
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4"
            >
              <Eye className="text-white" size={24} />
            </motion.div>
            <h3 className="text-white mb-4">Our Vision</h3>
            <p className="text-gray-400">
              To be a trusted long-term technology partner for businesses across Africa and beyond.
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#84ff00]/10 to-[#84ff00]/5 p-8 md:p-12 rounded-3xl border border-[#84ff00]/20"
        >
          <h3 className="text-white mb-6 text-center">How We Work</h3>
          <p className="text-gray-300 text-center mb-8 text-lg">
            We believe great software is built through:
          </p>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {principles.map((principle, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 bg-black/30 p-4 rounded-xl"
              >
                <CheckCircle2 className="text-[#84ff00] flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-200">{principle}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}