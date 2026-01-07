import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sciatica Treatment in Minot | CornerStone Chiropractic",
  description: "Are you dealing with radiating pain in your lower back or legs? Our Chiropractic team in Minot specializes in dealing with Sciatica and nerve pain.",
};

export default function SciaticaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Sciatica Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Sciatica Pain Relief in Minot
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
            Chiropractic Care for Sciatica
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you dealing with radiating pain in your lower back or legs? This could be Sciatica. This is a common problem we see and it can be very painful and debilitating. The Sciatic nerve plays a major role in the lower half of the body and is a common nerve to be pinched through misalignments.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our Chiropractic team in Minot specializes in dealing with Sciatica. We can help you get to the root cause of your Sciatica pain and provide treatment options to eliminate the problem. Alleviate your pain today and call our office to schedule an appointment.
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
                Get to the bottom of what&apos;s causing your Sciatica pain so we can build a plan to get you feeling great again.
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
            Chiropractic Care for Sciatica
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Don&apos;t suffer from sciatica any longer. Our Chiropractic team is here to get to the underlying cause of your sciatica and help you get back to feeling great again. Book your appointment today to get started with care.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Sciatica Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their sciatica pain with chiropractic care. Using our gentle adjusting techniques and advanced therapies, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and start the process of getting your life back.
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
            Sciatica Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team here in Minot specializes in treating Sciatica and nerve pain.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Sciatica is a painful condition that causes symptoms in the legs, but can also spread to the arms and other parts of the body. It can be caused by a herniated disc or spinal stenosis. The pain often starts in the back and travels down one side of your leg. It can feel like numbness, tingling, or burning as well as pain.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How Do You Get Sciatica Pain?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Sciatica is a condition that can be caused by several things, including a herniated disc, spinal stenosis, or even pregnancy. In most cases, the pain starts in the lower back and travels down one side of the leg. The pain can vary significantly from person to person, but typically it feels like numbness, tingling, burning, or just plain pain.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            What is the Sciatic Nerve?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The sciatic nerve is the longest nerve in the body. It runs from the base of the spine down the back of each leg. The sciatic nerve controls many functions in the legs, including movement and feeling. It also helps regulate blood pressure in the feet. Damage to the sciatic nerve can cause a wide range of symptoms, including pain, numbness, tingling, and weakness.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Sciatica Pain Symptoms
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Pain from Sciatica commonly occurs in the lower back and legs. Those suffering from Sciatica usually feel pain, numbness, tingling, weakness, or a combination of them all. Symptoms can be short-term or last for longer periods.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Sciatica pain symptoms will continue to come back until the underlying cause is treated.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Stretches to Help with Sciatica Nerve Pain
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            There are a few exercises and stretches that can help with sciatica nerve pain. The following exercises will help stretch out both your back and leg muscles, which in turn can help relieve sciatica nerve pain. These stretches should be done gently to not irritate the affected area more than it already is.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Straight Leg Raise
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Alternate Knee Hug Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Alternate Arm Across Knee
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Groin Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Hamstring Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Low Back Stretch
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Side Stretch
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed">
            The goal of the stretches is to relieve pressure off the Sciatic nerve to stimulate proper healing which will relieve the pain and other symptoms.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Sciatic Nerve Pain Relief in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            Pain from Sciatica can be debilitating. Book your appointment today to see our Chiropractic team in Minot to start your path to recovery.
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
