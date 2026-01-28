import Link from 'next/link';
import Image from 'next/image';

/**
 * Footer for Syeda Fareeha Portfolio
 */
function Footer() {
  return (
    <footer className="bg-darkPink-900 py-20">
      <div className="container mx-auto px-4">
        {/* Logo and Links */}
        <div className="pb-12 border-b border-white/30 mb-10">
          <div className="flex flex-wrap justify-between -m-4">
            {/* Logo */}
            <div className="w-full lg:w-1/6 p-4">
              <Link className="inline-block" href="/">
                <Image
                  className="h-auto"
                  src="/images/logo.jpg"
                  alt="Syeda Fareeha Portfolio Logo"
                  width={200}
                  height={64}
                />
              </Link>
            </div>

            {/* Navigation */}
            <div className="w-full sm:w-1/2 lg:w-1/6 p-4">
              <ul className="flex flex-col gap-6">
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" href="/about">
                    About
                  </Link>
                </li>
                <li>
                  <Link className="text-white hover:text-opacity-70 text-xl transition duration-200" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex justify-between items-center flex-wrap gap-6">
          <p className="text-white">© Syeda Fareeha. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/syeda-fareeha-2428111a1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow me on LinkedIn"
            >
              <Image src="/images/social-linkedin-logo.svg" alt="LinkedIn" width={24} height={24} />
            </a>

           
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
