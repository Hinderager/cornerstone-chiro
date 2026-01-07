import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | CornerStone Chiropractic Minot",
  description: "Comprehensive chiropractic services at CornerStone Chiropractic in Minot. From adjustments to advanced therapies, we have solutions for your health needs.",
};

const services = [
  {
    category: "Chiropractic Techniques",
    items: [
      { name: "Chiropractic Adjustments", slug: "chiropractic-adjustments", description: "Traditional and advanced adjustment techniques for spinal health." },
      { name: "Activator Method", slug: "activator-method", description: "Gentle, low-force adjustments using the Activator instrument." },
      { name: "ArthroStim Adjusting", slug: "arthrostim-adjusting", description: "Precise instrument-assisted adjustments for sensitive patients." },
      { name: "Extremity Adjusting", slug: "extremity-adjusting", description: "Adjustments for shoulders, elbows, wrists, hips, knees, and ankles." },
    ]
  },
  {
    category: "Advanced Therapies",
    items: [
      { name: "Spinal Decompression", slug: "spinal-decompression", description: "Non-surgical treatment for disc problems and back pain." },
      { name: "SoftWave Therapy", slug: "softwave-therapy", description: "Acoustic wave therapy for tissue regeneration and pain relief." },
      { name: "Cold Laser Therapy", slug: "cold-laser-therapy", description: "Low-level laser therapy for pain relief and healing." },
      { name: "Electrotherapy", slug: "electrotherapy", description: "Electrical stimulation for pain relief and muscle recovery." },
      { name: "InvisaRed Therapy", slug: "invisared-therapy", description: "Red light therapy for pain relief and cellular healing." },
    ]
  },
  {
    category: "Specialized Services",
    items: [
      { name: "Hyperbaric Oxygen Therapy", slug: "hyperbaric-oxygen-therapy", description: "Oxygen therapy for enhanced healing and recovery." },
      { name: "Massage Therapy", slug: "massage-therapy", description: "Therapeutic massage for relaxation and muscle tension relief." },
      { name: "Corrective Exercises", slug: "corrective-exercises", description: "Customized exercises to support your treatment plan." },
      { name: "Lifestyle Advice", slug: "lifestyle-advice", description: "Guidance on nutrition, ergonomics, and healthy habits." },
    ]
  },
  {
    category: "Diagnostic & Wellness",
    items: [
      { name: "Spine X-Rays", slug: "spine-x-rays", description: "Digital imaging for accurate diagnosis and treatment planning." },
      { name: "Wellness Care", slug: "wellness-care", description: "Preventative care to maintain optimal health and function." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Our Services
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Comprehensive Chiropractic Care
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            At CornerStone Chiropractic, we offer a wide range of services to address your health needs.
            From traditional chiropractic adjustments to advanced therapies, we have solutions for you.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-[#F5F5F5]' : ''}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.items.map((service, serviceIndex) => (
                <Link
                  key={serviceIndex}
                  href={`/services/${service.slug}`}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat group-hover:text-[#C4A069] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-[#58585A] mb-4">
                    {service.description}
                  </p>
                  <span className="text-[#3D8AA1] font-semibold group-hover:text-[#C4A069] transition-colors">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-white text-lg mb-6">
            Schedule a consultation and we&apos;ll create a personalized treatment plan.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg mb-8">
            Take the first step toward better health today.
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
