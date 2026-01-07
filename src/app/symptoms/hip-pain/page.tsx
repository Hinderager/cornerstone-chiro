import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hip Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Are you dealing with chronic hip pain? Our chiropractic team in Minot specializes in treating hip pain problems. We'll help you identify the underlying cause.",
};

export default function HipPainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Hip Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Hip Pain in Minot
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
            Hip Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you dealing with chronic hip pain? You&apos;re not alone. Your hips are a major joint and muscle group that plays a major part in your overall mobility. Even the smallest misalignment or injury can cause severe pain in your hip area.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            The good news is that chiropractic care can help. Our chiropractic team in Minot specializes in treating hip pain problems. We&apos;ll help you identify the underlying cause of your hip pain and build a custom care plan to get you feeling great again.
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
                Get to the bottom of what&apos;s causing your hip pain so we can build a plan to get you feeling great again.
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

      {/* Treatment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Care for Hip Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Hip pain is a major problem for a lot of people and can really prohibit movement and comfort. Chiropractic care can help pinpoint the issue and make corrections to resolve the hip pain completely.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Hip Pain Treatment in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their hip pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to hip pain for good.
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
            Hip Pain Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Hip pain is a common problem. Our chiropractic team is here to help you alleviate hip pain and eliminate it. We work with you to find the root cause of your hip pain and build a customized care plan to get you on the path to optimal health.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Hip pain usually occurs on one side and can be caused by a variety of things. Sometimes, the cause of hip pain is never found and the pain fades after a few days or weeks. A strained muscle, dislocated joint, bone spur, inflammation (e.g., bursitis), nerve irritation (e.g., sciatica), or injury to some other structure in your hip area can cause hip pain.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Hip Pain
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There can be a lot of reasons you&apos;re experiencing pain in your hip. Regardless, it&apos;s best to seek help from our Chiropractic team in Minot to find the cause and treat it before it gets worse.
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Muscle strain</h4>
              <p className="text-[#58585A]">
                Muscle strain is a common cause of hip pain. It can be caused by overuse or repetitive motions, or by a sudden, traumatic event. Muscle strain in the hip can lead to pain, stiffness, and swelling in the area.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Dislocated joint</h4>
              <p className="text-[#58585A]">
                A dislocated joint is when the bones in your hip move out of place. This can cause pain, swelling, and difficulty moving.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Bone spur</h4>
              <p className="text-[#58585A]">
                A bone spur is a piece of bone that sticks out and can cause pain in the hip. It can happen when someone has done too much exercise or if they&apos;ve fallen on their side.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Inflammation (e.g., bursitis)</h4>
              <p className="text-[#58585A]">
                Inflammation is a localized physical response to injury or infection, in which the body&apos;s white blood cells and chemical mediators accumulate in the affected tissues. Inflammation can cause pain and swelling if not treated.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Nerve irritation (e.g., sciatica)</h4>
              <p className="text-[#58585A]">
                Nerve irritation in the hip, also known as sciatica, can cause pain, tingling, and numbness in the hip and down the leg. It is often caused by a herniated disk in the lower back that presses on the sciatic nerve.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Hip Pain
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractors use a variety of techniques to adjust the hips, depending on the cause of the pain. If muscle strain is the cause, they may use massage or other hands-on techniques to help loosen the muscle and relieve the pain. If there is a dislocated joint, they will adjust it back into place. If there is a bone spur, they may use a chiropractic instrument to gently break it up. If there is inflammation, they may use ice or heat therapy, or recommend over-the-counter anti-inflammatory medications. If there is nerve irritation, they may use spinal manipulation or adjustments to relieve the pressure on the nerve.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The goal of a chiropractic adjustment is to realign your hips and spine to spark natural healing and relieve pressure on the nerves. In most cases, this drastically helps relieve the pain in your hips and allows your body to start healing properly.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Care for Hip Pain in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed">
            If you&apos;re experiencing hip pain, our chiropractic team in Minot is here to help. Book your appointment to consult our Chiropractic team about your hip pain and start your path to recovery. You don&apos;t have to live in pain!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Relief From Hip Pain?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us today to schedule your appointment and start feeling better.
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
