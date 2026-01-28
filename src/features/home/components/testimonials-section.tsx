'use client';

import { useState } from 'react';
import Image from 'next/image';
import testimonials from '@/data/testimonials.json';

const TestimonialsSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  if (!testimonials) return null;

  const slideCount = testimonials.length;

  const prevSlide = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount);
  };

  const nextSlide = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1);
  };

  return (
    <section className="bg-darkPink-900 pt-20 pb-44">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Image className="mx-auto mb-10" src="/images/testimonial-quote-icon.svg" alt="" width={48} height={48} />

          <div className="overflow-hidden">
            <div className="whitespace-nowrap transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${(activeSlide - 1) * 100.5}%)`}}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="inline-block w-full whitespace-normal">
                  <h1 className="font-heading text-center text-white text-3xl md:text-5xl font-semibold mb-10 max-w-md md:max-w-3xl mx-auto">
                    <span>{testimonial.content.split(testimonial.highlightText)[0]}</span>
                    <span className="text-pink-500">{testimonial.highlightText}</span>
                    <span>{testimonial.content.split(testimonial.highlightText)[1]}</span>
                  </h1>
                </div>
              ))}
            </div>
          </div>

          <div className="w-px h-20 mx-auto bg-white/20 mb-6"></div>

          <div className="flex justify-between gap-4 mb-8 sm:mb-0">
            <div className="hidden sm:block">
              <a
                className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none"
                href="#"
                onClick={(e) => {e.preventDefault(); prevSlide();}}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full"></div>
                <div className="relative z-50 flex items-center py-2 px-4 w-14 h-14 bg-pink-500 group-hover:bg-pink-600 group-focus:bg-pink-600 rounded-full transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </a>
            </div>

            <div className="overflow-hidden">
              <div className="whitespace-nowrap transition-transform duration-500 ease-in-out" style={{transform: `translateX(-${(activeSlide - 1) * 100.5}%)`}}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="inline-block w-full whitespace-normal">
                    <div className="rounded-full mx-auto bg-white/10 py-2 pl-2 pr-8 flex gap-4 w-60">
                      <Image className="h-12" src={testimonial.author.image} alt="" width={48} height={48} />
                      <div>
                        <p className="text-white font-semibold">{testimonial.author.name}</p>
                        <p className="text-gray-400 text-sm">{testimonial.author.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden sm:block">
              <a
                className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none"
                href="#"
                onClick={(e) => {e.preventDefault(); nextSlide();}}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full"></div>
                <div className="relative z-50 flex items-center py-2 px-4 w-14 h-14 bg-pink-500 group-hover:bg-pink-600 group-focus:bg-pink-600 rounded-full transition duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="flex sm:hidden justify-center gap-4">
            <a
              className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none"
              href="#"
              onClick={(e) => {e.preventDefault(); prevSlide();}}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full"></div>
              <div className="relative z-50 flex items-center py-2 px-4 w-14 h-14 bg-pink-500 group-hover:bg-pink-600 group-focus:bg-pink-600 rounded-full transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15.75 19.5L8.25 12L15.75 4.5" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </a>
            <a
              className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full shadow-pink hover:shadow-none focus:shadow-none"
              href="#"
              onClick={(e) => {e.preventDefault(); nextSlide();}}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full"></div>
              <div className="relative z-50 flex items-center py-2 px-4 w-14 h-14 bg-pink-500 group-hover:bg-pink-600 group-focus:bg-pink-600 rounded-full transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M8.25 4.5L15.75 12L8.25 19.5" stroke="white" style={{stroke: 'white', strokeOpacity: 1}} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;