import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Payment Options | CornerStone Chiropractic Minot",
  description: "Flexible payment options at CornerStone Chiropractic in Minot. We accept most insurance plans and offer affordable self-pay options.",
};

export default function PaymentOptionsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Payment Options
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Affordable Care for Everyone
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            At CornerStone Chiropractic, we believe everyone deserves access to quality
            chiropractic care. We offer flexible payment options to fit your budget.
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
            We Accept
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#3D8AA1] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Insurance</h3>
              <p className="text-[#58585A]">
                We accept most major insurance plans. Our staff will verify your benefits
                and help you understand your coverage.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#C4A069] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Credit/Debit Cards</h3>
              <p className="text-[#58585A]">
                We accept all major credit and debit cards including Visa, MasterCard,
                American Express, and Discover.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-[#131313] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Cash & Check</h3>
              <p className="text-[#58585A]">
                We also accept cash and personal checks for your convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Information */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Insurance Information
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Most insurance plans include chiropractic coverage. We accept a wide variety of
            insurance plans and are happy to verify your benefits before your first visit.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Common insurance plans we work with include:
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <ul className="space-y-2">
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                Blue Cross Blue Shield
              </li>
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                Sanford Health Plan
              </li>
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                Medica
              </li>
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                Medicare
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                United Healthcare
              </li>
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                Aetna
              </li>
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                Cigna
              </li>
              <li className="flex items-center text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
                And many more...
              </li>
            </ul>
          </div>
          <p className="text-[#58585A] text-center">
            Don&apos;t see your insurance listed? Contact us to find out if we accept your plan.
          </p>
        </div>
      </section>

      {/* Self-Pay Options */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Self-Pay Options
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6 text-center">
            No insurance? No problem! We offer affordable self-pay rates and payment plans
            to make chiropractic care accessible to everyone.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <h3 className="text-xl font-bold text-[#131313] mb-4 font-montserrat text-center">
              Benefits of Self-Pay
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
                <span>Transparent pricing with no surprise bills</span>
              </li>
              <li className="flex items-start text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
                <span>No referrals or pre-authorizations needed</span>
              </li>
              <li className="flex items-start text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
                <span>Flexible payment plans available</span>
              </li>
              <li className="flex items-start text-[#58585A]">
                <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
                <span>Family discounts available</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Questions About Payment?
          </h2>
          <p className="text-white text-lg mb-6">
            Our friendly staff is here to help you understand your options.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#3D8AA1] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Don&apos;t Let Cost Be a Barrier
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule your appointment today and let us help you find a payment solution that works.
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
