// pages/team.tsx
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaTwitter, FaDribbble } from 'react-icons/fa';

interface TeamMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jane Doe",
    title: "Lead Instructor",
    description: "With over 10 years of experience in Reiki healing and teaching.",
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    title: "Healing Expert",
    description: "Specializing in energy healing and intuitive guidance for personal growth.",
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    name: "Emily Johnson",
    title: "Reiki Master",
    description: "Certified Reiki Master with a passion for holistic wellness and meditation.",
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Spiritual Guide",
    description: "Bringing years of experience in spiritual coaching and energy alignment.",
    image: "/placeholder.jpg",
  },
  {
    id: 5,
    name: "Sarah Davis",
    title: "Wellness Coach",
    description: "Dedicated to helping clients achieve balance and harmony through Reiki practices.",
    image: "/placeholder.jpg",
  },
  {
    id: 6,
    name: "Laura Wilson",
    title: "Energy Healer",
    description: "Expert in chakra balancing and emotional healing through Reiki techniques.",
    image: "/placeholder.jpg",
  },
  {
    id: 7,
    name: "David Lee",
    title: "Meditation Teacher",
    description: "Guiding individuals in mindfulness practices and deep relaxation through meditation.",
    image: "/placeholder.jpg",
  },
  {
    id: 8,
    name: "Rachel Green",
    title: "Holistic Healer",
    description: "Combining Reiki with holistic practices for comprehensive healing experiences.",
    image: "/placeholder.jpg",
  },
];

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <div className="flex flex-col">
      <div className="bg-gray-200 aspect-square mb-4">
        <div className="w-full h-full flex items-center justify-center">
          <Image 
            src={member.image} 
            alt={member.name} 
            width={150} 
            height={150}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-md">{member.title}</p>
      <p className="text-sm mt-2 mb-4">{member.description}</p>
      <div className="flex space-x-2">
        <Link href="#" className="text-gray-700 hover:text-black">
          <FaLinkedin size={20} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-black">
          <FaTwitter size={20} />
        </Link>
        <Link href="#" className="text-gray-700 hover:text-black">
          <FaDribbble size={20} />
        </Link>
      </div>
    </div>
  );
};

const Team: NextPage = () => {
  return (
    <div className="min-h-screen w-full">
      <Head >
        <title >Our Team | Empower Reiki</title>
        <meta name="description" content="Meet our team of Reiki practitioners" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-md mb-2">Empower</p>
          <h1 className="text-6xl font-bold mb-4">Our Team</h1>
          <p className="text-lg">Meet our dedicated Reiki instructors and their expertise.</p>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        {/* <div className="w-full px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-3xl font-bold mb-4">We're hiring!</h2>
          <p className="mb-6">Join our team of passionate Reiki professionals today.</p>
          <Link href="/careers" className="inline-block border border-black px-6 py-3 hover:bg-black hover:text-white transition-colors">
            Open positions
          </Link>
        </div> */}
      </main>
    </div>
  );
};

export default Team;