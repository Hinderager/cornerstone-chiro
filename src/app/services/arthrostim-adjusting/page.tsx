import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ArthroStim Adjusting in Minot | CornerStone Chiropractic",
  description: "Experience ArthroStim adjusting at CornerStone Chiropractic in Minot. Gentle, precise chiropractic adjustments using advanced instrument technology.",
};

export default function ArthrostimAdjustingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            ArthroStim Adjusting in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Gentle Instrument-Assisted Adjustments
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
            What is ArthroStim?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            The ArthroStim is an FDA-approved handheld instrument that delivers precise, controlled chiropractic adjustments. It produces a rapid succession of gentle pulses that stimulate the joints and nervous system without the twisting, popping, or cracking associated with traditional manual adjustments.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we use the ArthroStim for patients who prefer a gentler approach or have conditions that make manual adjustments less suitable. It&apos;s particularly effective for sensitive patients, the elderly, and those with acute pain.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of ArthroStim Adjusting
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Gentle & Precise</h3>
              <p className="text-[#58585A]">
                Controlled adjustments without the twisting or cracking of traditional methods.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Versatile</h3>
              <p className="text-[#58585A]">
                Effective for all ages and body types, including sensitive patients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Fast Results</h3>
              <p className="text-[#58585A]">
                Quick treatments with immediate improvements in mobility and comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Who Benefits from ArthroStim?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            ArthroStim adjusting is ideal for:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Patients who are nervous about manual adjustments
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Elderly patients or those with osteoporosis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Children and infants
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Patients with acute pain or inflammation
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Post-surgical patients
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Those who prefer a low-force technique
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Experience Gentle Adjustments
          </h2>
          <p className="text-white text-lg mb-6">
            Try ArthroStim adjusting at our Minot office.
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
            How ArthroStim Works
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The ArthroStim instrument delivers 12-14 gentle pulses per second, stimulating the nervous system and joints without the force required for manual adjustments. This rapid pulsing action is more effective at creating neurological feedback than a single manual thrust.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The frequency of the pulses is designed to match the natural frequency of the body&apos;s proprioceptors, which are the sensory receptors that detect position and movement. This stimulation helps reset abnormal nerve patterns and restore proper joint function.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Because the force is so controlled and gentle, ArthroStim can be used on virtually any area of the body, including the spine, extremities, and even the TMJ (jaw).
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            ArthroStim Adjusting in Minot
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
