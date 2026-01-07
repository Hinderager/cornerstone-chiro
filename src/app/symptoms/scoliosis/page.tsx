import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scoliosis Treatment in Minot | CornerStone Chiropractic",
  description: "Are you or a child dealing with abnormal spinal curves? Our chiropractic team in Minot specializes in helping patients dealing with scoliosis.",
};

export default function ScoliosisPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Scoliosis Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Scoliosis Treatment & Relief in Minot
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
            Chiropractic Care for Scoliosis
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you or a child dealing with abnormal spinal curves? This could be Scoliosis. It&apos;s a common issue we see where there are severe abnormal curves of the spine that create havoc on your posture, cause pain, and prevent proper development.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            We specialize in helping patients dealing with scoliosis and finding a path to correct these misalignments. Our chiropractic care is gentle, safe, and effective in helping to straighten the spine and reduce pain.
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
                Get to the bottom of what&apos;s causing your Scoliosis pain so we can build a plan to get you feeling great again.
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
            Chiropractic Care for Scoliosis
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Scoliosis is a major problem that can be debilitating and get worse and worse over time. Chiropractic care can help relieve pain and discomfort for scoliosis, and if caught early enough, help resolve the issue completely.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Scoliosis Treatment in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major pain relief from their scoliosis with chiropractic care. Using our gentle adjusting techniques, we can help relieve pressure and the pain commonly experienced when dealing with scoliosis. Book an appointment now to schedule a time with our team and work with our team today.
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
            What is Scoliosis?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Scoliosis is a condition that affects the spine. It can make the spine curve sideways, and it can make it difficult to stand and move correctly. Scoliosis often happens during childhood, but it can also develop in adults. There are different types of scoliosis, and the cause is usually unknown. However, some cases of scoliosis are linked to conditions like cerebral palsy and muscular dystrophy.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Several different types of scoliosis can affect children and adults. The most common form is known as idiopathic scoliosis, which causes a right-sided curve in adolescents ages 10 to 14 years old.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Ankylosing spondylitis is another type of scoliosis that affects young people between the ages of 15 to 20. It can also occur in older adults over 50 with long-term back pain.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Other types include congenital scoliosis or structural scoliosis caused by bones or muscle imbalances, tumors, injuries, weight problems, fractures, arthritis deformities, aging, etc…
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Many times, those dealing with scoliosis can get relief from chiropractic care.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Top Scoliosis Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care is one of the top treatments for scoliosis. Our chiropractic team in Minot uses a variety of techniques to help correct the curvature of the spine and improve spinal function. Some of the techniques used include spinal adjustments, massage, and exercise therapy.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Seeing a chiropractor for scoliosis can help you increase your range of motion and reduce pain throughout the back. Chiropractors treat scoliosis to improve the spine&apos;s function and alignment.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Scoliosis
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            There are several different causes of scoliosis. The most common form, idiopathic scoliosis, is caused by an unknown factor. However, other types of scoliosis can be caused by a variety of factors, including:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Congenital abnormalities
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscular dystrophy
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Cerebral palsy
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Injuries or tumors
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Weight problems
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Arthritis deformities
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Regardless of the underlying cause of Scoliosis developing, seeing a chiropractor can help you correct the curvature of your spine and improve spinal function.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Symptoms of Scoliosis
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            The most common symptoms of scoliosis include:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Uneven shoulders
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              One shoulder blade more prominent than the other
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Uneven waist
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              One hip higher than the other
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Back pain
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Symptoms are different for everybody. Some are so minor that you may not even notice while many times it becomes a major burden.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How to Diagnose Scoliosis
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Chiropractors use a variety of techniques to diagnose scoliosis, including:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Physical examination
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              X-rays
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              MRI or CT scans
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            This allows chiropractors to get a clear view of the curvature of the spine and identify any abnormalities.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Treatment for Scoliosis in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you are dealing with Scoliosis, we&apos;d love to help you get your spine back in shape. You don&apos;t have to live with the discomfort of Scoliosis. Our Chiropractic team in Minot specializes in helping patients with scoliosis get back to living a pain-free life.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Book your appointment to get started today.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Scoliosis Treatment in Minot
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
