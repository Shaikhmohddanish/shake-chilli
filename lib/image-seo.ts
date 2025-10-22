// SEO-optimized alt text generator for food items
export function generateSEOAltText(item: any): string {
  const locationKeywords = "Mumbra Shilphata Diva"
  const businessName = "Shake Chilli Cafe & Pizzeria"
  const foodType = item.isVeg ? "Fresh Vegetarian" : "Premium Halal Non-Vegetarian"
  
  // Category-specific keywords
  const categoryKeywords = {
    "pizza-veg": "Best Vegetarian Pizza",
    "pizza-non-veg": "Best Chicken Pizza", 
    "pizza-special": "Premium Special Pizza",
    "burger": "Fresh Burger",
    "footlong-sandwich": "Footlong Sandwich",
    "garlic-bread": "Garlic Bread",
    "coffee-hot": "Hot Coffee",
    "coffee-cold": "Cold Coffee", 
    "milkshake": "Milkshake",
    "mocktail": "Fresh Mocktail"
  }

  const categoryKeyword = categoryKeywords[item.category as keyof typeof categoryKeywords] || "Food Item"
  
  return `${categoryKeyword} ${item.name} in ${locationKeywords} - ${item.description} - ${foodType} - ${businessName}`
}

// Generate structured data for food items
export function generateFoodItemSchema(item: any, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "MenuItem",
    "name": `Best ${item.name} in Mumbra Shilphata`,
    "description": `${item.descriptionLong} Available at Shake Chilli Cafe & Pizzeria.`,
    "image": `${baseUrl}${item.image}`,
    "offers": {
      "@type": "Offer",
      "price": typeof item.price === "number" ? item.price : (item.price.regular || item.price.S || item.price["6inch"] || Object.values(item.price)[0]),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "menuAddOn": item.tags.map((tag: string) => ({
      "@type": "MenuSection", 
      "name": tag
    })),
    "suitableForDiet": item.isVeg ? "https://schema.org/VegetarianDiet" : "https://schema.org/HalalDiet"
  }
}