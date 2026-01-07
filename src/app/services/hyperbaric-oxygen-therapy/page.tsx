import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hyperbaric Oxygen Therapy in Minot | CornerStone Chiropractic",
  description: "Experience hyperbaric oxygen therapy at CornerStone Chiropractic in Minot. Accelerate healing and recovery with increased oxygen delivery to your tissues.",
};

export default function HyperbaricOxygenTherapyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Hyperbaric Oxygen Therapy in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Accelerate Your Body&apos;s Healing
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

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What is Hyperbaric Oxygen Therapy?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Hyperbaric Oxygen Therapy (HBOT) is a treatment where you breathe pure oxygen in a pressurized chamber. The increased pressure allows your lungs to absorb significantly more oxygen than breathing pure oxygen at normal atmospheric pressure.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            This oxygen-rich blood travels throughout your body, stimulating healing and fighting infection. At CornerStone Chiropractic, we offer this advanced therapy to help accelerate your recovery and improve your overall wellness.
          </p>
        </div>
      </section>

      {/* Benefits Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Benefits of Hyperbaric Oxygen Therapy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Enhanced Healing</h3>
              <p className="text-[#58585A]">
                Increased oxygen promotes faster tissue repair and regeneration.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Reduced Inflammation</h3>
              <p className="text-[#58585A]">
                Help reduce swelling and inflammation throughout the body.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Improved Recovery</h3>
              <p className="text-[#58585A]">
                Speed up recovery from injuries, surgeries, and workouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Who Can Benefit from HBOT?
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Hyperbaric oxygen therapy can benefit a wide range of individuals and conditions:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Athletes recovering from injuries or intense training
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Post-surgical recovery
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Chronic fatigue and low energy
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Wounds that are slow to heal
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Brain injuries and concussions
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              General wellness and anti-aging
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Try Hyperbaric Oxygen Therapy
          </h2>
          <p className="text-white text-lg mb-6">
            Discover the healing benefits of increased oxygen delivery.
          </p>
          <Link
            href="/book-appointment"
            className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
          >
            Book Appointment
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            What to Expect During HBOT
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            During a hyperbaric oxygen therapy session, you&apos;ll relax comfortably in our hyperbaric chamber. The chamber is pressurized gradually, and you&apos;ll breathe normally while your body absorbs the increased oxygen.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Sessions typically last 60-90 minutes, during which you can relax, listen to music, or rest. Many patients find the experience comfortable and even enjoyable. You may feel a slight pressure in your ears (similar to flying in an airplane), which can be relieved by swallowing or yawning.
          </p>
          <p className="text-[#58585A] leading-relaxed">
            The number of sessions recommended will depend on your individual condition and goals. Our team will work with you to create a personalized treatment plan.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Hyperbaric Oxygen Therapy in Minot
          </h2>
          <p className="text-white text-lg mb-8">
            Get started on your path to optimal health today!
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
