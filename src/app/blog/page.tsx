import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | CornerStone Chiropractic Minot",
  description: "Stay informed with the latest chiropractic health tips, wellness advice, and news from CornerStone Chiropractic in Minot.",
};

const blogPosts = [
  {
    slug: "benefits-of-regular-chiropractic-care",
    title: "The Benefits of Regular Chiropractic Care",
    excerpt: "Discover how regular chiropractic adjustments can improve your overall health, reduce pain, and enhance your quality of life.",
    date: "2024-01-15",
    category: "Wellness"
  },
  {
    slug: "understanding-back-pain",
    title: "Understanding Back Pain: Causes and Solutions",
    excerpt: "Back pain affects millions of people. Learn about the common causes of back pain and how chiropractic care can help.",
    date: "2024-01-10",
    category: "Back Pain"
  },
  {
    slug: "chiropractic-care-for-athletes",
    title: "Chiropractic Care for Athletes: Enhance Performance & Prevent Injuries",
    excerpt: "Many professional athletes rely on chiropractic care. Find out how it can benefit your athletic performance.",
    date: "2024-01-05",
    category: "Sports"
  },
  {
    slug: "headaches-and-chiropractic",
    title: "How Chiropractic Care Can Relieve Headaches",
    excerpt: "Suffering from chronic headaches? Learn how spinal adjustments can provide natural relief without medication.",
    date: "2023-12-28",
    category: "Headaches"
  },
  {
    slug: "posture-in-the-digital-age",
    title: "Maintaining Good Posture in the Digital Age",
    excerpt: "With so much time spent on devices, poor posture is epidemic. Here are tips to protect your spine.",
    date: "2023-12-20",
    category: "Wellness"
  },
  {
    slug: "pregnancy-and-chiropractic",
    title: "Chiropractic Care During Pregnancy",
    excerpt: "Safe and effective care for expecting mothers. Learn how chiropractic can make your pregnancy more comfortable.",
    date: "2023-12-15",
    category: "Pregnancy"
  },
  {
    slug: "sciatica-explained",
    title: "Sciatica: Causes, Symptoms, and Treatment Options",
    excerpt: "Sciatic nerve pain can be debilitating. Understanding the condition is the first step toward relief.",
    date: "2023-12-10",
    category: "Sciatica"
  },
  {
    slug: "children-and-chiropractic",
    title: "Is Chiropractic Care Safe for Children?",
    excerpt: "Parents often ask about chiropractic care for kids. Here's what you need to know about pediatric adjustments.",
    date: "2023-12-05",
    category: "Pediatric"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Blog
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Health Tips & Wellness Advice
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Stay informed with the latest chiropractic health tips, wellness advice, and news
            from CornerStone Chiropractic.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-[#3D8AA1] to-[#C4A069]"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-[#C4A069] font-semibold">{post.category}</span>
                    <span className="text-sm text-[#58585A]">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">
                    <Link href={`/blog/${post.slug}`} className="hover:text-[#C4A069] transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-[#58585A] mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[#3D8AA1] font-semibold hover:text-[#C4A069] transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Stay Updated
          </h2>
          <p className="text-[#58585A] text-lg mb-8">
            Subscribe to our newsletter for the latest health tips and updates from
            CornerStone Chiropractic.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
            />
            <button
              type="submit"
              className="bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Feel Better?
          </h2>
          <p className="text-white text-lg mb-8">
            Don&apos;t just read about it—experience the benefits of chiropractic care for yourself.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-white text-[#C4A069] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
