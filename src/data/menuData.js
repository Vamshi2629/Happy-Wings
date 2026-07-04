import chickenBits from '../assets/images/chicken-bits.png';
import cajunChicken from '../assets/images/cajun-chicken.png';
import bbqWings from '../assets/images/bbq-wings.png';
import friedWings from '../assets/images/fried-wings.png';
import chickenLeg from '../assets/images/chicken-leg.png';
import chickenStrips from '../assets/images/chicken-strips.png';
import koreanChicken from '../assets/images/korean-chicken.png';
import chickenBurger from '../assets/images/chicken-burger.png';
import vegBurger from '../assets/images/veg_burger.png';
import potatoCheeseBalls from '../assets/images/potato_cheese_balls.png';
import vegNuggets from '../assets/images/veg_nuggets.png';
import jalapenoCheeseBalls from '../assets/images/jalapeno_cheese_balls.png';
import cornBalls from '../assets/images/corn_balls.png';
import cheeseCornBalls from '../assets/images/cheese_corn_balls.png';
import vegFingers from '../assets/images/veg_fingers.png';
import vegItems from '../assets/images/veg-items.png';
import happyBox from '../assets/images/happy-box.png';

const menuData = [
  // --- CHICKEN & WINGS ---
  {
    id: 1,
    name: 'Chicken Bits',
    description: 'Crispy with American seasoned blend of spices. Available in Normal & Peri Peri flavors.',
    price: 129,
    image: chickenBits,
    category: 'chicken',
    badges: [],
    variants: [
      { name: 'Normal', price: 129 },
      { name: 'Peri Peri', price: 129 },
    ],
  },
  {
    id: 2,
    name: 'Cajun Fried Chicken',
    description: 'Crispy fried chicken tossed with bold Cajun spices.',
    price: 79,
    image: cajunChicken,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '2 pcs', price: 79 },
      { name: '4 pcs', price: 149 },
    ],
  },
  {
    id: 3,
    name: 'Smoked Barbeque Fried Wings',
    description: 'Juicy & smoky flavor combined with crispy sticky wings.',
    price: 89,
    image: bbqWings,
    category: 'chicken',
    badges: ['bestseller'],
    variants: [
      { name: '2 pcs', price: 89 },
      { name: '4 pcs', price: 159 },
    ],
  },
  {
    id: 4,
    name: 'Fried Wings',
    description: 'Crispy with seasoned blend of spices. Available in Normal & Peri Peri.',
    price: 69,
    image: friedWings,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '2 pcs (Normal / Peri Peri)', price: 69 },
      { name: '4 pcs (Normal / Peri Peri)', price: 139 },
    ],
  },
  {
    id: 5,
    name: 'Crispy Chicken Leg',
    description: 'Crunchy bone-in, juicy drumstick. Available in Normal, Peri Peri & BBQ flavors.',
    price: 69,
    image: chickenLeg,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '1 pc', price: 69 },
      { name: '2 pcs', price: 129 },
    ],
  },
  {
    id: 6,
    name: 'Crispy Chicken Strips',
    description: 'Crunchy, juicy strips with signature seasoning.',
    price: 89,
    image: chickenStrips,
    category: 'chicken',
    badges: [],
    variants: [
      { name: '3 pcs', price: 89 },
      { name: '5 pcs', price: 159 },
    ],
  },
  {
    id: 7,
    name: 'Korean Fried Chicken',
    description: 'Fresh chicken with special Korean spices, topped with sesame seeds. Our Specialty!',
    price: 159,
    image: koreanChicken,
    category: 'chicken',
    badges: ['new', 'spicy'],
    variants: [
      { name: '4 pcs', price: 159 },
    ],
  },

  // --- BURGERS ---
  {
    id: 8,
    name: 'Classic Mini Burgers',
    description: 'Crispy chicken with signature sauce and lettuce. Mini size but big taste.',
    price: 59,
    image: chickenBurger,
    category: 'burgers',
    badges: [],
    variants: [
      { name: '2 Burgers Pack', price: 59 },
      { name: '4 Burgers Pack', price: 119 },
    ],
  },
  {
    id: 9,
    name: 'Peri Peri Mini Burgers',
    description: 'Peri peri crispy chicken with spicy mayo & onion. Mini size but big taste.',
    price: 59,
    image: chickenBurger,
    category: 'burgers',
    badges: ['spicy'],
    variants: [
      { name: '2 Burgers Pack', price: 59 },
      { name: '4 Burgers Pack', price: 119 },
    ],
  },
  {
    id: 10,
    name: 'BBQ Cheese Mini Burgers',
    description: 'BBQ glazed chicken + cheese slice. Mini size but big taste.',
    price: 59,
    image: chickenBurger,
    category: 'burgers',
    badges: [],
    variants: [
      { name: '2 Burgers Pack', price: 59 },
      { name: '4 Burgers Pack', price: 119 },
    ],
  },
  {
    id: 11,
    name: 'Korean Mini Burgers',
    description: 'Korean spiced chicken + sesame mayo. Happy Wings Special!',
    price: 59,
    image: chickenBurger,
    category: 'burgers',
    badges: ['new'],
    variants: [
      { name: '2 Burgers Pack', price: 59 },
      { name: '4 Burgers Pack', price: 119 },
    ],
  },

  // --- VEG ITEMS ---
  {
    id: 12,
    name: 'Veg Burger',
    description: 'Crispy vegetable patty burger with fresh lettuce and sauce.',
    price: 79,
    image: vegBurger,
    category: 'veg',
    badges: [],
  },
  {
    id: 13,
    name: 'Potato Cheese Balls',
    description: 'Delicious golden crispy balls stuffed with potato and melted cheese.',
    price: 89,
    image: potatoCheeseBalls,
    category: 'veg',
    badges: [],
  },
  {
    id: 14,
    name: 'Veg Nuggets',
    description: 'Golden brown crispy vegetable nuggets served with delicious dip.',
    price: 79,
    image: vegNuggets,
    category: 'veg',
    badges: [],
  },
  {
    id: 15,
    name: 'Jalapeño Cheese Balls',
    description: 'Crispy cheese balls with a kick of spicy chopped jalapeños.',
    price: 109,
    image: jalapenoCheeseBalls,
    category: 'veg',
    badges: ['spicy'],
  },
  {
    id: 16,
    name: 'Sweet Corn Ball',
    description: 'Golden crispy bites with tender sweet corn filling.',
    price: 99,
    image: cornBalls,
    category: 'veg',
    badges: [],
  },
  {
    id: 17,
    name: 'Cheese Corn Balls',
    description: 'Crispy balls with rich cheese and sweet corn core.',
    price: 89,
    image: cheeseCornBalls,
    category: 'veg',
    badges: [],
  },
  {
    id: 18,
    name: 'Veg Fingers',
    description: 'Crispy seasoned vegetable finger strips.',
    price: 79,
    image: vegFingers,
    category: 'veg',
    badges: [],
  },

  // --- COMBOS ---
  {
    id: 19,
    name: 'Happy Box Combo',
    description: 'Includes: Any 2 Burgers + 2 Wings + Fries + Coke + Any 2 Sauces.',
    price: 169,
    image: happyBox,
    category: 'combos',
    badges: ['bestseller'],
  },
];

export default menuData;
