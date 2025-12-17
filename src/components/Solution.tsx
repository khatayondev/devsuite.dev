import { CheckCircle2, Lightbulb, Palette, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

export function Solution() {
  const features = [
    'Conversion-focused design',
    'Scalable and maintainable architecture',
    'Clean, secure, modern development practices',
    'Long-term technical thinking',
  ];

  const process = [
    {
      icon: Lightbulb,
      title: 'Strategy & Requirements',
      description: 'We start by understanding your business goals and technical needs',
    },
    {
      icon: Palette,
      title: 'Design & Development',
      description: 'Building scalable solutions with clean code and modern practices',
    },
    {
      icon: Rocket,
      title: 'Launch & Improvement',
      description: 'Continuous support and feature expansion as you grow',
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
    hidden: { opacity: 0, y: 20 },
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
    <section id="solution" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">The DevSuite Solution</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            DevSuite builds digital products with growth in mind. We don't just create websites — we engineer scalable foundations that can evolve into powerful platforms and applications.
          </p>
        </motion.div>

        {/* Features */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#84ff00]/10 to-[#84ff00]/5 rounded-3xl p-8 md:p-12 mb-16 border border-[#84ff00]/20"
        >
          <h3 className="text-white mb-8 text-center">Our Approach</h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                className="flex items-start gap-3 bg-black/30 p-4 rounded-xl border border-white/5"
              >
                <CheckCircle2 className="text-[#84ff00] flex-shrink-0 mt-1" size={24} />
                <span className="text-gray-200 text-lg">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Process */}
        <div>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white mb-12 text-center"
          >
            Our Process
          </motion.h3>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-3 gap-8"
          >
            {process.map((step, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="relative"
              >
                <div className="text-center">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="w-16 h-16 bg-gradient-to-br from-[#84ff00] to-[#60b000] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#84ff00]/30"
                  >
                    <step.icon className="text-black" size={28} />
                  </motion.div>
                  <h4 className="text-white mb-3">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.2 }}
                    className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#84ff00]/50 to-transparent origin-left"
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}