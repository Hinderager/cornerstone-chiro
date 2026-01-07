import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About our Chiropractic Team | CornerStone Chiropractic',
  description: 'Meet our dedicated chiropractic team at CornerStone Chiropractic in Minot, ND. Since 2000, we have been caring for patients with integrity, devotion, and compassion.',
};

const teamMembers = [
  {
    name: 'Dr. Benjamin Whitten',
    role: 'Chiropractor',
    image: '/images/Dr.-Matt-Hanson-crop-1024x1022.jpg',
    href: '/team/dr-benjamin-whitten',
  },
  {
    name: 'Dr. Matt Hanson',
    role: 'Chiropractor',
    image: '/images/Dr.-Matt-Hanson-crop-1024x1022.jpg',
    href: '/team/dr-matt-hanson',
  },
  {
    name: 'Dr. William Fielhaber',
    role: 'Chiropractor',
    image: '/images/Dr.-William-Fielhaber-Crop2-1-1024x1024.jpg',
    href: '/team/dr-william-fielhaber',
  },
  {
    name: 'Amber Shea',
    role: 'Operations Director',
    image: '/images/Amber-Shea-OFM-crop-1024x1024.jpg',
    href: '/team/amber-shea',
  },
  {
    name: 'Julie Schoneck',
    role: 'Lead Chiropractic Assistant',
    image: '/images/Julie-Schoneck.jpg',
    href: '/team/julie-schoneck',
  },
  {
    name: 'Mary Vollmer',
    role: 'Chiropractic Assistant',
    image: '/images/mary.jpg',
    href: '/team/mary-vollmer',
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h1 className="text-4xl font-bold text-[#131313] mb-2" style={{ fontFamily: 'Merriweather, serif' }}>
                Welcome to CornerStone Chiropractic
              </h1>
              <p className="text-[#C4A069] text-lg mb-6">Top Chiropractic care in Minot</p>
            </div>
            <div>
              <p className="text-[#58585A] mb-4">
                Here at CornerStone Chiropractic, we are proud to help our patients live better, pain-free lives.
              </p>
              <p className="text-[#58585A] mb-4">
                We truly believe that no one deserves to live in pain, even as they age. We will do everything we can to ensure that our patients are comfortable. We are proud to help people heal after an accident or injury and diminish any unwanted discomfort.
              </p>
              <p className="text-[#58585A] mb-4">
                The spine is an important and integral part of your body, and any misalignments in your backbone have the potential to affect many different parts of your body, sometimes areas that may seem completely unrelated. We will be able to determine where your problem lies and discuss the various treatments available.
              </p>
              <p className="text-[#58585A] mb-4">
                Even after just a few treatments, you will be amazed at how much better you feel! You will gain mobility, have increased circulation, and may even start to lose some weight. Chiropractic care can really make a world of difference to you!
              </p>
              <p className="text-[#58585A]">
                If you have any questions about how we can get you out of pain or improve your overall quality of life, please do not hesitate to contact us today at <a href="tel:+17018522800" className="text-[#C4A069] font-medium">(701) 852-2800</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#131313] mb-12" style={{ fontFamily: 'Merriweather, serif' }}>
            Meet Our Chiropractic & Wellness Team
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Link key={member.name} href={member.href} className="group">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden card-hover">
                  <div className="aspect-square relative">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-[#131313] group-hover:text-[#C4A069] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-[#58585A]">{member.role}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
            Chiropractic Care in Minot
          </h2>
          <p className="text-[#58585A] mb-8">
            Welcome to CornerStone Chiropractic! We are a community-based clinic serving the greater Minot area, dedicated to helping individuals and families achieve optimal health through natural chiropractic care!
          </p>
          <a
            href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
            className="btn-gold inline-block"
          >
            BOOK APPOINTMENT
          </a>
        </div>
      </section>

      <section className="bg-[#DBC195] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
            Book Your Appointment!
          </h2>
          <p className="text-white mb-6">Get started on your path to optimal health today.</p>
          <a
            href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
            className="bg-white text-[#C4A069] px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors inline-block"
          >
            SCHEDULE NOW
          </a>
        </div>
      </section>
    </>
  );
}
