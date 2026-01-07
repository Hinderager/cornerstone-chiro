import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Overuse Injury Treatment in Minot | CornerStone Chiropractic",
  description: "Repetitive motion and overuse injuries are among the most common conditions seen by chiropractors. Our team in Minot specializes in treating overuse injuries.",
};

export default function OveruseInjuryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Overuse Injury Treatment in Minot
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Overuse Injury Relief in Minot
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

      {/* Intro Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-[#131313] text-center mb-8 font-montserrat">
            Chiropractic Care for Overuse Injuries in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Repetitive motion and overuse injuries are among the most common conditions seen by chiropractors. These types of injuries often occur in people who participate in sports or have jobs that require repetitive motions. Overuse injuries can also occur from everyday activities such as gardening or even typing on a keyboard.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed mb-6">
            Chiropractic care is an effective treatment for overuse injuries. Our chiropractors in Minot use a variety of techniques to treat overuse injuries, including adjustments, manual therapies, and exercises. Adjustments help to reduce pain and improve range of motion. Manual therapies can help to decrease inflammation and speed up the healing process. Exercises are used to stretch and strengthen the muscles and tissues around the injured area.
          </p>
          <p className="text-[#58585A] text-lg leading-relaxed">
            If you have an overuse injury, our chiropractors in Minot will work with you to create a treatment plan that is specifically tailored to your condition.
          </p>
        </div>
      </section>

      {/* Features Cards */}
      <section className="py-16 bg-[#F5F5F5]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Find The Root Cause</h3>
              <p className="text-[#58585A]">
                Get to the bottom of what&apos;s causing your pain and discomfort so we can build a plan to get you feeling great again.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Custom Care Plan</h3>
              <p className="text-[#58585A]">
                We&apos;ll help build you a plan of action to get your pain under control and getting you and your body feeling 100%.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <h3 className="text-2xl font-bold text-[#131313] mb-4 font-montserrat">Preventative Care</h3>
              <p className="text-[#58585A]">
                If needed, we&apos;ll establish preventative measures to keep your problem from coming back so you can stay healthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Chiropractors work to keep a body in alignment so your knees can function normally without pain. They are experts in recognizing the source of a problem and building short and long term solutions. If you&apos;re experiencing an overuse injury, book your appointment today!
          </p>

          <h2 className="text-3xl font-bold text-[#131313] mb-6 font-montserrat">
            Treatment for Overuse Injury in Minot
          </h2>
          <p className="text-[#58585A] text-lg leading-relaxed mb-8">
            Many people in Minot experience major pain relief from their overuse injury with chiropractic care. Using our gentle adjusting techniques, we can help you escape the pain and get back to feeling great again. Book an appointment now to schedule a time with our chiropractic care team.
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
            What is an Overuse Injury?
          </h2>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Overuse injuries are a type of injury that occurs when you overdo it with activity and your body can&apos;t handle the stress. This type of injury is common in athletes who train intensely or participate in repetitive motions. Overuse injuries often happen gradually, which can make them difficult to detect and treat.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Sometimes overuse injuries can be caused by a single, traumatic event. But more often, they&apos;re the result of repetitive stress on your body over time. This type of injury is also called an overuse syndrome or cumulative trauma disorder (CTD).
          </p>
          <p className="text-[#58585A] leading-relaxed mb-8">
            Overuse injuries often affect tendons, the tissues that connect muscles to bones. They can also affect muscles, ligaments, and joints.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common overuse injuries include:
          </h3>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Achilles tendonitis:</strong> inflammation of the Achilles tendon, the large tendon at the back of your ankle</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Patellar tendonitis:</strong> inflammation of the patellar tendon, which connects your knee cap to your shin bone</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Tennis elbow:</strong> inflammation of the tendons in your elbow, usually from repetitive motions of the arm and wrist</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Golfer&apos;s elbow:</strong> inflammation of the tendons in your elbow, usually from overuse of the muscles in your forearm</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Shoulder impingement:</strong> compression of the shoulder muscles and tendons</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Common Causes of Overuse Injury
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Several factors can contribute to overuse injuries, including:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Poor form or technique during an activity
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Lack of warm-ups or cool-downs
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Muscular imbalances
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Poor footwear
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Increased intensity or duration of an activity
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Symptoms of Overuse Injury
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            When an overuse injury occurs, it can cause:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Pain and discomfort
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Swelling
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Tenderness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Limited range of motion and mobility
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Loss of sensation, numbness
            </li>
            <li className="flex items-center text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3"></span>
              Loss of strength
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed mb-8">
            You may not experience noticeable symptoms at first, as they gradually get worse over time. If you are active or find yourself repeating similar activities or motions frequently, it&apos;s important to pay attention to the impact this has on your body so you can try and catch any overuse injuries from developing and progressing.
          </p>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            How to Prevent an Overuse Injury
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-4">
            There are a few things you can do to prevent overuse injuries, including:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Wearing the proper gear:</strong> Make sure you have the right shoes and other gear for your activity.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Proper form:</strong> Use good technique when you&apos;re participating in an activity. Avoiding jerking motions or over-extending your joints.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Warm-ups and cool-downs:</strong> Always warm up before you participate in any activity. This helps increase blood flow to your muscles and reduces your risk of injury. After you&apos;re done with your activity, make sure to cool down so your muscles don&apos;t tighten up.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Stretching:</strong> Incorporate regular stretching into your routine. This will help improve your flexibility and reduce your risk of overuse injuries.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Cross-training:</strong> Don&apos;t overdo it with any one activity. Mix up your routine so you&apos;re not putting too much stress on one area of your body.</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-[#131313] mb-6 font-montserrat">
            Treatment for Overuse Injury in Minot
          </h3>
          <p className="text-[#58585A] leading-relaxed mb-6">
            If you think you may have an overuse injury, the first step is to see our chiropractor for an evaluation. They will ask about your symptoms and how they started. They will also perform a physical exam.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-6">
            Once a diagnosis has been made, our chiropractor in Minot will develop a treatment plan that is specific to your needs. Treatment options can vary depending on the type and severity of your overuse injury.
          </p>
          <p className="text-[#58585A] leading-relaxed mb-4">
            Common treatments for overuse injuries include:
          </p>
          <ul className="space-y-3 mb-8">
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Rest:</strong> It&apos;s important to rest the affected area to allow it to heal. This may mean taking a break from your usual activities or sports.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Ice:</strong> Applying ice to the affected area can help reduce pain and swelling.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Heat:</strong> Applying heat to the affected area can help loosen tight muscles and reduce pain.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Stretching and strengthening exercises:</strong> Specific exercises can help improve flexibility and strength.</span>
            </li>
            <li className="flex items-start text-[#58585A]">
              <span className="w-2 h-2 bg-[#C4A069] rounded-full mr-3 mt-2"></span>
              <span><strong>Chiropractic care:</strong> Chiropractic adjustment can help relieve pain and improve range of motion.</span>
            </li>
          </ul>
          <p className="text-[#58585A] leading-relaxed">
            If you&apos;re experiencing symptoms of an overuse injury, don&apos;t wait to seek treatment. Our chiropractors in Minot can help diagnose and treat your condition so you can get back to your normal activities as soon as possible.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Chiropractic Care in Minot for Overuse Injury
          </h2>
          <p className="text-white text-lg mb-8">
            Get in touch with us today and book your appointment!
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
