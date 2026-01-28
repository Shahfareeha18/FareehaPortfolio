'use client';

import React from 'react';
import Footer from '@/components/layout/footer';
import HeroSection from '@/features/home/components/hero-section';
import FeaturesSection from '@/features/home/components/features-section';
import HowItWorksSection from '@/features/home/components/how-it-works-section';

import NavBar from '@/components/layout/nav-bar';
import TopBar from '@/components/common/top-bar';

export default function HomePage() {
  return (
    <div className="antialiased bg-body text-body font-body">
      <TopBar />

      <header className="bg-gradient-to-t from-pink-300 via-pink-700 to-darkPink-900">
        <div className="container mx-auto px-4">
          <NavBar theme="light" />
          <HeroSection />
        </div>
      </header>

      <main>
        <FeaturesSection />
        <HowItWorksSection />
       
      
      </main>
      <Footer />
    </div>
  );
}
