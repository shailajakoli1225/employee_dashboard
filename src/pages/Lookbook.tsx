import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { Instagram, Heart, Star, Quote } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Lookbook: React.FC = () => {
  const lookbookImages = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg",
      title: "Sacred Saffron Collection",
      description: "Embrace the divine energy of saffron in our traditional kurta sets",
      likes: 234,
      featured: true
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg",
      title: "Chakra Alignment Wear",
      description: "Balance your energy centers with our specially designed yoga collection",
      likes: 189,
      featured: false
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg",
      title: "Meditation Essentials",
      description: "Find inner peace with our comfortable meditation shawls",
      likes: 156,
      featured: true
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg",
      title: "Hanuman Strength Series",
      description: "Channel divine strength with our traditional dhoti collection",
      likes: 278,
      featured: false
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg",
      title: "Goddess Divine Collection",
      description: "Celebrate your inner goddess with elegant lehengas",
      likes: 312,
      featured: true
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg",
      title: "Sage Wisdom Wear",
      description: "Connect with ancient wisdom through our sage-inspired designs",
      likes: 198,
      featured: false
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ananya Sharma",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      text: "Hanusattva has transformed my spiritual practice. The quality and energy of these clothes is incredible!",
      rating: 5,
      location: "Mumbai, India"
    },
    {
      id: 2,
      name: "Rajesh Patel",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      text: "I feel more connected to my spiritual self when wearing Hanusattva. The mantras woven into each piece are powerful.",
      rating: 5,
      location: "Delhi, India"
    },
    {
      id: 3,
      name: "Priya Gupta",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
      text: "The comfort and spiritual significance of these clothes make my yoga practice so much more meaningful.",
      rating: 5,
      location: "Bangalore, India"
    },
    {
      id: 4,
      name: "Arjun Singh",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg",
      text: "Affordable luxury with deep spiritual meaning. Hanusattva is my go-to brand for all spiritual occasions.",
      rating: 5,
      location: "Pune, India"
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg",
      caption: "Embracing the divine feminine energy ✨ #Hanusattva #SpiritualFashion",
      likes: 1234,
      comments: 89
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg",
      caption: "Morning yoga in our chakra collection 🧘‍♀️ #YogaWear #Mindfulness",
      likes: 987,
      comments: 67
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg",
      caption: "Meditation made beautiful 🙏 #MeditationWear #InnerPeace",
      likes: 756,
      comments: 45
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg",
      caption: "Traditional meets modern spirituality 🕉️ #TraditionalWear #ModernSpirit",
      likes: 1456,
      comments: 123
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-20">
      {/* Header */}
      <motion.div
        className="text-center mb-16 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Sacred Lookbook
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the beauty of spiritual fashion through our curated collection of divine wear
        </p>
      </motion.div>

      {/* Hero Carousel */}
      <section className="mb-20">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
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
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="lookbook-swiper"
        >
          {lookbookImages.map((item, index) => (
            <SwiperSlide key={item.id} className="!w-80 !h-96">
              <motion.div
                className="relative h-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-200 mb-3">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-5 h-5 text-red-400" />
                      <span className="text-sm">{item.likes}</span>
                    </div>
                    <button className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-white/30 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Instagram Feed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Instagram className="w-8 h-8 text-pink-500" />
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  @hanusattva
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow our journey and get inspired by our community of spiritual fashion lovers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {instagramPosts.map((post, index) => (
              <motion.div
                key={post.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={post.image}
                    alt="Instagram post"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm mb-3 line-clamp-2">{post.caption}</p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span>💬</span>
                        <span>{post.comments}</span>
                      </div>
                    </div>
                    <Instagram className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram className="w-5 h-5" />
              <span>Follow @hanusattva</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="py-20 bg-gradient-to-br from-orange-900 to-red-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Sacred Stories
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Hear from our community about their transformative experiences with Hanusattva
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 h-full"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Quote className="w-12 h-12 text-orange-300 mx-auto mb-6" />
                  
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover border-4 border-white/20"
                  />
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div>
                    <h4 className="text-orange-200 font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-orange-300 text-sm">{testimonial.location}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Sacred Quote */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Quote className="w-16 h-16 text-white/50 mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              "वसुधैव कुटुम्बकम्"
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              The world is one family - Join our global community of spiritual fashion enthusiasts
            </p>
            <motion.button
              className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Lookbook;