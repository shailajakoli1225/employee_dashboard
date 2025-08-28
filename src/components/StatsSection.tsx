import React from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, TrendingUp, Code, Shield, Brain, Palette } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered projects across various industries',
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-400/10',
    },
    {
      icon: Award,
      number: '150+',
      label: 'Happy Clients',
      description: 'Satisfied clients who trust our expertise',
      color: 'from-green-400 to-teal-600',
      bgColor: 'bg-green-400/10',
    },
    {
      icon: Clock,
      number: '5+',
      label: 'Years Experience',
      description: 'Years of excellence in digital solutions',
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: TrendingUp,
      number: '98%',
      label: 'Success Rate',
      description: 'Project success rate with on-time delivery',
      color: 'from-orange-400 to-red-600',
      bgColor: 'bg-orange-400/10',
    },
  ];

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      count: '200+',
      description: 'Full-stack applications built',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      count: '50+',
      description: 'AI models deployed',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      count: '100+',
      description: 'Security audits completed',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      count: '150+',
      description: 'Designs crafted',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl"
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
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="gradient-text">Impact</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Numbers that speak to our commitment to excellence and innovation
            in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="glass rounded-3xl p-8 text-center group hover:bg-white/5 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                {/* Icon */}
                <motion.div
                  className={`w-16 h-16 ${stat.bgColor} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className={`w-8 h-8 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`} />
                </motion.div>

                {/* Number */}
                <motion.div
                  className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Service Stats */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              Service <span className="gradient-text">Excellence</span>
            </h3>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our expertise spans across multiple domains, delivering comprehensive
              digital solutions for modern businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:bg-cyan-400/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-cyan-400" />
                  </motion.div>

                  {/* Count */}
                  <div className="text-2xl font-bold gradient-text mb-2">
                    {service.count}
                  </div>

                  {/* Title */}
                  <h4 className="text-white font-semibold mb-2">
                    {service.title}
                  </h4>

                  {/* Description */}
                  <p className="text-white/60 text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center space-x-4 glass px-8 py-4 rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full border-2 border-navy-800 flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">Join 150+ Happy Clients</div>
              <div className="text-white/70 text-sm">Start your digital transformation today</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;