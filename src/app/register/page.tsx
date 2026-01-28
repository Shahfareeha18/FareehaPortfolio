import { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import RegisterSection from '@/features/auth/components/register-section';

export const metadata: Metadata = {
  title: 'Register - Syeda Fareeha Portfolio',
  description: 'Create your Syeda Fareeha Portfolio account to get started with professional tax preparation services.',
};

export default function RegisterPage() {
  return (
    <PageLayout title="Register - Syeda Fareeha Portfolio" showTopBar={false} showHeader={false} showFooter={false}>
      <RegisterSection />
    </PageLayout>
  );
}