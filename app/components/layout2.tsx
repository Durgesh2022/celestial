// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Your Life: Discover the Healing Power of Reiki Certification',
  description: 'Reiki certification empowers you to harness healing energy for personal and professional growth.',
};

export default function Layout2() {
  return (
    <div className={`w-full min-h-screen ${inter.className}`}>
      <main className="flex flex-col lg:flex-row items-center justify-between px-4 py-12 md:px-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Transform Your Life: Discover the Power of Healing
          </h1>
          
          <p className="text-lg mb-12">
            Reiki certification empowers you to harness healing energy for personal and 
            professional growth. Experience enhanced well-being, reduced stress, and a 
            deeper connection to your spiritual self.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Healing Column */}
            <div>
              <h2 className="text-3xl font-bold mb-3">Healing</h2>
              <p>Promotes relaxation and emotional balance.</p>
            </div>
            
            {/* Growth Column */}
            <div>
              <h2 className="text-3xl font-bold mb-3">Growth</h2>
              <p>Enhances personal and spiritual development.</p>
            </div>
          </div>
        </div>
        
        {/* Right Image */}
        <div className="w-full lg:w-2/5 relative">
          <div className="relative w-full aspect-[4/5] max-w-lg mx-auto">
            <Image
              src="/image4.jpg" 
              alt="Meditation setup with Buddha statue, sage bundle, singing bowl, and crystals"
              fill
              style={{ objectFit: 'cover' }}
              className=""
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}