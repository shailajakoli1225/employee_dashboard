import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { Code, Brain, Shield, Palette, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Full-stack development with modern technologies. From responsive websites to complex web applications.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'API Development'],
      color: 'from-cyan-400 to-blue-600',
      bgColor: 'bg-cyan-400/10',
    },
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI implementations including chatbots, machine learning models, and intelligent automation.',
      features: ['Custom Chatbots', 'ML Models', 'Data Analytics', 'AI Agents'],
      color: 'from-purple-400 to-pink-600',
      bgColor: 'bg-purple-400/10',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      color: 'from-red-400 to-orange-600',
      bgColor: 'bg-red-400/10',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that combines aesthetics with functionality for optimal user experience.',
      features: ['User Research', 'Interface Design', 'Prototyping', 'Design Systems'],
      color: 'from-green-400 to-teal-600',
      bgColor: 'bg-green-400/10',
    },
    {
      icon: GraduationCap,
      title: 'Training Programs',
      description: 'Professional development programs and internships to build the next generation of tech talent.',
      features: ['Full-stack Bootcamp', 'AI/ML Specialization', 'Cybersecurity Cert', 'Mentorship'],
      color: 'from-yellow-400 to-orange-600',
      bgColor: 'bg-yellow-400/10',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Comprehensive digital solutions tailored to transform your business
            and accelerate your growth in the digital landscape.
          </motion.p>
        </motion.div>

        {/* Services Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="services-swiper pb-12"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <SwiperSlide key={index} className="!w-80">
                  <motion.div
                    className="glass rounded-3xl p-8 h-full group hover:bg-white/5 transition-all duration-500"
                    whileHover={{ y: -10 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-8 h-8 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`} />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold text-white mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/80 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-center text-white/70"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`} />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link to="/services">
                      <motion.button
                        className={`w-full glass px-6 py-3 rounded-full text-white font-medium hover:bg-gradient-to-r hover:${service.color} hover:text-white transition-all duration-300 flex items-center justify-center space-x-2 group`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/services">
            <motion.button
              className="glass px-8 py-4 rounded-full text-white font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;