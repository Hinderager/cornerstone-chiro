import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Elbow Pain Treatment in Minot | CornerStone Chiropractic",
  description: "Are you struggling with elbow pain? We specialize in helping patients find the root cause of their elbow pain and providing holistic and natural treatments.",
};

export default function ElbowPainPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Elbow Pain Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Treatment for Elbow Pain in Minot
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
            Treatment for Elbow Pain & Injuries
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you struggling with elbow pain? This is one of the most commonly used joints on a day-to-day basis. It&apos;s no wonder so many people struggle with pain, swelling, and stiffness in their elbow. The good news is that chiropractic care can help!
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            We specialize in helping patients find the root cause of their elbow pain and providing holistic and natural treatments to resolve those issues. Eliminate your elbow pain with no surgeries or addictive medications.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Get in touch with our team to start your care today!
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Elbow Pain Relief</h3>
              <p className="text-[#58585A]">
                Relief the ongoing elbow pain and injuries. Get back to feeling great again and restore range of motion.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">All Natural Treatment</h3>
              <p className="text-[#58585A]">
                No surgeries, no medications. Just an all-natural way to help your body and joints feel better again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                Keep your joints strong and help prevent further injuries and pain from developing in the future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            The elbow is one of the most joints in your body and very commonly can experience pain or be injured. Get on top of your elbow pain and get treatment right away before it develops into something more serious.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Top Chiropractic Care for Elbow Pain in the Minot Area
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their elbow pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to elbow pain and discomfort.
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
            Chiropractic Treatment for Elbow Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care is a fantastic way to treat elbow pain, reduce swelling, and increase your range of motion. We specialize in helping you get to the bottom of your elbow pain and performing chiropractic adjustments to help get your elbow feeling great again.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            You don&apos;t have to live with elbow pain. We&apos;re here to help.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes for Elbow Pain
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The elbow is one of the most frequently used joints in your body. It&apos;s very common to feel aches and pains in this area, especially if you experience even the slightest injury. Here are some common reasons you might feel pain in your elbow:
          </p>

          <div className="space-y-6 mb-6">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Repetitive Motion</h3>
              <p className="text-[#58585A]">
                This is very common for people who perform repetitive tasks. Tennis players (Tennis Elbow), golfers (Golf Elbow), desk workers, factory workers, etc. who do the same motion over and over with their elbow can experience pain, stiffness, and soreness in their elbow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Injury or Trauma</h3>
              <p className="text-[#58585A]">
                Any time there is an impact on your elbows, such as a fall, car accident, or contact sport, you can injure the ligaments, tendons, muscles, and bones in this area. The pain can be immediate, or it can appear later down the road and linger for long periods.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Arthritis</h3>
              <p className="text-[#58585A]">
                This is a condition that affects the joints, causing them to become inflamed and stiff. Osteoarthritis is the most common type of arthritis and it can occur in any joint in your body, including your elbow.
              </p>
            </div>
          </div>

          <p className="text-[#58585A] leading-relaxed mb-4">
            Symptoms of elbow pain include:
          </p>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain and tenderness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Swelling
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Stiffness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Limited range of motion
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Weakness
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How do Chiropractors Treat Elbow Pain?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            First, we&apos;ll work on finding the underlying cause of the pain in your elbow. We&apos;ll want to pinpoint what is causing the pain in the first place, so we can make sure our treatment plans are tackling the problem head-on.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            In most instances, your elbow pain can be treated by using our gentle adjustment techniques. This is where we will make small gentle adjustments to your joints and alignment. This helps make sure the infrastructure of your joints, ligaments, and muscles are exactly where they are supposed to be. Usually, we see good results with this type of treatment and you can experience pain relief relatively quickly.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Once you&apos;re back in alignment, your body can naturally start the healing process.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There are also a few other things we might recommend to help with your elbow pain. We might suggest you use ice or heat therapy, depending on the source of your pain. You might also need to start doing some exercises and stretches to help improve the range of motion in your elbow and keep the muscles around it strong and flexible.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The best part is that Chiropractic care is an all-natural way to treat pain and discomfort in your elbow. No invasive surgeries, no addictive medications. We focus on providing you with the best natural way to resolve the pain in your elbow so you can get back to feeling great again.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Chiropractic Care for Elbow Pain in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re dealing with elbow pain or discomfort, we&apos;d love to help. Get started with your care so you can find the underlying cause and eliminate the problem before it gets worse. You don&apos;t have to live in pain.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Book your appointment to get started with care today!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Elbow Pain Treatment in Minot
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
