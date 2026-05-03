# Portfolio Website

A clean, modern, and fully responsive portfolio website built with HTML, CSS, and JavaScript.

## Features

### 🎨 Design
- **Clean & Modern UI**: Minimalist design with a professional look
- **Responsive Design**: Fully responsive on all devices (desktop, tablet, mobile)
- **Smooth Animations**: Engaging animations and transitions throughout
- **Color Gradient**: Modern gradient backgrounds with custom color scheme

### 🧭 Navigation
- **Sticky Navigation**: Navigation bar stays accessible while scrolling
- **Mobile Menu**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Smooth scroll animations to sections
- **Active Link Highlighting**: Current section is highlighted in the navigation

### 📑 Sections

1. **Hero Section**: Eye-catching welcome section with call-to-action button
2. **About Section**: Brief introduction about yourself
3. **Projects Section**: Showcase your projects in a card-based grid
4. **Skills Section**: Display your skills organized by category
5. **Contact Section**: Contact form and social media links
6. **Footer**: Copyright and footer information

### ⚙️ Interactivity
- **Mobile Menu Toggle**: Click hamburger icon to toggle mobile menu
- **Smooth Form Validation**: Form submission with validation
- **Scroll Animations**: Cards and elements animate on scroll
- **Notification System**: Success/error notifications for form submission
- **Keyboard Navigation**: ESC key closes mobile menu

## File Structure

```
portfolio-website/
├── index.html       # Main HTML file
├── styles.css       # All styling
├── script.js        # JavaScript functionality
└── README.md        # This file
```

## How to Use

1. **Open in Browser**: Simply open `index.html` in your web browser
2. **Customize Content**: 
   - Edit project information in the Projects section
   - Update skills in the Skills section
   - Change contact information and links
   - Update social media URLs

3. **Personalize Styling**:
   - Modify color scheme in CSS variables (`:root` section in `styles.css`)
   - Adjust spacing, fonts, and animations as needed

4. **Add Your Projects**: 
   - Duplicate project cards and update with your project details
   - Replace placeholder images with your own project screenshots

## Customization Guide

### Change Color Scheme
Open `styles.css` and modify the CSS variables:
```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #ec4899;
    /* ... other colors ... */
}
```

### Add More Projects
In `index.html`, duplicate the `.project-card` div and update the content:
```html
<div class="project-card">
    <div class="project-image">
        <div class="placeholder-image">Your Project</div>
    </div>
    <div class="project-info">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description</p>
        <div class="project-tags">
            <span class="tag">Technology1</span>
            <span class="tag">Technology2</span>
        </div>
    </div>
</div>
```

### Update Social Links
In `index.html`, find the contact section and update URLs:
```html
<a href="https://your-linkedin-url.com" target="_blank" class="contact-link">LinkedIn</a>
```

## Browser Support

- Chrome/Edge (Latest)
- Firefox (Latest)
- Safari (Latest)
- Mobile browsers

## Features Overview

### Mobile Responsive
- Hamburger menu on tablets and mobile
- Optimized layout for all screen sizes
- Touch-friendly buttons and links

### Performance
- Lightweight CSS and JavaScript
- No external dependencies
- Fast loading time
- Smooth animations using CSS transitions

### Accessibility
- Semantic HTML structure
- Keyboard navigation support
- Clear contrast and readable text
- Alt text ready for images

## Tips for Best Results

1. **Add Real Images**: Replace placeholder divs with actual project screenshots
2. **Update Links**: Add your actual social media and email links
3. **Personalize Content**: Make sure all text reflects your experience and projects
4. **Test Responsiveness**: Check how it looks on different devices
5. **Deploy**: Use services like GitHub Pages, Netlify, or Vercel for hosting

## Future Enhancements

Consider adding:
- Dark mode toggle
- Project filtering
- Blog section
- Newsletter subscription
- Search functionality
- Comments or testimonials

## License

Feel free to use this template for your portfolio!

---

**Enjoy your new portfolio website! 🚀**
