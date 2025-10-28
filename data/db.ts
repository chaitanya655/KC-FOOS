import type { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    "id": "rest001",
    "name": "Annapurna Veg Meals",
    "imageUrl": "https://images.unsplash.com/photo-1596239121856-42337b2b73b2?q=80&w=800",
    "rating": 4.5,
    "description": "Traditional Andhra-style vegetarian meals served on banana leaves.",
    "isVeg": true,
    "address": "Banjara Hills",
    "cuisine": "South Indian, Thali",
    "deliveryTime": "25-30 mins",
    "offer": "THALI AT ₹250",
    "dishes": [
      {
        "id": "dish001",
        "name": "Thali Meals (Veg)",
        "price": 250,
        "isVeg": true,
        "description": "A complete vegetarian platter with rice, sambar, rasam, curries, and dessert.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1695288243931-483163355004?q=80&w=600",
        "bestseller": true
      },
      {
        "id": "dish002",
        "name": "Lemon Rice",
        "price": 120,
        "isVeg": true,
        "description": "Zesty lemon-flavored rice tempered with curry leaves and mustard seeds.",
        "imageUrl": "https://images.unsplash.com/photo-1627662381292-b2a24c2b0362?q=80&w=600"
      },
      {
        "id": "dish003",
        "name": "Curd Rice",
        "price": 110,
        "isVeg": true,
        "description": "Comforting and creamy yogurt rice, a perfect end to any South Indian meal.",
        "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest002",
    "name": "Bawarchi Tiffins",
    "imageUrl": "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=800",
    "rating": 4.2,
    "description": "Your go-to spot for authentic Hyderabadi tiffins and biryanis.",
    "isVeg": false,
    "address": "Nallakunta",
    "cuisine": "Biryani, Tiffins",
    "deliveryTime": "30-35 mins",
    "offer": "ITEMS AT ₹99",
    "dishes": [
      {
        "id": "dish004",
        "name": "Hyderabadi Chicken Biryani",
        "price": 320,
        "isVeg": false,
        "description": "The world-famous aromatic basmati rice cooked with succulent chicken and spices.",
        "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600",
        "bestseller": true
      },
      {
        "id": "dish005",
        "name": "Mutton Biryani",
        "price": 380,
        "isVeg": false,
        "description": "Rich and flavorful biryani with tender mutton pieces, a true royal treat.",
        "imageUrl": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=600"
      },
      {
        "id": "dish006",
        "name": "Idli with Sambar",
        "price": 100,
        "isVeg": true,
        "description": "Soft, fluffy steamed rice cakes served with a flavorful lentil-based vegetable stew.",
        "imageUrl": "https://images.unsplash.com/photo-1606814540412-28c474916a4a?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest003",
    "name": "Paradise Biryani Point",
    "imageUrl": "https://images.unsplash.com/photo-1565557623262-b9a25b03a661?q=80&w=800",
    "rating": 4.8,
    "description": "An iconic Hyderabad institution, renowned for its legendary Biryani.",
    "isVeg": false,
    "address": "Secunderabad",
    "cuisine": "Biryani, North Indian",
    "deliveryTime": "20-25 mins",
    "offer": "50% OFF UPTO ₹100",
    "dishes": [
      {
        "id": "dish007",
        "name": "Royal Mutton Biryani",
        "price": 410,
        "isVeg": false,
        "description": "The classic, aromatic Paradise Mutton Biryani, a feast for the senses.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1695288243931-483163355004?q=80&w=600"
      },
      {
        "id": "dish008",
        "name": "Supreme Chicken Biryani",
        "price": 350,
        "isVeg": false,
        "description": "Succulent chicken pieces layered with fragrant basmati rice and cooked to perfection.",
        "imageUrl": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=600",
        "bestseller": true
      },
      {
        "id": "dish009",
        "name": "Paneer Biryani",
        "price": 300,
        "isVeg": true,
        "description": "A vegetarian delight with soft paneer cubes in a flavorful biryani masala.",
        "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest004",
    "name": "Chutneys",
    "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800",
    "rating": 4.6,
    "description": "Famous for its wide variety of chutneys and authentic South Indian vegetarian tiffins.",
    "isVeg": true,
    "address": "Jubilee Hills",
    "cuisine": "South Indian, Tiffins",
    "deliveryTime": "35-40 mins",
    "offer": "DOSA FEST",
    "dishes": [
      {
        "id": "dish010",
        "name": "Ghee Karam Dosa",
        "price": 180,
        "isVeg": true,
        "description": "A crispy dosa smeared with a spicy powder and topped with a generous amount of ghee.",
        "imageUrl": "https://images.unsplash.com/photo-1668665793318-1025f826360c?q=80&w=600",
        "bestseller": true
      },
      {
        "id": "dish011",
        "name": "Babai Hotel Idli",
        "price": 120,
        "isVeg": true,
        "description": "Super soft idlis topped with a dollop of white butter and served with chutney.",
        "imageUrl": "https://images.unsplash.com/photo-1606814540412-28c474916a4a?q=80&w=600"
      },
      {
        "id": "dish012",
        "name": "MLA Pesarattu",
        "price": 190,
        "isVeg": true,
        "description": "A classic Andhra Pesarattu stuffed with delicious upma, a wholesome meal.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1695288243931-483163355004?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest005",
    "name": "Shah Ghouse Cafe",
    "imageUrl": "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?q=80&w=800",
    "rating": 4.4,
    "description": "A legendary eatery known for its authentic Hyderabadi Haleem and Biryani.",
    "isVeg": false,
    "address": "Tolichowki",
    "cuisine": "Mughlai, Biryani",
    "deliveryTime": "25-30 mins",
    "offer": "ITEMS AT ₹199",
    "dishes": [
      {
        "id": "dish013",
        "name": "Special Mutton Haleem",
        "price": 280,
        "isVeg": false,
        "description": "A rich and slow-cooked delicacy of meat, lentils, and wheat, a Ramzan specialty.",
        "imageUrl": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=600",
        "bestseller": true
      },
      {
        "id": "dish014",
        "name": "Chicken 65",
        "price": 260,
        "isVeg": false,
        "description": "Spicy, deep-fried chicken bites bursting with flavor from curry leaves and chilies.",
        "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600"
      },
      {
        "id": "dish015",
        "name": "Tangdi Kebab",
        "price": 320,
        "isVeg": false,
        "description": "Juicy chicken drumsticks marinated in spices and grilled to perfection in a tandoor.",
        "imageUrl": "https://images.unsplash.com/photo-1565557623262-b9a25b03a661?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest006",
    "name": "Minerva Coffee Shop",
    "imageUrl": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=800",
    "rating": 4.3,
    "description": "A classic vegetarian restaurant offering delicious South Indian meals and tiffins.",
    "isVeg": true,
    "address": "Himayatnagar",
    "cuisine": "South Indian, Fast Food",
    "deliveryTime": "20-25 mins",
    "offer": "COMBO AT ₹199",
    "dishes": [
      {
        "id": "dish016",
        "name": "Filter Coffee",
        "price": 80,
        "isVeg": true,
        "description": "Strong and aromatic South Indian filter coffee, the perfect pick-me-up.",
        "imageUrl": "https://images.unsplash.com/photo-1512152272829-e3139592d56f?q=80&w=600"
      },
      {
        "id": "dish017",
        "name": "Poori with Potato Masala",
        "price": 130,
        "isVeg": true,
        "description": "Fluffy, deep-fried bread served with a savory and mildly spiced potato curry.",
        "imageUrl": "https://images.unsplash.com/photo-1565557623262-b9a25b03a661?q=80&w=600"
      },
      {
        "id": "dish018",
        "name": "Vegetable Cutlet",
        "price": 140,
        "isVeg": true,
        "description": "Crispy patties made from mixed vegetables, served with mint chutney.",
        "imageUrl": "https://images.unsplash.com/photo-1596239121856-42337b2b73b2?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest007",
    "name": "Pista House",
    "imageUrl": "https://images.unsplash.com/photo-1626776878434-7132b414a342?q=80&w=800",
    "rating": 4.5,
    "description": "World-renowned for its Haleem and a wide range of bakery products.",
    "isVeg": false,
    "address": "Charminar",
    "cuisine": "Bakery, Desserts, Mughlai",
    "deliveryTime": "40-45 mins",
    "offer": "FREE DELIVERY",
    "dishes": [
      {
        "id": "dish019",
        "name": "Mutton Haleem",
        "price": 300,
        "isVeg": false,
        "description": "Award-winning Haleem known for its authentic taste and rich texture.",
        "imageUrl": "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?q=80&w=600",
        "bestseller": true
      },
      {
        "id": "dish020",
        "name": "Zafrani Biryani",
        "price": 390,
        "isVeg": false,
        "description": "A royal biryani infused with the delicate aroma and flavor of saffron.",
        "imageUrl": "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600"
      },
      {
        "id": "dish021",
        "name": "Double Ka Meetha",
        "price": 150,
        "isVeg": true,
        "description": "A decadent Hyderabadi bread pudding dessert soaked in saffron-infused milk.",
        "imageUrl": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest008",
    "name": "Santosh Dhaba",
    "imageUrl": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800",
    "rating": 4.1,
    "description": "A very popular vegetarian dhaba serving delicious North and South Indian dishes.",
    "isVeg": true,
    "address": "Abids",
    "cuisine": "North Indian, Punjabi",
    "deliveryTime": "30-35 mins",
    "offer": "50% OFF",
    "dishes": [
      {
        "id": "dish022",
        "name": "Paneer Butter Masala",
        "price": 280,
        "isVeg": true,
        "description": "Soft paneer cubes simmered in a rich, creamy, and buttery tomato gravy.",
        "imageUrl": "https://images.unsplash.com/photo-1565557623262-b9a25b03a661?q=80&w=600"
      },
      {
        "id": "dish023",
        "name": "Veg Pulao",
        "price": 220,
        "isVeg": true,
        "description": "A fragrant one-pot rice dish made with mixed vegetables and aromatic spices.",
        "imageUrl": "https://images.unsplash.com/photo-1627662381292-b2a24c2b0362?q=80&w=600"
      },
      {
        "id": "dish024",
        "name": "Butter Naan",
        "price": 60,
        "isVeg": true,
        "description": "Soft and fluffy leavened bread cooked in a tandoor and slathered with butter.",
        "imageUrl": "https://plus.unsplash.com/premium_photo-1695288243931-483163355004?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest009",
    "name": "Ohri's JIVA Imperia",
    "imageUrl": "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800",
    "rating": 4.3,
    "description": "A lavish vegetarian buffet restaurant with a royal ambiance and diverse menu.",
    "isVeg": true,
    "address": "Begumpet",
    "cuisine": "Buffet, North Indian",
    "deliveryTime": "45-50 mins",
    "offer": "BUFFET AT ₹400",
    "dishes": [
      {
        "id": "dish025",
        "name": "Vegetarian Buffet",
        "price": 400,
        "isVeg": true,
        "description": "An all-you-can-eat spread featuring a wide variety of starters, main courses, and desserts.",
        "imageUrl": "https://images.unsplash.com/photo-1596239121856-42337b2b73b2?q=80&w=600"
      },
      {
        "id": "dish026",
        "name": "Paneer Tikka",
        "price": 290,
        "isVeg": true,
        "description": "Cubes of paneer marinated in spices and grilled in a tandoor.",
        "imageUrl": "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?q=80&w=600"
      },
      {
        "id": "dish027",
        "name": "Dahi Puri",
        "price": 150,
        "isVeg": true,
        "description": "A popular chaat item with crispy puris filled with potatoes, chutneys, and yogurt.",
        "imageUrl": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=600"
      }
    ]
  },
  {
    "id": "rest010",
    "name": "Rayalaseema Ruchulu",
    "imageUrl": "https://images.unsplash.com/photo-1574936145849-c16757756f75?q=80&w=800",
    "rating": 4.7,
    "description": "Specializing in the fiery and rustic cuisine of the Rayalaseema region.",
    "isVeg": false,
    "address": "Madhapur",
    "cuisine": "Andhra, Rayalaseema",
    "deliveryTime": "30-35 mins",
    "offer": "20% OFF",
    "dishes": [
      {
        "id": "dish028",
        "name": "Natu Kodi Pulusu",
        "price": 360,
        "isVeg": false,
        "description": "A spicy country chicken curry, a signature dish of Rayalaseema.",
        "imageUrl": "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833?q=80&w=600"
      },
      {
        "id": "dish029",
        "name": "Ragi Sangati",
        "price": 180,
        "isVeg": true,
        "description": "Healthy and nutritious finger millet balls, a traditional staple served with curry.",
        "imageUrl": "https://images.unsplash.com/photo-1627662381292-b2a24c2b0362?q=80&w=600"
      },
      {
        "id": "dish030",
        "name": "Gongura Mutton",
        "price": 420,
        "isVeg": false,
        "description": "A tangy and spicy delicacy where tender mutton is cooked with sour sorrel leaves.",
        "imageUrl": "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=600"
      }
    ]
  }
];