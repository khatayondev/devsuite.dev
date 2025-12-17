import { AlertCircle, TrendingDown, Code, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

export function Problem() {
  const problems = [
    {
      icon: AlertCircle,
      title: 'Look good but fail to convert users',
      description: 'Beautiful designs that don\'t drive business results',
    },
    {
      icon: TrendingDown,
      title: 'Break or become expensive to maintain',
      description: 'Technical debt that grows as your business scales',
    },
    {
      icon: Code,
      title: 'Cannot scale into full applications',
      description: 'Limited foundations that can\'t grow with your needs',
    },
    {
      icon: DollarSign,
      title: 'Require rebuilding from scratch',
      description: 'Wasted investment and lost momentum after a short time',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
    <section className="py-20 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4 text-3xl md:text-4xl">The Problem</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Most businesses struggle with digital products that cost time, money, and momentum
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-6 rounded-2xl border border-white/5 hover:border-red-500/30 transition-all hover:shadow-lg hover:shadow-red-500/10"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-4 border border-red-500/20"
              >
                <problem.icon className="text-red-500" size={24} />
              </motion.div>
              <h3 className="text-white mb-2">{problem.title}</h3>
              <p className="text-gray-400 text-sm">{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-300">
            These problems cost time, money, and momentum.
          </p>
        </motion.div>
      </div>
    </section>
  );
}