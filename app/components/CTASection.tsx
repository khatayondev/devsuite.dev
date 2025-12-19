'use client';

import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20"></div>
      
      {/* Green Glow Effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#84ff00] rounded-full blur-[180px]"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#60b000] rounded-full blur-[150px]"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#84ff00]/30 bg-[#84ff00]/10 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#84ff00] animate-pulse"></span>
          <span className="text-[#84ff00] text-sm font-medium">Ready to Start?</span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Let's Build Something{' '}
          <span className="bg-gradient-to-r from-[#84ff00] via-[#9eff33] to-[#84ff00] bg-clip-text text-transparent">
            Exceptional
          </span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Start with a conversation. No obligation — just clarity on how we can help transform your vision into reality.
        </motion.p>
        <motion.button 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(132, 255, 0, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="relative bg-[#84ff00] text-black px-10 py-5 rounded-full font-semibold text-lg transition-all inline-flex items-center gap-3 group overflow-hidden"
        >
          <span className="relative z-10">Book a Free Consultation</span>
          <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-[#9eff33] to-[#84ff00]"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </section>
  );
}