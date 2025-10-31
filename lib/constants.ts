export const BUSINESS_INFO = {
  name: "Shake Chilli",
  fullName: "Shake Chilli – Cafe & Restaurant",
  tagline: "Awesome Taste in Every Bite",
  domain: "https://shake-chilli.com",
  phones: {
    primary: "+917208697371",
    secondary: "+919082990187",
    display: {
      primary: "7208 697 371",
      secondary: "9082 990 187",
    },
  },
  address: {
    street: "Shop No. 4, Silverline Enclave",
    landmark: "Near Al-Hidaya School",
    area: "Shilphata",
    city: "Thane",
    state: "Maharashtra",
    pincode: "400612",
    full: "Shop No. 4, Silverline Enclave, Near Al-Hidaya School, Shilphata, Thane, Maharashtra 400612",
  },
  hours: {
    open: "12:00",
    close: "03:00",
    display: "12:00 PM - 3:00 AM",
  },
  features: ["Halal", "Free Home Delivery", "Fresh Ingredients", "Fast Service"],
  serviceAreas: ["Mumbra", "Shilphata", "Kausa", "MM Valley", "Dosti", "Shimla Park", "Shalimar", "Amrut Nagar", "Mumbra Bypass", "Y Junction", "Millenium"],
  deliveryTime: "20-40 minutes",
  deliveryZones: {
    fast: {
      time: "20 minutes",
      areas: ["Mumbra Bypass", "Dosti", "Shalimar", "Shilphata"],
    },
    standard: {
      time: "40 minutes",
      areas: ["Shimla Park", "Kausa", "Amrut Nagar", "MM Valley", "Y Junction", "Millenium"],
    },
    extended: {
      time: "60 minutes",
      areas: ["Mumbra Station", "Station Road"],
    },
  },
  cuisines: ["Pizza", "Burgers", "Sandwiches", "Coffee", "Milkshakes", "Mocktails"],
  priceRange: "₹₹",
} as const

export const BRAND_COLORS = {
  black: "#000000",
  white: "#ffffff",
  chilliRed: "#e10600",
  mintGreen: "#18a558",
} as const
