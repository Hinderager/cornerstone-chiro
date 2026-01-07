import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | CornerStone Chiropractic Minot",
  description: "Frequently asked questions about chiropractic care at CornerStone Chiropractic in Minot. Learn about treatments, what to expect, insurance, and more.",
};

const faqs = [
  {
    question: "What is chiropractic care?",
    answer: "Chiropractic care is a healthcare discipline that focuses on the diagnosis, treatment, and prevention of mechanical disorders of the musculoskeletal system, especially the spine. Chiropractors use hands-on spinal manipulation and other alternative treatments to enable the body to heal itself without surgery or medication."
  },
  {
    question: "Is chiropractic care safe?",
    answer: "Yes, chiropractic care is widely recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal complaints. While no health treatment is completely free of potential adverse effects, the risks associated with chiropractic care are very small compared to other treatments."
  },
  {
    question: "What conditions do chiropractors treat?",
    answer: "Chiropractors treat a wide range of conditions including back pain, neck pain, headaches, migraines, sciatica, sports injuries, whiplash, arthritis, carpal tunnel syndrome, and many other musculoskeletal issues. We also provide wellness care to help maintain optimal health."
  },
  {
    question: "What should I expect on my first visit?",
    answer: "Your first visit will include a comprehensive consultation where we discuss your health history and current concerns. We'll perform a thorough examination and may take X-rays if needed. Based on our findings, we'll develop a personalized treatment plan tailored to your specific needs."
  },
  {
    question: "Do chiropractic adjustments hurt?",
    answer: "Most patients experience little to no discomfort during an adjustment. You may hear a popping or cracking sound, which is simply gas being released from the joint. Some patients experience mild soreness after their first few adjustments, similar to what you might feel after starting a new exercise program."
  },
  {
    question: "How many treatments will I need?",
    answer: "The number of treatments varies depending on your condition, its severity, how long you've had it, and your overall health goals. Some patients experience relief after just a few visits, while others with chronic conditions may require ongoing care. We'll discuss your treatment plan and expected timeline during your consultation."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. We also offer flexible payment options for those without insurance coverage. Our staff will be happy to verify your benefits and explain your coverage options before treatment begins."
  },
  {
    question: "Can children receive chiropractic care?",
    answer: "Absolutely! Chiropractic care is safe and beneficial for patients of all ages, including infants and children. Pediatric adjustments are very gentle and can help with issues like colic, ear infections, and growing pains. Many parents bring their children in for regular wellness checkups."
  },
  {
    question: "What is the popping sound during an adjustment?",
    answer: "The popping or cracking sound you hear during an adjustment is called cavitation. It's simply the release of gas bubbles from the fluid in your joints, similar to the sound when you crack your knuckles. It's completely normal and not harmful."
  },
  {
    question: "How long does an appointment take?",
    answer: "Your first appointment typically takes 45-60 minutes to allow time for a thorough examination and consultation. Follow-up visits usually take 15-30 minutes depending on the treatments included in your care plan."
  },
  {
    question: "Do I need a referral to see a chiropractor?",
    answer: "No, you do not need a referral to see a chiropractor. Chiropractors are primary care providers, meaning you can schedule an appointment directly without a referral from another doctor."
  },
  {
    question: "What should I wear to my appointment?",
    answer: "Wear comfortable, loose-fitting clothing that allows you to move freely. Avoid wearing dresses, skirts, or restrictive clothing. If you're coming from work, we can provide a gown for you to change into."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#F5F5F5] to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#131313] text-center mb-4 font-montserrat">
            Frequently Asked Questions
          </h1>
          <h2 className="text-2xl md:text-3xl text-[#C4A069] text-center mb-8 font-merriweather">
            Your Questions Answered
          </h2>
          <p className="text-[#58585A] text-lg text-center max-w-3xl mx-auto">
            Find answers to common questions about chiropractic care at CornerStone Chiropractic.
            If you don&apos;t see your question here, feel free to contact us.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#131313] mb-3 font-montserrat">
                    {faq.question}
                  </h3>
                  <p className="text-[#58585A] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#3D8AA1]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 font-montserrat">
            Still Have Questions?
          </h2>
          <p className="text-white text-lg mb-6">
            Our friendly staff is happy to answer any questions you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#3D8AA1] px-8 py-3 rounded uppercase font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/book-appointment"
              className="inline-block bg-[#C4A069] text-white px-8 py-3 rounded uppercase font-semibold hover:bg-[#b08d5a] transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#C4A069]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
            Ready to Get Started?
          </h2>
          <p className="text-white text-lg mb-8">
            Schedule your consultation today and take the first step toward better health.
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
