import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Videos | CornerStone Chiropractic Minot",
  description: "Watch educational videos about chiropractic care, treatments, and wellness tips from CornerStone Chiropractic in Minot.",
};

const videos = [
  {
    title: "What to Expect on Your First Visit",
    description: "Learn what happens during your initial consultation and examination at CornerStone Chiropractic.",
    thumbnail: "/images/video-first-visit.jpg",
    category: "New Patients"
  },
  {
    title: "Understanding Chiropractic Adjustments",
    description: "A detailed look at how chiropractic adjustments work and what you can expect during treatment.",
    thumbnail: "/images/video-adjustments.jpg",
    category: "Treatment"
  },
  {
    title: "Spinal Decompression Therapy Explained",
    description: "Learn how spinal decompression therapy can help with disc problems and back pain.",
    thumbnail: "/images/video-decompression.jpg",
    category: "Treatment"
  },
  {
    title: "Office Ergonomics for a Healthy Spine",
    description: "Tips for setting up your workspace to prevent back and neck pain.",
    thumbnail: "/images/video-ergonomics.jpg",
    category: "Wellness"
  },
  {
    title: "Stretches for Lower Back Pain",
    description: "Simple stretches you can do at home to help relieve lower back pain.",
    thumbnail: "/images/video-stretches.jpg",
    category: "Exercises"
  },
  {
    title: "The Benefits of Regular Chiropractic Care",
    description: "Discover how routine chiropractic care can improve your overall health and wellness.",
    thumbnail: "/images/video-benefits.jpg",
    category: "Wellness"
  },
  {
    title: "Posture Tips for Better Spinal Health",
    description: "Learn how to improve your posture and protect your spine in daily activities.",
    thumbnail: "/images/video-posture.jpg",
    category: "Wellness"
  },
  {
    title: "SoftWave Therapy: How It Works",
    description: "An introduction to SoftWave TRT and how it promotes tissue regeneration and healing.",
    thumbnail: "/images/video-softwave.jpg",
    category: "Treatment"
  }
];

export default function VideosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Videos
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Educational Content
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Watch our educational videos to learn more about chiropractic care, our treatments,
            and tips for maintaining your health and wellness.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-[#3D8AA1] to-[#131313] flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#C4A069] font-semibold">{video.category}</span>
                  <h3 className="text-xl font-bold text-[#131313] mt-2 mb-3 font-montserrat">
                    {video.title}
                  </h3>
                  <p className="text-[#58585A] text-sm">
                    {video.description}
                  </p>
                  <button className="mt-4 text-[#3D8AA1] font-semibold hover:text-[#C4A069] transition-colors flex items-center">
                    Watch Video
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Channel CTA */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Subscribe to Our Channel
          </h2>
          <p className="text-[#58585A] text-lg mb-8">
            Follow us on YouTube for the latest videos, health tips, and updates from
            CornerStone Chiropractic.
          </p>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-red-600 text-white px-8 py-3 rounded uppercase font-semibold hover:bg-red-700 transition-colors"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Subscribe on YouTube
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Ready to Experience Chiropractic Care?
          </h2>
          <p className="text-white text-lg mb-6">
            Don&apos;t just watch—come experience the benefits of chiropractic care for yourself.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Have Questions?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us to learn more about our services and how we can help you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#C4A069] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
