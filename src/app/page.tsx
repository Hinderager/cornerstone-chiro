import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* Hero Section with Swooping curve through tiles */}
      <div className="relative">
        {/* Hero Content Area */}
        <section className="relative py-16 lg:py-24 pb-64 overflow-visible">
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/chiropractor-in-minot.jpg)',
              filter: 'brightness(0.85)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b8d4df]/90 via-[#c5dce5]/80 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1
                  className="text-[42px] lg:text-[52.8px] font-bold text-white mb-4 leading-[1.4] drop-shadow-lg"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  Chiropractor in Minot, ND
                </h1>
                <p
                  className="text-[24px] lg:text-[32px] text-white mb-8 leading-[1.4] drop-shadow-md"
                  style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 200 }}
                >
                  Achieve optimal health with premium chiropractic care.
                </p>
                <a
                  href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
                  className="btn-gold"
                >
                  NEW PATIENT SPECIAL
                </a>
              </div>
              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-xl">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/npblGaOUP9s"
                    title="CornerStone Chiropractic"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Swooping curve positioned to cut through the middle of the cards */}
        <div className="absolute left-0 right-0 z-10" style={{ bottom: '200px' }}>
          <svg
            viewBox="0 0 1440 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            style={{ height: '300px' }}
            preserveAspectRatio="none"
          >
            <path
              d="M0,150 C300,250 600,50 900,130 C1200,210 1350,80 1440,120 L1440,300 L0,300 Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Quick Action Cards - positioned to overlap hero with swoop cutting through middle */}
        <section className="relative z-20 -mt-52 pb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Meet The Team Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
              <div className="flex justify-center mb-4">
                <svg className="w-[50px] h-[50px] text-[#58585A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <path d="M9 11V9h6v2H9zm0 2v4h6v-4H9z" opacity="0.3"/>
                </svg>
              </div>
              <h3
                className="text-[20px] lg:text-[25.6px] font-semibold text-[#58585A] mb-3"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}
              >
                Meet The Team
              </h3>
              <p className="text-[#58585A] mb-4 text-[16px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Meet our dedicated health care team at CornerStone Chiropractic in Minot, ND.
              </p>
              <Link
                href="/about"
                className="learn-more-link inline-flex items-center gap-2"
              >
                learn more <span className="text-[#C4A069]">→</span>
              </Link>
            </div>

            {/* Book Appointment Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
              <div className="flex justify-center mb-4">
                <svg className="w-[50px] h-[50px] text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3
                className="text-[20px] lg:text-[25.6px] font-semibold text-[#58585A] mb-3"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}
              >
                Book Appointment
              </h3>
              <p className="text-[#58585A] mb-4 text-[16px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Book your Chiropractic appointment online using our online scheduling tool.
              </p>
              <Link
                href="/book-appointment"
                className="learn-more-link inline-flex items-center gap-2"
              >
                learn more <span className="text-[#C4A069]">→</span>
              </Link>
            </div>

            {/* Videos Card */}
            <div className="bg-white rounded-lg shadow-lg p-8 text-center card-hover">
              <div className="flex justify-center mb-4">
                <svg className="w-[50px] h-[50px] text-[#58585A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </div>
              <h3
                className="text-[20px] lg:text-[25.6px] font-semibold text-[#58585A] mb-3"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}
              >
                Short Videos
              </h3>
              <p className="text-[#58585A] mb-4 text-[16px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Short educational tips from the Doctors at CornerStone Chiropractic.
              </p>
              <Link
                href="/videos"
                className="learn-more-link inline-flex items-center gap-2"
              >
                learn more <span className="text-[#C4A069]">→</span>
              </Link>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Who's Getting Adjusted Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[30px] lg:text-[38.4px] text-[#58585A] text-center mb-8"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
          >
            Who&apos;s getting adjusted at CornerStone?
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image src="/images/patient-1.webp" alt="Patient at CornerStone" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" />
            <Image src="/images/patient-2.webp" alt="Patient at CornerStone" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" />
            <Image src="/images/patient-3.webp" alt="Patient at CornerStone" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" />
            <Image src="/images/patient-4.webp" alt="Patient at CornerStone" width={300} height={300} className="rounded-lg object-cover w-full aspect-square" />
          </div>
        </div>
      </section>

      {/* Chiropractic Care Section */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-[30px] lg:text-[38.4px] text-[#58585A] mb-6"
                style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
              >
                Chiropractic Care in Minot
              </h2>
              <p
                className="text-[#58585A] mb-6 text-[18px] leading-[1.8]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Dr. Matt Hanson and Dr. Willy Fielhaber would like to welcome you to our practice that has been committed to serving the Minot area for over 22 years.
              </p>
              <p
                className="text-[#58585A] mb-8 text-[18px] leading-[1.8]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                CornerStone Chiropractic, offers the highest standard of patient care. Since 2000, our team of dedicated professionals has been caring for patients with integrity, devotion, and compassion. One of our missions is to help you regain function and improve your overall quality of life. So if you&apos;re looking for the best chiropractor in Minot, you&apos;ve come to the right place!
              </p>
              <Link href="/about" className="btn-gold">
                MEET THE TEAM
              </Link>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#C4A069] rounded-full opacity-80"></div>
                <Image
                  src="/images/Dr.-Matt-Hanson-crop-1024x1022.jpg"
                  alt="Dr. Matt Hanson"
                  width={400}
                  height={500}
                  className="relative z-10 rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Patient Special CTA */}
      <section className="bg-[#3D8AA1] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[30px] lg:text-[38.4px] text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
          >
            New Patient Special!
          </h2>
          <p
            className="text-white mb-6 text-[18px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            $89 for your first complete Chiropractic consultation.
          </p>
          <a
            href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
            className="btn-gold"
          >
            LEARN MORE
          </a>
        </div>
      </section>

      {/* How Can Chiropractic Care Help Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[30px] lg:text-[38.4px] text-[#58585A] text-center mb-6"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
          >
            How can chiropractic care in Minot help you?
          </h2>
          <p
            className="text-[#58585A] text-center max-w-4xl mx-auto mb-12 text-[18px] leading-[1.8]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Chiropractic care is a non-invasive, all-natural treatment option for dealing with the aches and pains that come from everyday life. Whether you&apos;re currently experiencing chronic pain, have suffered an injury, or just want to live with optimal health, chiropractic care can help!
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/neck-and-back-pain-treatment-near-me-1-1.png"
              alt="Spine health education"
              width={800}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-[30px] lg:text-[38.4px] text-[#58585A] text-center mb-12"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
          >
            Our Chiropractic Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Chiropractic Care', href: '/services/chiropractic-care' },
              { name: 'Pediatric Care', href: '/services/pediatric-care' },
              { name: 'Prenatal Care', href: '/services/prenatal-care' },
              { name: 'Athlete Care', href: '/services/athlete-care' },
              { name: 'Auto Injury Care', href: '/services/auto-accident-care' },
              { name: 'SoftWave Therapy', href: '/services/softwave-therapy' },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <h3
                  className="text-[20px] text-[#58585A] font-semibold"
                  style={{ fontFamily: 'Roboto, sans-serif' }}
                >
                  {service.name}
                </h3>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/services" className="btn-gold">
              VIEW ALL SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#DBC195] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[30px] lg:text-[38.4px] text-white mb-4"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
          >
            Book Your Appointment!
          </h2>
          <p
            className="text-white mb-6 text-[18px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Get started on your path to optimal health today.
          </p>
          <a
            href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
            className="bg-white text-[#C4A069] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-block uppercase"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            SCHEDULE NOW
          </a>
        </div>
      </section>
    </>
  );
}
