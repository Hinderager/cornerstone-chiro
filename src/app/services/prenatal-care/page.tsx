import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prenatal Chiropractic Care in Minot | CornerStone Chiropractic",
  description: "Are you pregnant and dealing with aches and pains? Our chiropractic team in Minot is specifically trained to help pregnant women with their unique needs.",
};

export default function PrenatalCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Prenatal Chiropractic Care in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Prenatal Chiropractic Care in Minot
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
            Chiropractor Care for Pregnancy
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you pregnant and dealing with aches and pains? Pregnancy brings a ton of changes to your body. As your body grows your child and prepares for birth, it needs to move things around to make space. The movement, additional weight, and added fluids can easily throw off your musculoskeletal alignment leading to pains and aches.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Luckily, chiropractic care is a great option during pregnancy. Our chiropractic team in Minot is specifically trained to help pregnant women with their unique needs. Chiropractic care can help with everything from reducing back pain, neck pain, and headaches to improving your baby&apos;s overall health.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Help With Growth</h3>
              <p className="text-[#58585A]">
                We work with pregnant women to ensure their spine stays healthy and aligned throughout the course of pregnancy.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Feel Better</h3>
              <p className="text-[#58585A]">
                Reduce pains, aches, and other symptoms that come from pregnancy and the shifts your body makes to support birth.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                Help your body maintain optimal health while minimizing pains and aches from all the big changes your body is going through.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Care for Pregnant Women
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Our goal is to focus on the health and wellness of future generations, starting with helping moms through their pregnancies. Together, we&apos;ll keep you and your baby at optimal health.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Top Pregnancy Chiropractor in the Minot Area
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many women here at CornerStone Chiropractic experience reduced pregnancy aches and pains. Chiropractic care helps minimize the impact pregnancy has on your spine and nervous system so you can enjoy pregnancy without worrying about your well-being.
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
            Prenatal Chiropractic Care in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We specialize in helping women through their pregnancy with Chiropractic care. During pregnancy, your body goes through a lot of changes. Our goal is to help you minimize aches and pains during all the changes so you can stay active and have a healthy pregnancy from start to finish.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            When it comes to prenatal chiropractic care, our Minot clinic is one of the best in the business. We have helped countless women achieve optimal health during their pregnancy and beyond. Our approach is holistic and individualized, so we can cater to your specific needs.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Is Chiropractic Care Safe During Pregnancy?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care is very safe during pregnancy and highly recommended. We focus on gentle, specific adjustments that help reduce pain and improve spinal function. Many women find chiropractic care helpful in relieving morning sickness, reducing back and neck pain, and improving overall health.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Since chiropractic care is natural and noninvasive, you can be thankful to avoid any medications or surgeries to help alleviate your aches and pains. Chiropractors focus on spinal health, which directly impacts the nervous system. When your body is going through all the changes during pregnancy, it puts a lot of pressure on your spine and misaligned vertebrae is very common.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Why Should I Have Chiropractic Care During Pregnancy?
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Women experience a lot of body changes during pregnancy which can cause a lot of pressure on the spinal column. Our chiropractic team wants you to enjoy the experience of being pregnant with minimal pain and discomfort while keeping your baby safe and developing properly.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            By seeing a chiropractor throughout your pregnancy, you are promoting natural healing, relieving tensions on nerves, and allowing your body to change to support the pregnancy without causing you more pain and discomfort than is necessary.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Benefits of Seeing a Chiropractor While Pregnant
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Spinal health is extremely important during all stages of life, but pregnancy brings its own set of challenges to your body that requires extra care. Common symptoms that Chiropractors can help with during pregnancy include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Low back pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Neck pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Ligament pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Morning sickness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Breech babies
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pelvis and sacrum pain
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Length of labor
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed">
            During pregnancy, your body is much more susceptible to subluxations and misalignments in your joints. All the changes and additional pressure can cause a lot of issues. You&apos;ll benefit greatly by seeing a chiropractor during your pregnancy and beyond.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Top Prenatal Chiropractor in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            If you&apos;re pregnant and experiencing any pain or discomfort, contact our clinic today to schedule a prenatal chiropractic care appointment.
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
