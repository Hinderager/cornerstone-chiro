import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rotator Cuff Treatment in Minot | CornerStone Chiropractic",
  description: "Suffering from rotator cuff pain? Our chiropractic team in Minot can help relieve your shoulder pain and restore mobility without surgery.",
};

export default function RotatorCuffPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Rotator Cuff Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Rotator Cuff Injuries
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
            Chiropractic Treatment for Rotator Cuff
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            The rotator cuff is a group of muscles and tendons that surround the shoulder joint, keeping the head of your upper arm bone firmly within the shallow socket of the shoulder. Injuries to the rotator cuff can cause significant pain and limit your ability to use your arm.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our chiropractic team in Minot specializes in treating rotator cuff injuries through gentle adjustments, therapeutic exercises, and rehabilitation techniques. We can help you find relief and restore your shoulder function without surgery.
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
                Get to the bottom of what&apos;s causing your rotator cuff pain so we can build a plan to get you feeling great again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Care Plan</h3>
              <p className="text-[#58585A]">
                We&apos;ll help build you a plan of action to get your pain under control and restore your shoulder function.
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
            Rotator Cuff Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience significant pain relief from their rotator cuff injuries with chiropractic care. Using our gentle techniques, we can help reduce inflammation, improve mobility, and get you back to your normal activities. Book an appointment now to schedule a time with our team.
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
            What is the Rotator Cuff?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The rotator cuff is made up of four muscles and their tendons that form a covering around the head of the humerus (upper arm bone). These muscles work together to stabilize the shoulder joint and allow for a wide range of arm movements.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            When one or more of these muscles or tendons becomes damaged, it can cause pain, weakness, and limited mobility in the shoulder. Rotator cuff injuries are common and can range from mild inflammation to complete tears.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Types of Rotator Cuff Injuries
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Rotator Cuff Tendinitis</h3>
              <p className="text-[#58585A]">
                Inflammation of the tendons in the rotator cuff, often caused by repetitive overhead movements or keeping the arm in the same position for extended periods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Rotator Cuff Tear</h3>
              <p className="text-[#58585A]">
                A partial or complete tear in one of the rotator cuff tendons. This can occur suddenly from an injury or develop gradually over time from repetitive stress.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Shoulder Impingement</h3>
              <p className="text-[#58585A]">
                Occurs when the rotator cuff tendons are compressed during shoulder movements, causing pain and inflammation. This often happens when lifting the arm overhead.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Bursitis</h3>
              <p className="text-[#58585A]">
                Inflammation of the bursa, a small fluid-filled sac that cushions the rotator cuff tendons. This often occurs alongside tendinitis or impingement.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Rotator Cuff Injuries
          </h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Repetitive Movements:</strong> Activities that require repetitive overhead arm motions, such as painting, swimming, or throwing.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Trauma:</strong> Falls, car accidents, or direct blows to the shoulder can cause sudden tears or injuries.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Age:</strong> As we get older, the tendons naturally weaken and become more susceptible to injury.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Poor Posture:</strong> Slouching or poor shoulder positioning can contribute to impingement and tendon problems.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Symptoms of Rotator Cuff Injuries
          </h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Dull ache deep in the shoulder
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain when lifting or lowering the arm
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Weakness in the arm
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Difficulty sleeping on the affected side
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Crackling or popping sensation when moving the shoulder
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Limited range of motion
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Rotator Cuff Injuries
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care offers an effective, non-surgical approach to treating rotator cuff injuries. Our team uses a combination of techniques to reduce pain, decrease inflammation, and restore proper function to the shoulder.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We use gentle adjustments to the shoulder, spine, and surrounding areas to improve alignment and reduce stress on the rotator cuff. We also incorporate soft tissue therapies to reduce muscle tension and promote healing.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Rehabilitation exercises are an important part of recovery. We&apos;ll provide you with specific exercises to strengthen the rotator cuff muscles, improve flexibility, and prevent future injuries.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Rotator Cuff Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re dealing with rotator cuff pain, don&apos;t wait to get treatment. Our chiropractic team in Minot can help you find relief and restore your shoulder function.
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
            Rotator Cuff Treatment in Minot
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
