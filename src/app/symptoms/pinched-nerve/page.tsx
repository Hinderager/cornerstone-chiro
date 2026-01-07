import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pinched Nerve Treatment in Minot | CornerStone Chiropractic",
  description: "Suffering from a pinched nerve? Our chiropractic team in Minot specializes in relieving pinched nerve pain through gentle, effective adjustments.",
};

export default function PinchedNervePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Pinched Nerve Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Pinched Nerves
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
            Chiropractic Treatment for Pinched Nerves
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            A pinched nerve can cause intense pain, numbness, and tingling that affects your daily life. This condition occurs when too much pressure is applied to a nerve by surrounding tissues, such as bones, cartilage, muscles, or tendons. The result can be sharp, burning pain that radiates along the nerve pathway.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our chiropractic team in Minot specializes in treating pinched nerves through gentle adjustments that relieve pressure on the affected nerve. We can help you find relief without medications or surgery.
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
                Get to the bottom of what&apos;s causing your pinched nerve so we can build a plan to get you feeling great again.
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
            Pinched Nerve Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience significant pain relief from their pinched nerve with chiropractic care. Using our gentle adjusting techniques, we can help relieve the pressure on your nerve and get you back to feeling great again. Book an appointment now to schedule a time with our team.
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
            What is a Pinched Nerve?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            A pinched nerve occurs when there is compression or pressure on a nerve. This can happen when the nerve is pressed between tissues such as ligaments, tendons, bones, or cartilage. The compression disrupts the nerve&apos;s function, causing pain, numbness, tingling, or weakness.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Pinched nerves can occur anywhere in the body but are most common in the neck, upper back, and lower back. When a nerve is pinched in the spine, it can cause radiating pain that travels to other parts of the body.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Pinched Nerves
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Spinal Misalignment</h3>
              <p className="text-[#58585A]">
                When the vertebrae in your spine are misaligned, they can put pressure on nearby nerves. This is one of the most common causes of pinched nerves and is something chiropractors specialize in correcting.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Herniated Disc</h3>
              <p className="text-[#58585A]">
                A herniated or bulging disc can press on nerves in the spine, causing pain that radiates to the arms or legs depending on the location of the affected disc.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Repetitive Motions</h3>
              <p className="text-[#58585A]">
                Repetitive movements, especially in jobs or activities that require the same motion over and over, can cause inflammation and swelling that puts pressure on nerves.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Injury or Trauma</h3>
              <p className="text-[#58585A]">
                Injuries from accidents, falls, or sports can cause inflammation or structural changes that compress nerves.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Poor Posture</h3>
              <p className="text-[#58585A]">
                Slouching or maintaining poor posture for extended periods can put undue stress on the spine and lead to nerve compression.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Symptoms of a Pinched Nerve
          </h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Sharp, burning, or aching pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Numbness or decreased sensation
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tingling or &quot;pins and needles&quot; sensation
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscle weakness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain that radiates to arms or legs
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Symptoms that worsen with certain positions
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Pinched Nerves
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care is an excellent treatment option for pinched nerves. Our team uses gentle spinal adjustments to correct misalignments and relieve pressure on the affected nerve. By restoring proper alignment, we help your body heal naturally.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We may also recommend other therapies such as massage, stretching exercises, and postural corrections to support your recovery and prevent future nerve compression.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The best part is that chiropractic care is a non-invasive, drug-free approach that addresses the underlying cause of your pinched nerve rather than just masking the symptoms.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Pinched Nerve Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re dealing with a pinched nerve, don&apos;t suffer in silence. Our chiropractic team in Minot can help relieve your pain and restore your quality of life.
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
            Pinched Nerve Treatment in Minot
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
