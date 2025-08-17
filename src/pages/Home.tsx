import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import { ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 4);
  
  const testimonials = [
    {
      name: "Priya Sharma",
      text: "The spiritual energy in these clothes is incredible. I feel more connected during my yoga practice.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
    },
    {
      name: "Arjun Patel",
      text: "Quality is amazing and the prices are so affordable. Hanusattva has become my go-to brand.",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
    },
    {
      name: "Meera Gupta",
      text: "Each piece tells a story. The mantras and spiritual significance make wearing them special.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg"
    }
  ];

  const heroSlides = [
    {
      image: "https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg",
      title: "Embrace Divine Fashion",
      subtitle: "Spiritual wear that connects you to your inner self",
      cta: "Discover Collection"
    },
    {
      image: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg",
      title: "Hanuman's Strength",
      subtitle: "Channel divine power through sacred clothing",
      cta: "Shop Now"
    },
    {
      image: "https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg",
      title: "Sattva Purity",
      subtitle: "Pure, comfortable, and spiritually uplifting",
      cta: "Explore"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <Swiper
          modules={[Autoplay, Pagination, EffectFade]}
          effect="fade"
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-900/70 to-red-900/50 z-10" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="text-center text-white max-w-4xl px-4">
                    <motion.h1
                      className="text-5xl md:text-7xl font-bold mb-6"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                    >
                      <span className="bg-gradient-to-r from-orange-300 to-yellow-200 bg-clip-text text-transparent">
                        {slide.title}
                      </span>
                    </motion.h1>
                    <motion.p
                      className="text-xl md:text-2xl mb-8 text-orange-100"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.4 }}
                    >
                      {slide.subtitle}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.6 }}
                    >
                      <Link to="/shop">
                        <motion.button
                          className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>{slide.cta}</span>
                          <ArrowRight className="w-5 h-5" />
                        </motion.button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating Mantra Banner */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20">
            <p className="text-white text-lg font-medium">
              ॐ गं गणपतये नमः - Today's Sacred Mantra
            </p>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Why Choose Hanusattva?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of spirituality, comfort, and affordability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Spiritual Connection",
                description: "Each piece is infused with sacred mantras and spiritual significance"
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Premium Quality",
                description: "Handcrafted with finest fabrics and attention to detail"
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Affordable Luxury",
                description: "All items priced under ₹1,000 without compromising quality"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Featured Collection
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most loved spiritual wear pieces
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Link to="/shop">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View All Products</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Customers Say
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Join thousands of satisfied customers on their spiritual journey
            </p>
          </motion.div>

          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
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
              <SwiperSlide key={index}>
                <motion.div
                  className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white mb-4 italic">"{testimonial.text}"</p>
                  <h4 className="text-orange-200 font-semibold">{testimonial.name}</h4>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Begin Your Spiritual Journey?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Take our spiritual quiz to find your perfect collection
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quiz">
                <motion.button
                  className="px-8 py-4 bg-white text-orange-600 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Take Spiritual Quiz
                </motion.button>
              </Link>
              <Link to="/shop">
                <motion.button
                  className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Browse Collection
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;