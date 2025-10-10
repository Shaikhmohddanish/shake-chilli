export type MenuCategory =
  | "pizza-veg"
  | "pizza-non-veg"
  | "pizza-special"
  | "pizza-2in1"
  | "burger"
  | "footlong-sandwich"
  | "french-fries"
  | "garlic-bread"
  | "coffee-hot"
  | "coffee-cold"
  | "milkshake"
  | "mocktail"
  | "combo"
  | "dessert"

export interface MenuItem {
  id: string
  slug: string
  name: string
  category: MenuCategory
  categoryDisplay: string
  description: string
  descriptionLong: string
  price:
    | number
    | { S?: number; M?: number; L?: number; regular?: number; large?: number; "6inch"?: number; "12inch"?: number }
  image: string
  tags: string[]
  isVeg: boolean
  isHalal: boolean
  isPopular?: boolean
  keywords: string[]
}

export const MENU_ITEMS: MenuItem[] = [
  // VEG PIZZA
  {
    id: "margherita-pizza",
    slug: "margherita-pizza",
    name: "Margherita Pizza",
    category: "pizza-veg",
    categoryDisplay: "Veg Pizza",
    description: "Classic Margherita with fresh mozzarella, tomato sauce, and basil",
    descriptionLong:
      "Our signature Margherita Pizza is made with hand-tossed dough, rich tomato sauce, premium mozzarella cheese, and fresh basil. A timeless classic that's perfect for pizza lovers in Mumbra and Shilphata. Available in Small, Medium, and Large sizes.",
    price: { S: 150, M: 280, L: 400 },
    image: "/images/pizza/margherita.jpg",
    tags: ["vegetarian", "classic", "cheese"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["best margherita pizza in mumbra", "pizza near shilphata", "veg pizza near me"],
  },
  {
    id: "double-cheese-margherita",
    slug: "double-cheese-margherita",
    name: "Double Cheese Margherita",
    category: "pizza-veg",
    categoryDisplay: "Veg Pizza",
    description: "Extra cheesy Margherita with double mozzarella",
    descriptionLong:
      "Love cheese? Our Double Cheese Margherita is loaded with twice the mozzarella for the ultimate cheese pull. Made fresh daily at our Shilphata location near Al-Hidaya School. Perfect for cheese lovers in Mumbra, Diva, and surrounding areas.",
    price: { S: 180, M: 300, L: 420 },
    image: "/images/pizza/double-cheese-margherita.jpg",
    tags: ["vegetarian", "extra cheese", "popular"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["double cheese pizza mumbra", "extra cheese pizza shilphata", "best cheese pizza near me"],
  },
  {
    id: "fresh-veggie-pizza",
    slug: "fresh-veggie-pizza",
    name: "Fresh Veggie Pizza",
    category: "pizza-veg",
    categoryDisplay: "Veg Pizza",
    description: "Loaded with fresh vegetables, bell peppers, onions, and olives",
    descriptionLong:
      "A healthy and delicious option loaded with fresh bell peppers, onions, tomatoes, olives, and mushrooms. Our Fresh Veggie Pizza is perfect for health-conscious pizza lovers in Mumbra and Shilphata. Made with the freshest ingredients daily.",
    price: { S: 200, M: 320, L: 440 },
    image: "/images/pizza/fresh-veggie.jpg",
    tags: ["vegetarian", "healthy", "vegetables"],
    isVeg: true,
    isHalal: true,
    keywords: ["veg pizza mumbra", "vegetable pizza shilphata", "healthy pizza near me"],
  },
  {
    id: "corn-delight-pizza",
    slug: "corn-delight-pizza",
    name: "Corn Delight Pizza",
    category: "pizza-veg",
    categoryDisplay: "Veg Pizza",
    description: "Sweet corn with cheese and special seasoning",
    descriptionLong:
      "A favorite among kids and adults alike! Our Corn Delight Pizza features sweet corn kernels, mozzarella cheese, and our special seasoning blend. Available for delivery in Mumbra, Shilphata, Diva, and nearby areas.",
    price: { S: 220, M: 340, L: 460 },
    image: "/images/pizza/corn-delight.jpg",
    tags: ["vegetarian", "sweet corn", "family favorite"],
    isVeg: true,
    isHalal: true,
    keywords: ["corn pizza mumbra", "sweet corn pizza shilphata", "kids pizza near me"],
  },
  {
    id: "paneer-pizza",
    slug: "paneer-pizza",
    name: "Paneer Pizza",
    category: "pizza-veg",
    categoryDisplay: "Veg Pizza",
    description: "Indian-style pizza with paneer cubes and spices",
    descriptionLong:
      "A fusion of Italian and Indian flavors! Our Paneer Pizza features marinated paneer cubes, bell peppers, onions, and a blend of Indian spices. One of the most popular pizzas in Mumbra and Shilphata. Perfect for those who love desi flavors.",
    price: { S: 250, M: 370, L: 500 },
    image: "/images/pizza/paneer.jpg",
    tags: ["vegetarian", "paneer", "indian fusion"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["paneer pizza mumbra", "indian pizza shilphata", "best paneer pizza near me"],
  },
  {
    id: "veg-veganza",
    slug: "veg-veganza",
    name: "Veg Veganza",
    category: "pizza-veg",
    categoryDisplay: "Veg Pizza",
    description: "Premium loaded veggie pizza with exotic toppings",
    descriptionLong:
      "Our premium Veg Veganza is loaded with exotic vegetables, premium cheese, and special herbs. A gourmet vegetarian pizza experience in Mumbra and Shilphata. Perfect for special occasions or when you want to treat yourself.",
    price: { S: 300, M: 420, L: 550 },
    image: "/images/pizza/veg-veganza.jpg",
    tags: ["vegetarian", "premium", "gourmet"],
    isVeg: true,
    isHalal: true,
    keywords: ["premium veg pizza mumbra", "gourmet pizza shilphata", "best veg pizza near me"],
  },

  // NON-VEG PIZZA
  {
    id: "chicken-tikka-pizza",
    slug: "chicken-tikka-pizza",
    name: "Chicken Tikka Pizza",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "Tandoori chicken tikka with onions and peppers",
    descriptionLong:
      "Our bestselling Chicken Tikka Pizza features tender tandoori chicken pieces, onions, bell peppers, and a special tikka sauce. Made with 100% halal chicken. The most popular non-veg pizza in Mumbra, Shilphata, and Diva. A must-try for chicken lovers!",
    price: { S: 200, M: 350, L: 480 },
    image: "/images/pizza/chicken-tikka.jpg",
    tags: ["non-vegetarian", "chicken", "tikka", "bestseller"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["chicken tikka pizza mumbra", "best chicken pizza shilphata", "halal pizza near me"],
  },
  {
    id: "chicken-spicy-pizza",
    slug: "chicken-spicy-pizza",
    name: "Chicken Spicy Pizza",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "Spicy chicken with jalapeños and hot sauce",
    descriptionLong:
      "For those who love it hot! Our Chicken Spicy Pizza is loaded with spicy chicken chunks, jalapeños, onions, and our signature hot sauce. Made with halal chicken. Perfect for spice lovers in Mumbra and Shilphata.",
    price: { S: 240, M: 370, L: 500 },
    image: "/images/pizza/chicken-spicy.jpg",
    tags: ["non-vegetarian", "chicken", "spicy", "hot"],
    isVeg: false,
    isHalal: true,
    keywords: ["spicy chicken pizza mumbra", "hot pizza shilphata", "spicy pizza near me"],
  },
  {
    id: "bbq-pizza",
    slug: "bbq-pizza",
    name: "BBQ Pizza",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "BBQ chicken with smoky sauce and cheese",
    descriptionLong:
      "Smoky and delicious! Our BBQ Pizza features tender chicken pieces marinated in BBQ sauce, topped with onions and mozzarella. Made with 100% halal chicken. A favorite in Mumbra, Shilphata, and nearby areas.",
    price: { S: 250, M: 400, L: 530 },
    image: "/images/pizza/bbq.jpg",
    tags: ["non-vegetarian", "chicken", "bbq", "smoky"],
    isVeg: false,
    isHalal: true,
    keywords: ["bbq pizza mumbra", "bbq chicken pizza shilphata", "best bbq pizza near me"],
  },
  {
    id: "golden-delight-pizza",
    slug: "golden-delight-pizza",
    name: "Golden Delight Pizza",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "Premium chicken pizza with golden corn and special sauce",
    descriptionLong:
      "A premium combination of tender chicken, sweet corn, and our special golden sauce. The Golden Delight Pizza is one of our signature creations, loved by customers in Mumbra, Shilphata, Diva, and Dosti areas.",
    price: { S: 300, M: 450, L: 580 },
    image: "/images/pizza/golden-delight.jpg",
    tags: ["non-vegetarian", "chicken", "premium", "signature"],
    isVeg: false,
    isHalal: true,
    keywords: ["premium chicken pizza mumbra", "golden delight pizza shilphata", "best chicken pizza near me"],
  },
  {
    id: "chicken-vegenza",
    slug: "chicken-vegenza",
    name: "Chicken Vegenza",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "Loaded chicken pizza with vegetables and cheese",
    descriptionLong:
      "The ultimate loaded pizza! Chicken Vegenza combines tender halal chicken with fresh vegetables, premium cheese, and our special herbs. A complete meal in itself, perfect for sharing with family in Mumbra and Shilphata.",
    price: { S: 350, M: 500, L: 630 },
    image: "/images/pizza/chicken-vegenza.jpg",
    tags: ["non-vegetarian", "chicken", "loaded", "premium"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["loaded chicken pizza mumbra", "chicken vegenza shilphata", "best loaded pizza near me"],
  },
  {
    id: "chicken-italian",
    slug: "chicken-italian",
    name: "Chicken Italian",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "Italian-style chicken pizza with herbs and olives",
    descriptionLong:
      "Experience authentic Italian flavors with our Chicken Italian pizza. Features tender chicken, black olives, Italian herbs, and premium mozzarella. Made with halal chicken. A gourmet experience in Mumbra and Shilphata.",
    price: { S: 380, M: 530, L: 660 },
    image: "/images/pizza/chicken-italian.jpg",
    tags: ["non-vegetarian", "chicken", "italian", "gourmet"],
    isVeg: false,
    isHalal: true,
    keywords: ["italian chicken pizza mumbra", "gourmet pizza shilphata", "italian pizza near me"],
  },
  {
    id: "chicken-mexican-pizza",
    slug: "chicken-mexican-pizza",
    name: "Chicken Mexican Pizza",
    category: "pizza-non-veg",
    categoryDisplay: "Non-Veg Pizza",
    description: "Mexican-style chicken with jalapeños and salsa",
    descriptionLong:
      "Spice up your day with our Chicken Mexican Pizza! Loaded with spicy chicken, jalapeños, bell peppers, onions, and Mexican salsa. Made with 100% halal chicken. The perfect choice for those who love bold flavors in Mumbra and Shilphata.",
    price: { S: 420, M: 570, L: 700 },
    image: "/images/pizza/chicken-mexican.jpg",
    tags: ["non-vegetarian", "chicken", "mexican", "spicy"],
    isVeg: false,
    isHalal: true,
    keywords: ["mexican pizza mumbra", "spicy chicken pizza shilphata", "mexican pizza near me"],
  },

  // SPECIAL PIZZA
  {
    id: "mamamia-pizza",
    slug: "mamamia-pizza",
    name: "Mamamia Pizza",
    category: "pizza-special",
    categoryDisplay: "Special Pizza",
    description: "Our signature special pizza with premium toppings",
    descriptionLong:
      "The legendary Mamamia Pizza! Our most premium creation with the finest ingredients, multiple cheese varieties, and exclusive toppings. A pizza experience like no other in Mumbra and Shilphata. Perfect for celebrations and special occasions.",
    price: { S: 480, M: 630, L: 750 },
    image: "/images/pizza/mamamia.jpg",
    tags: ["special", "premium", "signature", "bestseller"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["best pizza in mumbra", "premium pizza shilphata", "special pizza near me"],
  },
  {
    id: "7g-pizza",
    slug: "7g-pizza",
    name: "7G Pizza",
    category: "pizza-special",
    categoryDisplay: "Special Pizza",
    description: "Seven gourmet toppings on one amazing pizza",
    descriptionLong:
      "Experience seven different gourmet toppings in one incredible pizza! The 7G Pizza is a flavor explosion featuring premium ingredients and our special sauce. One of the most unique pizzas in Mumbra, Shilphata, and surrounding areas.",
    price: { S: 500, M: 650, L: 780 },
    image: "/images/pizza/7g.jpg",
    tags: ["special", "gourmet", "premium", "unique"],
    isVeg: false,
    isHalal: true,
    keywords: ["gourmet pizza mumbra", "7g pizza shilphata", "unique pizza near me"],
  },
  {
    id: "8g-pizza",
    slug: "8g-pizza",
    name: "8G Pizza",
    category: "pizza-special",
    categoryDisplay: "Special Pizza",
    description: "Eight gourmet toppings for the ultimate pizza experience",
    descriptionLong:
      "Take it to the next level with our 8G Pizza! Eight premium gourmet toppings, multiple cheese varieties, and our signature sauce. The ultimate pizza experience in Mumbra and Shilphata. Perfect for pizza enthusiasts who want it all.",
    price: { S: 550, M: 700, L: 820 },
    image: "/images/pizza/8g.jpg",
    tags: ["special", "gourmet", "premium", "ultimate"],
    isVeg: false,
    isHalal: true,
    keywords: ["ultimate pizza mumbra", "8g pizza shilphata", "premium pizza near me"],
  },
  {
    id: "double-layer-pizza",
    slug: "double-layer-pizza",
    name: "Double Layer Pizza",
    category: "pizza-special",
    categoryDisplay: "Special Pizza",
    description: "Two layers of pizza goodness stacked together",
    descriptionLong:
      "Why have one pizza when you can have two? Our Double Layer Pizza features two layers of deliciousness stacked together with cheese in between. A unique creation that's become famous in Mumbra, Shilphata, and Diva. Perfect for sharing!",
    price: { S: 600, M: 750, L: 870 },
    image: "/images/pizza/double-layer.jpg",
    tags: ["special", "unique", "double", "sharing"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["double layer pizza mumbra", "unique pizza shilphata", "best special pizza near me"],
  },

  // BURGERS
  {
    id: "veg-burger",
    slug: "veg-burger",
    name: "Veg Burger",
    category: "burger",
    categoryDisplay: "Burger",
    description: "Classic vegetarian burger with fresh veggies",
    descriptionLong:
      "Our classic Veg Burger features a crispy vegetable patty, fresh lettuce, tomatoes, onions, and our special sauce in a soft bun. A perfect quick meal option in Mumbra and Shilphata. Great value for money!",
    price: 70,
    image: "/images/burger/veg-burger.jpg",
    tags: ["vegetarian", "classic", "affordable"],
    isVeg: true,
    isHalal: true,
    keywords: ["veg burger mumbra", "vegetarian burger shilphata", "cheap burger near me"],
  },
  {
    id: "veg-cheese-burst",
    slug: "veg-cheese-burst",
    name: "Veg Cheese Burst",
    category: "burger",
    categoryDisplay: "Burger",
    description: "Veg burger with oozing cheese filling",
    descriptionLong:
      "Take your veg burger to the next level! Our Veg Cheese Burst features a crispy patty with a molten cheese center, fresh vegetables, and special sauce. One of the most popular veg burgers in Mumbra and Shilphata.",
    price: 100,
    image: "/images/burger/veg-cheese-burst.jpg",
    tags: ["vegetarian", "cheese", "popular"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["cheese burst burger mumbra", "veg cheese burger shilphata", "best veg burger near me"],
  },
  {
    id: "chicken-burger",
    slug: "chicken-burger",
    name: "Chicken Burger",
    category: "burger",
    categoryDisplay: "Burger",
    description: "Juicy chicken patty with fresh toppings",
    descriptionLong:
      "Our classic Chicken Burger features a juicy halal chicken patty, fresh lettuce, tomatoes, onions, and our signature sauce. Made fresh to order at our Shilphata location. The perfect quick meal for chicken lovers in Mumbra and nearby areas.",
    price: 80,
    image: "/images/burger/chicken-burger.jpg",
    tags: ["non-vegetarian", "chicken", "classic"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["chicken burger mumbra", "halal burger shilphata", "best chicken burger near me"],
  },
  {
    id: "xinger-burger",
    slug: "xinger-burger",
    name: "Xinger Burger",
    category: "burger",
    categoryDisplay: "Burger",
    description: "Spicy crispy chicken burger with zinger sauce",
    descriptionLong:
      "Love it spicy? Our Xinger Burger features a crispy spicy chicken patty, fresh vegetables, and our special zinger sauce. Made with 100% halal chicken. One of the most popular burgers in Mumbra, Shilphata, and Diva.",
    price: 120,
    image: "/images/burger/xinger.jpg",
    tags: ["non-vegetarian", "chicken", "spicy", "crispy"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["zinger burger mumbra", "spicy burger shilphata", "crispy chicken burger near me"],
  },
  {
    id: "chicken-cheese-burst",
    slug: "chicken-cheese-burst",
    name: "Chicken Cheese Burst",
    category: "burger",
    categoryDisplay: "Burger",
    description: "Chicken burger with molten cheese center",
    descriptionLong:
      "The ultimate chicken burger experience! Our Chicken Cheese Burst features a juicy halal chicken patty with a molten cheese center, fresh toppings, and special sauce. A must-try for burger lovers in Mumbra and Shilphata.",
    price: 140,
    image: "/images/burger/chicken-cheese-burst.jpg",
    tags: ["non-vegetarian", "chicken", "cheese", "premium"],
    isVeg: false,
    isHalal: true,
    keywords: ["cheese burst chicken burger mumbra", "best chicken burger shilphata", "premium burger near me"],
  },
  {
    id: "big-shakechilli-burger",
    slug: "big-shakechilli-burger",
    name: "Big ShakeChilli Burger",
    category: "burger",
    categoryDisplay: "Burger",
    description: "Our signature double-patty monster burger",
    descriptionLong:
      "The biggest, baddest burger in Mumbra! Our signature Big ShakeChilli Burger features two juicy halal chicken patties, double cheese, fresh vegetables, and our secret sauce. A meal in itself! Perfect for those with a big appetite in Shilphata and surrounding areas.",
    price: 180,
    image: "/images/burger/big-shakechilli.jpg",
    tags: ["non-vegetarian", "chicken", "double", "signature", "large"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["big burger mumbra", "double patty burger shilphata", "best burger near me"],
  },

  // Add more items for other categories...
  // (I'll add a few key items from each category to keep the response manageable)

  // FOOTLONG SANDWICH
  {
    id: "veg-subway",
    slug: "veg-subway",
    name: "Veg Subway",
    category: "footlong-sandwich",
    categoryDisplay: "Footlong Sandwich",
    description: "Fresh vegetable sandwich subway style",
    descriptionLong:
      "Our Veg Subway features fresh vegetables, cheese, and sauces in a freshly baked footlong bread. Available in 6-inch and 12-inch sizes. Perfect for a healthy meal in Mumbra and Shilphata.",
    price: { "6inch": 140, "12inch": 250 },
    image: "/images/sandwich/veg-subway.jpg",
    tags: ["vegetarian", "healthy", "subway-style"],
    isVeg: true,
    isHalal: true,
    keywords: ["veg sandwich mumbra", "subway shilphata", "footlong sandwich near me"],
  },
  {
    id: "chicken-subway",
    slug: "chicken-subway",
    name: "Chicken Subway",
    category: "footlong-sandwich",
    categoryDisplay: "Footlong Sandwich",
    description: "Grilled chicken sandwich with fresh veggies",
    descriptionLong:
      "Our Chicken Subway features tender grilled halal chicken, fresh vegetables, cheese, and your choice of sauces in freshly baked bread. Available in 6-inch and 12-inch. The best chicken sandwich in Mumbra and Shilphata!",
    price: { "6inch": 160, "12inch": 280 },
    image: "/images/sandwich/chicken-subway.jpg",
    tags: ["non-vegetarian", "chicken", "subway-style"],
    isVeg: false,
    isHalal: true,
    isPopular: true,
    keywords: ["chicken sandwich mumbra", "halal sandwich shilphata", "best sandwich near me"],
  },

  // COFFEE
  {
    id: "cappuccino",
    slug: "cappuccino",
    name: "Cappuccino",
    category: "coffee-hot",
    categoryDisplay: "Hot Coffee",
    description: "Classic Italian cappuccino with perfect foam",
    descriptionLong:
      "Our Cappuccino is made with premium coffee beans, steamed milk, and perfect foam art. The best coffee in Mumbra and Shilphata. Perfect for coffee lovers who appreciate quality.",
    price: 70,
    image: "/images/coffee/cappuccino.jpg",
    tags: ["coffee", "hot", "classic"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["cappuccino mumbra", "best coffee shilphata", "coffee near me"],
  },
  {
    id: "iced-cappuccino",
    slug: "iced-cappuccino",
    name: "Iced Cappuccino",
    category: "coffee-cold",
    categoryDisplay: "Cold Coffee",
    description: "Refreshing iced cappuccino perfect for hot days",
    descriptionLong:
      "Beat the heat with our Iced Cappuccino! Made with premium coffee, cold milk, and ice. The perfect refreshing drink in Mumbra and Shilphata. Great for hot summer days!",
    price: 150,
    image: "/images/coffee/iced-cappuccino.jpg",
    tags: ["coffee", "cold", "refreshing"],
    isVeg: true,
    isHalal: true,
    keywords: ["iced coffee mumbra", "cold coffee shilphata", "iced cappuccino near me"],
  },

  // MILKSHAKES
  {
    id: "chocolate-shake",
    slug: "chocolate-shake",
    name: "Chocolate Shake",
    category: "milkshake",
    categoryDisplay: "Milkshake",
    description: "Rich and creamy chocolate milkshake",
    descriptionLong:
      "Indulge in our rich Chocolate Shake made with premium chocolate and fresh milk. Thick, creamy, and absolutely delicious. The best milkshake in Mumbra and Shilphata!",
    price: 120,
    image: "/images/milkshake/chocolate.jpg",
    tags: ["milkshake", "chocolate", "dessert"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["chocolate shake mumbra", "milkshake shilphata", "best shake near me"],
  },

  // MOCKTAILS
  {
    id: "virgin-mojito",
    slug: "virgin-mojito",
    name: "Virgin Mojito",
    category: "mocktail",
    categoryDisplay: "Mocktail",
    description: "Refreshing mint and lime mocktail",
    descriptionLong:
      "Our Virgin Mojito is the perfect refreshing drink with fresh mint, lime, and soda. The most popular mocktail in Mumbra and Shilphata. Perfect for any time of the day!",
    price: 80,
    image: "/images/mocktail/virgin-mojito.jpg",
    tags: ["mocktail", "refreshing", "mint"],
    isVeg: true,
    isHalal: true,
    isPopular: true,
    keywords: ["mojito mumbra", "mocktail shilphata", "virgin mojito near me"],
  },
]

export const MENU_CATEGORIES = [
  { id: "pizza-veg", name: "Veg Pizza", slug: "pizza", icon: "🍕" },
  { id: "pizza-non-veg", name: "Non-Veg Pizza", slug: "pizza", icon: "🍕" },
  { id: "burger", name: "Burgers", slug: "burger", icon: "🍔" },
  { id: "footlong-sandwich", name: "Footlong Sandwich", slug: "footlong-sandwich", icon: "🥖" },
  { id: "french-fries", name: "French Fries & Starters", slug: "french-fries", icon: "🍟" },
  { id: "garlic-bread", name: "Garlic Bread", slug: "garlic-bread", icon: "🥖" },
  { id: "coffee-hot", name: "Hot Coffee", slug: "coffee", icon: "☕" },
  { id: "coffee-cold", name: "Cold Coffee", slug: "coffee", icon: "🧊" },
  { id: "milkshake", name: "Milkshakes", slug: "milkshakes", icon: "🥤" },
  { id: "mocktail", name: "Mocktails", slug: "mojito", icon: "🍹" },
] as const
