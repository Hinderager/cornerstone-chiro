import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Meet Our Team | CornerStone Chiropractic Minot",
  description: "Meet the experienced doctors and staff at CornerStone Chiropractic in Minot. Our dedicated team is committed to your health and wellness.",
};

const team = [
  {
    name: "Dr. John Smith",
    title: "Lead Chiropractor",
    bio: "Dr. Smith has been practicing chiropractic care for over 15 years. He is passionate about helping patients achieve optimal health through natural, non-invasive treatments. He specializes in spinal correction and sports injuries.",
    credentials: ["Doctor of Chiropractic", "Certified in Activator Method", "Sports Injury Specialist"]
  },
  {
    name: "Dr. Sarah Johnson",
    title: "Chiropractor",
    bio: "Dr. Johnson joined CornerStone Chiropractic with a focus on family wellness care. She has extensive experience treating patients of all ages, from infants to seniors, and is particularly interested in prenatal and pediatric chiropractic care.",
    credentials: ["Doctor of Chiropractic", "Webster Certified", "Pediatric Chiropractic Training"]
  },
  {
    name: "Michael Thompson",
    title: "Licensed Massage Therapist",
    bio: "Michael is a skilled massage therapist with expertise in therapeutic and sports massage. He works closely with our chiropractic team to provide comprehensive care for patients dealing with muscle tension and soft tissue issues.",
    credentials: ["Licensed Massage Therapist", "Sports Massage Certification", "Deep Tissue Specialist"]
  },
  {
    name: "Jennifer Davis",
    title: "Office Manager",
    bio: "Jennifer keeps our office running smoothly and ensures every patient has a positive experience. She handles scheduling, insurance verification, and is always ready to answer your questions.",
    credentials: ["Healthcare Administration", "Insurance Specialist"]
  },
  {
    name: "Amanda Wilson",
    title: "Chiropractic Assistant",
    bio: "Amanda assists our doctors with patient care and therapy sessions. Her friendly demeanor and attention to detail help patients feel comfortable and well-cared-for during their visits.",
    credentials: ["Certified Chiropractic Assistant", "CPR Certified"]
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Meet Our Team
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Dedicated to Your Health
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            At CornerStone Chiropractic, our team is committed to providing exceptional care
            and helping you achieve your health goals. Get to know the people who will be
            supporting you on your wellness journey.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="space-y-12">
            {team.map((member, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="w-full md:w-1/3">
                  <div className="aspect-square bg-gradient-to-br from-[#3D8AA1] to-[#C4A069] rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold text-[#131313] mb-2 font-montserrat">
                    {member.name}
                  </h3>
                  <p className="text-[#C4A069] font-semibold mb-4">{member.title}</p>
                  <p className="text-[#58585A] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((credential, credIndex) => (
                      <span
                        key={credIndex}
                        className="bg-[#F5F5F5] text-[#58585A] px-3 py-1 rounded-full text-sm"
                      >
                        {credential}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-12 font-montserrat">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3D8AA1] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Compassionate Care</h3>
              <p className="text-[#58585A]">We treat every patient with kindness, respect, and genuine concern for their well-being.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C4A069] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Excellence</h3>
              <p className="text-[#58585A]">We strive for excellence in everything we do, from patient care to continuing education.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#131313] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#131313] mb-2 font-montserrat">Community</h3>
              <p className="text-[#58585A]">We are proud to serve the Minot community and are committed to improving local health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Join Our Team
          </h2>
          <p className="text-white text-lg mb-6">
            Interested in joining CornerStone Chiropractic? We&apos;re always looking for talented individuals.
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
            Ready to Meet Us in Person?
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule your appointment and let us help you on your path to better health.
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
