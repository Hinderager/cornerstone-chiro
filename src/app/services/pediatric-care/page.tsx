import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pediatric Chiropractic Care in Minot | CornerStone Chiropractic",
  description: "The health of your child is their most valuable asset. By including chiropractic in your family's lifestyle, you may be proactive in promoting your child's health.",
};

export default function PediatricCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Pediatric Chiropractic Care in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Children in Minot
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

      {/* Top Chiropractor for Kids */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Top Chiropractor for Kids & Families
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#58585A] text-lg leading-relaxed mb-6">
                The health of your child is their most valuable asset. By including chiropractic in your family&apos;s lifestyle, you may be proactive in promoting your child&apos;s health.
              </p>
              <p className="text-[#58585A] text-lg leading-relaxed mb-6">
                We believe that each kid should be examined by a chiropractor consistently during their developmental phases and childhood. Chiropractic treatment early on may help your child&apos;s nervous and immune systems develop properly.
              </p>
              <p className="text-[#58585A] text-lg leading-relaxed">
                As your child gets older, we want to ensure that he or she is developing in the best way possible. Spinal misalignment can happen during pregnancy, birth trauma, and when you carry your child improperly or for too long in a car seat. Common newborn health issues include colic, reflux, earaches, excessive crying, and difficulties feeding.
              </p>
            </div>
            <div>
              <Image
                src="/images/pediatric-chiropractor-1-1024x644.jpg"
                alt="Pediatric care treatment"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Help With Growth</h3>
              <p className="text-[#58585A]">
                We work with kids every day to ensure their spine stays healthy and aligned while they grow from little ones into adolescents.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Heal From Injuries</h3>
              <p className="text-[#58585A]">
                From playing on the playground to contact sports, we help your kids heal properly from typical childhood injuries.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                Help your kids maintain optimal health and promote a healthy lifestyle with ongoing wellness chiropractic care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chiropractic Care for Kids */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Care for Kids
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Our goal is to focus on the health and wellness of future generations, starting with helping children live their best lives. Together, we&apos;ll empower your child to reach their fullest potential.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Top Pediatric Chiropractor in the Minot Area
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many parents here at CornerStone Chiropractic see the benefits of providing preventative chiropractic care for their children. They&apos;ve reported their children have noticed improvements in their immune, digestive, and respiratory systems through care.
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
            Top Pediatric Chiropractic Care in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic office specializes in helping kids get and stay healthy. We have several pediatric-specific treatments and strategies that can help improve your child&apos;s health.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            One of our top services is chiropractic care for kids. We use gentle manipulations and adjustments to help get your child&apos;s body back into alignment. This can help improve their overall health and well-being.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Children of all ages can benefit from chiropractic care. From the moment they are born through adolescence, a lot of growth and activity happens that involves their spine. Keeping their spine aligned helps keep them growing and developing as healthy as possible.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Is Chiropractic Care Safe for Kids?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Kids see Chiropractors all the time, and it&apos;s highly recommended. Chiropractic care is safe for humans of all ages. Chiropractors focus specifically on gentle, non-invasive adjustments to the spinal column. When vertebrae in the spine become misaligned, they cause extra pressure on the nervous system which can cause unnecessary pain, and aches, and develop into serious problems if not addressed.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Especially with children, spinal health is extremely important to promote natural healing and properly develop as they grow. We recommend children of all ages see a chiropractor regularly, even with no signs of pain or discomfort, to ensure they are growing and developing properly.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The best part is that chiropractic care can help resolve health issues for your kids without the use of drugs or invasive surgeries. With natural healing, we can help keep your kids healthy.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Reasons Kids See Chiropractors
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Kids are active. Playing with friends, engaging in sports, and growing rapidly puts a lot of pressure on the spine. Chiropractors can help kids manage pain and discomfort, improve their athletic performance, and keep them growing healthy and strong.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Here are some of the most common reasons kids see chiropractors:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Chronic ear infections
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Bedwetting
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Allergies
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Asthma
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              ADD/ADHD
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Scoliosis
            </li>
          </ul>

          <p className="text-[#58585A] leading-relaxed mb-6">
            A child&apos;s spine might become misaligned without their awareness, causing them to feel pain or discomfort. Kids are not always aware or alert enough to recognize a condition developing. Even if a child is in pain, they may not be able to communicate it to you, which might seem like grumpiness, acting out, or continuous crying. Problems with the spine, in addition to causing a slew of other childhood problems such as colic, ear infections, and ADHD, can also be responsible for a range of issues.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            We see kids from all over the Minot area to help them achieve optimal health and stay aligned while their bodies grow. If you&apos;re concerned with your child&apos;s health, Chiropractic care might be the solution.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Chiropractic Treatment for Kids in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            We want to help your children excel. If you&apos;re interested, we&apos;d love to evaluate your children&apos;s current health and make recommendations to make sure they stay healthy.
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
