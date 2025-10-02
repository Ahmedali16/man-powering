import { useEffect } from 'react';

export function SEOHead() {
  useEffect(() => {
    // Set page title
    document.title = "EuropeanCareers - Europe's Premier Recruitment Firm | Netherlands, UK, Germany Jobs";

    // Create or update meta tags
    const updateMetaTag = (name: string, content: string, property?: string) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    // Basic SEO Meta Tags
    updateMetaTag('description', 'Europe\'s premier recruitment firm specializing in high-quality talent placement across Netherlands, UK, and Germany. 2000+ successful placements, 98% match rate. Find your dream European career today.');
    updateMetaTag('keywords', 'European jobs, recruitment agency, Netherlands jobs, UK careers, Germany employment, international recruitment, talent placement, manpower services, executive search, professional recruitment');
    updateMetaTag('author', 'EuropeanCareers Recruitment Firm');
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');
    updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, viewport-fit=cover');
    updateMetaTag('theme-color', '#1e3a8a');
    updateMetaTag('msapplication-TileColor', '#1e3a8a');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('apple-mobile-web-app-title', 'EuropeanCareers');
    updateMetaTag('application-name', 'EuropeanCareers');
    updateMetaTag('msapplication-tooltip', 'Europe\'s Premier Recruitment Firm');
    updateMetaTag('msapplication-starturl', '/');
    updateMetaTag('mobile-web-app-capable', 'yes');

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.origin;

    // Add manifest link
    let manifest = document.querySelector('link[rel="manifest"]') as HTMLLinkElement;
    if (!manifest) {
      manifest = document.createElement('link');
      manifest.rel = 'manifest';
      manifest.href = '/manifest.json';
      document.head.appendChild(manifest);
    }

    // Add apple touch icons
    const appleTouchIcon = document.createElement('link');
    appleTouchIcon.rel = 'apple-touch-icon';
    appleTouchIcon.href = '/icon-192x192.png';
    document.head.appendChild(appleTouchIcon);

    // Add favicon
    let favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
    if (!favicon) {
      favicon = document.createElement('link');
      favicon.rel = 'icon';
      favicon.type = 'image/png';
      favicon.href = '/icon-32x32.png';
      document.head.appendChild(favicon);
    }

    // Open Graph Meta Tags
    updateMetaTag('og:title', 'EuropeanCareers - Europe\'s Premier Recruitment Firm', true);
    updateMetaTag('og:description', 'Specializing in high-quality talent placement across Netherlands, UK, and Germany. 2000+ successful placements with 98% match rate. Your gateway to European career opportunities.', true);
    updateMetaTag('og:type', 'website', true);
    updateMetaTag('og:url', window.location.href, true);
    updateMetaTag('og:site_name', 'EuropeanCareers', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:image', `${window.location.origin}/og-image.jpg`, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'EuropeanCareers - Professional recruitment services across Europe', true);

    // Twitter Card Meta Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', 'EuropeanCareers - Europe\'s Premier Recruitment Firm');
    updateMetaTag('twitter:description', 'Specializing in high-quality talent placement across Netherlands, UK, and Germany. 2000+ successful placements with 98% match rate.');
    updateMetaTag('twitter:image', `${window.location.origin}/og-image.jpg`);
    updateMetaTag('twitter:image:alt', 'EuropeanCareers - Professional recruitment services across Europe');

    // Structured Data for Organization
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "EuropeanCareers",
      "alternateName": "European Careers Recruitment Firm",
      "description": "Europe's premier recruitment firm specializing in high-quality talent placement across Netherlands, UK, and Germany.",
      "url": window.location.origin,
      "logo": `${window.location.origin}/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+31-20-123-4567",
        "contactType": "Customer Service",
        "availableLanguage": ["English", "Dutch", "German"],
        "areaServed": ["Netherlands", "United Kingdom", "Germany"]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amsterdam",
        "addressCountry": "Netherlands",
        "addressRegion": "North Holland"
      },
      "sameAs": [
        "https://linkedin.com/company/europeancareers",
        "https://twitter.com/europeancareers"
      ],
      "foundingDate": "2015",
      "numberOfEmployees": "50-200",
      "areaServed": {
        "@type": "Place",
        "name": "Europe"
      },
      "serviceType": [
        "Recruitment Services",
        "Talent Placement",
        "Executive Search",
        "Manpower Solutions"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "500",
        "bestRating": "5",
        "worstRating": "1"
      }
    };

    // Professional Services Structured Data
    const professionalServiceData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "EuropeanCareers Recruitment Services",
      "description": "Premier recruitment and talent placement services across Netherlands, UK, and Germany",
      "provider": {
        "@type": "Organization",
        "name": "EuropeanCareers"
      },
      "areaServed": [
        {
          "@type": "Country",
          "name": "Netherlands"
        },
        {
          "@type": "Country", 
          "name": "United Kingdom"
        },
        {
          "@type": "Country",
          "name": "Germany"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Recruitment Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Executive Search",
              "description": "High-level executive recruitment services"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technical Recruitment",
              "description": "Specialized technical and IT recruitment"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Permanent Placement",
              "description": "Full-time permanent position placements"
            }
          }
        ]
      }
    };

    // Insert or update structured data
    const updateStructuredData = (data: object, id: string) => {
      let script = document.querySelector(`script[data-structured-data="${id}"]`);
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-structured-data', id);
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data);
    };

    updateStructuredData(structuredData, 'organization');
    updateStructuredData(professionalServiceData, 'professional-service');

    // Preload critical resources
    const preloadResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
      { href: 'https://images.unsplash.com/photo-1715985748944-466d5ce17648', as: 'image' }
    ];

    preloadResources.forEach(resource => {
      let link = document.querySelector(`link[href="${resource.href}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'preload';
        link.href = resource.href;
        link.as = resource.as;
        if (resource.type) link.type = resource.type;
        if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for external domains
    const prefetchDomains = [
      'https://images.unsplash.com',
      'https://fonts.googleapis.com',
      'https://fonts.gstatic.com'
    ];

    prefetchDomains.forEach(domain => {
      let link = document.querySelector(`link[href="${domain}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

  }, []);

  return null;
}