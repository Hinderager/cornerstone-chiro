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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo-gold-3CMYK.png"
              alt="CornerStone Chiropractic"
              width={250}
              height={124}
              className="h-[80px] w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-2">
            <Link href="/about" className="nav-link px-4 py-2 text-[17px] font-medium">About</Link>

            <div className="relative" onMouseEnter={() => setActiveDropdown('services')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="nav-link px-4 py-2 text-[17px] font-medium flex items-center">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute left-0 mt-0 w-64 bg-white shadow-lg rounded-md py-2 z-50">
                  {servicesMenu.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069]">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setActiveDropdown('symptoms')} onMouseLeave={() => setActiveDropdown(null)}>
              <button className="nav-link px-4 py-2 text-[17px] font-medium flex items-center">
                Symptoms
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'symptoms' && (
                <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                  {symptomsMenu.map((item) => (
                    <Link key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#C4A069]">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/videos" className="nav-link px-4 py-2 text-[17px] font-medium">Videos</Link>
            <Link href="/new-patients" className="nav-link px-4 py-2 text-[17px] font-medium">New Patients</Link>
            <Link href="/faq" className="nav-link px-4 py-2 text-[17px] font-medium">Resources</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+17018522800" className="text-[#58585A] font-medium text-sm">(701) 852-2800</a>
            <a href="https://portal.sked.life/new-patient/?key=b6e1a8127fac8d99ea72eacef6dbe9f8e19b626781b488998d36f67c6dcdd68c" target="_blank" rel="noopener noreferrer" className="btn-gold flex items-center gap-2 text-sm">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              BOOK APPOINTMENT
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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
          <div className="lg:hidden py-4 border-t">
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
