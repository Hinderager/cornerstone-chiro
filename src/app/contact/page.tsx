import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | CornerStone Chiropractic",
  description: "Contact CornerStone Chiropractic in Minot, ND. Call or text (701) 852-2800 or fill out our contact form. Located at 1515 24th Ave SW, Minot, ND 58701.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Contact
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center font-merriweather">
            Get In Touch
          </h2>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <p className="text-[#58585A] mb-4">
                Questions? Fill out the form below.
              </p>
              <p className="text-[#58585A] mb-6">
                Or you can{" "}
                <Link href="/book-appointment" className="text-[#C4A069] hover:underline">
                  book an appointment online
                </Link>
                .
              </p>
              <p className="text-[#58585A] text-sm mb-8">
                For cancellation or rescheduling, please call or text us at{" "}
                <a href="tel:701-852-2800" className="text-[#C4A069] hover:underline">
                  701-852-2800
                </a>{" "}
                instead of using the form.
              </p>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[#131313] font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-[#131313] font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#131313] font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-[#131313] font-medium mb-2">
                    How Can We Help?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
                Contact Details
              </h3>
              <div className="space-y-4 mb-8">
                <p className="text-[#58585A]">
                  <a href="tel:701-852-2800" className="text-[#C4A069] hover:underline text-lg font-semibold">
                    (701) 852-2800
                  </a>{" "}
                  (call/text)
                </p>
                <p className="text-[#58585A]">
                  <a
                    href="https://maps.google.com/?q=1515+24th+Ave+SW,+Minot,+ND+58701"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#C4A069]"
                  >
                    1515 24th Ave SW, Minot, ND 58701
                  </a>
                </p>
              </div>

              <h4 className="text-xl font-bold text-[#131313] mb-4 font-montserrat">
                Clinic Hours
              </h4>
              <div className="space-y-2 text-[#58585A]">
                <div className="flex justify-between">
                  <span>Monday</span>
                  <span>7:30am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Tuesday</span>
                  <span>9:00am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Wednesday</span>
                  <span>7:30am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Thursday</span>
                  <span>7:30am – 6:00pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span>7:30am – 4:30pm</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>Closed</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.4!2d-101.2962!3d48.2303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cf25f0c7c5c5c5%3A0x0!2s1515%2024th%20Ave%20SW%2C%20Minot%2C%20ND%2058701!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-xl font-bold text-[#131313] mb-4 font-montserrat">
                  Follow Us
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/yourcornerstonechiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58585A] hover:text-[#C4A069]"
                  >
                    Facebook
                  </a>
                  <a
                    href="https://www.instagram.com/yourcornerstonechiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58585A] hover:text-[#C4A069]"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://www.youtube.com/@yourcornerstonechiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58585A] hover:text-[#C4A069]"
                  >
                    YouTube
                  </a>
                  <a
                    href="https://www.tiktok.com/@yourcornerstonechiro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#58585A] hover:text-[#C4A069]"
                  >
                    TikTok
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Book Your Appointment?
          </h2>
          <p className="text-white text-lg mb-8">
            Get started on your path to optimal health today.
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
