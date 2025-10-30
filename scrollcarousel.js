/**
 * ScrollCarousel.js v1.0.0
 * Infinite Scroll Carousel Library
 * https://github.com/YOUR_USERNAME/scrollcarousel-js
 * 
 * Copyright (c) 2025
 * Released under the MIT License
 */

(function(window) {
    'use strict';

    class ScrollCarousel {
        constructor(selector, options = {}) {
            // Default options
            this.options = {
                direction: 'forward',        // 'forward' or 'reverse'
                speed: 10,                   // Animation duration in seconds
                cardWidth: 200,              // Width of each card in px
                cardHeight: 300,             // Height of each card in px
                gap: 10,                     // Gap between cards in px
                pauseOnHover: true,          // Pause animation on hover
                backgroundColor: 'rgb(255,202,255)', // Container background
                cardBackground: 'rgb(60,1,60)',      // Card background
                cardBorderRadius: 20,        // Card border radius in px
                autoClone: true,             // Automatically clone items for infinite scroll
                items: [],                   // Array of items: [{type: 'text', content: 'Hello'}, {type: 'image', src: 'url', alt: 'desc'}]
                imageWidth: '80%',           // Width of images inside cards
                imageHeight: '80%',          // Height of images inside cards
                imageFit: 'cover',           // 'cover', 'contain', 'fill'
                textColor: 'white',          // Text color
                fontSize: '16px',            // Font size for text
                fontWeight: 'bold',          // Font weight
                ...options
            };

            // Get the container element
            this.container = document.querySelector(selector);
            if (!this.container) {
                console.error(`ScrollCarousel: Element "${selector}" not found`);
                return;
            }

            this.track = null;
            this.animationName = null;
            this.init();
        }

        init() {
            // Apply container styles
            this.container.style.width = '100%';
            this.container.style.overflow = 'hidden';
            this.container.style.backgroundColor = this.options.backgroundColor;
            this.container.style.padding = '20px 0';

            // Get or create track
            let track = this.container.querySelector('.carousel-track');
            if (!track) {
                track = document.createElement('div');
                track.className = 'carousel-track';
                
                // If items array is provided, create cards from it
                if (this.options.items && this.options.items.length > 0) {
                    this.options.items.forEach(item => {
                        const card = this.createCard(item);
                        track.appendChild(card);
                    });
                } else {
                    // Move existing children to track
                    while (this.container.firstChild) {
                        track.appendChild(this.container.firstChild);
                    }
                }
                
                this.container.appendChild(track);
            }
            this.track = track;

            // Apply track styles
            this.track.style.display = 'flex';
            this.track.style.width = 'max-content';

            // Clone items if autoClone is enabled
            if (this.options.autoClone) {
                this.cloneItems();
            }

            // Apply card styles
            this.styleCards();

            // Apply animation
            this.applyAnimation();

            // Add hover pause functionality
            if (this.options.pauseOnHover) {
                this.addHoverPause();
            }
        }

        createCard(item) {
            const card = document.createElement('div');
            card.className = 'card';
            
            if (item.type === 'image') {
                const img = document.createElement('img');
                img.src = item.src;
                img.alt = item.alt || '';
                img.style.width = this.options.imageWidth;
                img.style.height = this.options.imageHeight;
                img.style.objectFit = this.options.imageFit;
                img.style.borderRadius = 'inherit';
                card.appendChild(img);
            } else if (item.type === 'text') {
                card.textContent = item.content;
            } else if (item.type === 'mixed') {
                // Support for both image and text
                if (item.src) {
                    const img = document.createElement('img');
                    img.src = item.src;
                    img.alt = item.alt || '';
                    img.style.width = this.options.imageWidth;
                    img.style.height = '60%';
                    img.style.objectFit = this.options.imageFit;
                    img.style.borderRadius = '10px';
                    card.appendChild(img);
                }
                if (item.content) {
                    const text = document.createElement('div');
                    text.textContent = item.content;
                    text.style.marginTop = '10px';
                    text.style.fontSize = this.options.fontSize;
                    card.appendChild(text);
                }
            }
            
            return card;
        }

        cloneItems() {
            const items = Array.from(this.track.children);
            items.forEach(item => {
                const clone = item.cloneNode(true);
                this.track.appendChild(clone);
            });
        }

        styleCards() {
            const cards = this.track.querySelectorAll('.card');
            cards.forEach(card => {
                card.style.flex = '0 0 auto';
                card.style.width = `${this.options.cardWidth}px`;
                card.style.height = `${this.options.cardHeight}px`;
                card.style.background = this.options.cardBackground;
                card.style.display = 'flex';
                card.style.flexDirection = 'column';
                card.style.alignItems = 'center';
                card.style.justifyContent = 'center';
                card.style.color = this.options.textColor;
                card.style.fontWeight = this.options.fontWeight;
                card.style.fontSize = this.options.fontSize;
                card.style.borderRadius = `${this.options.cardBorderRadius}px`;
                card.style.margin = `0 ${this.options.gap}px`;
                card.style.overflow = 'hidden';
            });
        }

        applyAnimation() {
            // Remove existing animation if any
            this.track.style.animation = 'none';
            
            // Create unique animation name
            const animName = `scroll-${Math.random().toString(36).substr(2, 9)}`;
            
            // Create keyframes
            const startTransform = this.options.direction === 'reverse' ? '-50%' : '0';
            const endTransform = this.options.direction === 'reverse' ? '0' : '-50%';
            
            // Find or create style element for keyframes
            let styleEl = document.getElementById('scrollcarousel-styles');
            if (!styleEl) {
                styleEl = document.createElement('style');
                styleEl.id = 'scrollcarousel-styles';
                document.head.appendChild(styleEl);
            }
            
            const keyframes = `
                @keyframes ${animName} {
                    0% { transform: translateX(${startTransform}); }
                    100% { transform: translateX(${endTransform}); }
                }
            `;
            
            styleEl.textContent += keyframes;
            
            // Apply animation
            this.track.style.animation = `${animName} ${this.options.speed}s linear infinite`;
            this.animationName = animName;
        }

        addHoverPause() {
            this.container.addEventListener('mouseenter', () => {
                this.track.style.animationPlayState = 'paused';
            });
            
            this.container.addEventListener('mouseleave', () => {
                this.track.style.animationPlayState = 'running';
            });
        }

        // Public methods
        pause() {
            if (this.track) {
                this.track.style.animationPlayState = 'paused';
            }
        }

        play() {
            if (this.track) {
                this.track.style.animationPlayState = 'running';
            }
        }

        updateSpeed(speed) {
            this.options.speed = speed;
            this.applyAnimation();
        }

        updateDirection(direction) {
            this.options.direction = direction;
            this.applyAnimation();
        }

        addItem(item) {
            if (!this.track) return;
            
            const card = this.createCard(item);
            // Remove clones first
            const halfLength = this.track.children.length / 2;
            this.track.insertBefore(card, this.track.children[halfLength]);
            
            // Re-clone
            if (this.options.autoClone) {
                const clone = card.cloneNode(true);
                this.track.appendChild(clone);
            }
            
            this.styleCards();
        }

        destroy() {
            if (!this.track) return;
            
            // Remove animation
            this.track.style.animation = 'none';
            
            // Remove event listeners by cloning
            const newContainer = this.container.cloneNode(true);
            this.container.parentNode.replaceChild(newContainer, this.container);
        }
    }

    // Export for different module systems
    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
        module.exports = ScrollCarousel;
    } else {
        window.ScrollCarousel = ScrollCarousel;
    }

})(typeof window !== 'undefined' ? window : this);