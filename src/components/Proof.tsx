import { Award, Target, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export function Proof() {
  const stats = [
    {
      icon: Target,
      label: 'Results-Driven',
      value: 'Development',
    },
    {
      icon: Users,
      label: 'Multiple',
      value: 'Industries',
    },
    {
      icon: Award,
      label: 'Scalable',
      value: 'Solutions',
    },
    {
      icon: Clock,
      label: 'Long-Term',
      value: 'Support',
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0a0a] to-black relative overflow-hidden">
      {/* Green Glow */}
      <div className="absolute inset-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#84ff00] rounded-full blur-[150px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#84ff00] rounded-full blur-[150px]"
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">Proof of Capability</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We focus on results-driven development. Our experience spans multiple industries, project sizes, and technical complexities — delivering solutions that perform, scale, and last.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05, transition: { duration: 0.3 } }}
              className="text-center bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 rounded-2xl border border-white/5 hover:border-[#84ff00]/30 transition-all"
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-[#84ff00]/20 to-[#84ff00]/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#84ff00]/20"
              >
                <stat.icon className="text-[#84ff00]" size={32} />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-3xl text-white mb-2"
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 italic">
            Client testimonials and case studies available upon request.
          </p>
        </motion.div>
      </div>
    </section>
  );
}