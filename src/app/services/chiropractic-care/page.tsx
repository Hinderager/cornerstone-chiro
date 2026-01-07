import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top Chiropractic Care in Minot | CornerStone Chiropractic",
  description: "At CornerStone Chiropractic, we focus on helping residents of the greater Minot area get their health on track. Maximize the function of your nervous system.",
};

export default function ChiropracticCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Top Chiropractor in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Top Chiropractic Care in Minot
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/images/chiropractor-in-minot.jpg"
                alt="Dr. William Fielhaber showing spinal model to patient"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <p className="text-[#58585A] text-lg leading-relaxed mb-6">
                At CornerStone Chiropractic, we focus on helping residents of the greater Minot area get their health on track. We have one goal for your care: to maximize the function of your nervous system, so your body can function at its optimal potential.
              </p>
              <p className="text-[#58585A] text-lg leading-relaxed mb-6">
                Interferences in the link between your brain and your body caused by misalignments in the spine can impair internal organs and organ systems, limit healing potential, and set the stage for sickness and diseases of all kinds. Our chiropractic team is highly trained in identifying the misalignments in your spine, making proper adjustments to relieve the pressure on your nervous system, and igniting natural healing for your body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Symptoms Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Back Pain</h3>
              <p className="text-[#58585A] mb-6">
                Get back pain relief with top Chiropractic care in Minot.
              </p>
              <Link
                href="/symptoms/back-pain"
                className="text-[#C4A069] font-semibold hover:underline"
              >
                learn more
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Neck Pain</h3>
              <p className="text-[#58585A] mb-6">
                Get specialized treatment to pinpoint and correct neck pain.
              </p>
              <Link
                href="/symptoms/neck-pain"
                className="text-[#C4A069] font-semibold hover:underline"
              >
                learn more
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Hip Pain</h3>
              <p className="text-[#58585A] mb-6">
                Work with us to fix hip misalignment and hip pain issues.
              </p>
              <Link
                href="/symptoms/hip-pain"
                className="text-[#C4A069] font-semibold hover:underline"
              >
                learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-[#58585A] text-lg leading-relaxed mb-8 text-center">
            Our unique techniques and processes enable us to properly identify and treat the source of the issue, as well as correct spinal misalignments. We help people with a variety of health conditions in our Minot office every day.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] text-center mb-6 font-montserrat">
            Top Chiropractor in the Minot Area
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8 text-center">
            We&apos;re committed to getting you on the path to optimal health. To get started, contact our office to book your first appointment where we will build you a health plan, and answer any initial questions!
          </p>
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

      {/* New Patient Special */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            New Patient Special!
          </h2>
          <p className="text-white text-lg mb-6">
            Learn more about the current new patient special.
          </p>
          <Link
            href="/new-patients"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Detailed Info Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
                Top Chiropractic Care in Minot
              </h2>
              <p className="text-[#58585A] leading-relaxed mb-4">
                Our chiropractic office is here to help you reach your health goals. We offer a variety of services to help you feel your best. With years of training and helping hundreds and thousands of patients, we&apos;re confident we can help you feel your best.
              </p>
              <p className="text-[#58585A] leading-relaxed mb-4">
                During your appointment, we may perform some tests, such as a physical exam and possibly x-rays, to get a better understanding of your condition. We want to ensure that we&apos;re providing you with the best possible care, so testing may be necessary in some cases.
              </p>
              <p className="text-[#58585A] leading-relaxed">
                Depending on your condition, we may recommend chiropractic adjustments, massage therapy, or another type of treatment. We&apos;ll work with you to create a treatment plan that meets your needs and helps you reach your health goals.
              </p>
            </div>
            <div>
              <Image
                src="/images/about.jpg"
                alt="Chiropractic care"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-[#58585A] text-lg leading-relaxed mb-6 text-center">
            We provide top-quality chiropractic care in a welcoming, family-friendly environment. We specialize in helping you:
          </p>
          <ul className="space-y-3 max-w-xl mx-auto">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Relieve pain and discomfort
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Improve range of motion and mobility
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Enhance joint function and stability
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Faster healing time for injuries
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Better overall health and well-being
            </li>
          </ul>
          <p className="text-[#58585A] text-lg leading-relaxed mt-8 text-center">
            We want to find the underlying cause of your pain and discomfort and build a custom plan to get you on the path to optimal health. We&apos;ll work with you to create a treatment plan that fits your budget and lifestyle. If you are looking for relief from pain or want to improve your overall health, get in touch with us to book your appointment today.
          </p>
        </div>
      </section>

      {/* What Do Chiropractors Do */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What Do Chiropractors Do?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractors treat patients by adjusting their spines. The spine is made up of small bones called vertebrae. The chiropractor uses their hands to adjust the position of the vertebrae. This helps to relieve pressure on the nerves and muscles up and down the spinal column. Chiropractic care can help to improve joint function, reduce pain, and improve overall health.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractic care works by correcting misalignments in the spine. When the spine is out of alignment, it can cause interference in the body&apos;s communication system. This can lead to several health problems.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            When vertebrae are misaligned, it can put pressure on the nerves and muscles. This can lead to pain, discomfort, and other health problems. This is called a subluxation. Chiropractors specialize in finding subluxations and making small gentle adjustments to realign the vertebrae and promote natural healing.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us today to schedule your first appointment.
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
