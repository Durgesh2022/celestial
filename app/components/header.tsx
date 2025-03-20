// app/page.tsx
import Image from 'next/image';
import { Inter } from 'next/font/google';

// Initialize the font
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Transform Your Life with Reiki Certification',
  description: 'Explore our Reiki certification courses designed to empower your spiritual journey and enhance your healing abilities.',
};

export default function Header() {
  return (
    <div className={`w-full h-screen ${inter.className}`}>
      <main className="flex flex-col lg:flex-row items-center justify-between w-full h-full px-4 py-4 md:px-16 max-w-full mx-auto ">
        <div className="w-full lg:w-3/5 pr-0 lg:pr-12 mb-8 lg:mb-0">
        <h2 className="text-2xl font-bold  ">
        Transform Your Life with 
        </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Celestials Healing
          </h1>
          <p className="text-lg mb-8">
            Welcome to our serene space dedicated to Reiki certification. Explore our
            courses designed to empower your spiritual journey and enhance your
            healing abilities.
          </p>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-8 py-3 font-medium">
              Learn More
            </button>
            <button className="border border-black px-8 py-3 font-medium">
              Sign Up
            </button>
          </div>
        </div>

        <div className="w-full lg:w-2/5 h-full relative flex items-center">
          <div className="relative w-[500px] h-[500px]">
            <Image
              src="/image(1).jpg" 
              alt="Reiki healing session with a person receiving treatment in a calm environment with candles and a salt lamp"
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