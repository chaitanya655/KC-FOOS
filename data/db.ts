import type { Restaurant } from '../types';

export const restaurants: Restaurant[] = [
  {
    "id": "rest001",
    "name": "Annapurna Veg Meals",
    "imageUrl": "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90004/c2771215a33c709b55f1b1350a41753c.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish002",
        "name": "Lemon Rice",
        "price": 120,
        "isVeg": true,
        "description": "Zesty lemon-flavored rice tempered with curry leaves and mustard seeds.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/5/19222625/e4854f022134447012354a3e200e5728.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish003",
        "name": "Curd Rice",
        "price": 110,
        "isVeg": true,
        "description": "Comforting and creamy yogurt rice, a perfect end to any South Indian meal.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90004/041c9b1f8093156c12ce4663b6b19163.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest002",
    "name": "Bawarchi Tiffins",
    "imageUrl": "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90004/b3297a7e875323a6f11e974e403d15a4.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish005",
        "name": "Mutton Biryani",
        "price": 380,
        "isVeg": false,
        "description": "Rich and flavorful biryani with tender mutton pieces, a true royal treat.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/4/90004/d21213915104437e5f3f01c313274291.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish006",
        "name": "Idli with Sambar",
        "price": 100,
        "isVeg": true,
        "description": "Soft, fluffy steamed rice cakes served with a flavorful lentil-based vegetable stew.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/5/91635/e4d092233f2c3b28b5a03e1e5e6b77c3.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest003",
    "name": "Paradise Biryani Point",
    "imageUrl": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90004/5f9c57d5440263f101b0f444855f462a.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish008",
        "name": "Supreme Chicken Biryani",
        "price": 350,
        "isVeg": false,
        "description": "Succulent chicken pieces layered with fragrant basmati rice and cooked to perfection.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90004/f88a4c82823a232b7ae4f2c5d64802c6.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish009",
        "name": "Paneer Biryani",
        "price": 300,
        "isVeg": true,
        "description": "A vegetarian delight with soft paneer cubes in a flavorful biryani masala.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/9/18992029/c09b85c3080b435252b47f078650f9a7.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest004",
    "name": "Chutneys",
    "imageUrl": "https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/7/90307/8a646c07a389f4104279090c2e43153c.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish011",
        "name": "Babai Hotel Idli",
        "price": 120,
        "isVeg": true,
        "description": "Super soft idlis topped with a dollop of white butter and served with chutney.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/7/90307/5443d3cc9b56f8f1a23e9a58b0a1a5b2.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish012",
        "name": "MLA Pesarattu",
        "price": 190,
        "isVeg": true,
        "description": "A classic Andhra Pesarattu stuffed with delicious upma, a wholesome meal.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/93123/255b57f20252873a4a2f8b5065911e25.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest005",
    "name": "Shah Ghouse Cafe",
    "imageUrl": "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/90183/6b42f6136d812328405b583f608a0d2f.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish014",
        "name": "Chicken 65",
        "price": 260,
        "isVeg": false,
        "description": "Spicy, deep-fried chicken bites bursting with flavor from curry leaves and chilies.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/3/90183/2c554909a5676b9f2d334515a133f678.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish015",
        "name": "Tangdi Kebab",
        "price": 320,
        "isVeg": false,
        "description": "Juicy chicken drumsticks marinated in spices and grilled to perfection in a tandoor.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/90183/c90a2a464227301c2776c243fab59a6d.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest006",
    "name": "Minerva Coffee Shop",
    "imageUrl": "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/0/90110/39732770259fb1432f4a47517c5b3644.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish017",
        "name": "Poori with Potato Masala",
        "price": 130,
        "isVeg": true,
        "description": "Fluffy, deep-fried bread served with a savory and mildly spiced potato curry.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/0/90110/b1c31e67b226e632d201314643324f60.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish018",
        "name": "Vegetable Cutlet",
        "price": 140,
        "isVeg": true,
        "description": "Crispy patties made from mixed vegetables, served with mint chutney.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/0/90110/e16f1c4293f436d4f9f743a14441b80c.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest007",
    "name": "Pista House",
    "imageUrl": "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/90183/6b42f6136d812328405b583f608a0d2f.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish020",
        "name": "Zafrani Biryani",
        "price": 390,
        "isVeg": false,
        "description": "A royal biryani infused with the delicate aroma and flavor of saffron.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/8/90188/833777f98e2985390c29f4b301c36069.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish021",
        "name": "Double Ka Meetha",
        "price": 150,
        "isVeg": true,
        "description": "A decadent Hyderabadi bread pudding dessert soaked in saffron-infused milk.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/90183/6d8c0e2581691316b1e6a12b902f5c71.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest008",
    "name": "Santosh Dhaba",
    "imageUrl": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/9/90319/bd39775f426c518e0a307061d4a04d2b.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish023",
        "name": "Veg Pulao",
        "price": 220,
        "isVeg": true,
        "description": "A fragrant one-pot rice dish made with mixed vegetables and aromatic spices.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/9/90319/d5138f654b087093d56f1ad1d47a4659.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish024",
        "name": "Butter Naan",
        "price": 60,
        "isVeg": true,
        "description": "Soft and fluffy leavened bread cooked in a tandoor and slathered with butter.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/9/90319/5a9c148a4365c192c7336d33010b953a.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest009",
    "name": "Ohri's JIVA Imperia",
    "imageUrl": "https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/1/92061/a348398b584a56a643597d288d2281b3.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish026",
        "name": "Paneer Tikka",
        "price": 290,
        "isVeg": true,
        "description": "Cubes of paneer marinated in spices and grilled in a tandoor.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/1/92061/52e50587a8f10826ab562c5c938a16c7.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish027",
        "name": "Dahi Puri",
        "price": 150,
        "isVeg": true,
        "description": "A popular chaat item with crispy puris filled with potatoes, chutneys, and yogurt.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/1/92061/e61d87e07d3588265a04c5539f018d9f.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest010",
    "name": "Rayalaseema Ruchulu",
    "imageUrl": "https://images.pexels.com/photos/2773940/pexels-photo-2773940.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90294/f7c166d333066804d80424578b8a4a58.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish029",
        "name": "Ragi Sangati",
        "price": 180,
        "isVeg": true,
        "description": "Healthy and nutritious finger millet balls, a traditional staple served with curry.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90294/9f27c216259021e105e468cf5b2d718e.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish030",
        "name": "Gongura Mutton",
        "price": 420,
        "isVeg": false,
        "description": "A tangy and spicy delicacy where tender mutton is cooked with sour sorrel leaves.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90294/44428489f41757833a69894411135cce.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest011",
    "name": "The Pizza Project",
    "imageUrl": "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.5,
    "description": "Gourmet, wood-fired pizzas with fresh ingredients and creative toppings.",
    "isVeg": false,
    "address": "Gachibowli",
    "cuisine": "Pizza, Italian",
    "deliveryTime": "30-35 mins",
    "offer": "FLAT 150 OFF",
    "dishes": [
      {
        "id": "dish031",
        "name": "Margherita Pizza",
        "price": 350,
        "isVeg": true,
        "description": "Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, basil, and olive oil.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/20127523/84102d515a201c90f854619d4b971a6e.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish032",
        "name": "Pepperoni Pizza",
        "price": 450,
        "isVeg": false,
        "description": "A crowd-pleaser topped with spicy pepperoni slices and mozzarella cheese.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/20127523/18256111f1fdb1683447c20c061730da.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish033",
        "name": "Garlic Bread with Cheese",
        "price": 220,
        "isVeg": true,
        "description": "Toasted French bread with garlic butter, herbs, and melted mozzarella.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/20127523/e8064d8583487a55018693c042125f4d.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest012",
    "name": "Wok Republic",
    "imageUrl": "https://images.pexels.com/photos/1233959/pexels-photo-1233959.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.3,
    "description": "Authentic Pan-Asian street food with a modern twist.",
    "isVeg": false,
    "address": "Kondapur",
    "cuisine": "Chinese, Pan-Asian",
    "deliveryTime": "25-30 mins",
    "offer": "NOODLES AT ₹149",
    "dishes": [
      {
        "id": "dish034",
        "name": "Chicken Hakka Noodles",
        "price": 280,
        "isVeg": false,
        "description": "Stir-fried noodles with chicken, vegetables, and a savory soy sauce blend.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/19137453/43b7496c8038f4f2c0692795f9e2e6c4.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish035",
        "name": "Chilli Paneer",
        "price": 260,
        "isVeg": true,
        "description": "Batter-fried paneer tossed in a spicy and tangy chilli sauce.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/19137453/4a5a549646b5d92f767a1f592395a329.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish036",
        "name": "Veg Spring Rolls",
        "price": 200,
        "isVeg": true,
        "description": "Crispy fried rolls stuffed with a delicious mix of vegetables.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/19137453/26b911767425f381395f87b897918f6f.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest013",
    "name": "The Chocolate Room",
    "imageUrl": "https://images.pexels.com/photos/367308/pexels-photo-367308.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.6,
    "description": "A paradise for chocolate lovers with a decadent menu of desserts and shakes.",
    "isVeg": true,
    "address": "Film Nagar",
    "cuisine": "Desserts, Cafe, Beverages",
    "deliveryTime": "20-25 mins",
    "offer": "DESSERT ON US",
    "dishes": [
      {
        "id": "dish037",
        "name": "Chocolate Lava Cake",
        "price": 250,
        "isVeg": true,
        "description": "Warm chocolate cake with a gooey, molten chocolate center, served with vanilla ice cream.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/0/90830/23d72a75cdb459c55d045a198c61e06c.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish038",
        "name": "Belgian Waffles",
        "price": 280,
        "isVeg": true,
        "description": "Crispy waffles topped with chocolate sauce, whipped cream, and fresh fruits.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/0/90830/6902500c6d2dd0a514d7c2a74c2e21b7.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish039",
        "name": "Kit Kat Shake",
        "price": 230,
        "isVeg": true,
        "description": "A thick and creamy milkshake blended with Kit Kat chocolate bars.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/0/90830/28f7fc33481b21901c80f4f9f1b4020a.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest014",
    "name": "Salad Stories",
    "imageUrl": "https://images.pexels.com/photos/1059905/pexels-photo-1059905.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.7,
    "description": "Fresh, healthy, and delicious salads, bowls, and juices for a guilt-free meal.",
    "isVeg": false,
    "address": "Hitech City",
    "cuisine": "Healthy Food, Salads, Juices",
    "deliveryTime": "15-20 mins",
    "offer": "HEALTHY BOWLS",
    "dishes": [
      {
        "id": "dish040",
        "name": "Quinoa Salad Bowl",
        "price": 320,
        "isVeg": true,
        "description": "A nutritious bowl of quinoa, mixed greens, chickpeas, and a lemon vinaigrette dressing.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/6/18607906/0b8e92f256a420456e3c15379b9a671f.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish041",
        "name": "Grilled Chicken Salad",
        "price": 380,
        "isVeg": false,
        "description": "Tender grilled chicken breast on a bed of lettuce, cherry tomatoes, and cucumbers.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/6/18607906/7d2a33f377501a357f892ce01d36c2e3.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish042",
        "name": "Detox Green Juice",
        "price": 180,
        "isVeg": true,
        "description": "A refreshing blend of spinach, cucumber, green apple, and ginger.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/6/18607906/a274577f8671b7858c2f1f53e3d2c161.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest015",
    "name": "Dhaba Estd 1986",
    "imageUrl": "https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.4,
    "description": "Experience the rustic charm and robust flavors of a traditional Punjabi dhaba.",
    "isVeg": false,
    "address": "Kukatpally",
    "cuisine": "North Indian, Mughlai",
    "deliveryTime": "35-40 mins",
    "offer": "BOGO DEALS",
    "dishes": [
      {
        "id": "dish043",
        "name": "Butter Chicken",
        "price": 450,
        "isVeg": false,
        "description": "Classic tandoori chicken simmered in a creamy tomato and butter gravy.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/18442844/df82a1e80922f98f731154c1851e2c60.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish044",
        "name": "Dal Makhani",
        "price": 350,
        "isVeg": true,
        "description": "Black lentils slow-cooked overnight with butter and cream for a rich flavor.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/18442844/7821c607f2b1c09939e44d375a071060.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish045",
        "name": "Garlic Naan",
        "price": 90,
        "isVeg": true,
        "description": "Soft, fluffy naan bread topped with chopped garlic and butter.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/18442844/89b14041b6cde29ab26e0339a04a5c92.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest016",
    "name": "Gokul Chaat",
    "imageUrl": "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.8,
    "description": "A legendary spot in Hyderabad for delicious and authentic street food and chaat.",
    "isVeg": true,
    "address": "Koti",
    "cuisine": "Street Food, Chaat",
    "deliveryTime": "25-30 mins",
    "offer": "CHAAT AT ₹79",
    "dishes": [
      {
        "id": "dish046",
        "name": "Samosa Chaat",
        "price": 100,
        "isVeg": true,
        "description": "Crushed samosas topped with yogurt, tamarind chutney, and spices.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/2/90212/8c353f4d76a5b6f3b063d80b6281729c.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish047",
        "name": "Pani Puri",
        "price": 80,
        "isVeg": true,
        "description": "Crispy hollow puris filled with spicy tangy water, potatoes, and chickpeas.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/2/90212/28d712f8a846f49a59b8543788734914.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish048",
        "name": "Pav Bhaji",
        "price": 150,
        "isVeg": true,
        "description": "A spicy mash of mixed vegetables served with soft, buttered pav bread.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/2/90212/82676a6e5509743c33d4ef83c483b8b1.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest017",
    "name": "Absolute Barbecues",
    "imageUrl": "https://images.pexels.com/photos/3186654/pexels-photo-3186654.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.9,
    "description": "The ultimate wish-grill buffet experience with live grills on your table.",
    "isVeg": false,
    "address": "Jubilee Hills",
    "cuisine": "Barbecue, Buffet",
    "deliveryTime": "40-45 mins",
    "offer": "GRILL BOX @ 599",
    "dishes": [
      {
        "id": "dish049",
        "name": "Barbecue Grill Box (Non-Veg)",
        "price": 699,
        "isVeg": false,
        "description": "A curated box of assorted grilled meats, prawns, and starters.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/18165783/39906d20353c7c7f9984d72836220556.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish050",
        "name": "Tandoori Prawns",
        "price": 550,
        "isVeg": false,
        "description": "Juicy prawns marinated in tandoori spices and grilled to perfection.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/18165783/4df30b4f2c5be1e0586f14b69389f46b.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish051",
        "name": "Grilled Pineapple",
        "price": 250,
        "isVeg": true,
        "description": "Smoky and sweet grilled pineapple slices with a hint of cinnamon.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/3/18165783/b282bc746c3b6d21d516d0042459021e.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest018",
    "name": "Cream Stone",
    "imageUrl": "https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.7,
    "description": "Where ice cream creations come to life on a frozen stone slab.",
    "isVeg": true,
    "address": "Ameerpet",
    "cuisine": "Ice Cream, Desserts",
    "deliveryTime": "15-20 mins",
    "offer": "2+1 ON SCOOPS",
    "dishes": [
      {
        "id": "dish052",
        "name": "Willy Wonka",
        "price": 220,
        "isVeg": true,
        "description": "A chocolate lover's dream with chocolate ice cream, choco chips, and fudge.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90204/a30c5e7b5f4705a6983086961fb0324b.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish053",
        "name": "Nutty Professor",
        "price": 240,
        "isVeg": true,
        "description": "Caramel and butterscotch ice cream mixed with roasted almonds and cashews.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90204/07b5a5b51336c5332f17849175d0b985.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish054",
        "name": "Fruit Exotica",
        "price": 260,
        "isVeg": true,
        "description": "Vanilla ice cream blended with fresh seasonal fruits like apple, kiwi, and litchi.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/chains/4/90204/2491a27c0017fc80e30d1c072b2204c3.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest019",
    "name": "Burger Hub",
    "imageUrl": "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.2,
    "description": "Serving juicy, handcrafted burgers and crispy golden fries.",
    "isVeg": false,
    "address": "Manikonda",
    "cuisine": "Burgers, Fast Food",
    "deliveryTime": "25-30 mins",
    "offer": "BURGER + FRIES COMBO",
    "dishes": [
      {
        "id": "dish055",
        "name": "Classic Chicken Burger",
        "price": 280,
        "isVeg": false,
        "description": "A succulent grilled chicken patty with lettuce, tomatoes, and a special sauce.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/8/19515918/d5b5f4d1f3b23e7e22e9e623c21a1f0a.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish056",
        "name": "Spicy Veggie Burger",
        "price": 240,
        "isVeg": true,
        "description": "A crispy vegetable patty with a spicy mayo, onions, and jalapenos.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/8/19515918/395bb5b11202e8c253b216c59d95f414.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish057",
        "name": "Peri Peri Fries",
        "price": 150,
        "isVeg": true,
        "description": "Classic french fries tossed in a fiery peri peri spice mix.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/8/19515918/5980a37e42d2a45d064506371c6f44d8.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  },
  {
    "id": "rest020",
    "name": "Hotel Shadab",
    "imageUrl": "https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.6,
    "description": "An Old City gem famous for its authentic Hyderabadi cuisine and rich flavors.",
    "isVeg": false,
    "address": "Ghansi Bazaar",
    "cuisine": "Hyderabadi, Mughlai",
    "deliveryTime": "40-45 mins",
    "offer": "KEBABS AT ₹250",
    "dishes": [
      {
        "id": "dish058",
        "name": "Mutton Seekh Kebab",
        "price": 350,
        "isVeg": false,
        "description": "Minced mutton blended with spices, skewered, and grilled to perfection.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/1/90171/598687259f9720b7596c342733a1e261.jpg?fit=around|750:500&crop=750:500;*,*",
        "bestseller": true
      },
      {
        "id": "dish059",
        "name": "Talawa Gosht",
        "price": 400,
        "isVeg": false,
        "description": "Spicy, pan-fried mutton pieces, a classic Hyderabadi appetizer.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/1/90171/b21b72a4e2373ed09869502b1f813c9e.jpg?fit=around|750:500&crop=750:500;*,*"
      },
      {
        "id": "dish060",
        "name": "Qubani Ka Meetha",
        "price": 180,
        "isVeg": true,
        "description": "A traditional Hyderabadi dessert made from dried apricots, served with cream.",
        "imageUrl": "https://b.zmtcdn.com/data/pictures/1/90171/34d31e9c2c62a8c3e800a747c34b6b55.jpg?fit=around|750:500&crop=750:500;*,*"
      }
    ]
  }
];
