import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Activator Method in Minot | CornerStone Chiropractic",
  description: "Experience the Activator Method at CornerStone Chiropractic in Minot. Gentle, low-force chiropractic adjustments using the Activator instrument.",
};

export default function ActivatorMethodPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Activator Method in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Low-Force Chiropractic Technique
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
            What is the Activator Method?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            The Activator Method is one of the most widely researched and used chiropractic techniques in the world. It uses a small, handheld spring-loaded instrument called the Activator Adjusting Instrument to deliver a gentle, precise impulse to the spine.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we are trained and certified in the Activator Method. This technique allows us to provide effective chiropractic care to patients who prefer or require a gentler approach than traditional manual adjustments.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of the Activator Method
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Gentle Treatment</h3>
              <p className="text-[#58585A]">
                Low-force adjustments that are comfortable for all patients.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Highly Researched</h3>
              <p className="text-[#58585A]">
                One of the most scientifically studied chiropractic techniques.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Safe & Effective</h3>
              <p className="text-[#58585A]">
                Proven results without the twisting or cracking of manual adjustments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            How the Activator Method Works
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The Activator Method involves a comprehensive system for analyzing and adjusting the spine. First, a series of leg length checks and other assessments are used to identify areas of spinal dysfunction.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Once problem areas are identified, the Activator instrument delivers a controlled, light, and fast thrust to the targeted area. Because the impulse is so quick (faster than the body can tense up), it&apos;s comfortable and effective even for patients who have difficulty relaxing during treatment.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The gentle nature of the Activator Method makes it particularly suitable for:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Elderly patients
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Patients with arthritis or osteoporosis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Patients nervous about manual adjustments
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Children
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Patients recovering from surgery
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Try the Activator Method
          </h2>
          <p className="text-white text-lg mb-6">
            Experience gentle, effective chiropractic care.
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
            What to Expect
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            When you receive an Activator adjustment, you&apos;ll typically lie face down on the treatment table. The chiropractor will perform various tests to identify areas of dysfunction, then apply the Activator instrument to make gentle corrections.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            You&apos;ll feel a light tapping sensation with each adjustment. There&apos;s no popping, cracking, or twisting involved. Most patients find the treatment very comfortable and relaxing.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Whether you&apos;re new to chiropractic care or looking for an alternative to manual adjustments, the Activator Method may be right for you. Contact our office to learn more or schedule your appointment.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Activator Method in Minot
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
