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
        "imageUrl": "https://images.pexels.com/photos/9551327/pexels-photo-9551327.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish002",
        "name": "Lemon Rice",
        "price": 120,
        "isVeg": true,
        "description": "Zesty lemon-flavored rice tempered with curry leaves and mustard seeds.",
        "imageUrl": "https://images.pexels.com/photos/14537330/pexels-photo-14537330.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish003",
        "name": "Curd Rice",
        "price": 110,
        "isVeg": true,
        "description": "Comforting and creamy yogurt rice, a perfect end to any South Indian meal.",
        "imageUrl": "https://images.pexels.com/photos/12949511/pexels-photo-12949511.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish005",
        "name": "Mutton Biryani",
        "price": 380,
        "isVeg": false,
        "description": "Rich and flavorful biryani with tender mutton pieces, a true royal treat.",
        "imageUrl": "https://images.pexels.com/photos/7394236/pexels-photo-7394236.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish006",
        "name": "Idli with Sambar",
        "price": 100,
        "isVeg": true,
        "description": "Soft, fluffy steamed rice cakes served with a flavorful lentil-based vegetable stew.",
        "imageUrl": "https://images.pexels.com/photos/5419241/pexels-photo-5419241.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/18259344/pexels-photo-18259344.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish008",
        "name": "Supreme Chicken Biryani",
        "price": 350,
        "isVeg": false,
        "description": "Succulent chicken pieces layered with fragrant basmati rice and cooked to perfection.",
        "imageUrl": "https://images.pexels.com/photos/10764516/pexels-photo-10764516.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish009",
        "name": "Paneer Biryani",
        "price": 300,
        "isVeg": true,
        "description": "A vegetarian delight with soft paneer cubes in a flavorful biryani masala.",
        "imageUrl": "https://images.pexels.com/photos/16010531/pexels-photo-16010531.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish011",
        "name": "Babai Hotel Idli",
        "price": 120,
        "isVeg": true,
        "description": "Super soft idlis topped with a dollop of white butter and served with chutney.",
        "imageUrl": "https://images.pexels.com/photos/18946765/pexels-photo-18946765.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish012",
        "name": "MLA Pesarattu",
        "price": 190,
        "isVeg": true,
        "description": "A classic Andhra Pesarattu stuffed with delicious upma, a wholesome meal.",
        "imageUrl": "https://images.pexels.com/photos/8791557/pexels-photo-8791557.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/7732049/pexels-photo-7732049.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish014",
        "name": "Chicken 65",
        "price": 260,
        "isVeg": false,
        "description": "Spicy, deep-fried chicken bites bursting with flavor from curry leaves and chilies.",
        "imageUrl": "https://images.pexels.com/photos/8118742/pexels-photo-8118742.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish015",
        "name": "Tangdi Kebab",
        "price": 320,
        "isVeg": false,
        "description": "Juicy chicken drumsticks marinated in spices and grilled to perfection in a tandoor.",
        "imageUrl": "https://images.pexels.com/photos/6033985/pexels-photo-6033985.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/302896/pexels-photo-302896.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish017",
        "name": "Poori with Potato Masala",
        "price": 130,
        "isVeg": true,
        "description": "Fluffy, deep-fried bread served with a savory and mildly spiced potato curry.",
        "imageUrl": "https://images.pexels.com/photos/14883477/pexels-photo-14883477.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish018",
        "name": "Vegetable Cutlet",
        "price": 140,
        "isVeg": true,
        "description": "Crispy patties made from mixed vegetables, served with mint chutney.",
        "imageUrl": "https://images.pexels.com/photos/13529731/pexels-photo-13529731.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/9558897/pexels-photo-9558897.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish020",
        "name": "Zafrani Biryani",
        "price": 390,
        "isVeg": false,
        "description": "A royal biryani infused with the delicate aroma and flavor of saffron.",
        "imageUrl": "https://images.pexels.com/photos/17650143/pexels-photo-17650143/free-photo-of-biryani-with-saffron-and-egg.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish021",
        "name": "Double Ka Meetha",
        "price": 150,
        "isVeg": true,
        "description": "A decadent Hyderabadi bread pudding dessert soaked in saffron-infused milk.",
        "imageUrl": "https://images.pexels.com/photos/13432328/pexels-photo-13432328.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/4049137/pexels-photo-4049137.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish023",
        "name": "Veg Pulao",
        "price": 220,
        "isVeg": true,
        "description": "A fragrant one-pot rice dish made with mixed vegetables and aromatic spices.",
        "imageUrl": "https://images.pexels.com/photos/11304724/pexels-photo-11304724.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish024",
        "name": "Butter Naan",
        "price": 60,
        "isVeg": true,
        "description": "Soft and fluffy leavened bread cooked in a tandoor and slathered with butter.",
        "imageUrl": "https://images.pexels.com/photos/9609842/pexels-photo-9609842.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish026",
        "name": "Paneer Tikka",
        "price": 290,
        "isVeg": true,
        "description": "Cubes of paneer marinated in spices and grilled in a tandoor.",
        "imageUrl": "https://images.pexels.com/photos/9609835/pexels-photo-9609835.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish027",
        "name": "Dahi Puri",
        "price": 150,
        "isVeg": true,
        "description": "A popular chaat item with crispy puris filled with potatoes, chutneys, and yogurt.",
        "imageUrl": "https://images.pexels.com/photos/15949666/pexels-photo-15949666/free-photo-of-indian-dahi-puri-snack.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/5741152/pexels-photo-5741152.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish029",
        "name": "Ragi Sangati",
        "price": 180,
        "isVeg": true,
        "description": "Healthy and nutritious finger millet balls, a traditional staple served with curry.",
        "imageUrl": "https://images.pexels.com/photos/8791557/pexels-photo-8791557.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish030",
        "name": "Gongura Mutton",
        "price": 420,
        "isVeg": false,
        "description": "A tangy and spicy delicacy where tender mutton is cooked with sour sorrel leaves.",
        "imageUrl": "https://images.pexels.com/photos/18817757/pexels-photo-18817757/free-photo-of-mutton-curry-with-rice.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish032",
        "name": "Pepperoni Pizza",
        "price": 450,
        "isVeg": false,
        "description": "A crowd-pleaser topped with spicy pepperoni slices and mozzarella cheese.",
        "imageUrl": "https://images.pexels.com/photos/1166120/pexels-photo-1166120.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish033",
        "name": "Garlic Bread with Cheese",
        "price": 220,
        "isVeg": true,
        "description": "Toasted French bread with garlic butter, herbs, and melted mozzarella.",
        "imageUrl": "https://images.pexels.com/photos/2741457/pexels-photo-2741457.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/2347311/pexels-photo-2347311.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish035",
        "name": "Chilli Paneer",
        "price": 260,
        "isVeg": true,
        "description": "Batter-fried paneer tossed in a spicy and tangy chilli sauce.",
        "imageUrl": "https://images.pexels.com/photos/9609848/pexels-photo-9609848.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish036",
        "name": "Veg Spring Rolls",
        "price": 200,
        "isVeg": true,
        "description": "Crispy fried rolls stuffed with a delicious mix of vegetables.",
        "imageUrl": "https://images.pexels.com/photos/4049130/pexels-photo-4049130.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    "id": "rest013",
    "name": "The Chocolate Room",
    "imageUrl": "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800",
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
        "imageUrl": "https://images.pexels.com/photos/4109943/pexels-photo-4109943.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish038",
        "name": "Belgian Waffles",
        "price": 280,
        "isVeg": true,
        "description": "Crispy waffles topped with chocolate sauce, whipped cream, and fresh fruits.",
        "imageUrl": "https://images.pexels.com/photos/7936171/pexels-photo-7936171.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish039",
        "name": "Kit Kat Shake",
        "price": 230,
        "isVeg": true,
        "description": "A thick and creamy milkshake blended with Kit Kat chocolate bars.",
        "imageUrl": "https://images.pexels.com/photos/5946970/pexels-photo-5946970.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish041",
        "name": "Grilled Chicken Salad",
        "price": 380,
        "isVeg": false,
        "description": "Tender grilled chicken breast on a bed of lettuce, cherry tomatoes, and cucumbers.",
        "imageUrl": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish042",
        "name": "Detox Green Juice",
        "price": 180,
        "isVeg": true,
        "description": "A refreshing blend of spinach, cucumber, green apple, and ginger.",
        "imageUrl": "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/2679501/pexels-photo-2679501.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish044",
        "name": "Dal Makhani",
        "price": 350,
        "isVeg": true,
        "description": "Black lentils slow-cooked overnight with butter and cream for a rich flavor.",
        "imageUrl": "https://images.pexels.com/photos/4552046/pexels-photo-4552046.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish045",
        "name": "Garlic Naan",
        "price": 90,
        "isVeg": true,
        "description": "Soft, fluffy naan bread topped with chopped garlic and butter.",
        "imageUrl": "https://images.pexels.com/photos/13814644/pexels-photo-13814644.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/8992923/pexels-photo-8992923.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish047",
        "name": "Pani Puri",
        "price": 80,
        "isVeg": true,
        "description": "Crispy hollow puris filled with spicy tangy water, potatoes, and chickpeas.",
        "imageUrl": "https://images.pexels.com/photos/3926124/pexels-photo-3926124.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish048",
        "name": "Pav Bhaji",
        "price": 150,
        "isVeg": true,
        "description": "A spicy mash of mixed vegetables served with soft, buttered pav bread.",
        "imageUrl": "https://images.pexels.com/photos/5520141/pexels-photo-5520141.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/6210884/pexels-photo-6210884.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish050",
        "name": "Tandoori Prawns",
        "price": 550,
        "isVeg": false,
        "description": "Juicy prawns marinated in tandoori spices and grilled to perfection.",
        "imageUrl": "https://images.pexels.com/photos/10372439/pexels-photo-10372439.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish051",
        "name": "Grilled Pineapple",
        "price": 250,
        "isVeg": true,
        "description": "Smoky and sweet grilled pineapple slices with a hint of cinnamon.",
        "imageUrl": "https://images.pexels.com/photos/1211899/pexels-photo-1211899.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish053",
        "name": "Nutty Professor",
        "price": 240,
        "isVeg": true,
        "description": "Caramel and butterscotch ice cream mixed with roasted almonds and cashews.",
        "imageUrl": "https://images.pexels.com/photos/1082344/pexels-photo-1082344.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish054",
        "name": "Fruit Exotica",
        "price": 260,
        "isVeg": true,
        "description": "Vanilla ice cream blended with fresh seasonal fruits like apple, kiwi, and litchi.",
        "imageUrl": "https://images.pexels.com/photos/3727250/pexels-photo-3727250.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish056",
        "name": "Spicy Veggie Burger",
        "price": 240,
        "isVeg": true,
        "description": "A crispy vegetable patty with a spicy mayo, onions, and jalapenos.",
        "imageUrl": "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish057",
        "name": "Peri Peri Fries",
        "price": 150,
        "isVeg": true,
        "description": "Classic french fries tossed in a fiery peri peri spice mix.",
        "imageUrl": "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=800"
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
        "imageUrl": "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish059",
        "name": "Talawa Gosht",
        "price": 400,
        "isVeg": false,
        "description": "Spicy, pan-fried mutton pieces, a classic Hyderabadi appetizer.",
        "imageUrl": "https://images.pexels.com/photos/18817757/pexels-photo-18817757/free-photo-of-mutton-curry-with-rice.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish060",
        "name": "Qubani Ka Meetha",
        "price": 180,
        "isVeg": true,
        "description": "A traditional Hyderabadi dessert made from dried apricots, served with cream.",
        "imageUrl": "https://images.pexels.com/photos/13432328/pexels-photo-13432328.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  },
  {
    "id": "rest021",
    "name": "Pasta Palace & Pizzeria",
    "imageUrl": "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800",
    "rating": 4.4,
    "description": "Authentic Italian pasta and classic pizzas in a cozy setting.",
    "isVeg": false,
    "address": "Banjara Hills",
    "cuisine": "Italian, Pasta, Pizza",
    "deliveryTime": "35-40 mins",
    "offer": "COMBO DEALS",
    "dishes": [
      {
        "id": "dish061",
        "name": "Spaghetti Carbonara",
        "price": 380,
        "isVeg": false,
        "description": "Classic carbonara with pancetta, egg yolk, and pecorino cheese.",
        "imageUrl": "https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=800",
        "bestseller": true
      },
      {
        "id": "dish062",
        "name": "Pesto Penne",
        "price": 340,
        "isVeg": true,
        "description": "Penne pasta tossed in a fresh basil pesto sauce with cherry tomatoes.",
        "imageUrl": "https://images.pexels.com/photos/1256875/pexels-photo-1256875.jpeg?auto=compress&cs=tinysrgb&w=800"
      },
      {
        "id": "dish063",
        "name": "Tiramisu",
        "price": 250,
        "isVeg": true,
        "description": "Classic Italian coffee-flavored dessert with ladyfingers and mascarpone.",
        "imageUrl": "https://images.pexels.com/photos/3727255/pexels-photo-3727255.jpeg?auto=compress&cs=tinysrgb&w=800"
      }
    ]
  }
];