import { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import PricingSection from '@/features/pricing/components/pricing-section';
import FAQSection from '@/features/pricing/components/faq-section';


export const metadata: Metadata = {
  title: 'Pricing - Syeda Fareeha Portfolio',
  description: 'Transparent pricing for all tax preparation services. Choose the plan that fits your needs.',
};

export default function PricingPage() {
  return (
    <PageLayout title="Pricing - Syeda Fareeha Portfolio">
      <PricingSection />
      <FAQSection />
    
    </PageLayout>
  );
}