import { Product } from '../types';

export const products: Product[] = [
  // Men & Streetwear
{
  id: 'p1',
  name: 'Relaxed Fit Carpenter Bermuda Shorts',
  price: 605,
  category: 'Men',
  color: ['Dark Grey', 'Printed', 'Stone', 'Brown'],
  size: ['S', 'M', 'L', 'XL'],
  image: 'https://images.kurevi.com/Gemini_Generated_Image_7f645q7f645q7f64.png',
  images: [
    'https://images.kurevi.com/Screenshot 2026-05-28 at 16.29.45.png',
    'https://images.kurevi.com/Screenshot 2026-05-28 at 16.39.03.png',
    'https://images.kurevi.com/Gemini_Generated_Image_7f645q7f645q7f64.png',
    'https://images.kurevi.com/00108475922-e3.png',
    'https://images.kurevi.com/00108475922-e4.png'
  ],
  description: 'Relaxed fit Bermuda shorts with front pockets and rear patch pockets. Features a multi-function strap and pocket on the leg. Irregular hem with a washed effect. Zip fly and top button fastening.',
  isNewArrival: true,
  tags: ['Streetwear', 'Carpenter', 'Bermuda']
},
  {
    id: 'p2',
    name: 'Linen Blend Casual Trousers',
    price: 1195,
    category: 'Men',
    color: ['Beige', 'Navy'],
    size: ['30', '32', '34', '36'],
    image: 'https://images.unsplash.com/photo-1600885233180-87a74070a9da?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1600885233180-87a74070a9da?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Breathable linen-cotton blend trousers. A relaxed wide leg perfectly suited for tropical climates and smart-casual evenings.',
    isNewArrival: true
  },
  // Women & Smart Wear
  {
    id: 'p3',
    name: 'Breathable Minimalist Midi Dress',
    price: 1495,
    category: 'Women',
    color: ['Black', 'Sage'],
    size: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'An elegant, fluid midi dress made from a soft Tencel blend. Modest, airy, and office-friendly with a subtle V-neck.',
  },
  {
    id: 'p4',
    name: 'Relaxed Wide-Leg Trousers',
    price: 1295,
    category: 'Women',
    color: ['Cream', 'Charcoal'],
    size: ['XS', 'S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Loose-fit trousers designed for ultimate comfort and elegant drape. Perfect for both casual daywear and smart-casual settings.',
  },
  // Modest Wear
  {
    id: 'p5',
    name: 'Premium Chiffon Hijab',
    price: 295,
    category: 'Modest Wear',
    color: ['Dusty Rose', 'Taupe', 'Black'],
    size: ['One Size'],
    image: 'https://images.unsplash.com/photo-1589710520779-11baae86eb33?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1589710520779-11baae86eb33?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Feather-light premium chiffon hijab. Provides perfect drape and breathability while maintaining an elegant opacity.',
    isNewArrival: true
  },
  {
    id: 'p6',
    name: 'Flowing Silhouette Abaya',
    price: 2195,
    category: 'Modest Wear',
    color: ['Jet Black', 'Deep Olive'],
    size: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1628045543632-441434c7c8b0?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1628045543632-441434c7c8b0?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A modest staple constructed from lightweight summer-friendly Nida fabric. Features clean lines and a relaxed, comfortable fit.',
  },
  // Beach & Island Wear
  {
    id: 'p7',
    name: 'Oversized Linen Island Shirt',
    price: 995,
    category: 'Beachwear',
    color: ['White', 'Sky Blue'],
    size: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e32f85e2b?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e32f85e2b?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'The ultimate resort essential. Pure linen shirt featuring an oversized fit for breathability in humid island weather.',
  },
  {
    id: 'p8',
    name: 'Modern Feyli Wrap Skirt',
    price: 595,
    category: 'Island Wear',
    color: ['Monochrome Black/White'],
    size: ['One Size Fits Most'],
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A contemporary take on the traditional Maldivian Feyli. Wrap design suitable for beachside lounging or casual strolls.',
    tags: ['Local-Inspired']
  },
  // Footwear & Accessories
  {
    id: 'p9',
    name: 'Premium Leather Sandals',
    price: 895,
    category: 'Footwear',
    color: ['Brown', 'Black'],
    size: ['39', '40', '41', '42', '43'],
    image: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Elevated daily footwear. Genuine leather upper with a water-friendly, ergonomic rubber sole perfect for tropical environments.',
  },
  {
    id: 'p10',
    name: 'Minimal Canvas Tote Bag',
    price: 495,
    category: 'Accessories',
    color: ['Ecru', 'Charcoal'],
    size: ['One Size'],
    image: 'https://images.unsplash.com/photo-1597633244018-b0a7019f2a96?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1597633244018-b0a7019f2a96?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A durable heavyweight canvas tote bag designed for daily essentials, beach trips, or light groceries.',
  },
  // Kids & Seasonal
  {
    id: 'p11',
    name: 'Kids Organic Cotton Romper',
    price: 295,
    category: 'Kids',
    color: ['Sand', 'Muted Mint'],
    size: ['6-12M', '1-2Y', '2-3Y'],
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'Ultra-soft organic cotton romper crafted for delicate skin. Lightweight and highly breathable for humid climates.',
  },
  {
    id: 'p12',
    name: 'Ultra-Light Rain Shell',
    price: 1995,
    category: 'Seasonal',
    color: ['Matte Black', 'Translucent White'],
    size: ['S', 'M', 'L'],
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=800'
    ],
    description: 'A minimalist, waterproof shell jacket. Packable and highly breathable, perfect for unpredictable tropical showers.',
  }
];
