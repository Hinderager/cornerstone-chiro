import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disc Injury Treatment in Minot | CornerStone Chiropractic",
  description: "Suffering from a disc injury? Our chiropractic team in Minot specializes in treating disc injuries including herniated, bulging, and slipped discs.",
};

export default function DiscInjuryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Disc Injury Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Disc Injuries
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

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Chiropractic Treatment for Disc Injuries
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Disc injuries can be extremely painful and debilitating. Whether you have a herniated disc, bulging disc, or degenerative disc disease, the pain can significantly impact your daily life. The good news is that chiropractic care offers an effective, non-surgical treatment option for disc injuries.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our chiropractic team in Minot specializes in treating disc injuries using gentle, targeted adjustments to relieve pressure on the affected discs and promote natural healing. We can help you avoid surgery and get back to living pain-free.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Find The Root Cause</h3>
              <p className="text-[#58585A]">
                Get to the bottom of what&apos;s causing your disc pain so we can build a plan to get you feeling great again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Care Plan</h3>
              <p className="text-[#58585A]">
                We&apos;ll help build you a plan of action to get your pain under control and getting you and your body feeling 100%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                If needed, we&apos;ll establish preventative measures to keep your problem from coming back so you can stay healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Disc Injury Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience significant pain relief from their disc injuries with chiropractic care. Using our gentle adjusting techniques, we can help relieve pressure on the affected discs and get you back to feeling great again. Book an appointment now to schedule a time with our team.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Book Your Appointment!
          </h2>
          <p className="text-white text-lg mb-6">
            Get started on your path to optimal health today.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Schedule Now
          </Link>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What is a Disc Injury?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The spinal discs are the cushion-like pads between the vertebrae in your spine. They act as shock absorbers and allow for flexibility in the spine. When a disc becomes damaged, it can cause significant pain and other symptoms.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Disc injuries can occur due to trauma, repetitive stress, poor posture, or natural degeneration over time. When a disc is injured, it can put pressure on nearby nerves, causing pain that radiates to other parts of the body.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Types of Disc Injuries
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Herniated Disc</h3>
              <p className="text-[#58585A]">
                A herniated disc occurs when the soft inner material of the disc pushes through a crack in the tougher outer layer. This can irritate nearby nerves and cause pain, numbness, or weakness in the arms or legs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Bulging Disc</h3>
              <p className="text-[#58585A]">
                A bulging disc is when the disc extends outside the space it normally occupies. Unlike a herniated disc, the outer layer remains intact, but the disc protrudes outward and can put pressure on surrounding structures.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Degenerative Disc Disease</h3>
              <p className="text-[#58585A]">
                This condition occurs when the discs in your spine gradually break down due to age-related wear and tear. As the discs lose their cushioning ability, you may experience pain, stiffness, and reduced mobility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Slipped Disc</h3>
              <p className="text-[#58585A]">
                While often used interchangeably with herniated disc, a slipped disc refers to when a disc moves out of its normal position. This can cause pain and pressure on the spinal cord or surrounding nerves.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Symptoms of Disc Injuries
          </h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Back or neck pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain that radiates to the arms or legs
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Numbness or tingling
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscle weakness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Limited range of motion
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain that worsens with certain movements
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Disc Injuries
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care offers a non-surgical, drug-free approach to treating disc injuries. Our team uses gentle spinal adjustments to help realign the spine and reduce pressure on the affected discs. This can help relieve pain and promote natural healing.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We may also use spinal decompression therapy, which gently stretches the spine to create negative pressure within the disc. This can help retract herniated or bulging disc material and promote the flow of nutrients to the disc for healing.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            In addition to adjustments, we may recommend exercises, stretches, and lifestyle modifications to support your recovery and prevent future disc problems.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Disc Injury Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re suffering from a disc injury, our chiropractic team in Minot can help. We&apos;ll work with you to develop a personalized treatment plan to relieve your pain and restore your mobility.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Book your appointment today to get started on your path to recovery!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Disc Injury Treatment in Minot
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
