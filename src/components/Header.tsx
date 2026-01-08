'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const servicesMenu = [
  { name: 'Chiropractic Care', href: '/services/chiropractic-care' },
  { name: 'Pediatric Care', href: '/services/pediatric-care' },
  { name: 'Prenatal Care', href: '/services/prenatal-care' },
  { name: 'Athlete Care', href: '/services/athlete-care' },
  { name: 'Auto Injury Care', href: '/services/auto-accident-care' },
  { name: 'Cold Laser Therapy', href: '/coldlaser' },
  { name: 'Hyperbaric Oxygen Therapy', href: '/hyperbaric' },
  { name: 'Wellness Care', href: '/services/wellness-care' },
  { name: 'SoftWave Therapy', href: '/services/softwave-therapy' },
  { name: 'Spinal Decompression', href: '/services/spinal-decompression' },
];

const symptomsMenu = [
  { name: 'Back Pain', href: '/symptoms/back-pain' },
  { name: 'Neck Pain', href: '/symptoms/neck-pain' },
  { name: 'Headaches & Migraines', href: '/symptoms/headaches' },
  { name: 'Hip Pain', href: '/symptoms/hip-pain' },
  { name: 'Sciatica', href: '/symptoms/sciatica' },
  { name: 'Knee Pain', href: '/symptoms/knee-pain' },
  { name: 'Shoulder Pain', href: '/symptoms/shoulder-pain' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Desktop Header - Logo spanning both rows */}
      <div className="hidden lg:block py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch">
            {/* Logo - spans both rows */}
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Image
                src="/images/logo-gold-3CMYK.png"
                alt="CornerStone Chiropractic"
                width={500}
                height={250}
                className="h-[130px] w-auto"
                priority
              />
            </Link>

            {/* Right side - two rows */}
            <div className="flex-1 flex flex-col justify-between ml-6" style={{ gap: '4px' }}>
              {/* Top row - Book Button then Phone */}
              <div className="flex justify-end items-center gap-3">
                <a
                  href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#C4A069] text-white px-6 py-3 rounded-full font-bold text-[15px] uppercase whitespace-nowrap hover:bg-[#B08F5B] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  BOOK APPOINTMENT
                </a>
                <a
                  href="tel:+17018522800"
                  className="inline-flex items-center gap-2 bg-[#DBC195] text-white px-6 py-3 rounded-full font-bold text-[15px] whitespace-nowrap hover:bg-[#d0b485] transition-colors"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  (701) 852-2800
                </a>
              </div>

              {/* Bottom row - Navigation */}
              <div className="flex justify-end items-end">
                <div className="flex items-center space-x-1 flex-nowrap">
                  <Link href="/about" className="nav-link px-4 py-2 text-[16px] font-medium whitespace-nowrap">About</Link>

                  <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link px-4 py-2 text-[16px] font-medium flex items-center whitespace-nowrap">
                      Services
                      <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === 'services' && (
                      <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                        {servicesMenu.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative" onMouseEnter={() => setActiveDropdown('symptoms')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link px-4 py-2 text-[16px] font-medium flex items-center whitespace-nowrap">
                      Symptoms
                      <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === 'symptoms' && (
                      <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                        {symptomsMenu.map((item) => (
                          <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="relative" onMouseEnter={() => setActiveDropdown('videos')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link px-4 py-2 text-[16px] font-medium flex items-center whitespace-nowrap">
                      Videos
                      <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === 'videos' && (
                      <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                        <Link href="/videos" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">All Videos</Link>
                        <Link href="/videos/education" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">Education Videos</Link>
                      </div>
                    )}
                  </div>

                  <div className="relative" onMouseEnter={() => setActiveDropdown('new-patients')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link px-4 py-2 text-[16px] font-medium flex items-center whitespace-nowrap">
                      New Patients
                      <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === 'new-patients' && (
                      <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                        <Link href="/new-patients" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">New Patient Info</Link>
                        <Link href="/new-patients/forms" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">Patient Forms</Link>
                        <Link href="/new-patients/what-to-expect" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">What to Expect</Link>
                      </div>
                    )}
                  </div>

                  <div className="relative" onMouseEnter={() => setActiveDropdown('resources')} onMouseLeave={() => setActiveDropdown(null)}>
                    <button className="nav-link px-4 py-2 text-[16px] font-medium flex items-center whitespace-nowrap">
                      Resources
                      <svg className="ml-1 h-4 w-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === 'resources' && (
                      <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                        <Link href="/faq" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">FAQ</Link>
                        <Link href="/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">Blog</Link>
                        <Link href="/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069] whitespace-nowrap">Contact Us</Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <nav className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-gold-3CMYK.png"
              alt="CornerStone Chiropractic"
              width={200}
              height={100}
              className="h-[60px] w-auto"
              priority
            />
          </Link>

          <button className="p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="py-4 border-t">
            <div className="space-y-2">
              <Link href="/about" className="block px-4 py-2 text-gray-700">About</Link>
              <Link href="/services/chiropractic-care" className="block px-4 py-2 text-gray-700">Services</Link>
              <Link href="/symptoms/back-pain" className="block px-4 py-2 text-gray-700">Symptoms</Link>
              <Link href="/education-videos" className="block px-4 py-2 text-gray-700">Videos</Link>
              <Link href="/new-patients" className="block px-4 py-2 text-gray-700">New Patients</Link>
              <Link href="/contact" className="block px-4 py-2 text-gray-700">Contact</Link>
              <div className="px-4 pt-4">
                <a href="tel:+17018522800" className="block text-[#C4A069] font-medium mb-3">(701) 852-2800</a>
                <a href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c" target="_blank" rel="noopener noreferrer" className="btn-gold block text-center">BOOK APPOINTMENT</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
