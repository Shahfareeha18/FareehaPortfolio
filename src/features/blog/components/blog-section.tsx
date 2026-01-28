'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogData from '@/data/blogData.json';

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState('Trending');

  const filteredPosts = blogData.posts.filter(post =>
    activeCategory === 'Trending' ? true : post.category === activeCategory
  );

  return (
    <section className="bg-darkPink-900 py-24">
      <div className="container mx-auto px-4">
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {blogData.categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-pink-500/20 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="p-8 lg:p-12">
                <div className="inline-block px-3 py-1 bg-pink-500/20 text-pink-400 text-sm font-medium rounded-full mb-4">
                  {blogData.featuredPost.category}
                </div>
                <h2 className="text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                  {blogData.featuredPost.title}
                </h2>
                <p className="text-white text-opacity-70 text-lg mb-6 leading-relaxed">
                  {blogData.featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-opacity-60 text-sm">
                    {blogData.featuredPost.date}
                  </span>
                  <Link
                    href={`/blog/${blogData.featuredPost.slug}`}
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <Image
                  src={blogData.featuredPost.image}
                  alt={blogData.featuredPost.title}
                  className="w-full h-full object-cover"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-darkPink-900/50 to-transparent lg:from-darkPink-900/80 lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <article
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-pink-500/20 transition-all duration-300"
            >
              <div className="relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={192}
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-pink-500/20 backdrop-blur-sm text-pink-400 text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-white text-xl font-semibold mb-3 leading-tight group-hover:text-pink-400 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-white text-opacity-70 text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-white text-opacity-60 text-sm">
                    {post.date}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 text-sm font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 3L9 7L5 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;