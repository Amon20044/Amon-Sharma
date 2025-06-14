import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalFonts = [
        '/fonts/BrogiFREE.woff2',
        '/fonts/BrogiFREE.woff',
      ];

      const criticalImages = [
        '/assets/amon.jpeg',
        '/assets/logo.svg',
      ];

      // Preload fonts
      criticalFonts.forEach(font => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = font;
        link.as = 'font';
        link.type = font.endsWith('.woff2') ? 'font/woff2' : 'font/woff';
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });

      // Preload critical images
      criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        document.head.appendChild(link);
      });
    };

    // Lazy load non-critical resources
    const lazyLoadResources = () => {
      // Intersection Observer for lazy loading images
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      // Observe all images with lazy class
      document.querySelectorAll('img.lazy').forEach(img => {
        imageObserver.observe(img);
      });
    };

    // Service Worker registration for caching
    const registerServiceWorker = () => {
      if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('SW registered: ', registration);
          })
          .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
      }
    };

    preloadCriticalResources();
    lazyLoadResources();
    registerServiceWorker();

    // Cleanup
    return () => {
      // Cleanup if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceOptimizer;
