import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arthritis Treatment in Minot | CornerStone Chiropractic",
  description: "Struggling with arthritis pain? Our chiropractic team in Minot can help manage your arthritis symptoms and improve your quality of life naturally.",
};

export default function ArthritisPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Arthritis Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Arthritis
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
            Chiropractic Treatment for Arthritis
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Arthritis is a condition that affects millions of people and can cause significant pain, stiffness, and reduced mobility in the joints. While there is no cure for arthritis, chiropractic care can help manage your symptoms and improve your quality of life.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our chiropractic team in Minot specializes in helping arthritis patients find relief through gentle adjustments, therapeutic exercises, and lifestyle recommendations. We focus on reducing inflammation, improving joint function, and helping you stay active.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Reduce Inflammation</h3>
              <p className="text-[#58585A]">
                Our treatments help reduce inflammation in your joints, which can significantly decrease pain and stiffness.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Improve Mobility</h3>
              <p className="text-[#58585A]">
                Through gentle adjustments and exercises, we help improve your range of motion and joint function.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Stay Active</h3>
              <p className="text-[#58585A]">
                We&apos;ll help you maintain an active lifestyle despite your arthritis, which is crucial for joint health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Arthritis Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience significant pain relief from their arthritis with chiropractic care. Using our gentle techniques, we can help reduce inflammation, improve joint function, and decrease your pain levels. Book an appointment now to schedule a time with our team.
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
            What is Arthritis?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Arthritis is a general term that refers to inflammation of the joints. It can affect one or multiple joints and is characterized by pain, stiffness, swelling, and decreased range of motion. There are over 100 different types of arthritis, with the most common being osteoarthritis and rheumatoid arthritis.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Arthritis can affect people of all ages, though it becomes more common as we get older. The condition can significantly impact your quality of life, making everyday activities difficult and painful.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Types of Arthritis
          </h2>
          <div className="space-y-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Osteoarthritis</h3>
              <p className="text-[#58585A]">
                The most common type of arthritis, osteoarthritis occurs when the protective cartilage that cushions the ends of your bones wears down over time. It most commonly affects joints in your hands, knees, hips, and spine.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Rheumatoid Arthritis</h3>
              <p className="text-[#58585A]">
                An autoimmune disease where your immune system mistakenly attacks the lining of your joints. This causes painful swelling that can eventually result in bone erosion and joint deformity.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Psoriatic Arthritis</h3>
              <p className="text-[#58585A]">
                A form of arthritis that affects some people who have psoriasis, a skin condition characterized by red patches with silvery scales. Joint pain, stiffness, and swelling are the main symptoms.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Gout</h3>
              <p className="text-[#58585A]">
                A complex form of arthritis characterized by sudden, severe attacks of pain, swelling, redness, and tenderness in the joints, often the joint at the base of the big toe.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Symptoms of Arthritis
          </h2>
          <ul className="space-y-2 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Joint pain and tenderness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Stiffness, especially in the morning
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Swelling around the joints
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Reduced range of motion
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Redness and warmth around the joint
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Fatigue and general feeling of being unwell
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Arthritis
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            While chiropractic care cannot cure arthritis, it can be an effective way to manage your symptoms and improve your quality of life. Our approach focuses on reducing pain, decreasing inflammation, and improving joint function.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            We use gentle adjustments to improve joint mobility and reduce stiffness. This helps your joints move more freely and with less pain. We may also recommend exercises and stretches to strengthen the muscles around your joints, providing better support and stability.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Additionally, we can provide lifestyle recommendations including dietary changes, weight management, and activity modifications to help manage your arthritis symptoms long-term.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Arthritis Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re living with arthritis, you don&apos;t have to suffer in silence. Our chiropractic team in Minot can help you manage your symptoms and maintain an active, fulfilling life.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Book your appointment today to get started!
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Arthritis Treatment in Minot
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
