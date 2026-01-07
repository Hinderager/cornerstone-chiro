import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Auto Injury Chiropractic Care in Minot | CornerStone Chiropractic",
  description: "Have you been in a car accident? Our chiropractic team is here to evaluate you after your accident and make sure we stay on top of any developing issues.",
};

export default function AutoAccidentCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Auto Injury Chiropractic Care in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care After a Car Accident in Minot
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
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Have you been in a car accident? Auto collisions happen every day. Not only are they scary, but they can cause severe injuries. If you&apos;re in a car accident, it&apos;s important to seek medical attention as soon as possible. Even if you don&apos;t think you&apos;re injured, it&apos;s best to get checked out right away.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Not all injuries result in pain right away. Sometimes it&apos;s obvious that you are hurt, while other times, pain can manifest over time and come out several weeks later. Our chiropractic team is here to evaluate you after your accident and make sure we stay on top of any developing issues. It&apos;s important to get ahead of your injuries whether you realize they are there, or not. Waiting can cause long-term issues for your body.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Injury Treatment</h3>
              <p className="text-[#58585A]">
                If you&apos;re feeling the impacts of a car accident, you&apos;ll want to seek professional attention soon to get to the root cause of the problem.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Whiplash</h3>
              <p className="text-[#58585A]">
                Whiplash is the primary injury people deal with from accidents. Chiropractic care can help you heal faster and feel great again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Long Term Prevention</h3>
              <p className="text-[#58585A]">
                Even without obvious pain or discomfort, chiropractic care will ensure no problems arise later down the road from your accident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            During a crash, the car doesn&apos;t absorb the full shock of the crash, the occupants do. When your body is jerked around in response, it&apos;s very likely to experience trauma and injury internally.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Care After an Auto Accident
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            The funny thing about pain is the way it can show up when you least expect it. Even if you feel fine immediately after a car accident, it&apos;s always a good idea to get checked out by a medical practitioner. If you&apos;ve been in an accident, it&apos;s recommended to see a Chiropractor to evaluate any potential underlying injuries.
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
            Top Chiropractic Care for Auto Injuries in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you do have injuries, chiropractic care can help. Chiropractors are experts in treating auto accident injuries. They can help you regain your mobility and get back to your everyday life. In many cases, chiropractic care can even help reduce the amount of time you need to recover.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Car crashes rattle your body, and your spine, which can cause immediate pain or discomfort that arises weeks later. It&apos;s important to not go unchecked. The longer you let your injuries go, the more problematic it will become later. It&apos;s recommended to see a Chiropractor as soon as possible after a car accident.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Injuries from a Car Accident
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Auto accidents are extremely dangerous and even fatal. But even small fender benders can have a significant impact on your body without you knowing. Here are common injuries that result from car crashes:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Whiplash</h4>
              <p className="text-[#58585A]">
                This is the most common injury from car accidents. Whiplash is caused when your head snaps forward and then back again, oftentimes faster than your neck can move. This can cause damage to the tendons, muscles, and ligaments in your neck. Symptoms of whiplash include pain in the neck, headaches, dizziness, and blurred vision.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Back Injuries</h4>
              <p className="text-[#58585A]">
                Car accidents can cause back injuries such as a herniated disk or spinal cord compression. These injuries can be extremely painful and may require surgery.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Brain Injuries</h4>
              <p className="text-[#58585A]">
                Brain injuries are another serious injury that can occur from a car accident. They can range from minor concussions to more serious Traumatic Brain Injuries (TBI). Symptoms of a brain injury include confusion, headaches, blurred vision, and dizziness.
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Fractures & Broken Bones</h4>
              <p className="text-[#58585A]">
                Broken bones are another common injury from car accidents. A broken bone can take a long time to heal, and in some cases, may never fully heal.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How Do Chiropractors Treat Auto Injuries?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team in Minot evaluates you for possible injuries that you may not even feel yet. We&apos;ll do a full review of your spinal column, vertebrae, neck, and extremities to ensure that nothing is misaligned. It&apos;s very common to find misalignments after auto accidents.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Based on your exam, we&apos;ll perform adjustments to get you back into alignment so your body can heal properly. We also may provide you with some at-home exercises or stretches to help improve mobility and reduce pain.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            In many cases, chiropractic care can help reduce the amount of time you need to recover from your car accident. It&apos;s important to get ahead of your injuries, rather than waiting until they become a problem.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Car Accident Injury Treatment in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            Our chiropractic team is here to provide the care you need after a car accident. We specialize in treating auto accident injuries and can help get you back to your everyday life as quickly as possible.
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
