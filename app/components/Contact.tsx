'use client';

import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">Let's Talk</h2>
          <p className="text-xl text-gray-400">
            Tell us about your project and goals. We'll respond with clarity, not pressure.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.a
              href="mailto:hello@devsuite.com"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/10 hover:border-[#84ff00]/30 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#84ff00]/20 to-[#84ff00]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#84ff00]/20 group-hover:scale-110 transition-transform">
                <Mail className="text-[#84ff00]" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">Send us an email and we'll get back to you within 24 hours</p>
              <div className="text-[#84ff00] font-semibold group-hover:text-[#9eff33]">
                hello@devsuite.com
              </div>
            </motion.a>

            <motion.a
              href="tel:0593443360"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/10 hover:border-[#84ff00]/30 transition-all group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#84ff00]/20 to-[#84ff00]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#84ff00]/20 group-hover:scale-110 transition-transform">
                <Phone className="text-[#84ff00]" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">Give us a call during business hours for immediate assistance</p>
              <div className="text-[#84ff00] font-semibold group-hover:text-[#9eff33]">
                0593443360
              </div>
            </motion.a>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-500/10 rounded-2xl flex items-center justify-center mb-6 border border-purple-500/20">
                <MapPin className="text-purple-400" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Location</h3>
              <p className="text-gray-400 mb-4">We work remotely but serve clients worldwide</p>
              <div className="text-gray-300">
                Remote-First Team<br />
                Serving Global Clients
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-3xl border border-white/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20">
                <Clock className="text-blue-400" size={32} />
              </div>
              <h3 className="text-white text-xl font-bold mb-2">Business Hours</h3>
              <p className="text-gray-400 mb-4">We're available during these times</p>
              <div className="text-gray-300 space-y-1">
                <div>Mon - Fri: 9:00 AM - 6:00 PM</div>
                <div>Sat: 10:00 AM - 4:00 PM</div>
                <div>Sun: Closed</div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 p-8 bg-gradient-to-br from-[#84ff00]/10 to-[#84ff00]/5 rounded-2xl border border-[#84ff00]/20 text-center"
          >
            <h4 className="text-white text-xl font-bold mb-4">Why reach out?</h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
              <div>
                <div className="text-2xl mb-2">🎯</div>
                <div>Free initial consultation</div>
              </div>
              <div>
                <div className="text-2xl mb-2">💰</div>
                <div>No obligation quote</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🗺️</div>
                <div>Clear project roadmap</div>
              </div>
              <div>
                <div className="text-2xl mb-2">🚀</div>
                <div>Expert guidance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}