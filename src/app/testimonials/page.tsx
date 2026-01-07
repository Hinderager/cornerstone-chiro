import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patient Testimonials | CornerStone Chiropractic Minot",
  description: "Read and watch testimonials from real patients at CornerStone Chiropractic in Minot. See how we've helped patients with neck pain, headaches, and more.",
};

const videoTestimonials = [
  { title: "Christy Testimonial", duration: "0:41" },
  { title: "Pain Relief from SoftWave Therapy", duration: "1:13" },
  { title: "CornerStone Chiropractic Patient Testimonial", duration: "3:16" },
  { title: "Patient Testimonial from CornerStone Chiropractic", duration: "2:13" },
  { title: "Another Patient Testimonial for CornerStone Chiropractic", duration: "1:26" },
  { title: "Athlete Care Testimonial", duration: "0:43" },
  { title: "Another CornerStone Chiropractic Testimonial!", duration: "1:35" },
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Patient Testimonials
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Hear From Our Patients
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Read and watch testimonials from real patients
            who have experienced the CornerStone difference.
          </p>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
            Video Testimonials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {videoTestimonials.map((video, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-[#3D8AA1] to-[#131313] flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-[#131313] mb-2 font-montserrat">
                    {video.title}
                  </h3>
                  <p className="text-[#58585A] text-sm">{video.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Written Testimonial */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
            Chiropractic Testimonial
          </h2>
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-[#C4A069]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-[#58585A] text-lg leading-relaxed mb-8 italic">
              &quot;I have been in the military for 33.5 years. As a result of playing sports as a young man, military duties, PT tests, genetics, and some bad luck I ended up having my neck fused at C3/4 in Feb 2021. The surgery was a success for the most part, but I had lingering neck stiffness that often turned into headaches that caused me to be unable to focus or function and often times forced me to miss work.
              <br /><br />
              I started seeing Dr. Fielhaber in August with a recommendation by my primary care manager (PCM). I want to emphasize that my PCM is not a big believer in a lot of chiropractic care techniques so the fact that he recommended Dr. Fielhaber and Cornerstone Chiropractic means a lot.
              <br /><br />
              First visit they do a complete diagnostic test on you to determine your specific treatment plan. After that they work with you to tweak the plan to fit your needs. Since I have started my treatments I still have neck stiffness, but it no longer turns into debilitating headaches. I love to golf, prior to starting my treatments if I played a round it was most certainly going to result in a couple of horrible days for my neck and head. I can now play golf a few times a week and still function afterward.
              <br /><br />
              I sleep better and have not missed a day of work. I cannot say enough about the life-changing effect Dr. Fielhaber and the outstanding Cornerstone Chiropractic staff have had on me.&quot;
            </blockquote>
            <div className="border-t border-gray-200 pt-6">
              <p className="font-bold text-[#131313] text-xl font-montserrat">CMSgt Michael J. Anders</p>
              <p className="text-[#C4A069]">219th Security Forces SEL</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-8 font-montserrat">
            What Patients Are Saying
          </h2>
          <div className="inline-flex items-center bg-white rounded-lg shadow-md px-8 py-6 mb-8">
            <div className="text-left">
              <div className="flex items-center mb-2">
                <span className="text-4xl font-bold text-[#131313] mr-3">5.0</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#C4A069]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-[#58585A]">Based on 412 Google Reviews</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <a
              href="https://g.page/review/cornerstonechiropractic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#131313] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-gray-800 transition-colors"
            >
              Read Reviews on Google
            </a>
          </div>
        </div>
      </section>

      {/* Meet the Team CTA */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Meet The Team
          </h2>
          <p className="text-white text-lg mb-6">
            Get to know the doctors and staff who make CornerStone Chiropractic special.
          </p>
          <Link
            href="/team"
            className="inline-block bg-white text-[#3D8AA1] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Leave Review Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Share Your Experience
          </h2>
          <p className="text-[#58585A] text-lg mb-8">
            Are you a current patient? We&apos;d love to hear about your experience at CornerStone
            Chiropractic. Your feedback helps us continue to provide excellent care and helps
            others find the relief they&apos;re looking for.
          </p>
          <a
            href="https://g.page/review/cornerstonechiropractic"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#131313] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-gray-800 transition-colors"
          >
            Leave a Review
          </a>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Book Your Appointment
          </h2>
          <p className="text-white text-lg mb-8">
            Get started on your path to optimal health today!
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-white text-[#C4A069] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Book Now
          </Link>
        </div>
      </section>
    </div>
  );
}
