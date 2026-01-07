import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | CornerStone Chiropractic Minot",
  description: "Terms of service for CornerStone Chiropractic in Minot. Please read these terms carefully before using our website or services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Terms of Service
          </h1>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Last updated: January 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Agreement to Terms</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                By accessing or using the CornerStone Chiropractic website and services, you agree
                to be bound by these Terms of Service. If you do not agree to these terms, please
                do not use our website or services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Services</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                CornerStone Chiropractic provides chiropractic care and related wellness services.
                Our website provides information about our services, allows you to schedule
                appointments, and access health resources.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Medical Disclaimer</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                The information provided on this website is for general informational purposes only
                and is not intended as a substitute for professional medical advice, diagnosis, or
                treatment. Always seek the advice of your physician or other qualified health
                provider with any questions you may have regarding a medical condition.
              </p>
              <p className="text-[#58585A] leading-relaxed mb-4">
                Never disregard professional medical advice or delay in seeking it because of
                something you have read on this website. If you think you may have a medical
                emergency, call your doctor or 911 immediately.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Appointment Scheduling</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                When scheduling appointments through our website:
              </p>
              <ul className="list-disc list-inside text-[#58585A] space-y-2 mb-4">
                <li>You agree to provide accurate and complete information</li>
                <li>You are responsible for arriving on time for scheduled appointments</li>
                <li>Cancellations should be made at least 24 hours in advance when possible</li>
                <li>Repeated no-shows may result in restrictions on future scheduling</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Payment Terms</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                Payment is due at the time of service unless other arrangements have been made.
                We accept various forms of payment including insurance, credit cards, and cash.
                You are responsible for any amounts not covered by insurance.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Intellectual Property</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                All content on this website, including text, graphics, logos, images, and software,
                is the property of CornerStone Chiropractic or its content suppliers and is
                protected by copyright and other intellectual property laws.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Prohibited Uses</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc list-inside text-[#58585A] space-y-2 mb-4">
                <li>Use the website for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with the proper functioning of the website</li>
                <li>Copy, modify, or distribute website content without permission</li>
                <li>Use the website to transmit spam or malicious content</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Limitation of Liability</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                To the fullest extent permitted by law, CornerStone Chiropractic shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of the website or services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Indemnification</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                You agree to indemnify and hold harmless CornerStone Chiropractic, its officers,
                directors, employees, and agents from any claims, damages, losses, or expenses
                arising from your violation of these Terms of Service.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Changes to Terms</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                We reserve the right to modify these Terms of Service at any time. Changes will
                be effective immediately upon posting to the website. Your continued use of the
                website after any changes constitutes acceptance of the new terms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Governing Law</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                These Terms of Service shall be governed by and construed in accordance with the
                laws of the State of North Dakota, without regard to its conflict of law provisions.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Contact Information</h2>
              <p className="text-[#58585A] leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-[#58585A] leading-relaxed mt-4">
                CornerStone Chiropractic<br />
                Minot, ND<br />
                Phone: (701) 838-0090<br />
                Email: info@yourcornerstonechiro.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Questions?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us if you have any questions about our terms of service.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#C4A069] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
