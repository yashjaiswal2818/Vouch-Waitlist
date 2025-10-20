import { useEffect } from 'react';

const PerformanceOptimizer = () => {
    useEffect(() => {
        // Preload critical resources
        const preloadCriticalResources = () => {
            // Preload fonts
            const fontLink = document.createElement('link');
            fontLink.rel = 'preload';
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
            fontLink.as = 'style';
            document.head.appendChild(fontLink);

            // Preload critical images
            const criticalImages = [
                '/img1.png',
                '/img2.png'
            ];

            criticalImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
        };

        // Optimize scroll performance
        const optimizeScroll = () => {
            let ticking = false;

            const updateScroll = () => {
                // Throttle scroll events for better performance
                ticking = false;
            };

            const handleScroll = () => {
                if (!ticking) {
                    requestAnimationFrame(updateScroll);
                    ticking = true;
                }
            };

            window.addEventListener('scroll', handleScroll, { passive: true });

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        };

        // Initialize optimizations
        preloadCriticalResources();
        const cleanup = optimizeScroll();

        return cleanup;
    }, []);

    return null;
};

export default PerformanceOptimizer;
