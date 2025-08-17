import { Product } from '../types/Product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sacred Saffron Kurta Set',
    price: 899,
    originalPrice: 1299,
    image: 'https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg',
    images: [
      'https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg',
      'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg',
      'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg'
    ],
    category: 'Traditional Wear',
    description: 'Embrace divine energy with this handcrafted saffron kurta set, perfect for meditation and spiritual practices.',
    spiritualStory: 'Saffron represents purity, courage, and sacrifice in Hindu tradition. This sacred color has been worn by saints and spiritual seekers for centuries.',
    mantra: 'ॐ गं गणपतये नमः',
    fabric: 'Pure Cotton with Khadi weave',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Saffron', 'White', 'Cream'],
    rating: 4.8,
    reviews: [],
    inStock: true
  },
  {
    id: '2',
    name: 'Hanuman Strength Dhoti',
    price: 699,
    originalPrice: 999,
    image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg',
    images: [
      'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg',
      'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg'
    ],
    category: 'Traditional Wear',
    description: 'Channel the strength of Hanuman with this traditional dhoti, designed for comfort during yoga and meditation.',
    spiritualStory: 'The dhoti represents simplicity and devotion. Hanuman, the symbol of strength and devotion, inspires this design.',
    mantra: 'ॐ हं हनुमते नमः',
    fabric: 'Organic Cotton',
    sizes: ['Free Size'],
    colors: ['White', 'Cream', 'Light Orange'],
    rating: 4.9,
    reviews: [],
    inStock: true
  },
  {
    id: '3',
    name: 'Lotus Meditation Shawl',
    price: 799,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg',
    images: [
      'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg',
      'https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg'
    ],
    category: 'Meditation Wear',
    description: 'Wrap yourself in divine energy with this lotus-inspired meditation shawl, perfect for deep spiritual practice.',
    spiritualStory: 'The lotus symbolizes purity and enlightenment, rising from muddy waters to bloom in divine beauty.',
    mantra: 'ॐ पद्मे हूं',
    fabric: 'Silk Cotton Blend',
    sizes: ['One Size'],
    colors: ['Saffron', 'White', 'Golden'],
    rating: 4.7,
    reviews: [],
    inStock: true
  },
  {
    id: '4',
    name: 'Chakra Alignment Yoga Set',
    price: 999,
    image: 'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg',
    images: [
      'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg',
      'https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg'
    ],
    category: 'Yoga Wear',
    description: 'Align your chakras with this specially designed yoga set featuring sacred geometry patterns.',
    spiritualStory: 'Each chakra color represents different aspects of spiritual energy, promoting balance and harmony.',
    mantra: 'ॐ सर्वे भवन्तु सुखिनः',
    fabric: 'Bamboo Fiber',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Multi-Chakra', 'White', 'Orange'],
    rating: 4.6,
    reviews: [],
    inStock: true
  },
  {
    id: '5',
    name: 'Divine Goddess Lehenga',
    price: 899,
    originalPrice: 1399,
    image: 'https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg',
    images: [
      'https://images.pexels.com/photos/8436735/pexels-photo-8436735.jpeg',
      'https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg'
    ],
    category: 'Traditional Wear',
    description: 'Embrace your inner goddess with this elegant lehenga, perfect for spiritual celebrations and festivals.',
    spiritualStory: 'Inspired by the divine feminine energy, this lehenga celebrates the goddess within every woman.',
    mantra: 'ॐ श्री दुर्गायै नमः',
    fabric: 'Handwoven Cotton Silk',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Orange', 'Red', 'Golden'],
    rating: 4.9,
    reviews: [],
    inStock: true
  },
  {
    id: '6',
    name: 'Sage Wisdom Kurta',
    price: 749,
    originalPrice: 1099,
    image: 'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg',
    images: [
      'https://images.pexels.com/photos/7319326/pexels-photo-7319326.jpeg',
      'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg'
    ],
    category: 'Traditional Wear',
    description: 'Channel ancient wisdom with this sage-inspired kurta, designed for the modern spiritual seeker.',
    spiritualStory: 'Sage green represents growth, harmony, and the wisdom of nature, connecting us to our roots.',
    mantra: 'ॐ गुरुर्ब्रह्मा गुरुर्विष्णुः',
    fabric: 'Organic Khadi',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Sage Green', 'White', 'Cream'],
    rating: 4.8,
    reviews: [],
    inStock: true
  }
];

export const categories = [
  'All',
  'Traditional Wear',
  'Yoga Wear',
  'Meditation Wear',
  'Festival Wear'
];