'use client';

import { useState } from 'react';
import Image from 'next/image';

function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState('yearly');

  const pricingPlans = [
    {
      name: 'Basic',
      monthlyPrice: '$9',
      yearlyPrice: '$8',
      features: [
        'Customized invoices',
        'Automated reminders',
        'Enable multiple payments',
        'Helpful reports'
      ]
    },
    {
      name: 'Pro',
      monthlyPrice: '$35',
      yearlyPrice: '$25',
      recommended: true,
      features: [
        'Cashflow tracking',
        'Add unlimited collaborators',
        'Customized dashboard',
        'Unlimited bank and credit card'
      ]
    },
    {
      name: 'Enterprise',
      monthlyPrice: '$50',
      yearlyPrice: '$45',
      features: [
        'All in Pro benefits',
        'Auto sync to your dashboard',
        'Flexible payments',
        'Recurring billing'
      ]
    }
  ];

  return (
    <section className="bg-darkPink-900 py-24">
      <div className="container mx-auto px-4">
        <h1 className="font-heading text-white text-center text-5xl font-bold mb-4">
          Flexible pricing plan
        </h1>
        <p className="text-white text-center text-opacity-70 mb-10">
          Pricing that scales with your business immediately.
        </p>

        {/* Billing Toggle */}
        <div className="p-1 mb-4 rounded-full border border-white/10 bg-white/5 bg-opacity-5 flex items-center w-60 mx-auto gap-4">
          <button
            className={`py-1 px-3 text-white text-sm font-medium transition duration-200 rounded-full ${
              billingPeriod === 'monthly'
                ? 'border border-white/20 bg-white/10'
                : 'hover:bg-white/5'
            }`}
            onClick={() => setBillingPeriod('monthly')}
          >
            Monthly
          </button>
          <button
            className={`flex-1 py-1 px-3 flex items-center justify-center gap-2 transition duration-200 rounded-full ${
              billingPeriod === 'yearly'
                ? 'border border-white/20 bg-white/10'
                : 'hover:bg-white/5'
            }`}
            onClick={() => setBillingPeriod('yearly')}
          >
            <span className="text-white text-sm font-medium">Yearly</span>
            <span className="text-xs text-pink-300">10% OFF</span>
          </button>
        </div>

        <p className="text-center text-white text-opacity-50 text-xs mb-10">
          No credit card required
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8 xl:gap-12 max-w-7xl mx-auto items-end">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`w-full rounded-2xl ${
                plan.recommended
                  ? 'px-1 pb-1 pt-2 bg-pink-500 lg:transform lg:scale-105'
                  : 'border border-white/20'
              }`}
            >
                {plan.recommended && (
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Image
                      src="/images/pricing-pro-icon.svg"
                      alt="Recommended plan star icon"
                      width={16}
                      height={16}
                    />
                    <p className="text-white uppercase text-xs font-semibold">RECOMMENDED</p>
                  </div>
                )}

                <div className={`p-8 ${
                  plan.recommended
                    ? 'rounded-2xl bg-darkPink-900 border border-white/20'
                    : ''
                }`}>
                  <p className="text-white text-2xl font-semibold mb-6">{plan.name}</p>
                  <div className="flex items-end gap-1 flex-wrap mb-8">
                    <h2 className="text-white text-5xl font-semibold">
                      {billingPeriod === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </h2>
                    <span className="text-white text-opacity-50 mb-1">/per month</span>
                  </div>

                  <button className={`group relative inline-block mb-8 p-0.5 font-semibold overflow-hidden rounded-full ${
                    plan.recommended
                      ? 'shadow-pink hover:shadow-none focus:shadow-none'
                      : ''
                  }`}>
                    <div className={`absolute inset-0 rounded-full ${
                      plan.recommended
                        ? 'bg-gradient-to-b from-pink-400 to-pink-500'
                        : 'bg-gradient-to-b from-white to-gray-500 group-focus:to-white opacity-40 group-focus:opacity-20'
                    }`}></div>
                    <div className={`relative z-50 flex items-center py-2 px-4 rounded-full transition duration-200 ${
                      plan.recommended
                        ? 'bg-pink-500 group-hover:bg-pink-600 group-focus:bg-pink-600'
                        : 'bg-white group-hover:bg-opacity-80 group-focus:bg-opacity-80'
                    }`}>
                      <p className={plan.recommended ? 'text-white' : 'text-pinkSecondary-900'}>
                        Get started
                      </p>
                    </div>
                  </button>

                  <div className="w-full h-px bg-white/10 mb-8"></div>

                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <Image
                          src="/images/pricing-feature-icon.svg"
                          alt="Feature icon"
                          width={20}
                          height={20}
                          className="opacity-50"
                        />
                        <span className="text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;