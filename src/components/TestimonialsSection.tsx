import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote, Building, MapPin } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      title: 'CEO',
      company: 'TechStart Inc.',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      text: 'Swifttruste transformed our digital presence completely. Their web development team delivered a stunning, high-performance website that exceeded our expectations. The attention to detail and technical expertise is unmatched.',
      project: 'E-commerce Platform Development',
      results: '300% increase in online sales',
    },
    {
      id: 2,
      name: 'Michael Chen',
      title: 'CTO',
      company: 'DataFlow Solutions',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5,
      text: 'The AI chatbot solution developed by Swifttruste has revolutionized our customer service. It handles 80% of inquiries automatically while maintaining a human-like conversation flow. Incredible work!',
      project: 'AI Customer Service Bot',
      results: '80% reduction in support tickets',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      title: 'Marketing Director',
      company: 'Creative Agency Pro',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5,
      text: 'The UI/UX design team at Swifttruste created an absolutely beautiful and intuitive interface for our mobile app. User engagement increased by 250% after the redesign. They truly understand user psychology.',
      project: 'Mobile App Redesign',
      results: '250% increase in user engagement',
    },
    {
      id: 4,
      name: 'David Thompson',
      title: 'Security Manager',
      company: 'FinSecure Bank',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      rating: 5,
      text: 'Swifttruste\'s cybersecurity audit identified critical vulnerabilities we didn\'t know existed. Their comprehensive security implementation has made our systems virtually impenetrable. Peace of mind achieved.',
      project: 'Security Audit & Implementation',
      results: '100% vulnerability resolution',
    },
    {
      id: 5,
      name: 'Lisa Wang',
      title: 'Product Manager',
      company: 'InnovateTech',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
      rating: 5,
      text: 'The training program provided by Swifttruste upskilled our entire development team. The hands-on approach and real-world projects prepared us for modern challenges. Best investment we\'ve made.',
      project: 'Full-Stack Development Training',
      results: '100% team certification rate',
    },
    {
      id: 6,
      name: 'Robert Kim',
      title: 'Founder',
      company: 'StartupLaunch',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      rating: 5,
      text: 'From concept to launch, Swifttruste was our trusted partner. They delivered a full-stack application that scales beautifully and performs flawlessly. Their expertise saved us months of development time.',
      project: 'Full-Stack Application Development',
      results: '6 months faster time-to-market',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/3 w-80 h-80 bg-green-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
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
            Client <span className="gradient-text">Success Stories</span>
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from our satisfied clients about their transformative experiences
            with Swifttruste's digital solutions.
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={true}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="glass rounded-3xl p-8 h-full group hover:bg-white/5 transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Quote Icon */}
                  <motion.div
                    className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-white/90 mb-6 leading-relaxed text-lg italic">
                    "{testimonial.text}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-6 p-4 bg-white/5 rounded-xl">
                    <div className="text-cyan-400 font-semibold text-sm mb-1">
                      Project: {testimonial.project}
                    </div>
                    <div className="text-green-400 font-medium text-sm">
                      Result: {testimonial.results}
                    </div>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-cyan-400/30"
                    />
                    <div>
                      <h4 className="text-white font-semibold text-lg">
                        {testimonial.name}
                      </h4>
                      <div className="flex items-center text-white/70 text-sm mb-1">
                        <Building className="w-3 h-3 mr-1" />
                        <span>{testimonial.title} at {testimonial.company}</span>
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="w-3 h-3 mr-1" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                <div className="text-white/80">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                <div className="text-white/80">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text mb-2">5.0</div>
                <div className="text-white/80 flex items-center justify-center">
                  Average Rating
                  <div className="flex ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;