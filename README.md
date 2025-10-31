# ScrollCarousel.js

![Version](https://img.shields.io/badge/version-2.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A lightweight, customizable infinite scroll carousel library for creating smooth, animated carousels with images, text, or mixed content.

## 🚀 Live Demo

**[Try Vibex Markdown Editor](https://proindra.github.io/scrollcarousel.js/)**

## ✨ Features

- 🎨 Support for images, text, and mixed content
- 🔄 Forward and reverse scroll directions
- ⚡ Smooth, hardware-accelerated animations
- 🎯 Highly customizable (colors, sizes, speeds)
- 📱 Responsive and mobile-friendly
- 🖱️ Pause on hover
- 🚀 Zero dependencies
- 💾 Lightweight (~5KB minified)

## 📦 Installation

### Via CDN (jsDelivr)

```html
<!-- Latest version -->
<script src="https://cdn.jsdelivr.net/gh/proindra/scrollcarousel.js/scrollcarousel.js"></script>
```

```html
<!-- Specific version (recommended) -->
<script src="https://cdn.jsdelivr.net/gh/proindra/scrollcarousel.js@1.0.0/scrollcarousel.js"></script>
```

### Via npm (coming soon)

```bash
npm install scrollcarousel.js
```

### Manual Download

Download `scrollcarousel.js` from this repository and include it in your project:

```html
<script src="path/to/scrollcarousel.js"></script>
```

## 🚀 Quick Start

### Basic Usage

```html
<div id="myCarousel"></div>

<script>
  var carousel = new ScrollCarousel('#myCarousel', {
    speed: 10,
    items: [
      { type: 'text', content: 'Item 1' },
      { type: 'text', content: 'Item 2' },
      { type: 'text', content: 'Item 3' }
    ]
  });
</script>
```

### Image Carousel

```javascript
var carousel = new ScrollCarousel('#imageCarousel', {
  cardWidth: 300,
  cardHeight: 400,
  items: [
    { type: 'image', src: 'image1.jpg', alt: 'Image 1' },
    { type: 'image', src: 'image2.jpg', alt: 'Image 2' },
    { type: 'image', src: 'image3.jpg', alt: 'Image 3' }
  ]
});
```

### Mixed Content (Image + Text)

```javascript
var carousel = new ScrollCarousel('#mixedCarousel', {
  items: [
    { type: 'mixed', src: 'photo.jpg', content: 'Beautiful Sunset' },
    { type: 'mixed', src: 'photo2.jpg', content: 'Mountain View' }
  ]
});
```

## ⚙️ Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `direction` | String | `'forward'` | Scroll direction: `'forward'` or `'reverse'` |
| `speed` | Number | `10` | Animation duration in seconds (lower = faster) |
| `cardWidth` | Number | `200` | Width of each card in pixels |
| `cardHeight` | Number | `300` | Height of each card in pixels |
| `gap` | Number | `10` | Gap between cards in pixels |
| `pauseOnHover` | Boolean | `true` | Pause animation on hover |
| `backgroundColor` | String | `'rgb(255,202,255)'` | Container background color |
| `cardBackground` | String | `'rgb(60,1,60)'` | Card background color |
| `cardBorderRadius` | Number | `20` | Card border radius in pixels |
| `autoClone` | Boolean | `true` | Automatically clone items for infinite scroll |
| `items` | Array | `[]` | Array of item objects |
| `imageWidth` | String | `'80%'` | Width of images inside cards |
| `imageHeight` | String | `'80%'` | Height of images inside cards |
| `imageFit` | String | `'cover'` | Image fit: `'cover'`, `'contain'`, or `'fill'` |
| `textColor` | String | `'white'` | Text color |
| `fontSize` | String | `'16px'` | Font size for text |
| `fontWeight` | String | `'bold'` | Font weight |

## 📝 Item Types

### Text Item
```javascript
{ type: 'text', content: 'Hello World' }
```

### Image Item
```javascript
{ type: 'image', src: 'image.jpg', alt: 'Description' }
```

### Mixed Item (Image + Text)
```javascript
{ type: 'mixed', src: 'image.jpg', content: 'Caption text' }
```

## 🎮 Methods

### `pause()`
Pause the carousel animation.
```javascript
carousel.pause();
```

### `play()`
Resume the carousel animation.
```javascript
carousel.play();
```

### `updateSpeed(seconds)`
Change the animation speed dynamically.
```javascript
carousel.updateSpeed(5); // Faster
carousel.updateSpeed(20); // Slower
```

### `updateDirection(direction)`
Change the scroll direction.
```javascript
carousel.updateDirection('reverse');
carousel.updateDirection('forward');
```

### `addItem(item)`
Add a new item to the carousel.
```javascript
carousel.addItem({ type: 'text', content: 'New Item' });
```

### `destroy()`
Remove the carousel and clean up.
```javascript
carousel.destroy();
```

## 💡 Examples

### Reverse Scroll with Custom Colors

```javascript
new ScrollCarousel('#carousel', {
  direction: 'reverse',
  speed: 8,
  backgroundColor: 'rgb(240,248,255)',
  cardBackground: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  items: [
    { type: 'text', content: '🚀 Innovation' },
    { type: 'text', content: '💡 Creativity' },
    { type: 'text', content: '🎯 Focus' }
  ]
});
```

### Product Showcase

```javascript
new ScrollCarousel('#products', {
  cardWidth: 250,
  cardHeight: 350,
  gap: 20,
  items: [
    { type: 'mixed', src: 'product1.jpg', content: '$99.99' },
    { type: 'mixed', src: 'product2.jpg', content: '$149.99' },
    { type: 'mixed', src: 'product3.jpg', content: '$79.99' }
  ]
});
```

### Logo Carousel

```javascript
new ScrollCarousel('#logos', {
  cardWidth: 150,
  cardHeight: 80,
  cardBackground: 'transparent',
  backgroundColor: '#f5f5f5',
  imageFit: 'contain',
  pauseOnHover: false,
  items: [
    { type: 'image', src: 'logo1.png' },
    { type: 'image', src: 'logo2.png' },
    { type: 'image', src: 'logo3.png' }
  ]
});
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

MIT License - feel free to use this in your projects!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🐛 Issues

Found a bug? Please [open an issue](https://github.com/proindra/scrollcarousel.js/issues).

## 📧 Contact

Your Name - scrollcarousel.js@gmail.com

Project Link: [https://github.com/proindra/scrollcarousele.js](https://github.com/proindra/scrollcarousel.js)

---

Made with ❤️ by Team ScrollCarousel.js