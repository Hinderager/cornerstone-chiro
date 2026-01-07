import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Neck Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Are you dealing with chronic neck pain? We specialize in finding the root cause of your neck pain and building a custom treatment plan to eliminate the problem.",
};

export default function NeckPainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Neck Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Neck Pain Treatment in Minot
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
            Chiropractic Care for Neck Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you dealing with chronic neck pain? You&apos;re not alone. According to the Mayo Clinic, neck pain is one of the most common health problems, affecting as many as three-quarters of all people at some point in their lives.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            The good news is that chiropractic care can help. We specialize in finding the root cause of your neck pain and building a custom treatment plan to eliminate the problem and get you feeling great again.
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
                Get to the bottom of what&apos;s causing your neck pain so we can build a plan to get you feeling great again.
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
            Chiropractic Care for Neck Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Neck pain is a major problem for a lot of people and can really prohibit movement and comfort. Chiropractic care can help pinpoint the issue and make corrections to resolve the neck pain completely.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Neck Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their neck pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to neck pain for good.
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
            Get Neck Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Seeing a chiropractor can help you relieve chronic neck pain. Chiropractors focus on making sure your spine is aligned correctly and that the many nerves in your neck are working as they should.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            A misalignment (or subluxation) is when one or more of the bones in your neck become displaced, which can put pressure on the brachial plexus and cause pain. To get relief from this neck pain, it&apos;s important to work with a Chiropractor to get the misalignment corrected, relieving the tension, and letting your neck heal properly.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            What Causes Neck Pain?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Neck pain can come from several different sources. In many cases, it&apos;s the result of a problem with your spine that may have been there for some time without you realizing it. Neck pain can be caused by:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Arthritis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Bulging or pinched disks
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Injury involving the neck
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The longer neck pain goes untreated, the more likely it becomes that you&apos;ll begin to experience a combination of muscle spasms and stiffness. Neck pain can also lead to headaches and difficulty sleeping at night. If this sounds like something you suffer from regularly, chiropractic treatment could help speed up your recovery so you can feel better in no time.
          </p>

          <p className="text-[#58585A] leading-relaxed mb-4">
            Symptoms of a misaligned or subluxated vertebra may include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neck pain that gets worse when you turn your head or look up or down
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Stiffness in your neck
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tingling, numbness, burning, or weakness in one arm
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Headaches
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Stretches to Help with Chronic Neck Pain
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            At home, you can try to alleviate some neck pain issues by doing stretches regularly. Here are some good stretches for your neck that can help with discomfort:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neck Flexion Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neck Extension Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Chin Tuck Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Scalene Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Upper Trap Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Sternocleidomastoid stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pectoralis Minor stretch
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Doing your stretches does not necessarily fix the underlying problem. It&apos;s still recommended to see our Chiropractic team in Minot to take care of the underlying cause of your neck pain, make sure your spine is aligned properly, and promote proper healing of your neck.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Treatment for Neck Pain in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re experiencing neck pain, you need to see our chiropractors for an exam. We&apos;ll work with you on developing a treatment plan that includes stretching, strengthening exercises, and specific chiropractic adjustments to fix the problem. This will restore your spine to its proper alignment so you can feel better now and in the future.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Chiropractic care is different than other types of medical treatments because it focuses on restoring normal function to your body through your spine instead of masking or suppressing symptoms with medication. Our chiropractor will make sure nothing is causing the misalignment (such as arthritis), prescribe stretches and exercises like those above, and help get things back in working order.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Don&apos;t Wait Another Day
          </h2>
          <p className="text-white text-lg mb-8">
            If you&apos;re experiencing chronic neck pain, schedule an appointment with our Chiropractic team today.
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
