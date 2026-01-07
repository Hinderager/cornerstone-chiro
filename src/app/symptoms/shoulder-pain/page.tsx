import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shoulder Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Are you suffering from chronic shoulder pain issues? Our chiropractic team in Minot can evaluate your pain and find the underlying cause of your shoulder issue.",
};

export default function ShoulderPainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Shoulder Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Shoulder Pain Treatment & Relief in Minot
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
            Chiropractic Care for Shoulder Pain
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you suffering from chronic shoulder pain issues? You are not alone. This is one of the most used joints on your body and has a major impact on your overall mobility. You use this joint and muscle group every single day. Dealing with pains and aches is far too common in your shoulder.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Chiropractic care can help! Our chiropractic team in Minot can evaluate your pain and find the underlying cause of your shoulder issue. Then we provide natural treatments and adjustments to help solve those issues to alleviate your pain and promote natural healing. No medications or surgeries are necessary.
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
                Get to the bottom of what&apos;s causing your shoulder pain so we can build a plan to get you feeling great again.
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
            Since the shoulder is a major joint that is used frequently with day-to-day activities, it is very common to experience pain and discomfort. Untreated shoulder pain will get much worse over time if left alone. Don&apos;t suffer any longer. Book your appointment today to get started with care!
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Shoulder Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their shoulder pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to shoulder pain for good.
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
            Chiropractic Care for Shoulder Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Shoulder pain is a very common symptom that patients deal with. This is a major joint and muscle group that gets a lot of use and has a major impact on your mobility, so it&apos;s common to experience pain and discomfort in this area.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Our Chiropractic team in Minot are experts in diagnosing and treating shoulder pain. They will take a complete medical history and perform a physical examination to determine the underlying cause of your pain. In many cases, chiropractic care can provide relief from shoulder pain without the need for medication or surgery.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes for Shoulder Pain
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There are a lot of reasons you might experience shoulder pain. Some of the common reasons we see shoulder pain issues include:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Rotator Cuff Injuries</h3>
              <p className="text-[#58585A]">
                Rotator cuff injuries are a common cause of shoulder pain. A rotator cuff is a group of muscles and tendons that attach your shoulder blade to your upper arm bone. These muscles and tendons help lift your arm. When these muscles and tendons are injured, it can cause pain and difficulty lifting your arm. Chiropractic care can help relieve the pain and inflammation associated with rotator cuff injuries.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Bursitis</h3>
              <p className="text-[#58585A]">
                Bursitis is another common cause of shoulder pain. Bursae are small, fluid-filled sacs that cushion and lubricate your joints. When these sacs become inflamed, it can cause pain and difficulty moving your joint. Chiropractic care can help to reduce inflammation and improve mobility in this area.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Arthritis</h3>
              <p className="text-[#58585A]">
                Arthritis is a condition that makes joints and muscles hurt. Osteoarthritis means that your cartilage isn&apos;t working well anymore. Cartilage is a part of your body that helps move your joints. In osteoarthritis, this cartilage gets worn away over time and can lead to pain, inflammation, and stiffness in the joint. Chiropractic care can help with this type of arthritis by improving blood flow to the area and reducing inflammation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Tendonitis</h3>
              <p className="text-[#58585A]">
                Tendonitis is an inflammation of the tendon. This can cause pain, swelling, and stiffness in the tendon. Tendonitis is often caused by overuse of the tendon or by repetitive motions. Chiropractic care can help to reduce inflammation and improve mobility in the area.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Frozen Shoulder</h3>
              <p className="text-[#58585A]">
                A frozen shoulder is when your joint does not work well. It can be really hard for you to move. Chiropractic care can help with this problem by giving you better blood flow and making it less painful.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Shoulder Pain
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Shoulders are one of the most used joints in your body, and having pain or discomfort there is a common problem.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our Chiropractic team will often use a variety of techniques to help relieve shoulder pain. This may include spinal adjustments, manipulation, massage, and ice/heat therapy. In some cases, they may also recommend exercises or stretches to help you improve your range of motion and reduce your discomfort.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Since the spine protects the nervous system and our overall body alignment, chiropractors often look at the spine first when diagnosing shoulder pain. We will complete a full examination and take a medical history to determine the root cause of your shoulder pain. In many cases, chiropractic care can provide relief from shoulder pain.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Chiropractors can offer holistic treatments for shoulder pain and help you avoid medication and surgeries for dealing with your shoulder pain issues. Chiropractic adjustments help to restore movement and improve nerve communication. This, in turn, helps the body to function at its best and reduce inflammation and pain.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Chiropractic Treatment for Shoulder Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you are experiencing shoulder pain, it is important to seek treatment as soon as possible before it manifests into more serious issues.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Living in pain is a choice! Chiropractic care can help alleviate your shoulder pain and get you back to living a pain-free life.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            If you are experiencing shoulder pain, call our office today to schedule a consultation with one of our chiropractors. We would be happy to help you get relief from your pain and improve your mobility.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Shoulder Pain Treatment in Minot
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
