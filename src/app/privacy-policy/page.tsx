import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CornerStone Chiropractic Minot",
  description: "Privacy policy for CornerStone Chiropractic in Minot. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Privacy Policy
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
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Introduction</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                CornerStone Chiropractic (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Information We Collect</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                We may collect information about you in a variety of ways, including:
              </p>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Personal Data</h3>
              <p className="text-[#58585A] leading-relaxed mb-4">
                When you schedule an appointment or contact us, we may collect personally identifiable
                information such as your name, email address, phone number, mailing address, and
                health-related information necessary to provide chiropractic care.
              </p>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Website Usage Data</h3>
              <p className="text-[#58585A] leading-relaxed mb-4">
                We may automatically collect information about your device and browsing actions,
                including your IP address, browser type, operating system, access times, and pages viewed.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">How We Use Your Information</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                We may use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-[#58585A] space-y-2 mb-4">
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing appointments and communicating with you about your care</li>
                <li>Sending you appointment reminders and health-related communications</li>
                <li>Responding to your comments, questions, and requests</li>
                <li>Complying with legal obligations and protecting our rights</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">HIPAA Compliance</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                As a healthcare provider, we are committed to complying with the Health Insurance
                Portability and Accountability Act (HIPAA) and protecting your protected health
                information (PHI). Your health information is kept confidential and is only shared
                as permitted by law or with your consent.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Information Sharing</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to outside
                parties except as described in this policy. We may share your information with:
              </p>
              <ul className="list-disc list-inside text-[#58585A] space-y-2 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Other healthcare providers involved in your care (with your consent)</li>
                <li>Insurance companies for billing purposes</li>
                <li>Legal authorities when required by law</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Data Security</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect
                your personal information. However, no method of transmission over the Internet or
                electronic storage is 100% secure.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Your Rights</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-[#58585A] space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your health records</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Contact Us</h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please
                contact us at:
              </p>
              <p className="text-[#58585A] leading-relaxed">
                CornerStone Chiropractic<br />
                Minot, ND<br />
                Phone: (701) 838-0090<br />
                Email: info@yourcornerstonechiro.com
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Changes to This Policy</h2>
              <p className="text-[#58585A] leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page and updating the &quot;Last
                updated&quot; date.
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
            Contact us if you have any questions about our privacy practices.
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
