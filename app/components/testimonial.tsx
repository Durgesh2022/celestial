import type { NextPage } from "next";
import Head from "next/head";
import FancyTestimonialsSlider from "./testimonialcourosel";

// Define the Testimonial interface to match what FancyTestimonialsSlider expects
interface Testimonial {
  img: string;
  quote: string;
  name: string;
  role: string;
}

const Testimonial: NextPage = () => {
  const testimonials: Testimonial[] = [
    {
      img: "/image1.jpg", // Use imported StaticImageData
      quote:
        "The Reiki certification program transformed my life and deepened my spiritual practice. I now feel empowered to help others on their healing journeys.",
      name: "Emily Johnson",
      role: "Reiki Master, Self-employed",
    },
    {
      img: "/image1.jpg",
      quote:
        "After completing the Reiki program, I've gained profound insight into energy healing. The techniques I learned have become an invaluable part of my daily wellness routine.",
      name: "David Parker",
      role: "Wellness Coach",
    },
    {
      img: "/image1.jpg",
      quote:
        "The instructors were incredibly knowledgeable and supportive throughout the entire certification process. I feel confident in my ability to practice Reiki professionally.",
      name: "Sarah Williams",
      role: "Holistic Practitioner",
    },
  ];

  return (
    <div>
      <Head>
        <title>Testimonials | Reiki Certification Program</title>
        <meta
          name="description"
          content="Hear what our graduates say about our Reiki certification program"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen items-center justify-center">
        <FancyTestimonialsSlider testimonials={testimonials} />
      </main>
    </div>
  );
};

export default Testimonial;