'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Mail, Phone } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: Database,
      title: 'Information We Collect',
      content: [
        'Personal information you provide (name, email, phone number)',
        'Usage data and analytics',
        'Device and browser information',
        'Cookies and similar tracking technologies',
      ],
    },
    {
      icon: Eye,
      title: 'How We Use Your Information',
      content: [
        'To provide and maintain our services',
        'To communicate with you about projects and updates',
        'To improve our website and services',
        'To comply with legal obligations',
      ],
    },
    {
      icon: Lock,
      title: 'Data Security',
      content: [
        'We use industry-standard encryption for data transmission',
        'Regular security audits and updates',
        'Limited access to personal data by authorized personnel only',
        'Secure data storage with backup systems',
      ],
    },
    {
      icon: Shield,
      title: 'Your Rights',
      content: [
        'Access your personal data',
        'Request correction of inaccurate data',
        'Request deletion of your data',
        'Opt-out of marketing communications',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ opacity: [0.2, 0.3, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#84ff00] rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#84ff00]/30 bg-[#84ff00]/10 backdrop-blur-sm mb-6"
          >
            <Shield className="w-4 h-4 text-[#84ff00]" />
            <span className="text-[#84ff00] text-sm font-medium">Privacy First</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Privacy Policy
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-sm text-gray-500"
          >
            Last updated: December 19, 2025
          </motion.p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative py-16 lg:py-24 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-2xl border border-white/10"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-[#84ff00]/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-[#84ff00]/20">
                    <section.icon className="text-[#84ff00]" size={24} />
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl font-bold">{section.title}</h2>
                </div>
                
                <ul className="space-y-3 ml-16">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#84ff00] rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Third-Party Services</h2>
            <p className="text-gray-400 mb-4">
              We may use third-party services for analytics, payment processing, and communication. These services have their own privacy policies, and we encourage you to review them.
            </p>
            <p className="text-gray-400">
              Examples include: Google Analytics, Stripe for payments, and email service providers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Updates to This Policy</h2>
            <p className="text-gray-400 mb-4">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Questions About Privacy?</h2>
            <p className="text-gray-400 mb-8">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.a
                href="mailto:privacy@devsuite.dev"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-[#84ff00]/30 transition-all text-gray-300"
              >
                <Mail size={20} className="text-[#84ff00]" />
                privacy@devsuite.dev
              </motion.a>
              
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-3 rounded-full border border-white/10 hover:border-[#84ff00]/30 transition-all text-gray-300"
              >
                <Phone size={20} className="text-[#84ff00]" />
                +1 (234) 567-890
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
