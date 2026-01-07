import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Neuropathy Treatment in Minot | CornerStone Chiropractic",
  description: "Struggling with neuropathy symptoms? Our chiropractic team in Minot can help make your neuropathy symptoms manageable through natural, holistic care.",
};

export default function NeuropathyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Neuropathy Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Chiropractic Care for Neuropathy
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
            Chiropractic Treatment for Neuropathy
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Neuropathy is a condition that affects the nerves. When there is damage to the nerves or the nerve&apos;s protective covering, this can lead to Neuropathy. Although there is no cure, Chiropractic care can certainly make your Neuropathy symptoms manageable.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            Our chiropractic team in Minot specializes in helping patients manage their neuropathy symptoms through natural, holistic care. We focus on improving nerve function and reducing pain without medications or invasive procedures.
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
                Get to the bottom of what&apos;s causing your neuropathy symptoms so we can build a plan to help you manage them effectively.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Care Plan</h3>
              <p className="text-[#58585A]">
                We&apos;ll help build you a plan of action to manage your symptoms and improve your quality of life.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Ongoing Support</h3>
              <p className="text-[#58585A]">
                We&apos;ll provide ongoing care and support to help you manage your neuropathy symptoms long-term.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Neuropathy Pain Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience significant relief from their neuropathy symptoms with chiropractic care. Using our gentle techniques, we can help improve nerve function and reduce pain. Book an appointment now to schedule a time with our team.
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
            What is Neuropathy?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Neuropathy is a condition that occurs when there is damage to the peripheral nerves. These nerves are responsible for sending signals between the central nervous system (brain and spinal cord) and the rest of the body. When these nerves are damaged, it can cause a variety of symptoms including pain, numbness, tingling, and weakness.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Neuropathy can affect different types of nerves including sensory nerves (which control sensation), motor nerves (which control movement), and autonomic nerves (which control automatic body functions).
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Symptoms of Neuropathy
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-4">
            The symptoms of neuropathy depend on which nerves are affected. Common symptoms include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Pain:</strong> Often described as a burning sensation in the hands or feet</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Tingling:</strong> A &quot;pins and needles&quot; feeling in the affected areas</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Numbness:</strong> Loss of sensation in the hands, feet, or other areas</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Weakness:</strong> Muscle weakness that can affect mobility</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Lack of Coordination:</strong> Difficulty with balance and movement</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Heat Intolerance:</strong> Problems with body temperature regulation</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Digestive Problems:</strong> Issues with digestion and bowel function</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            What Causes Neuropathy?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-4">
            There are many potential causes of neuropathy, including:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Diabetes:</strong> One of the most common causes of neuropathy</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Autoimmune diseases:</strong> Conditions like lupus or rheumatoid arthritis</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Infections:</strong> Certain viral or bacterial infections</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Inherited factors:</strong> Genetic predisposition to nerve problems</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Medications:</strong> Side effects from certain drugs</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Alcoholism:</strong> Long-term alcohol abuse can damage nerves</span>
            </li>
          </ul>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractic Care Helps Neuropathy
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care can help manage neuropathy symptoms by improving the function of the nervous system. Through gentle spinal adjustments and other techniques, chiropractors can help reduce pressure on nerves, improve blood flow, and promote healing.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our approach focuses on addressing the underlying issues that may be contributing to your neuropathy symptoms. By improving spinal alignment and reducing nerve interference, we can help your body function more optimally.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            In addition to chiropractic adjustments, we may recommend lifestyle changes, exercises, and nutritional support to help manage your neuropathy symptoms.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Get Neuropathy Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re struggling with neuropathy symptoms, our chiropractic team in Minot can help. We&apos;ll work with you to develop a personalized care plan to manage your symptoms and improve your quality of life.
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
            Neuropathy Treatment in Minot
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
