import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vertigo Treatment in Minot | CornerStone Chiropractic",
  description: "Are you dealing with vertigo? Our Chiropractic team in Minot specializes in identifying the root cause of your vertigo and building a custom care plan.",
};

export default function VertigoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Vertigo Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Vertigo Treatment & Relief in Minot
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
            Chiropractic Care for Vertigo
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you dealing with vertigo? If so, you&apos;re not alone.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Vertigo is a condition that causes you to feel off-balance and dizzy. It can be caused by several things, such as infection, head injury, or inner ear problems. If you&apos;re experiencing vertigo, it&apos;s important to seek help from a healthcare professional.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Chiropractic care is an excellent option to get relief from vertigo. Our Chiropractic team in Minot specializes in identifying the root cause of your vertigo and building a custom care plan to solve the underlying problem and help alleviate your symptoms.
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
                Get to the bottom of what&apos;s causing your vertigo so we can build a plan to get you feeling great again.
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
            Chiropractic Care for Vertigo
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Vertigo can be detrimental to everyday life. It&apos;s hard to operate when experiencing this regularly. Chiropractic care is an all-natural treatment option that can completely eliminate your vertigo without the use of medications. Get your life back.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Vertigo Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major relief from their vertigo with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to vertigo for good.
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
            Top Chiropractic Care for Vertigo in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team in Minot are experts in dealing with Vertigo. It&apos;s a very common issue that people experience daily. It can be debilitating. If you&apos;re experiencing Vertigo it&apos;s important to see a health professional and our Chiropractic team can help.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            There are many different treatments for vertigo but chiropractic care is one of the best. Our team specializes in finding the root cause of vertigo and fixing it. This can include adjustments, exercises, and lifestyle changes. We have helped many people get relief from their vertigo symptoms and we can do the same for you.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            What Causes Vertigo?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Several things can cause vertigo, including:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Infection</h3>
              <p className="text-[#58585A]">
                Infection can cause vertigo by affecting the inner ear. The infection can cause inflammation and fluid accumulation in the inner ear, which can lead to vertigo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Head Injury</h3>
              <p className="text-[#58585A]">
                One of the most common ways that vertigo is caused is by a head injury. When you suffer a head injury, it can cause damage to the inner ear which can lead to vertigo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Labyrinthitis</h3>
              <p className="text-[#58585A]">
                Labyrinthitis is an infection or inflammation of the inner ear. It can cause vertigo, ringing in the ears (tinnitus), and hearing loss.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Ménière&apos;s Disease</h3>
              <p className="text-[#58585A]">
                Ménière&apos;s Disease is a disorder of the inner ear that causes vertigo, tinnitus, and hearing loss.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Severe Migraines</h3>
              <p className="text-[#58585A]">
                Migraines can trigger changes in the blood flow to the brain, which can result in you experiencing vertigo.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Benign Paroxysmal Positional Vertigo (BPPV)</h3>
              <p className="text-[#58585A]">
                BPPV is a type of vertigo that is caused by problems with the inner ear. It can be caused by a head injury, aging, or certain medical conditions.
              </p>
            </div>
          </div>

          <p className="text-[#58585A] leading-relaxed mb-8">
            Regardless of the cause of vertigo, it&apos;s important to get help, and our Chiropractic team in Minot specializes in finding the root cause and getting you on the path to optimal health.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How do Chiropractors Treat Vertigo?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractors treat vertigo by identifying the root cause of the problem and addressing it. This can include adjustments, exercises, and lifestyle changes.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic adjustments are one of the most common treatments for vertigo. They help to restore proper alignment and function to the spine and can help to relieve symptoms of vertigo.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Misalignments in the spine can cause extra pressure on your nerves, including swelling that impacts your inner ear. By getting adjusted and working with a Chiropractor, you&apos;ll be able to keep relieving pressure, reduce swelling, and promote natural healing for your vertigo symptoms.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The best part is that Chiropractic care is all-natural. That means you can avoid medications and unnecessary surgeries.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Chiropractic Treatment for Vertigo in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re dealing with vertigo and need help, we&apos;re here for you. Our Chiropractic team in Minot can help identify the root cause of your vertigo and get you on the path to better health. We specialize in treating vertigo and have helped many people get relief from their symptoms.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Call us today or book an appointment online to get started!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Vertigo Treatment in Minot
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
