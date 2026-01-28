import Link from 'next/link';

function ContactCTASection() {
  return (
    <section className="bg-darkPink-900 pt-24 pb-56">
      <div className="container mx-auto px-4">
        <div className="pb-24 mb-24 border-b border-white/20 border-dashed text-center">
          <h2 className="font-heading text-white text-4xl md:text-6xl font-bold mb-6">
            Let’s Build Something Great Together
          </h2>
          <p className="text-white text-opacity-70 mb-8 max-w-2xl mx-auto">
            I’m a web application developer with 4+ years of experience in Laravel, PHP, Node.js, Next.js, and more. 
            I build scalable, secure, and performance-driven web applications for businesses and startups.
          </p>
          <Link 
            className="group relative inline-block p-0.5 font-semibold overflow-hidden rounded-full"
            href="mailto:your-email@example.com"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-500 opacity-40 rounded-full"></div>
          
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ContactCTASection;
