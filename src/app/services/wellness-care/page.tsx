import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellness Care in Minot | CornerStone Chiropractic",
  description: "Maintain optimal health with wellness care at CornerStone Chiropractic in Minot. Preventative chiropractic care for long-term health and well-being.",
};

export default function WellnessCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Wellness Care in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Preventative Chiropractic Care
          </h2>
          <div className="text-center">
            <Link
              href="/book-appointment"
              className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What is Wellness Care?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Wellness care is a proactive approach to health that focuses on maintaining optimal well-being rather than just treating symptoms when they arise. At CornerStone Chiropractic, we believe that regular chiropractic care is an essential part of a healthy lifestyle.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Just like you visit the dentist regularly to maintain your teeth, regular chiropractic adjustments help maintain proper spinal alignment and nervous system function. This preventative approach can help you avoid health problems before they start.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of Wellness Care
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Prevent Problems</h3>
              <p className="text-[#58585A]">
                Catch and correct small issues before they become big problems.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Maintain Health</h3>
              <p className="text-[#58585A]">
                Keep your body functioning at its optimal level every day.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Feel Your Best</h3>
              <p className="text-[#58585A]">
                Enjoy more energy, better sleep, and improved quality of life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Wellness Care */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Why Choose Wellness Care?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Many people only visit a chiropractor when they&apos;re in pain. While we&apos;re always here to help with acute issues, we also know that regular maintenance care can help prevent many problems from occurring in the first place.
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Maintain proper spinal alignment
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Support optimal nervous system function
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Improve posture and flexibility
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Reduce stress and tension
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Boost immune system function
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Increase energy and vitality
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Start Your Wellness Journey
          </h2>
          <p className="text-white text-lg mb-6">
            Take a proactive approach to your health today.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What to Expect with Wellness Care
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            After your initial evaluation and any necessary corrective care, we&apos;ll recommend a wellness care schedule tailored to your needs. This typically involves regular check-ups and adjustments to maintain your progress and prevent future issues.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The frequency of visits varies based on your individual needs, lifestyle, and goals. Some patients benefit from weekly visits, while others may only need to come in monthly. We&apos;ll work with you to find the right schedule for your life.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Our goal is to help you maintain optimal health so you can enjoy life to the fullest. Contact us today to learn more about our wellness care programs.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Wellness Care in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            Get started on your path to optimal health today!
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
