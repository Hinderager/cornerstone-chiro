import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Back Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Are you struggling with back pain? Chiropractic care is a great option for those looking for relief. We are experts in spinal health and can help you find relief.",
};

export default function BackPainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Back Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Back Pain Treatment & Relief in Minot
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

      {/* Chiropractic Care for Back Pain */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Chiropractic Care for Back Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you struggling with back pain? Back pain is one of the most common issues people struggle with. In fact, it affects 80% of people at some point in their life. Chiropractic care is a great option for those looking for relief from their back pain.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            We are experts in spinal health and can help you find relief from your back pain. Chiropractic care is a natural way to treat back pain. It involves spinal manipulation or adjustment to realign the vertebrae in your spine, which helps to improve joint motion and relieve pain.
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
                Get to the bottom of what&apos;s causing your back pain so we can build a plan to get you feeling great again.
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
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-6 font-montserrat">
            Chiropractic Treatment for Back Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8 text-center">
            Back pain is a major problem for a lot of people and can really prohibit movement and comfort. Chiropractic care can help pinpoint the issue and make corrections to resolve the back pain completely.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] text-center mb-6 font-montserrat">
            Back Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8 text-center">
            Many people experience major pain relief from their back pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to back pain for good.
          </p>
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
            Get Back Pain Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Back pain can be debilitating, and it&apos;s important to seek treatment as soon as possible. Chiropractors are experts in diagnosing and treating back pain, and they can help you get back to your life quickly and comfortably.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Back pain is a sharp, localized pain in the spine that occurs when nerve cells in the spine send abnormal signals to other parts of the body. The source of back pain can be from a wide variety of structures, including muscles and ligaments, intervertebral discs, joints, or nerves. In addition to being extremely painful, back injuries can lead to long-term problems if not treated correctly.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Chiropractors specialize in identifying the source of a patient&apos;s back pain and treating it accordingly. This may include manipulation, mobilization, or other manual therapies to relieve strain on spinal joints and musculature. Chiropractic care is effective in reducing both acute and chronic low back pain symptoms.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Back Pain
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            There are many reasons you might experience back pain. Some of the most common causes include:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="text-[#58585A]">
              <span className="font-semibold">Overexertion</span> – Whether you&apos;re moving furniture or playing sports, anything that causes strain on the muscles and ligaments of your lower back can lead to pain.
            </li>
            <li className="text-[#58585A]">
              <span className="font-semibold">Improper lifting</span> – When you bend at an awkward angle or carry too much weight for your frame, there&apos;s a substantial risk of injury to the discs and nerves in your lower spine.
            </li>
            <li className="text-[#58585A]">
              <span className="font-semibold">Muscle strain</span> – Strained muscles can cause inflammation and pressure on nearby tissues, which leads to pain and discomfort. This is particularly common with athletes or anyone who frequently works out.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            The Causes of Chronic Back Pain
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Chronic back pain may have a different set of causes from acute back pain. In some cases, the initial cause of the pain was never correctly identified and treated. Some common causes of chronic back pain include:
          </p>
          <ul className="space-y-4 mb-8">
            <li className="text-[#58585A]">
              <span className="font-semibold">Arthritis</span> – Arthritis may be the source of the pain or it might develop over time due to joint damage from not treating the original issue. In either case, having your joints out of alignment can have a debilitating effect on your quality of life.
            </li>
            <li className="text-[#58585A]">
              <span className="font-semibold">Nerve conditions</span> – Damage from poor posture or injury can impact nerves in your lower spine and cause them to send abnormal signals to other parts of your body. This is especially true if you suffer from herniated discs or pinched nerves.
            </li>
            <li className="text-[#58585A]">
              <span className="font-semibold">Structural problems</span> – Spinal fractures, herniated discs, and other spine-related issues may require treatment over time to keep the pain under control.
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Disc Bulge & Herniation Treatment
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            A disc bulge is a common cause of low back pain, and it occurs when the soft inner substance of an intervertebral disc pushes against a thin outer wall. This causes lower back pain due to compression on nearby nerves and tissues. A herniated disc is a more serious condition that happens when the thin outer walls are compromised, resulting in a portion of the disc&apos;s contents pushing outside the affected area.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            In both cases, chiropractic treatment can have a profound effect on your symptoms. The first step involves identifying which region is causing your back pain so that your doctor can administer an effective treatment plan for you.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Subluxation Treatment in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            When your spine is out of alignment, it can lead to muscle strain or pressure on your joints and nervous system. This affects the way your brain interacts with certain regions and can cause pain and discomfort in your back and other parts of your body.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Subluxations occur when a joint has lost its normal range of motion due to injury or some other factor that impairs proper spinal function. Over time, this abnormal movement causes wear and tear that eventually leads to arthritis and chronic lower back pain.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Relief From Back Pain?
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
