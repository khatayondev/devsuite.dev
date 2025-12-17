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
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">What We Build</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-2xl border ${service.borderColor} hover:border-opacity-50 transition-all group hover:shadow-xl`}
            >
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-14 h-14 bg-black/40 rounded-xl flex items-center justify-center mb-4 border border-white/10`}
              >
                <service.icon className={service.iconColor} size={28} />
              </motion.div>
              <h3 className="text-white">{service.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}