import { motion } from 'framer-motion';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

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
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-8 mb-8"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <motion.div 
              whileHover={{ scale: 1.05, color: "#84ff00" }}
              className="text-2xl text-white mb-4 inline-block cursor-pointer"
            >
              DevSuite
            </motion.div>
            <p className="text-gray-400 max-w-md">
              Software Development Company building scalable websites and applications that power real business growth.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <motion.button 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-[#84ff00] transition-colors"
                >
                  Services
                </motion.button>
              </li>
              <li>
                <motion.button 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-[#84ff00] transition-colors"
                >
                  About
                </motion.button>
              </li>
              <li>
                <motion.button 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-[#84ff00] transition-colors"
                >
                  Contact
                </motion.button>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  href="#" 
                  className="text-gray-400 hover:text-[#84ff00] transition-colors"
                >
                  Privacy Policy
                </motion.a>
              </li>
              <li>
                <motion.a 
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  href="#" 
                  className="text-gray-400 hover:text-[#84ff00] transition-colors"
                >
                  Terms & Conditions
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 text-center text-gray-500"
        >
          <p>© {currentYear} DevSuite. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}