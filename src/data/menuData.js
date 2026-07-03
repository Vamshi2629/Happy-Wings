import chickenBits from '../assets/images/chicken-bits.png';
import cajunChicken from '../assets/images/cajun-chicken.png';
import bbqWings from '../assets/images/bbq-wings.png';
import friedWings from '../assets/images/fried-wings.png';
import chickenLeg from '../assets/images/chicken-leg.png';
import chickenStrips from '../assets/images/chicken-strips.png';
import koreanChicken from '../assets/images/korean-chicken.png';
import chickenBurger from '../assets/images/chicken-burger.png';
import vegItems from '../assets/images/veg-items.png';
import happyBox from '../assets/images/happy-box.png';

const menuData = [
  // --- CHICKEN & WINGS ---
  {
    id: 1,
    name: 'Chicken Bits',
    description: 'Crispy with American seasoned blend of spices. Available in Normal & Peri Peri flavors.',
    originalPrice: 129,
    price: 103,
    image: chickenBits,
    category: 'chicken',
    badges: [],
    variants: [
      { name: 'Normal', price: 103 },
      { name: 'Peri Peri', price: 103 },
    ],
  },
  {
    id: 2,
    name: 'Cajun Fried Chicken',
    description: 'Crispy fried chicken tossed with bold Cajun spices.',
    originalPrice: 79,
    price: 63,
    image: cajunChicken,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '2 pcs', price: 63, originalPrice: 79 },
      { name: '4 pcs', price: 119, originalPrice: 149 },
    ],
  },
  {
    id: 3,
    name: 'Smoked Barbeque Fried Wings',
    description: 'Juicy & smoky flavor combined with crispy sticky wings.',
    originalPrice: 89,
    price: 71,
    image: bbqWings,
    category: 'chicken',
    badges: ['bestseller'],
    variants: [
      { name: '2 pcs', price: 71, originalPrice: 89 },
      { name: '4 pcs', price: 127, originalPrice: 159 },
    ],
  },
  {
    id: 4,
    name: 'Fried Wings',
    description: 'Crispy with seasoned blend of spices. Available in Normal & Peri Peri.',
    originalPrice: 69,
    price: 55,
    image: friedWings,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '2 pcs (Normal / Peri Peri)', price: 55, originalPrice: 69 },
      { name: '4 pcs (Normal / Peri Peri)', price: 111, originalPrice: 139 },
    ],
  },
  {
    id: 5,
    name: 'Crispy Chicken Leg',
    description: 'Crunchy bone-in, juicy drumstick. Available in Normal, Peri Peri & BBQ flavors.',
    originalPrice: 69,
    price: 55,
    image: chickenLeg,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '1 pc', price: 55, originalPrice: 69 },
      { name: '2 pcs', price: 103, originalPrice: 129 },
    ],
  },
  {
    id: 6,
    name: 'Crispy Chicken Strips',
    description: 'Crunchy, juicy strips with signature seasoning.',
    originalPrice: 89,
    price: 71,
    image: chickenStrips,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '3 pcs', price: 71, originalPrice: 89 },
      { name: '5 pcs', price: 127, originalPrice: 159 },
    ],
  },
  {
    id: 7,
    name: 'Korean Fried Chicken',
    description: 'Fresh chicken with special Korean spices, topped with sesame seeds. Our Specialty!',
    originalPrice: 159,
    price: 127,
    image: koreanChicken,
    category: 'chicken',
    badges: ['new', 'spicy'],
    variants: [
      { name: '4 pcs', price: 127, originalPrice: 159 },
    ],
  },

  // --- BURGERS ---
  {
    id: 8,
    name: 'Classic Mini Burgers',
    description: 'Crispy chicken with signature sauce and lettuce. Mini size but big taste.',
    originalPrice: 59,
    price: 47,
    image: chickenBurger,
    category: 'burgers',
    badges: [],
    variants: [
      { name: '2 Burgers Pack', price: 47, originalPrice: 59 },
      { name: '4 Burgers Pack', price: 95, originalPrice: 119 },
    ],
  },
  {
    id: 9,
    name: 'Peri Peri Mini Burgers',
    description: 'Peri peri crispy chicken with spicy mayo & onion. Mini size but big taste.',
    originalPrice: 59,
    price: 47,
    image: chickenBurger,
    category: 'burgers',
    badges: ['spicy'],
    variants: [
      { name: '2 Burgers Pack', price: 47, originalPrice: 59 },
      { name: '4 Burgers Pack', price: 95, originalPrice: 119 },
    ],
  },
  {
    id: 10,
    name: 'BBQ Cheese Mini Burgers',
    description: 'BBQ glazed chicken + cheese slice. Mini size but big taste.',
    originalPrice: 59,
    price: 47,
    image: chickenBurger,
    category: 'burgers',
    badges: [],
    variants: [
      { name: '2 Burgers Pack', price: 47, originalPrice: 59 },
      { name: '4 Burgers Pack', price: 95, originalPrice: 119 },
    ],
  },
  {
    id: 11,
    name: 'Korean Mini Burgers',
    description: 'Korean spiced chicken + sesame mayo. Happy Wings Special!',
    originalPrice: 59,
    price: 47,
    image: chickenBurger,
    category: 'burgers',
    badges: ['new'],
    variants: [
      { name: '2 Burgers Pack', price: 47, originalPrice: 59 },
      { name: '4 Burgers Pack', price: 95, originalPrice: 119 },
    ],
  },

  // --- VEG ITEMS ---
  {
    id: 12,
    name: 'Veg Burger',
    description: 'Crispy vegetable patty burger with fresh lettuce and sauce.',
    originalPrice: 79,
    price: 63,
    image: vegItems,
    category: 'veg',
    badges: [],
  },
  {
    id: 13,
    name: 'Potato Cheese Balls',
    description: 'Delicious golden crispy balls stuffed with potato and melted cheese.',
    originalPrice: 89,
    price: 71,
    image: vegItems,
    category: 'veg',
    badges: [],
  },
  {
    id: 14,
    name: 'Veg Nuggets',
    description: 'Golden brown crispy vegetable nuggets served with delicious dip.',
    originalPrice: 79,
    price: 63,
    image: vegItems,
    category: 'veg',
    badges: [],
  },
  {
    id: 15,
    name: 'Jalapeño Cheese Balls',
    description: 'Crispy cheese balls with a kick of spicy chopped jalapeños.',
    originalPrice: 109,
    price: 87,
    image: vegItems,
    category: 'veg',
    badges: ['spicy'],
  },
  {
    id: 16,
    name: 'Sweet Corn Ball',
    description: 'Golden crispy bites with tender sweet corn filling.',
    originalPrice: 99,
    price: 79,
    image: vegItems,
    category: 'veg',
    badges: [],
  },
  {
    id: 17,
    name: 'Cheese Corn Balls',
    description: 'Crispy balls with rich cheese and sweet corn core.',
    originalPrice: 89,
    price: 71,
    image: vegItems,
    category: 'veg',
    badges: [],
  },
  {
    id: 18,
    name: 'Veg Fingers',
    description: 'Crispy seasoned vegetable finger strips.',
    originalPrice: 79,
    price: 63,
    image: vegItems,
    category: 'veg',
    badges: [],
  },

  // --- COMBOS ---
  {
    id: 19,
    name: 'Happy Box Combo',
    description: 'Includes: Any 2 Burgers + 2 Wings + Fries + Coke + Any 2 Sauces.',
    originalPrice: 169,
    price: 135,
    image: happyBox,
    category: 'combos',
    badges: ['bestseller'],
  },
];

export default menuData;
