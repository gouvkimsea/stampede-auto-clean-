# Stampede Auto Website

A clean, modular HTML/CSS/JavaScript website for Stampede Auto, a used car dealership in Calgary.

## File Structure

```
stampede-auto-clean-/
├── index.html          # Main HTML page
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Mobile menu & FAQ accordion functionality
├── img/                # Placeholder for image assets
└── README.md           # This file
```

## Features

- **Responsive Design** — Mobile-first approach with breakpoints for tablet and desktop
- **Clean Modular Structure** — HTML, CSS, and JavaScript separated into dedicated files
- **Semantic HTML** — Well-organized sections with proper headings and structure
- **CSS Variables** — Easy color customization via `:root` variables
- **Interactive Elements**
  - Mobile hamburger menu toggle
  - FAQ accordion (one open at a time)
  - Smooth transitions and hover effects

## Sections

1. **Top Bar** — Phone number and email
2. **Header & Navigation** — Logo and nav links with CTA button
3. **Hero** — Large banner with intro text and category cards
4. **Why Choose Us** — 4-column feature grid
5. **Financing** — Split layout with text and image
6. **Trade-In** — Call-to-action banner
7. **Reviews** — 3-column testimonial cards
8. **Contact** — Info section + embedded Google Map
9. **FAQ** — Collapsible accordion
10. **Footer** — Links organized in 4 columns

## Customization

### Colors
Edit the CSS variables in `css/style.css` (lines 1-11):
```css
:root {
  --orange:      #ff4605;   /* brand color */
  --dark-red:    #a90302;   /* gradient end */
  --dark-bg:     #222732;   /* dark sections */
  /* ... etc ... */
}
```

### Images
All image URLs are external. To use local images:
1. Add images to an `img/` folder
2. Update paths in `index.html` from `https://stampedeauto.com/img/...` to `img/...`

### Links
All external links point to `stampedeauto.com`. Update these as needed.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive down to 320px width

## License

This template is for Stampede Auto.
