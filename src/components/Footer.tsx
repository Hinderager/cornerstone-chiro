import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#DBC195]">
      {/* Google Map Section */}
      <div className="w-full h-64">
        <iframe
          src="https://maps.google.com/maps?q=CornerStone+Chiropractic+1515+24th+Ave+SW+Minot+ND&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Us */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <a href="tel:+17018522800" className="flex items-center text-white hover:text-gray-200">
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (701) 852-2800
              </a>
              <p className="flex items-start text-white">
                <svg className="w-5 h-5 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                1515 24th Ave SW, Minot, ND 58701
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4 pt-4">
                <a href="https://facebook.com/cornerstonechiro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/cornerstonechiro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.27.2-6.78,2.71-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.27,2.71,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.27-.2,6.78-2.71,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.27-2.71-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
                  </svg>
                </a>
                <a href="https://youtube.com/@cornerstonechiro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.14C19.5,3.5,12,3.5,12,3.5s-7.5,0-9.38.55A3.02,3.02,0,0,0,.5,6.19,31.64,31.64,0,0,0,0,12a31.64,31.64,0,0,0,.5,5.81,3.02,3.02,0,0,0,2.12,2.14c1.88.55,9.38.55,9.38.55s7.5,0,9.38-.55a3.02,3.02,0,0,0,2.12-2.14A31.64,31.64,0,0,0,24,12,31.64,31.64,0,0,0,23.5,6.19ZM9.5,15.5V8.5l6.25,3.5Z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com/@cornerstonechiro" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59,6.69a4.83,4.83,0,0,1-3.77-4.25V2h-3.45V15.94a2.9,2.9,0,1,1-2-2.75V9.65a6.33,6.33,0,1,0,5.45,6.28V9.13a8.16,8.16,0,0,0,4.77,1.52V7.2A4.85,4.85,0,0,1,19.59,6.69Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Helpful Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Helpful Links</h3>
            <div className="space-y-2">
              <Link href="/book-appointment" className="block text-white hover:text-gray-200">Book Appointment</Link>
              <Link href="/new-patients" className="block text-white hover:text-gray-200">New Patients</Link>
              <Link href="/services" className="block text-white hover:text-gray-200">Services</Link>
              <Link href="/contact" className="block text-white hover:text-gray-200">Contact Us</Link>
              <Link href="/privacy-policy" className="block text-white hover:text-gray-200">Privacy Policy</Link>
              <Link href="/terms-of-service" className="block text-white hover:text-gray-200">Terms of Service</Link>
            </div>
          </div>

          {/* Clinic Hours */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Clinic Hours</h3>
            <div className="space-y-2 text-white">
              <div className="flex justify-between">
                <span>Monday</span>
                <span>7:30am - 6:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Tuesday</span>
                <span>9:00am - 6:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span>7:30am - 6:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Thursday</span>
                <span>7:30am - 6:00pm</span>
              </div>
              <div className="flex justify-between">
                <span>Friday</span>
                <span>7:30am - 4:30pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/20 py-4">
        <div className="max-w-7xl mx-auto px-4 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} CornerStone Chiropractic
        </div>
      </div>
    </footer>
  );
}
