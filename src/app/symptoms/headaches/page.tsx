import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Headache & Migraine Treatment in Minot | CornerStone Chiropractic",
  description: "Are you dealing with chronic headaches or migraines? Chiropractic care may be the solution. We specialize in getting to the root cause of your headaches.",
};

export default function HeadachesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Headache & Migraine Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Headache & Migraine Treatment
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
            Headache & Migraine Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Are you dealing with chronic headaches or migraines? You&apos;re not alone. Millions of people suffer from these debilitating conditions every year, and many find very little relief from traditional medications.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            If you&apos;re looking for an alternative to medication, chiropractic care may be the solution you&apos;ve been searching for. Chiropractors have long been recognized as experts in headache and migraine treatment. We specialize in getting to the root cause of your headaches and migraines and building a custom treatment plan to get you feeling great again.
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Videos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/S3fNaq0ZKus"
                  title="4 Tips to Mitigate Headaches"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#131313]">4 Tips to Mitigate Headaches</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/lzl9bwDDLos"
                  title="What Do Chiropractors Do To Treat Headaches"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#131313]">What Do Chiropractors Do To Treat Headaches</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/OKPiKBMPzFg"
                  title="Top Causes of Headaches & Migraines"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#131313]">Top Causes of Headaches & Migraines</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/ZokLSKA92gc"
                  title="How Chiropractors Treat Headaches & Neck Pain"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#131313]">How Chiropractors Treat Headaches & Neck Pain</h3>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/FPQ6kR-9bOI"
                  title="At Home Remedies for Headaches & Migraines"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[#131313]">At Home Remedies for Headaches & Migraines</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Find The Root Cause</h3>
              <p className="text-[#58585A]">
                Get to the bottom of what&apos;s causing your headaches & migraines so we can build a plan to get you feeling great again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Care Plan</h3>
              <p className="text-[#58585A]">
                We&apos;ll help build you a plan of action to get your pain under control and getting you and your body feeling 100%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center border border-gray-100">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                If needed, we&apos;ll establish preventative measures to keep your problem from coming back so you can stay healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractic Treatment for Headaches
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Don&apos;t suffer from headaches any longer. Our Chiropractic team is here to get to the underlying cause of your headaches and help you get back to feeling great again. Book your appointment today to get started with care.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Headache & Migraine Relief in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people experience major relief from their headaches and migraines with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our team and say goodbye to headaches for good.
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
            Headache & Migraine Treatment in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team is here to help you relieve the pain from chronic headaches and migraines. Chronic headaches and migraines can be debilitating. They can interfere with your normal daily activities and make people miserable. Fortunately, chiropractic care is an effective treatment for headaches and migraines.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            The definition of migraine is a debilitating headache that lasts anywhere from four hours up to three days or more. They are often accompanied by other symptoms such as nausea, vomiting, sensitivity to light or sound, blurred vision, weakness on one side of the body (hemiplegia), numbness in extremities (paraplegia), and difficulty speaking (dysphasia).
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Headaches & Migraines
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Health conditions and lifestyle play a major role in dealing with ongoing headaches and migraines. Common causes include:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Lack of sleep
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Dehydration
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Stress
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Allergies
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Poor posture
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Cervical subluxation
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Trauma to head or neck
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Drinking too much alcohol
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Types of Headaches & Migraines
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            There are several different types of headaches that you can experience. The pain associated can vary based on the cause of your headache and the type of headache you are experiencing.
          </p>

          <h4 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Tension Headaches</h4>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Tension headaches are the most common type of headache. They are characterized by a dull, aching pain that is typically felt on both sides of the head. Tension headaches can be caused by several factors, such as stress, lack of sleep, dehydration, and poor posture.
          </p>

          <h4 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Cluster Headaches</h4>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Cluster headaches are a rare but severe type of headache that often occurs in clusters. They are most commonly felt on one side of the head and are accompanied by other symptoms such as redness in the eyes, runny nose, and facial sweating. Cluster headaches can last from a few minutes to three hours.
          </p>

          <h4 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Sinus Headaches</h4>
          <p className="text-[#58585A] leading-relaxed mb-6">
            A sinus headache is a type of headache that is caused by inflammation or infection in the sinuses. Sinus headaches are typically characterized by pain and pressure in the forehead, cheeks, and around the eyes.
          </p>

          <h4 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Stress Headaches</h4>
          <p className="text-[#58585A] leading-relaxed mb-8">
            A stress headache is a type of headache that is caused by stress. Stress headaches are typically characterized by a dull, aching pain that is felt on both sides of the head.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Headaches in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractors help people who have headaches and migraines by identifying the root cause of the head pain and building a treatment plan accordingly. Sometimes this can include lifestyle changes, while most of the time, this includes facilitating Chiropractic treatments.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            Chiropractors use a hands-on approach to adjusting the spine and neck. They use their hands to apply gentle pressure and manipulation to the vertebrae that are out of alignment. This helps to restore the alignment of the spine and relieve any tension or pressure that may be causing headaches or migraines.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Chiropractic Care for Headaches in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            If you&apos;re experiencing headaches in Minot, call our office today to schedule an appointment.
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
