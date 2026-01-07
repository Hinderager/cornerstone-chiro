import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "InvisaRed Therapy in Minot | CornerStone Chiropractic",
  description: "Experience InvisaRed light therapy at CornerStone Chiropractic in Minot. Advanced red light therapy for pain relief, weight loss, and cellular healing.",
};

export default function InvisaredTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            InvisaRed Therapy in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Advanced Red Light Therapy
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
            What is InvisaRed Therapy?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            InvisaRed therapy is an advanced form of photobiomodulation that uses specific wavelengths of red and near-infrared light to stimulate cellular healing and regeneration. This FDA-cleared technology works at the cellular level to promote healing, reduce inflammation, and improve overall health.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we offer InvisaRed therapy as part of our comprehensive wellness services. This non-invasive treatment can help with a variety of health goals, from pain relief to body contouring.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of InvisaRed Therapy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Pain Relief</h3>
              <p className="text-[#58585A]">
                Reduce chronic pain and inflammation naturally without drugs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Cellular Healing</h3>
              <p className="text-[#58585A]">
                Stimulate ATP production for enhanced cellular repair and regeneration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Body Contouring</h3>
              <p className="text-[#58585A]">
                Support weight loss goals by targeting stubborn fat deposits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Applications of InvisaRed Therapy
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            InvisaRed therapy has shown benefits for a wide range of conditions and goals:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Chronic pain and inflammation
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Weight loss and body contouring
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Skin rejuvenation and anti-aging
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Wound healing
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscle recovery and athletic performance
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neuropathy
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Joint pain and arthritis
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Try InvisaRed Therapy
          </h2>
          <p className="text-white text-lg mb-6">
            Discover the healing power of red light therapy.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            How InvisaRed Therapy Works
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            InvisaRed technology uses specific wavelengths of light (red and near-infrared) that penetrate deep into the body&apos;s tissues. This light energy is absorbed by the mitochondria in your cells, stimulating the production of ATP (cellular energy).
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            With increased ATP production, your cells can repair and regenerate more efficiently. This leads to reduced inflammation, faster healing, and improved cellular function throughout the body.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Treatment sessions are comfortable and relaxing, typically lasting 15-30 minutes. There&apos;s no pain, no downtime, and no side effects. Most patients see results after several sessions.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            InvisaRed Therapy in Minot
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
