import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plantar Fasciitis Treatment in Minot | CornerStone Chiropractic",
  description: "Are you experiencing pain in your foot or heel? Chiropractic care is an excellent treatment option to help relieve the pain from Plantar Fasciitis.",
};

export default function PlantarFasciitisPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Plantar Fasciitis Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care in Minot for Plantar Fasciitis
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
            Are you experiencing pain in your foot or heel? You are likely dealing with Plantar Fasciitis. This is a common condition that causes severe pain near the back side of the foot. It&apos;s especially more common when your lifestyle has you on your feet a lot. Luckily, we can help.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Chiropractic care is an excellent treatment option to help relieve the pain from Plantar Fasciitis as well as help resolve the underlying problem and get you feeling 100% again.
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
                Get to the bottom of what&apos;s causing your heel and foot pain so we can build a plan to get you feeling great again.
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
            Heel Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Chiropractors work to keep your body in alignment so your muscles and joints can function normally without pain. They are experts in recognizing the source of a problem and building short and long term solutions. If you&apos;re experiencing foot pain, book your appointment today!
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Plantar Fasciitis Treatment in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people in Minot experience major pain relief from their Plantar Fasciitis pain with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to foot and heel pain for good.
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
            What is Plantar Fasciitis?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Plantar Fasciitis is a foot condition that is caused by inflammation of the plantar fascia. The plantar fascia is a band of tissue that runs along the bottom of the foot and connects the heel bone to the toes. When this band of tissue becomes inflamed, it can cause pain and discomfort in the feet. Also, Plantar Fasciitis is more common in people who are on their feet a lot, such as athletes or those who have physically demanding jobs.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Plantar Fasciitis is a common condition, and can often be treated with chiropractic care.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">
            Common Symptoms of Plantar Fasciitis
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Pain from Plantar Fasciitis tends to be either a dull pain or a stabbing pain. Other symptoms of Plantar Fasciitis may include:
          </p>
          <ul className="space-y-2 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain in the heel or arch of the foot
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain that is worse in the morning
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain that worsens after prolonged standing
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Stiffness in the foot
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Symptoms develop worse over time and present differently for everyone.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            What Causes Plantar Fasciitis?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There are a few different things that can cause Plantar Fasciitis, and often it is a combination of these factors. Some common causes include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Overuse:</strong> This is the most common cause of Plantar Fasciitis. When you overuse your feet, it can lead to inflammation and irritation of the plantar fascia. This is often seen in athletes or those who have physically demanding jobs.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Improper Shoes:</strong> Wearing shoes that don&apos;t provide proper support or cushioning can also lead to Plantar Fasciitis. This is especially true if you are on your feet a lot.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Flat Feet or High Arches:</strong> Having flat feet or high arches can also lead to Plantar Fasciitis. This is because there is more stress on the plantar fascia when you have these foot types.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Tight Achilles Tendon:</strong> The Achilles tendon attaches the heel bone to the calf muscle. If this tendon is tight, it can pull on the heel and cause Plantar Fasciitis.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Age:</strong> Plantar Fasciitis is more common as we age. This is because as we age, the tissue in our feet breaks down and becomes less flexible and elastic.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Obesity:</strong> Being obese or overweight can also lead to Plantar Fasciitis. This is because there is more pressure on the feet when you are carrying extra weight.</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Treatment Options for Plantar Fasciitis in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Plantar Fasciitis is typically diagnosed based on a physical examination and your symptoms. The best way to diagnose Plantar Fasciitis is to visit our chiropractor in Minot. They will be able to do a thorough examination and help you develop a treatment plan.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Chiropractors help Plantar Fasciitis by working to reduce the inflammation in the plantar fascia. They do this with a variety of different treatments, such as:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Spinal Manipulation:</strong> This is a common treatment for reducing inflammation. The chiropractor will use their hands to manipulate the spine and help reduce the inflammation in the plantar fascia.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Massage Therapy:</strong> Massage therapy can also help reduce the inflammation in Plantar Fasciitis. The massage therapist will work to loosen up the muscles and tissue in the foot and heel area.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Exercise:</strong> Exercise is often recommended as part of the treatment plan for Plantar Fasciitis. The exercise helps to stretch and strengthen the muscles and tissue in the foot and heel area.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Ice/Heat Therapy:</strong> Ice or heat therapy can also be used to help reduce the inflammation in Plantar Fasciitis.</span>
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            If you are experiencing pain in your feet, and suspect that you may have Plantar Fasciitis, it is important to seek treatment right away. Chiropractors are experts in diagnosing and treating foot conditions and can help to provide relief from the pain and discomfort associated with Plantar Fasciitis.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Care for Plantar Fasciitis in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Plantar Fasciitis is a common condition, but it can be painful and debilitating. If you are suffering from Plantar Fasciitis, our chiropractor in Minot can help. They will work with you to develop a treatment plan that is right for you.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            If you are suffering from Plantar Fasciitis, don&apos;t wait any longer to seek treatment. Contact our office today to schedule an appointment with one of our experienced chiropractors.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Plantar Fasciitis Treatment in Minot
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
