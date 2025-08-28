import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Zap, Shield, Cpu, Palette, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const services = [
    'Web Development',
    'AI Solutions',
    'Cybersecurity',
    'UI/UX Design',
    'Training Programs'
  ];
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  useEffect(() => {
    const currentService = services[currentServiceIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentService.length) {
        setTypedText(currentService.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          const deletingInterval = setInterval(() => {
            if (currentIndex > 0) {
              setTypedText(currentService.slice(0, currentIndex - 1));
              currentIndex--;
            } else {
              clearInterval(deletingInterval);
              setCurrentServiceIndex((prev) => (prev + 1) % services.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentServiceIndex]);

  const floatingShapes = [
    { icon: Zap, color: 'text-cyan-400', delay: 0 },
    { icon: Shield, color: 'text-blue-500', delay: 1 },
    { icon: Cpu, color: 'text-teal-400', delay: 2 },
    { icon: Palette, color: 'text-purple-400', delay: 3 },
    { icon: GraduationCap, color: 'text-green-400', delay: 4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particle-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Shapes */}
        {floatingShapes.map((shape, index) => {
          const Icon = shape.icon;
          return (
            <motion.div
              key={index}
              className={`absolute ${shape.color} opacity-20`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.1, 0.3, 0.1],
                scale: [1, 1.2, 1],
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: shape.delay,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + index * 15}%`,
                top: `${30 + index * 10}%`,
              }}
            >
              <Icon size={60} />
            </motion.div>
          );
        })}

        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-5xl md:text-7xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your
            <br />
            <span className="gradient-text">Digital Future</span>
          </motion.h1>

          {/* Typed Animation */}
          <motion.div
            className="text-2xl md:text-3xl text-cyan-400 mb-8 h-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="font-medium">
              Expert {typedText}
              <motion.span
                className="inline-block w-1 h-8 bg-cyan-400 ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Swifttruste is your premier digital creation hub, delivering cutting-edge solutions
            in web development, AI integration, cybersecurity, and professional training.
            Let's build the future together.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/contact">
              <motion.button
                className="group glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/portfolio">
              <motion.button
                className="group border-2 border-white/30 px-8 py-4 rounded-full text-white font-semibold text-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>View Our Work</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 + index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-white/80 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;