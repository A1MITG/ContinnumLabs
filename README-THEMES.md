# Continuum Labs - Theme System Documentation

## Overview
The Continuum Labs website features a **modular theme system** that allows easy switching between design styles while maintaining the core brand identity.

## Available Themes

### 1. **Default Theme** (Calm & Professional)
- **Color Palette:** Deep indigo, midnight slate, electric violet
- **Style:** Minimalist, spacious, editorial
- **Feel:** Think tank / CXO-facing platform
- **Best For:** Professional credibility, long-term trust

### 2. **Futuristic Theme** (Barnet-inspired)
- **Color Palette:** Dark blues, cyan glow, purple accents
- **Style:** High-tech, neon, cyberpunk aesthetic
- **Features:** 
  - Glowing effects and neon borders
  - Animated particle backgrounds
  - Floating infinity sphere logo
  - Grid patterns and orbital animations
- **Feel:** AI lab / cutting-edge tech company
- **Best For:** Innovation, wow-factor, tech-forward positioning

---

## How to Switch Themes

### Method 1: Edit HTML (Permanent)
Open `index.html` and change the body class:

```html
<!-- Default Theme -->
<body class="theme-default">

<!-- Futuristic Theme -->
<body class="theme-futuristic">
```

### Method 2: JavaScript Toggle (Runtime)
Open browser console and type:
```javascript
toggleTheme()
```

### Method 3: Keyboard Shortcut
Press: **`Ctrl + Shift + T`** (or **`Cmd + Shift + T`** on Mac)

Theme preference is saved to localStorage automatically.

---

## File Structure

```
Continuum/
├── index.html              # Main HTML (includes theme class)
├── styles.css              # Base styles + infinity logo
├── theme-futuristic.css    # Futuristic theme overrides
├── theme-toggle.css        # Theme switching logic
├── script.js               # JavaScript (includes theme toggle)
└── README-THEMES.md        # This file
```

---

## The Infinity Logo

The **floating infinity sphere** represents:
- **Continuum:** Endless cycle, ongoing progression
- **Time:** Eternal flow across generations
- **Collaboration:** Two loops working together

### Features:
- SVG infinity symbol with animated stroke drawing
- Three orbital rings rotating at different speeds
- Floating animation with subtle drift
- Glowing effects that pulse
- Responsive positioning (desktop: right side, mobile: bottom-right)

### Visibility:
- **Hidden** in default theme
- **Visible** in futuristic theme
- Automatically toggles with theme switch

---

## Customization Guide

### To Revert to Original Design:
1. Open `index.html`
2. Change `<body class="theme-futuristic">` to `<body class="theme-default">`
3. Or comment out the futuristic CSS:
```html
<!-- <link rel="stylesheet" href="theme-futuristic.css"> -->
```

### To Add a New Theme:
1. Create `theme-[name].css`
2. Override CSS variables and styles
3. Add theme class to `<body>` in `index.html`
4. Update `script.js` toggle function

### To Modify Colors:
Edit CSS variables in `theme-futuristic.css`:
```css
:root {
    --primary: #0a0e27;        /* Dark background */
    --accent: #00d9ff;         /* Cyan glow */
    --accent-purple: #9d4edd;  /* Purple accent */
}
```

---

## Theme Comparison

| Feature | Default Theme | Futuristic Theme |
|---------|---------------|------------------|
| Background | Light off-white | Dark space blue |
| Text | Dark charcoal | White/cyan |
| Buttons | Solid indigo | Gradient + glow |
| Cards | White with border | Translucent + neon |
| Logo | None | Floating infinity sphere |
| Effects | Minimal fade-ins | Particles, glow, shimmer |
| Vibe | Editorial, calm | Cyberpunk, energetic |

---

## Design Rationale

### Why Two Themes?

**Default Theme:**
- Establishes credibility with established audiences (CXOs, investors)
- Communicates maturity and long-term thinking
- Reduces cognitive load for content-focused reading

**Futuristic Theme:**
- Appeals to tech-forward audiences (developers, AI enthusiasts)
- Creates memorable "wow" moment
- Signals innovation and cutting-edge capabilities
- Differentiates from traditional think tanks

### Best Practice:
- Use **default theme** for B2B outreach, partnerships, professional contexts
- Use **futuristic theme** for tech showcases, product demos, innovation events

---

## Browser Compatibility

✅ **Supported:**
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

⚠️ **Limited Support:**
- Internet Explorer (lacks CSS custom properties)

---

## Performance Notes

- Futuristic theme adds ~50KB CSS
- Infinity logo uses SVG (scalable, performant)
- Animations use `transform` and `opacity` (GPU-accelerated)
- No external dependencies or libraries

---

## Quick Reference

### Toggle Theme via Console:
```javascript
toggleTheme()
```

### Check Current Theme:
```javascript
document.body.className
```

### Force Specific Theme:
```javascript
// Force futuristic
document.body.className = 'theme-futuristic';

// Force default
document.body.className = 'theme-default';
```

---

## Support

For questions or issues:
1. Check console for errors
2. Verify all CSS files are loading
3. Clear browser cache
4. Check localStorage for theme preference

---

**Built with modular design principles.**  
*Continuum Labs – Built across time. Shipped monthly.*
