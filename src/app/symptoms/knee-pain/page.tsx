import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knee Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Struggling with knee pain? Our Chiropractic team in Minot can help! We specialize in treating the entire body, not just individual symptoms.",
};

export default function KneePainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Knee Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Knee Pain
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
            Struggling with knee pain? You&apos;re not alone. Many people suffer from knee pain throughout their life. This is a major joint that holds up your entire body. There is a lot of stress and movement that happens right at your knees, so it&apos;s no wonder why so many people deal with chronic knee pain and discomfort.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our Chiropractic team in Minot can help! We specialize in treating the entire body, not just individual symptoms. We will work to get to the root of the problem and help you find relief from your knee pain.
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
                Get to the bottom of what&apos;s causing your knee and leg pain so we can build a plan to get you feeling great again.
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
            Knee Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Chiropractors work to keep a body in alignment so your knees can function normally without pain. They are experts in recognizing the source of a problem and building short and long term solutions. If you&apos;re experiencing knee pain, book your appointment today!
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Knee Pain Treatment in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their knee pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to knee pain for good.
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
            Chiropractic Care for Knee Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care is a natural solution to finding the underlying problem that is causing the pain in your knees and building a custom care plan to alleviate that pain and promote natural healing.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The best part is that this helps you avoid unnecessary medications and surgeries.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            We specialize in helping you get relief from knee pain using gentle noninvasive adjustments to your musculoskeletal system.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Knee Pain
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Knee pain can come from several sources, such as:
          </p>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Arthritis</h3>
              <p className="text-[#58585A]">
                Arthritis can cause knee pain. It is when the cartilage in your knees breaks down. Arthritis can also make you want to move less, which means your arthritis will get worse because there is not enough blood flow and movement in your knees. To help arthritis go away, you need to keep moving so that it doesn&apos;t hurt as much.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Sprains or Fractures</h3>
              <p className="text-[#58585A]">
                Sprains and fractures are both injuries to the bones. Sprains are when you stretch or tear the ligaments that hold your bones together. Fractures are when you break a bone. Both can cause severe pain in your knees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Bursitis</h3>
              <p className="text-[#58585A]">
                Bursitis is a condition that causes pain and inflammation in the bursa. The bursa is a small, fluid-filled sac that cushions and lubricates your joints. When it becomes inflamed, it can cause a lot of pain and discomfort, especially in your knees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Tendonitis</h3>
              <p className="text-[#58585A]">
                Tendonitis is a condition that causes pain and inflammation in the tendon. Tendons are the tissues that connect muscles to bones. When they become inflamed, it can be very painful and make it difficult to move your knees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Ligament Damage</h3>
              <p className="text-[#58585A]">
                Ligament damage is a serious injury that can occur in your knees. It is when the ligaments that hold your bones together are stretched or torn. This can cause severe pain and make it difficult to move your knees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Gout</h3>
              <p className="text-[#58585A]">
                Gout is a type of arthritis that is caused by high levels of uric acid in the blood. When this happens, it can cause crystals to form in your joints, which leads to pain and inflammation. Gout is most commonly found in the big toe, but it can also happen in your knees.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Osgood Schlatter&apos;s Disease</h3>
              <p className="text-[#58585A]">
                When you grow, your bones don&apos;t always match up. The bone in your legs is called the tibia, and near it are muscle attachments that make it harder to move. Sometimes the bone grows unevenly and this can cause pain in the knee. This is what Osgood Schlatter&apos;s disease is.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Knee Pain
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We offer a variety of treatment options, depending on your specific needs. Some of the most common treatments include spinal adjustments, massage therapy, and heat/cold therapy. We may also recommend exercises or stretches to help you improve your mobility and reduce your pain.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team will start with a full evaluation to get to the root cause of your knee pain. Then we&apos;ll work with you to find a treatment plan to alleviate knee pain and promote natural healing for your body. Usually, treatment involves gentle adjustments of your spine, hips, legs, and joints to release pressure off your nervous system and make sure everything is aligned properly.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Chiropractic treatment is non-invasive and helps you avoid taking pain medications and living with chronic pain in your knees.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Chiropractic Treatment for Knee Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our goal is to get you living pain-free again! You don&apos;t have to live with chronic knee pain. If you&apos;re tired of dealing with pain in your knees or other joints, we&apos;re here for you. Chiropractic care can help.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Get in touch to book your appointment today!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Knee Pain Treatment in Minot
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
