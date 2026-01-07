import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports Chiropractic Care in Minot | CornerStone Chiropractic",
  description: "Athletes who want a competitive edge and be at the top of their game are seeing our Chiropractic team. Sports chiropractic care for all sports, all ages, all levels.",
};

export default function AthleteCarePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Sports Chiropractic Care in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Top Sports Chiropractor in Minot
          </h2>
          <div className="text-center">
            <Link
              href="/book-appointment"
              className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Chiropractic Care for Athletes */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Chiropractic Care for Athletes
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6 text-center">
            Having an active lifestyle is important for overall health. However, activity comes with its wear and tear on the body. Aches, pains, misalignments, and injuries can result from physical activity. Sports, working out, and being active can all turn into issues that you want to stay on top of so you can stay at peak performance.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed text-center">
            Athletes who want a competitive edge and be at the top of their game are seeing our Chiropractic team, and you should too!
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">All Sports</h3>
              <p className="text-[#58585A]">
                All sports can be hard on the body in different ways. Seeing a chiropractor can help you heal and keep going strong.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">All Ages</h3>
              <p className="text-[#58585A]">
                From young kids, to high school athletes, to retirees, all bodies feel the impact of playing sports and can benefit from chiropractic care.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">All Levels</h3>
              <p className="text-[#58585A]">
                Regardless if you&apos;re in little league or a professional athlete, chiropractic care can help take care of your body from sports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            While participating in sports has many health benefits, there are also many risks. Sports Chiropractic Care can help prevent and heal sports-related injuries as well as optimize your body for improved performance.
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Top Sports Chiropractor in the Minot Area
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Athletes of all ages can benefit from the services of a sports Chiropractor. Keeping your body in top condition will lead to optimal performance in sports. Sports injuries can have serious consequences, so if you or your child are involved in sporting activities, consulting a sports chiropractor is an effective method for preventing potentially serious injuries.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Book Your Appointment!
          </h2>
          <p className="text-white text-lg mb-6">
            Get started on your path to optimal health today.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Schedule Now
          </Link>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Top Sports Chiropractic Care in Minot
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you&apos;re an athlete or physically active, our Chiropractic team in Minot is here to help keep you in tip-top shape. We specialize in sports chiropractic care and can help with issues such as:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Aches and pains
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Misalignments
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Injuries
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            No matter what type of physical activity you enjoy, we can help you stay healthy and perform your best. Our team specializes in working with athletes and those that are trying to live active lifestyles. We want to help you stay at peak performance.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Benefits of Sports Chiropractic Care
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Why should athletes see a Chiropractor? Active lifestyles take a toll on the body. All the additional movement and activity can prevent your body from recovering properly. To stay at peak performance, you want your body to be well aligned, increase mobility, be pain-free, and recover quickly from your workouts. Chiropractic care can help.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            As you exercise, your joints and spine can take on wear and tear. Misalignments happen all the time. This puts pressure on your muscles, tendons, ligaments, and nerves. This pressure can cause pain and decreased performance. Chiropractic care helps to restore proper alignment of your spine, decrease muscle tension, and improve your range of motion.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Chiropractors are specifically trained to help with sports injuries. We can help you recover quickly from strains, sprains, and other injuries. We will also work to prevent future injuries from occurring.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            If you&apos;re an athlete or physically active person, don&apos;t wait until you&apos;re injured to see a chiropractor. Make an appointment today and start feeling better tomorrow. You&apos;ll be amazed at the difference chiropractic care can make in your overall health and performance!
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How Chiropractors Treat Athletes
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Our chiropractic team in Minot performs full evaluations of your spine, joints, ligaments, and muscles, to find any potential issues holding you back from peak performance. We treat those areas through spinal adjustments.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            An adjustment is a manual maneuver used to correct misalignments and restore proper alignment of the spine. Chiropractors use their hands to apply a gentle force to the joint, which helps to improve mobility and decrease pain.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Adjustments are safe and effective for all athletes, from weekend warriors to Olympians. We have helped countless athletes achieve their personal best by correcting misalignments and helping them recover quickly from injuries.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Chiropractor for Sports Injuries in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Playing sports is hard on the body. Many times this can lead to injuries or damage to muscles, joints, and ligaments. We see a lot of athletes from all sports that benefit from chiropractic care. Whether you&apos;re weightlifting, competing in a contact sport, officiating a game, or training with your team, injuries happen all the time, and it&apos;s important to get them treated right away to minimize the damage and expedite your recovery.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Some of the most common sports injuries include:
          </p>
          <ul className="grid md:grid-cols-2 gap-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Strains
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Sprains
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Shin splints
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Runner&apos;s knee
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Shoulder strains
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tennis/golfer&apos;s elbow
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Achilles tendinitis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Bursitis
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscle tears
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Joint dislocation
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Perform Your Best?
          </h2>
          <p className="text-white text-lg mb-8">
            Contact us today to schedule your sports chiropractic appointment.
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
