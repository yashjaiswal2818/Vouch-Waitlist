import { lazy, Suspense } from 'react';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import Footer from '@/components/Footer';
import PerformanceOptimizer from '@/components/PerformanceOptimizer';
import WaitlistCounter from '@/components/WaitlistCounter';

// Lazy load heavy components for better performance
const Timeline = lazy(() => import('@/components/Timeline'));
const Problem = lazy(() => import('@/components/Problem'));
const Solution = lazy(() => import('@/components/Solution'));

// Loading component for lazy-loaded sections
const SectionLoader = () => (
  <div className="w-full h-32 bg-gray-50 animate-pulse rounded-lg flex items-center justify-center">
    <div className="text-gray-400">Loading...</div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <PerformanceOptimizer />
      <main>
        <Hero />
        <WaitlistCounter />
        <Mission />
        <Suspense fallback={<SectionLoader />}>
          <Timeline />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Problem />
        </Suspense>
        <Suspense fallback={<SectionLoader />}>
          <Solution />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;