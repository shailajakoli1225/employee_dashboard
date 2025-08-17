import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RotateCcw, Sparkles, Heart, Sun, Moon, Leaf, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    icon: React.ReactNode;
  }[];
}

interface AuraResult {
  type: string;
  color: string;
  title: string;
  description: string;
  mantra: string;
  recommendedProducts: string[];
  characteristics: string[];
}

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const questions: Question[] = [
    {
      id: 1,
      question: "What time of day do you feel most energetic and peaceful?",
      options: [
        { text: "Early morning sunrise", value: "fire", icon: <Sun className="w-6 h-6" /> },
        { text: "Peaceful afternoon", value: "earth", icon: <Leaf className="w-6 h-6" /> },
        { text: "Serene evening", value: "water", icon: <Moon className="w-6 h-6" /> },
        { text: "Quiet night", value: "air", icon: <Sparkles className="w-6 h-6" /> }
      ]
    },
    {
      id: 2,
      question: "Which spiritual practice resonates most with you?",
      options: [
        { text: "Dynamic yoga and movement", value: "fire", icon: <Flame className="w-6 h-6" /> },
        { text: "Meditation in nature", value: "earth", icon: <Leaf className="w-6 h-6" /> },
        { text: "Chanting and mantras", value: "water", icon: <Heart className="w-6 h-6" /> },
        { text: "Breathwork and pranayama", value: "air", icon: <Sparkles className="w-6 h-6" /> }
      ]
    },
    {
      id: 3,
      question: "What colors make you feel most at peace?",
      options: [
        { text: "Warm oranges and reds", value: "fire", icon: <Flame className="w-6 h-6" /> },
        { text: "Earthy greens and browns", value: "earth", icon: <Leaf className="w-6 h-6" /> },
        { text: "Cool blues and whites", value: "water", icon: <Moon className="w-6 h-6" /> },
        { text: "Light yellows and purples", value: "air", icon: <Sparkles className="w-6 h-6" /> }
      ]
    },
    {
      id: 4,
      question: "How do you prefer to spend your free time?",
      options: [
        { text: "Active pursuits and adventures", value: "fire", icon: <Sun className="w-6 h-6" /> },
        { text: "Gardening or nature walks", value: "earth", icon: <Leaf className="w-6 h-6" /> },
        { text: "Reading and quiet reflection", value: "water", icon: <Heart className="w-6 h-6" /> },
        { text: "Creative arts and music", value: "air", icon: <Sparkles className="w-6 h-6" /> }
      ]
    },
    {
      id: 5,
      question: "What motivates you most in life?",
      options: [
        { text: "Achieving goals and making impact", value: "fire", icon: <Flame className="w-6 h-6" /> },
        { text: "Building stability and helping others", value: "earth", icon: <Leaf className="w-6 h-6" /> },
        { text: "Finding inner peace and wisdom", value: "water", icon: <Moon className="w-6 h-6" /> },
        { text: "Exploring ideas and possibilities", value: "air", icon: <Sparkles className="w-6 h-6" /> }
      ]
    }
  ];

  const auraResults: Record<string, AuraResult> = {
    fire: {
      type: "fire",
      color: "from-orange-500 to-red-500",
      title: "Agni Aura - Fire Element",
      description: "You embody the power and passion of Hanuman. Your fiery spirit drives transformation and courage.",
      mantra: "ॐ हं हनुमते नमः",
      recommendedProducts: ["1", "2", "4"],
      characteristics: ["Passionate", "Courageous", "Transformative", "Dynamic", "Leader"]
    },
    earth: {
      type: "earth",
      color: "from-green-500 to-yellow-600",
      title: "Prithvi Aura - Earth Element",
      description: "You are grounded like Mother Earth, bringing stability and nurturing energy to all around you.",
      mantra: "ॐ गं गणपतये नमः",
      recommendedProducts: ["3", "5", "6"],
      characteristics: ["Grounded", "Nurturing", "Stable", "Practical", "Reliable"]
    },
    water: {
      type: "water",
      color: "from-blue-500 to-purple-500",
      title: "Jal Aura - Water Element",
      description: "Like sacred Ganga, you flow with wisdom and purification, bringing peace wherever you go.",
      mantra: "ॐ नमः शिवाय",
      recommendedProducts: ["3", "6", "1"],
      characteristics: ["Peaceful", "Intuitive", "Healing", "Flowing", "Wise"]
    },
    air: {
      type: "air",
      color: "from-purple-500 to-pink-500",
      title: "Vayu Aura - Air Element",
      description: "You carry the lightness of wind, bringing creativity and freedom to every space you enter.",
      mantra: "ॐ वायु देवाय नमः",
      recommendedProducts: ["4", "5", "2"],
      characteristics: ["Creative", "Free-spirited", "Intellectual", "Adaptable", "Inspiring"]
    }
  };

  const handleAnswerSelect = (value: string) => {
    setSelectedAnswer(value);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const newAnswers = [...answers, selectedAnswer];
    setAnswers(newAnswers);
    setSelectedAnswer('');

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      setShowResult(true);
    }
  };

  const calculateResult = (): AuraResult => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const dominantElement = Object.keys(counts).reduce((a, b) => 
      counts[a] > counts[b] ? a : b
    );

    return auraResults[dominantElement];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setSelectedAnswer('');
  };

  const result = showResult ? calculateResult() : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!showResult ? (
          <>
            {/* Header */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Discover Your Sacred Aura
              </h1>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Uncover your spiritual element and find the perfect collection that resonates with your soul
              </p>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white/10 rounded-full h-3 backdrop-blur-sm">
                <motion.div
                  className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-purple-200 text-sm">
                <span>Question {currentQuestion + 1} of {questions.length}</span>
                <span>{Math.round(((currentQuestion + 1) / questions.length) * 100)}% Complete</span>
              </div>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 p-8 mb-8"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                  {questions[currentQuestion].question}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option, index) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswerSelect(option.value)}
                      className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                        selectedAnswer === option.value
                          ? 'border-orange-500 bg-orange-500/20 text-white'
                          : 'border-white/20 bg-white/5 text-purple-100 hover:border-orange-300 hover:bg-white/10'
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-3 rounded-xl ${
                          selectedAnswer === option.value
                            ? 'bg-orange-500'
                            : 'bg-white/10'
                        }`}>
                          {option.icon}
                        </div>
                        <span className="text-lg font-medium">{option.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  onClick={handleNext}
                  disabled={!selectedAnswer}
                  className={`mt-8 w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                    selectedAnswer
                      ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:shadow-2xl'
                      : 'bg-gray-500 text-gray-300 cursor-not-allowed'
                  }`}
                  whileHover={selectedAnswer ? { scale: 1.02 } : {}}
                  whileTap={selectedAnswer ? { scale: 0.98 } : {}}
                >
                  <span>{currentQuestion === questions.length - 1 ? 'Discover My Aura' : 'Next Question'}</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </>
        ) : (
          /* Results */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Result Header */}
            <div className="text-center mb-12">
              <motion.div
                className={`w-32 h-32 mx-auto mb-8 bg-gradient-to-r ${result?.color} rounded-full flex items-center justify-center`}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-16 h-16 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                {result?.title}
              </h1>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto mb-6">
                {result?.description}
              </p>
              
              {/* Sacred Mantra */}
              <div className="p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-md mx-auto">
                <p className="text-2xl font-bold text-orange-300 mb-2">Your Sacred Mantra</p>
                <p className="text-3xl text-white font-medium">{result?.mantra}</p>
              </div>
            </div>

            {/* Characteristics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Your Aura Characteristics</h3>
                <div className="space-y-3">
                  {result?.characteristics.map((trait, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${result?.color}`} />
                      <span className="text-purple-100 text-lg">{trait}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Perfect for You</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Heart className="w-6 h-6 text-red-400" />
                    <span className="text-purple-100">Spiritual wear that matches your energy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sparkles className="w-6 h-6 text-yellow-400" />
                    <span className="text-purple-100">Colors that enhance your aura</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Sun className="w-6 h-6 text-orange-400" />
                    <span className="text-purple-100">Mantras for daily practice</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link to="/shop">
                <motion.button
                  className={`px-8 py-4 bg-gradient-to-r ${result?.color} text-white rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Shop Your Collection</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.button
                onClick={resetQuiz}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-2xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <RotateCcw className="w-5 h-5" />
                <span>Retake Quiz</span>
              </motion.button>
            </div>

            {/* Share Results */}
            <div className="text-center">
              <p className="text-purple-200 mb-4">Share your aura with friends!</p>
              <div className="flex justify-center space-x-4">
                <motion.button
                  className="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Share on Facebook
                </motion.button>
                <motion.button
                  className="px-6 py-3 bg-pink-600 text-white rounded-xl font-medium hover:bg-pink-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Share on Instagram
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;