import { useState, useEffect, lazy, Suspense } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoadingAnimation } from "./components/LoadingAnimation";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SEOHead } from "./components/SEOHead";
import { PerformanceMonitor } from "./components/PerformanceMonitor";

// Lazy load components that aren't immediately visible
const About = lazy(() => import("./components/About").then(module => ({ default: module.About })));
const HowItWorks = lazy(() => import("./components/HowItWorks").then(module => ({ default: module.HowItWorks })));
const Services = lazy(() => import("./components/Services").then(module => ({ default: module.Services })));
const Destinations = lazy(() => import("./components/Destinations").then(module => ({ default: module.Destinations })));
const WhyChooseUs = lazy(() => import("./components/WhyChooseUs").then(module => ({ default: module.WhyChooseUs })));
const Testimonials = lazy(() => import("./components/Testimonials").then(module => ({ default: module.Testimonials })));
const Contact = lazy(() => import("./components/Contact").then(module => ({ default: module.Contact })));
const Footer = lazy(() => import("./components/Footer").then(module => ({ default: module.Footer })));

// Loading skeleton component
const SectionSkeleton = () => (
  <div className="py-24 animate-pulse">
    <div className="container mx-auto px-6">
      <div className="h-8 bg-slate-200 rounded w-1/3 mx-auto mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-slate-200 rounded w-full"></div>
        <div className="h-4 bg-slate-200 rounded w-3/4"></div>
        <div className="h-4 bg-slate-200 rounded w-1/2"></div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Reduced loading time for better performance perception
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Register service worker for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered:', registration);
        })
        .catch((error) => {
          console.log('SW registration failed:', error);
        });
    }

    // Preload critical resources
    const preloadImages = [
      'https://images.unsplash.com/photo-1715985748944-466d5ce17648',
      'https://images.unsplash.com/photo-1758518731706-be5d5230e5a5'
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen">
      <SEOHead />
      <PerformanceMonitor />
      
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingAnimation key="loading" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Navigation />
            
            <main className="overflow-hidden">
              <Hero />
              
              <Suspense fallback={<SectionSkeleton />}>
                <section id="about" aria-label="About EuropeanCareers">
                  <About />
                </section>
              </Suspense>
              
              <Suspense fallback={<SectionSkeleton />}>
                <section id="how-it-works" aria-label="Our recruitment process">
                  <HowItWorks />
                </section>
              </Suspense>
              
              <Suspense fallback={<SectionSkeleton />}>
                <section id="services" aria-label="Our recruitment services">
                  <Services />
                </section>
              </Suspense>
              
              <Suspense fallback={<SectionSkeleton />}>
                <section id="destinations" aria-label="European destinations">
                  <Destinations />
                </section>
              </Suspense>
              
              <Suspense fallback={<SectionSkeleton />}>
                <WhyChooseUs />
              </Suspense>
              
              <Suspense fallback={<SectionSkeleton />}>
                <section id="testimonials" aria-label="Client testimonials">
                  <Testimonials />
                </section>
              </Suspense>
              
              <Suspense fallback={<SectionSkeleton />}>
                <section id="contact" aria-label="Contact information">
                  <Contact />
                </section>
              </Suspense>
            </main>
            
            <Suspense fallback={<div className="h-20 bg-slate-100 animate-pulse"></div>}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}