'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/page-layout';
import CTASection from '@/features/home/components/cta-section';
import blogData from '@/data/blogData.json';

interface BlogSinglePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogSinglePage({ params }: BlogSinglePageProps) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  // Find the blog post by slug
  const post = [...blogData.posts, blogData.featuredPost].find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout title={`${post.title} - Syeda Fareeha Portfolio`}>
      {/* Hero Section */}
      <section className="bg-darkPink-900 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/60 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>→</span>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>→</span>
              <span className="text-white">{post.title}</span>
            </nav>

            {/* Category Badge */}
            <div className="inline-block px-4 py-2 bg-pink-500/20 text-pink-400 text-sm font-medium rounded-full mb-6">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-white/60 mb-8">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/blog-author-avatar.png"
                  alt="Author"
                  className="w-10 h-10 rounded-full"
                  width={40}
                  height={40}
                />
                <span>{post.author || 'Syeda Fareeha Portfolio Team'}</span>
              </div>
              <span>•</span>
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime || '5 min read'}</span>
            </div>

            {/* Excerpt */}
            <p className="text-white/80 text-xl leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-darkPink-900 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                className="w-full h-96 md:h-[500px] object-cover"
                width={1200}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-darkPink-900/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-darkPink-900 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <article className="prose prose-lg prose-invert max-w-none">
              <div className="text-white/80 text-lg leading-relaxed space-y-6">
                <p>
                  {post.content?.intro || `Welcome to this comprehensive guide where we dive deep into the topic of ${post.title.toLowerCase()}. In today's fast-paced business environment, understanding these concepts is crucial for success.`}
                </p>

                <p>
                  {post.excerpt} This article will provide you with actionable insights and practical strategies
                  that you can implement immediately in your business or personal finance management.
                </p>

                <h2 className="text-white text-3xl font-bold mt-12 mb-6">Key Takeaways</h2>

                <ul className="space-y-3 text-white/80">
                  {post.content?.keyTakeaways?.map((takeaway: string, index: number) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                      <span>{takeaway}</span>
                    </li>
                  )) || (
                    <>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Understanding the fundamentals is essential for long-term success</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Implementation of best practices can significantly improve your outcomes</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-500 rounded-full mt-3 flex-shrink-0"></div>
                        <span>Regular monitoring and adjustment are key to maintaining effectiveness</span>
                      </li>
                    </>
                  )}
                </ul>

                {post.content?.sections?.map((section: { title: string; content: string }, index: number) => (
                  <div key={index}>
                    <h2 className="text-white text-3xl font-bold mt-12 mb-6">{section.title}</h2>
                    <p>{section.content}</p>
                  </div>
                )) || (
                  <>
                    <h2 className="text-white text-3xl font-bold mt-12 mb-6">Getting Started</h2>
                    <p>
                      The first step in mastering any new concept is to understand its core principles.
                      Whether you&rsquo;re dealing with financial planning, business strategy, or operational efficiency,
                      the same fundamental approach applies: assess, plan, execute, and monitor.
                    </p>
                  </>
                )}

                {post.content?.proTip && (
                  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 my-8">
                    <h3 className="text-pink-400 text-xl font-semibold mb-4">💡 Pro Tip</h3>
                    <p className="text-white/80 mb-0">
                      {post.content.proTip}
                    </p>
                  </div>
                )}

                <h2 className="text-white text-3xl font-bold mt-12 mb-6">Conclusion</h2>

                <p>
                  {post.content?.conclusion || `Mastering ${post.title.toLowerCase()} requires dedication, proper planning, and consistent execution. By following the strategies outlined in this guide, you'll be well-equipped to achieve your goals and drive meaningful results for your business or personal finances.`}
                </p>

                <p>
                  Remember that success is a journey, not a destination. Continue learning, adapting, and refining
                  your approach based on new insights and changing circumstances.
                </p>
              </div>
            </article>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-8 mt-16">
              <div className="text-center">
                <h3 className="text-white text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-white/80 mb-6">
                  Join thousands of businesses who trust Syeda Fareeha Portfolio for their financial management needs.
                </p>
                <Link
                  href="/register"
                  className="inline-flex items-center gap-2 bg-pink-500 text-white px-8 py-4 rounded-full font-medium hover:bg-pink-600 transition-colors duration-200"
                >
                  Start Your Free Trial
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="text-center mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Back to All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}