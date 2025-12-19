'use client';

import { ArrowRight, Sparkles, Code2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-black">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      {/* Dynamic Green Glow Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="absolute top-1/4 -left-48 w-[600px] h-[600px] bg-[#84ff00] rounded-full blur-[150px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-[#84ff00] rounded-full blur-[150px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#60b000] rounded-full blur-[120px]"
        ></motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-[#84ff00]/20 rounded-lg backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ duration: 5, delay: 1, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-12 h-12 border border-[#84ff00]/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 10, 0],
          }}
          transition={{ duration: 7, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-1/3 w-20 h-20 border border-[#84ff00]/10 rounded-lg backdrop-blur-sm"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#84ff00]/30 bg-[#84ff00]/10 backdrop-blur-sm mb-8 shadow-lg shadow-[#84ff00]/10"
          >
            <Sparkles className="w-4 h-4 text-[#84ff00] animate-pulse" />
            <span className="text-[#84ff00] text-sm font-medium">Elite Software Development Agency</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-[#84ff00]"
            />
          </motion.div>

          {/* Main Headline with Gradient Text */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-white mb-8 text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight"
          >
            Transform Your Vision Into{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#84ff00] via-[#9eff33] to-[#84ff00] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Digital Reality
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#84ff00] to-transparent"
                animate={{ scaleX: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            We craft cutting-edge websites, web applications, and custom software solutions that drive growth, enhance efficiency, and deliver exceptional user experiences.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#84ff00] mb-1">50+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center border-x border-white/10">
              <div className="text-3xl font-bold text-[#84ff00] mb-1">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#84ff00] mb-1">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button 
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(132, 255, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-[#84ff00] text-black px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 group overflow-hidden"
            >
              <span className="relative z-10">Start Your Project</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9eff33] to-[#84ff00]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            
            <motion.button 
              onClick={() => scrollToSection('services')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#84ff00]/30 text-white px-8 py-4 rounded-full hover:bg-[#84ff00]/10 hover:border-[#84ff00]/50 transition-all backdrop-blur-sm flex items-center gap-2 group"
            >
              View Our Services
              <Code2 size={20} className="group-hover:rotate-12 transition-transform" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}