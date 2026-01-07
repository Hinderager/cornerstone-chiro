import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spine X-Rays in Minot | CornerStone Chiropractic",
  description: "Get comprehensive spine X-rays at CornerStone Chiropractic in Minot. Advanced imaging for accurate diagnosis and customized treatment plans.",
};

export default function SpineXRaysPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Spine X-Rays in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Advanced Diagnostic Imaging
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Why Spine X-Rays Matter
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            X-rays provide valuable insight into the structure and condition of your spine. At CornerStone Chiropractic, we use digital X-ray technology to get a clear picture of your spinal alignment, disc health, and any underlying conditions that may be contributing to your pain.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            This diagnostic tool allows us to create more accurate and effective treatment plans tailored to your specific needs. We believe in precision care, and X-rays help us deliver exactly that.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of Diagnostic X-Rays
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Accurate Diagnosis</h3>
              <p className="text-[#58585A]">
                See exactly what&apos;s happening with your spine for precise diagnosis.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Treatment</h3>
              <p className="text-[#58585A]">
                Develop treatment plans based on your unique spinal structure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Track Progress</h3>
              <p className="text-[#58585A]">
                Monitor your improvement over time with follow-up imaging.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What X-Rays Reveal */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What X-Rays Can Reveal
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Spine X-rays can help identify a variety of conditions and issues:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Spinal misalignments (subluxations)
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Disc degeneration or narrowing
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Arthritis and bone spurs
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Scoliosis (spinal curvature)
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Fractures or injuries
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Congenital abnormalities
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Get a Clear Picture
          </h2>
          <p className="text-white text-lg mb-6">
            Schedule your consultation to see if X-rays are right for you.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What to Expect
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Getting X-rays at our office is quick, easy, and comfortable. Our digital X-ray equipment provides high-quality images with minimal radiation exposure. The entire process typically takes just a few minutes.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            After your X-rays are taken, our chiropractor will review the images and explain the findings to you. You&apos;ll see exactly what&apos;s happening with your spine and understand why we recommend specific treatments.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Not all patients require X-rays. Our chiropractor will determine if imaging is necessary based on your symptoms, health history, and examination findings.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Spine X-Rays in Minot
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
