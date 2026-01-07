import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Electrotherapy in Minot | CornerStone Chiropractic",
  description: "Experience electrotherapy at CornerStone Chiropractic in Minot. Electrical stimulation therapy for pain relief, muscle recovery, and healing.",
};

export default function ElectrotherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Electrotherapy in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Electrical Stimulation Therapy
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
            What is Electrotherapy?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Electrotherapy uses controlled electrical impulses to stimulate muscles, reduce pain, and promote healing. This therapeutic technique has been used for decades to help patients recover from injuries, manage chronic pain, and improve muscle function.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we incorporate electrotherapy as part of our comprehensive treatment approach. When combined with chiropractic adjustments, electrotherapy can enhance your results and speed up your recovery.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of Electrotherapy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Pain Relief</h3>
              <p className="text-[#58585A]">
                Block pain signals and stimulate natural pain relief mechanisms.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Muscle Recovery</h3>
              <p className="text-[#58585A]">
                Relax tight muscles and improve muscle function and strength.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Faster Healing</h3>
              <p className="text-[#58585A]">
                Increase blood circulation to promote tissue repair.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Electrotherapy */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Types of Electrotherapy
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">TENS (Transcutaneous Electrical Nerve Stimulation)</h3>
              <p className="text-[#58585A]">
                Uses low-voltage electrical current to relieve pain by blocking pain signals and stimulating endorphin release.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">EMS (Electrical Muscle Stimulation)</h3>
              <p className="text-[#58585A]">
                Stimulates muscle contractions to improve strength, reduce atrophy, and aid in muscle recovery after injury.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Interferential Current (IFC)</h3>
              <p className="text-[#58585A]">
                Uses higher frequency currents that penetrate deeper into tissues for pain relief and reduced inflammation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Experience Electrotherapy
          </h2>
          <p className="text-white text-lg mb-6">
            Learn how electrotherapy can help with your recovery.
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
            What to Expect During Treatment
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            During electrotherapy treatment, electrodes are placed on your skin over the treatment area. You&apos;ll feel a mild tingling or pulsing sensation as the electrical current is applied. The intensity is adjusted to your comfort level.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Treatment sessions typically last 15-30 minutes. Most patients find electrotherapy relaxing and comfortable. There&apos;s no downtime, and you can resume normal activities immediately after treatment.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Electrotherapy is often used in combination with other treatments such as chiropractic adjustments, massage, and exercise therapy for optimal results.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Electrotherapy in Minot
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
