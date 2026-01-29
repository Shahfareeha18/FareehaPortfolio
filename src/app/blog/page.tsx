import { Metadata } from 'next';
import PageLayout from '@/components/layout/page-layout';
import BlogSection from '@/features/blog/components/blog-section';


export const metadata: Metadata = {
  title: 'Blog - Syeda Fareeha Portfolio',
  description: 'Stay updated with the latest tax tips, news, and insights from our experts.',
};

export default function BlogPage() {
  return (
    <PageLayout title="Blog - Syeda Fareeha Portfolio">
      <BlogSection />
     
    </PageLayout>
  );
}