import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className="relative bg-gradient-to-r from-[#F0F5FA] to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#C4A069] mb-4" style={{ fontFamily: 'Merriweather, serif' }}>
                Chiropractor in Minot, ND
              </h1>
              <p className="text-xl text-[#58585A] mb-8">
                Achieve optimal health with premium chiropractic care.
              </p>
              <a href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c" className="btn-gold inline-block">
                NEW PATIENT SPECIAL
              </a>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/npblGaOUP9s" title="CornerStone Chiropractic" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 -mt-8 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
              <h3 className="text-xl font-semibold text-[#131313] mb-3">Meet The Team</h3>
              <p className="text-[#58585A] mb-4">Meet our dedicated health care team at CornerStone Chiropractic in Minot, ND.</p>
              <Link href="/about" className="text-[#C4A069] hover:text-[#B08F5B] font-medium">learn more →</Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
              <h3 className="text-xl font-semibold text-[#131313] mb-3">Book Appointment</h3>
              <p className="text-[#58585A] mb-4">Book your Chiropractic appointment online using our online scheduling tool.</p>
              <Link href="/book-appointment" className="text-[#C4A069] hover:text-[#B08F5B] font-medium">learn more →</Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
              <h3 className="text-xl font-semibold text-[#131313] mb-3">Videos</h3>
              <p className="text-[#58585A] mb-4">Short educational tips from the Doctors at CornerStone Chiropractic.</p>
              <Link href="/education-videos" className="text-[#C4A069] hover:text-[#B08F5B] font-medium">learn more →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#131313] mb-6" style={{ fontFamily: 'Merriweather, serif' }}>Chiropractic Care in Minot</h2>
              <p className="text-[#58585A] mb-6">Dr. Matt Hanson and Dr. Willy Fielhaber would like to welcome you to our practice that has been committed to serving the Minot area for over 22 years.</p>
              <p className="text-[#58585A] mb-6">CornerStone Chiropractic offers the highest standard of patient care. Since 2000, our team of dedicated professionals has been caring for patients with integrity, devotion, and compassion.</p>
              <Link href="/about" className="btn-gold inline-block">MEET THE TEAM</Link>
            </div>
            <div className="relative">
              <Image src="/images/about-1-1.jpg" alt="Dr. William Fielhaber and Dr. Matt Hanson" width={533} height={501} className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3D8AA1] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Merriweather, serif' }}>New Patient Special!</h3>
          <p className="text-white mb-4">$89 for your first complete Chiropractic consultation.</p>
          <a href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c" className="btn-gold inline-block">LEARN MORE</a>
        </div>
      </section>

      <section className="bg-[#DBC195] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: 'Merriweather, serif' }}>Book Your Appointment!</h2>
          <p className="text-white mb-6">Get started on your path to optimal health today.</p>
          <a href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c" className="bg-white text-[#C4A069] px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors inline-block">SCHEDULE NOW</a>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#131313] mb-6" style={{ fontFamily: 'Merriweather, serif' }}>Family Chiropractor in Minot, ND</h2>
              <p className="text-[#58585A] mb-6">Welcome to CornerStone Chiropractic in Minot. Chiropractic is one of the most amazing healthcare professions that takes a holistic approach to healthcare.</p>
              <p className="text-[#58585A] mb-6">Let us help you achieve optimal health.</p>
              <a href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c" className="btn-gold inline-block">BOOK APPOINTMENT</a>
            </div>
            <div className="relative flex justify-center">
              <Image src="/images/back-pain-treatment-near-me-1-1024x1024.png" alt="Back pain treatment Minot" width={500} height={500} className="rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
