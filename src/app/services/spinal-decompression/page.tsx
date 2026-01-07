import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spinal Decompression in Minot | CornerStone Chiropractic",
  description: "Experience spinal decompression therapy at CornerStone Chiropractic in Minot. Non-surgical treatment for herniated discs, sciatica, and back pain.",
};

export default function SpinalDecompressionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Spinal Decompression in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Non-Surgical Disc Treatment
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
            What is Spinal Decompression?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Spinal decompression therapy is a non-surgical treatment that gently stretches the spine to relieve pressure on the spinal discs and nerves. This FDA-cleared therapy creates negative pressure within the disc, which can help retract herniated or bulging disc material and promote the flow of healing nutrients.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we use advanced decompression technology to help patients find relief from disc-related pain without surgery.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of Spinal Decompression
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Non-Surgical</h3>
              <p className="text-[#58585A]">
                Avoid back surgery with this effective, non-invasive treatment option.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Disc Healing</h3>
              <p className="text-[#58585A]">
                Promote natural disc healing by increasing nutrient flow and reducing pressure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Pain Relief</h3>
              <p className="text-[#58585A]">
                Experience significant relief from back pain, leg pain, and sciatica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Conditions Treated with Spinal Decompression
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Spinal decompression therapy can be effective for:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Herniated or bulging discs
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Sciatica (leg pain from nerve compression)
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Degenerative disc disease
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Spinal stenosis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Facet syndrome
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Failed back surgery syndrome
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Chronic neck and back pain
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Try Spinal Decompression
          </h2>
          <p className="text-white text-lg mb-6">
            Find out if spinal decompression is right for you.
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
            What to Expect During Treatment
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            During spinal decompression therapy, you&apos;ll lie comfortably on a motorized table. A harness is placed around your hips, and the lower portion of the table gently moves to stretch and decompress the spine.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The treatment is controlled by a computer that applies precise amounts of distraction force to the spine. Most patients find the treatment relaxing and even fall asleep during sessions. Treatment sessions typically last 30-45 minutes.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            A typical treatment plan includes 15-30 sessions over several weeks. Many patients begin experiencing relief within the first few sessions, with continued improvement as treatment progresses.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Spinal Decompression in Minot
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
