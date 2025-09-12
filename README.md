# YouTuber Portfolio Website

A modern, minimalist portfolio website designed for content creators and YouTubers. Features a clean design, dark/light mode toggle, and mobile-responsive layout.

## Features

### Design & UI
- ✅ Minimalist, clean layout with generous whitespace
- ✅ Professional typography using Inter font
- ✅ Subtle color accents with neutral background
- ✅ Fixed navigation with smooth scrolling
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Hover animations and transitions
- ✅ Light/dark mode toggle with localStorage persistence

### Sections
- ✅ **Hero/Introduction**: Name, profile image, tagline, and mission statement
- ✅ **About**: Personal narrative and journey as a content creator
- ✅ **Featured Videos**: Embedded YouTube videos with descriptions
- ✅ **Skills & Equipment**: Technical skills, software, and gear used
- ✅ **Achievements**: Milestones, awards, and community impact
- ✅ **Contact**: Business email, social links, and contact form

### Technical Features
- ✅ Fast loading with optimized images and lazy-loading
- ✅ SEO-friendly with proper meta tags and semantic HTML
- ✅ Accessible design with proper ARIA labels
- ✅ Contact form with validation
- ✅ Smooth animations and transitions
- ✅ Mobile-first responsive design

## Customization Guide

### 1. Personal Information
Replace placeholder content in `index.html`:
- `[Your Name]` - Your actual name
- `[Your Niche]` - Your content category (e.g., "Tech Reviewer", "Gaming", "Education")
- Profile image URL in the hero section
- About section narrative
- Contact information and social media links

### 2. YouTube Videos
Replace the placeholder YouTube embed URLs:
```html
<iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

### 3. Statistics & Achievements
Update the numbers in the about section and achievements:
- Subscriber count
- Total views
- Video count
- Awards and milestones

### 4. Skills & Equipment
Modify the skills lists to match your actual:
- Technical skills
- Software and tools
- Equipment and gear

### 5. Color Scheme
Customize colors in `styles.css` by modifying CSS variables:
```css
:root {
  --primary-color: #6366f1;  /* Main brand color */
  --accent-color: #06b6d4;   /* Secondary accent */
  /* ... other colors */
}
```

### 6. Contact Form
The contact form currently shows notifications. To make it functional:
1. Set up a backend service (e.g., Netlify Forms, Formspree)
2. Update the form action in `index.html`
3. Modify the JavaScript in `script.js` for actual submission

## File Structure
```
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This documentation
```

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations
- Lazy loading for video embeds
- Debounced scroll events
- CSS transitions for smooth animations
- Optimized images with proper sizing
- Minimal JavaScript for fast loading

## Deployment
1. Upload all files to your web hosting service
2. Ensure all files are in the root directory
3. Update any absolute paths if needed
4. Test on multiple devices and browsers

## SEO Recommendations
- Update meta description and keywords
- Add Open Graph tags for social sharing
- Include structured data markup
- Optimize images with proper alt text
- Create a sitemap.xml file

## Future Enhancements
- Blog section for written content
- Video gallery with filtering
- Analytics integration
- Newsletter signup
- Multi-language support
- Progressive Web App features

## License
This template is free to use and modify for personal and commercial projects.