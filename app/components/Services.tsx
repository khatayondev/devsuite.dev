'use client';

import { Globe, Layers, Code, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Website Development',
      description: 'Professional websites designed to convert visitors and scale with business growth.',
      features: [
        'Landing pages',
        'Corporate websites',
        'CMS websites',
      ],
      gradient: 'from-blue-500/20 to-blue-600/10',
      iconGradient: 'from-blue-500 to-blue-600',
      borderColor: 'border-blue-500/20',
    },
    {
      icon: Layers,
      title: 'Web Application Development',
      description: 'Custom-built web applications tailored to your business processes and goals.',
      features: [
        'SaaS platforms',
        'Dashboards',
        'Business tools',
        'Client portals',
      ],
      gradient: 'from-purple-500/20 to-purple-600/10',
      iconGradient: 'from-purple-500 to-purple-600',
      borderColor: 'border-purple-500/20',
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'We design and develop systems that solve specific operational challenges.',
      features: [
        'Inventory systems',
        'Booking platforms',
        'Internal management tools',
      ],
      gradient: 'from-[#84ff00]/20 to-[#84ff00]/10',
      iconGradient: 'from-[#84ff00] to-[#60b000]',
      borderColor: 'border-[#84ff00]/20',
    },
    {
      icon: HeartHandshake,
      title: 'Ongoing Support & Scaling',
      description: 'We provide post-launch support, improvements, and feature expansion as your business grows.',
      features: [
        'Maintenance',
        'Feature expansion',
        'Performance optimization',
      ],
      gradient: 'from-green-500/20 to-green-600/10',
      iconGradient: 'from-green-500 to-green-600',
      borderColor: 'border-green-500/20',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
    <section id="services" className="relative py-24 lg:py-32 bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Gradient Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.15, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#84ff00] rounded-full blur-[150px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#60b000] rounded-full blur-[150px]"
        />
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
            <span className="text-[#84ff00] text-sm font-medium">What We Offer</span>
          </motion.div>
          <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">Our Services</h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Comprehensive development solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className={`relative bg-gradient-to-br ${service.gradient} backdrop-blur-sm rounded-3xl p-8 border ${service.borderColor} hover:border-opacity-60 transition-all group overflow-hidden`}
            >
              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.iconGradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <motion.div 
                whileHover={{ scale: 1.15, rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={`relative w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-${service.iconGradient}/20 group-hover:shadow-xl group-hover:shadow-${service.iconGradient}/40 transition-all`}
              >
                <service.icon className="text-white" size={32} />
              </motion.div>
              <h3 className="text-white mb-4 text-2xl font-bold">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
              <div className="relative space-y-3">
                <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Includes:</div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="text-gray-300 flex items-center gap-3 group/item"
                    >
                      <motion.span 
                        whileHover={{ scale: 1.5 }}
                        className="w-2 h-2 rounded-full bg-[#84ff00] group-hover/item:shadow-lg group-hover/item:shadow-[#84ff00]/50 transition-all"
                      ></motion.span>
                      <span className="group-hover/item:text-white transition-colors">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}