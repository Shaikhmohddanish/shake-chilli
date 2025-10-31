# Accessibility Development Checklist
## Quick Reference for Developers

Use this checklist when creating new components or pages to ensure WCAG 2.1 AA compliance.

---

## 🎯 Before You Start

- [ ] Read WCAG-COMPLIANCE.md for full guidelines
- [ ] Have screen reader installed (NVDA/VoiceOver)
- [ ] Install axe DevTools browser extension
- [ ] Test with keyboard only (hide your mouse!)

---

## ✅ Component Checklist

### Images & Media

```tsx
// ✅ DO: Descriptive alt text
<Image 
  src="/pizza.jpg" 
  alt="Best Chicken Tikka Pizza in Mumbra - Shake Chilli Cafe"
/>

// ✅ DO: Mark decorative images
<div className="bg-gradient" aria-hidden="true">
  <CheckIcon />
</div>

// ❌ DON'T: Empty or generic alt
<Image src="/pizza.jpg" alt="image" />
<Image src="/pizza.jpg" alt="" /> // Unless truly decorative
```

### Buttons & Links

```tsx
// ✅ DO: Clear accessible labels
<button aria-label="Add Chicken Tikka Pizza to cart">
  <ShoppingCart />
</button>

// ✅ DO: Use semantic elements
<Link href="/menu">View Menu</Link>
<button onClick={handleClick}>Submit Order</button>

// ❌ DON'T: Icon-only without label
<button><ShoppingCart /></button>

// ❌ DON'T: Div as button
<div onClick={handleClick}>Click me</div>
```

### Form Inputs

```tsx
// ✅ DO: Label all inputs
<label htmlFor="name">Your Name</label>
<input id="name" type="text" />

// ✅ DO: Label radio buttons
<input 
  type="radio" 
  name="size" 
  value="large"
  aria-label="Large size for ₹200"
/>

// ✅ DO: Show errors clearly
{error && (
  <p className="text-destructive" role="alert">
    {error}
  </p>
)}

// ❌ DON'T: Placeholder as label
<input placeholder="Enter name" /> // Missing label
```

### Headings

```tsx
// ✅ DO: Logical hierarchy
<h1>Menu</h1>
  <h2>Pizza</h2>
    <h3>Vegetarian Options</h3>
  <h2>Burgers</h2>

// ❌ DON'T: Skip levels
<h1>Menu</h1>
  <h3>Pizza</h3> // Skipped h2
```

### Interactive Elements

```tsx
// ✅ DO: Keyboard accessible
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Custom Button
</div>

// ✅ DO: Focus management
<Sheet>
  <SheetTrigger aria-label="Open menu">
    <Menu />
  </SheetTrigger>
</Sheet>

// ❌ DON'T: Keyboard trap
<Modal>
  {/* Make sure Escape closes it */}
</Modal>
```

### Color & Contrast

```tsx
// ✅ DO: Use semantic colors with good contrast
<p className="text-foreground">Body text (19.8:1 ratio)</p>
<Button className="bg-primary">Primary Button (5.2:1 ratio)</Button>

// ✅ DO: Don't rely on color alone
<Badge className="bg-red-500">
  <AlertIcon /> Error: Item not available
</Badge>

// ❌ DON'T: Low contrast
<p className="text-gray-300 bg-gray-200">Hard to read</p>
```

---

## 🔍 Testing Checklist

### Keyboard Navigation
- [ ] Tab through entire page
- [ ] All interactive elements reachable
- [ ] Focus indicators visible (3px outline)
- [ ] No keyboard traps
- [ ] Skip to main content works
- [ ] Modal/Sheet closes with Escape

### Screen Reader
- [ ] Turn on NVDA (Windows) or VoiceOver (Mac)
- [ ] Navigate with screen reader shortcuts
- [ ] All content announced correctly
- [ ] Images have meaningful descriptions
- [ ] Form labels read properly
- [ ] Buttons describe their action

### Visual
- [ ] Zoom to 200% - no content loss
- [ ] Resize window to 320px - no horizontal scroll
- [ ] High contrast mode - all content visible
- [ ] Reduced motion - animations respect preference
- [ ] Dark mode - maintains contrast

### Automated
- [ ] Run Lighthouse audit (target: 100 accessibility score)
- [ ] Run axe DevTools (target: 0 violations)
- [ ] Validate HTML (no errors)
- [ ] Check with WAVE extension

---

## 📝 Common Patterns

### Skip Navigation
```tsx
// app/layout.tsx - Already implemented
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Skip to main content
</a>

// page.tsx
<main id="main-content">
  {/* Page content */}
</main>
```

### Icon with Text
```tsx
// ✅ Icon is decorative
<button>
  <Phone className="w-4 h-4" aria-hidden="true" />
  <span>Call Now</span>
</button>

// ✅ Icon only with label
<button aria-label="Call us at 7208697371">
  <Phone className="w-4 h-4" />
</button>
```

### Status Messages
```tsx
// ✅ Toast notifications
toast.success("Item added to cart", {
  description: "Chicken Tikka Pizza (Large)"
})

// ✅ Live region for dynamic updates
<div role="status" aria-live="polite">
  {itemCount} items in cart
</div>
```

### Loading States
```tsx
// ✅ Announce loading
<button disabled aria-busy="true">
  <Loader className="animate-spin" aria-hidden="true" />
  Loading...
</button>
```

### Error Messages
```tsx
// ✅ Associate errors with inputs
<div>
  <label htmlFor="email">Email</label>
  <input 
    id="email" 
    aria-describedby="email-error"
    aria-invalid={!!error}
  />
  {error && (
    <p id="email-error" className="text-destructive" role="alert">
      {error}
    </p>
  )}
</div>
```

---

## 🎨 CSS Patterns

### Focus Indicators (Already in globals.css)
```css
*:focus-visible {
  outline: 3px solid var(--color-primary);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### Screen Reader Only
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Touch Targets
```css
button, a, [role="button"] {
  min-height: 44px;
  min-width: 44px;
}
```

---

## 🚫 Common Mistakes

### ❌ Missing Alt Text
```tsx
<Image src="/pizza.jpg" /> // BAD
```

### ❌ Div as Button
```tsx
<div onClick={handleClick}>Click me</div> // BAD
```

### ❌ Placeholder as Label
```tsx
<input placeholder="Enter your name" /> // BAD - no label
```

### ❌ Icon Only Button
```tsx
<button><TrashIcon /></button> // BAD - no label
```

### ❌ Low Contrast
```tsx
<p className="text-gray-400 bg-gray-100">Text</p> // BAD - poor contrast
```

### ❌ Empty Links
```tsx
<Link href="/menu"><ChevronRight /></Link> // BAD - no text
```

### ❌ Relying Only on Color
```tsx
<span className="text-red-500">Error</span> // BAD - no icon/text
```

---

## 🔧 Quick Fixes

### Fix: Icon-Only Button
```tsx
// Before
<button><SearchIcon /></button>

// After
<button aria-label="Search menu">
  <SearchIcon />
</button>
```

### Fix: Missing Form Label
```tsx
// Before
<input type="text" placeholder="Name" />

// After
<label htmlFor="name" className="sr-only">Name</label>
<input id="name" type="text" placeholder="Name" />
```

### Fix: Decorative Image
```tsx
// Before
<div className="absolute inset-0 bg-gradient">
  <StarIcon />
</div>

// After
<div className="absolute inset-0 bg-gradient" aria-hidden="true">
  <StarIcon />
</div>
```

### Fix: Non-Semantic Button
```tsx
// Before
<div onClick={handleClick} className="cursor-pointer">
  Click me
</div>

// After
<button onClick={handleClick}>
  Click me
</button>
```

---

## 📚 Resources

### Testing Tools
- **Lighthouse** - Chrome DevTools → Lighthouse tab
- **axe DevTools** - Browser extension
- **WAVE** - Web accessibility evaluation tool
- **NVDA** - Free screen reader (Windows)
- **VoiceOver** - Built-in screen reader (Mac/iOS)

### Documentation
- [WCAG Quick Reference](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Practices](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [WebAIM](https://webaim.org/)

### Color Contrast Checkers
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)

---

## ⚡ Quick Commands

```bash
# Run Lighthouse audit
npm run lighthouse

# Check for accessibility violations (if configured)
npm run a11y

# Build and test
npm run build
npm run start
```

---

## 🎯 Remember

1. **Test with keyboard** - No mouse allowed!
2. **Use semantic HTML** - `<button>` not `<div>`
3. **Label everything** - Forms, buttons, links
4. **Check contrast** - 4.5:1 for text, 3:1 for UI
5. **Think about screen readers** - Listen to your site
6. **Respect user preferences** - Motion, contrast, themes
7. **Test on real devices** - Mobile, tablet, desktop

---

**When in doubt, test it yourself!**
- Use your keyboard only for 5 minutes
- Turn on a screen reader
- Zoom your browser to 200%
- Use your site with one hand on mobile

If you can't use it easily, neither can your users. 🎯
