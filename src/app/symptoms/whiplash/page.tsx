import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Whiplash Treatment in Minot | CornerStone Chiropractic",
  description: "Suffering from a whiplash injury? Our chiropractic team in Minot specializes in treating whiplash and making corrective adjustments to get your neck feeling great again.",
};

export default function WhiplashPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Whiplash Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Whiplash Treatment & Relief in Minot
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
            Chiropractic Care for Whiplash Injury
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you suffering from a Whiplash injury? Whiplash is a type of injury that is often sustained during a car accident or a sudden movement of the head whipping back and forth. This trauma can cause damage to the muscles, tendons, and ligaments in the neck. Whiplash can also lead to problems with the discs between the vertebrae, as well as a concussion or other brain injury.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Chiropractic care can be an effective treatment for whiplash injuries and can help you return to your normal activities as soon as possible. We specialize in dealing with whiplash and making corrective adjustments to get your neck feeling great again.
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
                Get to the bottom of what&apos;s causing your whiplash pain so we can build a plan to get you feeling great again.
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
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Traumatic events where the neck is whipped from back to front, like in an auto accident or playing physical sports, can cause a lot of pain in the neck. These events rattle the spine and can throw vertebrae out of alignment as well as damage surrounding muscles and tissue.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Whiplash Injury Treatment in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their whiplash with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to your neck pain for good.
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
            Chiropractic Care for Whiplash in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractors are experts in treating whiplash injuries and can help relieve pain and restore mobility to the neck. Chiropractic care typically involves spinal manipulation and other manual therapies to help relieve pain and tension in the neck.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Massage therapy, ice/heat therapy, and acupuncture may also be used to help reduce inflammation and promote healing. In some cases, chiropractors may also recommend exercises or stretches to help improve range of motion and strength.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Our chiropractic team in Minot is very experienced in helping patients deal with Whiplash injuries and getting on the path to recovery.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            What is Whiplash?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Whiplash is a common injury that can occur from a car accident, sports injury, or other sudden movements. This happens when the head is quickly twisted or bent backward and creates a strain on the neck. When this happens, your spine can be stretched or compressed which can result in damage to your ligaments, tendons, and muscles.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            These events can also cause small (or large) misalignments in your spine, which is referred to as a subluxation. Subluxations can put pressure on your nerves and cause pain, numbness, tingling, weakness, and muscle spasms.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            At our family chiropractic office in Minot, we offer comprehensive care following car accidents or other traumas to relieve symptoms from Whiplash injuries.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Whiplash Injuries
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Whiplash can be caused by any event that puts an unordinary strain on the neck.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The risk of whiplash increases with age. People who do physically demanding work such as athletes, construction workers, mechanics, military personnel, etc., are all at a greater risk of getting this type of injury. Being involved in an accident that involves car crashes or other high-speed collisions is also a major risk factor.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            It is estimated that 1/3 of all car accidents involve whiplash injuries. According to some studies, as many as 90% of all individuals involved in car accidents have some type of neck pain after an accident. Certain factors can increase the risk of whiplash.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Symptoms of Whiplash Injuries
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            As a result of whiplash, many people experience headaches and migraines that can be difficult to treat. Whiplash also causes problems with your range of motion in the neck and shoulder area causing stiffness and discomfort.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Other whiplash symptoms include:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neck pain and stiffness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Headaches and migraines
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Dizziness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Fatigue
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Shoulder or back pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Numbness or tingling in arms
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Whiplash Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re experiencing neck pain or stiffness, it&apos;s probably time to see a Chiropractor. Our team in Minot is here to help you recover from your Whiplash injury and get your spine and neck feeling great again. You don&apos;t have to live in pain!
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Book an appointment to get started on your path to recovery.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Whiplash Treatment in Minot
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
