import { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import ContactSection from '@/features/contact/components/contact-section';
import CTASection from '@/features/home/components/cta-section';

export const metadata: Metadata = {
  title: 'Contact Us - Syeda Fareeha Portfolio',
  description: 'Get in touch with our tax experts. We\'re here to help with all your tax preparation needs.',
};


export default function ContactPage() {
  return (
    <PageLayout title="Contact Us - Syeda Fareeha Portfolio">
      <ContactSection />
    
    </PageLayout>
  );
}