import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chiropractic Glossary | CornerStone Chiropractic Minot",
  description: "Learn common chiropractic and medical terms used at CornerStone Chiropractic in Minot. Comprehensive glossary of spine and wellness terminology.",
};

const glossaryTerms = [
  {
    term: "Adjustment",
    definition: "A controlled, specific force applied to a joint to restore proper movement and alignment. Also called spinal manipulation."
  },
  {
    term: "Acute",
    definition: "A condition with rapid onset and short duration, typically less than 6 weeks. Opposite of chronic."
  },
  {
    term: "Cervical",
    definition: "Relating to the neck region of the spine, consisting of the first 7 vertebrae (C1-C7)."
  },
  {
    term: "Chiropractic",
    definition: "A healthcare discipline focused on the diagnosis, treatment, and prevention of disorders of the musculoskeletal system, especially the spine."
  },
  {
    term: "Chronic",
    definition: "A long-lasting condition, typically persisting for 3 months or more. Opposite of acute."
  },
  {
    term: "Disc (Intervertebral)",
    definition: "The soft, gel-like cushion between vertebrae that acts as a shock absorber and allows for spinal flexibility."
  },
  {
    term: "Herniated Disc",
    definition: "A condition where the soft inner material of a disc pushes through the outer layer, potentially pressing on nearby nerves."
  },
  {
    term: "Inflammation",
    definition: "The body's natural response to injury or infection, characterized by redness, swelling, heat, and pain."
  },
  {
    term: "Lumbar",
    definition: "Relating to the lower back region of the spine, consisting of 5 vertebrae (L1-L5)."
  },
  {
    term: "Manipulation",
    definition: "A therapeutic technique involving the application of controlled force to joints. See also: Adjustment."
  },
  {
    term: "Musculoskeletal",
    definition: "Relating to the muscles, bones, joints, ligaments, and tendons of the body."
  },
  {
    term: "Nerve",
    definition: "A bundle of fibers that transmits signals between the brain, spinal cord, and other parts of the body."
  },
  {
    term: "Neuropathy",
    definition: "Damage or dysfunction of one or more nerves, typically resulting in numbness, tingling, weakness, or pain."
  },
  {
    term: "Palpation",
    definition: "A diagnostic technique where the practitioner uses their hands to feel for abnormalities in tissues, muscles, and joints."
  },
  {
    term: "Pinched Nerve",
    definition: "Compression of a nerve by surrounding tissues such as bones, cartilage, muscles, or tendons, causing pain or numbness."
  },
  {
    term: "Radiculopathy",
    definition: "Pain or other symptoms caused by compression or irritation of a nerve root in the spine."
  },
  {
    term: "Range of Motion",
    definition: "The full movement potential of a joint, usually measured in degrees of movement."
  },
  {
    term: "Sacrum",
    definition: "A triangular bone at the base of the spine, formed by 5 fused vertebrae, connecting the spine to the pelvis."
  },
  {
    term: "Sciatica",
    definition: "Pain radiating along the sciatic nerve, which runs from the lower back through the hips and down each leg."
  },
  {
    term: "Scoliosis",
    definition: "An abnormal lateral (side-to-side) curvature of the spine."
  },
  {
    term: "Spasm",
    definition: "An involuntary muscle contraction that can cause pain and limit movement."
  },
  {
    term: "Spinal Cord",
    definition: "The bundle of nerves running through the vertebral canal, connecting the brain to the rest of the body."
  },
  {
    term: "Spinal Stenosis",
    definition: "Narrowing of the spinal canal, which can put pressure on the spinal cord and nerves."
  },
  {
    term: "Subluxation",
    definition: "A partial misalignment of a vertebra that can interfere with nerve function and overall health."
  },
  {
    term: "Thoracic",
    definition: "Relating to the mid-back region of the spine, consisting of 12 vertebrae (T1-T12) that connect to the ribs."
  },
  {
    term: "Vertebra",
    definition: "One of the individual bones that make up the spine. Plural: vertebrae."
  },
  {
    term: "Whiplash",
    definition: "A neck injury caused by rapid back-and-forth movement of the neck, often resulting from car accidents."
  }
];

export default function GlossaryPage() {
  // Group terms by first letter
  const groupedTerms = glossaryTerms.reduce((acc, term) => {
    const letter = term.term[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(term);
    return acc;
  }, {} as Record<string, typeof glossaryTerms>);

  const letters = Object.keys(groupedTerms).sort();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Chiropractic Glossary
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Understanding the Terms
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            A comprehensive guide to common chiropractic and medical terms you may encounter
            during your care at CornerStone Chiropractic.
          </p>
        </div>
      </section>

      {/* Letter Navigation */}
      <section className="py-8 bg-white border-b sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {letters.map((letter) => (
              <a
                key={letter}
                href={`#${letter}`}
                className="w-10 h-10 flex items-center justify-center bg-[#F5F5F5] hover:bg-[#C4A069] hover:text-white rounded font-bold text-[#131313] transition-colors"
              >
                {letter}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Glossary Terms */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {letters.map((letter) => (
            <div key={letter} id={letter} className="mb-12 scroll-mt-24">
              <h2 className="text-4xl font-bold text-[#C4A069] mb-6 font-montserrat border-b-2 border-[#C4A069] pb-2">
                {letter}
              </h2>
              <div className="space-y-6">
                {groupedTerms[letter].map((item, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">
                      {item.term}
                    </h3>
                    <p className="text-[#58585A] leading-relaxed">
                      {item.definition}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Have Questions?
          </h2>
          <p className="text-white text-lg mb-6">
            Our team is happy to explain any terms or answer questions about your care.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#3D8AA1] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
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
            Schedule your consultation and let us explain everything you need to know.
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
