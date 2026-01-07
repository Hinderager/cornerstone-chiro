import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sprain & Strain Injury Treatment in Minot | CornerStone Chiropractic",
  description: "Dealing with a sprain or strain injury? Our chiropractic team in Minot can help you get on the quickest path to recovery with natural healing techniques.",
};

export default function SprainInjuriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Sprain & Strain Injury Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Sprain & Strain Injuries
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
            Treating Sprain & Strain Injuries in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Dealing with a sprain injury can be painful and inconvenient. A sprain is an injury where your ligaments are stretched beyond their normal range, sometimes even causing a tear in the ligament itself. The result can be intense and sharp pains in the affected area. Many times this can include swelling and bruising of the area as well.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            If you sustain a sprain or strain injury, it&apos;s time to ice and elevate. Then, of course, to come to see our chiropractic team in Minot for an evaluation. We want to help get you on the quickest path to recovery.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Natural Healing</h3>
              <p className="text-[#58585A]">
                Speed up your recovery with all-natural healing techniques that help your body repair itself.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Care Plan</h3>
              <p className="text-[#58585A]">
                We&apos;ll develop a personalized treatment plan based on the severity and location of your injury.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                We&apos;ll help strengthen the affected area to prevent future injuries and keep you healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Treatment for Sprain & Strain Injuries
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their sprain injuries with chiropractic care. Using our gentle adjusting techniques, we can help you speed up your recovery with all-natural healing techniques. Book an appointment now to schedule a time with our team.
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
            Chiropractic Care for Sprain & Strain Injuries
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There are several different ways that our team can help you heal from your sprain or strain injury. We will develop a personalized treatment plan based on the severity and location of your injury as well as your unique needs and preferences.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Chiropractic care focuses on restoring proper alignment and function to the affected joints and surrounding tissues. This helps reduce pain, improve mobility, and speed up the healing process.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Sprained Ankle Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            The most common type of sprain is with your ankle. This is because the ankle is constantly in motion and supports a lot of weight, making it more susceptible to injury. Ankle sprains can range from mild to severe, depending on how much damage has occurred to the ligaments.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Our chiropractic team can help you recover from an ankle sprain by restoring proper alignment to the ankle joint and surrounding structures. We&apos;ll also provide exercises and stretches to help strengthen the ankle and prevent future injuries.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Understanding Sprains vs. Strains
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-4">
            While sprains and strains are often used interchangeably, they are actually different types of injuries:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Sprains:</strong> Occur when ligaments (the tissues that connect bones to other bones) are stretched or torn. Common areas include ankles, wrists, and knees.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Strains:</strong> Occur when muscles or tendons (the tissues that connect muscles to bones) are stretched or torn. Common areas include the back and hamstrings.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Symptoms of Sprains & Strains
          </h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain and tenderness in the affected area
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Swelling and inflammation
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Bruising
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Limited range of motion
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Difficulty bearing weight on the injured area
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscle spasms (with strains)
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Benefits of Chiropractic Care for Sprains & Strains
          </h2>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Faster Healing:</strong> Chiropractic adjustments can help improve blood flow and reduce inflammation, speeding up the healing process.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Pain Relief:</strong> Gentle adjustments can help alleviate pain without the need for medications.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Improved Mobility:</strong> Restoring proper alignment helps improve range of motion in the affected area.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Prevent Future Injuries:</strong> Strengthening exercises and proper alignment help prevent re-injury.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Treatment for Sprain & Strain Injuries in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re dealing with a sprain or strain injury, don&apos;t wait to get treatment. The sooner you begin care, the faster you can recover and get back to your normal activities.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Contact our office today to book your appointment and start your path to recovery!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Sprain & Strain Injury Treatment in Minot
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
