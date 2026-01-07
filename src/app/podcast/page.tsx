import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Podcast | CornerStone Chiropractic Minot",
  description: "Listen to the CornerStone Chiropractic podcast for health tips, wellness advice, and chiropractic education from our Minot clinic.",
};

const episodes = [
  {
    number: 12,
    title: "Understanding Chronic Pain and Natural Solutions",
    description: "In this episode, we discuss chronic pain, its causes, and how chiropractic care can provide natural relief without medication.",
    duration: "32 min",
    date: "2024-01-15"
  },
  {
    number: 11,
    title: "The Connection Between Posture and Health",
    description: "Poor posture affects more than just your back. Learn about the wide-ranging health effects of posture and how to improve yours.",
    duration: "28 min",
    date: "2024-01-08"
  },
  {
    number: 10,
    title: "Chiropractic Care for Athletes: Performance and Recovery",
    description: "Many professional athletes rely on chiropractic care. Discover how it can benefit your athletic performance and recovery.",
    duration: "35 min",
    date: "2024-01-01"
  },
  {
    number: 9,
    title: "Pregnancy and Chiropractic: What Expecting Mothers Should Know",
    description: "Safe and effective care for expecting mothers. Learn how chiropractic can make your pregnancy more comfortable.",
    duration: "30 min",
    date: "2023-12-25"
  },
  {
    number: 8,
    title: "Headaches and Migraines: A Chiropractic Perspective",
    description: "Suffering from chronic headaches? Learn how spinal adjustments can provide natural relief without medication.",
    duration: "27 min",
    date: "2023-12-18"
  },
  {
    number: 7,
    title: "The Science Behind Spinal Adjustments",
    description: "What happens during an adjustment? We break down the science and explain why chiropractic care works.",
    duration: "33 min",
    date: "2023-12-11"
  },
  {
    number: 6,
    title: "Stress, Tension, and Your Spine",
    description: "Stress affects your body in many ways, including your spine. Learn about the connection and how to manage it.",
    duration: "29 min",
    date: "2023-12-04"
  },
  {
    number: 5,
    title: "Nutrition for Spinal Health",
    description: "What you eat affects your spine. Discover the best foods and supplements for maintaining a healthy spine.",
    duration: "31 min",
    date: "2023-11-27"
  }
];

export default function PodcastPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Podcast
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            The CornerStone Health Show
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Listen to our podcast for health tips, wellness advice, and chiropractic education.
            New episodes released weekly.
          </p>
        </div>
      </section>

      {/* Subscribe Buttons */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center bg-[#9146FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#7a32e8] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 17.568c-.246.369-.74.481-1.109.235-3.039-1.855-6.865-2.274-11.374-1.246-.434.1-.868-.173-.969-.608-.1-.434.173-.868.608-.969 4.929-1.124 9.155-.64 12.558 1.479.368.246.481.74.286 1.109z"/>
              </svg>
              Spotify
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-[#9933FF] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#8022e6] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M5.34 0A5.328 5.328 0 0 0 0 5.34v13.32A5.328 5.328 0 0 0 5.34 24h13.32A5.328 5.328 0 0 0 24 18.66V5.34A5.328 5.328 0 0 0 18.66 0H5.34zm6.525 3.6c3.402 0 6.16 2.758 6.16 6.16 0 3.402-2.758 6.16-6.16 6.16-3.402 0-6.16-2.758-6.16-6.16 0-3.402 2.758-6.16 6.16-6.16z"/>
              </svg>
              Apple Podcasts
            </a>
            <a
              href="#"
              className="inline-flex items-center bg-[#4285F4] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#3367d6] transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4s-3.76 8.4-8.4 8.4-8.4-3.76-8.4-8.4 3.76-8.4 8.4-8.4z"/>
              </svg>
              Google Podcasts
            </a>
          </div>
        </div>
      </section>

      {/* Episodes List */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
            Recent Episodes
          </h2>
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-48 h-48 bg-gradient-to-br from-[#C4A069] to-[#3D8AA1] flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-4xl font-bold font-montserrat">
                      #{episode.number}
                    </span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-center text-sm text-[#58585A] mb-2">
                      <span>{new Date(episode.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span className="mx-2">•</span>
                      <span>{episode.duration}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">
                      {episode.title}
                    </h3>
                    <p className="text-[#58585A] mb-4">
                      {episode.description}
                    </p>
                    <button className="inline-flex items-center text-[#3D8AA1] font-semibold hover:text-[#C4A069] transition-colors">
                      <svg className="w-8 h-8 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
                      </svg>
                      Listen Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="inline-block bg-[#F5F5F5] text-[#131313] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-200 transition-colors">
              Load More Episodes
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Enjoy the Show?
          </h2>
          <p className="text-white text-lg mb-6">
            Leave us a review and help others discover the podcast!
          </p>
          <a
            href="#"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Leave a Review
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Experience Chiropractic Care?
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule your appointment and see how we can help you feel your best.
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
