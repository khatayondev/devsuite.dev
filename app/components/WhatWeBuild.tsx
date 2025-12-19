'use client';

import { Globe, Layers, Zap, Settings, FileText, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhatWeBuild() {
  const services = [
    {
      icon: Globe,
      title: 'High-conversion landing pages',
      color: 'from-blue-500/20 to-blue-600/10',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Briefcase,
      title: 'Corporate and business websites',
      color: 'from-purple-500/20 to-purple-600/10',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Layers,
      title: 'Dynamic web platforms',
      color: 'from-[#84ff00]/20 to-[#84ff00]/10',
      iconColor: 'text-[#84ff00]',
      borderColor: 'border-[#84ff00]/20',
    },
    {
      icon: Zap,
      title: 'Custom software applications',
      color: 'from-yellow-500/20 to-yellow-600/10',
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/20',
    },
    {
      icon: FileText,
      title: 'CMS-powered websites',
      color: 'from-green-500/20 to-green-600/10',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/20',
    },
    {
      icon: Settings,
      title: 'Business systems and internal tools',
      color: 'from-red-500/20 to-red-600/10',
      iconColor: 'text-red-400',
      borderColor: 'border-red-500/20',
    },
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section className="relative py-24 lg:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#1a1a1a_0%,transparent_70%)] opacity-50"></div>
      
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
            <span className="text-[#84ff00] text-sm font-medium">Our Expertise</span>
          </motion.div>
          <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">What We Build</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From landing pages to complex platforms, we create digital products that drive results
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, scale: 1.03, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${service.color} backdrop-blur-sm p-8 rounded-2xl border ${service.borderColor} hover:border-opacity-70 transition-all group overflow-hidden`}
            >
              {/* Animated Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`relative w-16 h-16 bg-black/40 rounded-2xl flex items-center justify-center mb-5 border border-white/10 shadow-lg group-hover:shadow-2xl transition-all`}
              >
                <service.icon className={service.iconColor} size={32} />
              </motion.div>
              <h3 className="relative text-white text-xl font-semibold leading-tight">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}