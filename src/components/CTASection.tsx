import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users, Award, Phone, Mail, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround times without compromising quality',
    },
    {
      icon: Shield,
      title: 'Secure Solutions',
      description: 'Enterprise-grade security in every project',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ certified professionals at your service',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '500+ successful projects delivered',
    },
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: '+1 (555) 123-4567',
      action: 'tel:+15551234567',
      color: 'from-green-400 to-teal-600',
    },
    {
      icon: Mail,
      title: 'Email Us',
      description: 'hello@swifttruste.com',
      action: 'mailto:hello@swifttruste.com',
      color: 'from-blue-400 to-cyan-600',
    },
    {
      icon: Calendar,
      title: 'Schedule Call',
      description: 'Book a consultation',
      action: '/contact',
      color: 'from-purple-400 to-pink-600',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-400/5 via-blue-600/5 to-purple-600/5"
          animate={{
            background: [
              'linear-gradient(135deg, rgba(51, 203, 255, 0.05) 0%, rgba(37, 99, 235, 0.05) 50%, rgba(147, 51, 234, 0.05) 100%)',
              'linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(51, 203, 255, 0.05) 50%, rgba(37, 99, 235, 0.05) 100%)',
              'linear-gradient(135deg, rgba(37, 99, 235, 0.05) 0%, rgba(147, 51, 234, 0.05) 50%, rgba(51, 203, 255, 0.05) 100%)',
            ]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-purple-400/10 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main CTA */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your
            <br />
            <span className="gradient-text">Digital Future?</span>
          </motion.h2>
          
          <motion.p
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join 150+ successful companies who trust Swifttruste for their digital transformation.
            Let's build something extraordinary together.
          </motion.p>

          {/* Primary CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/contact">
              <motion.button
                className="group glass px-10 py-5 rounded-full text-white font-bold text-xl hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-600 transition-all duration-500 flex items-center space-x-3 min-w-[280px] justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
            
            <Link to="/portfolio">
              <motion.button
                className="group border-2 border-white/30 px-10 py-5 rounded-full text-white font-bold text-xl hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 flex items-center space-x-3 min-w-[280px] justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Our Work</span>
                <motion.div
                  className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="w-2 h-2 bg-current rounded-full" />
                </motion.div>
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 text-center group hover:bg-white/5 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Choose your preferred way to get in touch. We're here to help you
              achieve your digital goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              const isExternal = method.action.startsWith('tel:') || method.action.startsWith('mailto:');
              
              const content = (
                <motion.div
                  className={`glass rounded-2xl p-8 text-center group hover:bg-gradient-to-r hover:${method.color} transition-all duration-500 cursor-pointer`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="text-xl font-heading font-bold text-white mb-2 group-hover:text-white">
                    {method.title}
                  </h4>
                  <p className="text-white/80 group-hover:text-white/90 font-medium">
                    {method.description}
                  </p>
                </motion.div>
              );

              return isExternal ? (
                <a key={index} href={method.action}>
                  {content}
                </a>
              ) : (
                <Link key={index} to={method.action}>
                  {content}
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 glass px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full border-2 border-navy-800 flex items-center justify-center text-white font-bold text-sm"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  ★
                </motion.div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Trusted by 150+ Companies</div>
              <div className="text-white/70 text-sm">Join the success stories today</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;