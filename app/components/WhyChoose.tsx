'use client';

import { TrendingUp, MessageSquare, Target, Boxes, HeartHandshake } from 'lucide-react';
import { motion } from 'framer-motion';

export function WhyChoose() {
  const reasons = [
    {
      icon: TrendingUp,
      title: 'Built for scalability from day one',
      description: 'Every project is engineered with growth in mind, so you never need to rebuild',
    },
    {
      icon: MessageSquare,
      title: 'Clear communication and structured delivery',
      description: 'Transparent processes and regular updates throughout development',
    },
    {
      icon: Target,
      title: 'Business-first mindset, not just visuals',
      description: 'We focus on outcomes that drive real business value and ROI',
    },
    {
      icon: Boxes,
      title: 'Flexible engagement models',
      description: 'Start small and scale up as your needs grow—no pressure to overbuild',
    },
    {
      icon: HeartHandshake,
      title: 'Reliable post-launch support',
      description: 'Ongoing maintenance, upgrades, and feature expansion when you need it',
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
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">Why Choose DevSuite</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're more than developers—we're your long-term technology partner
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {reasons.map((reason, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-white/5 hover:border-[#84ff00]/30 transition-all group"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-br from-[#84ff00] to-[#60b000] rounded-xl flex items-center justify-center mb-4 group-hover:shadow-lg group-hover:shadow-[#84ff00]/30 transition-all"
              >
                <reason.icon className="text-black" size={24} />
              </motion.div>
              <h3 className="text-white mb-3">{reason.title}</h3>
              <p className="text-gray-400">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}