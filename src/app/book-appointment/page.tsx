import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Book Appointment | CornerStone Chiropractic",
  description: "Book your appointment at CornerStone Chiropractic in Minot, ND. Call or text (701) 852-2800 or schedule online.",
};

export default function BookAppointmentPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Book Appointment
          </h1>
          <p className="text-xl text-[#58585A] text-center max-w-2xl mx-auto">
            Get started on your path to optimal health today
          </p>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Options */}
              <div>
                <h2 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
                  Schedule Your Visit
                </h2>
                <p className="text-[#58585A] mb-8">
                  Ready to take the first step toward better health? We make it easy to schedule your appointment. Choose the option that works best for you:
                </p>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold text-[#131313] mb-2">Call or Text</h3>
                    <a
                      href="tel:701-852-2800"
                      className="text-2xl text-[#C4A069] font-bold hover:underline"
                    >
                      (701) 852-2800
                    </a>
                    <p className="text-[#58585A] mt-2 text-sm">
                      Our team is available during business hours to help you schedule your appointment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <h3 className="text-xl font-bold text-[#131313] mb-2">Visit Our Office</h3>
                    <a
                      href="https://maps.google.com/?q=1515+24th+Ave+SW,+Minot,+ND+58701"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#C4A069] hover:underline"
                    >
                      1515 24th Ave SW, Minot, ND 58701
                    </a>
                    <p className="text-[#58585A] mt-2 text-sm">
                      Stop by during business hours to schedule your appointment in person.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-[#131313] mb-4 font-montserrat">
                    Office Hours
                  </h3>
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
                      <span>Saturday - Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Appointment Form */}
              <div>
                <h2 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
                  Request an Appointment
                </h2>
                <form className="space-y-6 bg-white p-8 rounded-lg shadow-md border border-gray-100">
                  <div>
                    <label htmlFor="name" className="block text-[#131313] font-medium mb-2">
                      Full Name *
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
                      Phone Number *
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
                      Email Address *
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
                    <label htmlFor="service" className="block text-[#131313] font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
                    >
                      <option value="">Select a service</option>
                      <option value="chiropractic">Chiropractic Care</option>
                      <option value="pediatric">Pediatric Care</option>
                      <option value="prenatal">Prenatal Care</option>
                      <option value="athlete">Sports/Athlete Care</option>
                      <option value="auto">Auto Accident Care</option>
                      <option value="softwave">SoftWave Therapy</option>
                      <option value="invisared">InvisaRED</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-[#131313] font-medium mb-2">
                      Additional Information
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#C4A069]"
                      placeholder="Tell us about your symptoms or concerns..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#C4A069] text-white py-4 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
                  >
                    Request Appointment
                  </button>
                  <p className="text-sm text-[#58585A] text-center">
                    We&apos;ll contact you within 24 hours to confirm your appointment.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Patient Special */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-[#131313] mb-4 font-montserrat">
            New Patient Special
          </h2>
          <p className="text-4xl font-bold text-[#C4A069] mb-4">$89</p>
          <p className="text-[#58585A] max-w-2xl mx-auto mb-8">
            Includes consultation, full chiropractic exam, x-rays (if needed), central nervous system scan, adjustment, report of findings, and care recommendations.
          </p>
          <Link
            href="/new-patients"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Find Us
          </h2>
          <div className="max-w-4xl mx-auto">
            <iframe
              src="https://maps.google.com/maps?q=CornerStone+Chiropractic+1515+24th+Ave+SW+Minot+ND&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
