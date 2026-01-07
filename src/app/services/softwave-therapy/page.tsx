import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SoftWave Tissue Regenerative Therapy in Minot | CornerStone Chiropractic",
  description: "Experience SoftWave TRT at CornerStone Chiropractic in Minot. Advanced shock wave technology for tissue regeneration and pain relief.",
};

export default function SoftWaveTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            SoftWave Tissue Regenerative Therapy
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Advanced Regenerative Treatment in Minot
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
            What is SoftWave Therapy?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            SoftWave Tissue Regenerative Therapy (TRT) is a breakthrough treatment that uses patented shock wave technology to activate the body&apos;s natural healing process. This FDA-cleared technology delivers acoustic waves that penetrate deep into damaged tissues, promoting regeneration and pain relief.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            At CornerStone Chiropractic, we&apos;re proud to offer this cutting-edge therapy to help our patients heal faster and avoid more invasive treatments like surgery or long-term medication use.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of SoftWave Therapy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Tissue Regeneration</h3>
              <p className="text-[#58585A]">
                Stimulates stem cell activation for natural tissue repair.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Pain Relief</h3>
              <p className="text-[#58585A]">
                Provides significant pain reduction without drugs or surgery.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Improved Blood Flow</h3>
              <p className="text-[#58585A]">
                Increases circulation to promote healing in damaged areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Conditions Treated with SoftWave
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            SoftWave therapy has shown excellent results for a variety of conditions:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Plantar fasciitis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tennis and golfer&apos;s elbow
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Rotator cuff injuries
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Knee pain and arthritis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Chronic back and neck pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Hip pain and bursitis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tendonitis and tendinopathy
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neuropathy
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Experience SoftWave Therapy
          </h2>
          <p className="text-white text-lg mb-6">
            Discover if SoftWave TRT is right for your condition.
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
            How SoftWave Therapy Works
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            SoftWave technology delivers unfocused, low-intensity shock waves to damaged tissues. These acoustic waves trigger a biological response that increases blood flow, decreases inflammation, and activates resident stem cells to begin the repair process.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Treatment sessions are quick, typically lasting 10-15 minutes. There&apos;s no downtime, and many patients experience immediate pain relief. A series of treatments is typically recommended for optimal results, with most patients seeing significant improvement within 6-8 sessions.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            SoftWave therapy is non-invasive, has no known side effects, and offers a viable alternative to surgery, injections, or long-term medication use.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            SoftWave Therapy in Minot
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
