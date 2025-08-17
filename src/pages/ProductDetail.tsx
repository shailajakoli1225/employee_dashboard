import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Heart, Share2, Star, ShoppingBag, Truck, Shield, RotateCcw } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Product not found</h2>
          <Link to="/shop" className="text-orange-600 hover:text-orange-700">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: { product, size: selectedSize, color: selectedColor }
    });

    alert('Added to cart!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <motion.div
          className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link to="/" className="hover:text-orange-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-orange-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </motion.div>

        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center space-x-2 text-orange-600 hover:text-orange-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Shop</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image Swiper */}
            <Swiper
              modules={[Navigation, Pagination, Thumbs]}
              navigation
              pagination={{ clickable: true }}
              thumbs={{ swiper: thumbsSwiper }}
              className="rounded-2xl overflow-hidden shadow-2xl aspect-square"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Thumbnail Swiper */}
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              watchSlidesProgress
              className="thumbs-swiper"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <img
                    src={image}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover rounded-lg hover:opacity-75 transition-opacity"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-gray-600">({product.rating})</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                {product.name}
              </span>
            </h1>

            {/* Price */}
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-400 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {product.originalPrice && (
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 text-lg leading-relaxed">{product.description}</p>

            {/* Sacred Mantra */}
            <div className="p-6 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl border-l-4 border-orange-500">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">Sacred Mantra</h3>
              <p className="text-orange-700 text-xl font-medium text-center">{product.mantra}</p>
            </div>

            {/* Spiritual Story */}
            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Spiritual Significance</h3>
              <p className="text-purple-700">{product.spiritualStory}</p>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                      selectedSize === size
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border-2 rounded-lg font-medium transition-all ${
                      selectedColor === color
                        ? 'border-orange-500 bg-orange-500 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-orange-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4">
              <motion.button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Cart</span>
              </motion.button>

              <motion.button
                className="p-4 border-2 border-gray-300 rounded-xl hover:border-red-500 hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart className="w-6 h-6" />
              </motion.button>

              <motion.button
                className="p-4 border-2 border-gray-300 rounded-xl hover:border-blue-500 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <Truck className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Free Shipping</p>
              </div>
              <div className="text-center">
                <Shield className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Secure Payment</p>
              </div>
              <div className="text-center">
                <RotateCcw className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <p className="text-sm text-gray-600">Easy Returns</p>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-4 pt-6 border-t border-gray-200">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Fabric Details</h4>
                <p className="text-gray-600">{product.fabric}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Care Instructions</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Hand wash with cold water</li>
                  <li>• Do not bleach</li>
                  <li>• Dry in shade</li>
                  <li>• Iron on low heat</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;