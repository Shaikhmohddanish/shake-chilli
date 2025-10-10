# Copyright-Free Images Guide for Shake Chilli Website

## 🖼️ **Where to Download Copyright-Free Food Images**

### **Best Free Stock Photo Websites:**

1. **Unsplash** (https://unsplash.com)
   - Search terms: "pizza", "burger", "coffee", "sandwich", "food"
   - High-quality images, completely free
   - No attribution required (but appreciated)

2. **Pexels** (https://pexels.com)
   - Search terms: "italian pizza", "chicken burger", "iced coffee", "footlong sandwich"
   - Free for commercial use
   - No attribution required

3. **Pixabay** (https://pixabay.com)
   - Search terms: "margherita pizza", "beef burger", "cappuccino", "subway sandwich"
   - Free images and vectors
   - Commercial use allowed

4. **Freepik** (https://freepik.com)
   - Free with attribution (or paid subscription)
   - High-quality food photography
   - Search: "restaurant food", "fast food", "cafe beverages"

5. **StockVault** (https://stockvault.net)
   - Completely free stock photos
   - Good selection of food images

### **Specific Image Recommendations for Menu Items:**

#### **🍕 Pizza Images** (Save as `/public/images/pizza/`)
- `margherita.jpg` - Classic margherita with basil
- `chicken-tikka.jpg` - Pizza with chicken pieces
- `bbq-pizza.jpg` - BBQ sauce pizza
- `veggie-pizza.jpg` - Colorful vegetable pizza
- `cheese-pizza.jpg` - Extra cheesy pizza

#### **🍔 Burger Images** (Save as `/public/images/burgers/`)
- `chicken-burger.jpg` - Grilled chicken burger
- `veg-burger.jpg` - Vegetarian burger with lettuce
- `cheese-burger.jpg` - Cheese-loaded burger
- `crispy-burger.jpg` - Fried chicken burger

#### **☕ Beverage Images** (Save as `/public/images/beverages/`)
- `cappuccino.jpg` - Hot cappuccino with foam art
- `iced-coffee.jpg` - Cold coffee with ice
- `milkshake.jpg` - Thick milkshake with straw
- `mojito.jpg` - Virgin mojito with mint

#### **🥪 Sandwich Images** (Save as `/public/images/sandwiches/`)
- `footlong-sandwich.jpg` - Long subway-style sandwich
- `chicken-sandwich.jpg` - Grilled chicken sandwich
- `veg-sandwich.jpg` - Fresh vegetable sandwich

#### **🍟 Starters Images** (Save as `/public/images/starters/`)
- `french-fries.jpg` - Golden crispy fries
- `chicken-nuggets.jpg` - Breaded chicken nuggets
- `garlic-bread.jpg` - Cheesy garlic bread

### **🎨 Hero Banner Images** (Save as `/public/images/hero/`)
- `hero-food-spread.jpg` - Multiple food items arranged
- `pizza-making.jpg` - Chef making pizza
- `restaurant-interior.jpg` - Clean, modern restaurant
- `food-delivery.jpg` - Delivery person with food

### **📐 Recommended Image Specifications:**

#### **Menu Items:**
- **Size**: 800x600px minimum
- **Format**: JPG or WebP
- **Aspect Ratio**: 4:3 or 1:1 (square)
- **Quality**: High resolution for web

#### **Hero Banner:**
- **Size**: 1920x1080px minimum
- **Format**: JPG or WebP
- **Aspect Ratio**: 16:9
- **Quality**: High resolution, under 500KB

#### **Category Cards:**
- **Size**: 600x400px minimum
- **Format**: JPG or WebP
- **Aspect Ratio**: 3:2
- **Quality**: Medium-high resolution

### **🔍 SEO-Optimized Search Terms for Food Images:**

#### **Pizza:**
- "authentic italian pizza"
- "wood fired pizza"
- "margherita pizza close up"
- "chicken tikka pizza"
- "vegetarian pizza with vegetables"

#### **Burgers:**
- "gourmet chicken burger"
- "juicy beef burger"
- "vegetarian burger with lettuce"
- "cheese burger melting"
- "crispy fried chicken burger"

#### **Beverages:**
- "cappuccino with latte art"
- "iced coffee with cream"
- "chocolate milkshake"
- "virgin mojito with mint"
- "cold brew coffee"

#### **Restaurant/Ambiance:**
- "modern cafe interior"
- "food preparation kitchen"
- "pizza oven cooking"
- "happy customers dining"
- "food delivery service"

### **📝 Implementation Steps:**

1. **Download Images**: Use the recommended websites above
2. **Optimize Images**: Compress using TinyPNG or similar
3. **Rename Files**: Use descriptive names (e.g., `chicken-tikka-pizza.jpg`)
4. **Upload to Project**: Place in appropriate `/public/images/` subdirectories
5. **Update Code**: Replace placeholder images in components

### **🔧 Code Updates Needed:**

#### **Update Menu Data** (`lib/menu-data.ts`):
```typescript
// Example updates:
{
  id: "margherita-pizza",
  image: "/images/pizza/margherita.jpg", // Update this path
  // ... rest of item
}
```

#### **Update Hero Component** (`components/home/hero.tsx`):
```typescript
// Replace background image:
backgroundImage: `url('/images/hero/hero-food-spread.jpg')`
```

#### **Update Search Component** (`components/search.tsx`):
```typescript
// Use actual image instead of placeholder:
src={item.image} // This will now work with real images
```

### **⚡ Quick Implementation:**

1. Download 20-30 high-quality food images
2. Create folder structure in `/public/images/`
3. Update image paths in menu data
4. Test website to ensure all images load properly
5. Optimize images for faster loading

### **🚀 Pro Tips:**

- Use consistent image styling (same lighting, angles)
- Ensure images look appetizing and professional
- Add alt text for SEO and accessibility
- Consider using WebP format for better compression
- Test images on mobile devices for responsiveness

This will significantly improve your website's visual appeal and user engagement!