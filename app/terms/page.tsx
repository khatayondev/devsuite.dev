'use client';

import { motion } from 'framer-motion';
import { FileText, Scale, AlertCircle, Users, CreditCard, Ban } from 'lucide-react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function TermsPage() {
  const sections = [
    {
      icon: Users,
      title: 'Acceptance of Terms',
      content: [
        'By accessing and using DevSuite\'s services, you accept and agree to be bound by these Terms & Conditions.',
        'If you do not agree to these terms, please do not use our services.',
        'We reserve the right to modify these terms at any time.',
      ],
    },
    {
      icon: FileText,
      title: 'Services Description',
      content: [
        'DevSuite provides software development, web design, and related digital services.',
        'Project scope, timeline, and deliverables will be outlined in separate project agreements.',
        'We reserve the right to refuse service to anyone for any reason at any time.',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: [
        'Payment schedules will be defined in project contracts (typically 50% upfront, 50% upon completion).',
        'All payments are non-refundable unless otherwise specified in writing.',
        'Late payments may incur interest charges and project delays.',
        'We accept various payment methods including bank transfers and credit cards.',
      ],
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: [
        'Upon full payment, clients receive ownership of the final deliverables.',
        'DevSuite retains the right to use completed work in our portfolio and marketing materials.',
        'Pre-existing code, frameworks, and tools remain the property of their respective owners.',
        'Clients must not resell, redistribute, or claim our work as their own creation.',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Warranties and Disclaimers',
      content: [
        'We provide services "as is" without warranties of any kind, express or implied.',
        'We guarantee bug fixes for 30 days after project completion.',
        'We are not responsible for third-party service failures (hosting, domains, APIs).',
        'Client-provided content and materials are the client\'s responsibility.',
      ],
    },
    {
      icon: Ban,
      title: 'Limitation of Liability',
      content: [
        'DevSuite shall not be liable for any indirect, incidental, or consequential damages.',
        'Our total liability shall not exceed the amount paid for the specific service.',
        'We are not liable for losses due to data breaches, downtime, or service interruptions.',
        'Clients agree to indemnify DevSuite against third-party claims.',
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
            className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6"
          >
            <Scale className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm font-medium">Legal Terms</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Terms & Conditions
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Please read these terms carefully before using our services. By using DevSuite, you agree to these terms.
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
                  <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-purple-500/20">
                    <section.icon className="text-purple-400" size={24} />
                  </div>
                  <h2 className="text-white text-2xl md:text-3xl font-bold">{section.title}</h2>
                </div>
                
                <ul className="space-y-3 ml-16">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="text-gray-400 flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Additional Sections */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Project Cancellation</h2>
            <div className="space-y-3 text-gray-400">
              <p>Either party may cancel a project with written notice:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Client cancellations forfeit any deposits or payments made.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>Completed work up to cancellation point will be billed at the agreed rate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                  <span>DevSuite reserves the right to cancel projects that violate our terms.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 md:p-10 rounded-2xl border border-white/10"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-6">Governing Law</h2>
            <p className="text-gray-400">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction where DevSuite operates, without regard to its conflict of law provisions. Any disputes arising from these terms will be resolved through binding arbitration.
            </p>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center bg-gradient-to-br from-purple-500/10 to-transparent p-12 rounded-2xl border border-purple-500/20"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">Questions About These Terms?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              If you have any questions about our Terms & Conditions, please don't hesitate to reach out to our team.
            </p>
            
            <motion.a
              href="mailto:legal@devsuite.dev"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-500 transition-all"
            >
              Contact Legal Team
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
