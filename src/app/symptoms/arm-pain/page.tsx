import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arm Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Are you suffering from lingering pain in your arms? Our team in Minot specializes in finding the underlying cause of your arm pain and building a treatment plan.",
};

export default function ArmPainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Arm Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Arm Pain in Minot
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
            Arm Pain Chiropractic Care
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you suffering from lingering pain in your arms? Regardless if it&apos;s your shoulder area, upper arm, elbow, forearm, or wrist, this can be debilitating. Your arms have a major function for your body, and it&apos;s important to keep them working properly. Luckily, chiropractic care can help.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our team in Minot specializes in finding the underlying cause of your arm pain, and building a treatment plan to get you feeling great again. You don&apos;t have to live with pain in your arms. Chiropractic care is the solution!
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
                Get to the bottom of what&apos;s causing your arm and leg pain so we can build a plan to get you feeling great again.
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
            Chiropractic Care for Arm Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Did you know that it is possible to relieve arm pain without taking medications? Don&apos;t let those pesky aches and pains keep you down. Book your appointment and we&apos;ll help get rid of those arm problems!
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Arm Pain Treatment in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their arm pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to arm pain for good.
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
            Chiropractic Care for Arm Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Arm and shoulder pain is a common issue that people deal with throughout their life. Most feel taking medications or even surgery is their only option to help it heal. However, Chiropractic care is an amazing avenue to naturally heal the underlying cause of your arm pain. Arm pain, specifically, can arise for several reasons. No matter what the root cause is, chiropractic care can help alleviate the pain and restore your quality of life.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            One of the benefits of chiropractic care is that it is a non-invasive treatment option. This means that it doesn&apos;t involve surgery or medication which can often have unwanted side effects. Our chiropractic team will work to correct any misalignments in your spine and musculoskeletal system that may be causing your arm pain. By doing a full evaluation and finding the root cause for your arm pain, our Chiropractic team in Minot can help solve the underlying issue and get you back to optimal health.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Arm Pain Issues
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There are a lot of reasons you could be experiencing pain in your arms. It could be from lifting something heavy, falling, bumping into something, twisting it funny, or a whole lot of other reasons. Common causes of persistent arm pain include:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Arthritis</h3>
              <p className="text-[#58585A]">
                This is a condition that involves inflammation of the joints. It is often very painful and can make it difficult to move your arms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Carpal Tunnel Syndrome</h3>
              <p className="text-[#58585A]">
                This is a condition that affects the wrists and is caused by pressure on the median nerve. This can cause pain, numbness, and tingling in your arm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Bursitis</h3>
              <p className="text-[#58585A]">
                This is a condition that causes inflammation of the bursa, which is a fluid-filled sac that helps reduce friction between tissues. This can cause pain and swelling in your arm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Tendonitis</h3>
              <p className="text-[#58585A]">
                This is an inflammation of the tendon, which connects muscle to bone. It can cause pain, stiffness, and swelling in your arm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Golfer&apos;s Elbow / Tennis Elbow</h3>
              <p className="text-[#58585A]">
                Golfer&apos;s elbow and Tennis elbow is an inflammation of the tendon that connects the muscle to the bone in the elbow area. It is often caused by repetitive motions with your arm and can be very painful.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Rotator Cuff</h3>
              <p className="text-[#58585A]">
                A rotator cuff is a group of muscles and tendons that helps lift your arm. When these muscles and tendons become injured, it can be very painful and difficult to move your arm.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Frozen Shoulder</h3>
              <p className="text-[#58585A]">
                A frozen shoulder is a condition that causes stiffness and pain in your shoulder. It is often caused by overuse or injury and can make it difficult to move your arm.
              </p>
            </div>
          </div>

          <p className="text-[#58585A] leading-relaxed mb-8">
            Regardless of the reason that you&apos;re experiencing arm pain, chiropractic care can help. Chiropractors will work to correct any misalignments in your spine and musculoskeletal system that may be causing your arm pain. By doing a full evaluation and finding the root cause for your arm pain, Chiropractors can help solve the underlying issue and get you back to optimal health.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Arm & Shoulder Pain
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team in Minot specializes in spinal and musculoskeletal health. We work to keep your vertebrae and joints aligned properly. Your vertebrae protect your nervous system. Even small misalignments can cause major pressure on your nerves and cause lots of health issues throughout your body. Your arm is also very mobile and can easily experience pain and discomfort from everyday use.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care helps keep your spine and extremities strong and healthy so you can continue to live pain-free. Chiropractors will often use a combination of therapies to help treat arm and shoulder pain, including:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Adjustment:</strong> An adjustment is the most common chiropractic treatment. It is when we adjust your spine back into alignment. This helps relieve pressure on your nerves and allows your body to heal properly.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Manual Therapy:</strong> This is when we use our hands to manipulate your joints and muscles to help them move better. This can help increase blood flow and reduce inflammation.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Exercise:</strong> Exercising regularly is important for keeping your body healthy. When you&apos;re experiencing arm pain, it&apos;s even more important to make sure you&apos;re doing exercises that will help reduce the pain and discomfort.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Arm Pain Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We don&apos;t want you to live in pain. If you&apos;re suffering from arm pain, don&apos;t hesitate to give chiropractic care a try. It may be just what you need to start feeling better. It&apos;s a non-invasive, natural way to heal the aches and pains in your arms and more.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Contact our chiropractic team here in Minot to book your appointment and get started with your care today!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Arm Pain Treatment in Minot
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
