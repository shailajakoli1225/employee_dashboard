import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Cart is Empty</h2>
            <p className="text-xl text-gray-600 mb-8">
              Discover our spiritual collection and add items to your cart
            </p>
            <Link to="/shop">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Continue Shopping</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Your Sacred Cart
            </span>
          </h1>
          <p className="text-xl text-gray-600">
            {state.itemCount} item{state.itemCount !== 1 ? 's' : ''} in your spiritual collection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {state.items.map((item, index) => (
              <motion.div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Product Image */}
                  <div className="w-full md:w-48 h-48 rounded-xl overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <Link
                        to={`/product/${item.product.id}`}
                        className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-gray-600 mt-1">{item.product.category}</p>
                    </div>

                    {/* Selected Options */}
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Size:</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">
                          {item.size}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">Color:</span>
                        <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-sm font-medium">
                          {item.color}
                        </span>
                      </div>
                    </div>

                    {/* Sacred Mantra */}
                    <div className="p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg">
                      <p className="text-orange-800 text-sm font-medium text-center">
                        {item.product.mantra}
                      </p>
                    </div>

                    {/* Quantity and Price */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-sm text-gray-500">Quantity:</span>
                        <div className="flex items-center space-x-2">
                          <motion.button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <motion.button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                          ₹{item.product.price * item.quantity}
                        </span>
                        <motion.button
                          onClick={() => removeItem(item.product.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Trash2 className="w-5 h-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({state.itemCount} items)</span>
                  <span className="font-semibold">₹{state.total}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-semibold text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-semibold">₹{Math.round(state.total * 0.18)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                      ₹{state.total + Math.round(state.total * 0.18)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Sacred Message */}
              <div className="p-4 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-xl mb-6">
                <p className="text-orange-800 text-sm text-center font-medium">
                  ॐ शान्ति शान्ति शान्तिः
                </p>
                <p className="text-orange-700 text-xs text-center mt-1">
                  May peace be with your purchase
                </p>
              </div>

              <motion.button
                className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl text-lg font-semibold hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <Link to="/shop">
                <motion.button
                  className="w-full mt-4 py-3 border-2 border-orange-500 text-orange-600 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Continue Shopping
                </motion.button>
              </Link>

              {/* Trust Badges */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Secure SSL encrypted checkout</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Free shipping on all orders</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>30-day return policy</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;