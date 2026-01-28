'use client';

import { useState } from 'react';
import faqData from '@/data/faqData.json';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="bg-darkPink-900 py-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-white text-opacity-80 text-lg max-w-2xl mx-auto leading-relaxed">
            Got questions? We&rsquo;ve got answers. If you can&rsquo;t find what you&rsquo;re looking for, feel free to reach out to our support team.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/20 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between group-hover:bg-white/5 transition-colors duration-300"
              >
                <h3 className="text-white text-lg font-semibold pr-4">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"/>
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === index
                  ? 'max-h-96 opacity-100'
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-8 py-6">
                  <p className="text-white text-opacity-70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-white text-opacity-60 mb-6">
            Still have questions? Our support team is here to help.
          </p>
          <a
            href="mailto:support@Syeda Fareeha Portfolio.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white text-lg font-semibold rounded-full transition duration-200 transform hover:scale-105"
          >
            <span>Contact Support</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;