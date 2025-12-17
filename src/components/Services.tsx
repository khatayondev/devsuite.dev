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
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">Our Services</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
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
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className={`bg-gradient-to-br ${service.gradient} rounded-3xl p-8 border ${service.borderColor} hover:border-opacity-50 transition-all group`}
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all`}
              >
                <service.icon className="text-white" size={28} />
              </motion.div>
              <h3 className="text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-500">Includes:</div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * idx }}
                      className="text-gray-300 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#84ff00]"></span>
                      {feature}
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