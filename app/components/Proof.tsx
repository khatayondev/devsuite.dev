'use client';

import { Award, Target, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function Proof() {
  const stats = [
    {
      icon: Target,
      label: 'Results-Driven',
      value: 'Development',
    },
    {
      icon: Users,
      label: 'Multiple',
      value: 'Industries',
    },
    {
      icon: Award,
      label: 'Scalable',
      value: 'Solutions',
    },
    {
      icon: Clock,
      label: 'Long-Term',
      value: 'Support',
    },
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#0a0a0a] to-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10"></div>
      
      {/* Green Glow */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#84ff00] rounded-full blur-[180px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.12, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#60b000] rounded-full blur-[180px]"
        ></motion.div>
      </div>

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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#84ff00]/30 bg-[#84ff00]/10 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#84ff00] animate-pulse"></span>
            <span className="text-[#84ff00] text-sm font-medium">Why Choose Us</span>
          </motion.div>
          <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">Proof of Capability</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            We focus on results-driven development. Our experience spans multiple industries, project sizes, and technical complexities — delivering solutions that perform, scale, and last.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.05, transition: { duration: 0.3 } }}
              className="relative text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] backdrop-blur-sm p-10 rounded-3xl border border-white/10 hover:border-[#84ff00]/40 transition-all group overflow-hidden"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#84ff00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.div 
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative w-20 h-20 bg-gradient-to-br from-[#84ff00]/20 to-[#84ff00]/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-[#84ff00]/20 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#84ff00]/30 transition-all"
              >
                <stat.icon className="text-[#84ff00]" size={36} />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="relative text-4xl font-bold text-white mb-3"
              >
                {stat.value}
              </motion.div>
              <div className="relative text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 italic">
            Client testimonials and case studies available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}