import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "New Patients | CornerStone Chiropractic",
  description: "We're on a mission to help our community achieve optimal health. Check out our new patient specials - $89 Chiropractic and SoftWave specials, $59 InvisaRED special.",
};

export default function NewPatientsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            New Patients
          </h1>
        </div>
      </section>

      {/* Specials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Chiropractic Special */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#C4A069] py-4 px-6">
                <h2 className="text-xl font-bold text-white text-center">Chiropractic</h2>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#C4A069]">$89</span>
                  <p className="text-[#58585A] mt-2">New Patient Special</p>
                </div>
                <p className="text-[#58585A] mb-6">
                  We&apos;re on a mission to help our community achieve optimal health this year. That&apos;s why we&apos;ve built a new patient promotion special to get you started on your path.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    Chiropractic Consultation
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    Full Chiropractic Exam
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    X-Rays (if needed)
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    Central Nervous System Scan
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    Chiropractic Adjustment
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    Report of Findings
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                    Care Recommendations
                  </li>
                </ul>
                <div className="space-y-3">
                  <Link
                    href="/book-appointment"
                    className="block w-full bg-[#C4A069] text-white text-center py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:701-852-2800"
                    className="block w-full text-[#C4A069] text-center py-3 rounded border border-[#C4A069] uppercase font-semibold hover:bg-[#C4A069] hover:text-white transition-colors"
                  >
                    (701) 852-2800
                  </a>
                </div>
              </div>
            </div>

            {/* SoftWave Special */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#3D8AA1] py-4 px-6">
                <h2 className="text-xl font-bold text-white text-center">SoftWave</h2>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#3D8AA1]">$89</span>
                  <p className="text-[#58585A] mt-2">New Patient Special</p>
                </div>
                <p className="text-[#58585A] mb-6">
                  SoftWave Therapy is a treatment that delivers precise shock waves to specific injured soft tissue that helps to reduce pain and promote natural healing. This non-invasive treatment is great for finding lasting Chronic Pain relief with:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    Foot Pain
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    Neck Pain
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    Knee Pain
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    Shoulder Pain
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    Plantar Fasciitis
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    Old Injuries that won&apos;t heal
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#3D8AA1] rounded-full mr-3"></span>
                    And Much More!
                  </li>
                </ul>
                <div className="space-y-3">
                  <Link
                    href="/book-appointment"
                    className="block w-full bg-[#3D8AA1] text-white text-center py-3 rounded uppercase font-semibold hover:bg-[#2d7a91] transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:701-852-2800"
                    className="block w-full text-[#3D8AA1] text-center py-3 rounded border border-[#3D8AA1] uppercase font-semibold hover:bg-[#3D8AA1] hover:text-white transition-colors"
                  >
                    (701) 852-2800
                  </a>
                </div>
              </div>
            </div>

            {/* InvisaRED Special */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
              <div className="bg-[#131313] py-4 px-6">
                <h2 className="text-xl font-bold text-white text-center">Invisa-RED</h2>
              </div>
              <div className="p-6">
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-[#131313]">$59</span>
                  <p className="text-[#58585A] mt-2">New Patient Special</p>
                </div>
                <p className="text-[#58585A] mb-6">
                  Invisa-RED is a FAT MELTING LASER and is the only FDA and IRB-approved laser that has clinically and scientifically proven outcomes for Weight Reduction, Fat Reduction, and Inch Loss! Best of all it&apos;s non-invasive, painless, and has no downtime!
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#131313] rounded-full mr-3"></span>
                    Laser Contouring Session
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#131313] rounded-full mr-3"></span>
                    Whole Body Composition Analysis
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#131313] rounded-full mr-3"></span>
                    Comprehensive Weight Loss Assessment
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#131313] rounded-full mr-3"></span>
                    Personalized Strategy Session
                  </li>
                  <li className="flex items-center text-[#58585A]">
                    <span className="w-2 h-2 bg-[#131313] rounded-full mr-3"></span>
                    Whole Body Vibration Therapy Session
                  </li>
                </ul>
                <div className="space-y-3">
                  <Link
                    href="/book-appointment"
                    className="block w-full bg-[#131313] text-white text-center py-3 rounded uppercase font-semibold hover:bg-[#333] transition-colors"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:701-852-2800"
                    className="block w-full text-[#131313] text-center py-3 rounded border border-[#131313] uppercase font-semibold hover:bg-[#131313] hover:text-white transition-colors"
                  >
                    (701) 852-2800
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Can Chiropractic Help Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            How can chiropractic care in Minot help you?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed text-center mb-12">
            Chiropractic care is a non-invasive, all-natural treatment option for dealing with all sorts of aches and pains that come from everyday life. Whether you&apos;re currently experiencing chronic pain issues, or just want to live with optimal health, chiropractic care can help.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Back Pain</h3>
              <p className="text-[#58585A] mb-4">
                Get back pain relief with top Chiropractic care in Minot.
              </p>
              <Link
                href="/symptoms/back-pain"
                className="text-[#C4A069] font-semibold hover:underline"
              >
                LEARN MORE
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Neck Pain</h3>
              <p className="text-[#58585A] mb-4">
                Get specialized treatment to pinpoint and correct neck pain.
              </p>
              <Link
                href="/symptoms/neck-pain"
                className="text-[#C4A069] font-semibold hover:underline"
              >
                LEARN MORE
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Hip Pain</h3>
              <p className="text-[#58585A] mb-4">
                Work with our specialist to fix hip misalignment and pain issues.
              </p>
              <Link
                href="/symptoms/hip-pain"
                className="text-[#C4A069] font-semibold hover:underline"
              >
                LEARN MORE
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/services/chiropractic-care"
              className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
            >
              Learn About Chiropractic Care
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Book Your Appointment!
          </h2>
          <p className="text-white text-lg mb-8">
            Get started on your path to optimal health today.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-white text-[#C4A069] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
}
