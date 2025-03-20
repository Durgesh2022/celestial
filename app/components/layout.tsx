// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });



export default function Layout() {
  return (
    <div className={`w-full min-h-screen ${inter.className} px-4 py-12 md:px-8 lg:px-16`}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-16">
        <p className="text-lg mb-2">Empower</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Transform Your Journey with Reiki Certification
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-8">
          Unlock your potential with our comprehensive online Reiki certification courses. 
          Designed for all levels, our platform ensures a fulfilling learning experience.
        </p>
      </section>

      {/* Three Column Features */}
      <section className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 relative mb-6">
              <Image
                src="/image1.jpg"
                alt="Hand with chakra crystals"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Learn from Seasoned Reiki Professionals
            </h2>
            <p className="text-center">
              Our instructors bring years of experience and wisdom.
            </p>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 relative mb-6">
              <Image
                src="/image2.jpg"
                alt="Reiki healing session"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Engage with Our Interactive Learning Tools
            </h2>
            <p className="text-center">
              Experience a dynamic platform that enhances your learning.
            </p>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col items-center">
            <div className="w-full h-64 relative mb-6">
              <Image
                src="/image3.jpg"
                alt="Meditation space with amethyst, candle and Buddha statue"
                fill
                style={{ objectFit: 'cover' }}
                className="rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Start Your Reiki Journey Today
            </h2>
            <p className="text-center">
              Join our community and embrace the healing arts.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/enroll" className="inline-block border border-black px-8 py-3 font-medium">
            Enroll
          </Link>
          <Link href="/explore" className="inline-flex items-center gap-2 px-8 py-3 font-medium">
            Explore
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}