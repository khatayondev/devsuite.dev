'use client';

import { ArrowRight, Check, Sparkles, Zap, Rocket, Layout } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function FreeWebsitesPage() {
  const features = [
    'Professional responsive design',
    'Mobile-friendly layouts',
    'SEO optimized',
    'Fast loading speeds',
    'Contact forms',
    'Social media integration',
    'Google Analytics setup',
    'Free hosting for 1 year',
  ];

  const landingPageLayouts = [
    {
      name: 'Hero + Features',
      description: 'Perfect for SaaS products and services',
      color: 'from-blue-500/20 to-blue-600/10',
      borderColor: 'border-blue-500/20',
      mockup: (
        <Image
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80"
          alt="Hero + Features Layout"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: 'Image Gallery',
      description: 'Ideal for portfolios and creative businesses',
      color: 'from-purple-500/20 to-purple-600/10',
      borderColor: 'border-purple-500/20',
      mockup: (
        <Image
          src="/original-3a21d294a86f6784837277caa5d2723f.jpg"
          alt="Image Gallery Layout"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: 'Services Showcase',
      description: 'Great for professional services and agencies',
      color: 'from-green-500/20 to-green-600/10',
      borderColor: 'border-green-500/20',
      mockup: (
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop&q=80"
          alt="Services Showcase Layout"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: 'Product Landing',
      description: 'Perfect for e-commerce and product launches',
      color: 'from-orange-500/20 to-orange-600/10',
      borderColor: 'border-orange-500/20',
      mockup: (
        <Image
          src="/original-25a987b5055b056376f5d1a10fad76c2.jpg"
          alt="Product Landing Layout"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: 'Testimonial Focus',
      description: 'Build trust with customer success stories',
      color: 'from-pink-500/20 to-pink-600/10',
      borderColor: 'border-pink-500/20',
      mockup: (
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&q=80"
          alt="Testimonial Focus Layout"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      )
    },
    {
      name: 'Full-Width Hero',
      description: 'Make a bold statement with immersive design',
      color: 'from-cyan-500/20 to-cyan-600/10',
      borderColor: 'border-cyan-500/20',
      mockup: (
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop&q=80"
          alt="Full-Width Hero Layout"
          width={800}
          height={600}
          className="w-full h-full object-cover"
        />
      )
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        
        {/* Gradient Glows */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#84ff00] rounded-full blur-[150px]"
          />
          <motion.div 
            animate={{ opacity: [0.1, 0.3, 0.1], scale: [1.2, 1, 1.2] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[150px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#84ff00]/30 bg-[#84ff00]/10 backdrop-blur-sm mb-8"
            >
              <Sparkles className="w-5 h-5 text-[#84ff00]" />
              <span className="text-[#84ff00] font-semibold">Limited Time Offer</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#84ff00]"
              />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white mb-8 text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold tracking-tight"
            >
              Get Your{' '}
              <span className="bg-gradient-to-r from-[#84ff00] via-[#9eff33] to-[#84ff00] bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Professional Website
              </span>
              {' '}for Free
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed"
            >
              We're building <span className="text-[#84ff00] font-semibold">100 free websites</span> for small and medium-sized businesses. Professional design, modern technology, zero cost.
            </motion.p>

            <motion.a
              href="https://tinted-panther-1c5.notion.site/2c63a27817bb80e79544c0227faa5c53"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(132, 255, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 bg-[#84ff00] text-black px-10 py-5 rounded-full font-semibold text-lg overflow-hidden group"
            >
              <span className="relative z-10">Apply Now - Limited Spots!</span>
              <Rocket size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9eff33] to-[#84ff00]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400"
            >
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#84ff00]" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#84ff00]" />
                <span>No hidden fees</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#84ff00]" />
                <span>100% free</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Landing Page Layouts Showcase */}
      <section className="relative py-24 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-sm mb-6"
            >
              <Layout className="w-4 h-4 text-purple-400" />
              <span className="text-purple-400 text-sm font-medium">Choose Your Style</span>
            </motion.div>
            <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold">
              Beautiful Landing Page Layouts
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Pick from our professionally designed templates or let us create a custom design for your brand
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {landingPageLayouts.map((layout, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${layout.color} backdrop-blur-sm rounded-2xl border ${layout.borderColor} hover:border-opacity-70 transition-all group overflow-hidden`}
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Mockup Preview */}
                <div className="relative p-6">
                  <div className="aspect-[4/3] mb-4 rounded-lg overflow-hidden shadow-2xl border border-white/10 group-hover:shadow-3xl transition-shadow">
                    {layout.mockup}
                  </div>
                  
                  <h3 className="text-white text-xl font-bold mb-2">{layout.name}</h3>
                  <p className="text-gray-400 text-sm">{layout.description}</p>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(132, 255, 0, 0.3), transparent)',
                  }}
                  animate={{
                    x: ['-100%', '100%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 lg:py-32 bg-black overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#84ff00] rounded-full blur-[180px]"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-white mb-6 text-4xl md:text-5xl font-bold">
              Everything You Need Included
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional features that usually cost thousands, completely free
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-[#84ff00]/30 transition-all"
              >
                <div className="w-8 h-8 bg-[#84ff00] rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-black" />
                </div>
                <span className="text-gray-200 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32 bg-gradient-to-br from-[#0a0a0a] to-black overflow-hidden">
        <div className="absolute inset-0">
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-[#84ff00] rounded-full blur-[200px]"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Zap className="w-16 h-16 text-[#84ff00] mx-auto mb-6" />
            <h2 className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Claim Your Free Website?
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              Join the 100 lucky businesses getting a professional online presence at zero cost. Limited spots available!
            </p>
            
            <motion.a
              href="https://tinted-panther-1c5.notion.site/2c63a27817bb80e79544c0227faa5c53"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 25px 50px rgba(132, 255, 0, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-3 bg-[#84ff00] text-black px-12 py-6 rounded-full font-bold text-xl overflow-hidden group"
            >
              <span className="relative z-10">Apply Now</span>
              <ArrowRight size={28} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#9eff33] to-[#84ff00]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <p className="mt-8 text-gray-500 text-sm">
              No credit card required • Takes less than 2 minutes
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
