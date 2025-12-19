'use client';

import { AlertCircle, TrendingDown, Code, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Look good but fail to convert users',
      description: 'Beautiful designs that don\'t drive business results',
    },
    {
      icon: TrendingDown,
      title: 'Break or become expensive to maintain',
      description: 'Technical debt that grows as your business scales',
    },
    {
      icon: Code,
      title: 'Cannot scale into full applications',
      description: 'Limited foundations that can\'t grow with your needs',
    },
    {
      icon: DollarSign,
      title: 'Require rebuilding from scratch',
      description: 'Wasted investment and lost momentum after a short time',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#1a1a1a_0%,transparent_70%)] opacity-50"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-500/30 bg-red-500/10 backdrop-blur-sm mb-6"
          >
            <AlertCircle className="w-4 h-4 text-red-400" />
            <span className="text-red-400 text-sm font-medium">Common Challenges</span>
          </motion.div>
          <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">The Problem</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Most businesses struggle with digital products that cost time, money, and momentum
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
              className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-red-500/40 transition-all group overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="relative w-14 h-14 bg-red-500/10 rounded-2xl flex items-center justify-center mb-5 border border-red-500/20 shadow-lg group-hover:shadow-xl group-hover:shadow-red-500/30 transition-all"
              >
                <problem.icon className="text-red-400" size={28} />
              </motion.div>
              <h3 className="relative text-white mb-3 font-semibold leading-tight">{problem.title}</h3>
              <p className="relative text-gray-400 text-sm leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-300">
            These problems cost time, money, and momentum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}