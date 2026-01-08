import Image from 'next/image';
import Link from 'next/link';
import LazyYouTube from '@/components/LazyYouTube';

export default function Home() {
  return (
    <>
      {/* Hero Section with Swooping curve through tiles */}
      <div className="relative">
        {/* Hero Content Area - matches original: 739px height, 250px bottom padding */}
        <section className="relative overflow-visible" style={{ minHeight: '739px', paddingTop: '100px', paddingBottom: '250px' }}>
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/chiropractor-in-minot.webp)',
              filter: 'brightness(0.85)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#b8d4df]/90 via-[#c5dce5]/80 to-transparent" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="hero-title text-[42px] lg:text-[52px] mb-4 leading-[1.2]">
                  Chiropractor in Minot, ND
                </h1>
                <p className="hero-subtitle text-[22px] lg:text-[28px] mb-8 leading-[1.5]">
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
                  <LazyYouTube videoId="npblGaOUP9s" title="CornerStone Chiropractic" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Action Cards - overlap hero so wave cuts through middle */}
        <section className="relative z-20 pb-12" style={{ marginTop: '-180px' }}>
          {/* Swooping wave - more shallow curve */}
          <div className="absolute inset-x-0 z-0" style={{ top: '20px', height: '300px' }}>
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              <path
                d="M0,20 C360,70 720,10 1080,50 C1260,70 1380,40 1440,30 L1440,120 L0,120 Z"
                fill="white"
              />
            </svg>
          </div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Meet The Team Card */}
            <div className="bg-white rounded-xl shadow-lg p-10 text-center card-hover">
              <div className="flex justify-center mb-5">
                <svg className="w-[60px] h-[60px] text-[#58585A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  <path d="M9 11V9h6v2H9zm0 2v4h6v-4H9z" opacity="0.3"/>
                </svg>
              </div>
              <h3
                className="text-[24px] lg:text-[30px] font-semibold text-[#58585A] mb-4"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}
              >
                Meet The Team
              </h3>
              <p className="text-[#58585A] mb-5 text-[18px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Meet our dedicated health care team at CornerStone Chiropractic in Minot, ND.
              </p>
              <Link
                href="/about"
                className="learn-more-link inline-flex items-center gap-2 text-[18px]"
              >
                learn more <span className="text-[#C4A069]">→</span>
              </Link>
            </div>

            {/* Book Appointment Card */}
            <div className="bg-white rounded-xl shadow-lg p-10 text-center card-hover">
              <div className="flex justify-center mb-5">
                <svg className="w-[60px] h-[60px] text-[#58585A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3
                className="text-[24px] lg:text-[30px] font-semibold text-[#58585A] mb-4"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}
              >
                Book Appointment
              </h3>
              <p className="text-[#58585A] mb-5 text-[18px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Book your Chiropractic appointment online using our online scheduling tool.
              </p>
              <Link
                href="/book-appointment"
                className="learn-more-link inline-flex items-center gap-2 text-[18px]"
              >
                learn more <span className="text-[#C4A069]">→</span>
              </Link>
            </div>

            {/* Videos Card */}
            <div className="bg-white rounded-xl shadow-lg p-10 text-center card-hover">
              <div className="flex justify-center mb-5">
                <svg className="w-[60px] h-[60px] text-[#58585A]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
                </svg>
              </div>
              <h3
                className="text-[24px] lg:text-[30px] font-semibold text-[#58585A] mb-4"
                style={{ fontFamily: 'Roboto, sans-serif', fontWeight: 600 }}
              >
                Short Videos
              </h3>
              <p className="text-[#58585A] mb-5 text-[18px]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Short educational tips from the Doctors at CornerStone Chiropractic.
              </p>
              <Link
                href="/videos"
                className="learn-more-link inline-flex items-center gap-2 text-[18px]"
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
            <Image src="/images/patient-1.webp" alt="Patient at CornerStone" width={300} height={533} className="rounded-lg object-cover w-full" style={{ aspectRatio: '9/16' }} loading="lazy" />
            <Image src="/images/patient-2.webp" alt="Patient at CornerStone" width={300} height={533} className="rounded-lg object-cover w-full" style={{ aspectRatio: '9/16' }} loading="lazy" />
            <Image src="/images/patient-3.webp" alt="Patient at CornerStone" width={300} height={533} className="rounded-lg object-cover w-full" style={{ aspectRatio: '9/16' }} loading="lazy" />
            <Image src="/images/patient-4.webp" alt="Patient at CornerStone" width={300} height={533} className="rounded-lg object-cover w-full" style={{ aspectRatio: '9/16' }} loading="lazy" />
          </div>
        </div>
      </section>

      {/* Chiropractic Care Section */}
      <section className="pt-16 pb-0 bg-white overflow-visible">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div className="pb-16">
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
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -top-4 left-0 w-20 h-20 bg-[#DBC195] rounded-full opacity-70 z-20"></div>
                <Image
                  src="/images/about.webp"
                  alt="Dr. William Fielhaber and Dr. Matt Hanson"
                  width={800}
                  height={752}
                  className="relative z-10"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Patient Special CTA */}
      <section className="bg-[#DBC195] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <h2
                className="text-[30px] lg:text-[38.4px] text-white mb-2"
                style={{ fontFamily: 'Merriweather, serif', fontWeight: 600, fontStyle: 'italic' }}
              >
                New Patient Special!
              </h2>
              <p
                className="text-white text-[18px]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                $89 for your first complete Chiropractic consultation.
              </p>
            </div>
            <a
              href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
              className="inline-flex items-center gap-2 bg-white text-[#C4A069] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors uppercase whitespace-nowrap"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              LEARN MORE
            </a>
          </div>
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
              src="/images/neck-back-pain-treatment.webp"
              alt="Spine health education"
              width={800}
              height={400}
              className="rounded-lg"
              loading="lazy"
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

      {/* Community Spotlight */}
      <section>
        {/* Gold Header */}
        <div className="bg-[#DBC195] py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-[30px] lg:text-[38.4px] text-white mb-4"
              style={{ fontFamily: 'Merriweather, serif', fontWeight: 600, fontStyle: 'italic' }}
            >
              Community Spotlight!
            </h2>
            <p
              className="text-white text-[18px] leading-[1.8]"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              We strive to keep our community healthy and do this in our work and philanthropy. We are proud to give back to the community that has kept us running for over 20 years!
            </p>
          </div>
        </div>

        {/* Logo Carousel Section */}
        <div className="bg-white py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center items-center gap-8 lg:gap-16 flex-wrap">
              <Image
                src="/images/wee-links-logo.webp"
                alt="WeeLinks Indoor Haven"
                width={150}
                height={100}
                className="object-contain"
                loading="lazy"
              />
              <Image
                src="/images/community-1.webp"
                alt="Take Aim Benchmark 2024"
                width={150}
                height={150}
                className="object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Two Column Text Section */}
        <div className="bg-white pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <p
                  className="text-[#58585A] mb-4 text-[16px] leading-[1.8]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  We always talk about how being active is one of the best things you can do for yourself so of course we support a few teams!
                </p>
                <p
                  className="text-[#58585A] mb-6 text-[16px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <a href="#" className="underline hover:text-[#C4A069]">Minot High Tennis</a>,{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">Minot Jr. Golf Association (WeeLinks)</a>, &{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">Hot Tots</a>.
                </p>
                <p
                  className="text-[#58585A] mb-4 text-[16px] leading-[1.8]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Not everyone has access to the same information and care as others but we are happy to support programs that help bridge the gap!
                </p>
                <p
                  className="text-[#58585A] text-[16px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <a href="#" className="underline hover:text-[#C4A069]">Minot Public Library</a>,{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">Dakota Hope Clinic</a>, &{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">Project Bee</a>.
                </p>
              </div>

              {/* Right Column */}
              <div>
                <p
                  className="text-[#58585A] mb-6 text-[16px] leading-[1.8]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <a href="#" className="underline hover:text-[#C4A069]">Take Aim</a> is a charity that supports veterans and first responders all while having fun and shooting guns. If you go to this charity event, you&apos;re likely to see most of us out there as well!
                </p>
                <p
                  className="text-[#58585A] mb-4 text-[16px] leading-[1.8]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Another great way to get active and support a good cause is a 5K or walk!
                </p>
                <p
                  className="text-[#58585A] text-[16px]"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <a href="#" className="underline hover:text-[#C4A069]">Brooke Schroeder Memorial Walk</a>,{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">Lend-A-Paw 5k Color Run</a>,{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">Suicide Prevention Walk</a>, &{' '}
                  <a href="#" className="underline hover:text-[#C4A069]">BurliMOT 5K</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chiropractic Care in Minot - Full Width */}
      <section className="relative py-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/chiropractor-in-minot.webp)',
          }}
        />
        <div className="absolute inset-0 bg-[#606060]/70" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20">
          <h2
            className="text-[32px] lg:text-[42px] text-white mb-6"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 700 }}
          >
            Chiropractic Care in Minot
          </h2>
          <p
            className="text-white mb-6 text-[16px] lg:text-[18px] leading-[1.9]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Chiropractic care is a holistic way to deal with all sorts of health-related problems. Your spine is the highway for signals throughout the body and keeping it healthy and aligned helps your body achieve optimal health. Our Chiropractic clinic in Minot is dedicated to helping you avoid medications and surgeries by using proven holistic methods with Chiropractic care.
          </p>
          <p
            className="text-white text-[16px] lg:text-[18px]"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            Book your appointment to get started today.
          </p>
        </div>
      </section>

      {/* What Patients Are Saying */}
      <section className="pt-8 pb-6 bg-[#D8D8D8]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-[28px] lg:text-[36px] text-[#4A4A4A]"
            style={{ fontFamily: 'Merriweather, serif', fontWeight: 600, fontStyle: 'italic' }}
          >
            What Patients Are Saying
          </h2>
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

      {/* Family Chiropractor Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2
                className="text-[30px] lg:text-[38.4px] text-[#58585A] mb-6"
                style={{ fontFamily: 'Merriweather, serif', fontWeight: 600 }}
              >
                Family Chiropractor in Minot, ND
              </h2>
              <p
                className="text-[#58585A] mb-6 text-[18px] leading-[1.8]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Welcome to CornerStone Chiropractic in Minot. Chiropractic is one of the most amazing healthcare professions that takes a holistic approach to healthcare that can help you tackle challenging health issues in a holistic way while improving your overall quality of life.
              </p>
              <p
                className="text-[#58585A] mb-8 text-[18px] leading-[1.8]"
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Let us help you achieve optimal health.
              </p>
              <a
                href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
                className="btn-gold"
              >
                BOOK APPOINTMENT
              </a>
            </div>
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Gold accent circles */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#DBC195] rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-[#C4A069] rounded-full opacity-40"></div>
                {/* Gold ring around image */}
                <div className="w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] rounded-full border-4 border-[#DBC195] p-2">
                  <Image
                    src="/images/back-pain-treatment.webp"
                    alt="Family chiropractic care for back pain"
                    width={450}
                    height={450}
                    className="rounded-full object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
