import pantryIcon from '../icons/pantry.png';
import vegetablesIcon from '../icons/vegetables.png';
import fruitsIcon from '../icons/fruits.png';
import nutsIcon from '../icons/nuts.png';
import meatsIcon from '../icons/meats.png';
import seafoodIcon from '../icons/seafood.png';
import herbsIcon from '../icons/herbs.png';
import dairyIcon from '../icons/dairy-eggs.png';
import grainsIcon from '../icons/grains-carbs.png';
import saucesIcon from '../icons/sauces.png';

export const INGREDIENT_CATEGORIES = [
  {
    id: 'pantry',
    title: 'Pantry Essentials',
    icon: pantryIcon,
    items: [
      'all-purpose flour', 'baking powder', 'baking soda', 'butter', 'cocoa powder',
      'cornstarch', 'eggs', 'flour', 'heavy cream', 'honey', 'milk', 'brown sugar',
      'granulated sugar', 'powdered sugar', 'vanilla extract', 'yeast',
    ],
  },
  {
    id: 'vegetables',
    title: 'Vegetables & Greens',
    icon: vegetablesIcon,
    items: [
      'artichoke', 'asparagus', 'bell pepper', 'broccoli', 'brussels sprouts',
      'cabbage', 'carrot', 'cauliflower', 'celery', 'cucumber', 'garlic',
      'green beans', 'jalapeno', 'kale', 'lettuce', 'mushrooms', 'onion',
      'potato', 'shallot', 'spinach', 'tomato',
    ],
  },
  {
    id: 'fruits',
    title: 'Fruits',
    icon: fruitsIcon,
    items: [
      'apple', 'apricot', 'banana', 'blackberry', 'blueberry', 'cantaloupe',
      'cherry', 'coconut', 'cranberry', 'durian', 'grapes', 'grapefruit',
      'guava', 'honeydew', 'kiwi', 'lemon', 'lime', 'mango', 'orange',
      'papaya', 'peach', 'plum', 'raspberry', 'watermelon',
    ],
  },
  {
    id: 'nuts',
    title: 'Nuts & Seeds',
    icon: nutsIcon,
    items: [
      'almonds', 'brazil nuts', 'cashews', 'chestnuts', 'chia seeds', 'coconut',
      'flaxseeds', 'hazelnuts', 'hemp seeds', 'macadamia nuts', 'mustard seeds',
      'peanuts', 'pecans', 'pine nuts', 'pistachios', 'poppy seeds',
      'pumpkin seeds', 'quinoa', 'sesame seeds', 'sunflower seeds', 'walnuts',
    ],
  },
  {
    id: 'meats',
    title: 'Meats',
    icon: meatsIcon,
    items: [
      'beef', 'bison', 'buffalo', 'chicken', 'duck', 'emu', 'goose', 'lamb',
      'mutton', 'pheasant', 'pork', 'turkey', 'veal', 'venison',
    ],
  },
  {
    id: 'seafood',
    title: 'Fish & Seafood',
    icon: seafoodIcon,
    items: [
      'anchovies', 'barracuda', 'bass', 'catfish', 'caviar', 'cod', 'crab',
      'crawfish', 'cuttlefish', 'eel', 'lobster', 'octopus', 'oyster', 'prawns',
      'scallops', 'shark', 'shrimp', 'snails', 'squid', 'swordfish', 'trout',
      'whitefish', 'yellowtail',
    ],
  },
  {
    id: 'herbs',
    title: 'Herbs & Spices',
    icon: herbsIcon,
    items: [
      'basil', 'cardamom', 'cinnamon', 'cumin', 'dill', 'garlic powder',
      'ginger', 'mint', 'nutmeg', 'oregano', 'onion powder', 'paprika',
      'parsley', 'red pepper', 'rosemary', 'sage', 'turmeric', 'thyme',
    ],
  },
  {
    id: 'dairy',
    title: 'Dairy & Eggs',
    icon: dairyIcon,
    items: [
      'butter', 'butter milk', 'cheese', 'cream', 'sour cream', 'whipped cream',
      'ice cream', 'eggs', 'ghee', 'milk', 'plain yogurt', 'whey',
    ],
  },
  {
    id: 'grains',
    title: 'Grains & Carbs',
    icon: grainsIcon,
    items: [
      'barley', 'corn', 'black beans', 'kidney beans', 'lentils', 'millet',
      'oats', 'pasta', 'quinoa', 'white rice', 'brown rice', 'corn tortilla',
      'flour tortilla', 'mesa tortilla', 'wheat',
    ],
  },
  {
    id: 'sauces',
    title: 'Condiments & Sauces',
    icon: saucesIcon,
    items: [
      'barbecue sauce', 'chutney', 'fish sauce', 'hot sauce', 'hummus',
      'italian dressing', 'ketchup', 'mayonnaise', 'mustard', 'olive oil',
      'pesto', 'ranch', 'sesame oil', 'soy sauce', 'tahini', 'teriyaki sauce',
      'vinegar', 'worcestershire sauce',
    ],
  },
];

export const MEAL_TYPES = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Drink'];
