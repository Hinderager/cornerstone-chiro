import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Symptoms We Treat | CornerStone Chiropractic Minot",
  description: "Find relief from pain and discomfort at CornerStone Chiropractic in Minot. We treat back pain, neck pain, headaches, sciatica, and many other conditions.",
};

const symptoms = [
  {
    category: "Back & Spine",
    items: [
      { name: "Back Pain", slug: "back-pain", description: "Relief from lower, middle, and upper back pain." },
      { name: "Sciatica", slug: "sciatica", description: "Treatment for sciatic nerve pain radiating down the leg." },
      { name: "Disc Injury", slug: "disc-injury", description: "Care for herniated, bulging, and degenerative discs." },
      { name: "Scoliosis", slug: "scoliosis", description: "Management of abnormal spinal curvature." },
    ]
  },
  {
    category: "Head & Neck",
    items: [
      { name: "Neck Pain", slug: "neck-pain", description: "Relief from stiffness, tension, and chronic neck pain." },
      { name: "Headaches", slug: "headaches", description: "Treatment for tension headaches and migraines." },
      { name: "Whiplash", slug: "whiplash", description: "Recovery from auto accident and trauma-related neck injuries." },
      { name: "Vertigo", slug: "vertigo", description: "Care for dizziness and balance issues." },
    ]
  },
  {
    category: "Upper Extremities",
    items: [
      { name: "Shoulder Pain", slug: "shoulder-pain", description: "Treatment for frozen shoulder, impingement, and more." },
      { name: "Rotator Cuff", slug: "rotator-cuff", description: "Care for rotator cuff injuries and tears." },
      { name: "Arm Pain", slug: "arm-pain", description: "Relief from radiating pain and numbness in the arms." },
      { name: "Elbow Pain", slug: "elbow-pain", description: "Treatment for tennis elbow, golfer's elbow, and more." },
      { name: "Carpal Tunnel", slug: "carpal-tunnel", description: "Relief from wrist pain, numbness, and tingling." },
    ]
  },
  {
    category: "Lower Extremities",
    items: [
      { name: "Hip Pain", slug: "hip-pain", description: "Treatment for hip joint pain and mobility issues." },
      { name: "Knee Pain", slug: "knee-pain", description: "Care for knee pain from injuries or arthritis." },
      { name: "Leg Pain", slug: "leg-pain", description: "Relief from pain, cramping, and weakness in the legs." },
      { name: "Plantar Fasciitis", slug: "plantar-fasciitis", description: "Treatment for heel and foot pain." },
    ]
  },
  {
    category: "Conditions & Injuries",
    items: [
      { name: "Arthritis", slug: "arthritis", description: "Management of joint pain and inflammation." },
      { name: "Neuropathy", slug: "neuropathy", description: "Care for nerve damage and related symptoms." },
      { name: "Pinched Nerve", slug: "pinched-nerve", description: "Relief from compressed nerve pain and numbness." },
      { name: "Sprain Injuries", slug: "sprain-injuries", description: "Recovery from muscle and ligament injuries." },
      { name: "Overuse Injury", slug: "overuse-injury", description: "Treatment for repetitive strain and overuse conditions." },
    ]
  }
];

export default function SymptomsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Symptoms We Treat
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Find Relief From Pain
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            At CornerStone Chiropractic, we treat a wide range of conditions and symptoms.
            Whether you&apos;re dealing with chronic pain or recovering from an injury, we can help.
          </p>
        </div>
      </section>

      {/* Symptoms by Category */}
      {symptoms.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 1 ? 'bg-[#F5F5F5]' : ''}`}>
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
              {category.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {category.items.map((symptom, symptomIndex) => (
                <Link
                  key={symptomIndex}
                  href={`/symptoms/${symptom.slug}`}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow group"
                >
                  <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat group-hover:text-[#C4A069] transition-colors">
                    {symptom.name}
                  </h3>
                  <p className="text-[#58585A] mb-4">
                    {symptom.description}
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
            Don&apos;t See Your Condition Listed?
          </h2>
          <p className="text-white text-lg mb-6">
            We treat many conditions not listed here. Contact us to discuss your symptoms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#3D8AA1] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-appointment"
              className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Feel Better?
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule your appointment today and start your journey to relief.
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
