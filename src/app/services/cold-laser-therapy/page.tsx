import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cold Laser Therapy in Minot | CornerStone Chiropractic",
  description: "Experience the healing benefits of cold laser therapy at CornerStone Chiropractic in Minot. Non-invasive treatment for pain relief and tissue healing.",
};

export default function ColdLaserTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Cold Laser Therapy in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Advanced Healing Technology
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
            What is Cold Laser Therapy?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Cold laser therapy, also known as low-level laser therapy (LLLT), is a non-invasive treatment that uses specific wavelengths of light to stimulate healing at the cellular level. Unlike surgical lasers, cold lasers don&apos;t cut or burn tissue. Instead, they penetrate deep into the tissue to promote natural healing processes.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we use cold laser therapy to help patients recover from injuries, reduce pain and inflammation, and accelerate the body&apos;s natural healing abilities.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of Cold Laser Therapy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Pain Relief</h3>
              <p className="text-[#58585A]">
                Reduce pain without medications or invasive procedures.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Faster Healing</h3>
              <p className="text-[#58585A]">
                Accelerate tissue repair and cell regeneration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Reduce Inflammation</h3>
              <p className="text-[#58585A]">
                Decrease swelling and inflammation in injured areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Conditions Treated with Cold Laser Therapy
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Cold laser therapy can be effective for a wide range of conditions, including:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Soft tissue injuries (sprains, strains)
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Arthritis and joint pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tendonitis and bursitis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Carpal tunnel syndrome
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Back and neck pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neuropathy
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Sports injuries
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Experience Cold Laser Therapy
          </h2>
          <p className="text-white text-lg mb-6">
            Schedule your appointment to see if cold laser therapy is right for you.
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
            How Cold Laser Therapy Works
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Cold laser therapy works by delivering specific wavelengths of light energy to damaged or inflamed tissues. This light energy is absorbed by the cells, where it stimulates cellular processes that promote healing.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The treatment increases ATP (cellular energy) production, improves blood circulation, reduces inflammation, and stimulates the release of endorphins for natural pain relief. The result is faster healing and reduced pain without any side effects.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Treatment sessions are quick, typically lasting 10-20 minutes, and are completely painless. Most patients experience a warm, soothing sensation during treatment. Multiple sessions are usually recommended for optimal results.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Cold Laser Therapy in Minot
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
