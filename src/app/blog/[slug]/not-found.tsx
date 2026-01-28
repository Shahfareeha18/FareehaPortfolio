import Link from 'next/link';
import PageLayout from '@/components/layout/page-layout';

export default function BlogNotFound() {
  return (
    <PageLayout title="Blog Post Not Found - Syeda Fareeha Portfolio">
      <section className="bg-darkPink-900 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold mb-8">Post Not Found</h1>
            <p className="text-white text-lg mb-8">The blog post you&rsquo;re looking for doesn&rsquo;t exist.</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-3 rounded-full font-medium hover:bg-pink-600 transition-colors duration-200"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}