import { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import LoginSection from '@/features/auth/components/login-section';

export const metadata: Metadata = {
  title: 'Login - Syeda Fareeha Portfolio',
  description: 'Sign in to your Syeda Fareeha Portfolio account to access your tax documents and services.',
};

export default function LoginPage() {
  return (
    <PageLayout title="Login - Syeda Fareeha Portfolio" showTopBar={false} showHeader={false} showFooter={false}>
      <LoginSection />
    </PageLayout>
  );
}