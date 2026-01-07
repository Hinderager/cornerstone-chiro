import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Spine Education | CornerStone Chiropractic Minot",
  description: "Learn about spinal anatomy, common conditions, and how chiropractic care supports spinal health at CornerStone Chiropractic in Minot.",
};

export default function SpineEducationPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Spine Education
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Understanding Your Spine
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Your spine is the foundation of your body&apos;s movement and nerve function. Learn about
            spinal anatomy and how chiropractic care can help maintain optimal spinal health.
          </p>
        </div>
      </section>

      {/* Spine Anatomy */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Spinal Anatomy
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            The human spine is a remarkable structure consisting of 33 vertebrae stacked on top of
            each other. It serves three primary functions: supporting the body&apos;s weight, allowing
            for movement and flexibility, and protecting the spinal cord.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Cervical Spine (Neck)</h3>
              <p className="text-[#58585A]">
                7 vertebrae (C1-C7) that support the head and allow for neck movement. The cervical
                spine is the most mobile region of the spine.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Thoracic Spine (Mid-Back)</h3>
              <p className="text-[#58585A]">
                12 vertebrae (T1-T12) that connect to the ribs and provide stability. This region
                is less mobile but crucial for posture.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Lumbar Spine (Lower Back)</h3>
              <p className="text-[#58585A]">
                5 vertebrae (L1-L5) that bear most of the body&apos;s weight. This region is a common
                source of back pain due to the stress it endures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Sacrum & Coccyx</h3>
              <p className="text-[#58585A]">
                5 fused sacral vertebrae and 4 fused coccygeal vertebrae at the base of the spine,
                connecting to the pelvis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Spinal Components */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Key Spinal Components
          </h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Intervertebral Discs</h3>
              <p className="text-[#58585A]">
                Soft, gel-like cushions between each vertebra that act as shock absorbers and allow
                for spinal flexibility. Disc problems like herniations and bulges are common sources
                of back pain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Spinal Cord & Nerves</h3>
              <p className="text-[#58585A]">
                The spinal cord runs through the vertebral canal, protected by the vertebrae. Spinal
                nerves branch out between each vertebra, carrying signals between the brain and body.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Facet Joints</h3>
              <p className="text-[#58585A]">
                Small joints at the back of each vertebra that guide spinal movement and provide
                stability. These joints can become arthritic or irritated, causing pain.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">Muscles & Ligaments</h3>
              <p className="text-[#58585A]">
                The spine is supported by numerous muscles and ligaments that provide stability and
                allow for movement. Muscle strain is one of the most common causes of back pain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Conditions */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Common Spinal Conditions
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <span className="w-3 h-3 bg-[#C4A069] rounded-full mr-4 mt-2"></span>
              <div>
                <h4 className="font-bold text-[#131313] mb-1">Subluxation</h4>
                <p className="text-[#58585A] text-sm">Misalignment of vertebrae affecting nerve function</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-3 h-3 bg-[#C4A069] rounded-full mr-4 mt-2"></span>
              <div>
                <h4 className="font-bold text-[#131313] mb-1">Herniated Disc</h4>
                <p className="text-[#58585A] text-sm">Disc material pushing out and pressing on nerves</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-3 h-3 bg-[#C4A069] rounded-full mr-4 mt-2"></span>
              <div>
                <h4 className="font-bold text-[#131313] mb-1">Degenerative Disc Disease</h4>
                <p className="text-[#58585A] text-sm">Natural wear and tear of discs over time</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-3 h-3 bg-[#C4A069] rounded-full mr-4 mt-2"></span>
              <div>
                <h4 className="font-bold text-[#131313] mb-1">Spinal Stenosis</h4>
                <p className="text-[#58585A] text-sm">Narrowing of the spinal canal</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-3 h-3 bg-[#C4A069] rounded-full mr-4 mt-2"></span>
              <div>
                <h4 className="font-bold text-[#131313] mb-1">Scoliosis</h4>
                <p className="text-[#58585A] text-sm">Abnormal lateral curvature of the spine</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="w-3 h-3 bg-[#C4A069] rounded-full mr-4 mt-2"></span>
              <div>
                <h4 className="font-bold text-[#131313] mb-1">Sciatica</h4>
                <p className="text-[#58585A] text-sm">Pain radiating along the sciatic nerve</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Have Questions About Your Spine?
          </h2>
          <p className="text-white text-lg mb-6">
            Our doctors are happy to answer your questions and discuss your spinal health.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#3D8AA1] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* Chiropractic Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            How Chiropractic Care Helps Your Spine
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Chiropractic care focuses on the relationship between the spine and the nervous system.
            When the spine is properly aligned, the nervous system can function optimally, allowing
            your body to heal and perform at its best.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Through precise adjustments, chiropractors can correct misalignments (subluxations),
            restore proper joint motion, reduce nerve interference, and promote overall health and
            wellness.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-[#131313] mb-2 font-montserrat">Restore Alignment</h4>
              <p className="text-[#58585A] text-sm">Correct vertebral misalignments</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-[#131313] mb-2 font-montserrat">Improve Mobility</h4>
              <p className="text-[#58585A] text-sm">Increase range of motion</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <h4 className="font-bold text-[#131313] mb-2 font-montserrat">Reduce Pain</h4>
              <p className="text-[#58585A] text-sm">Alleviate pressure on nerves</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Take Care of Your Spine
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule a spinal evaluation and learn how we can help you maintain optimal spinal health.
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
