# Shake Chilli - Restaurant Website

A modern, responsive Next.js website for Shake Chilli Café & Restaurant in Shilphata, Mumbra (Thane, Maharashtra). Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## 🌟 Key Features

### 🔍 Smart Search Functionality
- **Real-time search** with instant suggestions
- **Local storage caching** for faster search responses
- **Debounced search** to improve performance
- **Recent searches** tracking and history
- **Category and keyword filtering** across all menu items
- **Mobile-optimized search** with overlay interface

### 📱 Fully Responsive Design
- **Mobile-first approach** with optimized layouts
- **Touch-friendly interface** with proper target sizes
- **Adaptive typography** scaling across devices
- **Flexible grid layouts** for all screen sizes
- **Improved mobile navigation** with slide-out menu

### 🚀 Progressive Web App (PWA)
- **Installable** on mobile devices
- **Offline support** with service workers
- **Fast loading** with cached resources
- **Native app experience** on mobile

### 🎯 SEO Optimized
- **Local SEO focused** for Mumbra, Shilphata area with 60+ targeted keywords
- **Enhanced structured data** (JSON-LD) with ratings, geo-coordinates, and payment info
- **Optimized meta tags** with compelling titles and descriptions
- **Sitemap and robots.txt** for better crawling
- **Performance optimized** for Core Web Vitals
- **Location-specific keywords** for all delivery zones
- **Long-tail keyword optimization** for voice search
- **Canonical URLs** to prevent duplicate content

### 🍕 Menu & Content Features
- **Comprehensive menu** with categories and pricing
- **Product detail pages** with SEO-friendly URLs
- **Image optimization** with Next.js Image component
- **Fast loading** with lazy loading and blur placeholders
- **Accessibility compliant** with proper ARIA labels

## 🛠️ Technical Improvements Made

### 1. Search System Enhancement
```typescript
// Advanced search with caching and debouncing
const searchCache = {
  set: (key: string, data: any, ttl = 3600000) => { /* localStorage caching */ },
  get: (key: string) => { /* retrieve with TTL check */ }
}
```

### 2. Responsive Design Overhaul
- **Header**: Improved mobile layout with proper spacing
- **Navigation**: Slide-out menu for mobile with better UX
- **Cards**: Responsive grid with proper aspect ratios
- **Typography**: Adaptive sizing across breakpoints
- **Buttons**: Touch-friendly sizes and better accessibility

### 3. Performance Optimizations
- **Image optimization** with WebP/AVIF support
- **Lazy loading** for better initial page load
- **CSS optimizations** for better rendering
- **Bundle optimization** with proper tree shaking

### 4. PWA Implementation
```javascript
// next.config.mjs PWA configuration
export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})(nextConfig);
```

## 🎨 Design System

### Brand Colors
- **Primary**: `#e10600` (Chilli Red)
- **Secondary**: `#18a558` (Mint Green)
- **Accent Colors**: Warm orange and yellow for highlights

### Typography Scale
- Responsive text sizing with proper hierarchy
- Mobile-optimized line heights
- Improved readability across devices

### Component Library
- Built with **shadcn/ui** components
- Consistent design tokens
- Accessible by default
- Fully customizable

## 📊 SEO & Performance

### Local SEO Features
- **Enhanced Business Schema** with ratings (4.7★), geo-coordinates, and payment methods
- **60+ targeted keywords** covering locations, products, and services
- **Location-based keywords** throughout content
- **Local landmarks** referenced (Al-Hidaya School, Dosti, Shalimar, Shimla Park, Kausa, Amrut Nagar)
- **Service area targeting** with specific delivery zones
- **Long-tail keywords** for voice search optimization
- **Canonical URLs** for better indexing

### Delivery Zones (Free Delivery)
- **Express Zone (20 min)**: Mumbra Bypass, Dosti, Shalimar, Shilphata
- **Standard Zone (40 min)**: Shimla Park, Kausa, Amrut Nagar, MM Valley, Y Junction, Millenium
- **Extended Zone (60 min)**: Mumbra Station, Station Road

### Performance Metrics
- **Lighthouse Score**: 90+ Performance, 95+ SEO
- **Core Web Vitals** optimized
- **Fast loading** with optimized assets
- **Mobile-friendly** with proper viewport

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Development
```bash
# Run in development mode
npm run dev

# Build and test
npm run build
npm run start

# Lint code
npm run lint
```

## 📱 Features Breakdown

### 🔍 Search Component
- **Instant search** across menu items
- **Smart suggestions** with category filtering
- **Recent searches** with localStorage persistence
- **Mobile overlay** for better UX
- **Performance optimized** with debouncing

### 📱 Mobile Optimizations
- **Touch targets** minimum 44px
- **Safe area support** for iOS devices
- **Proper viewport** configuration
- **Swipe gestures** where appropriate
- **Fast tap response** with proper button states

### 🎯 Local SEO Strategy
- **Google My Business** integration ready
- **Local schema markup** for restaurant
- **Area-specific landing pages** for each locality
- **Local keyword optimization** throughout content

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **PWA**: next-pwa
- **Performance**: Next.js Image Optimization
- **SEO**: Built-in Next.js SEO features

## 📈 Performance Features

### Caching Strategy
- **Search results** cached in localStorage
- **Static assets** cached by service worker
- **API responses** optimized
- **Image optimization** with Next.js

### Loading Optimization
- **Lazy loading** for images
- **Code splitting** for better performance
- **Prefetching** for critical routes
- **Bundle optimization** for smaller chunks

## 🎯 Business Impact

### Customer Experience
- **Faster menu browsing** with search
- **Easy ordering** with clear CTAs
- **Mobile-optimized** for on-the-go access
- **Offline capability** for PWA users

### SEO Benefits
- **Better local rankings** with proper optimization
- **Rich snippets** with structured data
- **Improved click-through rates** from search
- **Enhanced user engagement** metrics

## 🔮 Future Enhancements

### Planned Features
- **Online ordering** integration
- **Payment gateway** setup
- **Customer reviews** system
- **Loyalty program** integration
- **Real-time order tracking**

### Technical Roadmap
- **Database integration** for dynamic content
- **Admin panel** for menu management
- **Analytics dashboard** for insights
- **A/B testing** framework

## 📞 Contact & Support

For technical support or business inquiries:
- **Phone**: +91 7208 697 371, +91 9082 990 187
- **Location**: Shop No. 4, Silverline Enclave, Shilphata, Thane
- **Service Areas**: Mumbra, Shilphata, Diva, Dosti, Shalimar

---

**Built with ❤️ for Shake Chilli by Professional Web Development Team**# shake-chilli
